const libraryItems = Array.from({ length: 10 }, (_, index) => {  
  const nomorUrut = index + 1;  
  const nomorTampil = String(nomorUrut).padStart(2, "0");  
  
  return {  
    id: nomorUrut,  
    number: nomorTampil,  
    title: `Ngaji Rumi ${nomorTampil}`,  
    description: "Deskripsi singkat materi ini akan diisi kemudian.",  
    link: "#",  
  };  
});  
  
export default libraryItems;