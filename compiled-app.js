"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _tesbg = _interopRequireDefault(require("./assets/tesbg.jpg"));
var _teslogo = _interopRequireDefault(require("./assets/teslogo2123.png"));
var _tesbtnpengguna = _interopRequireDefault(require("./assets/tesbtnpengguna.png"));
var _tesmusik = _interopRequireDefault(require("./assets/tesmusik.png"));
var _reactHelmet = require("react-helmet");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import audio from './assets/tes_audio.mp3';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-screen max-h-screen overflow-hidden flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 z-0",
    style: {
      backgroundImage: "url(".concat(_tesbg.default, ")")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "z-10 relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-60 lg:w-72 mb-6 mt-4" // Tambahkan margin atas (mt-4) di sini
    ,
    src: _teslogo.default,
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center w-full gap-4 md:gap-8 md:justify-center md:flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-6 py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-xl text-base md:text-lg w-52 md:w-56"
  }, "Bacakan Untukku")), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-6 py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-xl text-base md:text-lg w-52 md:w-56"
  }, "Baca Sendiri")))), /*#__PURE__*/React.createElement("div", {
    className: "absolute flex items-start gap-4 top-5 left-8"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex gap-4 text-center justify-center items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105 rounded-md px-3 py-2 text-sm"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-6",
    src: _tesbtnpengguna.default,
    alt: "Petunjuk Penggunaan"
  }), "Petunjuk Penggunaan"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute flex items-start gap-4 top-5 right-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center",
    style: {
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "transition-all origin-center transform active:scale-100 hover:scale-105 outline-none flex items-center justify-center w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 text-sm text-[1.8em] text-white rounded-lg cursor-pointer bg-app-carmine-pink",
    id: "buttonFullScreen"
  }, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8v-2a2 2 0 0 1 2 -2h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16v2a2 2 0 0 0 2 2h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 20h2a2 2 0 0 0 2 -2v-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
  })))), /*#__PURE__*/React.createElement("div", {
    id: "buttonBacksound",
    className: "flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("audio", {
    src: "/static/media/curious_kiddo-david.78954de17358c6cbc0ff.mp3",
    autoPlay: true,
    loop: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "transition-all origin-center transform active:scale-100 hover:scale-105 outline-none w-8 md:w-9 lg:w-10 opacity-50"
  }, /*#__PURE__*/React.createElement("img", {
    src: _tesmusik.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, "OFF")))));
}
var _default = exports.default = App;
