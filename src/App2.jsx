import './App.css';
import backgroundImage from './assets/tesbg.jpg';
import logo from './assets/teslogo.png';
import btnPengguna from './assets/tesbtnpengguna.png';
import btnMusik from './assets/tesmusik.png';
// import audio from './assets/tes_audio.mp3';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="relative h-screen max-h-screen overflow-hidden flex items-center justify-center">
    <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" />
    </Helmet>
      {/* Div untuk background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Div untuk konten */}
      <div className="z-10 relative flex flex-col items-center">
        <img
          className="w-60 lg:w-72 mb-6 mt-4"  // Tambahkan margin atas (mt-4) di sini
          src={logo}
          alt="Logo"
        />

        {/* Tombol */}
        <div className="flex flex-col items-center w-full gap-4 md:gap-8 md:justify-center md:flex-row">
          <div style={{ opacity: 1 }}>
            <button className="flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-6 py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-xl text-base md:text-lg w-52 md:w-56">
              Bacakan Untukku
            </button>
          </div>
          <div style={{ opacity: 1 }}>
            <button className="flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-6 py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-xl text-base md:text-lg w-52 md:w-56">
              Baca Sendiri
            </button>
          </div>
        </div>
      </div>

      {/* Petunjuk Penggunaan */}
      <div className="absolute flex items-start gap-4 top-5 left-8">
        <div style={{ opacity: 1 }}>
          <button className="flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-3 py-2 text-sm">
            <img className="w-6" src={btnPengguna} alt="Petunjuk Penggunaan" />
            Petunjuk Penggunaan
          </button>
        </div>
      </div>

      <div className="absolute flex items-start gap-4 top-5 right-8">
      <div className="flex items-center justify-center" style={{ opacity: 1 }}>
        <button className="transition-all origin-center transform active:scale-100 hover:scale-105 outline-none flex items-center justify-center w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 text-sm text-[1.8em] text-white rounded-lg cursor-pointer bg-app-carmine-pink" id="buttonFullScreen">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
            <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
            <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
        </button>
      </div>
      <div id="buttonBacksound" className="flex items-center justify-center">
        <audio src="/static/media/curious_kiddo-david.78954de17358c6cbc0ff.mp3" autoPlay loop></audio>
        <div className="text-sm text-center">
          <button className="transition-all origin-center transform active:scale-100 hover:scale-105 outline-none w-8 md:w-9 lg:w-10 opacity-50">
            <img src={btnMusik} alt="" />
          </button>
          <div>OFF</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
