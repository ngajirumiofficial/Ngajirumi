import heroBg from "../assets/hero-bg.png";

function FrameBackground() {
  return (
    <div className="frame-background" aria-hidden="true">
      <img
        src={heroBg}
        alt=""
        className="frame-background__img"
        loading="eager"
        fetchpriority="high"
        draggable="false"
      />
    </div>
  );
}

export default FrameBackground;