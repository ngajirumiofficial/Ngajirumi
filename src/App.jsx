import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Perpustakaan from "./pages/Perpustakaan";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/kontak";

import NgajiRumi1 from "./components/Ngajirumi-1";
import NgajiRumi2 from "./components/Ngajirumi-2";
import NgajiRumi3 from "./components/Ngajirumi-3";
import NgajiRumi4 from "./components/Ngajirumi-4";
import NgajiRumi5 from "./components/Ngajirumi-5";

import "./App.css";

function App() {
  // Ganti baris ini agar mengabaikan nama repo di depan URL
  const path = window.location.pathname.replace('/Ngajirumi', '');

  let page;

  if (path === "/profil") {
    page = <Profile />;
  } else if (path === "/perpustakaan") {
    page = <Perpustakaan />;
  } else if (path === "/kontak") {
    page = <Kontak />;
  } else if (path === "/galeri") {
    page = <Galeri />;
  } else if (path === "/ngajirumi-1") {
    page = <NgajiRumi1 />;
  } else if (path === "/ngajirumi-2") {
    page = <NgajiRumi2 />;
  } else if (path === "/ngajirumi-3") {
    page = <NgajiRumi3 />;
  } else if (path === "/ngajirumi-4") {
    page = <NgajiRumi4 />;
  } else if (path === "/ngajirumi-5") {
    page = <NgajiRumi5 />;
  } else {
    page = <Home />;
  }

  return (
    <div className="page">
      <Navbar />

      <main>
        {page}
      </main>

      <Footer />
    </div>
  );
}

export default App;