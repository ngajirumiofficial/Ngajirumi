import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 240;

const frames = Array.from(
  { length: TOTAL_FRAMES },
  (_, index) =>
    `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
);

function FrameBackground({ currentFrame }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastDrawnFrameRef = useRef(-1);
  const [loadTrigger, setLoadTrigger] = useState(0);

  // Progressive preloader to avoid clogging the network on initial page load
  useEffect(() => {
    const loadedImages = [];
    let isMounted = true;

    // First load frame 0 to show something immediately
    const img0 = new Image();
    img0.src = frames[0];
    img0.onload = () => {
      if (isMounted) setLoadTrigger((prev) => prev + 1);
    };
    loadedImages[0] = img0;

    // Load the rest of the images in batches
    const BATCH_SIZE = 6;
    let currentIdx = 1;

    const loadNextBatch = () => {
      if (!isMounted || currentIdx >= TOTAL_FRAMES) return;

      const endIdx = Math.min(currentIdx + BATCH_SIZE, TOTAL_FRAMES);
      let loadedInBatch = 0;
      const expectedLoads = endIdx - currentIdx;

      for (let i = currentIdx; i < endIdx; i++) {
        const img = new Image();
        img.src = frames[i];
        img.onload = () => {
          loadedInBatch++;
          if (loadedInBatch === expectedLoads && isMounted) {
            setLoadTrigger((prev) => prev + 1);
            currentIdx = endIdx;
            // Delay next batch slightly to give browser breathing room
            setTimeout(loadNextBatch, 50);
          }
        };
        img.onerror = () => {
          loadedInBatch++;
          if (loadedInBatch === expectedLoads && isMounted) {
            currentIdx = endIdx;
            setTimeout(loadNextBatch, 50);
          }
        };
        loadedImages[i] = img;
      }
    };

    // Start loading batches after a tiny delay
    const startTimer = setTimeout(loadNextBatch, 100);
    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
      clearTimeout(startTimer);
    };
  }, []);

  // Handle drawing to Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get the image for the current frame
    let img = imagesRef.current[currentFrame];

    // Fallback logic: if the target frame isn't loaded yet, try to find the closest loaded frame
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find the closest loaded frame before the current frame
      let fallbackIdx = currentFrame;
      while (fallbackIdx >= 0) {
        const fImg = imagesRef.current[fallbackIdx];
        if (fImg && fImg.complete && fImg.naturalWidth > 0) {
          img = fImg;
          break;
        }
        fallbackIdx--;
      }

      // If still not found, check after the current frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        let fallbackIdx2 = currentFrame;
        while (fallbackIdx2 < TOTAL_FRAMES) {
          const fImg = imagesRef.current[fallbackIdx2];
          if (fImg && fImg.complete && fImg.naturalWidth > 0) {
            img = fImg;
            break;
          }
          fallbackIdx2++;
        }
      }
    }

    // Draw the image
    if (img && img.complete && img.naturalWidth > 0) {
      const w = canvas.width;
      const h = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // object-fit: cover scaling math
      const r = Math.min(w / iw, h / ih);
      let nw = iw * r;
      let nh = ih * r;

      if (nw < w) nw = w;
      if (nh < h) nh = h;

      const cw = iw / (nw / w);
      const ch = ih / (nh / h);

      const cx = (iw - cw) * 0.5;
      const cy = (ih - ch) * 0.5;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, cx, cy, cw, ch, 0, 0, w, h);
      lastDrawnFrameRef.current = currentFrame;
    }
  }, [currentFrame, loadTrigger]);

  // Handle Canvas size adaptation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      
      // Re-draw immediately on resize if we have a frame drawn
      const ctx = canvas.getContext("2d");
      if (ctx && lastDrawnFrameRef.current !== -1) {
        const img = imagesRef.current[lastDrawnFrameRef.current];
        if (img && img.complete && img.naturalWidth > 0) {
          const w = canvas.width;
          const h = canvas.height;
          const iw = img.naturalWidth;
          const ih = img.naturalHeight;

          const r = Math.min(w / iw, h / ih);
          let nw = iw * r;
          let nh = ih * r;

          if (nw < w) nw = w;
          if (nh < h) nh = h;

          const cw = iw / (nw / w);
          const ch = ih / (nh / h);

          const cx = (iw - cw) * 0.5;
          const cy = (ih - ch) * 0.5;

          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(img, cx, cy, cw, ch, 0, 0, w, h);
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(canvas);
    updateSize();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="frame-background" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default FrameBackground;