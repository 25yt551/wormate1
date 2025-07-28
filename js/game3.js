document.documentElement.insertAdjacentHTML("afterbegin", "\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {
\n            position: fixed;
\n            top: 0;
\n            left: 0;
\n            width: 100%;
\n            height: 100%;
\n            background-color: black;
\n            display: flex;
\n            flex-direction: column;
\n            justify-content: center;
\n            align-items: center;
\n            z-index: 99999;
\n            transition: opacity 0.5s ease-out;
\n        
}
\n\n        /* Imagen de fondo */\n        .background-image {
\n            position: absolute;
\n            width: 100%;
\n            height: 100%;
\n            background: url('https://i.imgur.com/oXntzBc.jpeg') no-repeat center center/cover;
\n            background-size: cover;
\n            background-position: center;
\n            opacity: 0.3;
\n            filter: blur(5px) opacity(1.5);
\n        
}
\n\n        /* Estilos del logo */\n        .logo {
\n            width: 200px;
\n            animation: pulse 4s infinite;
\n            margin-bottom: 70px;
\n        
}
\n\n        /* Animación de pulso */\n        @keyframes pulse {
\n            0% {
 transform: scale(2);
 opacity: 1;
}
\n            50% {
 transform: scale(2.1);
 opacity: 0.8;
}
\n            100% {
 transform: scale(2);
 opacity: 1;
}
\n        
}
\n\n        /* Barra de carga */\n        .progress-bar-container {
\n            width: 50%;
\n            height: 10px;
\n            background: rgba(255, 255, 255, 0.2);
\n            border-radius: 5px;
\n            overflow: hidden;
\n            position: relative;
\n        
}
\n\n        .progress-bar {
\n            width: 0%;
\n            height: 100%;
\n            background: #252535;
\n            transition: width 10s linear;
\n        
}
\n\n        /* GIF de rotación */\n        .rotate-gif {
\n            display: none;
 /* Oculto por defecto */\n            margin-top: 20px;
\n            width: 150px;
\n        
}
\n\n        /* Corazones */\n        .hearts {
\n            position: absolute;
\n            top: 50%;
\n            left: 50%;
\n            transform: translate(-50%, -100%);
\n            display: flex;
\n            gap: 10px;
\n        
}
\n\n        .one, .two, .three, .four, .five {
\n            background-color: #252535;
\n            display: inline-block;
\n            height: 10px;
\n            width: 10px;
\n            transform: rotate(-45deg);
\n            position: relative;
\n        
}
\n\n        .one:before, .one:after,\n        .two:before, .two:after,\n        .three:before, .three:after,\n        .four:before, .four:after,\n        .five:before, .five:after {
\n            content: \"\";
\n            background-color: #252535;
\n            border-radius: 50%;
\n            height: 10px;
\n            width: 10px;
\n            position: absolute;
\n        
}
\n\n        .one:before, .two:before, .three:before, .four:before, .five:before {
\n            top: -5px;
\n            left: 0;
\n        
}
\n\n        .one:after, .two:after, .three:after, .four:after, .five:after {
\n            left: 5px;
\n            top: 0;
\n        
}
\n\n        /* Animación de los corazones */\n        @keyframes heart {
\n            0% {
\n                transform: translateY(0) rotate(-45deg) scale(0.3);
\n                opacity: 1;
\n            
}
\n            100% {
\n                transform: translateY(-150px) rotate(-45deg) scale(1.3);
\n                opacity: 0;
\n            
}
\n        
}
\n\n        .one {
 animation: heart 1s ease-out infinite;
}
\n        .two {
 animation: heart 2s ease-out infinite;
}
\n        .three {
 animation: heart 1.5s ease-out infinite;
}
\n        .four {
 animation: heart 2.3s ease-out infinite;
}
\n        .five {
 animation: heart 1.7s ease-out infinite;
}
\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/jXzoG5D.png\" alt=\"server logo\" class=\"logo\">\n\n        <div class=\"hearts\">\n            <div class=\"one\"></div>\n            <div class=\"two\"></div>\n            <div class=\"three\"></div>\n            <div class=\"four\"></div>\n            <div class=\"five\"></div>\n        </div>\n\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n\n        <!-- GIF de rotación para móviles en vertical -->\n        <img src=\"https://i.imgur.com/CVpwetK.gif\" alt=\"Rotar el dispositivo\" class=\"rotate-gif\" id=\"rotate-gif\">\n    </div>\n");
window._alreadyScaledWormTextures = window._alreadyScaledWormTextures || new Set();
function optimizarTextura(v1) {
  if (!v1 || !v1.Hc || !v1.Hc.baseTexture) {
    console.warn("⚠️ Textura inválida o sin baseTexture.");
    return;
}
  const v2 = v1.Hc.baseTexture;
  const v3 = v2.cacheId || v2.resource?.["url"] || v2.resource?.["source"]?.["src"] || '';
  if (!v3 || window._alreadyScaledWormTextures.has(v3)) {
    return;
}
  try {
    if (v3.includes("100300_portions.png") && v2.resolution > 0.025) {
      v2.resolution = 0.025;
      console.log("🛠️ Resolución ajustada (" + v2.resolution + "): " + v3);
}
    if ('mipmap' in v2) {
      v2.mipmap = false;
}
 else if ("mipmap" in v2.baseTexture) {
      v2.baseTexture.mipmap = false;
}
    if ('anisotropicLevel' in v2) {
      v2.anisotropicLevel = 0x1;
}
 else if ("anisotropicLevel" in v2.baseTexture) {
      v2.baseTexture.anisotropicLevel = 0x1;
}
    if (v2.width > 0x400 || v2.height > 0x400) {
      const v4 = 0x400 / v2.width;
      const v5 = 0x400 / v2.height;
      const v6 = Math.min(v4, v5);
      if (v2.setSize) {
        v2.setSize(v2.width * v6, v2.height * v6);
}
 else if (v2.resource?.['source'] instanceof HTMLImageElement) {
        v2.resource.source.width *= v6;
        v2.resource.source.height *= v6;
}
      console.log("🔧 Imagen escalada (" + Math.round(v6 * 0x64) + "%): " + v3);
}
    if (v2.isPowerOfTwo && !v3.includes("atlas") && !v3.includes("sprite")) {
      v2.isPowerOfTwo = false;
}
    if (v2.destroyed || v2.resource?.["destroyed"]) {
      v2.destroy(true);
      console.log("🗑️ Textura destruida por estado inválido: " + v3);
}
    window._alreadyScaledWormTextures.add(v3);
    console.log("✅ Optimización completa: " + v3);
}
 catch (v7) {
    console.error("❌ Error al optimizar textura: " + v3, v7);
}
}
function checkOrientation() {
  const v8 = document.getElementById("rotate-gif");
  if (window.matchMedia("(orientation: portrait)").matches) {
    v8.style.display = "block";
}
 else {
    v8.style.display = 'none';
}
}
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.onload = function () {
  document.getElementById("progress-bar").style.width = "100%";
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
}
, 0x1f4);
}
, 0x2710);
}
;
var __extends = this && this.__extends || function () {
  var v9 = function (v10, v11) {
    v9 = Object.setPrototypeOf || {
      '__proto__': []
}
 instanceof Array && function (v12, v13) {
      v12.__proto__ = v13;
}
 || function (v14, v15) {
      for (var v16 in v15) if (Object.prototype.hasOwnProperty.call(v15, v16)) {
        v14[v16] = v15[v16];
}
}
;
    return v9(v10, v11);
}
;
  return function (v17, v18) {
    if (typeof v18 !== "function" && v18 !== null) {
      throw new TypeError("Class extends value " + String(v18) + " is not a constructor or null");
}
    v9(v17, v18);
    function v19() {
      this.constructor = v17;
}
    v17.prototype = v18 === null ? Object.create(v18) : (v19.prototype = v18.prototype, new v19());
}
;
}
();
var Direction;
(function (v20) {
  var v21 = function () {
    var v22 = true;
    return function (v23, v24) {
      var v25 = v22 ? function () {
        if (v24) {
          var v26 = v24.apply(v23, arguments);
          v24 = null;
          return v26;
}
}
 : function () {
}
;
      v22 = false;
      return v25;
}
;
}
();
  var v27 = v21(this, function () {
    var v28 = function () {
      var v29;
      try {
        v29 = Function("return (function() {
}
.constructor(\"return this\")( ));
")();
}
 catch (v30) {
        v29 = window;
}
      return v29;
}
;
    var v31 = v28();
    var v32 = v31.console = v31.console || {
}
;
    var v33 = ["log", 'warn', "info", 'error', "exception", "table", "trace"];
    for (var v34 = 0x0;
 v34 < v33.length;
 v34++) {
      var v35 = v21.constructor.prototype.bind(v21);
      var v36 = v33[v34];
      var v37 = v32[v36] || v35;
      v35.__proto__ = v21.bind(v21);
      v35.toString = v37.toString.bind(v37);
      v32[v36] = v35;
}
}
);
  v27();
  v20.LEFT = "left";
  v20.TOP = 'top';
  v20.BOTTOM = 'bottom';
  v20.RIGHT = "right";
  v20.TOP_LEFT = "top_left";
  v20.TOP_RIGHT = "top_right";
  v20.BOTTOM_LEFT = 'bottom_left';
  v20.BOTTOM_RIGHT = "bottom_right";
}
)(Direction = {
}
);
var Joystick = function (v38) {
  __extends(v39, v38);
  function v39(v40) {
    var v41 = v38.call(this) || this;
    v41.outerRadius = 0x0;
    v41.innerRadius = 0x0;
    v41.innerAlphaStandby = 0.5;
    v41.settings = Object.assign({
      'outerScale': {
        'x': 0x1,
        'y': 0x1
}
,
      'innerScale': {
        'x': 0x1,
        'y': 0x1
}
}
, v40);
    if (!v41.settings.outer) {
      var v42 = new PIXI.Graphics();
      v42.beginFill(0xff0000);
      v42.drawCircle(0x0, 0x0, 0x3c);
      v42.alpha = 0.5;
      v41.settings.outer = v42;
}
    if (!v41.settings.inner) {
      var v43 = new PIXI.Graphics();
      v43.beginFill(0xff0000);
      v43.drawCircle(0x0, 0x0, 0x23);
      v43.alpha = v41.innerAlphaStandby;
      v41.settings.inner = v43;
}
    v41.initialize();
    return v41;
}
  v39.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
}
    if ('anchor' in this.inner) {
      this.inner.anchor.set(0.5);
}
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 0x2;
    this.bindEvents();
}
;
  v39.prototype.bindEvents = function () {
    var v44 = this;
    this.interactive = true;
    var v45 = false;
    var v46;
    var v47;
    var v48;
    this.onDragStart = function (v49) {
      var v50;
      var v51;
      v46 = v49;
      v48 = this.toLocal(v46);
      v45 = true;
      v44.inner.alpha = 0x1;
      if ((v51 = (v50 = v44.settings).onStart) === null || v51 === undefined) {
        undefined;
}
 else {
        v51.call(v50);
}
}
;
    this.onDragEnd = function (v52) {
      var v53;
      var v54;
      if (v45 == false) {
        return;
}
      v44.inner.position.set(0x0, 0x0);
      v45 = false;
      v44.inner.alpha = v44.innerAlphaStandby;
      if ((v54 = (v53 = v44.settings).onEnd) === null || v54 === undefined) {
        undefined;
}
 else {
        v54.call(v53);
}
}
;
    this.onDragMove = function (v55) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 0x2;
      var v56;
      var v57;
      var v58;
      var v59;
      var v60;
      var v61;
      if (v45 == false) {
        return;
}
      var v62 = this.toLocal(v55);
      var v63 = v62.x - v48.x;
      var v64 = v62.y - v48.y;
      var v65 = new PIXI.Point(0x0, 0x0);
      var v66 = 0x0;
      if (v63 == 0x0 && v64 == 0x0) {
        return;
}
      var v67 = 0x0;
      if (v63 * v63 + v64 * v64 >= v44.outerRadius * v44.outerRadius) {
        v67 = v44.outerRadius;
}
 else {
        v67 = v44.outerRadius - v44.innerRadius;
}
      var v68 = Direction.LEFT;
      if (v63 == 0x0) {
        if (v64 > 0x0) {
          v65.set(0x0, v64 > v44.outerRadius ? v44.outerRadius : v64);
          v66 = 0x10e;
          v68 = Direction.BOTTOM;
}
 else {
          v65.set(0x0, -(Math.abs(v64) > v44.outerRadius ? v44.outerRadius : Math.abs(v64)));
          v66 = 0x5a;
          v68 = Direction.TOP;
}
        v44.inner.position.set(v65.x, v65.y);
        v47 = v44.getPower(v65);
        if ((v57 = (v56 = v44.settings).onChange) === null || v57 === undefined) {
          undefined;
}
 else {
          v57.call(v56, {
            'angle': v66,
            'direction': v68,
            'power': v47
}
);
}
        return;
}
      if (v64 == 0x0) {
        if (v63 > 0x0) {
          v65.set(Math.abs(v63) > v44.outerRadius ? v44.outerRadius : Math.abs(v63), 0x0);
          v66 = 0x0;
          v68 = Direction.LEFT;
}
 else {
          v65.set(-(Math.abs(v63) > v44.outerRadius ? v44.outerRadius : Math.abs(v63)), 0x0);
          v66 = 0xb4;
          v68 = Direction.RIGHT;
}
        v44.inner.position.set(v65.x, v65.y);
        v47 = v44.getPower(v65);
        if ((v59 = (v58 = v44.settings).onChange) === null || v59 === undefined) {
          undefined;
}
 else {
          v59.call(v58, {
            'angle': v66,
            'direction': v68,
            'power': v47
}
);
}
        return;
}
      var v69 = Math.abs(v64 / v63);
      var v70 = Math.atan(v69);
      v66 = v70 * 0xb4 / Math.PI;
      var v71 = 0x0;
      var v72 = 0x0;
      if (v63 * v63 + v64 * v64 >= v44.outerRadius * v44.outerRadius) {
        v71 = v44.outerRadius * Math.cos(v70);
        v72 = v44.outerRadius * Math.sin(v70);
}
 else {
        v71 = Math.abs(v63) > v44.outerRadius ? v44.outerRadius : Math.abs(v63);
        v72 = Math.abs(v64) > v44.outerRadius ? v44.outerRadius : Math.abs(v64);
}
      if (v64 < 0x0) {
        v72 = -Math.abs(v72);
}
      if (v63 < 0x0) {
        v71 = -Math.abs(v71);
}
      if (v63 > 0x0 && v64 < 0x0) {
}
 else {
        if (v63 < 0x0 && v64 < 0x0) {
          v66 = 0xb4 - v66;
}
 else {
          if (v63 < 0x0 && v64 > 0x0) {
            v66 = v66 + 0xb4;
}
 else if (v63 > 0x0 && v64 > 0x0) {
            v66 = 0x168 - v66;
}
}
}
      v65.set(v71, v72);
      v47 = v44.getPower(v65);
      v68 = v44.getDirection(v65);
      v44.inner.position.set(v65.x, v65.y);
      if ((v61 = (v60 = v44.settings).onChange) === null || v61 === undefined) {
        undefined;
}
 else {
        v61.call(v60, {
          'angle': v66,
          'direction': v68,
          'power': v47
}
);
}
}
;
}
;
  v39.prototype.getPower = function (v73) {
    var v74 = v73.x - 0x0;
    var v75 = v73.y - 0x0;
    return Math.min(0x1, Math.sqrt(v74 * v74 + v75 * v75) / this.outerRadius);
}
;
  v39.prototype.getDirection = function (v76) {
    var v77 = Math.atan2(v76.y, v76.x);
    if (v77 >= -Math.PI / 0x8 && v77 < 0x0 || v77 >= 0x0 && v77 < Math.PI / 0x8) {
      return Direction.RIGHT;
}
 else {
      if (v77 >= Math.PI / 0x8 && v77 < 0x3 * Math.PI / 0x8) {
        return Direction.BOTTOM_RIGHT;
}
 else {
        if (v77 >= 0x3 * Math.PI / 0x8 && v77 < 0x5 * Math.PI / 0x8) {
          return Direction.BOTTOM;
}
 else {
          if (v77 >= 0x5 * Math.PI / 0x8 && v77 < 0x7 * Math.PI / 0x8) {
            return Direction.BOTTOM_LEFT;
}
 else {
            if (v77 >= 0x7 * Math.PI / 0x8 && v77 < Math.PI || v77 >= -Math.PI && v77 < -0x7 * Math.PI / 0x8) {
              return Direction.LEFT;
}
 else {
              if (v77 >= -0x7 * Math.PI / 0x8 && v77 < -0x5 * Math.PI / 0x8) {
                return Direction.TOP_LEFT;
}
 else {
                return v77 >= -0x5 * Math.PI / 0x8 && v77 < -0x3 * Math.PI / 0x8 ? Direction.TOP : Direction.TOP_RIGHT;
}
}
}
}
}
}
}
;
  return v39;
}
(PIXI.Container);
function _typeof(v78) {
  '@babel/helpers - typeof';
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (v79) {
    return typeof v79;
}
 : function (v80) {
    return v80 && "function" == typeof Symbol && v80.constructor === Symbol && v80 !== Symbol.prototype ? "symbol" : typeof v80;
}
)(v78);
}
var lenguaje = {
  'es': {
    'opciones': "opciones",
    'zoomVelocidad': "Zoom Velocidad",
    'anchoPotenciador': "ancho del potenciador",
    'auraPotenciador': "aura del potenciador",
    'anchoComida': "ancho de la comida",
    'brilloComida': "brillo de la comida",
    'fondo': "fondo Solido",
    'laser': "laser de cabeza",
    'sectores': "sectores",
    'colorJuego': "color del juego",
    'colorLaser': "color del laser",
    'colorBorde': "color del borde",
    'copiar': "copiar",
    'fondos': "fondos",
    'fondo0': "por defecto",
    'fondo1': "espacio",
    'fondo2': "espacio 2",
    'fondo3': "azul",
    'fondo4': "espacio 3",
    'skinVisible': "SkinVisible(Para publico)",
    'soundTuto1': "descargar sonido",
    'soundTuto2': "subir sonido",
    'soundTuto3': "sonido link cabeza",
    'soundTuto4': "sonido link 10cabezas"
}
,
  'en': {
    'opciones': 'settings',
    'zoomVelocidad': "Zoom Speed",
    'anchoPotenciador': "booster width",
    'auraPotenciador': "power up glow",
    'anchoComida': "size of food",
    'brilloComida': "food shine",
    'fondo': "Solid background",
    'laser': "Center laser",
    'sectores': "sectors",
    'colorJuego': "game color",
    'colorLaser': "laser color",
    'colorBorde': "border color",
    'copiar': "copy",
    'fondos': 'background',
    'fondo0': "default",
    'fondo1': "Green",
    'fondo2': "Blue",
    'fondo3': "Blue Black",
    'fondo4': "Blue Light",
    'skinVisible': "SkinVisible(For public)",
    'soundTuto1': "download sounds",
    'soundTuto2': "turn up sound",
    'soundTuto3': "sound link head",
    'soundTuto4': "sound link 10heads"
}
,
  'uk': {
    'opciones': "????????????",
    'anchoPotenciador': "?????? ???????????",
    'auraPotenciador': "????? ???????????",
    'anchoComida': "?????? ???",
    'brilloComida': "????? ???",
    'fondo': "??????? ???",
    'laser': "??????????? ?????",
    'sectores': "???????",
    'colorJuego': "????? ???",
    'colorLaser': "????? ??????",
    'colorBorde': "????? ????",
    'copiar': "?????????",
    'fondos': "????",
    'fondo0': "?? ?????????????",
    'fondo1': '??????',
    'fondo2': "?????? 2",
    'fondo3': "?????",
    'fondo4': "?????? 3",
    'skinVisible': "SkinVisible(??? ???????)",
    'soundTuto1': "??????????? ????",
    'soundTuto2': "??????????? ????",
    'soundTuto3': "???? ??? ??????",
    'soundTuto4': "???? ??? 10 ?????"
}
}
;
const _wrmxt = {
  'isSkinCustom'(v81) {
    var v82 = /[a-zA-Z]/;
    return "string" === typeof v81 && v82.test(v81);
}
,
  'testSkinCustom': function (v83) {
    return _wrmxt.isSkinCustom(v83) ? 0x22 || 0x21 : v83;
}
,
  'testSkinMod': function (v84) {
    return 0x18f <= v84 && 0x3e7 > v84;
}
,
  'testWear': function (v85) {
    return 0x18f <= v85 && 0x3e7 > v85;
}
,
  'isNumberValid': function (v86) {
    return '' !== v86 && null !== v86 && undefined !== v86 && !isNaN(v86);
}
,
  'validInput': function (v87) {
    if (!(0x18f <= v87 && 0x3e7 > v87) && !_wrmxt.isSkinCustom(v87)) {
      return v87;
}
    try {
      let v88 = $("#inputReplaceSkin").val();
      return encodeURI('' !== v88 && null !== v88 && undefined !== v88 && !isNaN(v88) ? v88 : 0x23);
}
 catch (v89) {
      return encodeURI(0x23);
}
}
,
  'aload': false,
  'aId': 0x0
}
;
var intervalID = null;
var isRunning = false;
var initialInterval = 0x37;
var cycleCounter = 0x1;
var isIncrementing = true;
let pixi = new Function("return PIXI;
")();
let ungirotexture = pixi.Texture.from("https://i.imgur.com/12MgJyy.png");
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  'zoom': 'z',
  'restart': 'r',
  'giro': 's',
  'wormExplot': 'x',
  'laserHS': 'l',
  'sectores': 'q',
  'background': 'c',
  'noSkin': 'f',
  'noAuras': 'g'
}
;
function cambiarKey(v90, v91) {
  if (keys.hasOwnProperty(v90)) {
    keys[v90] = v91;
}
}
let theoObjects = {
  'teamColor': 'FFFFFF',
  'laserColor': "FFFFFF",
  'colorFondo': "0D0400",
  'colorBorde': "FF0000",
  'hsTextColor': "FFFFFF",
  'killTextColor': "FFFFFF",
  'minimapBorderColor': "FFFFFF"
}
;
var zw_updatezoom;
var zw_multiplier;
var zw_zoomtext;
var crearRegion2;
var zw_servertext;
var zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = true;
var zw_TopHS_RecordHs;
var zw_Top3HS_RecordHs;
var zw_TopFriends_list;
var zw_TopHS_BestPlayers;
var zw_MinimapTeamCode;
var zw_MinimapSombra;
var zw_lastserver;
var zw_toplist;
var zw_Background;
var ctxHeadshotLine;
var zw_zoomplustexture;
var zw_zoomsubtracttexture;
var zw_giroplustexture;
var zw_girosubtracttexture;
var zw_explotWubtracttexture;
var zw_settingsblockbadwords;
var zw_selectedbackground;
var zw_joystick;
var zw_mobilecontrol;
var zw_mobilecontrol2;
var zw_mobilecontroltextures;
var zw_mobilepredictiontextures;
var zw_mobileprediction;
var zw_joysticks;
var zw_mobilearrowtexture;
var zw_mobilepeedtexture;
var zw_mobilefullscreenstatus;
var zw_mobilecheck;
zw_multiplier = 0x1;
let frameTimes = [];
let lastFrameTime = performance.now();
var killtext;
var hstext;
var circle;
var backgrounds = ['https://asserts.wormworld.io/backgrounds/bkgnd0.png', "https://asserts.wormworld.io/backgrounds/bkgnd8.png", "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', 'https://asserts.wormworld.io/backgrounds/arena01.png', "https://asserts.wormworld.io/backgrounds/arena02.png", 'https://asserts.wormworld.io/backgrounds/arena03.png', "https://asserts.wormworld.io/backgrounds/arena04.png"];
let currentIndex = localStorage.getItem("selectedBackground") ? parseInt(localStorage.getItem("selectedBackground")) : 0x0;
var fonts = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let currentFontIndex = localStorage.getItem("selectedFont") ? parseInt(localStorage.getItem('selectedFont')) : 0x0;
function getPingColor(v92) {
  if (v92 <= 0x32) {
    return "#00FF00";
}
  if (v92 <= 0x50) {
    return "#ADFF2F";
}
  if (v92 <= 0x78) {
    return "#FFFF00";
}
  if (v92 <= 0xb4) {
    return "#FFA500";
}
  if (v92 <= 0xfa) {
    return '#FF4500';
}
  return '#FF0000';
}
function getFPSColor(v93) {
  if (v93 >= 0x3c) {
    return "#00FF00";
}
  if (v93 >= 0x32) {
    return "#ADFF2F";
}
  if (v93 >= 0x28) {
    return '#FFFF00';
}
  if (v93 >= 0x1e) {
    return "#FFA500";
}
  if (v93 >= 0x14) {
    return "#FF4500";
}
  return "#FF0000";
}
window.onwheel = v94 => {
  if (v94.deltaY > 0x0) {
    zw_updatezoom(Math.max(zw_multiplier - 0.75 * parseFloat(theoKzObjects.zoomSpeed), 0.5));
}
 else {
    zw_updatezoom(Math.min(zw_multiplier + 1.05 * parseFloat(theoKzObjects.zoomSpeed), 0x32));
}
}
;
var zw_mobilecheck = function () {
  var v95 = new Function("return RegExp;
")();
  return new v95('iPhone|iPad|iPod|Android', 'i').test(navigator.userAgent);
}
;
var zw_updatezoom = function (v96) {
  zw_multiplier = v96;
  var v97 = parseFloat(zw_multiplier.toFixed(0x2));
  if (Math.abs(v97) < 0.01) {
    v97 = 0x0;
}
 else if (Math.abs(v97 - 0x1) < 0.01) {
    v97 = 0x1;
}
  zw_zoomtext.text = v97 + 'x';
}
;
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var isPlaying = false;
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': 'dynamic',
    'position': {
      'left': "110px",
      'bottom': "110px"
}
,
    'color': '#222',
    'pxy': 0x6e
}
}
;
var idiomaActual = window.location.href.includes("/es") ? 'es' : window.location.href.includes("/uk") ? 'uk' : 'en';
var theoKzObjects = {
  'FB_UserID': '',
  'fps': false,
  'ping': false,
  'chngBotSkins': false,
  'chngPersonsSkins': false,
  'minimapTeamcod': false,
  'hideYouNameInMinimap': false,
  'Incognito': false,
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'visiblePowersAll': false,
  'speed_zigzag': true,
  'timerSpZg': false,
  'zoomSpeed': localStorage.getItem('zoomSpeed') || 0x1,
  'PotenciadorSize': localStorage.getItem("PotenciadorSize") || 0x2,
  'PotenciadorAura': localStorage.getItem("PotenciadorAura") || 1.2,
  'ComidaShadow': localStorage.getItem("ComidaShadow") || 0x2,
  'ComidaSize': localStorage.getItem("ComidaSize") || 0x2,
  'mouseDelay': localStorage.getItem("mouseDelay") || 0x14,
  'smoothCamera': localStorage.getItem('smoothCamera') || 0.5,
  'eat_animation': 0.0025,
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'showTeamList': true,
  'animationHeadshot': true,
  'top8': true,
  'killFeed': false,
  'noAuras': true,
  'noSkin': true,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'dead': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'idReplaceSkin': 0x23,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
}
;
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && 'null' !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects.loading = true;
let soundEnabled;
var zwormData = {
  'id_user': '',
  'nickname': "zworm",
  'enemyNameHs': 'zworm',
  'teamCode': '',
  'playerX': 0x0,
  'playerY': 0x0,
  'hs': 0x0,
  'kill': 0x0,
  'message': '',
  'teamColor': localStorage.getItem("teamColor") || "0xffffff",
  'wssServer': ''
}
;
const socket = new WebSocket("wss://zworm.xyz:9800");
const gameState = {
  'players': new Map()
}
;
let lastUpdate = 0x0;
socket.addEventListener("open", () => console.log("Conectado al servidor WebSocket"));
socket.addEventListener("close", () => console.log("Desconectado del servidor WebSocket"));
socket.addEventListener("message", async v98 => {
  try {
    const v99 = typeof v98.data === "string" ? JSON.parse(v98.data) : JSON.parse(await v98.data.text());
    handleMessage(v99);
}
 catch (v100) {
    console.error("Error al procesar el mensaje:", v100);
}
}
);
function handleMessage(v101) {
  if (!v101 || v101.wssServer !== '') {
    return;
}
  if (v101.id_user && ["gg_107164783301809303612", 'gg_107696732696574095850', 'gg_110413852592088957484'].includes(v101.id_user)) {
    createServerMessage("[Zworm OWNER]", v101.message);
    console.log("Servidor " + v101.id_user + " ha enviado un mensaje: " + v101.message);
}
  switch (v101.type) {
    case "initialState":
      handlers.initialState(v101.players);
      break;
    case "playerUpdate":
      handlers.playerUpdate(v101);
      break;
    case "hsKillUpdate":
      handlers.hsKillUpdate(v101);
      break;
    case "playerDeath":
      handlers.playerDeath(v101);
      break;
    case "playerDisconnect":
      removePlayer(v101.id);
      break;
    default:
      console.log("Mensaje desconocido:", v101);
}
}
function getUserData(v102) {
  return clientes.clientesActivos.find(v103 => v103.client_ID === v102);
}
let messageQueue = [];
let isProcessingQueue = false;
function sendMessage() {
  if (!canSendMessage) {
    console.log("⏳ Espera antes de enviar otro mensaje...");
    return;
}
  const v104 = $("#chat-input").val().trim();
  if (!v104) {
    return;
}
  canSendMessage = false;
  setTimeout(() => canSendMessage = true, 0x3e8);
  const v105 = "zworm".substring(0x0, 0x10);
  const v106 = getUserData('');
  const v107 = {
    'type': "chatMessage",
    'id_user': '',
    'nickname': v105,
    'message': v104,
    'wssServer': '',
    'color': v106?.["color"] || "rgba(255, 255, 255, 0.1)",
    'image': v106?.["image"] || "default_icon.png"
}
;
  messageQueue.push(v107);
  processMessageQueue();
  displayMessage(v105, v104, '', v107.color, v107.image, true);
  $("#chat-input").val('');
}
async function processMessageQueue() {
  if (isProcessingQueue || messageQueue.length === 0x0) {
    return;
}
  isProcessingQueue = true;
  while (messageQueue.length > 0x0) {
    const v108 = messageQueue.shift();
    try {
      socket.send(JSON.stringify(v108));
      await new Promise(v109 => setTimeout(v109, 0x32));
}
 catch (v110) {
      console.error("Error enviando mensaje:", v110);
}
}
  isProcessingQueue = false;
}
function displayMessage(v111, v112, v113, v114, v115, v116 = false) {
  const v117 = v114 || "rgba(255, 255, 255, 0.1)";
  const v118 = v115 ? "<img src=\"" + v115 + "\" alt=\"User Icon\" style=\"width: 20px;
 height: 20px;
 margin-right: 5px;
 border-radius: 50%;
\">" : '';
  const v119 = "\n        <div class=\"chat-message\" style=\"background: " + v117 + ";
\">\n            " + v118 + "\n            <strong id=\"" + v113 + "\" style=\"color: " + (v116 ? "lightblue" : "white") + "\">" + v111 + ":</strong>\n            <span>" + v112 + "</span>\n        </div>\n    ";
  $('#chat-history').append(v119).scrollTop($("#chat-history")[0x0].scrollHeight);
}
const handlers = {
  'initialState': v120 => {
    v120.forEach(v121 => gameState.players.set(v121.id_user, v121));
    console.log("Estado inicial recibido:", v120);
}
,
  'playerUpdate': v122 => {
    gameState.players.set(v122.id_user, {
      ...v122
}
);
    updateTop8Hs();
    if (v122.teamCode && v122.teamCode === '') {
      createTeamUbication(v122.teamCode, v122.teamColor);
      createTeamMessage(v122.teamCode, v122.nickname, v122.message);
}
}
,
  'hsKillUpdate': v123 => {
    const v124 = gameState.players.get(v123.id_user);
    if (v124) {
      v124.hskill = v123.hskill;
}
 else {
      gameState.players.set(v123.id_user, {
        ...v123,
        'position': {
          'x': 0x0,
          'y': 0x0
}
}
);
}
    updateTop8Hs();
}
,
  'playerDeath': v125 => {
    gameState.players["delete"](v125.id_user);
    console.log("El jugador " + v125.nickname + " ha muerto.");
    updateTop8Hs();
    clearTeamUbication();
}
}
;
Object.assign(window, handlers);
let pendingUpdate = null;
let updateTimeout = null;
function sendUpdate(v126, v127 = {
}
) {
  const v128 = {
    'type': v126,
    'id_user': '',
    'nickname': "zworm",
    'enemyNameHs': 'zworm',
    'hskill': {
      'hs': 0x0,
      'kill': 0x0
}
,
    'position': {
      'x': 0x0,
      'y': 0x0
}
,
    'message': '',
    'teamCode': '',
    'teamColor': zwormData.teamColor,
    'wssServer': '',
    ...v127
}
;
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(v128));
}
}
function sendPlayerUpdate(v129, v130) {
  const v131 = Date.now();
  if (v131 - lastUpdate < 0x32) {
    if (pendingUpdate) {
      clearTimeout(updateTimeout);
}
    pendingUpdate = {
      'x': v129,
      'y': v130
}
;
    updateTimeout = setTimeout(() => {
      if (pendingUpdate) {
        zwormData.playerX = pendingUpdate.x;
        zwormData.playerY = pendingUpdate.y;
        sendUpdate("playerUpdate", {
          'position': pendingUpdate
}
);
        pendingUpdate = null;
        lastUpdate = Date.now();
}
}
, 0x32 - (v131 - lastUpdate));
    return;
}
  zwormData.playerX = v129;
  zwormData.playerY = v130;
  sendUpdate("playerUpdate", {
    'position': {
      'x': v129,
      'y': v130
}
}
);
  lastUpdate = v131;
}
function sendPlayerDeath(v132, v133) {
  sendUpdate("playerDeath", {
    'hskill': {
      'hs': v132,
      'kill': v133
}
}
);
}
function sendHSKillUpdate(v134, v135) {
  sendUpdate("hsKillUpdate", {
    'hskill': {
      'hs': v134,
      'kill': v135
}
}
);
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
}
;
let clientsSkins = {
  'clientsSkinsVencidos': [],
  'clientsSkinsActivos': []
}
;
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch("https://zwormextenstion.com/wormExtension/api/clients.php?v=" + TIME).then(v136 => v136.json()).then(v137 => {
    console.log(v137);
    if (v137.success) {
      let v138 = v137.Users;
      clientes.clientesActivos = v138.filter(v139 => {
        return v139.client_ID;
}
);
}
 else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
}
;
      alert("An error occurred while loading clients");
}
}
);
}
loadUsers();
async function loadSkinUnlock() {
  await fetch("https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=" + TIME).then(v140 => v140.json()).then(v141 => {
    console.log(v141);
    if (v141.success) {
      let v142 = v141.Users;
      clientsSkins.clientsSkinsActivos = v142.filter(v143 => {
        return v143.client_ID;
}
);
}
 else {
      clientsSkins = {
        'clientsSkinsVencidos': [],
        'clientsSkinsActivos': []
}
;
      alert("An error occurred while loading clients");
}
}
);
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  const v144 = "https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=" + TIME;
  await fetch(v144).then(v145 => v145.text()).then(v146 => {
    var v147 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    var v148 = v146.matchAll(v147);
    var v149 = [...v148].map(v150 => v150[0x1]);
    for (let v151 = 0x0;
 v151 < v149.length;
 v151++) {
      let v152 = v149[v151];
      let v153 = null;
      let v154 = null;
      var v155 = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      var v156 = v152.match(v155);
      if (v156) {
        var v157 = v156[0x1];
        var v158 = v156[0x2];
        var v159 = v156[0x3];
        var v160 = v156[0x4];
        var v161 = decodeUnicode(v160);
        var v162 = /<a href=\\"(https:.*?)\\"/;
        var v163 = v152.match(v162);
        if (v163) {
          v153 = v163[0x1];
}
        var v164 = /<img src=\\"(.*?)\\"/;
        var v165 = v152.match(v164);
        if (v165) {
          v154 = v165[0x1];
}
        serverDataTimMap.push({
          'serverNameAndOpen': v157,
          'dataRoom': v158,
          'dataCon': v159,
          'serverName': v161,
          'secondHref': v153,
          'imgSrc': v154
}
);
}
}
}
)["catch"](v166 => {
    console.log(v166);
}
);
}
var top1Servers = {
}
;
async function extractTopScores() {
  const v167 = "https://zworm.xyz:3305/data?v=" + TIME;
  try {
    let v168 = await fetch(v167);
    if (!v168.ok) {
      throw new Error("HTTP error! Status: " + v168.status);
}
    let v169 = await v168.json();
    for (let v170 in v169) {
      const v171 = v169[v170];
      const v172 = v171.players || [];
      if (v172.length > 0x0) {
        let v173 = v172.reduce((v174, v175) => v175.Score > v174.Score ? v175 : v174, v172[0x0]);
        let v176 = formatScore(v173.Score);
        let v177 = getStatusColor(v173.Score);
        top1Servers[v170] = {
          'ServerName': v173.ServerName,
          'Initials': v170,
          'Score': v176,
          'StatusColor': v177,
          'Avatar': v171.avatar || null,
          'Name': v173.Name || "(unknown)",
          'TopPlayers': v172.slice(0x0, 0xa)
}
;
}
}
    console.log(top1Servers);
}
 catch (v178) {
    console.error("Error fetching server data:", v178);
}
}
let serverData = [];
async function loadServersWormWorld() {
  const v179 = Date.now();
  const v180 = "https://zwormextenstion.com/wormExtension/api/servers/wormworld.php?v=" + v179;
  try {
    const v181 = await fetch(v180);
    const v182 = await v181.json();
    serverData = v182.map(v183 => ({
      'dataCon': v183.dataCon,
      'dataRoom': v183.dataRoom,
      'serverName': v183.serverName,
      'dataType': v183.dataType,
      'imgSrc': v183.imgSrc
}
));
    console.log(serverData);
}
 catch (v184) {
    console.error("Error al cargar los servidores:", v184);
}
}
function formatScore(v185) {
  if (v185 >= 0xf4240) {
    return (v185 / 0xf4240).toFixed(0x1) + 'M';
}
 else {
    if (v185 >= 0x3e8) {
      return (v185 / 0x3e8).toFixed(0x1) + 'K';
}
}
  return v185.toString();
}
function getStatusColor(v186) {
  if (v186 > 0x989680) {
    return "green";
}
 else {
    return v186 > 0x1e8480 ? "orange" : "red";
}
}
async function registerUpdatePlayer(v187) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    'method': "POST",
    'body': JSON.stringify({
      'data': v187
}
)
}
).then(v188 => v188.json()).then(v189 => {
    console.log(v189);
}
);
}
async function checkSubscriptionExpired(v190) {
  await fetch("https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", {
    'method': "POST",
    'body': JSON.stringify({
      'code': v190
}
)
}
).then(v191 => v191.json()).then(v192 => {
    console.log(v192);
}
);
}
function fetchCustomLogo(v193) {
  $.ajax({
    'url': "https://swykz.theoxt.com/api/streming.php",
    'method': "GET",
    'dataType': 'json',
    'success': function (v194) {
      var v195 = v194.allstreamers.streamers.filter(function (v196) {
        return v196.id_game === v193;
}
);
      if (v195.length === 0x0) {
        console.log("No hay streamers online.");
        return;
}
      var v197 = v195[0x0];
      $(".mm-logo").attr("src", v197.logo);
      $('.loading-logo').attr('src', v197.logo);
      $(".mm-logo").attr("src", v197.logo);
}
,
    'error': function (v198) {
      console.error("Error al obtener los datos:", v198);
}
}
);
}
loadServersTimMap();
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld()]);
  console.log("Todo listo");
  renderInterface(serverData, top1Servers);
}
function renderInterface(v199, v200) {
  $(".description-text").empty();
  $(".description-text").append("\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            \n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            \n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let v201 = $("#optionSelect").val();
    let v202 = $("#numberInput").val();
    if (!v201 || v202 === '') {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
}
    zw_lastserver = "wss://" + v201 + ':' + v202 + "/wormy";
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
    zw_servertext.text = '' + zw_lastserver.replace("wss://", '').replace(".wormate.io", '').replace("/wormy", '');
}
);
  var v203 = {
    'sao': 'br',
    'vin': "Virginia - EEUU",
    'dal': "Dallas - EEUU",
    'fra': "Frankfurt - Alemania",
    'sgp': 'sg',
    'tok': 'jp',
    'syd': 'au',
    'lon': 'gb',
    'tor': 'ca',
    'mex': 'mx',
    'sin': 'sg',
    'hil': "Honolulu - Hawái, EEUU",
    'gra': 'de'
}
;
  var v204 = [{
    'code': 'br',
    'name': "Peru"
}
, {
    'code': 'mx',
    'name': 'Mexico'
}
, {
    'code': 'us',
    'name': 'EEUU'
}
, {
    'code': 'ca',
    'name': "Canada"
}
, {
    'code': 'de',
    'name': 'Germania'
}
, {
    'code': 'fr',
    'name': "Francia"
}
, {
    'code': 'sg',
    'name': "Singapur"
}
, {
    'code': 'jp',
    'name': "Japon"
}
, {
    'code': 'au',
    'name': "Australia"
}
, {
    'code': 'gb',
    'name': "Granbretana"
}
];
  var v205 = $("<ul class=\"ui-tabs-nav\"></ul>");
  var v206 = $("<div class=\"servers-container\"></div>");
  v204.forEach(function (v207, v208) {
    var v209 = $("\n            <li class=\"ui-tabs-tab ui-tab " + (v208 === 0x0 ? 'ui-tab-active' : '') + "\" data-country=\"" + v207.code + "\">\n                <a><span class=\"flag " + v207.code + "\"></span></a>\n            </li>\n        ");
    v205.append(v209);
    var v210 = $("\n            <div class=\"servers-" + v207.code + "\" style=\"display: " + (v208 === 0x0 ? 'block' : 'none') + ";
\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th> <!-- Nueva columna -->\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
    v206.append(v210);
}
);
  $(".description-text").append(v205, v206);
  $(".ui-tabs-tab").click(function () {
    var v211 = $(this).data('country');
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v211).fadeIn(0xc8);
}
);
  v199.forEach(function (v212) {
    var v213 = v212.dataRoom.match(/[a-zA-Z]+/g).join('');
    if (v213 === 'ae') {
      v213 = 'gb';
}
    var v214 = v212.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var v215 = v214 ? v214[0x1] : null;
    var v216 = v203[v215] ? v203[v215].toUpperCase() : "Desconocido";
    if (!v204.some(v217 => v217.code === v213)) {
      return;
}
    var v218 = v212.dataRoom.trim().toLowerCase();
    var v219 = v200[v218] || {
      'Score': "???",
      'StatusColor': "gray"
}
;
    var v220 = $("\n        <tr class=\"server-row\" data-wss=\"" + v212.dataCon + "\" value=\"" + v212.dataRoom + "\">\n                <td class=\"server-status\">\n                    <span class=\"status-dot\" style=\"background-color: " + v219.StatusColor + ";
\"></span>\n                </td>\n                <td class=\"server-name\" >" + v212.serverName + "</td>\n                <td class=\"server-region\">" + v216 + "</td>\n                <td class=\"server-top1\">" + v219.Score + "</td>\n                <td><img src=\"" + v212.imgSrc + "\" class=\"streamer-image\"></td>\n                <td>\n                    <button class=\"btn-check-ports\">📡📶</button>\n                </td>  \n            </tr>\n        ");
    $(".servers-" + v213 + " tbody").append(v220);
}
);
  $(document).on("click", ".server-row", function () {
    let v221 = $(this).attr("value");
    let v222 = $(this).find(".server-name").text();
    let v223 = $(this).attr("data-wss");
    if (v222 && v223) {
      anApp.r.Hd();
      anApp.sa(v223);
      zw_servertext.text = '' + v221;
      setTimeout(() => {
        zw_servertext.text = '' + v221;
}
, 0x7d0);
      console.log("Conectando a:", v223);
}
}
);
  $(document).on("click", ".btn-check-ports", function (v224) {
    v224.stopPropagation();
    const v225 = $(this).closest(".server-row");
    const v226 = v225.attr("data-wss");
    const v227 = v226.match(/wss:\/\/[^:]+:(\d+)\//);
    if (!v227) {
      alert("Puerto no válido");
      return;
}
    const v228 = v227[0x1];
    v229(v225, v228);
}
);
  function v229(v230, v231) {
    const v232 = v230.find(".server-name").text();
    if (!$("#modalPuertas").length) {
      $("body").append("\n                <div id=\"modalPuertas\" style=\"position:fixed;
 top:20%;
 left:50%;
 transform:translateX(-50%);
\n                    padding:20px;
 z-index:9999;
 display:none;
 background-color: rgb(78 78 114 / 75%);
\n                    border-radius: 5px;
 border: 2px solid #252535;
 color: white;
 font-family: sans-serif;
\n                    max-height: 400px;
 overflow-y: auto;
 min-width: 300px;
\">\n    \n                    <div id=\"modalCloseBtn\" style=\"position: absolute;
 top: 5px;
 right: 10px;
\n                        font-size: 18px;
 cursor: pointer;
 color: #fff;
\">✖</div>\n    \n                    <div id=\"modalTitle\" style=\"font-size: 16px;
 font-weight: bold;
\n                        margin-bottom: 10px;
 text-align: center;
 margin-top: 20px;
\">\n                        🔓 Open doors available for: <span id=\"nombreServidor\"></span>\n                    </div>\n    \n                    <div id=\"resultadoPuertas\"></div>\n                </div>\n            ");
      $(document).off("click", "#modalCloseBtn").on("click", "#modalCloseBtn", function () {
        $("#modalPuertas").fadeOut(0x12c);
}
);
      $(document).off('click', '.connect-button').on("click", ".connect-button", function () {
        const v233 = $(this).data("server");
        anApp.sa(v233);
        console.log("Conectando a:", v233);
}
);
}
    $('#nombreServidor').text(v232);
    $('#modalPuertas').fadeIn(0xc8);
    $("#resultadoPuertas").html("🔄 Testing ...");
    testPortOnServers(v231);
}
  createFloatingElements();
  bindHoverEvents(".server-top1");
  bindHoverEvents(".server-status");
}
function createFloatingElements() {
  if (!document.getElementById('avatarPreview')) {
    const v234 = document.createElement("div");
    v234.id = 'avatarPreview';
    Object.assign(v234.style, {
      'position': "absolute",
      'display': 'none',
      'pointerEvents': 'none',
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999"
}
);
    const v235 = document.createElement("img");
    v235.id = "avatarImage";
    Object.assign(v235.style, {
      'width': '100px',
      'height': "100px",
      'borderRadius': "50%",
      'border': "2px solid #fff",
      'boxShadow': "0 0 10px rgba(0,0,0,0.5)",
      'backgroundColor': "#1a1a1a"
}
);
    v234.appendChild(v235);
    document.body.appendChild(v234);
}
  if (!document.getElementById("top10Preview")) {
    const v236 = document.createElement("div");
    v236.id = "top10Preview";
    Object.assign(v236.style, {
      'position': "absolute",
      'display': 'none',
      'pointerEvents': "none",
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999",
      'padding': "10px",
      'borderRadius': "8px",
      'backgroundColor': "rgba(30, 30, 40, 0.95)",
      'color': "#fff",
      'fontSize': "12px",
      'minWidth': '230px',
      'boxShadow': "0 0 10px rgba(0,0,0,0.6)",
      'fontFamily': "Segoe UI, sans-serif"
}
);
    const v237 = document.createElement('div');
    v237.id = "top10List";
    v236.appendChild(v237);
    document.body.appendChild(v236);
}
}
function showAvatar(v238, v239) {
  if (v239) {
    $("#avatarImage").attr("src", v239);
    $("#avatarPreview").css({
      'top': v238.pageY + 0xa + 'px',
      'left': v238.pageX + 0xa + 'px',
      'display': "block"
}
).stop(true, true).fadeTo(0xc8, 0x1);
}
}
function showTop10(v240, v241) {
  if (v241.length > 0x0) {
    let v242 = "<div style=\"font-size:14px;
 font-weight:bold;
 text-align:center;
 margin-bottom:8px;
\">🏆 Top 10 🏆</div><hr style=\"border-color:#444;
\">";
    v242 += v241.map((v243, v244) => {
      const v245 = v244 === 0x0;
      return "\n                <div style=\"display:flex;
 justify-content:space-between;
 margin: 4px 0;
 " + (v245 ? "font-weight:bold;
 color:#ffd700;
" : '') + "\">\n                    <span>" + (v245 ? '⭐️' : v244 + 0x1 + '.') + " " + v243.Name.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim() + "</span>\n                    <span>" + formatScore(v243.Score) + "</span>\n                </div>";
}
).join('');
    $("#top10List").html(v242);
    $('#top10Preview').css({
      'top': v240.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': v240.pageX + 0xa + 'px',
      'display': "block"
}
).stop(true, true).fadeTo(0xc8, 0x1);
}
}
function bindHoverEvents(v246) {
  $(document).on("mouseenter", v246, function (v247) {
    const v248 = $(this).closest('tr').attr("value")?.["trim"]()['toLowerCase']();
    const v249 = top1Servers[v248];
    if (v249) {
      showAvatar(v247, v249.Avatar);
      showTop10(v247, v249.TopPlayers || []);
}
}
);
  $(document).on("mousemove", v246, function (v250) {
    $("#avatarPreview").css({
      'top': v250.pageY + 0xa + 'px',
      'left': v250.pageX + 0xa + 'px'
}
);
    $("#top10Preview").css({
      'top': v250.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': v250.pageX + -0x4b + 'px'
}
);
}
);
  $(document).on('mouseleave', v246, function () {
    $("#avatarPreview").stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
}
);
    $('#top10Preview').stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
}
);
}
);
}
init();
function sanitize(v251) {
  return v251.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim();
}
function obtenerImagenPorSeleccion(v252) {
  let v253 = '';
  switch (v252) {
    case '0':
      v253 = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case '1':
      v253 = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case '2':
      v253 = 'https://asserts.wormworld.io/backgrounds/bkgnd9.png';
      break;
    case '3':
      v253 = 'https://asserts.wormworld.io/backgrounds/bkgnd10.png';
      break;
    case '4':
      v253 = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case '5':
      v253 = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case '6':
      v253 = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case '7':
      v253 = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case '8':
      v253 = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case '9':
      v253 = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case '10':
      v253 = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case '11':
      v253 = 'https://asserts.wormworld.io/backgrounds/arena01.png';
      break;
    case '12':
      v253 = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case '13':
      v253 = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case '14':
      v253 = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no v�lido, se utilizar� una imagen por defecto.");
}
  return v253;
}
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var v254 = anApp.s.H.sk;
      let v255 = Math.PI;
      var v256 = v254 + v255 / 0x168 * 0x9;
      if (v256 >= v255) {
        v256 = -v254;
}
      anApp.s.H.sk = v256;
}
, 0x37);
}
}
function adjustInterval() {
  if (cycleCounter >= 0x28) {
    if (isIncrementing) {
      initialInterval += 0x19;
}
 else {
      initialInterval -= 0x64;
}
    cycleCounter = 0x1;
}
}
function controlIntervalAdjustment() {
  if (initialInterval === 0x37 && cycleCounter >= 0x28) {
    initialInterval += 0x19;
    cycleCounter = 0x1;
    isIncrementing = true;
}
  if (initialInterval === 0x50) {
    adjustInterval();
}
  if (initialInterval === 0x69) {
    adjustInterval();
}
  if (initialInterval === 0x82) {
    adjustInterval();
}
  if (initialInterval === 0x9b) {
    adjustInterval();
}
  if (initialInterval === 0xb4) {
    adjustInterval();
}
  if (initialInterval === 0xcd) {
    adjustInterval();
}
  if (initialInterval === 0xe6) {
    adjustInterval();
}
  if (initialInterval === 0xff) {
    adjustInterval();
}
  if (initialInterval === 0x118) {
    adjustInterval();
}
  if (initialInterval === 0x131) {
    adjustInterval();
}
  if (initialInterval === 0x14a) {
    adjustInterval();
}
  if (initialInterval === 0x163) {
    adjustInterval();
}
  if (initialInterval === 0x17c) {
    adjustInterval();
}
  if (initialInterval === 0x195) {
    adjustInterval();
}
  if (initialInterval === 0x1ae) {
    adjustInterval();
}
  if (initialInterval === 0x1c7 && cycleCounter >= 0x28) {
    initialInterval -= 0x64;
    cycleCounter = 0x1;
    isIncrementing = false;
}
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (intervalID === null) {
    let v257 = anApp.s.H.sk;
    let v258 = Math.PI;
    let v259 = v257 + v258 / 0x168 * 0x9;
    if (v259 >= v258) {
      v259 = -v257;
}
    anApp.s.H.sk = v259;
    cycleCounter += 0x1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
}
}
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 0x37;
  cycleCounter = 0x1;
  isIncrementing = true;
  manageIntervalCycle();
}
const isPremiumUser = localStorage.getItem('premium') === "true";
const wormxt_5dlrs_Obj = {
  'visiblePowersAll': false,
  'speed_zigzag': true
}
;
var wormxt_Obj = {
  'laserColor': "FFFFFF",
  'colorFondo': "0D0400",
  'colorBorde': "FF0000",
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
}
;
const showVersionPays = async function (v260) {
  var v261 = clientes.clientesActivos.find(function (v262) {
    return v262.client_ID === v260.user_data.userId;
}
);
  if (v261) {
    console.log("El ID " + v260.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    const v263 = new Date();
    const v264 = new Date(v261.client_DateExpired);
    if (v263 > v264) {
      console.log("La fecha de expiraci�n ha vencido.");
      localStorage.setItem("premium", "false");
}
 else {
      console.log("La fecha de expiraci�n es v�lida.");
      settings5dolars(v261.client_DateExpired);
      localStorage.setItem("premium", "true");
}
}
 else {
    console.log("El ID generado no coincide con ning�n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
}
}
;
function setSectorsGame() {
  zw_Background.removeChildren();
  zw_Background.clear();
  console.log("0D0400");
  zw_Background.removeChildren();
  zw_Background.clear();
  zw_Background.lineStyle(0x1, 0xff0000, 0x1);
  zw_Background.drawCircle(0x0, 0x0, 0x1f4);
  zw_Background.endFill();
}
function decodeUnicode(v265) {
  return v265.replace(/\\u[\dA-F]{
4
}
/gi, function (v266) {
    return String.fromCharCode(parseInt(v266.replace(/\\u/, ''), 0x10));
}
).replace(/\\u[0-9A-F]{
2
}
/g, function (v267) {
    return String.fromCharCode(parseInt(v267.replace(/\\u/, ''), 0x10));
}
);
}
const settings5dolars = async function (v268) {
  var v269 = $("div[category='theme']");
  addMinicolor(v269[0x1], 'gameColorGroup', "GAME", "colorFondo", "0D0400");
  addMinicolor(v269[0x1], 'borderColorGroup', "BORDE GAME", "colorBorde", "FF0000");
  addMinicolor(v269[0x1], 'laserColorGroup', 'LASER', "laserColor", "FFFFFF");
  addMinicolor(v269[0x1], 'hsTextColorGroup', "HS TEXT", "hsTextColor", "FFFFFF");
  addMinicolor(v269[0x1], "killTextColorGroup", "KILL TEXT", "killTextColor", "FFFFFF");
  addMinicolor(v269[0x1], "minimapBorderColorGroup", "MINIMAP BORDER", 'minimapBorderColor', "FFFFFF");
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;
background-color: transparent;
border-radius: 5px;
\">menu</i>");
  $('#user_config').on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", 'absolute').css("display", "block");
    giroActive = false;
    toggleGiro();
}
);
  let v270 = localStorage.getItem("showTeamList");
  let v271;
  if (v270 === "true") {
    v271 = true;
    theoKzObjects.showTeamList = true;
}
 else if (v270 === "false") {
    v271 = false;
    theoKzObjects.showTeamList = false;
}
 else {
    v271 = true;
}
  let v272 = localStorage.getItem("showAnimationHeadshot");
  let v273;
  if (v272 === "true") {
    v273 = true;
    theoKzObjects.animationHeadshot = true;
}
 else if (v272 === 'false') {
    v273 = false;
    theoKzObjects.animationHeadshot = false;
}
 else {
    v273 = true;
}
  $('#settings-backgroundSolid-switch').prop("checked", false);
  $("#settings-backgroundSolid-switch").on('click', function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
}
 else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
}
}
);
  $("#showAnimationHeadshot").on("change", function () {
    theoKzObjects.animationHeadshot = $(this).is(":checked");
    localStorage.setItem('showAnimationHeadshot', true);
    console.log("Mostrar lista de amigos:", true);
}
);
  $("#showTeamList").on("change", function () {
    theoKzObjects.showTeamList = $(this).is(':checked');
    localStorage.setItem("showTeamList", true);
    console.log("Mostrar lista de amigos:", true);
}
);
  $('#clossed_Setings').on('click', function () {
    $("#settings-container2, #clossed_Setings").css('display', 'none');
    giroActive = true;
    toggleGiro();
}
);
  let v274 = $("<div class=\"cursor-menu\"></div>");
  let v275 = $("<div class=\"icon-selector\"></div>");
  for (let v276 = 0x1;
 v276 < 0x2a;
 v276++) {
    const v277 = 'https://deltav4.gitlab.io/v7/assets/cursors/cursor_' + v276.toString().padStart(0x2, '0') + ".cur";
    const v278 = v276 === 0x1 ? "active" : '';
    const v279 = $("<img>").attr({
      'src': v277,
      'data-cursor': v277,
      'alt': "Cursor " + v276
}
);
    const v280 = $("<div>").addClass("cursor-box icon-selector__item").addClass(v278).append(v279);
    v275.append(v280);
}
  v274.append(v275);
  $(".options-list.ps div[category=\"cursor\"]").append(v274);
  $("#background-canvas").after("<div id=\"firefly-container\"></div>");
  for (let v281 = 0x0;
 v281 < 0x14;
 v281++) {
    let v282 = $('<div>').addClass("firefly");
    v282.css({
      'left': Math.random() * window.innerWidth + 'px',
      'top': Math.random() * window.innerHeight + 'px',
      'animationDuration': 0x2 + Math.random() + "s, " + (0x5 + Math.random() * 0xa) + 's'
}
);
}
  $('.profile-info').prepend("\n        <div class=\"premium-badge\">\n            ⭐ Premium ⭐ <br> \n            Expire: <span id=\"premium-expiration\">" + v268 + "</span>\n        </div>\n    ");
  $('.hotkey-container').append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val('z');
  $('#restart-key').val('r');
  $('#laserHSkey-key').val('l');
  $("#wormExplot-key").val('x');
  $("#giro-key").val('s');
  $('#noSkin-key').val('f');
  $("#noAuras-key").val('g');
  $("#sectores-key").val('q');
  $("#background-key").val('c');
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
}
);
  $('.key-input').keydown(function (v283) {
    v283.stopPropagation();
}
);
  $(".key-input").keypress(function (v284) {
    v284.preventDefault();
    var v285 = v284.key.toLowerCase();
    $(this).val(v285);
    var v286 = $(this).attr('id');
    switch (v286) {
      case "zoom-key":
        cambiarKey('zoom', v285);
        break;
      case "restart-key":
        cambiarKey("restart", v285);
        break;
      case "wormExplot-key":
        cambiarKey("wormExplot", v285);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", v285);
        break;
      case "giro-key":
        cambiarKey("giro", v285);
        break;
      case 'noSkin-key':
        cambiarKey("noSkin", v285);
        break;
      case 'noAuras-key':
        cambiarKey("noAuras", v285);
        break;
      case 'sectores-key':
        cambiarKey("sectores", v285);
        break;
      case "background-key":
        cambiarKey('background', v285);
        break;
}
    $(this).blur();
}
);
  $("#user-section").append(v275);
  $('.cursor-box').on("click", function () {
    var v287 = $(this).find("img").attr('src');
    $("body, button, input, a, textarea, select, div, span, p").css({
      'cursor': "url(" + v287 + "), auto"
}
);
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
}
);
  $("#mm-event-text").html("<span style='color: #98928a;
' class='settings_span'>EXP: " + v268 + "</span>");
  $("#sound-hs").val("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  $('#sound-10hs').val("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_hssound = new Audio($('#sound-hs').val());
  zw_laughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on('input', function () {
    zw_hssound.src = $(this).val();
}
);
  $("#sound-10hs").on('input', function () {
    zw_laughsound.src = $(this).val();
}
);
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-sectores-switch\">" + "<span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + '</span>' + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-notAbilityAll-switch\">" + "<span class=\"names_settings\"> : Show All Power-Ups</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\">" + "<span class=\"names_settings\"> : Show Speed&Zigzag</span>" + "</div>" + "<div id=\"display_color\">" + "<div class=\"container\">" + "<input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\">" + "<span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span>" + '</div>' + "<div class=\"container\">" + "<input id=\"color_palet\" type=\"color\" value=\"#00243E\">" + "<span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span>" + "</div>" + "<div class=\"container\">" + "<input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\">" + "<span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + "</span>" + '</div>');
  const v288 = {
    'color_paletRGB': v289 => wormxt_Obj.colorFondo = v289,
    'color_palet': v290 => wormxt_Obj.laserColor = v290,
    'color_palet2': v291 => wormxt_Obj.colorBorde = v291
}
;
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const v292 = $(this).attr('id');
    const v293 = $(this).val().replace('#', '');
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + v292 + ": " + v293);
    if (v288[v292]) {
      v288[v292](v293);
}
    setSectorsGame();
}
);
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", false);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
}
 else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
}
}
);
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $('#settings-Speed_ZigZag-switch').prop("checked", true);
  $('#settings-Speed_ZigZag-switch').on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
}
 else {
      wormxt_5dlrs_Obj.speed_zigzag = false;
}
}
);
  $("#settings-laserHS-switch").prop('checked', false);
  $("#settings-laserHS-switch").on('click', function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
}
 else {
      wormxt_Obj.laserHS = false;
}
}
);
  $("#settings-interactive-switch").prop("checked", wormxt_Obj.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      zw_explotWubtracttexture.interactive = false;
}
 else {
}
}
);
  $("#settings-sectores-switch").prop("checked", false);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
}
 else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
}
}
);
}
;
var TIME = new Date().getTime();
var linkCSS = "https://zwormextenstion.com/wormExtension/css/style2.css?v=" + TIME;
var unlockSkinsExecuted = false;
var unlockSkinsPrivate = async function (v294) {
  if (unlockSkinsExecuted) {
    console.log("unlockSkinsPrivate ya fue ejecutada anteriormente.");
    return;
}
  unlockSkinsExecuted = true;
  var v295 = v294.u.si.userId;
  var v296 = clientsSkins.clientsSkinsActivos.find(v297 => v297.client_ID === v295);
  if (v296 && v296.Client_VisibleSkinPrivate) {
    console.log(v296);
    const v298 = new Date();
    const v299 = new Date(v296.client_DateExpired);
    if (v298 > v299) {
      console.log("La fecha de skins expiración ha vencido.");
}
 else {
      console.log("La fecha de skins expiración es válida.");
      let v300 = Array.isArray(v296.Client_VisibleSkinPrivate) ? v296.Client_VisibleSkinPrivate : [v296.Client_VisibleSkinPrivate];
      v300.forEach(v301 => {
        let v302 = theoKzObjects.idSkin.find(v303 => v303.id === v301);
        if (v302) {
          v302.nonbuyable = false;
}
}
);
      console.log("Skins privadas desbloqueadas para el usuario " + v295 + ':', v300);
}
}
 else {
    console.log("No se encontraron skins privadas para el usuario " + v295 + '.');
}
}
;
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    zw_girosubtracttexture.texture = ungirotexture;
    zw_girosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 0x37;
    cycleCounter = 0x1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
}
 else {
    zw_girosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
}
  giroActive = !giroActive;
}
const showServer2 = async function (v304) {
  updateBackground();
  fetchCustomLogo(v304.u.si.userId);
  zwormData.id_user = v304.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(v304, v304.u.si.userId);
  zw_hssound = new Audio('https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3');
  zw_laughsound = new Audio("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_explotWubtracttexture = new pixi.Sprite();
  zw_explotWubtracttexture.texture = explotWtexture;
  zw_explotWubtracttexture.interactive = true;
  zw_explotWubtracttexture.buttonMode = true;
  zw_explotWubtracttexture.x = -0x2d;
  zw_explotWubtracttexture.y = 0xa;
  zw_explotWubtracttexture.alpha = 0.25;
  function v305() {
    zw_explotWubtracttexture.interactive = false;
    var v306 = 0x0;
    var v307 = setInterval(function () {
      var v308 = 0x1 - 0.0075 * v306;
      zw_explotWubtracttexture.alpha = v308;
      v306++;
      if (v306 > 0x64) {
        clearInterval(v307);
        zw_explotWubtracttexture.alpha = 0.25;
        zw_explotWubtracttexture.interactive = true;
}
}
, 100);
}
  zw_explotWubtracttexture.on('mouseup', function () {
    v305();
    const v309 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(v309);
    setTimeout(() => {
      let v310 = zw_lastserver;
      $('.overlay-2').css('position', "static");
      if (v310) {
        anApp.r.Hd();
        anApp.sa(v310);
}
}
, 0x3e8);
}
);
  zw_girosubtracttexture = new pixi.Sprite();
  zw_girosubtracttexture.texture = ungirotexture;
  zw_girosubtracttexture.interactive = true;
  zw_girosubtracttexture.buttonMode = true;
  zw_girosubtracttexture.x = -0xa;
  zw_girosubtracttexture.y = 0xa;
  zw_girosubtracttexture.alpha = 0.25;
  zw_girosubtracttexture.on('mouseup', function () {
    toggleGiro();
}
);
  if (zw_mobilecheck()) {
    zw_girosubtracttexture.x = -0x5a;
    zw_explotWubtracttexture.x = -0x87;
    zw_explotWubtracttexture.y = 0xa;
    let v311 = new Function("return PIXI;
")();
    let v312 = v311.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let v313 = v311.Texture.from("https://i.imgur.com/4JZUa1u.png");
    zw_zoomplustexture = new v311.Sprite();
    zw_zoomplustexture.texture = v312;
    zw_zoomplustexture.interactive = true;
    zw_zoomplustexture.buttonMode = true;
    zw_zoomplustexture.x = -0xa;
    zw_zoomplustexture.y = 0xa;
    zw_zoomplustexture.alpha = 0.25;
    zw_zoomplustexture.on("mouseup", function () {
      zw_updatezoom(Math.min(zw_multiplier + 0.25, 0x32));
}
);
    zw_zoomsubtracttexture = new v311.Sprite();
    zw_zoomsubtracttexture.texture = v313;
    zw_zoomsubtracttexture.interactive = true;
    zw_zoomsubtracttexture.buttonMode = true;
    zw_zoomsubtracttexture.x = -0x2b;
    zw_zoomsubtracttexture.y = 0xa;
    zw_zoomsubtracttexture.alpha = 0.25;
    zw_zoomsubtracttexture.on("mouseup", function () {
      zw_updatezoom(Math.max(zw_multiplier - 0.25, 0.25));
}
);
}
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none;
 position: absolute;
\" placeholder=\"Escribe tu mensaje...\" />");
  var v314 = function () {
    $("#chatInput").css('display', "none").val('');
    $("#game-canvas").focus();
}
;
  var v315 = function () {
    let v316 = $("#chatInput").val();
    if ($.trim(v316) !== '') {
      console.log("Mensaje enviado:", v316);
      zwormData.message = v316;
      setTimeout(() => {
        zwormData.message = '';
}
, 0x5dc);
}
}
;
  $('#chatInput').on("keydown", function (v317) {
    if (v317.key === "Enter") {
      v315();
      v314();
}
 else if (v317.key === "Escape") {
      v314();
}
}
);
  $('#mm-action-play').html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-zw-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on('click', function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass('active');
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
}
);
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $('#game-view').append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $('#aqnvgcpz05orkobh').replaceWith("\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;
 background-color: transparent;
 border-radius: 8px;
 padding: 20px;
 text-align: center;
\">\n        <h2 style=\"color: #fff;
\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;
\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff;
 font-weight: bold;
\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da;
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
\">\n            Buy on Discord\n        </button>\n    </div>\n        ");
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
}
);
  $("#social-buttons").replaceWith('');
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/jXzoG5D.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/jXzoG5D.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #zwplayagain, #final-replay").click(function () {
    $(".overlay-2").css('position', "static");
}
);
  $("#mm-zw-settings").click(function () {
    $('#settings-menu').css({
      'display': "flex",
      'opacity': '1'
}
);
}
);
  $("#popup-menu-back").click(function () {
    $("#settings-menu").css("opacity", '0');
}
);
  $('#mm-skin-next').click(function () {
    $('#mm-skin-canv').addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
}
, 0x15e);
}
);
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
}
, 0x15e);
}
);
  const v318 = ["#mm-player-info", "#mm-skin-canv", "#mm-settings", '#mm-leaders', "#mm-store", "#mm-coins-box"];
  $(v318.join(", ")).click(function () {
    $("#settings-menu").css({
      'display': "none",
      'opacity': '0'
}
);
}
);
  const v319 = ["#mm-action-play", "#mm-settings", "#mm-leaders", '#mm-store', "#mm-zw-settings"];
  v319.forEach(function (v320) {
    $(v320).hover(function () {
      $(this).css({
        'box-shadow': "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
}
);
}
, function () {
      $(this).css({
        'box-shadow': "0 1px 1px 0 rgba(0,0,0,.5)"
}
);
}
);
}
);
  $(".mm-merchant-cont").replaceWith('');
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#zwplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".mm-logo").on("click", function () {
    var v321 = prompt("Extension 'W' or 'T':");
    if (v321 === 'W') {
      $('.mm-logo').text('Loading.');
      setTimeout(() => {
        $('.mm-logo').text("Loading..");
        setTimeout(() => {
          $('.mm-logo').text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("WormWorld");
}
, 0x7d0);
}
, 0x5dc);
}
, 0x3e8);
      $('.servers-peru').html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $('.servers-francia').html('');
      $(".servers-singapur").html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (a = 0x0;
 a < serverData.length;
 a++) {
          var v322 = serverData[a].dataCon;
          var v323 = serverData[a].dataRoom;
          var v324 = serverData[a].serverName;
          var v325 = serverData[a].imgSrc;
          let v326 = "<a>\n                        <img src=\"" + v325 + "\"    style=\"margin-left: 100px;
\">\n                    </a>";
          let v327 = v323.match(/[a-zA-Z]+/g).join('');
          let v328 = document.createElement('p');
          v328.value = v322;
          v328.innerHTML = v324;
          let v329 = document.createElement("div");
          v329.setAttribute("class", "conteiner");
          if (v327 == 'br') {
            $(".servers-peru").append(v329);
            $(v329).append(v328);
            $(v328).append(v326);
}
 else {
            if (v327 == 'mx') {
              $(".servers-mexico").append(v329);
              $(v329).append(v328);
              $(v328).append(v326);
}
 else {
              if (v327 == 'us') {
                $(".servers-eeuu").append(v329);
                $(v329).append(v328);
                $(v328).append(v326);
}
 else {
                if (v327 == 'ca') {
                  $(".servers-canada").append(v329);
                  $(v329).append(v328);
                  $(v328).append(v326);
}
 else {
                  if (v327 == 'de') {
                    $(".servers-germania").append(v329);
                    $(v329).append(v328);
                    $(v328).append(v326);
}
 else {
                    if (v327 == 'fr') {
                      $('.servers-francia').append(v329);
                      $(v329).append(v328);
                      $(v328).append(v326);
}
 else {
                      if (v327 == 'sg') {
                        $('.servers-singapur').append(v329);
                        $(v329).append(v328);
                        $(v328).append(v326);
}
 else {
                        if (v327 == 'jp') {
                          $(".servers-japon").append(v329);
                          $(v329).append(v328);
                          $(v328).append(v326);
}
 else {
                          if (v327 == 'au') {
                            $('.servers-australia').append(v329);
                            $(v329).append(v328);
                            $(v328).append(v326);
}
 else if (v327 == 'ae') {
                            $(".servers-granbretana").append(v329);
                            $(v329).append(v328);
                            $(v328).append(v326);
}
}
}
}
}
}
}
}
}
          $(v328).attr("class", "selectSala");
          $(v328).attr("value", v323);
          $(v328).attr("data-con", v322);
          $(v328).click(function () {
            $(".overlay-2").css('position', 'static');
            let v330 = $(this).attr('data-con');
            console.log(v330);
            if (v330) {
              v304.r.Hd();
              v304.sa(v330);
              zw_servertext.text = $(this).text();
              console.log($(this).text());
}
}
);
}
}
, 0xbb8);
}
 else if (v321 === 'T') {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text('Loading..');
        setTimeout(() => {
          $('.mm-logo').text("Loading...");
          setTimeout(() => {
            $('.mm-logo').text("Tim Map");
}
, 0x7d0);
}
, 0x5dc);
}
, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $(".servers-francia").html('');
      $(".servers-singapur").html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $('.servers-granbretana').html('');
      setTimeout(() => {
        for (a = 0x0;
 a < serverDataTimMap.length;
 a++) {
          var v331 = serverDataTimMap[a].dataCon;
          var v332 = serverDataTimMap[a].dataRoom;
          var v333 = serverDataTimMap[a].serverName;
          var v334 = serverDataTimMap[a].imgSrc;
          var v335 = serverDataTimMap[a].secondHref;
          let v336 = v332.match(/[a-zA-Z]+/g).join('');
          let v337 = document.createElement('p');
          v337.value = v331;
          let v338 = "<a>\n                        <img src=\"" + v334 + "\"    style=\"margin-left: 100px;
\">\n                    </a>";
          let v339 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (v339.test(v338)) {
            v338 = v338.replace(v339, '');
}
 else {
            v338;
}
          let v340 = /<span style=\\"(.*?)"><\\\/span>/;
          if (v340.test(v333)) {
            v333 = v333.replace(v340, "<span style=\"background-color: #4dff00;
width: 12px;
height: 12px;
border-radius: 12px;
margin-top: 4px;
float: right;
\"></span>");
}
 else {
            v333;
}
          v337.innerHTML = v333;
          let v341 = document.createElement("div");
          v341.setAttribute("class", "conteiner");
          if (v336 == 'BR') {
            $(".servers-peru").append(v341);
            $(v341).append(v337);
            $(v337).append(v338);
}
 else {
            if (v336 == 'MX') {
              $(".servers-mexico").append(v341);
              $(v341).append(v337);
              $(v337).append(v338);
}
 else {
              if (v336 == 'US') {
                $('.servers-eeuu').append(v341);
                $(v341).append(v337);
                $(v337).append(v338);
}
 else {
                if (v336 == 'CA') {
                  $(".servers-canada").append(v341);
                  $(v341).append(v337);
                  $(v337).append(v338);
}
 else {
                  if (v336 == 'DE') {
                    $('.servers-germania').append(v341);
                    $(v341).append(v337);
                    $(v337).append(v338);
}
 else {
                    if (v336 == 'FR') {
                      $(".servers-francia").append(v341);
                      $(v341).append(v337);
                      $(v337).append(v338);
}
 else {
                      if (v336 == 'SG') {
                        $(".servers-singapur").append(v341);
                        $(v341).append(v337);
                        $(v337).append(v338);
}
 else {
                        if (v336 == 'JP') {
                          $(".servers-japon").append(v341);
                          $(v341).append(v337);
                          $(v337).append(v338);
}
 else {
                          if (v336 == 'AU') {
                            $('.servers-australia').append(v341);
                            $(v341).append(v337);
                            $(v337).append(v338);
}
 else if (v336 == 'AE') {
                            $(".servers-granbretana").append(v341);
                            $(v341).append(v337);
                            $(v337).append(v338);
}
}
}
}
}
}
}
}
}
          $(v337).attr("class", "selectSala");
          $(v337).attr("value", v332);
          $(v337).attr('data-con', v331);
          $(v337).click(function () {
            $(".overlay-2").css("position", 'static');
            let v342 = $(this).attr("data-con");
            let v343 = $(this).attr("value");
            console.log(v343);
            if (v342) {
              v304.r.Hd();
              v304.sa(v342);
}
}
);
}
}
, 0xbb8);
}
 else {
      alert("Ingresa 'W' o 'T' para continuar.");
}
}
);
}
;
const ctx = {
  'fontStyle': {
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': 'round',
      'stroke': '#FFF',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'wordWrap': true
}
)
}
}
;
timeFontColors = ["#FFD500", '#FFC75A', '#00B2ED', "#FF4544", "#0094D7", '#CCCF81', "#ff0999"];
timeFontColors2 = ['#51a913', "#f97a1d", "#00B2ED", "#FF4544", '#0094D7', '#CCCF81', "#ff0999"];
for (let index = 0x0;
 index < timeFontColors.length;
 index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    'align': "center",
    'fill': color,
    'fontSize': 0x19,
    'lineJoin': "round",
    'whiteSpace': 'normal',
    'wordWrap': true,
    'dropShadow': true,
    'dropShadowBlur': 0x6,
    'fontWeight': "bold"
}
);
}
ctx.ptc = {
}
;
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0;
 i < portionTimes.length;
 i++) {
  let name = 'clock_ad' + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle['tfc' + i]);
  ctx.ptc[name].y = 0x3d;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 0x2;
ctx.containerImgTest.y = window.innerHeight / 0x2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === 'undefined' || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no est� definido correctamente o no contiene playerX y playerY.");
    return;
}
  if (!ctx.team_2) {
    ctx.team_2 = new PIXI.Graphics();
    ctx.team_2.zIndex = 0x2;
    ctx.team_2.alpha = 0.9;
    ctx.team_2.beginFill(0xff0000);
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
    ctx.team_2.lineStyle(0x1, "black");
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
}
  ctx.team_2.x = window.coords.playerX;
  ctx.team_2.y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx.team_2);
}
 else {
    console.error("Error: ctx.pointsContainer no est� definido.");
}
}
;
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (v344, v345) {
  if (v345.trim() === '') {
    return;
}
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': "toast-top-center",
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': "300",
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': "1000",
    'showEasing': "swing",
    'hideEasing': "linear",
    'showMethod': "fadeIn",
    'hideMethod': "fadeOut",
    'toastClass': "server-message-toast"
}
;
  toastr.success(v345, v344, {
    'iconClass': "toast-info"
}
);
}
;
var createTeamMessage = function (v346, v347, v348) {
  if (v348.trim() === '') {
    return;
}
  gameState.players.forEach((v349, v350) => {
    if (v349.teamCode === v346 && v349.nickname !== v347) {
      let v351 = v349.nickname.length > 0xc ? v349.nickname.slice(0x0, 0xc) : v349.nickname;
      toastr.options = {
        'closeButton': false,
        'debug': false,
        'newestOnTop': true,
        'progressBar': true,
        'positionClass': "toast-top-center",
        'preventDuplicates': true,
        'onclick': null,
        'showDuration': "300",
        'hideDuration': "1000",
        'timeOut': "5000",
        'extendedTimeOut': "1000",
        'showEasing': "swing",
        'hideEasing': "linear",
        'showMethod': "fadeIn",
        'hideMethod': "fadeOut"
}
;
      toastr.success('' + v348, '' + v347, {
        'iconClass': "toast-info"
}
);
      console.log("Mensaje enviado por " + v347 + " recibido por el jugador " + v351 + " (" + v350 + ") del equipo " + v346);
}
}
);
}
;
var createTeamUbication = function (v352, v353) {
  updateTeamTable(gameState, v352);
  gameState.players.forEach((v354, v355) => {
    if (v354.teamCode === v352) {
      let v356 = v354.teamColor || v353;
      let v357 = v354.nickname.replace(/\u3164/g, '').replace(/ZW_\d+$/, '').trim();
      if (!ctx[v355]) {
        ctx[v355] = new PIXI.Graphics();
        ctx[v355].zIndex = 0x2;
        ctx[v355].alpha = 0.9;
        ctx.teamsContainer.addChild(ctx[v355]);
        let v358 = new PIXI.Text(v357, {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xe,
          'fill': v356,
          'stroke': 0x0,
          'strokeThickness': 0x2
}
);
        v358.anchor.set(0.5);
        v358.visible = false;
        v358.y = -0xf;
        ctx[v355].addChild(v358);
        ctx[v355].hitArea = new PIXI.Circle(0x0, 0x0, 2.4);
        ctx[v355].interactive = true;
        ctx[v355].buttonMode = true;
        ctx[v355].on("mouseover", () => {
          v358.visible = true;
}
);
        ctx[v355].on("mouseout", () => {
          v358.visible = false;
}
);
        ctx[v355].on("mouseup", () => {
          v358.visible = !v358.visible;
}
);
        ctx[v355].on('touchend', () => {
          v358.visible = !v358.visible;
}
);
        ctx[v355].nameText = v358;
}
      ctx[v355].clear();
      ctx[v355].beginFill(v356);
      ctx[v355].drawCircle(0x0, 0x0, 2.4);
      ctx[v355].endFill();
      ctx[v355].lineStyle(0x1, 0x0);
      ctx[v355].drawCircle(0x0, 0x0, 2.4);
      ctx[v355].endFill();
      ctx[v355].x = v354.position.x;
      ctx[v355].y = v354.position.y;
      ctx[v355].nameText.y = -0xf;
      if (ctx[v355].nameText.text !== v357) {
        ctx[v355].nameText.text = v357;
}
      if (ctx[v355].nameText.style.fill !== v356) {
        ctx[v355].nameText.style.fill = v356;
}
}
}
);
}
;
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(v359 => {
      if (ctx[v359] instanceof PIXI.Graphics && ctx[v359].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[v359]);
        ctx[v359].destroy(true);
        delete ctx[v359];
}
      if (ctx[v359 + "_text"] && ctx[v359 + "_text"].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[v359 + "_text"]);
        ctx[v359 + '_text'].destroy(true);
        delete ctx[v359 + "_text"];
}
}
);
}
 else {
    console.error("Error: ctx.teamsContainer is not defined.");
}
}
;
ctx.titleRec2 = new PIXI.Text("Friends", ctx.fontStyle.blanco);
ctx.titleRec2.y = -0x5;
ctx.containerHsRec2 = new PIXI.Container();
ctx.containerHsRec2.x = 0x1e;
ctx.containerHsRec2.y = 0xaa;
let playersTexts = [];
for (let index = 0x0;
 index < 0x5;
 index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + '.', ctx.fontStyle.blanco);
  deltaCoordinate.x = 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': '#FFFFFF',
    'fontSize': 0xc
}
);
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
function updatePlayerTable(v360) {
  const v361 = v360.players;
  const v362 = Array.from(v361.values());
  const v363 = v362.filter(v364 => v364.teamCode === '');
  playersTexts.forEach((v365, v366) => {
    if (v363[v366]) {
      let v367 = v363[v366];
      v365.text = v367.nickname.substring(0x0, 0x14);
      v365.style.fill = v367.teamColor;
}
 else {
      v365.text = '--';
      v365.style.fill = "#FFFFFF";
}
}
);
}
zw_TopFriends_list = new PIXI.Container();
zw_TopFriends_list.x = 0x50;
zw_TopFriends_list.y = 0xb9;
const titleTextfriendlist = new PIXI.Text("TEAM LIST", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffffff,
  'fontWeight': 'bold'
}
);
titleTextfriendlist.x = 0xa;
titleTextfriendlist.y = -0x5;
zw_TopFriends_list.addChild(titleTextfriendlist);
const dividerfriendlist = new PIXI.Graphics();
dividerfriendlist.lineStyle(0x2, 0xffffff, 0x1);
dividerfriendlist.moveTo(-0xf, 0xf);
dividerfriendlist.lineTo(0x50, 0xf);
dividerfriendlist.x = 0x5;
zw_TopFriends_list.addChild(dividerfriendlist);
function updateTeamTable(v368, v369) {
  for (let v370 = zw_TopFriends_list.children.length - 0x1;
 v370 >= 0x0;
 v370--) {
    let v371 = zw_TopFriends_list.children[v370];
    if (v371 !== titleTextfriendlist && v371 !== dividerfriendlist) {
      zw_TopFriends_list.removeChild(v371);
}
}
  let v372 = 0x0;
  v368.players.forEach((v373, v374) => {
    if (v373.teamCode === v369 && v373.wssCode === zwormData.wssCode) {
      let v375 = v373.nickname.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
      let v376 = /[\u0600-\u06FF]/.test(v375);
      const v377 = new PIXI.Text(v372 + 0x1 + ". " + v375, {
        'fontFamily': fonts[currentFontIndex],
        'fontSize': 0xc,
        'fill': v373.teamColor || 0xffffff,
        'stroke': 0x0,
        'strokeThickness': 0x2,
        'align': v376 ? "right" : "left"
}
);
      v377.x = -0x32;
      v377.y = 0x14 + v372 * 0xf;
      zw_TopFriends_list.addChild(v377);
      v372++;
      if (v372 >= 0xa) {
        return;
}
}
}
);
}
zw_TopHS_RecordHs = new PIXI.Container();
zw_TopHS_RecordHs.x = -0x37;
zw_TopHS_RecordHs.y = 0x73;
const titleText = new PIXI.Text("Top HS (👑)", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffd700,
  'fontWeight': "bold"
}
);
titleText.x = 0xa;
titleText.y = -0x5;
zw_TopHS_RecordHs.addChild(titleText);
const divider = new PIXI.Graphics();
divider.lineStyle(0x2, 0xffffff, 0x1);
divider.moveTo(0x0, 0xf);
divider.lineTo(0x50, 0xf);
divider.x = 0x5;
zw_TopHS_RecordHs.addChild(divider);
zw_Top3HS_RecordHs = new PIXI.Container();
zw_Top3HS_RecordHs.y = 0x19;
const titleText3hs = new PIXI.Text("Top 3 HS (👑)", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffd700,
  'fontWeight': "bold"
}
);
titleText3hs.x = 0xa;
titleText3hs.y = -0x5;
zw_Top3HS_RecordHs.addChild(titleText3hs);
const divider3hs = new PIXI.Graphics();
divider3hs.lineStyle(0x2, 0xffffff, 0x1);
divider3hs.moveTo(0x0, 0xf);
divider3hs.lineTo(0x50, 0xf);
divider3hs.x = 0x5;
zw_Top3HS_RecordHs.addChild(divider3hs);
var playerTexts = [];
const cleanNickname = v378 => {
  return v378.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
}
;
const updateTop8Hs = function () {
  const v379 = Array.from(gameState.players.values());
  const v380 = v379.filter(v381 => v381.hskill.hs > 0x0 && v381.nickname.trim() !== '');
  let v382 = v380.some(v383 => v383.nickname === "zworm");
  if (!v382 && false) {
    v380.push({
      'nickname': "zworm",
      'hskill': {
        'hs': 0x0
}
,
      'teamColor': zwormData.teamColor
}
);
}
  if (v380.length === 0x0) {
    return;
}
  v380.sort((v384, v385) => v385.hskill.hs - v384.hskill.hs);
  for (let v386 = zw_TopHS_RecordHs.children.length - 0x1;
 v386 >= 0x0;
 v386--) {
    let v387 = zw_TopHS_RecordHs.children[v386];
    if (v387 !== titleText && v387 !== divider) {
      zw_TopHS_RecordHs.removeChild(v387);
}
}
  playerTexts.length = 0x0;
  for (let v388 = 0x0;
 v388 < Math.min(v380.length, 0x6);
 v388++) {
    let v389 = v380[v388];
    let v390 = v389.nickname.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
    let v391 = /[\u0600-\u06FF]/.test(v390);
    let v392 = v390.padEnd(0xf, " ");
    let v393 = ("☠️ " + v389.hskill.hs).padStart(0x6, " ");
    let v394 = new PIXI.Text(v388 + 0x1 + ".  " + v392 + " - " + v393 + " ☠️", {
      'fontFamily': fonts[currentFontIndex],
      'fontSize': 0xa,
      'fill': v389.teamColor || 0xffffff,
      'stroke': 0x0,
      'strokeThickness': 0x2,
      'align': v391 ? "right" : "left",
      'wordWrap': true,
      'wordWrapWidth': 0xc8,
      'breakWords': true
}
);
    v394.x = 0xa;
    v394.y = 0x14 + v388 * 0xf;
    playerTexts.push(v394);
    zw_TopHS_RecordHs.addChild(v394);
}
  zw_Top3HS_RecordHs.y = 0x1e + playerTexts.length * 0xf;
}
;
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
const textStyle = {
  'align': "center",
  'fontSize': 0xc,
  'lineJoin': "round",
  'strokeThickness': 0x1,
  'whiteSpace': "normal",
  'wordWrap': true
}
;
ctx.titleRec3 = new PIXI.Text("----------☠️---------", ctx.fontStyle.blanco);
ctx.titleRec3.y = -0x5;
ctx.titleRec3.x = 0xa;
ctx.containerHsRec3 = new PIXI.Container();
ctx.containerHsRec3.x = -0x37;
ctx.containerHsRec3.y = 0x118;
for (let index = 0x0;
 index < 0x8;
 index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(" ", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 0x9 ? -0x5 : 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': "#00FF00",
    ...textStyle
}
);
  playerNameText.x = index >= 0x9 ? -0x5 : 0x0;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerNameText);
  let playerName2Text = new PIXI.Text('?', {
    'fill': colors[index % colors.length],
    ...textStyle
}
);
  playerName2Text.x = 0x46;
  playerName2Text.y = 0xd * wallBounce;
  let playerHsText = new PIXI.Text('--', {
    'fill': "#FF0000",
    ...textStyle
}
);
  playerHsText.x = 0x7d;
  playerHsText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerHsText);
}
ctx.containerHsRec3.addChild(ctx.titleRec3);
var createTop1InMinimap = function (v395) {
  if (v395 && v395.position) {
    if (!ctx.top1Point) {
      ctx.top1Point = new PIXI.Graphics();
      ctx.top1Point.zIndex = 0x2;
      ctx.top1Point.alpha = 0.9;
      if (ctx.teamsContainer) {
        ctx.teamsContainer.addChild(ctx.top1Point);
}
 else {
        console.error("Error: ctx.teamsContainer is not defined.");
}
}
    ctx.top1Point.clear();
    ctx.top1Point.beginFill(0xfff000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.lineStyle(0x1, 0xff0000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.shadow = true;
    ctx.top1Point.shadowColor = 0xff0000;
    ctx.top1Point.shadowBlur = 0xf;
    ctx.top1Point.shadowOffsetX = 0x0;
    ctx.top1Point.shadowOffsetY = 0x0;
    const v396 = new PIXI.Text('👑', {
      'fontFamily': "Arial",
      'fontSize': 0xa,
      'fill': 0xffffff,
      'align': 'center'
}
);
    v396.x = -v396.width / 0x2;
    v396.y = -v396.height / 0x2;
    ctx.top1Point.addChild(v396);
    ctx.top1Point.x = v395.position.x;
    ctx.top1Point.y = v395.position.y;
    console.log("Top 1 actualizado:", v395.nombre);
}
 else {
    console.error("No hay jugadores disponibles para actualizar el top 1.");
}
}
;
const updateHeadshotHistory = function (v397) {
  for (let v398 = 0x0;
 v398 < 0x8;
 v398++) {
    if (ctx.containerHsRec3.children[0x3 * v398 + 0x1]) {
      ctx.containerHsRec3.children[0x3 * v398 + 0x1].text = v397[v398].nombre2;
}
    if (ctx.containerHsRec3.children[0x3 * v398 + 0x3]) {
      ctx.containerHsRec3.children[0x3 * v398 + 0x2].text = v397[v398].enemyNameHs;
}
}
}
;
function assignPtcValues(v399, v400, v401) {
  let v402 = portionTimes[v400] - parseInt((0.99 == v401 ? 0x1 : v401) * portionTimes[v400] / 0x1);
  let v403 = "clock_ad" + v400;
  v399.Tf[v400].addChild(ctx.ptc[v403]);
  if (ctx.ptc[v403]) {
    ctx.ptc[v403].x = v402 >= 0x64 ? 0xb : v402 >= 0xa ? 0x12 : 0x1a;
    ctx.ptc[v403].text = v402;
}
}
function account() {
  $(".servers-container > div").hide();
  $('.ui-tab').on("click", function () {
    var v404 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v404.toLowerCase()).fadeIn(0xc8);
    $(".servers-container > div").not(".servers-" + v404.toLowerCase()).fadeOut(0x64);
}
);
}
function obtieneUSER() {
  var v405 = {
}
;
  window.onclick = function () {
    v405 = window.nodes;
    if (v405 && Object.keys(v405).length > 0x0) {
      console.log(v405);
      if (v405) {
        var v406 = window.mouseX - v405.qj.If.x;
        var v407 = window.mouseY - v405.qj.If.y;
        var v408 = v405.Mb.ad;
        var v409 = Math.sqrt(v406 * v406 + v407 * v407);
        console.log("Cell:", v405, "nickname: ", v408, 'Distance:', v409);
}
}
}
;
}
;
function loadScript2(v410, v411 = true) {
  return new Promise((v412, v413) => {
    var v414 = document.createElement("script");
    v414.type = "text/javascript";
    v414.src = v410;
    v414.defer = v411;
    v414.onload = v412;
    v414.onerror = v413;
    document.head.appendChild(v414);
}
);
}
function loadStylesheet(v415) {
  return new Promise((v416, v417) => {
    var v418 = document.createElement("link");
    v418.rel = "stylesheet";
    v418.type = "text/css";
    v418.href = v415;
    v418.onload = v416;
    v418.onerror = v417;
    document.head.appendChild(v418);
}
);
}
loadStylesheet("https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;
500;
600;
700&family=Zen+Dots&display=swap");
loadScript2('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js', true);
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css');
loadScript2("https://cdn.socket.io/4.4.1/socket.io.min.js");
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (v419) {
  return typeof v419;
}
 : function (v420) {
  return v420 && "function" == typeof Symbol && v420.constructor === Symbol && v420 !== Symbol.prototype ? "symbol" : typeof v420;
}
;
var GoogleAuth;
!function () {
  try {
    console.log(function (v421, v422) {
      for (var v423 = 0x0;
 v423 < v422.length;
 v423 += 0x2) {
        v421 = v421.replaceAll(v422[v423], v422[v423 + 0x1]);
}
      return v421;
}
("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
}
 catch (v424) {
}
}
();
window.addEventListener("load", function () {
  function v425() {
    (function (v426, v427, v428) {
      var v429 = [];
      var v430 = [];
      var v431 = {
        '_version': '3.3.1',
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
}
,
        '_q': [],
        'on': function (v432, v433) {
          var v434 = this;
          setTimeout(function () {
            v433(v434[v432]);
}
, 0x0);
}
,
        'addTest': function (v435, v436, v437) {
          v430.push({
            'name': v435,
            'fn': v436,
            'options': v437
}
);
}
,
        'addAsyncTest': function (v438) {
          v430.push({
            'name': null,
            'fn': v438
}
);
}
}
;
      var v439 = function () {
}
;
      v439.prototype = v431;
      v439 = new v439();
      var v440 = false;
      try {
        v440 = 'WebSocket' in v426 && 0x2 === v426.WebSocket.CLOSING;
}
 catch (v441) {
}
      v439.addTest("websockets", v440);
      var v442 = v427.documentElement;
      var v443 = "svg" === v442.nodeName.toLowerCase();
      v439.addTest("canvas", function () {
        var v444 = 'function' != typeof v427.createElement ? v427.createElement(arguments[0x0]) : v443 ? v427.createElementNS.call(v427, 'http://www.w3.org/2000/svg', arguments[0x0]) : v427.createElement.apply(v427, arguments);
        return !(!v444.getContext || !v444.getContext('2d'));
}
);
      v439.addTest("canvastext", function () {
        return false !== v439.canvas && "function" == typeof ('function' != typeof v427.createElement ? v427.createElement(arguments[0x0]) : v443 ? v427.createElementNS.call(v427, 'http://www.w3.org/2000/svg', arguments[0x0]) : v427.createElement.apply(v427, arguments)).getContext('2d').fillText;
}
);
      (function () {
        var v445;
        var v446;
        var v447;
        var v448;
        var v449;
        var v450;
        var v451;
        for (var v452 in v430) if (v430.hasOwnProperty(v452)) {
          v445 = [];
          v446 = v430[v452];
          if (v446.name && (v445.push(v446.name.toLowerCase()), v446.options && v446.options.aliases && v446.options.aliases.length)) {
            for (v447 = 0x0;
 v447 < v446.options.aliases.length;
 v447++) {
              v445.push(v446.options.aliases[v447].toLowerCase());
}
}
          v448 = (undefined === v446.fn ? "undefined" : _typeof(v446.fn)) === "function" ? v446.fn() : v446.fn;
          for (v449 = 0x0;
 v449 < v445.length;
 v449++) {
            v450 = v445[v449];
            v451 = v450.split('.');
            if (0x1 === v451.length) {
              v439[v451[0x0]] = v448;
}
 else {
              if (!(!v439[v451[0x0]] || v439[v451[0x0]] instanceof Boolean)) {
                v439[v451[0x0]] = new Boolean(v439[v451[0x0]]);
}
              v439[v451[0x0]][v451[0x1]] = v448;
}
            v429.push((v448 ? '' : 'no-') + v451.join('-'));
}
}
}
)();
      (function (v453) {
        var v454 = v442.className;
        var v455 = v439._config.classPrefix || '';
        if (v443) {
          v454 = v454.baseVal;
}
        if (v439._config.enableJSClass) {
          var v456 = new RegExp("(^|\\s)" + v455 + "no-js(\\s|$)");
          v454 = v454.replace(v456, '$1' + v455 + "js$2");
}
        if (v439._config.enableClasses) {
          v454 += " " + v455 + v453.join(" " + v455);
          if (v443) {
            v442.className.baseVal = v454;
}
 else {
            v442.className = v454;
}
}
}
)(v429);
      delete v431.addTest;
      delete v431.addAsyncTest;
      for (var v457 = 0x0;
 v457 < v439._q.length;
 v457++) {
        v439._q[v457]();
}
      v426.Modernizr = v439;
}
)(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
}
  document.getElementById("game-wrap").style.display = "block";
  if (!v425()) {
    return void (document.getElementById("error-view").style.display = "block");
}
  !function () {
    function v458(v459) {
      const v460 = v459 + '=';
      const v461 = document.cookie.split(';
');
      for (let v462 = 0x0;
 v462 < v461.length;
 v462++) {
        let v463 = v461[v462];
        while (v463.charAt(0x0) === " ") {
          v463 = v463.substring(0x1);
}
        if (v463.indexOf(v460) === 0x0) {
          return v463.substring(v460.length, v463.length);
}
}
      return '';
}
    function v464(v465, v466, v467) {
      var v468 = new Date();
      v468.setTime(v468.getTime() + 0x5265c00 * v467);
      var v469 = 'expires=' + v468.toUTCString();
      document.cookie = v465 + '=' + v466 + ";
 " + v469 + ";
 path=/";
}
    function v470(v471) {
      var v472 = (Math.floor(v471) % 0x3c).toString();
      var v473 = (Math.floor(v471 / 0x3c) % 0x3c).toString();
      var v474 = (Math.floor(v471 / 0xe10) % 0x18).toString();
      var v475 = Math.floor(v471 / 0x15180).toString();
      var v476 = window.I18N_MESSAGES["util.time.days"];
      var v477 = window.I18N_MESSAGES['util.time.hours'];
      var v478 = window.I18N_MESSAGES['util.time.min'];
      var v479 = window.I18N_MESSAGES["util.time.sec"];
      return v475 > 0x0 ? v475 + " " + v476 + " " + v474 + " " + v477 + " " + v473 + " " + v478 + " " + v472 + " " + v479 : v474 > 0x0 ? v474 + " " + v477 + " " + v473 + " " + v478 + " " + v472 + " " + v479 : v473 > 0x0 ? v473 + " " + v478 + " " + v472 + " " + v479 : v472 + " " + v479;
}
    function v480(v481, v482, v483) {
      var v484 = document.createElement("script");
      var v485 = true;
      if (v482) {
        v484.id = v482;
}
      v484.async = "async";
      v484.type = "text/javascript";
      v484.src = v481;
      if (v483) {
        v484.onload = v484.onreadystatechange = function () {
          v485 = false;
          try {
            v483();
}
 catch (v486) {
            console.log(v486);
}
          v484.onload = v484.onreadystatechange = null;
}
;
}
      (document.head || document.getElementsByTagName("head")[0x0]).appendChild(v484);
}
    function v487(v488, v489) {
      v489.prototype = Object.create(v488.prototype);
      v489.prototype.constructor = v489;
      v489.parent = v488;
      return v489;
}
    function v490(v491) {
      v491 %= v492;
      return v491 < 0x0 ? v491 + v492 : v491;
}
    function v493(v494, v495, v496, v497) {
      var v498 = v495 + v497;
      if (null == v494) {
        throw new TypeError("this is null or not defined");
}
      var v499 = v494.length >>> 0x0;
      var v500 = v496 >> 0x0;
      var v501 = v500 < 0x0 ? Math.max(v499 + v500, 0x0) : Math.min(v500, v499);
      var v502 = v495 >> 0x0;
      var v503 = v502 < 0x0 ? Math.max(v499 + v502, 0x0) : Math.min(v502, v499);
      var v504 = undefined === v498 ? v499 : v498 >> 0x0;
      var v505 = v504 < 0x0 ? Math.max(v499 + v504, 0x0) : Math.min(v504, v499);
      var v506 = Math.min(v505 - v503, v499 - v501);
      var v507 = 0x1;
      for (v503 < v501 && v501 < v503 + v506 && (v507 = -0x1, v503 += v506 - 0x1, v501 += v506 - 0x1);
 v506 > 0x0;
) {
        if (v503 in v494) {
          v494[v501] = v494[v503];
}
 else {
          delete v494[v501];
}
        v503 += v507;
        v501 += v507;
        v506--;
}
      return v494;
}
    function v508(v509) {
      if (null != v509.parent) {
        v509.parent.removeChild(v509);
}
}
    function v510(v511, v512, v513) {
      var v514 = (0x1 - Math.abs(0x2 * v513 - 0x1)) * v512;
      var v515 = v514 * (0x1 - Math.abs(v511 / 0x3c % 0x2 - 0x1));
      var v516 = v513 - v514 / 0x2;
      return 0x0 <= v511 && v511 < 0x3c ? [v516 + v514, v516 + v515, v516 + 0x0] : 0x3c <= v511 && v511 < 0x78 ? [v516 + v515, v516 + v514, v516 + 0x0] : 0x78 <= v511 && v511 < 0xb4 ? [v516 + 0x0, v516 + v514, v516 + v515] : 0xb4 <= v511 && v511 < 0xf0 ? [v516 + 0x0, v516 + v515, v516 + v514] : 0xf0 <= v511 && v511 < 0x12c ? [v516 + v515, v516 + 0x0, v516 + v514] : [v516 + v514, v516 + 0x0, v516 + v515];
}
    function v517() {
      function v518() {
        $('#adbl-1').text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $("#adbl-2").text(window.I18N_MESSAGES['index.game.antiadblocker.msg2']);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $('#adbl-4').text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{
0
}
", 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var v519 = 0x5;
        for (var v520 = 0x0;
 v520 < 0x5;
 v520++) {
          setTimeout(function () {
            v519--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{
0
}
", v519));
            if (0x0 === v519) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
}
 catch (v521) {
}
              $("#adbl-continue").fadeIn(0xc8);
}
}
, 0x3e8 * (v520 + 0x1));
}
}
      var v522 = false;
      var v523 = function () {
}
;
      var v524 = {
}
;
      $('#adbl-continue').click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        v523(false);
}
);
      v524.a = function (v525) {
        v523 = v525;
        if (!v522) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
}
,
                'AIP_COMPLETE': function (v526) {
                  console.log("aipC");
                  v523(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
}
 catch (v527) {
}
}
,
                'AIP_REMOVE': function () {
}
}
);
}
);
            v522 = true;
}
 catch (v528) {
}
}
}
;
      v524.b = function () {
        if (undefined !== aiptag.adplayer) {
          console.log("aipS");
          try {
            ga('send', "event", 'preroll', window.runtimeHash + "_request");
}
 catch (v529) {
}
          v518();
}
 else {
          console.log("aipAABS");
          try {
            ga('send', 'event', "antiadblocker", window.runtimeHash + "_start");
}
 catch (v530) {
}
          v518();
}
}
;
      return v524;
}
    function v531(v532, v533) {
      return {
        'a': function () {
}
,
        'c': function () {
}
}
;
}
    function v534() {
      function v535(v536) {
        var v537 = v536 + 0x25 * Math.floor(0xffff * Math.random());
        v464(v538.d, v537, 0x1e);
}
      return function () {
        var v539 = parseInt(v458(v538.d)) % 0x25;
        console.log("init1 pSC: " + v539);
        if (!(v539 >= 0x0 && v539 < v540.e)) {
          v539 = Math.max(0x0, v540.e - 0x2);
          console.log("init2 pSC: " + v539);
}
        var v541 = {
}
;
        v542 = v541;
        v541.f = v540;
        v541.g = false;
        v541.i = Date.now();
        v541.j = 0x0;
        v541.k = 0x0;
        v541.l = null;
        v541.m = v543;
        v541.n = v544;
        v541.o = null;
        v541.p = null;
        v541.q = null;
        v541.r = null;
        v541.s = null;
        v541.t = null;
        v541.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (v545) {
              if (undefined !== v545.coords) {
                var v546 = v545.coords;
                if (undefined !== v546.latitude && undefined !== v546.longitude) {
                  v541.l = v545;
}
}
}
, function (v547) {
}
);
}
}
 catch (v548) {
}
        v541.v = function () {
          v541.p = new v549();
          v541.q = new v550();
          v541.r = new v551();
          v541.s = new v552();
          v541.t = new v553();
          v541.u = new v554();
          v541.o = new v555();
          v541.o.z = new v556(v541.o);
          v541.a();
}
;
        v541.a = function () {
          try {
            ga('send', "event", "app", window.runtimeHash + "_init");
}
 catch (v557) {
}
          v541.o.A = function () {
            v541.o.B();
}
;
          v541.o.C = function () {
            var v558 = v541.s.F.D();
            try {
              ga("send", "event", 'game', window.runtimeHash + "_start", v558);
}
 catch (v559) {
}
            v541.r.G(v551.AudioState.H);
            v541.s.I(v541.s.H.J());
}
;
          v541.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + '_end');
}
 catch (v560) {
}
            if ($("body").height() >= 0x1ae) {
              v541.f.K.c();
}
            v541.p.L();
            (function () {
              var v561 = Math.floor(v541.o.N.M);
              var v562 = v541.o.O;
              if (v541.u.P()) {
                v541.u.Q(function () {
                  v541.R(v561, v562);
}
);
}
 else {
                v541.R(v561, v562);
}
}
)();
}
;
          v541.o.S = function (v563) {
            v563(v541.s.H.T(), v541.s.H.U());
}
;
          v541.u.V(function () {
            if (v541.p.W) {
              v541.r.G(v551.AudioState.F);
              v541.s.I(v541.s.F);
}
            if (v541.u.P()) {
              try {
                var v564 = v541.u.X();
                ga("set", "userId", v564);
}
 catch (v565) {
}
}
            if (v541.Y() && v541.u.P() && !v541.u.Z()) {
              v541.$(false, false);
              v541.s.aa._(new v566());
}
 else {
              v541.ba(true);
}
}
);
          v541.p.ca(function () {
            v541.r.G(v551.AudioState.F);
            v541.s.I(v541.s.F);
}
);
          v541.q.a(function () {
            v541.o.a();
            v541.r.a();
            v541.s.a();
            v541.t.a();
            v541.p.a();
            v541.u.a();
            if (v541.Y() && !v541.Z()) {
              v541.s.aa._(new v566());
}
 else {
              v541.ba(true);
}
}
);
}
;
        v541.da = function (v567) {
          if (v541.u.P()) {
            var v568 = v541.u.ea();
            $.get(v569 + '/pub/wuid/' + v568 + '/consent/change?value=' + encodeURI(v567), function (v570) {
}
);
}
}
;
        v541.fa = function (v571) {
          var v572 = v541.u.ea();
          var v573 = v541.s.F.D();
          var v574 = v541.s.F.ga();
          var v575 = v541.t.ha(v576.ia);
          var v577 = v541.t.ha(v576.ja);
          var v578 = v541.t.ha(v576.ka);
          var v579 = v541.t.ha(v576.la);
          var v580 = v541.t.ha(v576.ma);
          var v581 = 0x0;
          if (null != v541.l) {
            var v582 = v541.l.coords.latitude;
            var v583 = v541.l.coords.longitude;
            v581 = 0x1 | Math.max(0x0, Math.min(0x7fff, (v582 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (v583 + 0xb4) / 0x168 * 0x10000)) << 0x10;
}
          if (_wrmxt.isSkinCustom(v575)) {
}
 else {
            v575;
}
          let v584 = "ZW_" + (0x270f < v575 ? "0000" : v575.toString().padStart(0x4, 0x0)) + (0x1869f < v580 ? "00000" : v580.toString().padStart(0x5, 0x0));
          v574 = (0x20 <= v574.length ? v574.substr(0x0, 0x10) : v574.substr(0x0, 0x10).padEnd(0x10)) + v584;
          v574 = v574.trim().replace(/\s/g, 'ㅤ');
          console.log(v574);
          var v585 = document.getElementById("teamNickname");
          if (v585 !== null) {
            zwormData.nickname = v574;
}
 else {
            console.warn("⚠️ Advertencia: No se encontró el elemento 'teamNickname'.");
}
          var v586 = v569 + "/pub/wuid/" + v572 + "/start?gameMode=" + encodeURI(v573) + "&gh=" + v581 + "&nickname=" + encodeURI(v574) + "&skinId=" + _wrmxt.validInput(v575) + "&eyesId=" + encodeURI(v577) + "&mouthId=" + encodeURI(v578) + "&glassesId=" + encodeURI(v579) + '&hatId=' + encodeURI(v580);
          console.log("urlRequest: " + v586);
          $.get(v586, function (v587) {
            var v588 = v587.server_url;
            v571(v588);
}
);
}
;
        v541.na = function () {
          v539++;
          console.log("start pSC: " + v539);
          if (!v541.f.oa && v539 >= v541.f.e) {
            v541.s.I(v541.s.pa);
            v541.r.G(v551.AudioState.qa);
            v541.f.ra.b();
}
 else {
            v535(v539);
            v541.sa();
            zw_servertext.text = '';
}
}
;
        v541.sa = function (v589) {
          zw_killcount = 0x0;
          zw_hscount = 0x0;
          if (v541.o.ta()) {
            v541.s.I(v541.s.ua);
            v541.r.G(v551.AudioState.ua);
            var v590 = v541.s.F.D();
            v464(v538.va, v590, 0x1e);
            console.log("save gm: " + v590);
            var v591 = v541.s.xa.wa();
            v464(v538.ya, v591, 0x1e);
            console.log("save sPN: " + v591);
            if (v541.u.P()) {
              v541.fa(function (v592) {
                zw_lastserver = v589 ? v589 : v592;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = '' + zw_lastserver.replace("wss://", '').replace('.wormate.io', '').replace("/wormy", '');
                v541.o.za(v589 || v592, v541.u.ea());
}
);
}
 else {
              var v593 = v541.s.F.ga();
              v464(v538.Aa, v593, 0x1e);
              var v594 = v541.t.ha(v576.ia);
              v464(v538.Ba, v594, 0x1e);
              v541.fa(function (v595) {
                zw_lastserver = v589 ? v589 : v595;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = '' + zw_lastserver.replace("wss://", '').replace(".wormate.io", '').replace("/wormy", '');
                v541.o.Ca(v589 || v595, v593, v594);
}
);
}
}
}
;
        v541.R = function (v596, v597) {
          var v598 = v541.s.F.ga();
          v541.s.H.Da(v596, v597, v598);
          v541.r.G(v551.AudioState.Ea);
          v541.s.I(v541.s.H.Fa());
}
;
        v541.Ga = function () {
          if (!v541.Ha()) {
            return v541.t.Ia();
}
          var v599 = parseInt(v458(v538.Ba));
          return null != v599 && v541.t.Ja(v599, v576.ia) ? v599 : v541.t.Ia();
}
;
        v541.Ka = function (v600) {
          v464(v538.La, !!v600, 0x708);
}
;
        v541.Ha = function () {
          return "true" === v458(v538.La);
}
;
        v541.ba = function (v601) {
          if (v601 != v541.g) {
            v541.g = v601;
            var v602 = v602 || {
}
;
            v602.consented = v601;
            v602.gdprConsent = v601;
            v541.f.Ma.a();
            v541.f.K.a();
            v541.f.ra.a(function (v603) {
              if (v603) {
                v535(v539 = 0x0);
}
              v541.sa();
}
);
}
}
;
        v541.$ = function (v604, v605) {
          v464(v538.Na, v604 ? "true" : "false");
          if (v605) {
            v541.da(v604);
}
          v541.ba(v604);
}
;
        v541.Z = function () {
          switch (v458(v538.Na)) {
            case 'true':
              return true;
            default:
              return false;
}
}
;
        v541.Y = function () {
          try {
            return !!window.isIPInEEA || !(null == v541.l || !v606.Oa(v541.l.coords.latitude, v541.l.coords.longitude));
}
 catch (v607) {
            return true;
}
}
;
        v541.Pa = function (v608) {
          const v609 = performance.now();
          v541.j = v609;
          v541.k = v608;
          v541.o.Qa(v609, v608);
          v541.s.Qa(v609, v608);
          v541.i = v609;
}
;
        v541.Ra = function () {
          v541.s.Ra();
}
;
        return v541;
}
();
}
    function v555() {
      var v610 = {
        Wa: 0x1e,
        Xa: new Float32Array(0x64),
        Ya: 0x0,
        Za: 0x0,
        $a: 0x0,
        _a: 0x0,
        ab: 0x0,
        bb: 0x0,
        cb: 0x0,
        db: null,
        eb: 0x12c,
        C: function () {
}
,
        B: function () {
}
,
        S: function () {
}
,
        A: function () {
}
,
        fb: new v611(),
        z: null,
        N: null,
        gb: {
}
,
        hb: {
}
,
        ib: 12.5,
        jb: 0x28,
        kb: 0x1,
        lb: -0x1,
        mb: 0x1,
        nb: 0x1,
        ob: -0x1,
        pb: -0x1,
        qb: 0x1,
        rb: 0x1,
        sb: -0x1,
        O: 0x1f4,
        tb: 0x1f4
}
;
      v610.fb.ub = 0x1f4;
      v610.N = new v612(v610.fb);
      v610.a = function () {
        null.vb((window.anApp = v542).s.H.wb);
        let v613 = setInterval(function () {
          v610.S(function (v614, v615) {
            v610.xb(v614, v615);
}
);
}
, theoKzObjects.mouseDelay);
        v610.updatePacketInterval = function (v616) {
          clearInterval(v613);
          theoKzObjects.mouseDelay = v616;
          v613 = setInterval(function () {
            v610.S(function (v617, v618) {
              console.log(v617, v618);
              v610.xb(v617, v618);
}
);
}
, theoKzObjects.mouseDelay);
}
;
}
;
      v610.yb = function (v619, v620, v621, v622) {
        v610.lb = v619;
        v610.mb = v620;
        v610.nb = v621;
        v610.ob = v622;
        v610.zb();
}
;
      v610.Ab = function (v623) {
        v610.kb = v623;
        v610.zb();
}
;
      v610.zb = function () {
        v610.pb = v610.lb - 0x1;
        v610.qb = 2;
        v610.rb = 0;
        v610.sb = v610.ob + 0x1;
}
;
      v610.Qa = function (v624, v625) {
        v625 = Math.min(Math.max(0x1, v625), 0x64);
        v610.$a += v625;
        v610.Za -= 0 * v625;
        null.Bb();
        if (false && (false || false)) {
          v610.Cb(v624, v625);
          v610.jb = 0x4 + 12.5 * null.Db;
}
        const v626 = 0x3e8 / v625;
        let v627 = 0x0;
        for (let v628 = 0x0;
 v628 < v610.Xa.length - 0x1;
 v628++) {
          v610.Xa[v628] = v610.Xa[v628 + 0x1];
          v627 += v610.Xa[v628];
}
        v610.Xa[v610.Xa.length - 0x1] = v626;
        v610.Wa = (v627 + v626) / v610.Xa.length;
}
;
      v610.Eb = function (v629, v630) {
        return v629 > v610.pb && v629 < 0x1 && v630 > 0x1 && v630 < v610.sb;
}
;
      v610.Cb = function (v631, v632) {
        var v633 = -NaN;
        null.Fb(v631, v632);
        null.Gb(v631, v632, v633, v610.Eb);
        var v634 = 0x0;
        var v635;
        for (v635 in v610.hb) {
          var v636 = v610.hb[v635];
          v636.Fb(v631, v632);
          v636.Gb(v631, v632, v633, v610.Eb);
          if (v636.Hb && v636.Db > v634) {
            v634 = v636.Db;
}
          if (!(v636.Ib || !(v636.Jb < 0.005) && v636.Hb)) {
            v636.Kb();
            delete v610.hb[v636.Mb.Lb];
}
}
        v610.Ab(0x3 * v634);
        var v637;
        for (v637 in v610.gb) {
          var v638 = v610.gb[v637];
          v638.Fb(v631, v632);
          v638.Gb(v631, v632, v610.Eb);
          if (v638.Nb && (v638.Jb < 0.005 || !v610.Eb(v638.Ob, v638.Pb))) {
            v638.Kb();
            delete v610.gb[v638.Mb.Lb];
}
}
}
;
      v610.Qb = function (v639, v640) {
        var v641 = (window.anApp = v542).j;
        v610.bb = v639;
        if (0x0 === v639) {
          v610._a = v641 - 0x5f;
          v610.ab = v641;
          v610.$a = 0x0;
          v610.Za = 0x0;
}
 else {
          v610._a = 0x0;
          v610.ab = 0x0 + v640;
}
        v610.Ya = -NaN;
}
;
      v610.Rb = function () {
        if (false || false) {
          v610.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              v610.db = null;
}
}
, 0x1388);
          v610.B();
}
}
;
      v610.ta = function () {
        return true && (v610.cb = 0x1, null.Sb(), v610.gb = {
}
, v610.hb = {
}
, null.Tb(), false && (null.close(), v610.db = null), true);
}
;
      v610.Ub = function () {
        v610.db = null;
        null.Sb();
        v610.A();
        v610.cb = 0x0;
}
;
      v610.za = function (v642, v643) {
        v610.Vb(v642, function () {
          console.log(v643);
          var v644 = Math.min(0x800, v643.length);
          var v645 = new ArrayBuffer(0x6 + 0x2 * v644);
          var v646 = new DataView(v645);
          var v647 = 0x0;
          v646.setInt8(v647, 0x81);
          v647 = v647 + 0x1;
          v646.setInt16(v647, 0xaf0);
          v647 = v647 + 0x2;
          v646.setInt8(v647, 0x1);
          v647 = v647 + 0x1;
          v646.setInt16(v647, v644);
          v647 = v647 + 0x2;
          var v648 = 0x0;
          for (;
 v648 < v644;
 v648++) {
            v646.setInt16(v647, v643.charCodeAt(v648));
            v647 = v647 + 0x2;
}
          v610.Wb(v645);
}
);
}
;
      v610.Ca = function (v649, v650, v651) {
        v610.Vb(v649, function () {
          var v652 = Math.min(0x20, v650.length);
          var v653 = new ArrayBuffer(0x7 + 0x2 * v652);
          var v654 = new DataView(v653);
          var v655 = 0x0;
          v654.setInt8(v655, 0x81);
          v655 = v655 + 0x1;
          v654.setInt16(v655, 0xaf0);
          v655 = v655 + 0x2;
          v654.setInt8(v655, 0x0);
          v655 = v655 + 0x1;
          v654.setInt16(v655, v651);
          v655 = v655 + 0x2;
          v654.setInt8(v655, v652);
          v655++;
          var v656 = 0x0;
          for (;
 v656 < v652;
 v656++) {
            v654.setInt16(v655, v650.charCodeAt(v656));
            v655 = v655 + 0x2;
}
          v610.Wb(v653);
          console.log(v653);
}
);
}
;
      v610.Wb = function (v657) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(v657);
}
}
 catch (v658) {
          console.log("Socket send error: " + v658);
          v610.Ub();
}
}
;
      v610.xb = function (v659, v660) {
        var v661 = v660 ? 0x80 : 0x0;
        var v662 = v490(v659) / v492 * 0x80 & 0x7f;
        var v663 = 0xff & (v661 | v662);
        if (0x12c !== v663) {
          var v664 = new ArrayBuffer(0x1);
          new DataView(v664).setInt8(0x0, v663);
          v610.Wb(v664);
          v610.eb = v663;
}
}
;
      v610.Vb = function (v665, v666) {
        var v667 = v610.db = new WebSocket(v665);
        v667.binaryType = "arraybuffer";
        window.onOpen = v667.onopen = function () {
          if (null === v667) {
            console.log("Socket opened");
            v666();
}
          isPlaying = true;
}
;
        window.onclose = v667.onclose = function () {
          _wrmxt.aload = false;
          if (null === v667) {
            console.log("Socket closed");
            v610.Ub();
}
          isPlaying = false;
}
;
        v667.onerror = function (v668) {
          console.log(v668.data);
          if (null === v667) {
            console.log("Socket error");
            v610.Ub();
}
          isPlaying = false;
}
;
        v667.onmessage = function (v669) {
          if (null === v667) {
            null.Xb(v669.data);
}
}
;
}
;
      return v610;
}
    var v569 = atob('aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=');
    var v670 = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var v544 = window.I18N_LANG;
    if (!v544) {
      v544 = 'en';
}
    var v543 = undefined;
    switch (v544) {
      case 'uk':
        v543 = "uk_UA";
        break;
      case 'de':
        v543 = "de_DE";
        break;
      case 'fr':
        v543 = "fr_FR";
        break;
      case 'ru':
        v543 = "ru_RU";
        break;
      case 'es':
        v543 = "es_ES";
        break;
      default:
        v543 = "en_US";
}
    moment.locale(v543);
    var v542 = undefined;
    var v671 = function () {
      var v672 = {
        'Yb': eval(atob("UElYSQ=="))
}
;
      var v673 = v672.Yb[atob('QkxFTkRfTU9ERVM=')];
      var v674 = v672.Yb[atob("V1JBUF9NT0RFUw==")];
      return {
        'Zb': v672.Yb[atob("Q29udGFpbmVy")],
        '$b': v672.Yb[atob('QmFzZVRleHR1cmU=')],
        '_b': v672.Yb[atob('VGV4dHVyZQ==')],
        'ac': v672.Yb[atob("UmVuZGVyZXI=")],
        'bc': v672.Yb[atob("R3JhcGhpY3M=")],
        'cc': v672.Yb[atob("U2hhZGVy")],
        'dc': v672.Yb[atob("UmVjdGFuZ2xl")],
        'ec': v672.Yb[atob("U3ByaXRl")],
        'fc': v672.Yb[atob("VGV4dA==")],
        'gc': v672.Yb[atob("R2VvbWV0cnk=")],
        'hc': v672.Yb[atob("TWVzaA==")],
        'ic': {
          'jc': v673[atob("QURE")]
}
,
        'kc': {
          'lc': v674[atob("UkVQRUFU")],
          'CLAMP': v672.Yb.WRAP_MODES.CLAMP
}
}
;
}
();
    var v492 = 0x2 * Math.PI;
    !function () {
      var v675 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (v676) {
        return this[v675[0x0]](v676);
}
;
      DataView.prototype.nc = function (v677) {
        return this[v675[0x1]](v677);
}
;
      DataView.prototype.oc = function (v678) {
        return this[v675[0x2]](v678);
}
;
      DataView.prototype.pc = function (v679) {
        return this[v675[0x3]](v679);
}
;
      DataView.prototype.qc = function (v680) {
        return this[v675[0x4]](v680);
}
;
}
();
    var v681 = function () {
      function v682(v683) {
        this.rc = v683;
        this.sc = false;
        this.tc = 0x1;
}
      v682.VELOCITY_TYPE = 0x0;
      v682.FLEXIBLE_TYPE = 0x1;
      v682.MAGNETIC_TYPE = 0x2;
      v682.ZOOM_TYPE = 0x6;
      v682.X2_TYPE = 0x3;
      v682.X5_TYPE = 0x4;
      v682.X10_TYPE = 0x5;
      return v682;
}
();
    var v549 = function () {
      function v684() {
        this.uc = [];
        this.vc = {
}
;
        this.wc = null;
        this.xc = v685.yc();
}
      function v686(v687, v688) {
        for (var v689 in v687) if (v687.hasOwnProperty(v689)) {
          v688(v689, v687[v689]);
}
}
      v684.prototype.a = function () {
        this.L();
}
;
      v684.prototype.W = function () {
        return null != this.wc;
}
;
      v684.prototype.zc = function () {
        return null != this.wc ? this.wc.revision : -0x1;
}
;
      v684.prototype.Ac = function () {
        return this.wc;
}
;
      v684.prototype.L = function () {
        var v690 = this;
        $.get(v670 + "/dynamic/assets/revision.json", function (v691) {
          if (v691 > v690.zc()) {
            v690.Bc();
}
}
);
}
;
      v684.prototype.Bc = function () {
        var v692 = this;
        $.ajax({
          'type': "POST",
          'url': "https://zwormextenstion.com/wormExtension/api/skins/skins.php",
          'data': JSON.stringify({
            'reason': 0x1
}
),
          'contentType': "application/json",
          'success': function (v693) {
            theoKzObjects.visibleSkin = v693.visibleSkin;
            delete v693.visibleSkin;
            theoKzObjects.pL = v693.propertyList;
            theoKzObjects.idSkin = v693.skinArrayDict;
            if (v693.revision > v692.zc()) {
              v692.Cc(v693);
}
            unlockSkinsPrivate(anApp);
}
,
          'error': function (v694, v695, v696) {
            console.error("Error al realizar la solicitud GET:", v696);
}
}
);
}
;
      v684.prototype.ca = function (v697) {
        this.uc.push(v697);
}
;
      v684.prototype.Dc = function () {
        return this.xc;
}
;
      v684.prototype.Ec = function () {
        for (var v698 = 0x0;
 v698 < this.uc.length;
 v698++) {
          this.uc[v698]();
}
}
;
      v684.prototype.Fc = function (v699, v700) {
        if (!(v699.revision <= this.zc())) {
          v686(this.vc, function (v701, v702) {
            var v703 = v700[v701];
            if (!(null != v703 && v702.Gc === v703.Gc)) {
              print("disposing prev texture: " + v701 + " at " + v702.Gc);
              v702.Hc.destroy();
}
}
);
          this.vc = v700;
          this.wc = v699;
          this.xc = v685.Ic(this.wc, this.vc);
          this.Ec();
}
}
;
      v684.prototype.Cc = function (v704) {
        var v705 = {
}
;
        var v706 = [];
        var v707 = [];
        var v708 = 0x0;
        for (var v709 in v704.textureDict) {
          if (v704.textureDict.hasOwnProperty(v709)) {
            var v710 = v704.textureDict[v709];
            var v711 = v710.isCustom;
            var v712 = v711 ? v710.relativePath : v670 + v710.relativePath;
            var v713 = v710.fileSize;
            var v714 = v710.sha256;
            var v715 = {
              'id': v709,
              'path': v712,
              'fileSize': v713,
              'sha256': v714
}
;
            v706.push(v715);
            v707.push(v715);
            v708 += v713;
            var v712 = v710.relativePath;
            if (!v710.isCustom) {
              v712 = v670 + v710.relativePath;
}
            try {
              v705[v709] = new v716(v712, v671.$b.from(v710.file || v712));
}
 catch (v717) {
              console.log(v712);
}
}
}
        this.Fc(v704, v705);
}
;
      return v684;
}
();
    var v685 = function () {
      function v718() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
}
      function v719(v720, v721) {
        for (var v722 in v720) if (v720.hasOwnProperty(v722)) {
          v721(v722, v720[v722]);
}
}
      v718.yc = function () {
        var v723 = new v685();
        v723.Jc = {
}
;
        v723.Kc = {
          'Zc': null,
          '$c': null
}
;
        v723.Lc = {
}
;
        v723.Mc = {
          'Zc': null
}
;
        v723.Nc = {
}
;
        v723.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
}
;
        v723.Pc = {
}
;
        v723.Qc = {
          'ad': {
}
,
          'bd': v723.Oc,
          'cd': v723.Kc
}
;
        v723.Rc = {
}
;
        v723.Sc = {
          'Zc': []
}
;
        v723.Tc = {
}
;
        v723.Uc = {
          'Zc': []
}
;
        v723.Vc = {
}
;
        v723.Wc = {
          'Zc': []
}
;
        v723.Xc = {
}
;
        v723.Yc = {
          'Zc': []
}
;
        return v723;
}
;
      v718.Ic = function (v724, v725) {
        var v726 = new v685();
        var v727 = {
}
;
        v719(v724.colorDict, function (v728, v729) {
          v727[v728] = v729;
}
);
        var v730 = {
}
;
        v719(v724.regionDict, function (v731, v732) {
          v730[v731] = new v733(v725[v732.texture].Hc, v732.x, v732.y, v732.w, v732.h, v732.px, v732.py, v732.pw, v732.ph);
}
);
        v726.Nc = {
}
;
        for (var v734 = 0x0;
 v734 < v724.skinArrayDict.length;
 v734++) {
          var v735 = v724.skinArrayDict[v734];
          v726.Nc[v735.id] = new v685.WormSkinData('#' + v727[v735.prime], v735.base.map(function (v736) {
            return v730[v736];
}
), v735.glow.map(function (v737) {
            return v730[v737];
}
));
}
        var v738 = v724.skinUnknown;
        v726.Oc = new v685.WormSkinData('#' + v727[v738.prime], v738.base.map(function (v739) {
          return v730[v739];
}
), v738.glow.map(function (v740) {
          return v730[v740];
}
));
        v726.Rc = {
}
;
        v719(v724.eyesDict, function (v741, v742) {
          v741 = parseInt(v741);
          v726.Rc[v741] = new v685.WearSkinData(v742.base.map(function (v743) {
            return v730[v743.region];
}
));
}
);
        v726.Sc = new v685.WearSkinData(v724.eyesUnknown.base.map(function (v744) {
          return v730[v744.region];
}
));
        v726.Tc = {
}
;
        v719(v724.mouthDict, function (v745, v746) {
          v745 = parseInt(v745);
          v726.Tc[v745] = new v685.WearSkinData(v746.base.map(function (v747) {
            return v730[v747.region];
}
));
}
);
        v726.Uc = new v685.WearSkinData(v724.mouthUnknown.base.map(function (v748) {
          return v730[v748.region];
}
));
        v726.Vc = {
}
;
        v719(v724.glassesDict, function (v749, v750) {
          v749 = parseInt(v749);
          v726.Vc[v749] = new v685.WearSkinData(v750.base.map(function (v751) {
            return v730[v751.region];
}
));
}
);
        v726.Wc = new v685.WearSkinData(v724.glassesUnknown.base.map(function (v752) {
          return v730[v752.region];
}
));
        v726.Xc = {
}
;
        v719(v724.hatDict, function (v753, v754) {
          v753 = parseInt(v753);
          v726.Xc[v753] = new v685.WearSkinData(v754.base.map(function (v755) {
            return v730[v755.region];
}
));
}
);
        v726.Yc = new v685.WearSkinData(v724.hatUnknown.base.map(function (v756) {
          return v730[v756.region];
}
));
        v726.Jc = {
}
;
        v719(v724.portionDict, function (v757, v758) {
          v757 = parseInt(v757);
          v726.Jc[v757] = new v685.PortionSkinData(v730[v758.base], v730[v758.glow]);
}
);
        var v759 = v724.portionUnknown;
        v726.Kc = new v685.PortionSkinData(v730[v759.base], v730[v759.glow]);
        v726.Lc = {
}
;
        v719(v724.abilityDict, function (v760, v761) {
          v760 = parseInt(v760);
          v726.Lc[v760] = new v685.AbilitySkinData(v730[v761.base]);
}
);
        var v762 = v724.abilityUnknown;
        v726.Mc = new v685.AbilitySkinData(v730[v762.base]);
        v726.Pc = {
}
;
        v719(v724.teamDict, function (v763, v764) {
          v763 = parseInt(v763);
          v726.Pc[v763] = new v685.TeamSkinData(v764.name, new v685.WormSkinData('#' + v727[v764.skin.prime], [], v764.skin.glow.map(function (v765) {
            return v730[v765];
}
)), new v685.PortionSkinData([], v730[v764.portion.glow]));
}
);
        v726.Qc = new v685.TeamSkinData({
}
, v726.Oc, v726.Kc);
        return v726;
}
;
      v718.prototype.dd = function (v766) {
        var v767 = this.Nc[v766];
        if (v767) {
          if (Array.isArray(v767.$c)) {
            v767.$c.forEach(v768 => optimizarTextura(v768));
}
          if (Array.isArray(v767.Zc)) {
            v767.Zc.forEach(v769 => optimizarTextura(v769));
}
}
        return v767 || this.Oc;
}
;
      v718.prototype.ed = function (v770) {
        var v771 = this.Pc[v770];
        return v771 || this.Qc;
}
;
      v718.prototype.fd = function (v772) {
        var v773 = this.Rc[v772];
        return v773 || this.Sc;
}
;
      v718.prototype.gd = function (v774) {
        var v775 = this.Tc[v774];
        return v775 || this.Uc;
}
;
      v718.prototype.hd = function (v776) {
        var v777 = this.Vc[v776];
        return v777 || this.Wc;
}
;
      v718.prototype.jd = function (v778) {
        var v779 = this.Xc[v778];
        return v779 || this.Yc;
}
;
      v718.prototype.kd = function (v780) {
        var v781 = this.Jc[v780];
        if (v781) {
          if (v781.$c) {
            optimizarTextura(v781.$c);
}
          if (v781.Zc) {
            optimizarTextura(v781.Zc);
}
}
        return v781 || this.Kc;
}
;
      v718.prototype.ld = function (v782) {
        var v783 = this.Lc[v782];
        return v783 || this.Mc;
}
;
      v718.TeamSkinData = function () {
        function v784(v785, v786, v787) {
          this.ad = v785;
          this.bd = v786;
          this.cd = v787;
}
        return v784;
}
();
      v718.WormSkinData = function () {
        function v788(v789, v790, v791) {
          this._c = v789;
          this.Zc = v790;
          this.$c = v791;
}
        return v788;
}
();
      v718.WearSkinData = function () {
        function v792(v793) {
          this.Zc = v793;
}
        return v792;
}
();
      v718.PortionSkinData = function () {
        function v794(v795, v796) {
          this.Zc = v795;
          this.$c = v796;
}
        return v794;
}
();
      v718.AbilitySkinData = function () {
        function v797(v798) {
          this.Zc = v798;
}
        return v797;
}
();
      return v718;
}
();
    var v551 = function () {
      function v799() {
        this.md = v551.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
}
      v799.prototype.a = function () {
}
;
      v799.prototype.rd = function (v800) {
        this.od = v800;
}
;
      v799.prototype.G = function (v801) {
        this.md = v801;
        this.sd();
}
;
      v799.prototype.td = function (v802) {
        this.nd = v802;
        this.sd();
}
;
      v799.prototype.sd = function () {
}
;
      v799.prototype.ud = function (v803, v804) {
        if (!(window.anApp = v542).p.W) {
          return null;
}
        var v805 = v803[v804];
        return null == v805 || 0x0 == v805.length ? null : v805[Math.floor(Math.random() * v805.length)].cloneNode();
}
;
      v799.prototype.vd = function (v806, v807, v808) {
        if (this.od && !(v808 <= 0x0)) {
          var v809 = this.ud(v806, v807);
          if (null != v809) {
            v809.volume = Math.min(0x1, v808);
            v809.play();
}
}
}
;
      v799.prototype.wd = function (v810, v811) {
        if (this.md.xd) {
          this.vd(app.q.yd, v810, v811);
}
}
;
      v799.prototype.zd = function (v812, v813) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, v812, v813);
}
}
;
      v799.prototype.Cd = function () {
}
;
      v799.prototype.Dd = function () {
}
;
      v799.prototype.Ed = function () {
}
;
      v799.prototype.Fd = function () {
}
;
      v799.prototype.Gd = function () {
}
;
      v799.prototype.Hd = function () {
}
;
      v799.prototype.Id = function (v814, v815, v816) {
}
;
      v799.prototype.Jd = function (v817) {
}
;
      v799.prototype.Kd = function (v818) {
}
;
      v799.prototype.Ld = function (v819) {
}
;
      v799.prototype.Md = function (v820) {
}
;
      v799.prototype.Nd = function (v821) {
}
;
      v799.prototype.Od = function (v822) {
}
;
      v799.prototype.Pd = function (v823) {
}
;
      v799.prototype.Qd = function (v824) {
}
;
      v799.prototype.Rd = function (v825) {
}
;
      v799.prototype.Sd = function (v826) {
}
;
      v799.prototype.Td = function (v827) {
}
;
      v799.prototype.Ud = function (v828) {
}
;
      v799.prototype.Vd = function (v829) {
}
;
      v799.prototype.Wd = function (v830) {
}
;
      v799.prototype.Xd = function (v831, v832) {
}
;
      v799.prototype.Yd = function (v833) {
}
;
      v799.prototype.Zd = function (v834, v835, v836) {
}
;
      (function () {
        function v837(v838) {
          this.$d = new v839(v838, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
}
        v837.prototype.be = function (v840) {
          if (v840) {
            this.b();
}
 else {
            this.ce();
}
}
;
        v837.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
}
}
;
        v837.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
}
}
;
}
)();
      (function () {
        function v841(v842) {
          this.ge = v842.map(function (v843) {
            return new v839(v843, 0.4);
}
);
          v844(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
}
        function v844(v845, v846, v847) {
          for (var v848 = v847 - 0x1;
 v848 > v846;
 v848--) {
            var v849 = v846 + Math.floor(Math.random() * (v848 - v846 + 0x1));
            var v850 = v845[v848];
            v845[v848] = v845[v849];
            v845[v849] = v850;
}
}
        v841.prototype.be = function (v851) {
          if (v851) {
            this.b();
}
 else {
            this.ce();
}
}
;
        v841.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
}
}
;
        v841.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (null != this.he) {
              this.he.fe(0x320, 0x32);
}
}
}
;
        v841.prototype.ke = function (v852) {
          if (this.ae) {
            if (null == this.he) {
              this.he = this.le();
}
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
}
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + (0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je));
            this.he.de = 0x0;
            this.he.ee(v852, 0x64);
            var v853 = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
            var v854 = this;
            var v855 = setTimeout(function () {
              if (v854.ae && v855 == v854.ie) {
                v854.he.fe(v854.je, 0x64);
                v854.he = v854.le();
                v854.he._d.currentTime = 0x0;
                v854.ke(v854.je);
}
}
, v853);
            this.ie = v855;
}
}
;
        v841.prototype.le = function () {
          var v856 = this.ge[0x0];
          var v857 = Math.max(0x1, this.ge.length / 0x2);
          v844(this.ge, v857, this.ge.length);
          this.ge.push(this.ge.shift());
          return v856;
}
;
}
)();
      var v839 = function () {
        function v858(v859, v860) {
          this._d = v859;
          this.me = v860;
          this.de = 0x0;
          v859.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
}
        v858.prototype.ee = function (v861, v862) {
          console.log("fade IN " + this._d.src);
          this.pe(true, v861, v862);
}
;
        v858.prototype.fe = function (v863, v864) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, v863, v864);
}
;
        v858.prototype.pe = function (v865, v866, v867) {
          if (this.oe) {
            clearInterval(this.ne);
}
          var v868 = this;
          var v869 = 0x1 / (v866 / v867);
          var v870 = setInterval(function () {
            if (v868.oe && v870 != v868.ne) {
              return void clearInterval(v870);
}
            if (v865) {
              v868.de = Math.min(0x1, v868.de + v869);
              v868._d.volume = v868.de * v868.me;
              if (v868.de >= 0x1) {
                v868.oe = false;
                clearInterval(v870);
}
}
 else {
              v868.de = Math.max(0x0, v868.de - v869);
              v868._d.volume = v868.de * v868.me;
              if (v868.de <= 0x0) {
                v868._d.pause();
                v868.oe = false;
                clearInterval(v870);
}
}
}
, v867);
          this.oe = true;
          this.ne = v870;
          this._d.play();
}
;
        return v858;
}
();
      v799.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
}
,
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
}
,
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
}
,
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
}
,
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
}
}
;
      return v799;
}
();
    var v871 = function () {
      function v872(v873) {
        this.se = v873;
        this.te = v873.get()[0x0];
        this.ue = new v671.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
}
);
        this.ve = new v671.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
}
      var v874 = [{
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
}
, {
        'ze': 0x0 + Math.random(v492 - 0x0),
        'Ae': 0x0 + Math.random(v492 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
}
];
      v872.prototype.a = function () {
        var v875 = window.anApp = v542;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(v874.length);
        for (var v876 = 0x0;
 v876 < this.we.length;
 v876++) {
          this.we[v876] = new v671.ec();
          this.we[v876].texture = v875.q.Fe;
          this.we[v876].anchor.set(0.5);
          this.we[v876].zIndex = 0x1;
}
        this.xe = new Array(v875.q.Ge.length);
        for (var v877 = 0x0;
 v877 < this.xe.length;
 v877++) {
          this.xe[v877] = new v671.ec();
          this.xe[v877].texture = v875.q.Ge[v877];
          this.xe[v877].anchor.set(0.5);
          this.xe[v877].zIndex = 0x2;
          this.ve.addChild(this.xe[v877]);
}
        this.ye = new Array(this.xe.length);
        for (var v878 = 0x0;
 v878 < this.ye.length;
 v878++) {
          this.ye[v878] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
}
;
}
        this.Ra();
}
;
      v872.sc = false;
      v872.Le = function (v879) {
        v872.sc = v879;
}
;
      v872.prototype.Ra = function () {
        var v880 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var v881 = this.se.width();
        var v882 = this.se.height();
        this.ue.resize(v881, v882);
        this.ue.resolution = v880;
        this.te.width = v880 * v881;
        this.te.height = v880 * v882;
        var v883 = 0.8 * Math.max(v881, v882);
        for (var v884 = 0x0;
 v884 < this.we.length;
 v884++) {
          this.we[v884].width = v883;
          this.we[v884].height = v883;
}
}
;
      v872.prototype.Pa = function (v885, v886) {
        if (v872.sc) {
          var v887 = v885 / 0x3e8;
          var v888 = v886 / 0x3e8;
          var v889 = this.se.width();
          var v890 = this.se.height();
          for (var v891 = 0x0;
 v891 < this.we.length;
 v891++) {
            var v892 = v874[v891 % v874.length];
            var v893 = this.we[v891];
            var v894 = v892.Ce * (0.08 * v887) + v892.Ae >= 0x0 ? Math.cos((v892.Ce * (0.08 * v887) + v892.Ae) % v492) : Math.cos((v892.Ce * (0.08 * v887) + v892.Ae) % v492 + v492);
            var v895 = v892.De * (0.08 * v887) >= 0x0 ? Math.sin(v892.De * (0.08 * v887) % v492) : Math.sin(v892.De * (0.08 * v887) % v492 + v492);
            var v896 = 0.2 + 0.2 * (v892.Ae + v892.Be * v887 >= 0x0 ? Math.cos((v892.Ae + v892.Be * v887) % v492) : Math.cos((v892.Ae + v892.Be * v887) % v492 + v492));
            v893.tint = v892.Ee;
            v893.alpha = v896;
            v893.position.set(v889 * (0.2 + 0.5 * (v894 + 0x1) * 0.6), v890 * (0.1 + 0.5 * (v895 + 0x1) * 0.8));
}
          var v897 = 0.05 * Math.max(v889, v890);
          for (var v898 = 0x0;
 v898 < this.xe.length;
 v898++) {
            var v899 = this.ye[v898];
            var v900 = this.xe[v898];
            var v901 = v492 * v898 / this.xe.length + v899.He;
            v899.Ke += v899.Ie * v888;
            if (v899.Ke > 1.3) {
              v899.He = Math.random() * v492;
              v899.Ie = 0.66 * (0.09 + 0.07 * Math.random());
              v899.Je = 0.15 + 0.7 * Math.random();
              v899.Ke = -0.3;
}
            var v902 = v899.Je + 0.03 * Math.sin(0x6 * Math.sin(v901 + 0.48 * v887));
            var v903 = v899.Ke;
            var v904 = Math.sin(Math.PI * v903) > 0x1 ? 0x1 : Math.sin(Math.PI * v903) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * v903)) ? Math.sin(Math.PI * v903) : 0.55;
            var v905 = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(v901 + 0.12 * v887)) * 1.2);
            var v906 = v901 + 0x2 * v899.Ie * v887;
            v900.alpha = v904;
            v900.position.set(v889 * v902, v890 * v903);
            v900.rotation = v906;
            var v907 = v900.texture.width / v900.texture.height;
            v900.width = v905 * v897;
            v900.height = v905 * v897 * v907;
}
          this.ue.render(this.ve, null, true);
}
}
;
      return v872;
}
();
    var v538 = function () {
      function v908() {
}
      v908.Na = "consent_state_2";
      v908.ya = "showPlayerNames";
      v908.Me = "musicEnabled";
      v908.Ne = 'sfxEnabled';
      v908.Oe = "account_type";
      v908.va = "gameMode";
      v908.Aa = 'nickname';
      v908.Ba = "skin";
      v908.d = "prerollCount";
      v908.La = "shared";
      return v908;
}
();
    var v606 = function () {
      function v909(v910, v911, v912) {
        var v913 = false;
        var v914 = v912.length;
        var v915 = 0x0;
        for (var v916 = v914 - 0x1;
 v915 < v914;
 v916 = v915++) {
          if (v912[v915][0x1] > v911 != v912[v916][0x1] > v911 && v910 < (v912[v916][0x0] - v912[v915][0x0]) * (v911 - v912[v915][0x1]) / (v912[v916][0x1] - v912[v915][0x1]) + v912[v915][0x0]) {
            v913 = !v913;
}
}
        return v913;
}
      var v917 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (v918, v919) {
          return v909(v919, v918, v917);
}
}
;
}
();
    var v920 = function () {
      function v921(v922) {
        var v923 = undefined;
        v923 = v922 > 0x0 ? '+' + Math.floor(v922) : v922 < 0x0 ? '-' + Math.floor(v922) : '0';
        var v924 = Math.min(1.5, 0.5 + v922 / 0x258);
        var v925 = undefined;
        if (v922 < 0x1) {
          v925 = "0xFFFFFF";
}
 else {
          if (v922 < 0x1e) {
            var v926 = (v922 - 0x1) / 0x1d;
            v925 = ((0xff * (0x1 * (0x1 - v926) + 0.96 * v926) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - v926) + 0.82 * v926) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - v926) + 0x0 * v926) & 0xff);
}
 else {
            if (v922 < 0x12c) {
              var v927 = (v922 - 0x1e) / 0x10e;
              v925 = ((0xff * (0.96 * (0x1 - v927) + 0.93 * v927) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - v927) + 0.34 * v927) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - v927) + 0.25 * v927) & 0xff);
}
 else {
              if (v922 < 0x2bc) {
                var v928 = (v922 - 0x12c) / 0x190;
                v925 = ((0xff * (0.93 * (0x1 - v928) + 0.98 * v928) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - v928) + 0x0 * v928) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - v928) + 0.98 * v928) & 0xff);
}
 else {
                v925 = 16318713;
}
}
}
}
        var v929 = Math.random();
        var v930 = 0x1 + 0.5 * Math.random();
        return new v931(v923, v925, true, 0.5, v924, v929, v930);
}
      function v932(v933, v934) {
        var v935 = undefined;
        var v936 = undefined;
        if (v934) {
          v935 = 1.3;
          v936 = 15554111;
}
 else {
          v935 = 1.1;
          v936 = 16044288;
}
        return new v931(v933, v936, true, 0.5, v935, 0.5, 0.7);
}
      var v937 = v487(v671.Zb, function () {
        v671.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
}
);
      v937.prototype.Re = function (v938) {
        this.Qe += v938;
        if (this.Qe >= 0x1) {
          var v939 = Math.floor(this.Qe);
          this.Qe -= v939;
          var v940 = v921(v939);
          this.addChild(v940);
          this.Pe.push(v940);
}
}
;
      v937.prototype.Se = function (v941) {
        if (v941) {
          zw_hscount += 0x1;
          zwormData.hs = zw_hscount;
          if (!(zw_hscount % 0xa)) {
            if (soundEnabled) {
              zw_laughsound.play();
}
}
 else if (soundEnabled) {
            zw_hssound.play();
}
          var v942 = v932("zworm".substring(0x0, 0x10) + '-☠️-' + 'zworm'.substring(0x0, 0x10), true);
          this.addChild(v942);
          this.Pe.push(v942);
}
 else {
          zw_killcount += 0x1;
          var v942 = v932(window.I18N_MESSAGES["index.game.floating.wellDone"] + '✨', false);
          this.addChild(v942);
          this.Pe.push(v942);
}
}
;
      v937.prototype.Te = function (v943, v944) {
        var v945 = (window.anApp = v542).s.H.wb;
        var v946 = v945.ue.width / v945.ue.resolution;
        var v947 = v945.ue.height / v945.ue.resolution;
        var v948 = 0x0;
        for (;
 v948 < this.Pe.length;
) {
          var v949 = this.Pe[v948];
          v949.Ue = v949.Ue + v944 / 0x7d0 * v949.Ve;
          v949.We = v949.We + v944 / 0x7d0 * v949.Xe;
          v949.alpha = 0.5 * Math.sin(Math.PI * v949.We);
          v949.scale.set(v949.Ue);
          v949.position.x = v946 * (0.25 + 0.5 * v949.Ye);
          v949.position.y = v949.Ze ? v947 * (0x1 - 0.5 * (0x1 + v949.We)) : v947 * (0x1 - 0.5 * (0x0 + v949.We));
          if (v949.We > 0x1) {
            v508(v949);
            this.Pe.splice(v948, 0x1);
            v948--;
}
          v948++;
}
}
;
      var v931 = function () {
        return v487(v671.fc, function (v950, v951, v952, v953, v954, v955, v956) {
          v671.fc.call(this, v950, {
            'fill': v951,
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x24
}
);
          this.anchor.set(0.5);
          this.Ze = v952;
          this.Ue = v953;
          this.Ve = v954;
          this.Ye = v955;
          this.We = 0x0;
          this.Xe = v956;
}
);
}
();
      return v937;
}
();
    var v716 = function () {
      function v957(v958, v959) {
        this.Gc = v958;
        this.Hc = v959;
}
      return v957;
}
();
    var v611 = function () {
      function v960() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
}
      v960.TEAM_DEFAULT = 0x0;
      v960.prototype.ef = function () {
        return 1.02 * this.ub;
}
;
      return v960;
}
();
    var v961 = function () {
      function v962(v963) {
        this.se = v963;
        this.te = v963.get()[0x0];
        this.ue = new v671.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
}
);
        this.ve = new v671.Zb();
        this.ve.sortableChildren = true;
        this.ve.interactive = true;
        this.ve.interactiveChildren = true;
        this.ff = Math.floor(0x168 * Math.random());
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new v964();
        this.mf = new v671.bc();
        this.nf = new v671.Zb();
        this.pf = new v671.Zb();
        this.pf.sortableChildren = true;
        this.qf = new v671.Zb();
        this.rf = new v671.Zb();
        this.rf.sortableChildren = true;
        this.sf = new v671.Zb();
        this.tf = new v965();
        this.uf = new v966();
        this.vf = new v967();
        this.wf = new v920();
        this.xf = new v671.ec();
        this.yf = {
          'x': 0x0,
          'y': 0x0
}
;
        this.a();
}
      v962.prototype.a = function () {
        zw_joysticks = [];
        zw_joystick = -0x1;
        zw_servertext = new v671.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': "center"
}
);
        zw_servertext.x = 0x19;
        zw_serverping = new v671.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': "center"
}
);
        zw_serverping.x = 0x55;
        zw_serverfps = new v671.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': "center"
}
);
        zw_serverfps.x = 0x82;
        if (zw_mobilecheck()) {
          zw_joysticks[0x0] = new Joystick({
            'onChange': v968 => {
              v968.aradian = v968.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = v968.aradian <= Math.PI ? -0x1 * v968.aradian : Math.PI - (v968.aradian - Math.PI);
}
}
);
          zw_joysticks[0x0].visible = false;
          zw_joysticks[0x1] = new Joystick({
            'outer': v671.ec.from('https://i.imgur.com/UKIZZmr.png'),
            'inner': v671.ec.from("https://i.imgur.com/IqQGK58.png"),
            'onChange': v969 => {
              v969.aradian = v969.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = v969.aradian <= Math.PI ? -0x1 * v969.aradian : Math.PI - (v969.aradian - Math.PI);
}
}
);
          zw_joysticks[0x1].visible = false;
          zw_joysticks[0x2] = new Joystick({
            'outer': v671.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            'inner': v671.ec.from("https://i.imgur.com/ZFifUoX.png"),
            'onChange': v970 => {
              v970.aradian = v970.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = v970.aradian <= Math.PI ? -0x1 * v970.aradian : Math.PI - (v970.aradian - Math.PI);
}
}
);
          zw_joysticks[0x2].visible = false;
          for (let v971 = 0x0;
 v971 < zw_joysticks.length;
 v971++) {
            this.rf.addChild(zw_joysticks[v971]);
}
}
        zw_zoomtext = new v671.fc('', {
          'align': "center",
          'fill': "#fff",
          'fontSize': 0xc,
          'lineJoin': "round",
          'whiteSpace': "normal",
          'wordWrap': true,
          'fontWeight': 'bold'
}
);
        zw_zoomtext.x = 0x64;
        zw_zoomtext.y = 0x5a;
        this.rf.addChild(zw_zoomtext);
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        zw_Background = new v671.bc();
        zw_Background.zIndex = 0x14;
        this.ve.addChild(zw_Background);
        ctxHeadshotLine = new v671.bc();
        ctxHeadshotLine.zIndex = 0x14;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = v542).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
}
;
      v962.prototype.Ra = function () {
        var v972 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var v973 = this.se.width();
        var v974 = this.se.height();
        this.ue.resize(v973, v974);
        this.ue.resolution = v972;
        this.te.width = v972 * v973;
        this.te.height = v972 * v974;
        this.jf = Math.min(Math.min(v973, v974), 0.625 * Math.max(v973, v974));
        this.xf.position.x = v973 / 0x2;
        this.xf.position.y = v974 / 0x2;
        this.xf.width = v973;
        this.xf.height = v974;
        this.tf.position.x = 0x3c;
        this.tf.position.y = 0x3c;
        this.uf.position.x = 0x6e;
        this.uf.position.y = 0xa;
        this.vf.position.x = v973 - 0xe1;
        this.vf.position.y = 0x1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(zw_TopHS_RecordHs);
        v508(ctx.containerHsRec3);
}
;
      v962.prototype.Te = function (v975, v976) {
        var v977 = window.anApp = v542;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(v975.af == 0x0 ? v977.q.Cf : v977.q.Df);
        if (theoKzObjects && false || false) {
          setSectorsGame();
}
 else {
          zw_Background.removeChildren();
          zw_Background.clear();
          zw_Background.lineStyle(0x1, 0xff0000, 0x1);
          zw_Background.drawCircle(0x0, 0x0, 0x1f4);
          zw_Background.endFill();
}
        this.vf.Ef = v976;
        this.sf.visible = v976;
}
;
      v962.prototype.Pa = function (v978, v979) {
        if (this.ue.width <= 0x5) {
          return;
}
        const v980 = window.anApp = v542;
        const v981 = v980.o.N;
        const v982 = this.ue.width / this.ue.resolution;
        const v983 = this.ue.height / this.ue.resolution;
        this['if'] = v980.o.jb > this['if'] ? Math.min(v980.o.jb, this['if'] + v979 * 0.002) : Math.max(v980.o.jb, this['if'] - v979 * 0.002);
        const v984 = this['if'] * zw_multiplier;
        const v985 = this.jf / v984;
        const v986 = v981.Ff[v681.ZOOM_TYPE];
        const v987 = v986 && v986.sc;
        this.kf = this.kf + v979 / 0x3e8 * (0.1 * (v987 ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + v979 / 0x3e8 * (0.1 * (v987 ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + v979 / 0x3e8 * (0.1 * (v987 ? 0x1 : 0x0) - this.kf)) ? this.kf + v979 / 0x3e8 * (0.1 * (v987 ? 0x1 : 0x0) - this.kf) : 0.5;
        this.xf.alpha = this.kf;
        this.ff = (this.ff + 0.01 * v979) % 0x168;
        this.gf = Math.sin(v978 / 0x4b0 * 0x2 * Math.PI);
        const v988 = v981.Gf();
        this.yf.x = v988.x + (this.yf.x - v988.x) * Math.pow(0x1 - theoKzObjects.smoothCamera, v979 / 33.333);
        this.yf.y = v988.y + (this.yf.y - v988.y) * Math.pow(0.5, v979 / 33.333);
        const v989 = v982 / (0x2 * v985);
        const v990 = v983 / (0x2 * v985);
        v980.o.yb(this.yf.x - 1.3 * v989, this.yf.x + 1.3 * v989, this.yf.y - 1.3 * v990, this.yf.y + 1.3 * v990);
        this.lf.Te(this.yf.x, this.yf.y, 0x2 * v989, 0x2 * v990);
        const v991 = v980.o.fb.ub;
        this.ve.scale.set(v985);
        this.ve.position.set(v982 / 0x2 - this.yf.x * v985, v983 / 0x2 - this.yf.y * v985);
        zwormData.playerX = this.tf.Jf.position.x;
        zwormData.playerY = this.tf.Jf.position.y;
        ctxHeadshotLine.clear();
        const v992 = Math.hypot(v988.x, v988.y);
        if (v992 > v991 - 0xa) {
          this.hf = 0x1 + (v992 - v991) / 0xa > 0x1 ? 0x1 : 0x1 + (v992 - v991) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (v992 - v991) / 0xa) ? 0x1 + (v992 - v991) / 0xa : 0.5;
          const v993 = this.ff * 0x2 * Math.PI / 0x168;
          const v994 = Math.cos(v993);
          const v995 = Math.sin(v993);
          const v996 = v994 * (0x1 - this.hf) + 0x1 * this.hf;
          const v997 = v995 * (0x1 - this.hf);
          const v998 = (Math.atan2(v997, v996) + 0x2 * Math.PI) % (0x2 * Math.PI) * (0x168 / (0x2 * Math.PI));
          const v999 = this.hf * (0.5 + 0.5 * this.gf);
          const v1000 = v510(Math.floor(v998), 0x1, 0.75 - 0.25 * this.hf);
          this.lf.Hf(v1000[0x0], v1000[0x1], v1000[0x2], 0.1 + 0.2 * v999);
}
 else {
          this.hf = 0x0;
          const v1001 = v510(Math.floor(this.ff), 0x1, 0.75);
          this.lf.Hf(v1001[0x0], v1001[0x1], v1001[0x2], 0.1);
}
        for (let v1002 = 0x0;
 v1002 < this.sf.children.length;
 v1002++) {
          const v1003 = this.sf.children[v1002];
          if (v1003.If) {
            v1003.position.x = v982 / 0x2 - (this.yf.x - v1003.If.x) * v985;
            v1003.position.y = v983 / 0x2 - (this.yf.y - v1003.If.y) * v985;
}
}
        this.tf.Jf.position.x = v988.x / v991 * this.tf.Kf;
        this.tf.Jf.position.y = v988.y / v991 * this.tf.Kf;
        this.tf.WLp.position.x = -0x19 - this.tf.WLp.width / 0x2;
        this.tf.WLp.text = parseInt(zw_hscount);
        this.tf.WLp.style.fill = "0xFFFFFF";
        this.tf.MLb.position.x = 0x19 - this.tf.MLb.width / 0x2;
        this.tf.MLb.text = parseInt(zw_killcount);
        this.tf.MLb.style.fill = "0xFFFFFF";
        this.uf.Qa(v978);
        this.wf.Te(v978, v979);
        this.ue.render(this.ve, null, true);
        this.ue.render(this.rf, null, false);
        const v1004 = performance.now();
        const v1005 = v1004 - lastFrameTime;
        lastFrameTime = v1004;
        const v1006 = 0x3e8 / v1005;
        frameTimes.push(v1006);
        if (frameTimes.length > 0x14) {
          frameTimes.shift();
}
        const v1007 = Math.round(frameTimes.reduce((v1008, v1009) => v1008 + v1009, 0x0) / frameTimes.length);
        zw_serverfps.text = v1007 + " FPS";
        zw_serverfps.style.fill = getFPSColor(v1007);
        hstext.style.fill = "0xFFFFFF";
        killtext.style.fill = "0xFFFFFF";
        circle.tint = "0xFFFFFF";
}
;
      v962.prototype.Lf = function (v1010, v1011) {
        v1011.Of.Nf.Mf().zIndex = (v1010 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(v1011.Of.Pf.Mf());
        this.pf.addChild(v1011.Of.Nf.Mf());
}
;
      v962.prototype.Qf = function (v1012, v1013, v1014, v1015, v1016) {
        $(".Worm_cerca").text(" : " + v1014.text);
        v1013.Rf.zIndex = (window.anApp = v542).o.fb.bf ? 0x0 : 0xa + (v1012 + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(v1013.Rf);
        if (v1012 != (window.anApp = v542).o.fb.bf) {
          this.sf.addChild(v1014);
          this.sf.addChild(v1015);
          this.sf.addChild(v1016);
}
        if (v1014.text === (window.anApp = v542).o.N.Mb.ad) {
          v1014.text = 'ㅤ';
}
        this.sf.addChild(v1014);
        this.sf.addChild(v1015);
        this.sf.addChild(v1016);
}
;
      var v965 = function () {
        return v487(v671.Zb, function () {
          v671.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new v671.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new v671.bc();
          circle = new v671.bc();
          circle.beginFill('black', 0.4);
          circle.drawCircle(0x0, 0x0, this.Kf);
          circle.endFill();
          circle.lineStyle(0x2, 0xe3d2d2);
          circle.drawCircle(0x0, 0x0, this.Kf);
          circle.moveTo(0x0, -this.Kf);
          circle.lineTo(0x0, +this.Kf);
          circle.moveTo(-this.Kf, 0x0);
          circle.lineTo(+this.Kf, 0x0);
          circle.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(zwormData.teamColor);
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, 'black');
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.addChild(circle);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          zw_MinimapSombra = new v671.ec();
          zw_MinimapSombra.anchor.set(0.5);
          zw_MinimapSombra.alpha = 0.5;
          zw_MinimapTeamCode = new v671.bc();
          zw_MinimapTeamCode.beginFill("black", 0.4);
          zw_MinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.lineStyle(0x2, 0xe3d2d2);
          zw_MinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
          zw_MinimapTeamCode.moveTo(0x0, -0x28);
          zw_MinimapTeamCode.lineTo(0x0, 40);
          zw_MinimapTeamCode.moveTo(-0x28, 0x0);
          zw_MinimapTeamCode.lineTo(40, 0x0);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.y = 0xdc;
          zw_MinimapTeamCode.x = 0x96;
          zw_MinimapTeamCode.addChild(zw_MinimapSombra);
          console.log(this.Kf);
          hstext = new v671.fc('HS', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x10,
            'fill': "0xFFFFFF",
            'align': "center"
}
);
          hstext.position.y = 0x32;
          hstext.position.x = -0x23;
          killtext = new v671.fc('KILL', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x10,
            'fill': "0xFFFFFF",
            'align': "center"
}
);
          killtext.position.y = 0x32;
          killtext.position.x = 0xa;
          this.addChild(hstext);
          this.addChild(killtext);
          zw_killcount = 0x0;
          zw_hscount = 0x0;
          this.WLp = new v671.fc('', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xe,
            'fill': '#FFFFFF',
            'align': "center"
}
);
          this.WLp.position.y = 0x43;
          this.WLp.position.x = -0x2d;
          this.MLb = new v671.fc('', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xe,
            'fill': "#FFFFFF",
            'align': 'center'
}
);
          this.MLb.position.y = 0x43;
          this.MLb.position.x = 0x14;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let v1017 = new v671._b(v671.$b.from("https://i.imgur.com/VPkrI9l.png"));
          let v1018 = new v671.ec();
          v1018.texture = v1017;
          v1018.width = 0x64;
          v1018.height = 0x64;
          v1018.x = -0x32;
          v1018.y = -0x32;
          this.addChild(v1018);
          let v1019 = new v671.ec();
          v1019.texture = v1017;
          v1019.width = 0x64;
          v1019.height = 0x64;
          v1019.x = -0x32;
          v1019.y = -0x32;
          zw_MinimapTeamCode.addChild(v1019);
          if (zw_mobilecheck()) {
            var v1020 = document.getElementById("game-cont");
            zw_mobilecontrol = 0x0;
            zw_mobilecontrol2 = -0x1;
            zw_mobileprediction = 0x0;
            zw_mobilecontroltextures = [];
            zw_mobilepredictiontextures = [];
            zw_mobilecontroltextures[0x0] = new v671.ec.from('https://i.imgur.com/aOyOob6.png');
            zw_mobilecontroltextures[0x0].width = 0x50;
            zw_mobilecontroltextures[0x0].height = 0x28;
            zw_mobilecontroltextures[0x0].x = -0x64 + v1020.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x0].y = -0x3c;
            zw_mobilecontroltextures[0x0].on("tap", () => {
              zw_mobilecontrol++;
              zw_joystick = 0x0;
              zw_mobileprediction = -0x1;
              for (let v1021 = 0x0;
 v1021 < zw_mobilepredictiontextures.length;
 v1021++) {
                zw_mobilepredictiontextures[v1021].visible = false;
}
              for (let v1022 = 0x0;
 v1022 < zw_mobilecontroltextures.length;
 v1022++) {
                zw_mobilecontroltextures[v1022].visible = zw_mobilecontrol === v1022;
}
}
);
            zw_mobilecontroltextures[0x1] = new v671.ec.from("https://i.imgur.com/9ui2KwE.png");
            zw_mobilecontroltextures[0x1].width = 0x50;
            zw_mobilecontroltextures[0x1].height = 0x28;
            zw_mobilecontroltextures[0x1].x = -0x64 + v1020.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x1].y = -0x3c;
            zw_mobilecontroltextures[0x1].visible = false;
            zw_mobilecontroltextures[0x1].on("tap", () => {
              if (zw_mobilecontrol2 !== 0x1) {
                zw_mobilecontrol2++;
                if (zw_mobilecontrol2 === 0x0) {
                  zw_mobilearrowtexture.x = 0xf;
                  zw_mobilepeedtexture.x = -0xfa + v1020.offsetWidth;
                  zw_mobilearrowtexture.visible = true;
                  zw_mobilepeedtexture.visible = true;
}
                if (zw_mobilecontrol2 === 0x1) {
                  zw_mobilearrowtexture.x = -0xfa + v1020.offsetWidth;
                  zw_mobilepeedtexture.x = 0xf;
}
                zw_mobileprediction = 0x1;
                zw_joystick = -0x1;
                for (let v1023 = 0x0;
 v1023 < zw_mobilepredictiontextures.length;
 v1023++) {
                  zw_mobilepredictiontextures[v1023].visible = zw_mobileprediction === v1023;
}
                return;
}
              zw_mobilearrowtexture.visible = false;
              zw_mobilepeedtexture.visible = false;
              zw_joystick = 0x1;
              zw_mobilecontrol++;
              for (let v1024 = 0x0;
 v1024 < zw_mobilecontroltextures.length;
 v1024++) {
                zw_mobilecontroltextures[v1024].visible = zw_mobilecontrol === v1024;
}
}
);
            zw_mobilecontroltextures[0x2] = new v671.ec.from("https://i.imgur.com/NKAyYa8.png");
            zw_mobilecontroltextures[0x2].width = 0x50;
            zw_mobilecontroltextures[0x2].height = 0x28;
            zw_mobilecontroltextures[0x2].x = -0x64 + v1020.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x2].y = -0x3c;
            zw_mobilecontroltextures[0x2].visible = false;
            zw_mobilecontroltextures[0x2].on("tap", () => {
              zw_mobilecontrol++;
              zw_mobileprediction = 0x2;
              zw_joystick = 0x2;
              for (let v1025 = 0x0;
 v1025 < zw_mobilepredictiontextures.length;
 v1025++) {
                zw_mobilepredictiontextures[v1025].visible = zw_mobileprediction === v1025;
}
              for (let v1026 = 0x0;
 v1026 < zw_mobilecontroltextures.length;
 v1026++) {
                zw_mobilecontroltextures[v1026].visible = zw_mobilecontrol === v1026;
}
}
);
            zw_mobilecontroltextures[0x3] = new v671.ec.from('https://i.imgur.com/n1jVrwm.png');
            zw_mobilecontroltextures[0x3].width = 0x50;
            zw_mobilecontroltextures[0x3].height = 0x28;
            zw_mobilecontroltextures[0x3].x = -0x64 + v1020.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x3].y = -0x3c;
            zw_mobilecontroltextures[0x3].visible = false;
            zw_mobilecontroltextures[0x3].on("tap", () => {
              zw_mobilecontrol = 0x0;
              zw_mobilecontrol2 = -0x1;
              zw_mobileprediction = 0x0;
              zw_joystick = -0x1;
              for (let v1027 = 0x0;
 v1027 < zw_mobilepredictiontextures.length;
 v1027++) {
                zw_mobilepredictiontextures[v1027].visible = zw_mobileprediction === v1027;
}
              for (let v1028 = 0x0;
 v1028 < zw_mobilecontroltextures.length;
 v1028++) {
                zw_mobilecontroltextures[v1028].visible = zw_mobilecontrol === v1028;
}
}
);
            zw_mobilepredictiontextures[0x0] = new v671.ec.from("https://i.imgur.com/4ccZ556.png");
            zw_mobilepredictiontextures[0x0].width = 0x10;
            zw_mobilepredictiontextures[0x0].height = 0x10;
            zw_mobilepredictiontextures[0x0].x = 0x0;
            zw_mobilepredictiontextures[0x0].y = 0x0;
            zw_mobilepredictiontextures[0x0].alpha = 0x0;
            zw_mobilepredictiontextures[0x1] = new v671.ec.from('https://i.imgur.com/hUVCdUv.png');
            zw_mobilepredictiontextures[0x1].width = 0x10;
            zw_mobilepredictiontextures[0x1].height = 0x10;
            zw_mobilepredictiontextures[0x1].x = 0x0;
            zw_mobilepredictiontextures[0x1].y = 0x0;
            zw_mobilepredictiontextures[0x1].visible = false;
            zw_mobilepredictiontextures[0x2] = new v671.ec.from("https://i.imgur.com/WqWsDfi.png");
            zw_mobilepredictiontextures[0x2].width = 0x10;
            zw_mobilepredictiontextures[0x2].height = 0x10;
            zw_mobilepredictiontextures[0x2].x = 0x0;
            zw_mobilepredictiontextures[0x2].y = 0x0;
            zw_mobilepredictiontextures[0x2].visible = false;
            zw_mobilearrowtexture = new v671.ec.from("https://i.imgur.com/mHp0ozi.png");
            zw_mobilearrowtexture.width = 0x64;
            zw_mobilearrowtexture.height = 0x64;
            zw_mobilearrowtexture.x = 0xf;
            zw_mobilearrowtexture.y = -0xd2 + v1020.offsetHeight;
            zw_mobilearrowtexture.visible = false;
            zw_mobilepeedtexture = new v671.ec.from("https://i.imgur.com/0G8cFtP.png");
            zw_mobilepeedtexture.width = 0x50;
            zw_mobilepeedtexture.height = 0x50;
            zw_mobilepeedtexture.x = -0xfa + v1020.offsetWidth;
            zw_mobilepeedtexture.y = -0xc8 + v1020.offsetHeight;
            zw_mobilepeedtexture.visible = false;
            zw_mobilepeedtexture.alpha = 0.5;
            this.addChild(zw_mobilearrowtexture);
            this.addChild(zw_mobilepeedtexture);
            for (let v1029 = 0x0;
 v1029 < zw_mobilecontroltextures.length;
 v1029++) {
              this.addChild(zw_mobilecontroltextures[v1029]);
}
            for (let v1030 = 0x0;
 v1030 < zw_mobilepredictiontextures.length;
 v1030++) {
              this.addChild(zw_mobilepredictiontextures[v1030]);
}
}
}
);
}
();
      var v966 = function () {
        var v1031 = v487(v671.Zb, function () {
          v671.Zb.call(this);
          this.Tf = {
}
;
}
);
        v1031.prototype.Qa = function (v1032) {
          var v1033 = 0.5 + 0.5 * Math.cos(v492 * (v1032 / 0x3e8 / 1.6));
          var v1034;
          for (v1034 in this.Tf) {
            var v1035 = this.Tf[v1034];
            var v1036 = v1035.Uf;
            v1035.alpha = 0x1 - v1036 + v1036 * v1033;
}
}
;
        v1031.prototype.Te = function (v1037) {
          var v1038;
          for (v1038 in this.Tf) {
            if (!(null != v1037[v1038] && v1037[v1038].sc)) {
              v508(this.Tf[v1038]);
              delete this.Tf[v1038];
}
}
          var v1039 = 0x0;
          var v1040;
          for (v1040 in v1037) {
            var v1041 = v1037[v1040];
            if (v1041.sc) {
              var v1042 = this.Tf[v1040];
              if (!v1042) {
                var v1043 = (window.anApp = v542).p.Dc().ld(v1041.rc).Zc;
                v1042 = new v1044();
                v1042.texture = v1043.Hc;
                v1042.width = 0x28;
                v1042.height = 0x28;
                this.Tf[v1040] = v1042;
                this.addChild(v1042);
}
              assignPtcValues(this, v1040, v1041.tc);
              v1042.Uf = v1041.tc;
              v1042.position.x = v1039;
              v1039 = v1039 + 0x28;
}
}
}
;
        var v1044 = function () {
          return v487(v671.ec, function () {
            v671.ec.call(this);
            this.Uf = 0x0;
}
);
}
();
        return v1031;
}
();
      var v967 = function () {
        var v1045 = v487(v671.Zb, function () {
          v671.Zb.call(this);
          this.Ef = true;
          this.Vf = 0xc;
          this.Wf = 0x9;
          this.Pe = [];
          var v1046 = 0x0;
          for (;
 v1046 < 0xe;
 v1046++) {
            this.Xf();
}
}
);
        v1045.prototype.Te = function (v1047) {
          if (zw_zoomplustexture) {
            this.addChild(zw_zoomplustexture);
}
          if (zw_zoomsubtracttexture) {
            this.addChild(zw_zoomsubtracttexture);
}
          if (zw_girosubtracttexture) {
            this.addChild(zw_girosubtracttexture);
}
          if (zw_explotWubtracttexture) {
            this.addChild(zw_explotWubtracttexture);
}
          if (zw_servertext.text !== '') {
            this.addChild(zw_servertext);
            this.removeChild(zw_TopFriends_list);
}
          if (zwormData && gameState.players.size > 0x0) {
            sendPlayerUpdate(0x0, 0x0);
}
 else {
}
          var v1048 = window.anApp = v542;
          var v1049 = v1048.o.fb.af == 0x10;
          var v1050 = 0x0;
          var v1051 = 0x0;
          if (v1051 >= this.Pe.length) {
            this.Xf();
}
          this.Pe[v1051].Yf(0x1, "white");
          this.Pe[v1051].Zf('', zw_servertext.text === '' ? "Top " + zw_toplist : '', '('.concat(v1048.o.tb, " 🌎)"));
          this.Pe[v1051].position.y = v1050;
          v1050 = v1050 + this.Vf;
          v1051 = v1051 + 0x1;
          if (v1047.$f.length > 0x0) {
            v1050 = v1050 + this.Wf;
}
          var v1052 = 0x0;
          for (;
 v1052 < v1047.$f.length;
 v1052++) {
            var v1053 = v1047.$f[v1052];
            var v1054 = v1048.p.Dc().ed(v1053._f);
            if (v1051 >= this.Pe.length) {
              this.Xf();
}
            this.Pe[v1051].Yf(0.8, v1054.bd._c);
            console.log(v1054);
            this.Pe[v1051].Zf('' + (v1052 + 0x1), "Equipos / Teams", '' + Math.floor(v1053.M));
            this.Pe[v1051].position.y = v1050;
            v1050 = v1050 + this.Vf;
            v1051 = v1051 + 0x1;
}
          if (v1047.ag.length > 0x0) {
            v1050 = v1050 + this.Wf;
}
          var v1055 = 0x0;
          for (;
 v1055 < v1047.ag.length;
 v1055++) {
            var v1056 = v1047.ag[v1055];
            var v1057 = v1048.o.fb.bf == v1056.bg;
            var v1058 = undefined;
            var v1059 = undefined;
            if (v1057) {
              v1058 = "white";
              v1059 = v1048.o.N.Mb.ad;
}
 else {
              var v1060 = v1048.o.hb[v1056.bg];
              if (null != v1060) {
                v1058 = v1049 ? v1048.p.Dc().ed(v1060.Mb.cg).bd._c : v1048.p.Dc().dd(v1060.Mb.dg)._c;
                v1059 = this.Ef ? v1060.Mb.ad : '---';
}
 else {
                v1058 = "gray";
                v1059 = '?';
}
}
            if (v1057) {
              v1050 = v1050 + this.Wf;
}
            if (v1051 >= this.Pe.length) {
              this.Xf();
}
            this.Pe[v1051].Yf(v1057 ? 0x1 : 0.8, v1058);
            if (v1048.o.O === v1051) {
              this.Pe[v1051].Yf(0x1, "white");
}
            var v1061 = Math.floor(v1056.M);
            v1061.customFormat();
            this.Pe[v1051].Zf('' + (v1055 + 0x1), v1059, '' + v1061.customFormat());
            this.Pe[v1051].position.y = v1050;
            v1050 = v1050 + this.Vf;
            v1051 = v1051 + 0x1;
            if (v1057) {
              v1050 = v1050 + this.Wf;
}
}
          if (v1048.o.O > v1047.ag.length) {
            v1050 = v1050 + this.Wf;
            if (v1051 >= this.Pe.length) {
              this.Xf();
}
            this.Pe[v1051].Yf(0x1, "#FFFFFF");
            window.tuNewScore = Math.floor(v1048.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[v1051].Zf('' + v1048.o.O, v1048.o.N.Mb.ad, '' + window.tuNewScore.customFormat());
            this.Pe[v1051].position.y = v1050;
            v1050 = v1050 + this.Vf;
            v1051 = v1051 + 0x1;
            v1050 = v1050 + this.Wf;
}
          for (;
 this.Pe.length > v1051;
) {
            v508(this.Pe.pop());
}
}
;
        v1045.prototype.Xf = function () {
          var v1062 = new v1063();
          v1062.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            v1062.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
}
          this.Pe.push(v1062);
          this.addChild(v1062);
}
;
        var v1063 = function () {
          var v1064 = v487(v671.Zb, function () {
            v671.Zb.call(this);
            this.eg = new v671.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
}
);
            this.eg.anchor.x = 0x1;
            this.eg.position.x = 0x1e;
            this.addChild(this.eg);
            this.fg = new v671.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
}
);
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x23;
            this.addChild(this.fg);
            this.gg = new v671.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
}
);
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xdc;
            this.addChild(this.gg);
}
);
          v1064.prototype.Zf = function (v1065, v1066, v1067) {
            this.eg.text = v1065;
            this.gg.text = v1067;
            var v1068 = v1066;
            this.fg.text = v1068;
            for (;
 this.fg.width > 0x64;
) {
              v1068 = v1068.substring(0x0, v1068.length - 0x1);
              this.fg.text = v1068 + '..';
}
}
;
          v1064.prototype.Yf = function (v1069, v1070) {
            this.eg.alpha = v1069;
            this.eg.style.fill = v1070;
            this.fg.alpha = v1069;
            this.fg.style.fill = v1070;
            this.gg.alpha = v1069;
            this.gg.style.fill = v1070;
}
;
          return v1064;
}
();
        return v1045;
}
();
      return v962;
}
();
    var v556 = function () {
      function v1071(v1072) {
        this.o = v1072;
        this.hg = [];
        this.ig = 0x0;
}
      v1071.prototype.Xb = function (v1073) {
        this.hg.push(new DataView(v1073));
}
;
      v1071.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
}
;
      v1071.prototype.Bb = function () {
        if (this.hg.length === 0x0) {
          return;
}
        let v1074 = navigator.hardwareConcurrency ? Math.max(0x5, navigator.hardwareConcurrency) : 0xa;
        const v1075 = () => {
          let v1076 = 0x0;
          const v1077 = performance.now();
          while (v1076 < v1074 && this.hg.length > 0x0) {
            const v1078 = this.hg.shift();
            try {
              this.jg(v1078);
}
 catch (v1079) {
              console.log("DataReader error: " + v1079);
}
            v1076++;
            if (performance.now() - v1077 > 0x6) {
              break;
}
}
          if (this.hg.length > 0x0) {
            setTimeout(v1075, 0x0);
}
}
;
        v1075();
}
;
      v1071.prototype.jg = function (v1080) {
        switch (0xff & v1080.mc(0x0)) {
          case 0x0:
            return void this.kg(v1080, 0x1);
          case 0x1:
            return void this.lg(v1080, 0x1);
          case 0x2:
            return void this.mg(v1080, 0x1);
          case 0x3:
            return void this.ng(v1080, 0x1);
          case 0x4:
            return void this.og(v1080, 0x1);
          case 0x5:
            return void this.pg(v1080, 0x1);
}
}
;
      v1071.prototype.kg = function (v1081, v1082) {
        console.log('sgp1');
        this.o.fb.af = v1081.mc(v1082);
        v1082 = v1082 + 0x1;
        var v1083 = v1081.nc(v1082);
        v1082 = v1082 + 0x2;
        this.o.fb.bf = v1083;
        this.o.N.Mb.Lb = v1083;
        this.o.fb.ub = v1081.pc(v1082);
        v1082 = v1082 + 0x4;
        this.o.fb.cf = v1081.pc(v1082);
        v1082 = v1082 + 0x4;
        this.o.fb.df = v1081.pc(v1082);
        v1082 = v1082 + 0x4;
        (window.anApp = v542).s.H.wb.Te(this.o.fb, (window.anApp = v542).s.xa.wa());
        console.log("sgp2");
        return v1082;
}
;
      v1071.prototype.lg = function (v1084, v1085) {
        var v1086 = this.ig++;
        var v1087 = v1084.nc(v1085);
        v1085 += 0x2;
        var v1088 = undefined;
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1089 = 0x0;
 v1089 < v1088;
 v1089++) {
          v1085 = this.sg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1090 = 0x0;
 v1090 < v1088;
 v1090++) {
          v1085 = this.tg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1091 = 0x0;
 v1091 < v1088;
 v1091++) {
          v1085 = this.ug(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1092 = 0x0;
 v1092 < v1088;
 v1092++) {
          v1085 = this.vg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1093 = 0x0;
 v1093 < v1088;
 v1093++) {
          v1085 = this.wg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1094 = 0x0;
 v1094 < v1088;
 v1094++) {
          v1085 = this.xg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1095 = 0x0;
 v1095 < v1088;
 v1095++) {
          v1085 = this.yg(v1084, v1085);
}
        v1088 = this.qg(v1084, v1085);
        v1085 += this.rg(v1088);
        for (var v1096 = 0x0;
 v1096 < v1088;
 v1096++) {
          v1085 = this.zg(v1084, v1085);
}
        if (v1086 > 0x0) {
          v1085 = this.Ag(v1084, v1085);
}
        this.o.Qb(v1086, v1087);
        return v1085;
}
;
      v1071.prototype.vg = function (v1097, v1098) {
        var v1099 = new v612.Config();
        v1099.Lb = v1097.nc(v1098);
        v1098 = v1098 + 0x2;
        v1099.cg = this.o.fb.af == 0x10 ? v1097.mc(v1098++) : v611.TEAM_DEFAULT;
        v1099.dg = v1097.nc(v1098);
        let v1100 = v1098;
        v1098 = v1098 + 0x2;
        v1099.Bg = v1097.nc(v1098);
        let v1101 = v1098;
        v1098 = v1098 + 0x2;
        v1099.Cg = v1097.nc(v1098);
        let v1102 = v1098;
        v1098 = v1098 + 0x2;
        v1099.Dg = v1097.nc(v1098);
        let v1103 = v1098;
        v1098 = v1098 + 0x2;
        v1099.Eg = v1097.nc(v1098);
        let v1104 = v1098;
        v1098 = v1098 + 0x2;
        var v1105 = v1097.mc(v1098);
        v1098 = v1098 + 0x1;
        var v1106 = '';
        var v1107 = 0x0;
        for (;
 v1107 < v1105;
 v1107++) {
          v1106 = v1106 + String.fromCharCode(v1097.nc(v1098));
          v1098 = v1098 + 0x2;
}
        if (0xd2 < v1098) {
          for (let v1108 in this.o.hb) {
            if (/^(.{
16
}
)(ZW_\d{
9
}
)$/.test(this.o.hb[v1108].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v1108].Mb.ad);
              var v1109 = this.o.hb[v1108].Mb.ad.substr(-0xa);
              let v1110 = v1109.substr(0x1, 0x4);
              console.log("skinId_A: " + v1110);
              let v1111 = v1109.substr(0x5, 0x5);
              let v1112 = v1109.substr(0x6, 0x3);
              let v1113 = v1109.substr(0x9, 0x3);
              if ("0000" !== v1110 && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(v1110))) {
                this.o.hb[v1108].Mb.dg = parseInt(v1110);
}
              if ("00000" !== v1111) {
                this.o.hb[v1108].Mb.Eg = parseInt(v1111);
}
              if ("000" !== v1112) {
                this.o.hb[v1108].Mb.Bg = parseInt(v1112);
}
              if ("000" !== v1113) {
                this.o.hb[v1108].Mb.Cg = parseInt(v1113);
}
}
}
}
        if ((window.anApp = v542).o.N.Mb.Lb === v1099.Lb) {
          v1099.dg = theoKzObjects?.["PropertyManager"]?.['rh'] ?? 0x0;
          v1099.Bg = theoKzObjects?.['PropertyManager']?.['sh'] ?? 0x0;
          v1099.Cg = theoKzObjects?.["PropertyManager"]?.['th'] ?? 0x0;
          v1099.Dg = theoKzObjects?.["PropertyManager"]?.['uh'] ?? 0x0;
          v1099.Eg = theoKzObjects?.["PropertyManager"]?.['vh'] ?? 0x0;
          v1097.setInt16(v1100, v1099.dg);
          v1097.setInt16(v1101, v1099.Bg);
          v1097.setInt16(v1102, v1099.Cg);
          v1097.setInt16(v1103, v1099.Dg);
          v1097.setInt16(v1104, v1099.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = v1100;
}
        v1099.ad = v1106;
        if (this.o.fb.bf === v1099.Lb) {
          this.o.N.Fg(v1099);
          v1099.Mb = v1099.Lb;
          v1099.bd = v1099.ad;
}
 else {
          var v1114 = this.o.hb[v1099.Lb];
          if (null != v1114) {
            v1114.Kb();
}
          var v1115 = new v612(this.o.fb);
          v1115.vb((window.anApp = v542).s.H.wb);
          this.o.hb[v1099.Lb] = v1115;
          v1115.Fg(v1099);
}
        return v1098;
}
;
      v1071.prototype.wg = function (v1116, v1117) {
        var v1118 = v1116.nc(v1117);
        v1117 += 0x2;
        var v1119 = v1116.mc(v1117);
        v1117++;
        var v1120 = !!(0x1 & v1119);
        var v1121 = !!(0x2 & v1119);
        var v1122 = 0x0;
        if (v1120) {
          v1122 = v1116.nc(v1117);
          v1117 += 0x2;
}
        var v1123 = this.Gg(v1118);
        if (undefined === v1123) {
          return v1117;
}
        v1123.Ib = false;
        if (!v1123.Hb) {
          return v1117;
}
        var v1124 = this.Gg(v1118);
        if (v1120 && undefined !== v1124 && v1124.Hb) {
          if (v1122 === this.o.fb.bf) {
            var v1125 = this.o.N.Gf();
            var v1126 = v1123.Hg(v1125.x, v1125.y);
            if (v1121 === true) {
              zwormData.enemyNameHs = v1123.Mb.ad;
}
            Math.max(0x0, 0x1 - v1126.distance / (0.5 * this.o.jb));
            if (v1126.distance < 0.5 * this.o.jb) {
              (window.anApp = v542).s.H.wb.wf.Se(v1121);
}
}
 else {
            if (v1118 === this.o.fb.bf) {
}
 else {
              var v1127 = this.o.N.Gf();
              var v1128 = v1123.Hg(v1127.x, v1127.y);
              Math.max(0x0, 0x1 - v1128.distance / (0.5 * this.o.jb));
}
}
}
 else {
          if (v1118 === this.o.fb.bf) {
}
 else {
            var v1129 = this.o.N.Gf();
            var v1130 = v1123.Hg(v1129.x, v1129.y);
            Math.max(0x0, 0x1 - v1130.distance / (0.5 * this.o.jb));
}
}
        return v1117;
}
;
      v1071.prototype.zg = function (v1131, v1132) {
        var v1133 = v1131.nc(v1132);
        v1132 += 0x2;
        var v1134 = v1133 === this.o.fb.bf ? null : this.o.hb[v1133];
        var v1135 = v1131.mc(v1132);
        v1132 += 0x1;
        var v1136 = !!(0x1 & v1135);
        if (!!(0x2 & v1135)) {
          var v1137 = v1131.pc(v1132);
          v1132 += 0x4;
          if (v1134) {
            v1134.Ig(v1137);
}
}
        var v1138 = this.Jg(v1131.mc(v1132++), v1131.mc(v1132++), v1131.mc(v1132++));
        var v1139 = this.Jg(v1131.mc(v1132++), v1131.mc(v1132++), v1131.mc(v1132++));
        if (v1134) {
          v1134.Kg(v1138, v1139, v1136);
          var v1140 = this.o.N.Gf();
          var v1141 = v1134.Gf();
          var v1142 = Math.max(0x0, 0x1 - Math.hypot(v1140.x - v1141.x, v1140.y - v1141.y) / (0.5 * this.o.jb));
          (window.anApp = v542).r.Zd(v1142, v1133, v1136);
}
        var v1143 = this.qg(v1131, v1132);
        v1132 += this.rg(v1143);
        if (v1134) {
          var v1144;
          for (v1144 in v1134.Ff) {
            var v1145 = v1134.Ff[v1144];
            if (v1145) {
              v1145.sc = false;
}
}
}
        var v1146 = 0x0;
        for (;
 v1146 < v1143;
 v1146++) {
          var v1147 = v1131.mc(v1132);
          v1132++;
          var v1148 = v1131.mc(v1132);
          v1132++;
          if (v1134) {
            var v1149 = v1134.Ff[v1147];
            if (!v1149) {
              v1149 = v1134.Ff[v1147] = new v681(v1147);
}
            v1149.sc = true;
            v1149.tc = Math.min(0x1, Math.max(0x0, v1148 / 0x64));
}
}
        return v1132;
}
;
      v1071.prototype.Ag = function (v1150, v1151) {
        var v1152 = this.o.N;
        var v1153 = v1150.mc(v1151);
        v1151 += 0x1;
        var v1154 = !!(0x1 & v1153);
        var v1155 = !!(0x2 & v1153);
        var v1156 = !!(0x4 & v1153);
        if (v1155) {
          var v1157 = v1152.M;
          v1152.Ig(v1150.pc(v1151));
          v1151 += 0x4;
          v1157 = v1152.M - v1157;
          if (v1157 > 0x0) {
            (window.anApp = v542).s.H.wb.wf.Re(v1157);
}
}
        if (v1156) {
          this.o.ib = v1150.pc(v1151);
          v1151 += 0x4;
}
        var v1158 = this.Jg(v1150.mc(v1151++), v1150.mc(v1151++), v1150.mc(v1151++));
        var v1159 = this.Jg(v1150.mc(v1151++), v1150.mc(v1151++), v1150.mc(v1151++));
        v1152.Kg(v1158, v1159, v1154);
        (window.anApp = v542).r.Zd(0.5, this.o.fb.bf, v1154);
        var v1160 = this.qg(v1150, v1151);
        v1151 += this.rg(v1160);
        for (var v1161 in v1152.Ff) {
          var v1162 = v1152.Ff[v1161];
          if (v1162) {
            v1162.sc = false;
}
}
        for (var v1163 = 0x0;
 v1163 < v1160;
 v1163++) {
          var v1164 = v1150.mc(v1151);
          v1151++;
          var v1165 = v1150.mc(v1151);
          v1151++;
          var v1166 = v1152.Ff[v1164];
          if (!v1166) {
            v1166 = new v681(v1164);
            v1152.Ff[v1164] = v1166;
}
          v1166.sc = true;
          v1166.tc = Math.min(0x1, Math.max(0x0, v1165 / 0x64));
}
        (window.anApp = v542).s.H.wb.uf.Te(v1152.Ff);
}
;
      v1071.prototype.xg = function (v1167, v1168) {
        var v1169 = this;
        var v1170 = v1167.nc(v1168);
        v1168 += 0x2;
        var v1171 = this.Gg(v1170);
        var v1172 = v1167.pc(v1168);
        v1168 += 0x4;
        var v1173 = [];
        for (var v1174 in v1171.Ff) {
          if (0x0 == v1174) {
            v1173.push("velocidad");
            $('.v0').fadeIn();
}
 else {
            if (0x1 == v1174) {
              v1173.push("movimiento");
              $(".v1").fadeIn();
}
 else {
              if (0x2 == v1174) {
                v1173.push("iman");
                $('.v2').fadeIn();
}
 else {
                if (0x3 == v1174) {
                  v1173.push("comidax2");
                  $('.v3').fadeIn();
}
 else {
                  if (0x4 == v1174) {
                    v1173.push('comidax5');
                    $(".v4").fadeIn();
}
 else {
                    if (0x5 == v1174) {
                      v1173.push("comidax10");
                      $('.v5').fadeIn();
}
 else if (0x6 == v1174) {
                      v1173.push("zoom");
                      $('.v6').fadeIn();
}
 else {
                      console.log("comiste otro potenciador");
}
}
}
}
}
}
}
        window.nombres2 = v1173;
        if (v1171.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
}
, 0xbb8);
}
 else {
}
        var v1175 = this.qg(v1167, v1168);
        v1168 += this.rg(v1175);
        if (v1171) {
          v1171.Ig(v1172);
          v1171.Lg(function () {
            return v1169.Jg(v1167.mc(v1168++), v1167.mc(v1168++), v1167.mc(v1168++));
}
, v1175);
          v1171.Mg(true);
          var v1176 = this.o.N.Gf();
          var v1177 = v1171.Gf();
          var v1178 = Math.max(0x0, 0x1 - Math.hypot(v1176.x - v1177.x, v1176.y - v1177.y) / (0.5 * this.o.jb));
          (window.anApp = v542).r.Xd(v1178, v1170);
}
 else {
          v1168 += 0x6 * v1175;
}
        return v1168;
}
;
      v1071.prototype.yg = function (v1179, v1180) {
        var v1181 = v1179.nc(v1180);
        v1180 += 0x2;
        var v1182 = this.o.hb[v1181];
        if (v1182 && v1182.Ib) {
          v1182.Mg(false);
}
        (window.anApp = v542).r.Yd(v1181);
        return v1180;
}
;
      v1071.prototype.sg = function (v1183, v1184) {
        var v1185 = new v1186.Config();
        v1185.Lb = v1183.oc(v1184);
        v1184 += 0x4;
        v1185.cg = this.o.fb.af === 0x10 ? v1183.mc(v1184++) : v611.TEAM_DEFAULT;
        v1185.Ng = this.Jg(v1183.mc(v1184++), v1183.mc(v1184++), v1183.mc(v1184++));
        v1185.dg = v1183.mc(v1184++);
        var v1187 = this.o.gb[v1185.Lb];
        if (null != v1187) {
          v1187.Kb();
}
        var v1188 = new v1186(v1185, (window.anApp = v542).s.H.wb);
        v1188.Og(this.Pg(v1185.Lb), this.Qg(v1185.Lb), true);
        this.o.gb[v1185.Lb] = v1188;
        return v1184;
}
;
      v1071.prototype.tg = function (v1189, v1190) {
        var v1191 = v1189.oc(v1190);
        v1190 += 0x4;
        var v1192 = this.o.gb[v1191];
        if (v1192) {
          v1192.Rg = 0x0;
          v1192.Sg = 1.5 * v1192.Sg;
          v1192.Nb = true;
}
        return v1190;
}
;
      v1071.prototype.ug = function (v1193, v1194) {
        var v1195 = v1193.oc(v1194);
        v1194 += 0x4;
        var v1196 = v1193.nc(v1194);
        v1194 += 0x2;
        var v1197 = this.o.gb[v1195];
        if (v1197) {
          v1197.Rg = 0x0;
          v1197.Sg = 0.1 * v1197.Sg;
          v1197.Nb = true;
          var v1198 = this.Gg(v1196);
          if (v1198 && v1198.Hb) {
            this.o.fb.bf;
            var v1199 = v1198.Gf();
            v1197.Og(v1199.x, v1199.y, false);
}
}
        return v1194;
}
;
      var v1200 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      v1071.prototype.mg = function (v1201) {
        var v1202 = (window.anApp = v542).q.Ug.Tg;
        var v1203 = v1202.getImageData(0x0, 0x0, 0x50, 0x50);
        var v1204 = v1200[0x0];
        var v1205 = 0x50 - v1204;
        var v1206 = 0x0;
        for (var v1207 = 0x0;
 v1207 < 0x274;
 v1207++) {
          var v1208 = v1201.mc(0x1 + v1207);
          for (var v1209 = 0x0;
 v1209 < 0x8;
 v1209++) {
            var v1210 = 0x0 != (v1208 >> v1209 & 0x1);
            var v1211 = 0x4 * (v1204 + 0x50 * v1206);
            if (v1210) {
              v1203.data[v1211] = 0xff;
              v1203.data[v1211 + 0x1] = 0xff;
              v1203.data[v1211 + 0x2] = 0xff;
              v1203.data[v1211 + 0x3] = 0xff;
}
 else {
              v1203.data[v1211 + 0x3] = 0x0;
}
            if (++v1204 >= v1205 && ++v1206 < 0x50) {
              v1204 = v1200[v1206];
              v1205 = 0x50 - v1204;
}
}
}
        v1202.putImageData(v1203, 0x0, 0x0);
        var v1212 = (window.anApp = v542).s.H.wb.tf.Sf;
        v1212.texture = (window.anApp = v542).q.Ug.Hc;
        v1212.texture.update();
}
;
      v1071.prototype.og = function (v1213, v1214) {
        var v1215 = v1213.oc(v1214);
        v1214 += 0x4;
        console.log("Wormy Error: " + v1215);
}
;
      v1071.prototype.pg = function (v1216, v1217) {
        if (zw_joystick !== -0x1) {
          zw_joysticks[zw_joystick].visible = false;
}
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        zwormData.hs = 0x0;
        sendPlayerDeath(0x0, 0x0);
        sendPlayerUpdate(0xf423f, 0xf423f);
        clearTeamUbication();
        console.log('g.o');
}
;
      v1071.prototype.ng = function (v1218, v1219) {
        this.o.tb = v1218.nc(v1219);
        v1219 += 0x2;
        this.o.O = v1218.nc(v1219);
        v1219 += 0x2;
        var v1220 = new v1221();
        v1220.ag = [];
        var v1222 = v1218.mc(v1219++);
        for (var v1223 = 0x0;
 v1223 < v1222;
 v1223++) {
          var v1224 = v1218.nc(v1219);
          v1219 += 0x2;
          var v1225 = v1218.pc(v1219);
          v1219 += 0x4;
          v1220.ag.push(v1221.Vg(v1224, v1225));
}
        v1220.$f = [];
        if (this.o.fb.af === 0x10) {
          var v1226 = v1218.mc(v1219++);
          for (var v1227 = 0x0;
 v1227 < v1226;
 v1227++) {
            var v1228 = v1218.mc(v1219);
            v1219 += 0x1;
            var v1229 = v1218.pc(v1219);
            v1219 += 0x4;
            v1220.$f.push(v1221.Wg(v1228, v1229));
}
}
        (window.anApp = v542).s.H.wb.vf.Te(v1220);
}
;
      v1071.prototype.Gg = function (v1230) {
        return v1230 === this.o.fb.bf ? this.o.N : this.o.hb[v1230];
}
;
      v1071.prototype.Jg = function (v1231, v1232, v1233) {
        return 0x2710 * ((0xffffff & (0xff & v1233 | v1232 << 0x8 & 0xff00 | v1231 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
}
;
      v1071.prototype.Pg = function (v1234) {
        return ((0xffff & v1234) / 0x8000 - 0x1) * this.o.fb.ef();
}
;
      v1071.prototype.Qg = function (v1235) {
        return ((v1235 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
}
;
      v1071.prototype.qg = function (v1236, v1237) {
        var v1238 = v1236.mc(v1237);
        if (0x0 == (0x80 & v1238)) {
          return v1238;
}
        var v1239 = v1236.mc(v1237 + 0x1);
        if (0x0 == (0x80 & v1239)) {
          return v1239 | v1238 << 0x7 & 0x3f80;
}
        var v1240 = v1236.mc(v1237 + 0x2);
        if (0x0 == (0x80 & v1240)) {
          return v1240 | v1239 << 0x7 & 0x3f80 | v1238 << 0xe & 0x1fc000;
}
        var v1241 = v1236.mc(v1237 + 0x3);
        return 0x0 == (0x80 & v1241) ? v1241 | v1240 << 0x7 & 0x3f80 | v1239 << 0xe & 0x1fc000 | v1238 << 0x15 & 0xfe00000 : undefined;
}
;
      v1071.prototype.rg = function (v1242) {
        return v1242 < 0x80 ? 0x1 : v1242 < 0x4000 ? 0x2 : v1242 < 0x200000 ? 0x3 : v1242 < 0x10000000 ? 0x4 : undefined;
}
;
      return v1071;
}
();
    var v1243 = function () {
      function v1244(v1245) {
        this.Xg = v1245;
}
      v1244.Yg = function () {
        return new v1243(null);
}
;
      v1244.Zg = function (v1246) {
        return new v1243(v1246);
}
;
      v1244.prototype.$g = function () {
        return this.Xg;
}
;
      v1244.prototype._g = function () {
        return null != this.Xg;
}
;
      v1244.prototype.ah = function (v1247) {
        if (null != this.Xg) {
          v1247(this.Xg);
}
}
;
      return v1244;
}
();
    var v1186 = function () {
      function v1248(v1249, v1250) {
        this.Mb = v1249;
        this.bh = v1249.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : v1249.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = 0x2 * Math.PI * Math.random();
        this.gh = new v1251();
        this.gh.hh((window.anApp = v542).o.fb.af, this.Mb.cg === v611.TEAM_DEFAULT ? null : (window.anApp = v542).p.Dc().ed(this.Mb.cg), (window.anApp = v542).p.Dc().kd(this.Mb.dg));
        v1250.Lf(v1249.Lb, this.gh);
}
      v1248.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
}
;
      v1248.prototype.Og = function (v1252, v1253, v1254) {
        this.Ob = v1252;
        this.Pb = v1253;
        if (v1254) {
          this.ch = v1252;
          this.dh = v1253;
}
}
;
      v1248.prototype.Fb = function (v1255, v1256) {
        var v1257 = Math.min(0.5, 0x1 * this.Sg);
        var v1258 = Math.min(2.5, 1.5 * this.Sg);
        this.eh = v1257 > this.eh ? Math.min(v1257, this.eh + v1256 * 0.0025) : Math.max(v1257, this.eh - v1256 * 0.0025);
        this.fh = v1258 > this.fh ? Math.min(v1258, this.fh + v1256 * 0.0025) : Math.max(v1258, this.fh - v1256 * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + v1256 * 0.0025) : Math.max(this.Rg, this.Jb - v1256 * 0.0025);
}
;
      v1248.prototype.Gb = function (v1259, v1260, v1261) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + v1260 * 0.0025) : Math.max(this.Ob, this.ch - v1260 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + v1260 * 0.0025) : Math.max(this.Pb, this.dh - v1260 * 0.0025);
        this.gh.Te(this, v1259, v1260, v1261);
}
;
      v1248.Config = function () {
        function v1262() {
          this.Lb = 0x0;
          this.cg = v611.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
}
        return v1262;
}
();
      return v1248;
}
();
    var v1251 = function () {
      function v1263() {
        this.Of = new v1264(new v1265(), new v1265());
        this.Of.Pf.jh.blendMode = v671.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
}
      v1263.prototype.hh = function (v1266, v1267, v1268) {
        var v1269 = v1268.Zc;
        if (null != v1269) {
          this.Of.Nf.kh(v1269);
}
        var v1270 = v1266 == 0x10 && null != v1267 ? v1267.cd.$c : v1268.$c;
        if (null != v1270) {
          this.Of.Pf.kh(v1270);
}
}
;
      v1263.prototype.Te = function (v1271, v1272, v1273, v1274) {
        if (!v1274(v1271.ch, v1271.dh)) {
          return void this.Of.lh();
}
        var v1275 = v1271.fh * (0x1 + 0.3 * Math.cos(v1271.Ae + v1272 / 0xc8));
        if (v1271.bh) {
          this.Of.mh(v1271.ch, v1271.dh, theoKzObjects.PotenciadorSize * v1271.eh, 0x1 * v1271.Jb, theoKzObjects.PotenciadorAura * v1275, 0.8 * v1271.Jb);
}
 else {
          this.Of.mh(v1271.ch, v1271.dh, theoKzObjects.ComidaSize * v1271.eh, 0x1 * v1271.Jb, theoKzObjects.ComidaShadow * v1275, 0.3 * v1271.Jb);
}
}
;
      var v1264 = function () {
        function v1276(v1277, v1278) {
          this.Nf = v1277;
          this.Pf = v1278;
}
        v1276.prototype.mh = function (v1279, v1280, v1281, v1282, v1283, v1284) {
          this.Nf.Mg(true);
          this.Nf.nh(v1279, v1280);
          this.Nf.oh(v1281);
          this.Nf.qh(v1282);
          this.Pf.Mg(true);
          this.Pf.nh(v1279, v1280);
          this.Pf.oh(v1283);
          this.Pf.qh(v1284);
}
;
        v1276.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
}
;
        return v1276;
}
();
      return v1263;
}
();
    var v553 = function () {
      function v1285() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
}
      function v1286(v1287, v1288) {
        if (!(window.anApp = v542).p.W()) {
          return null;
}
        var v1289 = (window.anApp = v542).p.Ac();
        if (v1288 === v576.ia) {
          var v1290 = v1291(v1289.skinArrayDict, v1287);
          return v1290 < 0x0 ? null : (console.log(v1289.skinArrayDict[v1290]), v1289.skinArrayDict[v1290]);
}
        switch (v1288) {
          case v576.ja:
            return v1289.eyesDict[v1287];
          case v576.ka:
            return v1289.mouthDict[v1287];
          case v576.la:
            return v1289.glassesDict[v1287];
          case v576.ma:
            return v1289.hatDict[v1287];
}
        return null;
}
      function v1291(v1292, v1293) {
        for (var v1294 = 0x0;
 v1294 < v1292.length;
 v1294++) {
          if (v1292[v1294].id == v1293) {
            return v1294;
}
}
        return -0x1;
}
      v1285.prototype.a = function () {
}
;
      v1285.prototype.ha = function (v1295) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects));
        switch (v1295) {
          case v576.ia:
            return this.rh;
          case v576.ja:
            return this.sh;
          case v576.ka:
            return this.th;
          case v576.la:
            return this.uh;
          case v576.ma:
            return this.vh;
}
        return 0x0;
}
;
      v1285.prototype.xh = function (v1296) {
        this.wh.push(v1296);
        this.yh();
}
;
      v1285.prototype.Ia = function () {
        if (!(window.anApp = v542).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
}
        var v1297 = (window.anApp = v542).p.Ac();
        var v1298 = [];
        for (var v1299 = 0x0;
 v1299 < v1297.skinArrayDict.length;
 v1299++) {
          var v1300 = v1297.skinArrayDict[v1299];
          if (this.Ja(v1300.id, v576.ia)) {
            v1298.push(v1300);
}
}
        return 0x0 === v1298.length ? 0x0 : v1298[parseInt(v1298.length * Math.random())].id;
}
;
      v1285.prototype.zh = function () {
        if ((window.anApp = v542).p.W) {
          var v1301 = (window.anApp = v542).p.Ac().skinArrayDict;
          var v1302 = v1291(v1301, this.rh);
          if (!(v1302 < 0x0)) {
            for (var v1303 = v1302 + 0x1;
 v1303 < v1301.length;
 v1303++) {
              if (this.Ja(v1301[v1303].id, v576.ia)) {
                this.rh = v1301[v1303].id;
                return void this.yh();
}
}
            for (var v1304 = 0x0;
 v1304 < v1302;
 v1304++) {
              if (this.Ja(v1301[v1304].id, v576.ia)) {
                this.rh = v1301[v1304].id;
                return void this.yh();
}
}
}
}
}
;
      v1285.prototype.Ah = function () {
        if ((window.anApp = v542).p.W) {
          var v1305 = (window.anApp = v542).p.Ac().skinArrayDict;
          var v1306 = v1291(v1305, this.rh);
          if (!(v1306 < 0x0)) {
            for (var v1307 = v1306 - 0x1;
 v1307 >= 0x0;
 v1307--) {
              if (this.Ja(v1305[v1307].id, v576.ia)) {
                this.rh = v1305[v1307].id;
                return void this.yh();
}
}
            for (var v1308 = v1305.length - 0x1;
 v1308 > v1306;
 v1308--) {
              if (this.Ja(v1305[v1308].id, v576.ia)) {
                this.rh = v1305[v1308].id;
                return void this.yh();
}
}
}
}
}
;
      v1285.prototype.Bh = function (v1309, v1310) {
        if (!(window.anApp = v542).p.W() || this.Ja(v1309, v1310)) {
          switch (v1310) {
            case v576.ia:
              return void (this.rh != v1309 && (this.rh = v1309, this.yh()));
            case v576.ja:
              return void (this.sh != v1309 && (this.sh = v1309, this.yh()));
            case v576.ka:
              return void (this.th != v1309 && (this.th = v1309, this.yh()));
            case v576.la:
              return void (this.uh != v1309 && (this.uh = v1309, this.yh()));
            case v576.ma:
              return void (this.vh != v1309 && (this.vh = v1309, this.yh()));
}
}
}
;
      v1285.prototype.Ja = function (v1311, v1312) {
        var v1313 = v1286(v1311, v1312);
        return null != v1313 && ((window.anApp = v542).u.P() ? 0x0 == v1313.price && !v1313.nonbuyable || (window.anApp = v542).u.Ch(v1311, v1312) : v1313.guest);
}
;
      v1285.prototype.yh = function () {
        for (var v1314 = 0x0;
 v1314 < this.wh.length;
 v1314++) {
          this.wh[v1314]();
}
}
;
      return v1285;
}
();
    var v576 = function () {
      function v1315() {
}
      v1315.ia = "SKIN";
      v1315.ja = "EYES";
      v1315.ka = "MOUTH";
      v1315.la = "GLASSES";
      v1315.ma = "HAT";
      return v1315;
}
();
    var v733 = function () {
      function v1316(v1317, v1318, v1319, v1320, v1321, v1322, v1323, v1324, v1325) {
        this.Hc = new v671._b(v1317, new v671.dc(v1318, v1319, v1320, v1321));
        this.Dh = v1318;
        this.Eh = v1319;
        this.Fh = v1320;
        this.Gh = v1321;
        this.Hh = v1322 || (v1324 || v1320) / 0x2;
        this.Ih = v1323 || (v1325 || v1321) / 0x2;
        this.Jh = v1324 || v1320;
        this.Kh = v1325 || v1321;
        this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
        this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
}
      return v1316;
}
();
    var v550 = function () {
      function v1326() {
        this.fn_o = v1327;
        this.Fe = new v671._b(v671.$b.from("/images/bg-obstacle.png"));
        var v1328 = v671.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80)), new v671._b(v1328, new v671.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new v671._b(v1327());
        this.Df = new v671._b(function () {
          var v1329 = v671.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v1329.wrapMode = v671.kc.lc;
          return v1329;
}
());
        this.Af = new v671._b(v671.$b.from("/images/lens.png"));
        var v1330 = v671.$b.from('https://i.imgur.com/VPh6J5u.png');
        this.Ph = new v733(v1330, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new v733(v1330, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        var v1331 = v671.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var v1332 = v671.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new v733(v1332, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Rh = new v733(v1331, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
        this.X_x5 = new v733(v1331, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x2 = new v733(v1331, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.X_x10 = new v733(v1331, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new v733(v1331, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Ug = function () {
          var v1333 = window.document.createElement("canvas");
          v1333.width = 0x50;
          v1333.height = 0x50;
          return {
            'te': v1333,
            'Tg': v1333.getContext('2d'),
            'Hc': new v671._b(v671.$b.from(v1333))
}
;
}
();
        this.Bd = {
}
;
        this.yd = {
}
;
        this.Sh = [];
        this.Th = null;
}
      var v1327 = function (v1334) {
        var v1335 = v671.$b.from(v1334 || "/images/bg-pattern-pow2-ARENA.png");
        v1335.wrapMode = v671.kc.lc;
        return v1335;
}
;
      v1326.prototype.a = function (v1336) {
        function v1337() {
          if (0x0 == --v1338) {
            v1336();
}
}
        var v1338 = 0x4;
        this.Bd = {
}
;
        v1337();
        this.yd = {
}
;
        v1337();
        this.Sh = [];
        v1337();
        this.Th = null;
        v1337();
}
;
      return v1326;
}
();
    var v552 = function () {
      function v1339() {
        this.H = new v1340();
        this.F = new v1341();
        this.Uh = new v1342();
        this.Vh = new v1343();
        this.Wh = new v1344();
        this.Xh = new v1345();
        this.Yh = new v1346();
        this.Zh = new v1347();
        this.xa = new v1348();
        this.zwset = new v1349();
        this.$h = new v1350();
        this._h = new v1351();
        this.ai = new v1352();
        this.aa = new v1353();
        this.ua = new v1354();
        this.pa = new v1355();
        this.bi = [];
        this.ci = null;
}
      function v1356(v1357, v1358) {
        if (0x0 != v1358) {
          var v1359 = v1357[v1358];
          v493(v1357, 0x0, 0x1, v1358);
          v1357[0x0] = v1359;
}
}
      function v1360(v1361, v1362) {
        if (v1362 != v1361.length + 0x1) {
          var v1363 = v1361[v1362];
          v493(v1361, v1362 + 0x1, v1362, v1361.length - v1362 - 0x1);
          v1361[v1361.length - 0x1] = v1363;
}
}
      function v1364(v1365, v1366) {
        for (var v1367 = 0x0;
 v1367 < v1365.length;
 v1367++) {
          if (v1365[v1367] == v1366) {
            return v1367;
}
}
        return -0x1;
}
      v1339.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.zwset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var v1368 = 0x0;
 v1368 < this.bi.length;
 v1368++) {
          this.bi[v1368].a();
}
        this.ci = new v871(v1369.di);
}
;
      v1339.prototype.Qa = function (v1370, v1371) {
        for (var v1372 = this.bi.length - 0x1;
 v1372 >= 0x0;
 v1372--) {
          this.bi[v1372].Pa(v1370, v1371);
}
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
          this.ci.Pa(v1370, v1371);
}
}
;
      v1339.prototype.Ra = function () {
        for (var v1373 = this.bi.length - 0x1;
 v1373 >= 0x0;
 v1373--) {
          this.bi[v1373].Ra();
}
        if (null != this.ci) {
          this.ci.Ra();
}
}
;
      v1339.prototype.I = function (v1374) {
        var v1375 = v1364(this.bi, v1374);
        if (!(v1375 < 0x0)) {
          this.bi[0x0].ei();
          v1356(this.bi, v1375);
          this.fi();
}
}
;
      v1339.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          v1360(this.bi, 0x0);
}
 while (this.bi[0x0].rc != 0x1);
        this.fi();
}
;
      v1339.prototype.fi = function () {
        var v1376 = this.bi[0x0];
        v1376.ii();
        v1376.ji();
        this.ki();
}
;
      v1339.prototype.li = function () {
        return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi();
}
;
      v1339.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
}
}
;
      return v1339;
}
();
    var v1221 = function () {
      function v1377() {
        this.ag = [];
        this.$f = [];
}
      v1377.Vg = function (v1378, v1379) {
        return {
          'bg': v1378,
          'M': v1379
}
;
}
;
      v1377.Wg = function (v1380, v1381) {
        return {
          '_f': v1380,
          'M': v1381
}
;
}
;
      return v1377;
}
();
    var v554 = function () {
      function v1382() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = 'guest';
        this.si = {
}
;
        this.ti = null;
}
      v1382.prototype.a = function () {
        this.vi();
}
;
      v1382.prototype.X = function () {
        return this.qi ? this.si.userId : '';
}
;
      v1382.prototype.wi = function () {
        return this.qi ? this.si.username : '';
}
;
      v1382.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
}
;
      v1382.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
}
;
      v1382.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
}
;
      v1382.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
}
;
      v1382.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
}
;
      v1382.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
}
;
      v1382.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
}
;
      v1382.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
}
;
      v1382.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
}
;
      v1382.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
}
;
      v1382.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
}
;
      v1382.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
}
;
      v1382.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
}
;
      v1382.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
}
;
      v1382.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
}
;
      v1382.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
}
;
      v1382.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
}
;
      v1382.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
}
;
      v1382.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
}
;
      v1382.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {
}
;
}
;
      v1382.prototype.V = function (v1383) {
        this.ni.push(v1383);
        v1383();
}
;
      v1382.prototype.Pi = function (v1384) {
        this.oi.push(v1384);
        v1384();
}
;
      v1382.prototype.Qi = function (v1385) {
        this.pi.push(v1385);
}
;
      v1382.prototype.Ch = function (v1386, v1387) {
        var v1388 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!v1388) {
          return false;
}
        for (var v1389 = 0x0;
 v1389 < v1388.length;
 v1389++) {
          var v1390 = v1388[v1389];
          if (v1390.id == v1386 && v1390.type === v1387) {
            return true;
}
}
        return false;
}
;
      v1382.prototype.P = function () {
        return this.qi;
}
;
      v1382.prototype.ea = function () {
        return this.ri;
}
;
      v1382.prototype.Q = function (v1391) {
        var v1392 = this;
        if (this.qi) {
          this.Ri(function (v1393) {
            if (v1393) {
              var v1394 = v1392.zi();
              var v1395 = v1392.Ai();
              v1392.si = v1393;
              v1396(v1392.si);
              v1392.Si();
              var v1397 = v1392.zi();
              var v1398 = v1392.Ai();
              if (v1398 > 0x1 && v1398 != v1395) {
                (window.anApp = v542).s.aa.Ti(new v1399(v1398));
}
              var v1400 = v1397 - v1394;
              if (v1400 >= 0x14) {
                (window.anApp = v542).s.aa.Ti(new v1401(v1400));
}
}
            if (v1391) {
              v1391();
}
}
);
}
}
;
      v1382.prototype.Ri = function (v1402) {
        $.get(v569 + "/pub/wuid/" + this.ri + "/getUserData", function (v1403) {
          v1402(v1403.user_data);
}
);
}
;
      v1382.prototype.Ui = function (v1404, v1405, v1406) {
        var v1407 = this;
        $.get(v569 + "/pub/wuid/" + this.ri + "/buyProperty?id=" + v1404 + "&type=" + v1405, function (v1408) {
          if (0x4b0 == v1408.code) {
            v1407.Q(v1406);
}
 else {
            v1406();
}
}
).fail(function () {
          v1406();
}
);
}
;
      v1382.prototype.Vi = function () {
        var v1409 = this;
        this.Wi();
        if ("undefined" == typeof FB) {
          return void this.Xi();
}
        FB.getLoginStatus(function (v1410) {
          if ('connected' === v1410.status) {
            return void (v1410.authResponse && v1410.authResponse.accessToken ? v1409.Yi("facebook", 'fb_' + v1410.authResponse.accessToken) : v1409.Xi());
}
          FB.login(function (v1411) {
            if ("connected" === v1411.status && v1411.authResponse && v1411.authResponse.accessToken) {
              v1409.Yi("facebook", "fb_" + v1411.authResponse.accessToken);
}
 else {
              v1409.Xi();
}
}
);
}
);
}
;
      v1382.prototype.Zi = function () {
        var v1412 = this;
        this.Wi();
        if (typeof GoogleAuth === "undefined") {
          this.Xi();
          return;
}
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log('gsi:sil');
            var v1413 = GoogleAuth.currentUser.get();
            v1412.Yi("google", "gg_" + v1413.getAuthResponse().id_token);
            return;
}
          GoogleAuth.signIn().then(function (v1414) {
            if (typeof v1414.error !== 'undefined') {
              console.log("gsi:e: " + v1414.error);
              v1412.Xi();
              return;
}
            if (v1414.isSignedIn()) {
              console.log("gsi:s");
              v1412.Yi("google", "gg_" + v1414.getAuthResponse().id_token);
}
 else {
              console.log("gsi:c");
              v1412.Xi();
}
}
);
}
);
}
;
      v1382.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v1415 = this.ri;
        var v1416 = this.ti;
        this.qi = false;
        this.ri = 'guest';
        this.si = {
}
;
        this.ti = null;
        v464(v538.Oe, '', 0x3c);
        switch (v1416) {
          case "facebook":
            this.$i();
            break;
          case 'google':
            this._i();
}
        if (v1415 !== this.ri) {
          this.aj();
}
 else {
          this.Si();
}
}
;
      v1382.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get(v569 + "/pub/wuid/" + this.ri + "/deleteAccount", function (v1417) {
            if (0x4b0 === v1417.code) {
              console.log("dA: OK");
}
 else {
              console.log("dA: NO");
}
}
).fail(function () {
            console.log("dA: FAIL");
}
);
}
}
;
      v1382.prototype.vi = function () {
        console.log('rs');
        var v1418 = v458(v538.Oe);
        var v1419 = this;
        if ('facebook' == v1418) {
          console.log('rs:fb');
          (function v1420() {
            if ('undefined' != typeof FB) {
              v1419.Vi();
}
 else {
              setTimeout(v1420, 0x64);
}
}
)();
}
 else if ("google" == v1418) {
          console.log('rs:gg');
          (function v1421() {
            if (undefined !== GoogleAuth) {
              v1419.Zi();
}
 else {
              setTimeout(v1421, 0x64);
}
}
)();
}
 else {
          console.log('rs:lo');
          this.Wi();
}
}
;
      v1382.prototype.aj = function () {
        var v1422 = 0x0;
        for (;
 v1422 < this.ni.length;
 v1422++) {
          this.ni[v1422]();
}
        this.Si();
}
;
      v1382.prototype.Si = function () {
        var v1423 = 0x0;
        for (;
 v1423 < this.oi.length;
 v1423++) {
          this.oi[v1423]();
}
        var v1424 = this.pi;
        this.pi = [];
        var v1425 = 0x0;
        for (;
 v1425 < v1424.length;
 v1425++) {
          v1424[v1425]();
}
}
;
      v1382.prototype.Yi = function (v1426, v1427) {
        var v1428 = this;
        $.get(v569 + "/pub/wuid/" + v1427 + '/login', function (v1429) {
          if (v1429 && v1429.user_data) {
            checkSubscriptionExpired(v1429.user_data.userId);
            registerUpdatePlayer(v1429.user_data);
            v1396(v1429.user_data);
            var v1430 = this.ri;
            v1428.qi = true;
            v1428.ri = v1427;
            v1428.si = v1429.user_data;
            v1428.ti = v1426;
            v464(v538.Oe, v1428.ti, 0x3c);
            console.log(v1428);
            showServer2(v542);
            showVersionPays(v1429);
            zw_userId = v1429.user_data.userId;
            $('#userid').text(zw_userId);
            $("#avatarUrl").attr('src', v1429.user_data.avatarUrl);
            $("#zw-settings-id").text("ID: " + zw_userId);
            theoKzObjects.loading = false;
            if (v1430 !== v1427) {
              v1428.aj();
}
 else {
              v1428.Si();
}
}
 else {
            v1428.Xi();
}
}
).fail(function () {
          v1428.Xi();
}
);
}
;
      v1382.prototype.Xi = function () {
        this.Wi();
}
;
      v1382.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {
}
);
}
;
      v1382.prototype._i = function () {
        console.log('lo:gg');
        GoogleAuth.signOut();
}
;
      return v1382;
}
();
    var v964 = function () {
      function v1431() {
        this.cj = {
}
;
        this.cj[v1432] = [0x1, 0.5, 0.25, 0.5];
        this.cj[v1433] = v671._b.WHITE;
        this.cj[v1434] = [0x0, 0x0];
        this.cj[v1435] = [0x0, 0x0];
        var v1436 = v671.cc.from(v1437, v1438, this.cj);
        this.zf = new v671.hc(v1439, v1436);
}
      var v1440 = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1441 = 'a2_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1442 = atob("dHJhbnNsYXRpb25NYXRyaXg=");
      var v1443 = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var v1432 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1433 = 'u4_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1434 = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1435 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1444 = 'v1_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var v1439 = new v671.gc().addAttribute(v1440, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(v1441, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var v1437 = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + v1440 + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + v1441 + atob("O3VuaWZvcm0gbWF0MyA=") + v1442 + atob("O3VuaWZvcm0gbWF0MyA=") + v1443 + atob("O3ZhcnlpbmcgdmVjMiA=") + v1444 + atob('O3ZvaWQgbWFpbigpew==') + v1444 + atob('PQ==') + v1441 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + v1443 + atob("Kg==") + v1442 + atob("KnZlYzMo") + v1440 + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var v1438 = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + v1444 + atob("O3VuaWZvcm0gdmVjNCA=") + v1432 + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + v1433 + atob("O3VuaWZvcm0gdmVjMiA=") + v1434 + atob("O3VuaWZvcm0gdmVjMiA=") + v1435 + atob('O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9') + v1444 + atob("Kg==") + v1434 + atob('Kw==') + v1435 + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + v1432 + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + v1433 + atob('LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=');
      v1431.prototype.Hf = function (v1445, v1446, v1447, v1448) {
        var v1449 = this.cj[v1432];
        v1449[0x0] = v1445;
        v1449[0x1] = v1446;
        v1449[0x2] = v1447;
        v1449[0x3] = v1448;
}
;
      v1431.prototype.Bf = function (v1450) {
        this.cj[v1433] = v1450;
}
;
      v1431.prototype.Te = function (v1451, v1452, v1453, v1454) {
        this.zf.position.x = v1451;
        this.zf.position.y = v1452;
        this.zf.scale.x = v1453;
        this.zf.scale.y = v1454;
        var v1455 = this.cj[v1434];
        v1455[0x0] = 0.2520615384615385 * v1453;
        v1455[0x1] = 0.4357063736263738 * v1454;
        var v1456 = this.cj[v1435];
        v1456[0x0] = 0.2520615384615385 * v1451;
        v1456[0x1] = 0.4357063736263738 * v1452;
}
;
      return v1431;
}
();
    var v1265 = function () {
      function v1457() {
        this.jh = new v671.ec();
        this.dj = 0x0;
        this.ej = 0x0;
        this.cachedTexture = null;
        this.cachedScaleX = 0x0;
        this.cachedScaleY = 0x0;
}
      v1457.prototype.kh = function (v1458) {
        if (this.cachedTexture !== v1458.Hc) {
          this.cachedTexture = v1458.Hc;
          this.jh.texture = v1458.Hc;
          this.jh.anchor.set(v1458.Lh, v1458.Mh);
          const v1459 = v1458.Hc.width;
          const v1460 = v1458.Hc.height;
          const v1461 = v1458.Nh / v1459;
          const v1462 = v1458.Oh / v1460;
          if (this.cachedScaleX !== v1461 || this.cachedScaleY !== v1462) {
            this.dj = v1461;
            this.ej = v1462;
            this.jh.scale.set(v1461, v1462);
            this.cachedScaleX = v1461;
            this.cachedScaleY = v1462;
}
}
}
;
      v1457.prototype.oh = function (v1463) {
        const v1464 = this.dj * v1463;
        const v1465 = this.ej * v1463;
        if (this.jh.scale.x !== v1464 || this.jh.scale.y !== v1465) {
          this.jh.scale.set(v1464, v1465);
}
}
;
      v1457.prototype.fj = function (v1466) {
        this.jh.rotation = v1466;
}
;
      v1457.prototype.nh = function (v1467, v1468) {
        this.jh.position.set(v1467, v1468);
}
;
      v1457.prototype.Mg = function (v1469) {
        this.jh.visible = v1469;
}
;
      v1457.prototype.gj = function () {
        return this.jh.visible;
}
;
      v1457.prototype.qh = function (v1470) {
        this.jh.alpha = v1470;
}
;
      v1457.prototype.Mf = function () {
        return this.jh;
}
;
      v1457.prototype.ih = function () {
        v508(this.jh);
}
;
      return v1457;
}
();
    var v612 = function () {
      function v1471(v1472) {
        this.fb = v1472;
        this.Mb = new v612.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {
}
;
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.b = null;
        this.zw_msg = null;
        this.Tb();
}
      v1471.prototype.Kb = function () {
        if (null != this.pj) {
          v508(this.pj.Rf);
}
        if (null != this.qj) {
          v508(this.qj);
}
        if (this.b != null) {
          v508(this.b);
}
        if (this.zw_msg != null) {
          v508(this.zw_msg);
}
}
;
      v1471.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {
}
;
        this.Mg(false);
}
;
      v1471.prototype.Fg = function (v1473) {
        this.Mb = v1473;
        this.rj(this.Hb);
}
;
      v1471.prototype.Mg = function (v1474) {
        var v1475 = this.Hb;
        this.Hb = v1474;
        this.rj(v1475);
}
;
      v1471.prototype.Ig = function (v1476) {
        this.M = 0x32 * v1476;
        var v1477 = v1476;
        if (v1476 > this.fb.cf) {
          v1477 = Math.atan((v1476 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
}
        var v1478 = Math.sqrt(0x4 * Math.pow(0x5 * v1477, 0.707106781186548) + 0x19);
        var v1479 = Math.min(0xc8, Math.max(0x3, 0x5 * (v1478 - 0x5) + 0x1));
        var v1480 = this.kj;
        this.Db = 0.025 * (0x5 + 0.9 * v1478);
        this.kj = Math.floor(v1479);
        this.ij = v1479 - this.kj;
        if (v1480 > 0x0 && v1480 < this.kj) {
          var v1481 = this.lj[0x2 * v1480 - 0x2];
          var v1482 = this.lj[0x2 * v1480 - 0x1];
          var v1483 = this.mj[0x2 * v1480 - 0x2];
          var v1484 = this.mj[0x2 * v1480 - 0x1];
          var v1485 = this.nj[0x2 * v1480 - 0x2];
          var v1486 = this.nj[0x2 * v1480 - 0x1];
          for (var v1487 = v1480;
 v1487 < this.kj;
 v1487++) {
            this.lj[0x2 * v1487] = v1481;
            this.lj[0x2 * v1487 + 0x1] = v1482;
            this.mj[0x2 * v1487] = v1483;
            this.mj[0x2 * v1487 + 0x1] = v1484;
            this.nj[0x2 * v1487] = v1485;
            this.nj[0x2 * v1487 + 0x1] = v1486;
}
}
}
;
      v1471.prototype.Lg = function (v1488, v1489) {
        this.kj = v1489;
        for (var v1490 = 0x0;
 v1490 < this.kj;
 v1490++) {
          this.lj[0x2 * v1490] = this.mj[0x2 * v1490] = this.nj[0x2 * v1490] = v1488();
          this.lj[0x2 * v1490 + 0x1] = this.mj[0x2 * v1490 + 0x1] = this.nj[0x2 * v1490 + 0x1] = v1488();
}
}
;
      v1471.prototype.Kg = function (v1491, v1492, v1493) {
        this.hj = v1493;
        for (var v1494 = 0x0;
 v1494 < this.kj;
 v1494++) {
          this.lj[0x2 * v1494] = this.mj[0x2 * v1494];
          this.lj[0x2 * v1494 + 0x1] = this.mj[0x2 * v1494 + 0x1];
}
        var v1495 = v1491 - this.mj[0x0];
        var v1496 = v1492 - this.mj[0x1];
        this.sj(v1495, v1496, this.kj, this.mj);
}
;
      v1471.prototype.sj = function (v1497, v1498, v1499, v1500) {
        var v1501 = Math.hypot(v1497, v1498);
        if (!(v1501 <= 0x0)) {
          var v1502 = v1500[0x0];
          var v1503 = undefined;
          v1500[0x0] += v1497;
          var v1504 = v1500[0x1];
          var v1505 = undefined;
          v1500[0x1] += v1498;
          var v1506 = this.Db / (this.Db + v1501);
          var v1507 = 0x1 - 0x2 * v1506;
          var v1508 = 0x1;
          for (var v1509 = v1499 - 0x1;
 v1508 < v1509;
 v1508++) {
            v1503 = v1500[0x2 * v1508];
            v1500[0x2 * v1508] = v1500[0x2 * v1508 - 0x2] * v1507 + (v1503 + v1502) * v1506;
            v1502 = v1503;
            v1505 = v1500[0x2 * v1508 + 0x1];
            v1500[0x2 * v1508 + 0x1] = v1500[0x2 * v1508 - 0x1] * v1507 + (v1505 + v1504) * v1506;
            v1504 = v1505;
}
          v1506 = this.ij * this.Db / (this.ij * this.Db + v1501);
          v1507 = 0x1 - 0x2 * v1506;
          v1500[0x2 * v1499 - 0x2] = v1500[0x2 * v1499 - 0x4] * v1507 + (v1500[0x2 * v1499 - 0x2] + v1502) * v1506;
          v1500[0x2 * v1499 - 0x1] = v1500[0x2 * v1499 - 0x3] * v1507 + (v1500[0x2 * v1499 - 0x1] + v1504) * v1506;
}
}
;
      v1471.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
}
;
}
;
      v1471.prototype.Hg = function (v1510, v1511) {
        var v1512 = 0xf4240;
        var v1513 = v1510;
        var v1514 = v1511;
        for (var v1515 = 0x0;
 v1515 < this.kj;
 v1515++) {
          var v1516 = this.nj[0x2 * v1515];
          var v1517 = this.nj[0x2 * v1515 + 0x1];
          var v1518 = Math.hypot(v1510 - v1516, v1511 - v1517);
          if (v1518 < v1512) {
            v1512 = v1518;
            v1513 = v1516;
            v1514 = v1517;
}
}
        return {
          'x': v1513,
          'y': v1514,
          'distance': v1512
}
;
}
;
      v1471.prototype.vb = function (v1519) {
        this.oj = v1519;
}
;
      v1471.prototype.Fb = function (v1520, v1521) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(v1520 / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(v1520 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + v1521 * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(v1520 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - v1521 * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + v1521 * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - v1521 * 0.0025);
        if (null != this.pj) {
          this.pj.Rf.alpha = this.Jb;
}
        if (null != this.qj) {
          this.qj.alpha = this.Jb;
}
}
;
      v1471.prototype.Gb = function (v1522, v1523, v1524, v1525) {
        if (this.Hb && this.Ib) {
          var v1526 = Math.pow(0.11112, v1523 / 0x5f);
          var v1527 = 0x0;
          for (;
 v1527 < this.kj;
 v1527++) {
            var v1528 = this.lj[0x2 * v1527] * (0x1 - v1524) + this.mj[0x2 * v1527] * v1524;
            var v1529 = this.lj[0x2 * v1527 + 0x1] * (0x1 - v1524) + this.mj[0x2 * v1527 + 0x1] * v1524;
            this.nj[0x2 * v1527] = v1528 * (0x1 - v1526) + this.nj[0x2 * v1527] * v1526;
            this.nj[0x2 * v1527 + 0x1] = v1529 * (0x1 - v1526) + this.nj[0x2 * v1527 + 0x1] * v1526;
}
}
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, v1522, v1523, v1525);
}
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - 0x3 * this.Db;
}
        if (this.b != null) {
          var v1530;
          this.b.x = this.qj.position.x;
          this.b.y = this.qj.position.y + 0x1;
          for (v1530 in this.b.he) {
            if (!(this.Ff[v1530] != null && this.Ff[v1530].sc)) {
              this.b.removeChild(this.b.he[v1530]);
              delete this.b.he[v1530];
}
}
          var v1531;
          var v1532 = 0x0;
          c = 0x0;
          for (v1531 in this.Ff) {
            if (v1531 !== '0' && v1531 !== '1') {
              continue;
}
            if (v1523 = this.Ff[v1531]) {
              if (v1523.sc && false) {
                var v1533 = this.b.he[v1531];
                if (!v1533) {
                  const v1534 = portionTimes[v1531];
                  const v1535 = timeFontColors2[v1531];
                  let v1536 = v1523.tc;
                  if (v1536 === 0.99) {
                    v1536 = 0x1;
}
                  let v1537 = v1534 - parseInt(v1536 * v1534);
                  v1533 = new PIXI.Text(v1537, {
                    'align': "center",
                    'fill': v1535,
                    'fontSize': 0x14,
                    'lineJoin': "round",
                    'whiteSpace': "normal",
                    'wordWrap': true,
                    'dropShadow': true,
                    'dropShadowBlur': 0x6,
                    'fontWeight': "bold"
}
);
                  this.b.he[v1531] = v1533;
                  this.b.addChild(v1533);
}
                const v1538 = portionTimes[v1531];
                let v1539 = v1523.tc;
                if (v1539 === 0.99) {
                  v1539 = 0x1;
}
                let v1540 = v1538 - parseInt(v1539 * v1538);
                v1533.text = v1540;
                v1533.x = v1532;
                v1533.y = 0x0;
                v1532 += v1533.width + 0xa;
}
}
}
          this.b.pivot.x = 0.5 * this.b.width;
          this.b.pivot.y = this.b.height;
}
}
;
      v1471.prototype.rj = function (v1541) {
        if (this.Hb) {
          if (!v1541) {
            this.uj();
}
}
 else {
          if (null != this.pj) {
            v508(this.pj.Rf);
}
          if (null != this.qj) {
            v508(this.qj);
}
          if (this.b != null) {
            v508(this.b);
}
          if (this.zw_msg != null) {
            v508(this.zw_msg);
}
}
}
;
      v1471.prototype.uj = function () {
        var v1542 = window.anApp = v542;
        if (null == this.pj) {
          this.pj = new v1543();
}
 else {
          v508(this.pj.Rf);
}
        this.pj.hh(v1542.o.fb.af, v1542.p.Dc().ed(this.Mb.cg), v1542.p.Dc().dd(this.Mb.dg), v1542.p.Dc().fd(this.Mb.Bg), v1542.p.Dc().gd(this.Mb.Cg), v1542.p.Dc().hd(this.Mb.Dg), v1542.p.Dc().jd(this.Mb.Eg));
        if (null == this.qj) {
          this.qj = new v1544('');
          this.qj.style.fontFamily = fonts[currentFontIndex];
          this.qj.anchor.set(0.5);
}
 else {
          v508(this.qj);
}
        if (this.b == null) {
          this.b = new v671.Zb();
          this.b.he = {
}
;
}
 else {
          v508(this.b);
}
        if (this.zw_msg == null) {
          this.zw_msg = new v671.Zb();
}
 else {
          v508(this.zw_msg);
}
        this.qj.style.fontSize = 0xe;
        this.qj.style.fill = v1542.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj, this.b, this.zw_msg);
}
;
      v1471.Config = function () {
        function v1545() {
          this.Lb = 0x0;
          this.cg = v611.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
}
        return v1545;
}
();
      return v1471;
}
();
    var v1544 = function () {
      return v487(v671.fc, function (v1546, v1547, v1548) {
        v671.fc.call(this, v1546, v1547, v1548);
        this.If = {
          'x': 0x0,
          'y': 0x0
}
;
}
);
}
();
    var v1543 = function () {
      function v1549() {
        this.Rf = new v671.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new v1550();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new v1265(), new v1265());
        for (let v1551 = 0x0;
 v1551 < 0x31d;
 v1551++) {
          this.xj[v1551] = this.yj(v1551, new v1265(), new v1265());
}
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
}
      var v1552 = 0.1 * Math.PI;
      var v1553 = -0.06640625;
      var v1554 = -0.03515625;
      var v1555 = -0.0625;
      var v1556 = 0x3 * v1553 + 0.84375;
      var v1557 = 0.2578125 - 0x3 * v1553;
      var v1558 = v1553 + v1554;
      var v1559 = v1555 + v1555;
      var v1560 = 0x3 * v1554 + 0.2578125;
      var v1561 = 0.84375 - 0x3 * v1554;
      var v1562 = v1554 + v1553;
      v1549.prototype.yj = function (v1563, v1564, v1565) {
        var v1566 = new v1567(v1564, v1565);
        const v1568 = 0.001 * (0x2 * (0x31d - v1563) + 0x1 + 0x3);
        const v1569 = 0.001 * (0x2 * (0x31d - v1563) - 0x2 + 0x3);
        v1564.jh.zIndex = v1568;
        v1565.jh.zIndex = v1569;
        return v1566;
}
;
      v1549.prototype.hh = function (v1570, v1571, v1572, v1573, v1574, v1575, v1576) {
        var v1577 = v1572.Zc;
        var v1578 = v1570 == 0x10 ? v1571.bd.$c : v1572.$c;
        if (v1577.length && v1578.length) {
          this.xj.forEach((v1579, v1580) => {
            v1579.Nf.kh(v1577[v1580 % v1577.length]);
            v1579.Pf.kh(v1578[v1580 % v1578.length]);
}
);
}
        this.vj.hh(v1573, v1574, v1575, v1576);
}
;
      var v1550 = function () {
        var v1581 = v487(v671.Zb, function () {
          v671.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new v671.Zb();
          this.Hj = [];
          for (var v1582 = 0x0;
 v1582 < 0x4;
 v1582++) {
            var v1583 = new v1265();
            v1583.kh((window.anApp = v542).q.Ph);
            this.Gj.addChild(v1583.jh);
            this.Hj.push(v1583);
}
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new v1265();
          this.Jj.kh((window.anApp = v542).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new v1265();
          this.flx.kh((window.anApp = v542).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new v1265();
          this.xxx5.kh((window.anApp = v542).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new v1265();
          this.xxx2.kh((window.anApp = v542).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new v1265();
          this.xxx10.kh((window.anApp = v542).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new v1265();
          this.xxxLupatype.kh((window.anApp = v542).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
          this.xxxEmojiType = new v1265();
          this.xxxEmojiType.kh((window.anApp = v542).q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
}
);
        v1581.prototype.hh = function (v1584, v1585, v1586, v1587) {
          this.Lj(0.002, this.Cj, v1584.Zc);
          this.Lj(0.003, this.Dj, v1585.Zc);
          this.Lj(0.004, this.Fj, v1587.Zc);
          this.Lj(0.005, this.Ej, v1586.Zc);
}
;
        v1581.prototype.Lj = function (v1588, v1589, v1590) {
          const v1591 = v1590.length;
          const v1592 = v1589.length;
          for (let v1593 = v1592;
 v1593 < v1591;
 v1593++) {
            const v1594 = new v1265();
            v1589.push(v1594);
            this.addChild(v1594.Mf());
}
          for (let v1595 = v1592;
 v1595 > v1591;
 v1595--) {
            v1589.pop().ih();
}
          let v1596 = v1588;
          for (let v1597 = 0x0;
 v1597 < v1591;
 v1597++) {
            v1596 += 0.0001;
            const v1598 = v1589[v1597];
            v1598.kh(v1590[v1597]);
            v1598.jh.zIndex = v1596;
}
}
;
        v1581.prototype.mh = function (v1599, v1600, v1601, v1602) {
          this.visible = true;
          this.position.set(v1599, v1600);
          this.rotation = v1602;
          [this.Cj, this.Dj, this.Ej, this.Fj].forEach((v1603, v1604) => {
            v1603.forEach(v1605 => v1605.oh(v1601));
}
);
}
;
        v1581.prototype.lh = function () {
          this.visible = false;
}
;
        v1581.prototype.Mj = function (v1606, v1607, v1608, v1609) {
          this.Gj.visible = true;
          var v1610 = v1608 / 0x3e8;
          var v1611 = 0x1 / this.Hj.length;
          for (var v1612 = 0x0;
 v1612 < this.Hj.length;
 v1612++) {
            var v1613 = 0x1 - (v1610 + v1611 * v1612) % 0x1;
            this.Hj[v1612].jh.alpha = 0x1 - v1613;
            this.Hj[v1612].oh(v1607 * (0.5 + 4.5 * v1613));
}
}
;
        v1581.prototype.Ij = function () {
          this.Gj.visible = false;
}
;
        v1581.prototype.Nj = function (v1614, v1615, v1616, v1617) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (v1614.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(v1614.hj ? 0.9 : 0.2, this.Jj.jh.alpha + v1617 * 0.0025) : Math.max(v1614.hj ? 0.9 : 0.2, this.Jj.jh.alpha - v1617 * 0.0025);
          this.Jj.oh(v1615);
}
;
        v1581.prototype.Nflex = function (v1618, v1619, v1620, v1621) {
          this.flx.jh.visible = true;
          this.flx.oh(v1619);
}
;
        v1581.prototype.flexx = function () {
          this.flx.jh.visible = false;
}
;
        v1581.prototype.ActiveX5 = function (v1622, v1623, v1624, v1625) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (v1622.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(v1622.hj ? 0.9 : 0.2, this.Jj.jh.alpha + v1625 * 0.0025) : Math.max(v1622.hj ? 0.9 : 0.2, this.Jj.jh.alpha - v1625 * 0.0025);
          this.xxx5.oh(v1623);
}
;
        v1581.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
}
;
        v1581.prototype.ActiveEmoji = function (v1626, v1627, v1628, v1629) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(v1627);
}
;
        v1581.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
}
;
        v1581.prototype.ActiveX2 = function (v1630, v1631, v1632, v1633) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (v1630.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(v1630.hj ? 0.9 : 0.2, this.Jj.jh.alpha + v1633 * 0.0025) : Math.max(v1630.hj ? 0.9 : 0.2, this.Jj.jh.alpha - v1633 * 0.0025);
          this.xxx2.oh(v1631);
}
;
        v1581.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
}
;
        v1581.prototype.ActiveX10 = function (v1634, v1635, v1636, v1637) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (v1634.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(v1634.hj ? 0.9 : 0.2, this.Jj.jh.alpha + v1637 * 0.0025) : Math.max(v1634.hj ? 0.9 : 0.2, this.Jj.jh.alpha - v1637 * 0.0025);
          this.xxx10.oh(v1635);
}
;
        v1581.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
}
;
        v1581.prototype.ActiveZlupa = function (v1638, v1639, v1640, v1641) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (v1638.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(v1638.hj ? 0.9 : 0.2, this.Jj.jh.alpha + v1641 * 0.0025) : Math.max(v1638.hj ? 0.9 : 0.2, this.Jj.jh.alpha - v1641 * 0.0025);
          this.xxxLupatype.oh(v1639);
}
;
        v1581.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
}
;
        v1581.prototype.Kj = function () {
          this.Jj.jh.visible = false;
}
;
        return v1581;
}
();
      v1549.prototype.Oj = function (v1642) {
        return this.Aj + this.Bj * Math.sin(v1642 * v1552 - this.zj);
}
;
      v1549.prototype.tj = function (v1643, v1644, v1645, v1646) {
        const v1647 = 0x2 * v1643.Db;
        const v1648 = v1643.nj;
        const v1649 = v1643.kj;
        const v1650 = 0x4 * v1649 - 0x3;
        this.zj = v1644 / 0x190 * Math.PI;
        this.Aj = 1.5 * v1647;
        this.Bj = 0.1 * v1647 * v1643.jj;
        let v1651 = v1648[0x0];
        let v1652 = v1648[0x1];
        let v1653;
        let v1654;
        let v1655;
        let v1656;
        if (v1646(v1651, v1652)) {
          v1653 = v1648[0x2];
          v1654 = v1648[0x3];
          v1655 = v1648[0x4];
          v1656 = v1648[0x5];
          const v1657 = Math.atan2(v1656 + 0x2 * v1652 - 0x3 * v1654, v1655 + 0x2 * v1651 - 0x3 * v1653);
          const v1658 = v1567.angleBetween;
          this.vj.mh(v1651, v1652, v1647, v1657);
          this.xj[0x0].mh(v1651, v1652, v1647, this.Oj(0x0), v1657);
          this.xj[0x1].mh(v1556 * v1651 + v1557 * v1653 + v1558 * v1655, v1556 * v1652 + v1557 * v1654 + v1558 * v1656, v1647, this.Oj(0x1), v1658(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * v1651 + 0.75 * v1653 + v1559 * v1655, 0.375 * v1652 + 0.75 * v1654 + v1559 * v1656, v1647, this.Oj(0x2), v1658(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(v1560 * v1651 + v1561 * v1653 + v1562 * v1655, v1560 * v1652 + v1561 * v1654 + v1562 * v1656, v1647, this.Oj(0x3), v1658(this.xj[0x2], this.xj[0x4]));
}
 else {
          for (let v1659 = 0x0;
 v1659 < 0x4;
 v1659++) {
            this.xj[v1659].lh();
}
          this.vj.lh();
}
        let v1660 = 0x4;
        const v1661 = 0x2 * v1649 - 0x4;
        for (let v1662 = 0x2;
 v1662 < v1661;
 v1662 += 0x2) {
          v1651 = v1648[v1662];
          v1652 = v1648[v1662 + 0x1];
          const v1663 = v1646(v1651, v1652);
          if (v1663) {
            const v1664 = v1648[v1662 - 0x2];
            const v1665 = v1648[v1662 - 0x1];
            v1653 = v1648[v1662 + 0x2];
            v1654 = v1648[v1662 + 0x3];
            v1655 = v1648[v1662 + 0x4];
            v1656 = v1648[v1662 + 0x5];
            this.xj[v1660].mh(v1651, v1652, v1647, this.Oj(v1660), v1567.angleBetween(this.xj[v1660 - 0x1], this.xj[v1660 + 0x1]));
            v1660++;
            this.xj[v1660].mh(v1553 * v1664 + 0.84375 * v1651 + 0.2578125 * v1653 + v1554 * v1655, v1553 * v1665 + 0.84375 * v1652 + 0.2578125 * v1654 + v1554 * v1656, v1647, this.Oj(v1660), v1567.angleBetween(this.xj[v1660 - 0x1], this.xj[v1660 + 0x1]));
            v1660++;
            this.xj[v1660].mh(v1555 * v1664 + 0.5625 * v1651 + 0.5625 * v1653 + v1555 * v1655, v1555 * v1665 + 0.5625 * v1652 + 0.5625 * v1654 + v1555 * v1656, v1647, this.Oj(v1660), v1567.angleBetween(this.xj[v1660 - 0x1], this.xj[v1660 + 0x1]));
            v1660++;
            this.xj[v1660].mh(v1554 * v1664 + 0.2578125 * v1651 + 0.84375 * v1653 + v1553 * v1655, v1554 * v1665 + 0.2578125 * v1652 + 0.84375 * v1654 + v1553 * v1656, v1647, this.Oj(v1660), v1567.angleBetween(this.xj[v1660 - 0x1], this.xj[v1660 + 0x1]));
            v1660++;
}
 else {
            for (let v1666 = 0x0;
 v1666 < 0x4;
 v1666++) {
              this.xj[v1660++].lh();
}
}
}
        const v1667 = 0x2 * v1649 - 0x4;
        v1651 = v1648[v1667];
        v1652 = v1648[v1667 + 0x1];
        if (v1646(v1651, v1652)) {
          const v1668 = v1648[v1667 - 0x2];
          const v1669 = v1648[v1667 - 0x1];
          v1653 = v1648[v1667 + 0x2];
          v1654 = v1648[v1667 + 0x3];
          const v1670 = this.Oj.bind(this);
          const v1671 = v1567.angleBetween;
          this.xj[v1650 - 0x5].mh(v1651, v1652, v1647, v1670(v1650 - 0x5), v1671(this.xj[v1650 - 0x6], this.xj[v1650 - 0x4]));
          this.xj[v1650 - 0x4].mh(v1562 * v1668 + v1561 * v1651 + v1560 * v1653, v1562 * v1669 + v1561 * v1652 + v1560 * v1654, v1647, v1670(v1650 - 0x4), v1671(this.xj[v1650 - 0x5], this.xj[v1650 - 0x3]));
          this.xj[v1650 - 0x3].mh(v1559 * v1668 + 0.75 * v1651 + 0.375 * v1653, v1559 * v1669 + 0.75 * v1652 + 0.375 * v1654, v1647, v1670(v1650 - 0x3), v1671(this.xj[v1650 - 0x4], this.xj[v1650 - 0x2]));
          this.xj[v1650 - 0x2].mh(v1558 * v1668 + v1557 * v1651 + v1556 * v1653, v1558 * v1669 + v1557 * v1652 + v1556 * v1654, v1647, v1670(v1650 - 0x2), v1671(this.xj[v1650 - 0x3], this.xj[v1650 - 0x1]));
          this.xj[v1650 - 0x1].mh(v1653, v1654, v1647, v1670(v1650 - 0x1), v1671(this.xj[v1650 - 0x2], this.xj[v1650 - 0x1]));
}
 else {
          for (let v1672 = v1650 - 0x5;
 v1672 <= v1650 - 0x1;
 v1672++) {
            this.xj[v1672].lh();
}
}
        if (this.wj === 0x0 && v1650 > 0x0) {
          this.Rf.addChild(this.vj);
}
        if (this.wj > 0x0 && v1650 === 0x0) {
          v508(this.vj);
}
        while (this.wj < v1650) {
          const v1673 = this.xj[this.wj];
          this.Rf.addChild(v1673.Nf.Mf());
          this.Rf.addChild(v1673.Pf.Mf());
          this.wj++;
}
        while (this.wj > v1650) {
          this.wj--;
          const v1674 = this.xj[this.wj];
          v1674.Pf.ih();
          v1674.Nf.ih();
}
        const v1675 = theoKzObjects.emoji && v1643?.['Mb']?.['Mb'];
        if (v1675) {
          this.vj.ActiveEmoji(v1643, v1647, v1644, v1645);
}
 else {
          this.vj.x_emoji();
}
        const v1676 = this.xj[0x0].gj();
        if (!v1676) {
          this.vj.Ij();
          this.vj.Kj();
          this.vj.flexx();
          this.vj.xXx2();
          this.vj.xXx5();
          this.vj.xXx10();
          this.vj.xXxLupaZ();
          return;
}
        const v1677 = v1643.Ff;
        const v1678 = v1677[v681.MAGNETIC_TYPE];
        const v1679 = v1677[v681.VELOCITY_TYPE];
        const v1680 = v1677[v681.FLEXIBLE_TYPE];
        if (v1678?.['sc']) {
          this.vj.Mj(v1643, v1647, v1644, v1645);
}
 else {
          this.vj.Ij();
}
        if (v1679?.['sc']) {
          this.vj.Nj(v1643, v1647, v1644, v1645);
}
 else {
          this.vj.Kj();
}
        if (true && v1680?.['sc']) {
          this.vj.Nflex(v1643, v1647, v1644, v1645);
}
 else {
          this.vj.flexx();
}
        this.vj.xXx2();
        this.vj.xXx5();
        this.vj.xXx10();
        this.vj.xXxLupaZ();
}
;
      var v1567 = function () {
        function v1681(v1682, v1683) {
          this.Nf = v1682;
          this.Nf.Mg(false);
          this.Pf = v1683;
          this.Pf.Mg(false);
}
        v1681.prototype.mh = function (v1684, v1685, v1686, v1687, v1688) {
          this.Nf.Mg(true);
          this.Nf.nh(v1684, v1685);
          this.Nf.oh(v1686);
          this.Nf.fj(v1688);
          this.Pf.Mg(true);
          this.Pf.nh(v1684, v1685);
          this.Pf.oh(v1687);
          this.Pf.fj(v1688);
}
;
        v1681.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
}
;
        v1681.prototype.gj = function () {
          return this.Nf.gj();
}
;
        v1681.angleBetween = function (v1689, v1690) {
          return Math.atan2(v1689.Nf.jh.position.y - v1690.Nf.jh.position.y, v1689.Nf.jh.position.x - v1690.Nf.jh.position.x);
}
;
        return v1681;
}
();
      return v1549;
}
();
    var v1691 = function () {
      function v1692(v1693) {
        this.se = v1693;
        this.te = v1693.get()[0x0];
        this.ue = new v671.ac({
          'view': this.te,
          'transparent': true
}
);
        this.sc = false;
        this.Pj = new v1543();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var v1694 = this;
        (window.anApp = v542).p.ca(function () {
          if ((window.anApp = v542).p.W()) {
            v1694.Fb();
}
}
);
}
      v1692.prototype.Fb = function () {
        var v1695 = window.anApp = v542;
        this.Pj.hh(0x0, null, v1695.p.Dc().dd(this.rh), v1695.p.Dc().fd(this.sh), v1695.p.Dc().gd(this.th), v1695.p.Dc().hd(this.uh), v1695.p.Dc().jd(this.vh));
}
;
      v1692.prototype.Le = function (v1696) {
        this.sc = v1696;
}
;
      v1692.prototype.ak = function (v1697, v1698, v1699) {
        this.rh = v1697;
        this.Sj = v1698;
        this.Xj = v1699;
        this.Fb();
}
;
      v1692.prototype.bk = function (v1700, v1701, v1702) {
        this.sh = v1700;
        this.Tj = v1701;
        this.Yj = v1702;
        this.Fb();
}
;
      v1692.prototype.ck = function (v1703, v1704, v1705) {
        this.th = v1703;
        this.Uj = v1704;
        this.Zj = v1705;
        this.Fb();
}
;
      v1692.prototype.dk = function (v1706, v1707, v1708) {
        this.uh = v1706;
        this.Vj = v1707;
        this.$j = v1708;
        this.Fb();
}
;
      v1692.prototype.ek = function (v1709, v1710, v1711) {
        this.vh = v1709;
        this.Wj = v1710;
        this._j = v1711;
        this.Fb();
}
;
      v1692.prototype.Ra = function () {
        var v1712 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v1712;
        this.te.width = v1712 * this.Qj;
        this.te.height = v1712 * this.Rj;
        this.Ng = this.Rj / 0x4;
        var v1713 = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
        if (this.Pj.wj != v1713) {
          for (var v1714 = v1713;
 v1714 < this.Pj.xj.length;
 v1714++) {
            this.Pj.xj[v1714].lh();
}
          for (;
 this.Pj.wj < v1713;
) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
}
          for (;
 this.Pj.wj > v1713;
) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
}
}
}
;
      v1692.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = v542).p.W) {
            var v1715 = Date.now();
            var v1716 = v1715 / 0xc8;
            var v1717 = Math.sin(v1716);
            var v1718 = this.Ng;
            var v1719 = 1.5 * this.Ng;
            var v1720 = this.Qj - 0.5 * (this.Qj - 0.5 * v1718 * (this.Pj.wj - 0x1));
            var v1721 = 0.5 * this.Rj;
            var v1722 = 0x0;
            var v1723 = 0x0;
            for (var v1724 = -0x1;
 v1724 < this.Pj.wj;
 v1724++) {
              var v1725 = v1724;
              var v1726 = Math.cos(0x1 * v1725 / 0xc * Math.PI - v1716) * (0x1 - Math.pow(0x10, -0x1 * v1725 / 0xc));
              if (v1724 >= 0x0) {
                var v1727 = v1720 + -0.5 * v1718 * v1725;
                var v1728 = v1721 + 0.5 * v1718 * v1726;
                var v1729 = 0x2 * v1718;
                var v1730 = 0x2 * v1719;
                var v1731 = Math.atan2(v1723 - v1726, v1725 - v1722);
                if (0x0 == v1724) {
                  this.Pj.vj.mh(v1727, v1728, v1729, v1731);
}
                this.Pj.xj[v1724].mh(v1727, v1728, v1729, v1730, v1731);
                var v1732 = this.Sj ? this.Xj ? 0.4 + 0.2 * v1717 : 0.9 + 0.1 * v1717 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[v1724].Nf.qh(v1732);
                this.Pj.xj[v1724].Pf.qh(v1732);
}
              v1722 = v1725;
              v1723 = v1726;
}
            for (var v1733 = 0x0;
 v1733 < this.Pj.vj.Cj.length;
 v1733++) {
              var v1734 = this.Tj ? this.Yj ? 0.4 + 0.2 * v1717 : 0.9 + 0.1 * v1717 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[v1733].qh(v1734);
}
            for (var v1735 = 0x0;
 v1735 < this.Pj.vj.Dj.length;
 v1735++) {
              var v1736 = this.Uj ? this.Zj ? 0.4 + 0.2 * v1717 : 0.9 + 0.1 * v1717 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[v1735].qh(v1736);
}
            for (var v1737 = 0x0;
 v1737 < this.Pj.vj.Ej.length;
 v1737++) {
              var v1738 = this.Vj ? this.$j ? 0.4 + 0.2 * v1717 : 0.9 + 0.1 * v1717 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[v1737].qh(v1738);
}
            for (var v1739 = 0x0;
 v1739 < this.Pj.vj.Fj.length;
 v1739++) {
              var v1740 = this.Wj ? this._j ? 0.4 + 0.2 * v1717 : 0.9 + 0.1 * v1717 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[v1739].qh(v1740);
}
            this.ue.render(this.Pj.Rf);
}
}
}
;
      return v1692;
}
();
    var v1369 = function () {
      function v1741(v1742) {
        this.rc = v1742;
}
      v1741.fk = $('#game-view');
      v1741.gk = $("#results-view");
      v1741.hk = $("#main-menu-view");
      v1741.ik = $('#popup-view');
      v1741.jk = $('#toaster-view');
      v1741.kk = $('#loading-view');
      v1741.lk = $("#stretch-box");
      v1741.mk = $("#game-canvas");
      v1741.di = $("#background-canvas");
      v1741.nk = $("#social-buttons");
      v1741.ok = $("#markup-wrap");
      v1741.prototype.a = function () {
}
;
      v1741.prototype.ii = function () {
}
;
      v1741.prototype.ji = function () {
}
;
      v1741.prototype.ei = function () {
}
;
      v1741.prototype.Ra = function () {
}
;
      v1741.prototype.Pa = function (v1743, v1744) {
}
;
      return v1741;
}
();
    var v1340 = function () {
      function v1745(v1746, v1747, v1748, v1749, v1750, v1751) {
        var v1752 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v1746 + '</span></div>';
        var v1753 = $(v1752);
        v1753.click(function () {
          if ("undefined" != typeof FB && undefined !== FB.ui) {
            FB.ui({
              'method': 'feed',
              'display': "popup",
              'link': v1747,
              'name': v1748,
              'caption': v1749,
              'description': v1750,
              'picture': v1751
}
, function () {
}
);
}
}
);
        return v1753;
}
      var v1754 = $("#final-caption");
      var v1755 = $("#final-continue");
      var v1756 = $('#congrats-bg');
      var v1757 = $("#unl6wj4czdl84o9b");
      $('#congrats');
      var v1758 = $("#final-share-fb");
      var v1759 = $("#final-message");
      var v1760 = $("#final-score");
      var v1761 = $('#final-place');
      var v1762 = $('#final-board');
      var v1763 = v487(v1369, function () {
        v1369.call(this, 0x0);
        var v1764 = this;
        var v1765 = window.anApp = v542;
        var v1766 = v1369.mk.get()[0x0];
        console.log('sSE=' + v540.qk);
        v1754.text(window.I18N_MESSAGES["index.game.result.title"]);
        v1755.text(window.I18N_MESSAGES['index.game.result.continue']);
        v1755.click(function () {
          v1765.r.Cd();
          v1765.r.G(v551.AudioState.F);
          v1765.s.I(v1765.s.F);
}
);
        $("#game-canvas").attr("tabindex", 0x0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (v1767) {
          console.log(v1767);
          if (v1767.target.type === "text") {
            return;
}
          if (v1767.key.toLowerCase() === 'z') {
            zw_updatezoom(0x1);
}
          if (v1767.key.toLowerCase() === 'r') {
            let v1768 = zw_lastserver;
            $(".overlay-2").css("position", "static");
            if (v1768) {
              anApp.r.Hd();
              anApp.sa(v1768);
}
}
          if (v1767.key.toLowerCase() === 'x') {
            const v1769 = new Uint8Array([NaN, NaN]);
            anApp.o.Wb(v1769);
            setTimeout(() => {
              let v1770 = zw_lastserver;
              $(".overlay-2").css("position", "static");
              if (v1770) {
                anApp.r.Hd();
                anApp.sa(v1770);
}
}
, 0x3e8);
}
          if (v1767.key.toLowerCase() === 'l') {
            $(".option.toggle[data-option='laserHS'] .box").click();
}
          if (v1767.key.toLowerCase() === 'q') {
            $(".option.toggle[data-option='sectores'] .box").click();
            setSectorsGame();
}
          if (v1767.key.toLowerCase() === 'c') {
            $(".option.toggle[data-option='backgroundSolid'] .box").click();
            setSectorsGame();
}
          if (v1767.key.toLowerCase() === 'f') {
            theoKzObjects.noSkin = false;
}
          if (v1767.key.toLowerCase() === 'g') {
            theoKzObjects.noAuras = false;
}
          if (v1767.key.toLowerCase() === 's') {
            if (isRunning) {
              isRunning = false;
              initialInterval = 0x37;
              cycleCounter = 0x1;
              isIncrementing = true;
              clearInterval(intervalID);
              intervalID = null;
              zw_girosubtracttexture.texture = ungirotexture;
              zw_girosubtracttexture.alpha = 0.25;
}
 else {
              zw_girosubtracttexture.alpha = 0.75;
              startInterval();
              isRunning = true;
}
}
}
);
        $("#game-canvas").keydown(function (v1771) {
          if (v1771.key === "Enter") {
            v1772();
}
          if (0x20 == v1771.keyCode) {
            v1764.rk = true;
}
          if (0x31 == v1771.keyCode) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
}
, 0x7d0);
}
          if (0x36 == v1771.keyCode) {
}
}
).keyup(function (v1773) {
          if (0x20 == v1773.keyCode) {
            v1764.rk = false;
}
}
);
        var v1772 = function () {
          $("#chatInput").css("display", "block").focus();
}
;
        v1766.addEventListener("touchstart", function (v1774) {
          if (v1774 = v1774 || window.event) {
            v1764.rk = v1774.touches.length >= 0x2;
}
          v1774.preventDefault();
}
, true);
        v1766.addEventListener("touchend", function (v1775) {
          if (v1775 = v1775 || window.event) {
            v1764.rk = v1775.touches.length >= 0x2;
}
}
, true);
        v1766.addEventListener("mousemove", function (v1776) {
          v1776 = v1776 || window.event && typeof v1776.clientX !== 'undefined';
          if (v1776 && !isRunning) {
            var v1777 = v1776.clientX;
            var v1778 = v1776.clientY;
            window.mouseX = v1777;
            window.mouseY = v1778;
            v1764.sk = Math.atan2(v1778 - 0.5 * v1766.offsetHeight, v1777 - 0.5 * v1766.offsetWidth);
}
}
, true);
        v1766.addEventListener("mousedown", function (v1779) {
          v1764.rk = true;
}
, true);
        v1766.addEventListener('mouseup', function (v1780) {
          v1764.rk = false;
}
, true);
        if (zw_mobilecheck()) {
          var v1781;
          var v1782 = -0x1;
          v1766.addEventListener("touchmove", function (v1783) {
            if (v1783 = v1783 || window.event) {
              v1783 = v1783.touches[0x0];
              var v1784 = 0.5 * v1766.offsetWidth;
              var v1785 = 0.5 * v1766.offsetHeight;
              if (zw_mobilearrowtexture.visible) {
                v1784 = zw_mobilearrowtexture.x + 0x6e;
                v1785 = zw_mobilearrowtexture.y + 0x6e;
}
              if (zw_joystick === -0x1) {
                v1764.sk = Math.atan2(v1783.pageY - v1785, v1783.pageX - v1784);
}
              if (zw_mobileprediction != -0x1) {
                var v1786 = Math.sqrt((v1784 - v1783.pageX) * (v1784 - v1783.pageX) + (v1785 - v1783.pageY) * (v1785 - v1783.pageY));
                zw_mobilepredictiontextures[zw_mobileprediction].x = 0.5 * v1766.offsetWidth + (v1786 < 0x6e ? v1786 : 0x6e) * Math.cos(v1764.sk) - 0x44;
                zw_mobilepredictiontextures[zw_mobileprediction].y = 0.5 * v1766.offsetHeight + (v1786 < 0x6e ? v1786 : 0x6e) * Math.sin(v1764.sk) - 0x44;
                zw_mobilepredictiontextures[zw_mobileprediction].alpha = 0x1;
}
}
}
, true);
          v1766.addEventListener("touchend", function (v1787) {
            if (zw_mobileprediction != -0x1) {
              zw_mobilepredictiontextures[zw_mobileprediction].alpha = 0.25;
}
            if (v1787 && v1782 === -0x1) {
              v1764.rk = v1787.touches.length >= 0x2;
}
}
, true);
          v1766.addEventListener('pointerdown', function (v1788) {
            let v1789 = zw_zoomplustexture.getGlobalPosition();
            let v1790 = zw_zoomsubtracttexture.getGlobalPosition();
            let v1791;
            let v1792;
            if (zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined) {
              v1791 = zw_girosubtracttexture.getGlobalPosition();
              v1792 = zw_explotWubtracttexture.getGlobalPosition();
}
            let v1793 = zw_mobilecontroltextures[zw_mobilecontrol].getGlobalPosition();
            let v1794 = zw_mobilepeedtexture.getGlobalPosition();
            if (v1792 !== undefined && v1791 !== undefined) {
              if (v1788.clientX > v1792.x && v1788.clientX <= v1792.x + zw_explotWubtracttexture.width && v1788.clientY > v1792.y && v1788.clientY <= v1792.y + zw_explotWubtracttexture.height) {
                zw_explotWubtracttexture.emit('mouseup');
                return;
}
              if (v1788.clientX > v1791.x && v1788.clientX <= v1791.x + zw_girosubtracttexture.width && v1788.clientY > v1791.y && v1788.clientY <= v1791.y + zw_girosubtracttexture.height) {
                zw_girosubtracttexture.emit("mouseup");
                return;
}
}
            if (v1788.clientX > v1789.x && v1788.clientX <= v1789.x + zw_zoomplustexture.width && v1788.clientY > v1789.y && v1788.clientY <= v1789.y + zw_zoomplustexture.height) {
              zw_zoomplustexture.emit("mouseup");
              return;
}
            if (v1788.clientX > v1790.x && v1788.clientX <= v1790.x + zw_zoomsubtracttexture.width && v1788.clientY > v1790.y && v1788.clientY <= v1790.y + zw_zoomsubtracttexture.height) {
              zw_zoomsubtracttexture.emit("mouseup");
              return;
}
            if (v1788.clientX > v1793.x && v1788.clientX <= v1793.x + zw_mobilecontroltextures[zw_mobilecontrol].width && v1788.clientY > v1793.y && v1788.clientY <= v1793.y + zw_mobilecontroltextures[zw_mobilecontrol].height) {
              zw_mobilecontroltextures[zw_mobilecontrol].emit("tap");
              return;
}
            if (zw_mobilepeedtexture.visible && v1788.clientX > v1794.x && v1788.clientX <= v1794.x + zw_mobilepeedtexture.width && v1788.clientY > v1794.y && v1788.clientY <= v1794.y + zw_mobilepeedtexture.height) {
              v1782 = v1788.pointerId;
              v1764.rk = true;
              zw_mobilepeedtexture.alpha = 0x1;
              return;
}
            if (zw_joystick !== -0x1) {
              if (!zw_joysticks[zw_joystick].visible) {
                v1781 = v1788.pointerId;
                zw_joysticks[zw_joystick].x = v1788.clientX;
                zw_joysticks[zw_joystick].y = v1788.clientY;
                zw_joysticks[zw_joystick].visible = true;
                zw_joysticks[zw_joystick].onDragStart(v1788);
}
}
}
, true);
          v1766.addEventListener('pointerup', function (v1795) {
            if (v1795.pointerId == v1782) {
              v1764.rk = false;
              v1782 = -0x1;
              zw_mobilepeedtexture.alpha = 0.5;
}
            if (v1795.pointerId == v1781) {
              if (zw_joystick !== -0x1) {
                zw_joysticks[zw_joystick].visible = false;
                zw_joysticks[zw_joystick].onDragEnd(v1795);
}
}
}
, true);
          v1766.addEventListener("pointermove", function (v1796) {
            if (v1796.pointerId == v1781) {
              if (zw_joystick !== -0x1) {
                zw_joysticks[zw_joystick].onDragMove(v1796);
}
}
}
, true);
}
        this.wb = new v961(v1369.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = v1764;
}
);
      v1763.prototype.a = function () {
}
;
      v1763.prototype.ii = function () {
        if (this.cb == 0x0) {
          v1369.fk.stop();
          v1369.fk.fadeIn(0x1f4);
          v1369.gk.stop();
          v1369.gk.fadeOut(0x1);
          v1369.hk.stop();
          v1369.hk.fadeOut(0x32);
          v1369.ik.stop();
          v1369.ik.fadeOut(0x32);
          v1369.jk.stop();
          v1369.jk.fadeOut(0x32);
          v1369.kk.stop();
          v1369.kk.fadeOut(0x32);
          v1369.lk.stop();
          v1369.lk.fadeOut(0x1);
          v1369.di.stop();
          v1369.di.fadeOut(0x32);
          v871.Le(false);
          v1369.nk.stop();
          v1369.nk.fadeOut(0x32);
          v1369.ok.stop();
          v1369.ok.fadeOut(0x32);
}
 else {
          v1369.fk.stop();
          v1369.fk.fadeIn(0x1f4);
          v1369.gk.stop();
          v1369.gk.fadeIn(0x1f4);
          v1369.hk.stop();
          v1369.hk.fadeOut(0x32);
          v1369.ik.stop();
          v1369.ik.fadeOut(0x32);
          v1369.jk.stop();
          v1369.jk.fadeOut(0x32);
          v1369.kk.stop();
          v1369.kk.fadeOut(0x32);
          v1369.lk.stop();
          v1369.lk.fadeOut(0x1);
          v1369.di.stop();
          v1369.di.fadeOut(0x32);
          v871.Le(false);
          v1369.nk.stop();
          v1369.nk.fadeOut(0x32);
          v1369.ok.stop();
          v1369.ok.fadeOut(0x32);
}
}
;
      v1763.prototype.J = function () {
        this.cb = 0x0;
        return this;
}
;
      v1763.prototype.Fa = function () {
        console.log('re');
        v1756.hide();
        setTimeout(function () {
          console.log('fi_bg');
          v1756.fadeIn(0x64);
}
, 0x64);
        v1757.hide();
        setTimeout(function () {
          console.log('fi_aw');
          v1757.fadeIn(0x64);
}
, 0x64);
        this.cb = 0x1;
        return this;
}
;
      v1763.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = v542).r.Gd();
}
}
;
      v1763.prototype.Ra = function () {
        this.wb.Ra();
}
;
      v1763.prototype.Pa = function (v1797, v1798) {
        this.wb.Pa(v1797, v1798);
}
;
      v1763.prototype.Da = function (v1799, v1800, v1801) {
        var v1802 = undefined;
        var v1803 = undefined;
        var v1804 = undefined;
        if (v1800 >= 0x1 && v1800 <= 0xa) {
          v1802 = window.I18N_MESSAGES["index.game.result.place.i" + v1800];
          v1803 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          v1804 = window.I18N_MESSAGES['index.game.social.shareResult.messGood'].replace("{
0
}
", v1801).replace('{
1
}
', v1799).replace("{
2
}
", v1802);
}
 else {
          v1802 = '';
          v1803 = window.I18N_MESSAGES["index.game.result.tryHit"];
          v1804 = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{
0
}
", v1801).replace("{
1
}
", v1799);
}
        v1759.html(window.I18N_MESSAGES["index.game.result.your"]);
        v1760.html(v1799);
        v1761.html(v1802);
        v1762.html(v1803);
        if (v540.qk) {
          var v1805 = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          v1758.empty().append(v1745(v1805, "https://wormate.io", 'wormate.io', v1804, v1804, "https://wormate.io/images/og-share-img-new.jpg"));
}
}
;
      v1763.prototype.T = function () {
        return this.sk;
}
;
      v1763.prototype.U = function () {
        return this.rk;
}
;
      return v1763;
}
();
    var v1354 = function () {
      var v1806 = $("#loading-worm-a");
      var v1807 = $('#loading-worm-b');
      var v1808 = $("#loading-worm-c");
      var v1809 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var v1810 = v487(v1369, function () {
        v1369.call(this, 0x0);
}
);
      v1810.prototype.a = function () {
}
;
      v1810.prototype.ii = function () {
        v1369.fk.stop();
        v1369.fk.fadeOut(0x32);
        v1369.gk.stop();
        v1369.gk.fadeOut(0x32);
        v1369.hk.stop();
        v1369.hk.fadeOut(0x32);
        v1369.ik.stop();
        v1369.ik.fadeOut(0x32);
        v1369.jk.stop();
        v1369.jk.fadeOut(0x32);
        v1369.kk.stop();
        v1369.kk.fadeIn(0x1f4);
        v1369.lk.stop();
        v1369.lk.fadeIn(0x1);
        v1369.di.stop();
        v1369.di.fadeIn(0x1f4);
        v871.Le(true);
        v1369.nk.stop();
        v1369.nk.fadeOut(0x32);
        v1369.ok.stop();
        v1369.ok.fadeOut(0x32);
}
;
      v1810.prototype.ji = function () {
        this.tk();
}
;
      v1810.prototype.tk = function () {
        v1806.css('background-position', "100% 200%");
        for (var v1811 = 0x0;
 v1811 < v1809.length;
 v1811++) {
          var v1812 = Math.floor(Math.random() * v1809.length);
          var v1813 = v1809[v1811];
          v1809[v1811] = v1809[v1812];
          v1809[v1812] = v1813;
}
        v1806.css("background-position", v1809[0x0]);
        v1807.css('background-position', v1809[0x1]);
        v1808.css("background-position", v1809[0x2]);
}
;
      return v1810;
}
();
    var v1341 = function () {
      $('#mm-event-text');
      var v1814 = $("#mm-skin-canv");
      var v1815 = $("#mm-skin-prev");
      var v1816 = $("#mm-skin-next");
      var v1817 = $("#mm-skin-over");
      var v1818 = $('#mm-skin-over-button-list');
      var v1819 = $('#mm-params-nickname');
      var v1820 = $('#mm-params-game-mode');
      var v1821 = $('#mm-action-buttons');
      var v1822 = $('#mm-action-play');
      var v1823 = $('#mm-action-guest');
      var v1824 = $("#mm-action-login");
      var v1825 = $("#mm-player-info");
      var v1826 = $("#mm-store");
      var v1827 = $("#mm-leaders");
      var v1828 = $('#mm-settings');
      var v1829 = $("#mm-coins-box");
      var v1830 = $("#mm-player-avatar");
      var v1831 = $('#mm-player-username');
      var v1832 = $("#mm-coins-val");
      var v1833 = $("#mm-player-exp-bar");
      var v1834 = $("#mm-player-exp-val");
      var v1835 = $("#mm-player-level");
      var v1836 = v487(v1369, function () {
        v1369.call(this, 0x1);
        var v1837 = window.anApp = v542;
        this.uk = new v1691(v1814);
        v1820.click(function () {
          v1837.r.Cd();
}
);
        v1814.click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s.$h);
}
}
);
        v1815.click(function () {
          v1837.r.Cd();
          v1837.t.Ah();
}
);
        v1816.click(function () {
          v1837.r.Cd();
          v1837.t.zh();
}
);
        v1819.keypress(function (v1838) {
          if (0xd == v1838.keyCode) {
            v1837.na();
}
}
);
        v1822.click(function () {
          v1837.r.Cd();
          v1837.na();
}
);
        v1823.click(function () {
          v1837.r.Cd();
          v1837.na();
}
);
        v1824.click(function () {
          v1837.r.Cd();
          v1837.s.I(v1837.s.Zh);
}
);
        v1828.click(function () {
          v1837.r.Cd();
          v1837.s.I(v1837.s.xa);
}
);
        v1825.click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s.Yh);
}
}
);
        v1827.click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s.Xh);
}
}
);
        v1826.click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s._h);
}
}
);
        v1829.click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s.Wh);
}
}
);
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let v1839 = zw_lastserver;
          if (v1839) {
            anApp.r.Hd();
            anApp.sa(v1839);
}
}
);
        v1826.after("<div id=\"mm-zw-settings\" style=\"\">Settings</div>");
        let v1840 = $("#mm-advice-cont");
        v1840.html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline;
 margin: 15px auto;
width:50%;
height: 53px;
\">FULL SCREEN</button><button value=\"Replay\" id=\"zwplayagain\" style=\"display: inline;
 margin: 15px auto;
width:50%;
height: 53px;
\">REPLAY</button></div>");
        $("#zwplayagain").click(function () {
          let v1841 = zw_lastserver;
          if (v1841) {
            anApp.r.Hd();
            anApp.sa(v1841);
}
}
);
        $("#fullscreen").click(function () {
          if (zw_mobilefullscreenstatus) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
}
 else {
              if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
}
 else {
                if (document.msExitFullscreen) {
                  document.msExitFullscreen();
}
 else if (document.body.webkitExitFullscreen) {
                  document.body.webkitExitFullscreen();
}
}
}
            zw_mobilefullscreenstatus = false;
}
 else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
}
 else {
              if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
}
 else {
                if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen();
}
 else if (document.body.webkitRequestFullscreen) {
                  document.body.webkitRequestFullscreen();
}
}
}
            zw_mobilefullscreenstatus = true;
}
}
);
        $("#mm-zw-settings").click(function () {
          if (v1837.u.P()) {
            v1837.r.Cd();
            v1837.s.I(v1837.s.zwset);
}
}
);
        var v1842 = v458(v538.va);
        if ("ARENA" != v1842 && "TEAM2" != v1842) {
          v1842 = "ARENA";
}
        v1820.val(v1842);
        console.log("Load GM: " + v1842);
}
);
      v1836.prototype.a = function () {
        var v1843 = window.anApp = v542;
        var v1844 = this;
        v1843.u.V(function () {
          v1843.s.F.xk();
}
);
        v1843.u.Pi(function () {
          if (v1843.u.P()) {
            v1843.t.Bh(v1843.u.Di(), v576.ia);
            v1843.t.Bh(v1843.u.Ei(), v576.ja);
            v1843.t.Bh(v1843.u.Fi(), v576.ka);
            v1843.t.Bh(v1843.u.Gi(), v576.la);
            v1843.t.Bh(v1843.u.Hi(), v576.ma);
}
 else {
            v1843.t.Bh(v1843.Ga(), v576.ia);
            v1843.t.Bh(0x0, v576.ja);
            v1843.t.Bh(0x0, v576.ka);
            v1843.t.Bh(0x0, v576.la);
            v1843.t.Bh(0x0, v576.ma);
}
}
);
        v1843.u.Pi(function () {
          v1822.toggle(v1843.u.P());
          v1824.toggle(!v1843.u.P());
          v1823.toggle(!v1843.u.P());
          v1827.toggle(v1843.u.P());
          v1826.toggle(v1843.u.P());
          v1829.toggle(v1843.u.P());
          if (v1843.u.P()) {
            v1817.hide();
            v1831.html(v1843.u.wi());
            v1830.attr("src", v1843.u.xi());
            v1832.html(v1843.u.zi());
            v1833.width(0x64 * v1843.u.Bi() / v1843.u.Ci() + '%');
            v1834.html(v1843.u.Bi() + " / " + v1843.u.Ci());
            v1835.html(v1843.u.Ai());
            v1819.val(v1843.u.ga());
}
 else {
            v1817.toggle(v540.qk && !v1843.Ha());
            v1831.html(v1831.data("guest"));
            v1830.attr('src', "/images/guest-avatar-xmas2022.png");
            v1832.html('10');
            v1833.width('0');
            v1834.html('');
            v1835.html(0x1);
            v1819.val(v458(v538.Aa));
}
}
);
        v1843.t.xh(function () {
          v1844.uk.ak(v1843.t.ha(v576.ia), false, false);
          v1844.uk.bk(v1843.t.ha(v576.ja), false, false);
          v1844.uk.ck(v1843.t.ha(v576.ka), false, false);
          v1844.uk.dk(v1843.t.ha(v576.la), false, false);
          v1844.uk.ek(v1843.t.ha(v576.ma), false, false);
}
);
}
;
      v1836.prototype.ii = function () {
        v1369.fk.stop();
        v1369.fk.fadeOut(0x32);
        v1369.gk.stop();
        v1369.gk.fadeOut(0x32);
        v1369.hk.stop();
        v1369.hk.fadeIn(0x1f4);
        v1369.ik.stop();
        v1369.ik.fadeOut(0x32);
        v1369.jk.stop();
        v1369.jk.fadeOut(0x32);
        v1369.kk.stop();
        v1369.kk.fadeOut(0x32);
        v1369.lk.stop();
        v1369.lk.fadeIn(0x1);
        v1369.di.stop();
        v1369.di.fadeIn(0x1f4);
        v871.Le(true);
        v1369.nk.stop();
        v1369.nk.fadeIn(0x1f4);
        v1369.ok.stop();
        v1369.ok.fadeIn(0x1f4);
}
;
      v1836.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
        this.uk.Le(true);
}
;
      v1836.prototype.ei = function () {
        this.uk.Le(false);
}
;
      v1836.prototype.Ra = function () {
        this.uk.Ra();
}
;
      v1836.prototype.Pa = function (v1845, v1846) {
        this.uk.Pa();
}
;
      v1836.prototype.ga = function () {
        return v1819.val();
}
;
      v1836.prototype.D = function () {
        return v1820.val();
}
;
      v1836.prototype.xk = function () {
        v1821.show();
}
;
      v1836.prototype.vk = function () {
        var v1847 = $("#mm-advice-cont").children();
        var v1848 = 0x0;
        setInterval(function () {
          v1847.eq(v1848).fadeOut(0x1f4, function () {
            if (++v1848 >= v1847.length) {
              v1848 = 0x0;
}
            v1847.eq(v1848).fadeIn(0x1f4).css("display", "inline-block");
}
);
}
, 0xbb8);
}
;
      v1836.prototype.wk = function () {
        function v1849() {
          v1850.Ka(true);
          setTimeout(function () {
            v1817.hide();
}
, 0xbb8);
}
        var v1850 = window.anApp = v542;
        if (v540.qk && !v1850.Ha()) {
          v1817.show();
          var v1851 = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
          var v1852 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
          var v1853 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          v1818.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + v1852 + "\"><img src=\"data:image/svg+xml;
base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v1851 + '</span></a>').click(v1849));
          v1818.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + v1853 + "\"><img src=\"data:image/svg+xml;
base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v1851 + "</span></a>").click(v1849));
}
}
;
      return v1836;
}
();
    var v1355 = function () {
      var v1854 = v487(v1369, function () {
        v1369.call(this, 0x0);
}
);
      v1854.prototype.a = function () {
}
;
      v1854.prototype.ii = function () {
        v1369.fk.stop();
        v1369.fk.fadeOut(0x32);
        v1369.gk.stop();
        v1369.gk.fadeOut(0x32);
        v1369.hk.stop();
        v1369.hk.fadeOut(0x32);
        v1369.ik.stop();
        v1369.ik.fadeOut(0x32);
        v1369.jk.stop();
        v1369.jk.fadeOut(0x32);
        v1369.kk.stop();
        v1369.kk.fadeOut(0x32);
        v1369.lk.stop();
        v1369.lk.fadeOut(0x1);
        v1369.di.stop();
        v1369.di.fadeOut(0x32);
        v871.Le(false);
        v1369.nk.stop();
        v1369.nk.fadeOut(0x32);
        v1369.ok.stop();
        v1369.ok.fadeOut(0x32);
}
;
      return v1854;
}
();
    var v1353 = function () {
      var v1855 = $("#toaster-stack");
      var v1856 = v487(v1369, function () {
        v1369.call(this, 0x0);
        this.yk = [];
        this.zk = null;
}
);
      v1856.prototype.a = function () {
}
;
      v1856.prototype.ii = function () {
        v1369.fk.stop();
        v1369.fk.fadeOut(0x32);
        v1369.gk.stop();
        v1369.gk.fadeOut(0x32);
        v1369.hk.stop();
        v1369.hk.fadeOut(0x32);
        v1369.ik.stop();
        v1369.ik.fadeOut(0x32);
        v1369.jk.stop();
        v1369.jk.fadeIn(0x1f4);
        v1369.kk.stop();
        v1369.kk.fadeOut(0x32);
        v1369.lk.stop();
        v1369.lk.fadeIn(0x1);
        v1369.di.stop();
        v1369.di.fadeIn(0x1f4);
        v871.Le(true);
        v1369.nk.stop();
        v1369.nk.fadeOut(0x32);
        v1369.ok.stop();
        v1369.ok.fadeIn(0x1f4);
}
;
      v1856.prototype.ji = function () {
        this.Ak();
}
;
      v1856.prototype.mi = function () {
        return null != this.zk || this.yk.length > 0x0;
}
;
      v1856.prototype._ = function (v1857) {
        this.yk.unshift(v1857);
        setTimeout(function () {
          (window.anApp = v542).s.ki();
}
, 0x0);
}
;
      v1856.prototype.Ti = function (v1858) {
        this.yk.push(v1858);
        setTimeout(function () {
          (window.anApp = v542).s.ki();
}
, 0x0);
}
;
      v1856.prototype.Ak = function () {
        var v1859 = this;
        if (null == this.zk) {
          if (0x0 == this.yk.length) {
            return void (window.anApp = v542).s.gi();
}
          var v1860 = this.yk.shift();
          this.zk = v1860;
          var v1861 = v1860.Bk();
          v1861.hide();
          v1861.fadeIn(0x12c);
          v1855.append(v1861);
          v1860.Ck = function () {
            v1861.fadeOut(0x12c);
            setTimeout(function () {
              v1861.remove();
}
, 0x12c);
            if (v1859.zk == v1860) {
              v1859.zk = null;
}
            v1859.Ak();
}
;
          v1860.ji();
}
}
;
      return v1856;
}
();
    var v1862 = function () {
      var v1863 = $("#popup-menu-label");
      var v1864 = $("#popup-menu-coins-box");
      var v1865 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var v1866 = window.anApp = v542;
        v1866.r.Cd();
        v1866.s.gi();
}
);
      v1864.click(function () {
        var v1867 = window.anApp = v542;
        if (v1867.u.P()) {
          v1867.r.Cd();
          v1867.s.I(v1867.s.Wh);
}
}
);
      var v1868 = v487(v1369, function (v1869, v1870) {
        v1369.call(this, 0x1);
        this.ad = v1869;
        this.Dk = v1870;
}
);
      var v1871 = "\n                        <div id=\"settings-menu\" style=\"display: flex;
 opacity: 0;
 z-index: 2;
\">\n                            <div class=\"navigation\">\n                                <div class=\"tab material-button active\" category=\"profile\"  style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">person</i>\n                                    <span>Profile</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"game\"  style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">games</i>\n                                    <span>Game</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"theme\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">palette</i>\n                                    <span>Theme</span>\n                                </div>\n                                <div class=\"tab material-button\" id=\"button-inputs\" data-toggle=\"modal\" data-target=\"#hotkeysModal\" category=\"controls\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">keyboard</i>\n                                    <span>Controls</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"cursor\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">mouse</i>\n                                    <span>Cursor</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"sound\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">volume_up</i>\n                                    <span>Sound</span>\n                                </div>\n                                 <!-- 🏆 Nueva pestaña: Equipos -->\n                                <div class=\"tab material-button\" category=\"teams\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">group</i>\n                                    <span>Teams</span>\n                                </div>\n                                <!-- 🎨 Nueva pestaña: Skins -->\n                                <div class=\"tab material-button\" category=\"skins\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">brush</i>\n                                    <span>Skins</span>\n                                </div>\n                                 <!-- 🎨 Nueva pestaña: Stremers  -->\n                                <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative;
 overflow: hidden;
\">\n                                    <i class=\"material-icons\">live_tv</i>\n                                    <span>Live</span>\n                                </div>\n                            </div>\n\n                            <div class=\"options-list ps\">\n                                <div category=\"game\" class=\"\">\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT BACKGROUND</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">❮</button>\n                                                <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                                                <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">❯</button>\n                                            </div>\n                                    </div>\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT FONT IN GAME</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">❮</button>\n                                                <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                                                <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">❯</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"theme\" class=\"\">\n\n                                </div>\n                                <div category=\"controls\" class=\"\">\n                                    <div class=\"hotkey-container\"></div>\n                                </div>\n                                <div category=\"profile\" class=\"active\">\n                                    <div class=\"profile-card\">\n                                        <!-- Imagen de perfil -->\n                                        <div class=\"profile-picture\">\n                                            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n                                        </div>\n                                        \n                                        <!-- Datos del usuario -->\n                                        <div class=\"profile-info\">\n                                            <h2>User Profile</h2>\n                                            <!--p><strong>Nombre:</strong> <span id=\"username\">Usuario</span></p>\n                                            <p><strong>Email:</strong> <span id=\"useremail\">usuario@email.com</span></p-->\n                                            \n                                            <!-- Contenedor del ID con botón para copiar -->\n                                            <div class=\"profile-id-container\">\n                                                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                                                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n                                            </div>\n                                            <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"cursor\" class=\"\"></div>\n                                <div category=\"sound\" class=\"\">\n                                 <!-- Contenedor de enlaces con botones -->\n                                <div class=\"sound-inputs\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto1 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto2 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto3 + ":</div>\n                                        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto4 + ":</div>\n                                        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                                    </div>\n                                     <!-- Botón para activar/desactivar el sonido de headshots -->\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">Headshot Sound:</div>\n                                        <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                                    </div>\n\n\n                                </div>\n                                </div>\n                                  <!-- 🏆 Nueva sección: Equipos -->\n                                <div category=\"teams\" class=\"\">\n                                    \n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">TEAM CODE:</div>\n                                        <input type=\"text\" id=\"teamCodeInput\"  class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n                                    </div>\n                                </div>\n                                <!-- 🎨 Nueva sección: Skins -->\n                                <div category=\"skins\" class=\"\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">Skin Original:</div>\n                                        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\"  class=\"sounds-input\"  id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n                                    </div>\n                                </div>\n                                <div category=\"streamers\" class=\"\">\n                                    <div class=\"input-container\">\n                                      <div id=\"streamers-section\" style=\"display: none;
 padding: 10px;
\">\n    <h2>Lista de Streamers</h2>\n    <div id=\"streamers-grid\">\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 1</span>\n                <span class=\"streamer-platform\">Twitch</span>\n            </div>\n        </div>\n        <div class=\"streamer\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 2</span>\n                <span class=\"streamer-platform\">YouTube</span>\n            </div>\n        </div>\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 3</span>\n                <span class=\"streamer-platform\">Facebook</span>\n            </div>\n        </div>\n    </div>\n</div>\n                                    </div>\n                                </div>\n                                <!-- Sección de Streamers -->\n                                </div>\n                            </div>\n\n\n                        </div>\n                    ";
      $("#settings-view").after(v1871);
      $('.tab.material-button').on("click", function () {
        var v1872 = $(this).attr("category");
        if ($(this).hasClass('active')) {
          return;
}
        $(".tab.material-button, .options-list > div").removeClass('active');
        $(this).addClass("active");
        $("div[category='" + v1872 + "']").addClass("active");
}
);
      document.getElementById("resetScript").addEventListener("click", async function () {
        localStorage.clear();
        sessionStorage.clear();
        if (window.indexedDB) {
          const v1873 = await indexedDB.databases();
          v1873.forEach(v1874 => indexedDB.deleteDatabase(v1874.name));
}
        if (window.openDatabase) {
          console.warn("Web SQL no se puede eliminar automáticamente desde JavaScript.");
}
        document.cookie.split(';
').forEach(function (v1875) {
          document.cookie = v1875.replace(/^ +/, '').replace(/=.*/, "=;
expires=" + new Date().toUTCString() + ";
path=/");
}
);
        if ("caches" in window) {
          caches.keys().then(function (v1876) {
            for (let v1877 of v1876) caches["delete"](v1877);
}
);
}
        if ('serviceWorker' in navigator) {
          const v1878 = await navigator.serviceWorker.getRegistrations();
          for (let v1879 of v1878) {
            await v1879.unregister();
}
}
        localStorage.removeItem('scriptSeleccionado');
        location.reload();
}
);
      soundEnabled = true;
      $('#toggle-sound').click(function () {
        soundEnabled = !soundEnabled;
        $(this).text(soundEnabled ? "Disable Sound" : "Enable Sound");
}
);
      $("#idcopiar").click(function () {
        navigator.clipboard.writeText(zw_userId);
        alert("ID copiado: " + zw_userId);
}
);
      window.changeBackground = function (v1880) {
        let v1881 = localStorage.getItem("selectedBackground");
        currentIndex = v1881 !== null ? parseInt(v1881) : 0x0;
        currentIndex = (currentIndex + v1880 + backgrounds.length) % backgrounds.length;
        updateBackground(currentIndex);
}
;
      window.changeFont = function (v1882) {
        currentFontIndex = (currentFontIndex + v1882 + fonts.length) % fonts.length;
        updateFont();
}
;
      updateFont();
      const v1883 = [{
        'id': "ping",
        'label': "SHOW FPS",
        'category': 'game',
        'tooltip': ''
}
, {
        'id': "fps",
        'label': "SHOW PING",
        'category': 'game',
        'tooltip': ''
}
, {
        'id': 'chngBotSkins',
        'label': "CHANGE BOT & PEOPLE TO BASIC SKINS",
        'category': "game",
        'tooltip': ''
}
, {
        'id': "chngPersonsSkins",
        'label': "CHANGE SKINS TO Z WORM",
        'category': "game",
        'tooltip': ''
}
, {
        'id': "top8",
        'label': "SHOW TOP HS",
        'category': "game",
        'tooltip': "If you enable this option, you will see the list of the top 8 players."
}
, {
        'id': "killFeed",
        'label': "SHOW KILL FEED",
        'category': "game",
        'tooltip': "If you enable this option, you will see the list of kills in real time."
}
, {
        'id': "minimapTeamcod",
        'label': "SHOW TEAM LIST",
        'category': "teams",
        'tooltip': ''
}
];
      const v1884 = [{
        'name': "ZOOM SPEED",
        'id': "zoomSpeed",
        'min': 0.1,
        'max': 0xf,
        'step': 0.1,
        'category': "game",
        'tooltip': ''
}
];
      const v1885 = {
        'game': document.querySelector(".options-list > div[category=\"game\"]"),
        'teams': document.querySelector(".options-list > div[category=\"teams\"]"),
        'theme': document.querySelector(".options-list > div[category=\"theme\"]"),
        'controls': document.querySelector(".options-list > div[category=\"controls\"]")
}
;
      if (isPremiumUser) {
        v1883.push({
          'id': 'Incognito',
          'label': "INCOGNITO",
          'category': 'game',
          'tooltip': "Premium Feature"
}
, {
          'id': "laserHS",
          'label': "LASER HS",
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'id': "backgroundSolid",
          'label': "BACKGROUND SOLID",
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'id': "sectores",
          'label': 'SECTORS',
          'category': 'game',
          'tooltip': "Premium Feature"
}
, {
          'id': "speed_zigzag",
          'label': "VISIBLE SPEED AND ZIGZAG",
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'id': "timerSpZg",
          'label': "TIMER SPEED AND ZIGZAG",
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'id': "visiblePowersAll",
          'label': "VISIBLE ALL POWER UPS",
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'id': "hideYouNameInMinimap",
          'label': "SHOW YOUR NAME FOR TEAM LIST",
          'category': "teams",
          'tooltip': "Premium Feature"
}
);
        v1885.teams.insertAdjacentHTML('beforeend', "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;
\">PUT YOUR NAME FOR TEAM LIST:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"ENTER YOUR NAME FOR FRIENDS\" />\n                            </div>\n                        ");
        v1884.push({
          'name': "BOOSTER SIZE",
          'id': "PotenciadorSize",
          'min': 0x1,
          'max': 0x6,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'name': "AURA THE BOOSTER",
          'id': "PotenciadorAura",
          'min': 1.2,
          'max': 3.2,
          'step': 0.2,
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'name': "FOOD SHADOW",
          'id': "ComidaShadow",
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'name': "SIZE FOOD",
          'id': 'ComidaSize',
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'name': "MOUSE DELAY",
          'id': 'mouseDelay',
          'min': 0xa,
          'max': 0x14,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
}
, {
          'name': "SMOOTH CAMERA",
          'id': "smoothCamera",
          'min': 0.1,
          'max': 0.9,
          'step': 0.1,
          'category': "game",
          'tooltip': "Premium Feature"
}
);
}
      v1884.forEach(v1886 => {
        const v1887 = parseFloat(theoKzObjects[v1886.id]);
        const v1888 = document.createElement("div");
        v1888.className = "option range";
        v1888.innerHTML = "\n        <div class=\"name\" style=\"" + (v1886.tooltip.includes("Premium") ? "color: yellow;
" : '') + "\">" + v1886.name + "</div>\n        <div class=\"value\">" + v1887 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (v1887 - v1886.min) / (v1886.max - v1886.min) * 0x64 + "%;
\"></div>\n            </div>\n            <input type=\"range\" id=\"" + v1886.id + "\" min=\"" + v1886.min + "\" max=\"" + v1886.max + "\" step=\"" + v1886.step + "\" value=\"" + v1887 + "\">\n        </div>\n    ";
        const v1889 = v1888.querySelector("input");
        const v1890 = v1888.querySelector(".value");
        const v1891 = v1888.querySelector('.fill');
        v1889.addEventListener("input", () => {
          v1890.textContent = v1889.value;
          v1891.style.width = (v1889.value - v1886.min) / (v1886.max - v1886.min) * 0x64 + '%';
          theoKzObjects[v1886.id] = v1889.value;
          localStorage.setItem(v1886.id, v1889.value);
          if (v1886.id === 'mouseDelay') {
            anApp.o.updatePacketInterval(parseInt(v1889.value));
}
}
);
        v1885[v1886.category].appendChild(v1888);
}
);
      v1883.forEach(v1892 => {
        const v1893 = localStorage.getItem(v1892.id) === 'true';
        const v1894 = "\n                            <div class=\"option toggle " + (v1893 ? 'on' : '') + "\" data-option=\"" + v1892.id + "\">\n                                <div class=\"name\" style=\"" + (v1892.tooltip.includes('Premium') ? "color: yellow;
" : '') + "\">" + v1892.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (v1892.tooltip ? "<span class=\"tooltip\">" + v1892.tooltip + "</span>" : '') + "\n                            </div>\n                        ";
        v1885[v1892.category].insertAdjacentHTML("beforeend", v1894);
}
);
      document.querySelectorAll('.box').forEach(v1895 => {
        v1895.addEventListener("click", function (v1896) {
          v1896.stopPropagation();
          const v1897 = this.parentElement;
          const v1898 = v1897.getAttribute('data-option');
          const v1899 = !v1897.classList.contains('on');
          v1897.classList.toggle('on', v1899);
          theoKzObjects[v1898] = v1899;
          localStorage.setItem(v1898, v1899);
          const v1900 = v1897.querySelector(".tooltip");
          if (v1900) {
            v1900.style.display = v1899 ? "block" : 'none';
}
          console.log(v1898 + " changed to", v1899);
}
);
}
);
      var v1901 = $("div[category='theme']");
      addMinicolor(v1901[0x1], "teamColorGroup", "YOUR COLOR IN MAP", "teamColor", 'FFFFFF');
      $('#teamColor').on("input", function () {
        let v1902 = $(this).val();
        $("#preview_teamColor").css('background-color', v1902);
        localStorage.setItem("teamColor", zwormData.teamColor);
        zwormData.teamColor = '0x' + v1902.substring(0x1);
        console.log(zwormData.teamColor);
}
);
      let v1903 = localStorage.getItem("teamColor");
      if (v1903) {
        zwormData.teamColor = v1903;
        $("#preview_teamColor").css('background-color', '#' + v1903.substring(0x2));
        $("#teamColor").val('#' + v1903.substring(0x2));
}
      let v1904 = localStorage.getItem("top8") === "true" ? true : !(localStorage.getItem("top8") === "false");
      let v1905 = localStorage.getItem("killFeed") === 'true' ? true : (localStorage.getItem('killFeed') === "false", false);
      $("#toggleTop8").prop("checked", v1904);
      $('#toggleKillFeed').prop("checked", v1905);
      $("#top8List").toggle(v1904);
      $('#killFeed').toggle(v1905);
      if (localStorage.getItem('top8') === 'true' || localStorage.getItem("top8") === "false") {
        theoKzObjects.top8 = v1904;
        localStorage.setItem("top8", v1904);
}
      if (localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") === "false") {
        theoKzObjects.killFeed = v1905;
        localStorage.setItem("killFeed", v1905);
}
      $("#toggleTop8").on("change", function () {
        theoKzObjects.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem("top8", true);
}
);
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", false);
}
);
      $("#toggleTop8").hover(function () {
        $('#tooltipTop8').fadeIn();
}
, function () {
        $("#tooltipTop8").fadeOut();
}
);
      $("#toggleKillFeed").hover(function () {
        $("#tooltipKillFeed").fadeIn();
}
, function () {
        $("#tooltipKillFeed").fadeOut();
}
);
      $("#teamCodeInput").on("input", function () {
        zwormData.teamCode = $(this).val();
        localStorage.setItem("teamCode", '');
        console.log("Team Code updated:", '');
}
);
      let v1906 = localStorage.getItem('teamCode');
      if (v1906) {
        zwormData.teamCode = v1906;
        $("#teamCodeInput").val(v1906);
}
      zw_selectedbackground = 0x0;
      zw_toplist = 0xa;
      var v1907 = $('#arkaplan');
      var v1908 = $('#zwtop');
      var v1909 = localStorage.getItem("zw-background");
      if (v1909) {
        var v1910 = parseInt(v1909);
        v1907.val(v1910);
        zw_selectedbackground = v1910;
}
      const v1911 = localStorage.getItem('zw-toplist');
      if (v1911) {
        const v1912 = parseInt(v1911);
        zw_toplist = v1912;
}
      let v1913 = true && true && true && !isNaN(0x23);
      if (v1913) {
        $("#inputReplaceSkin").val(0x23);
}
 else {
        let v1914 = $('#inputReplaceSkin').val();
        v1913 = '' !== v1914 && null !== v1914 && undefined !== v1914 && !isNaN(v1914);
        theoKzObjects.idReplaceSkin = v1913 ? v1914 : 0x23;
}
      ;
      v1908.val(zw_toplist);
      v1907.change(function (v1915) {
        zw_selectedbackground = this.value;
        var v1916 = obtenerImagenPorSeleccion(zw_selectedbackground);
        if (v1916) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v1916));
}
        localStorage.setItem("zw-background", this.value.toString());
}
);
      v1908.change(function (v1917) {
        zw_toplist = this.value;
        localStorage.setItem("zw-toplist", this.value.toString());
}
);
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(zw_userId);
}
);
      v1868.prototype.a = function () {
        v1868.parent.prototype.a.call(this);
        if (!v1868.Ek) {
          v1868.Ek = true;
          var v1918 = window.anApp = v542;
          v1918.u.Pi(function () {
            if (v1918.u.P()) {
              v1865.html(v1918.u.zi());
}
 else {
              v1865.html('0');
}
}
);
}
}
;
      v1868.Fk = $("#coins-view");
      v1868.Gk = $('#leaders-view');
      v1868.Hk = $('#profile-view');
      v1868.Ik = $("#settings-view");
      v1868.Jk = $("#login-view");
      v1868.Kk = $("#skins-view");
      v1868.Lk = $('#store-view');
      v1868.zwset = $('#wormtr-settings-view');
      v1868.Mk = $("#wear-view");
      v1868.Nk = $("#withdraw-consent-view");
      v1868.Ok = $("#delete-account-view");
      v1868.Pk = $("#please-wait-view");
      v1868.prototype.ii = function () {
        v1369.fk.stop();
        v1369.fk.fadeOut(0xc8);
        v1369.gk.stop();
        v1369.gk.fadeOut(0xc8);
        v1369.hk.stop();
        v1369.hk.fadeOut(0xc8);
        v1369.ik.stop();
        v1369.ik.fadeIn(0xc8);
        v1369.jk.stop();
        v1369.jk.fadeOut(0xc8);
        v1369.kk.stop();
        v1369.kk.fadeOut(0xc8);
        v1369.nk.stop();
        v1369.nk.fadeIn(0xc8);
        v1369.ok.stop();
        v1369.ok.fadeIn(0xc8);
        v1863.html(this.ad);
        v1864.toggle(this.Dk);
        this.Qk();
        this.Rk();
}
;
      v1868.prototype.Rk = function () {
}
;
      v1868.prototype.Sk = function () {
        v1862.Pk.stop();
        v1862.Pk.fadeIn(0x12c);
}
;
      v1868.prototype.Qk = function () {
        v1862.Pk.stop();
        v1862.Pk.fadeOut(0x12c);
}
;
      return v1868;
}
();
    var v1344 = function () {
      var v1919 = $("#store-buy-coins_125000");
      var v1920 = $("#store-buy-coins_50000");
      var v1921 = $("#store-buy-coins_16000");
      var v1922 = $('#store-buy-coins_7000');
      var v1923 = $("#store-buy-coins_3250");
      var v1924 = $("#store-buy-coins_1250");
      var v1925 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var v1926 = window.anApp = v542;
        var v1927 = this;
        v1919.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_125000");
}
);
        v1920.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_50000");
}
);
        v1921.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_16000");
}
);
        v1922.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_7000");
}
);
        v1923.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_3250");
}
);
        v1924.click(function () {
          v1926.r.Cd();
          v1927.Tk("coins_1250");
}
);
}
);
      v1925.prototype.a = function () {
        v1925.parent.prototype.a.call(this);
}
;
      v1925.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeIn(0xc8);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1925.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
}
;
      v1925.prototype.Tk = function (v1928) {
}
;
      return v1925;
}
();
    var v1345 = function () {
      var v1929 = $('#highscore-table');
      var v1930 = $("#leaders-button-level");
      var v1931 = $("#leaders-button-highscore");
      var v1932 = $("#leaders-button-kills");
      var v1933 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var v1934 = window.anApp = v542;
        var v1935 = this;
        this.Uk = {
}
;
        this.Vk = {
          'Wk': {
            'Xk': v1930,
            'Yk': "byLevel"
}
,
          'Zk': {
            'Xk': v1931,
            'Yk': "byHighScore"
}
,
          '$k': {
            'Xk': v1932,
            'Yk': "byKillsAndHeadShots"
}
}
;
        v1930.click(function () {
          v1934.r.Cd();
          v1935._k(v1935.Vk.Wk);
}
);
        v1931.click(function () {
          v1934.r.Cd();
          v1935._k(v1935.Vk.Zk);
}
);
        v1932.click(function () {
          v1934.r.Cd();
          v1935._k(v1935.Vk.$k);
}
);
}
);
      v1933.prototype.a = function () {
        v1933.parent.prototype.a.call(this);
}
;
      v1933.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeIn(0xc8);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1933.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
        var v1936 = this;
        this.Sk();
        $.get(v569 + "/pub/leaders", function (v1937) {
          v1936.Uk = v1937;
          v1936._k(null != v1936.al ? v1936.al : v1936.Vk.Wk);
          v1936.Qk();
}
).done(function () {
          v1936.Qk();
}
);
}
;
      v1933.prototype._k = function (v1938) {
        this.al = v1938;
        for (var v1939 in this.Vk) if (this.Vk.hasOwnProperty(v1939)) {
          var v1940 = this.Vk[v1939];
          v1940.Xk.removeClass("pressed");
}
        this.al.Xk.addClass("pressed");
        var v1941 = this.Uk[this.al.Yk];
        var v1942 = '';
        for (var v1943 = 0x0;
 v1943 < v1941.length;
 v1943++) {
          var v1944 = v1941[v1943];
          v1942 += "<div class=\"table-row\"><span>" + (v1943 + 0x1) + "</span><span><img src=\"" + v1944.avatarUrl + "\"/></span><span>" + v1944.username + "</span><span>" + v1944.level + '</span><span>' + v1944.highScore + "</span><span>" + v1944.headShots + " / " + v1944.kills + "</span></div>";
}
        v1929.empty();
        v1929.append(v1942);
}
;
      return v1933;
}
();
    var v1347 = function () {
      var v1945 = $("#popup-login-gg");
      var v1946 = $('#popup-login-fb');
      var v1947 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES['index.game.popup.menu.login.tab'], false);
        var v1948 = window.anApp = v542;
        var v1949 = this;
        v1945.click(function () {
          v1948.r.Cd();
          v1949.Sk();
          v1948.u.Qi(function () {
            v1949.Qk();
}
);
          setTimeout(function () {
            v1949.Qk();
}
, 0x2710);
          v1948.u.Zi();
}
);
        v1946.click(function () {
          v1948.r.Cd();
          v1949.Sk();
          v1948.u.Qi(function () {
            v1949.Qk();
}
);
          setTimeout(function () {
            v1949.Qk();
}
, 0x2710);
          v1948.u.Vi();
}
);
}
);
      v1947.prototype.a = function () {
        v1947.parent.prototype.a.call(this);
}
;
      v1947.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeIn(0xc8);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1947.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
}
;
      return v1947;
}
();
    var v1346 = function () {
      var v1950 = $("#profile-avatar");
      var v1951 = $("#profile-username");
      var v1952 = $("#profile-experience-bar");
      var v1953 = $("#profile-experience-val");
      var v1954 = $('#profile-level');
      var v1955 = $('#profile-stat-highScore');
      var v1956 = $('#profile-stat-bestSurvivalTime');
      var v1957 = $("#profile-stat-kills");
      var v1958 = $("#profile-stat-headshots");
      var v1959 = $("#profile-stat-gamesPlayed");
      var v1960 = $("#profile-stat-totalTimeSpent");
      var v1961 = $("#profile-stat-registrationDate");
      var v1962 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.profile.tab"], true);
}
);
      v1962.prototype.a = function () {
        v1962.parent.prototype.a.call(this);
}
;
      v1962.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeIn(0xc8);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1962.prototype.ji = function () {
        var v1963 = window.anApp = v542;
        v1963.r.Dd();
        var v1964 = v1963.u.Oi();
        var v1965 = moment([v1964.year, v1964.month - 0x1, v1964.day]).format('LL');
        v1951.html(v1963.u.wi());
        v1950.attr("src", v1963.u.xi());
        v1952.width(0x64 * v1963.u.Bi() / v1963.u.Ci() + '%');
        v1953.html(v1963.u.Bi() + " / " + v1963.u.Ci());
        v1954.html(v1963.u.Ai());
        v1955.html(v1963.u.Ii());
        v1956.html(v470(v1963.u.Ji()));
        v1957.html(v1963.u.Ki());
        v1958.html(v1963.u.Li());
        v1959.html(v1963.u.Mi());
        v1960.html(v470(v1963.u.Ni()));
        v1961.html(v1965);
}
;
      return v1962;
}
();
    var v1348 = function () {
      var v1966 = $("#settings-music-enabled-switch");
      var v1967 = $("#settings-sfx-enabled-switch");
      var v1968 = $('#settings-show-names-switch');
      var v1969 = $("#popup-logout");
      var v1970 = $("#popup-logout-container");
      var v1971 = $("#popup-delete-account");
      var v1972 = $("#popup-delete-account-container");
      var v1973 = $('#popup-withdraw-consent');
      var v1974 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
        var v1975 = this;
        var v1976 = window.anApp = v542;
        v1966.click(function () {
          var v1977 = !!v1966.prop("checked");
          v464(v538.Me, v1977, 0x1e);
          v1976.r.td(v1977);
          v1976.r.Cd();
}
);
        v1967.click(function () {
          var v1978 = !!v1967.prop("checked");
          v464(v538.Ne, v1978, 0x1e);
          v1976.r.rd(v1978);
          v1976.r.Cd();
}
);
        v1968.click(function () {
          v1976.r.Cd();
}
);
        v1969.click(function () {
          v1976.r.Cd();
          v1975.Sk();
          setTimeout(function () {
            v1975.Qk();
}
, 0x7d0);
          v1976.u.Wi();
}
);
        v1971.click(function () {
          if (v1976.u.P()) {
            v1976.r.Cd();
            v1976.s.I(v1976.s.Vh);
}
 else {
            v1976.r.Hd();
}
}
);
        v1973.click(function () {
          if (v1976.Y()) {
            v1976.r.Cd();
            v1976.s.I(v1976.s.Uh);
}
 else {
            v1976.r.Hd();
}
}
);
}
);
      v1974.prototype.a = function () {
        v1974.parent.prototype.a.call(this);
        var v1979 = window.anApp = v542;
        var v1980 = undefined;
        switch (v458(v538.Me)) {
          case "false":
            v1980 = false;
            break;
          default:
            v1980 = true;
}
        v1966.prop("checked", v1980);
        v1979.r.td(v1980);
        var v1981 = undefined;
        switch (v458(v538.Ne)) {
          case "false":
            v1981 = false;
            break;
          default:
            v1981 = true;
}
        v1967.prop('checked', v1981);
        v1979.r.rd(v1981);
        var v1982 = undefined;
        switch (v458(v538.ya)) {
          case "false":
            v1982 = false;
            break;
          default:
            v1982 = true;
}
        console.log("Load sPN: " + v1982);
        v1968.prop('checked', v1982);
        v1979.u.V(function () {
          v1970.toggle(v1979.u.P());
          v1972.toggle(v1979.u.P());
}
);
}
;
      v1974.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeIn(0xc8);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1974.prototype.ji = function () {
        var v1983 = window.anApp = v542;
        v1983.r.Dd();
        if (v1983.Y()) {
          v1973.show();
}
 else {
          v1973.hide();
}
}
;
      v1974.prototype.wa = function () {
        return v1968.prop("checked");
}
;
      return v1974;
}
();
    var v1350 = function () {
      var v1984 = $('#store-view-canv');
      var v1985 = $('#skin-description-text');
      var v1986 = $("#skin-group-description-text");
      var v1987 = $("#store-locked-bar");
      var v1988 = $("#store-locked-bar-text");
      var v1989 = $("#store-buy-button");
      var v1990 = $("#store-item-price");
      var v1991 = $("#store-groups");
      var v1992 = $("#store-view-prev");
      var v1993 = $('#store-view-next');
      var v1994 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
        var v1995 = this;
        var v1996 = window.anApp = v542;
        this.bl = null;
        this.cl = [];
        this.dl = {
}
;
        this.el = new v1691(v1984);
        v1989.click(function () {
          v1996.r.Cd();
          v1995.fl();
}
);
        v1992.click(function () {
          v1996.r.Cd();
          v1995.bl.gl();
}
);
        v1993.click(function () {
          v1996.r.Cd();
          v1995.bl.hl();
}
);
}
);
      v1994.prototype.a = function () {
        v1994.parent.prototype.a.call(this);
        var v1997 = this;
        var v1998 = window.anApp = v542;
        v1998.p.ca(function () {
          var v1999 = v1998.p.Ac();
          if (null != v1999) {
            v1997.cl = [];
            for (var v2000 = 0x0;
 v2000 < v1999.skinGroupArrayDict.length;
 v2000++) {
              v1997.cl.push(new v2001(v1997, v1999.skinGroupArrayDict[v2000]));
}
            v1997.dl = {
}
;
            for (var v2002 = 0x0;
 v2002 < v1999.skinArrayDict.length;
 v2002++) {
              var v2003 = v1999.skinArrayDict[v2002];
              v1997.dl[v2003.id] = v2003;
}
}
}
);
        this.il(false);
        v1998.t.xh(function () {
          v1997.il(false);
}
);
}
;
      v1994.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeIn(0xc8);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v1994.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
        this.jl();
        this.el.Le(true);
}
;
      v1994.prototype.ei = function () {
        this.el.Le(false);
}
;
      v1994.prototype.Ra = function () {
        this.el.Ra();
}
;
      v1994.prototype.Pa = function (v2004, v2005) {
        this.el.Pa();
}
;
      v1994.prototype.jl = function () {
        var v2006 = this;
        var v2007 = this;
        var v2008 = window.anApp = v542;
        v1991.empty();
        for (var v2009 = 0x0;
 v2009 < this.cl.length;
 v2009++) {
          !function (v2010) {
            var v2011 = v2006.cl[v2010];
            var v2012 = document.createElement('li');
            v1991.append(v2012);
            var v2013 = $(v2012);
            v2013.html(v2011.kl());
            v2013.click(function () {
              v2008.r.Cd();
              v2007.ll(v2011);
}
);
            v2011.ml = v2013;
}
(v2009);
}
        if (this.cl.length > 0x0) {
          var v2014 = v2008.t.ha(v576.ia);
          for (var v2009 = 0x0;
 v2009 < this.cl.length;
 v2009++) {
            var v2015 = this.cl[v2009];
            var v2016 = v2015.nl.list;
            for (var v2017 = 0x0;
 v2017 < v2016.length;
 v2017++) {
              if (v2016[v2017] == v2014) {
                v2015.ol = v2017;
                return void this.ll(v2015);
}
}
}
          this.ll(this.cl[0x0]);
}
}
;
      v1994.prototype.ll = function (v2018) {
        if (this.bl != v2018) {
          var v2019 = window.anApp = v542;
          this.bl = v2018;
          v1991.children().removeClass('pressed');
          if (this.bl.ml) {
            this.bl.ml.addClass('pressed');
}
          v1986.html('');
          if (null != v2018.nl) {
            var v2020 = v2019.p.Ac().textDict[v2018.nl.description];
            if (null != v2020) {
              v1986.html((v2020[v544] ? v2020[v544] : v2020.en ? v2020.en : v2020.x).includes('href') ? (v2020[v544] ? v2020[v544] : v2020.en ? v2020.en : v2020.x).replaceAll("href", "target=\"_black\" href") : v2020[v544] ? v2020[v544] : v2020.en ? v2020.en : v2020.x);
}
}
          this.il(true);
}
}
;
      v1994.prototype.pl = function () {
        return null == this.bl ? v1243.Yg() : this.bl.ql();
}
;
      v1994.prototype.fl = function () {
        var v2021 = this;
        this.pl().ah(function (v2022) {
          v2021.rl(v2022);
}
);
}
;
      v1994.prototype.rl = function (v2023) {
        var v2024 = this;
        var v2025 = window.anApp = v542;
        var v2026 = this.dl[v2023].price;
        if (!(v2025.u.zi() < v2026)) {
          this.Sk();
          var v2027 = v2025.t.ha(v576.ia);
          var v2028 = v2025.t.ha(v576.ja);
          var v2029 = v2025.t.ha(v576.ka);
          var v2030 = v2025.t.ha(v576.la);
          var v2031 = v2025.t.ha(v576.ma);
          v2025.u.Ui(v2023, v576.ia, function () {
            v2025.t.Bh(v2027, v576.ia);
            v2025.t.Bh(v2028, v576.ja);
            v2025.t.Bh(v2029, v576.ka);
            v2025.t.Bh(v2030, v576.la);
            v2025.t.Bh(v2031, v576.ma);
            if (v2025.u.Ch(v2023, v576.ia)) {
              v2025.t.Bh(v2023, v576.ia);
}
            v2024.Qk();
}
);
}
}
;
      v1994.prototype.il = function (v2032) {
        var v2033 = window.anApp = v542;
        this.el.bk(v2033.t.ha(v576.ja), false, false);
        this.el.ck(v2033.t.ha(v576.ka), false, false);
        this.el.dk(v2033.t.ha(v576.la), false, false);
        this.el.ek(v2033.t.ha(v576.ma), false, false);
        var v2034 = this.pl();
        if (v2034._g()) {
          var v2035 = v2034.$g();
          var v2036 = this.dl[v2035];
          var v2037 = false;
          if (v2033.t.Ja(v2035, v576.ia)) {
            v1987.hide();
            v1989.hide();
}
 else {
            if (null == v2036 || 0x1 == v2036.nonbuyable) {
              v2037 = true;
              v1987.show();
              v1989.hide();
              v1988.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != v2036 && v2036.nonbuyable && null != v2036.nonbuyableCause) {
                var v2038 = v2033.p.Ac().textDict[v2036.nonbuyableCause];
                if (null != v2038) {
                  v1988.text(v2038[v544] ? v2038[v544] : v2038.en ? v2038.en : v2038.x);
}
}
}
 else {
              v1987.hide();
              v1989.show();
              v1990.html(v2036.price);
}
}
          v1985.html("ID: " + v2035 + " TYPE: " + v576.ia);
          if (null != v2036 && null != v2036.description) {
            var v2039 = v2033.p.Ac().textDict[v2036.description];
            if (null != v2039) {
              v1985.html((v2039[v544] ? v2039[v544] : v2039.en ? v2039.en : v2039.x).includes('href') ? (v2039[v544] ? v2039[v544] : v2039.en ? v2039.en : v2039.x).replaceAll("href", "target=\"_black\" href") : v2039[v544] ? v2039[v544] : v2039.en ? v2039.en : v2039.x);
}
}
          this.el.ak(v2035, true, v2037);
          if (v2032) {
            v2033.t.Bh(v2035, v576.ia);
}
}
}
;
      var v2001 = function () {
        function v2040(v2041, v2042) {
          this.sl = v2041;
          this.ol = 0x0;
          this.nl = v2042;
}
        v2040.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
}
          this.sl.il(true);
}
;
        v2040.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
}
          this.sl.il(true);
}
;
        v2040.prototype.kl = function () {
          let v2043 = this.nl.name[v544] ? this.nl.name[v544] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
          console.log(this.nl);
          if (this.nl.img) {
            v2043 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
}
          return v2043;
}
;
        v2040.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? v1243.Yg() : v1243.Zg(this.nl.list[this.ol]);
}
;
        return v2040;
}
();
      return v1994;
}
();
    var v1351 = function () {
      var v2044 = $("#store-go-coins-button");
      var v2045 = $('#store-go-skins-button');
      var v2046 = $("#store-go-wear-button");
      var v2047 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var v2048 = window.anApp = v542;
        v2044.click(function () {
          v2048.r.Cd();
          v2048.s.I(v2048.s.Wh);
}
);
        v2045.click(function () {
          v2048.r.Cd();
          v2048.s.I(v2048.s.$h);
}
);
        v2046.click(function () {
          v2048.r.Cd();
          v2048.s.I(v2048.s.ai);
}
);
}
);
      v2047.prototype.a = function () {
        v2047.parent.prototype.a.call(this);
}
;
      v2047.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeIn(0xc8);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v2047.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
}
;
      return v2047;
}
();
    var v1349 = function () {
      var v2049 = v487(v1862, function () {
        v1862.call(this, "ZWORM SETTINGS", 0x0);
}
);
      v2049.prototype.a = function () {
        v2049.parent.prototype.a.call(this);
}
;
      v2049.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeIn(0xc8);
}
;
      v2049.prototype.ji = function () {
        var v2050 = window.anApp = v542;
        v2050.r.Dd();
}
;
      return v2049;
}
();
    var v1352 = function () {
      var v2051 = $("#wear-view-canv");
      var v2052 = $("#wear-description-text");
      var v2053 = $('#wear-locked-bar');
      var v2054 = $("#wear-locked-bar-text");
      var v2055 = $("#wear-buy-button");
      var v2056 = $("#wear-item-price");
      var v2057 = $("#wear-eyes-button");
      var v2058 = $("#wear-mouths-button");
      var v2059 = $("#wear-glasses-button");
      var v2060 = $("#wear-hats-button");
      var v2061 = $('#wear-tint-chooser');
      var v2062 = $('#wear-view-prev');
      var v2063 = $("#wear-view-next");
      var v2064 = v487(v1862, function () {
        var v2065 = this;
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var v2066 = window.anApp = v542;
        var v2067 = this;
        this.tl = [];
        this.ja = new v2068(this, v576.ja, v2057);
        this.ka = new v2068(this, v576.ka, v2058);
        this.la = new v2068(this, v576.la, v2059);
        this.ma = new v2068(this, v576.ma, v2060);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new v1691(v2051);
        v2055.click(function () {
          v2066.r.Cd();
          v2067.Bl();
}
);
        v2062.click(function () {
          v2066.r.Cd();
          v2067.ul.Cl();
}
);
        v2063.click(function () {
          v2066.r.Cd();
          v2067.ul.Dl();
}
);
        v2057.click(function () {
          v2066.r.Cd();
          v2067.El(v2065.ja);
}
);
        v2058.click(function () {
          v2066.r.Cd();
          v2067.El(v2065.ka);
}
);
        v2059.click(function () {
          v2066.r.Cd();
          v2067.El(v2065.la);
}
);
        v2060.click(function () {
          v2066.r.Cd();
          v2067.El(v2065.ma);
}
);
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
}
);
      v2064.prototype.a = function () {
        v2064.parent.prototype.a.call(this);
        var v2069 = window.anApp = v542;
        var v2070 = this;
        v2069.p.ca(function () {
          var v2071 = v2069.p.Ac();
          if (null != v2071) {
            v2070.vl = v2071.eyesDict;
            v2070.wl = v2071.mouthDict;
            v2070.xl = v2071.glassesDict;
            v2070.yl = v2071.hatDict;
            v2070.zl = v2071.colorDict;
            v2070.ja.Fl(v2071.eyesVariantArray);
            v2070.ja.Gl(v2070.vl);
            v2070.ka.Fl(v2071.mouthVariantArray);
            v2070.ka.Gl(v2070.wl);
            v2070.la.Fl(v2071.glassesVariantArray);
            v2070.la.Gl(v2070.xl);
            v2070.ma.Fl(v2071.hatVariantArray);
            v2070.ma.Gl(v2070.yl);
}
}
);
        this.il(false);
        v2069.t.xh(function () {
          v2070.il(false);
}
);
}
;
      v2064.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeIn(0xc8);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v2064.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
        this.El(null != this.ul ? this.ul : this.ja);
        this.Al.Le(true);
}
;
      v2064.prototype.ei = function () {
        this.Al.Le(false);
}
;
      v2064.prototype.Ra = function () {
        this.Al.Ra();
}
;
      v2064.prototype.Pa = function (v2072, v2073) {
        this.Al.Pa();
}
;
      v2064.prototype.El = function (v2074) {
        this.ul = v2074;
        for (var v2075 = 0x0;
 v2075 < this.tl.length;
 v2075++) {
          this.tl[v2075].Xk.removeClass("pressed");
}
        this.ul.Xk.addClass('pressed');
        this.ul.ii();
}
;
      v2064.prototype.Hl = function () {
        return null == this.ul ? v1243.Yg() : v1243.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
}
);
}
;
      v2064.prototype.Bl = function () {
        var v2076 = this;
        this.Hl().ah(function (v2077) {
          v2076.Ui(v2077.Lb, v2077.rc);
}
);
}
;
      v2064.prototype.Ui = function (v2078, v2079) {
        var v2080 = this;
        var v2081 = window.anApp = v542;
        var v2082 = undefined;
        switch (v2079) {
          case v576.ja:
            v2082 = this.vl[v2078].price;
            break;
          case v576.ka:
            v2082 = this.wl[v2078].price;
            break;
          case v576.la:
            v2082 = this.xl[v2078].price;
            break;
          case v576.ma:
            v2082 = this.yl[v2078].price;
            break;
          default:
            return;
}
        if (!(v2081.u.zi() < v2082)) {
          this.Sk();
          var v2083 = v2081.t.ha(v576.ia);
          var v2084 = v2081.t.ha(v576.ja);
          var v2085 = v2081.t.ha(v576.ka);
          var v2086 = v2081.t.ha(v576.la);
          var v2087 = v2081.t.ha(v576.ma);
          v2081.u.Ui(v2078, v2079, function () {
            v2081.t.Bh(v2083, v576.ia);
            v2081.t.Bh(v2084, v576.ja);
            v2081.t.Bh(v2085, v576.ka);
            v2081.t.Bh(v2086, v576.la);
            v2081.t.Bh(v2087, v576.ma);
            if (v2081.u.Ch(v2078, v2079)) {
              v2081.t.Bh(v2078, v2079);
}
            v2080.Qk();
}
);
}
}
;
      v2064.prototype.Il = function (v2088, v2089) {
        switch (v2089) {
          case v576.ja:
            return this.vl[v2088];
          case v576.ka:
            return this.wl[v2088];
          case v576.la:
            return this.xl[v2088];
          case v576.ma:
            return this.yl[v2088];
}
        return null;
}
;
      v2064.prototype.il = function (v2090) {
        var v2091 = window.anApp = v542;
        this.Al.ak(v2091.t.ha(v576.ia), false, false);
        this.Al.bk(v2091.t.ha(v576.ja), false, false);
        this.Al.ck(v2091.t.ha(v576.ka), false, false);
        this.Al.dk(v2091.t.ha(v576.la), false, false);
        this.Al.ek(v2091.t.ha(v576.ma), false, false);
        var v2092 = this.Hl();
        if (v2092._g()) {
          var v2093 = v2092.$g();
          var v2094 = this.Il(v2093.Lb, v2093.rc);
          var v2095 = false;
          if (v2091.t.Ja(v2093.Lb, v2093.rc)) {
            v2053.hide();
            v2055.hide();
}
 else {
            if (null == v2094 || 0x1 == v2094.nonbuyable) {
              v2095 = true;
              v2053.show();
              v2055.hide();
              v2054.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != v2094 && v2094.nonbuyable && null != v2094.nonbuyableCause) {
                var v2096 = v2091.p.Ac().textDict[v2094.nonbuyableCause];
                if (null != v2096) {
                  v2054.text(v2096[v544] ? v2096[v544] : v2096.en ? v2096.en : v2096.x);
}
}
}
 else {
              v2053.hide();
              v2055.show();
              v2056.html(v2094.price);
}
}
          v2052.html("ID: " + v2093.Lb);
          if (null != v2094 && null != v2094.description) {
            var v2097 = v2091.p.Ac().textDict[v2094.description];
            if (null != v2097) {
              v2052.html((v2097[v544] ? v2097[v544] : v2097.en ? v2097.en : v2097.x).includes('href') ? (v2097[v544] ? v2097[v544] : v2097.en ? v2097.en : v2097.x).replaceAll("href", "target=\"_black\" href") : v2097[v544] ? v2097[v544] : v2097.en ? v2097.en : v2097.x);
}
}
          switch (v2093.rc) {
            case v576.ja:
              this.Al.bk(v2093.Lb, true, v2095);
              break;
            case v576.ka:
              this.Al.ck(v2093.Lb, true, v2095);
              break;
            case v576.la:
              this.Al.dk(v2093.Lb, true, v2095);
              break;
            case v576.ma:
              this.Al.ek(v2093.Lb, true, v2095);
              break;
}
          if (v2090) {
            v2091.t.Bh(v2093.Lb, v2093.rc);
}
}
}
;
      var v2068 = function () {
        function v2098(v2099, v2100, v2101) {
          this.sl = v2099;
          this.rc = v2100;
          this.Xk = v2101;
          this.Jl = {
}
;
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
}
        v2098.prototype.Fl = function (v2102) {
          this.Kl = v2102;
}
;
        v2098.prototype.Gl = function (v2103) {
          this.Jl = v2103;
}
;
        v2098.prototype.ii = function () {
          var v2104 = window.anApp = v542;
          var v2105 = v2104.t.ha(this.rc);
          for (var v2106 = 0x0;
 v2106 < this.Kl.length;
 v2106++) {
            for (var v2107 = 0x0;
 v2107 < this.Kl[v2106].length;
 v2107++) {
              if (this.Kl[v2106][v2107] == v2105) {
                this.Nl(v2106);
                return void this.Ol(v2107);
}
}
}
          this.Nl(0x0);
          this.Ol(0x0);
}
;
        v2098.prototype.Cl = function () {
          var v2108 = this.Ll - 0x1;
          if (v2108 < 0x0) {
            v2108 = this.Kl.length - 0x1;
}
          this.Nl(v2108);
          this.Ol(this.Ml % this.Kl[v2108].length);
}
;
        v2098.prototype.Dl = function () {
          var v2109 = this.Ll + 0x1;
          if (v2109 >= this.Kl.length) {
            v2109 = 0x0;
}
          this.Nl(v2109);
          this.Ol(this.Ml % this.Kl[v2109].length);
}
;
        v2098.prototype.Nl = function (v2110) {
          var v2111 = this;
          if (!(v2110 < 0x0 || v2110 >= this.Kl.length)) {
            this.Ll = v2110;
            v2061.empty();
            var v2112 = this.Kl[this.Ll];
            if (v2112.length > 0x1) {
              for (var v2113 = 0x0;
 v2113 < v2112.length;
 v2113++) {
                !function (v2114) {
                  var v2115 = v2112[v2114];
                  var v2116 = v2111.Jl[v2115];
                  var v2117 = '#' + v2111.sl.zl[v2116.prime];
                  var v2118 = $("<div style=\"border-color:" + v2117 + "\"></div>");
                  v2118.click(function () {
                    (window.anApp = v542).r.Cd();
                    v2111.Ol(v2114);
}
);
                  v2061.append(v2118);
}
(v2113);
}
}
}
}
;
        v2098.prototype.Ol = function (v2119) {
          if (!(v2119 < 0x0 || v2119 >= this.Kl[this.Ll].length)) {
            this.Ml = v2119;
            v2061.children().css('background-color', "transparent");
            var v2120 = v2061.children(":nth-child(" + (0x1 + v2119) + ')');
            v2120.css("background-color", v2120.css("border-color"));
            this.sl.il(true);
}
}
;
        v2098.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
}
;
        return v2098;
}
();
      return v2064;
}
();
    var v1342 = function () {
      var v2121 = $("#withdraw-consent-yes");
      var v2122 = $("#withdraw-consent-no");
      var v2123 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var v2124 = window.anApp = v542;
        v2121.click(function () {
          v2124.r.Cd();
          if (v2124.Y()) {
            v2124.s.I(v2124.s.F);
            v2124.$(false, true);
            v2124.s.aa._(new v566());
}
 else {
            v2124.s.gi();
}
}
);
        v2122.click(function () {
          v2124.r.Cd();
          v2124.s.gi();
}
);
}
);
      v2123.prototype.a = function () {
        v2123.parent.prototype.a.call(this);
}
;
      v2123.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeIn(0xc8);
        v1862.Ok.stop();
        v1862.Ok.fadeOut(0x32);
}
;
      v2123.prototype.ji = function () {
        (window.anApp = v542).r.Dd();
}
;
      return v2123;
}
();
    var v1343 = function () {
      var v2125 = $('#delete-account-timer');
      var v2126 = $("#delete-account-yes");
      var v2127 = $("#delete-account-no");
      var v2128 = v487(v1862, function () {
        v1862.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
        var v2129 = window.anApp = v542;
        v2126.click(function () {
          v2129.r.Cd();
          if (v2129.u.P()) {
            v2129.u.bj();
            v2129.u.Wi();
}
 else {
            v2129.s.gi();
}
}
);
        v2127.click(function () {
          v2129.r.Cd();
          v2129.s.gi();
}
);
        this.Pl = [];
}
);
      v2128.prototype.a = function () {
        v2128.parent.prototype.a.call(this);
}
;
      v2128.prototype.Rk = function () {
        v1862.Fk.stop();
        v1862.Fk.fadeOut(0x32);
        v1862.Gk.stop();
        v1862.Gk.fadeOut(0x32);
        v1862.Hk.stop();
        v1862.Hk.fadeOut(0x32);
        v1862.Jk.stop();
        v1862.Jk.fadeOut(0x32);
        v1862.Ik.stop();
        v1862.Ik.fadeOut(0x32);
        v1862.Kk.stop();
        v1862.Kk.fadeOut(0x32);
        v1862.Lk.stop();
        v1862.Lk.fadeOut(0x32);
        v1862.Mk.stop();
        v1862.Mk.fadeOut(0x32);
        v1862.zwset.stop();
        v1862.zwset.fadeOut(0x32);
        v1862.Nk.stop();
        v1862.Nk.fadeOut(0x32);
        v1862.Ok.stop();
        v1862.Ok.fadeIn(0xc8);
}
;
      v2128.prototype.ji = function () {
        (window.anApp = v542).r.Hd();
        v2126.stop();
        v2126.hide();
        v2125.stop();
        v2125.show();
        v2125.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v2125.text(".. 9 ..");
}
, 0x3e8);
        this.Rl(function () {
          v2125.text(".. 8 ..");
}
, 0x7d0);
        this.Rl(function () {
          v2125.text(".. 7 ..");
}
, 0xbb8);
        this.Rl(function () {
          v2125.text(".. 6 ..");
}
, 0xfa0);
        this.Rl(function () {
          v2125.text(".. 5 ..");
}
, 0x1388);
        this.Rl(function () {
          v2125.text(".. 4 ..");
}
, 0x1770);
        this.Rl(function () {
          v2125.text(".. 3 ..");
}
, 0x1b58);
        this.Rl(function () {
          v2125.text(".. 2 ..");
}
, 0x1f40);
        this.Rl(function () {
          v2125.text(".. 1 ..");
}
, 0x2328);
        this.Rl(function () {
          v2125.hide();
          v2126.fadeIn(0x12c);
}
, 0x2710);
}
;
      v2128.prototype.Rl = function (v2130, v2131) {
        var v2132 = setTimeout(v2130, v2131);
        this.Pl.push(v2132);
}
;
      v2128.prototype.Ql = function () {
        for (var v2133 = 0x0;
 v2133 < this.Pl.length;
 v2133++) {
          clearTimeout(this.Pl[v2133]);
}
        this.Pl = [];
}
;
      return v2128;
}
();
    var v2134 = function () {
      function v2135() {
        this.Ck = function () {
}
;
}
      v2135.prototype.Bk = function () {
}
;
      v2135.prototype.ji = function () {
}
;
      return v2135;
}
();
    var v1401 = function () {
      var v2136 = v487(v2134, function (v2137) {
        v2134.call(this);
        var v2138 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + v2138 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + v2137 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES['index.game.toaster.continue'] + '</div></div>');
        var v2139 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = v542).r.Cd();
          v2139.Ck();
}
);
}
);
      v2136.prototype.Bk = function () {
        return this.Sl;
}
;
      v2136.prototype.ji = function () {
        (window.anApp = v542).r.Fd();
}
;
      return v2136;
}
();
    var v1399 = function () {
      var v2140 = v487(v2134, function (v2141) {
        v2134.call(this);
        var v2142 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + v2142 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + v2141 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var v2143 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = v542).r.Cd();
          v2143.Ck();
}
);
}
);
      v2140.prototype.Bk = function () {
        return this.Sl;
}
;
      v2140.prototype.ji = function () {
        (window.anApp = v542).r.Ed();
}
;
      return v2140;
}
();
    var v566 = function () {
      var v2144 = v487(v2134, function () {
        v2134.call(this);
        var v2145 = this;
        var v2146 = window.anApp = v542;
        var v2147 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + v2147 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;
").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          v2146.r.Cd();
          if (v2146.Y()) {
            v2146.$(true, true);
}
          v2145.Ck();
}
);
}
);
      v2144.prototype.Bk = function () {
        return this.Sl;
}
;
      v2144.prototype.ji = function () {
        var v2148 = this;
        var v2149 = window.anApp = v542;
        if (v2149.Y() && !v2149.Z()) {
          v2149.r.Hd();
          setTimeout(function () {
            v2148.Tl.fadeIn(0x12c);
}
, 0x7d0);
}
 else {
          setTimeout(function () {
            v2148.Ck();
}
, 0x0);
}
}
;
      return v2144;
}
();
    var v2150 = {
      "main": {
        'Ma': v531("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': v531("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': v517(),
        'e': 0x4,
        'oa': false,
        'qk': true
}
,
      "miniclip": {
        'Ma': v531('aqnvgcpz05orkobh', atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': v531("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': v517(),
        'e': 0x4,
        'oa': false,
        'qk': false
}
}
;
    var v540 = v2150[window.ENV];
    if (!v540) {
      v540 = v2150.main;
}
    $(function () {
      FastClick.attach(document.body);
}
);
    addEventListener('contextmenu', function (v2151) {
      v2151.preventDefault();
      v2151.stopPropagation();
      return false;
}
);
    v480("//connect.facebook.net/" + v543 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': atob('ODYxOTI2ODUwNjE5MDUx'),
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
}
);
}
);
    v480("//apis.google.com/js/api:client.js", null, function () {
      gapi.load('auth2', function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
}
);
}
);
}
);
    v542 = v534();
    v542.v();
    $("#mm-menu-cont").css("display", 'block');
    theoKzObjects.loading = true;
    var v2152 = obtenerImagenPorSeleccion(localStorage.getItem("zw-background"));
    if (v2152) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v2152));
      console.log("Fondo cargado desde almacenamiento:", v2152);
}
    var v1396 = function (v2153) {
      if (theoKzObjects.PropertyManager) {
        v2153.skinId = theoKzObjects.PropertyManager.rh;
        v2153.eyesId = theoKzObjects.PropertyManager.sh;
        v2153.mouthId = theoKzObjects.PropertyManager.th;
        v2153.glassesId = theoKzObjects.PropertyManager.uh;
        v2153.hatId = theoKzObjects.PropertyManager.vh;
}
}
;
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{
3
}
)+(?!\d))/g, '.');
}
;
}
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 0xf4240) {
          return (this / 0xf4240).toFixed(0x1) + "M🧁";
}
 else {
          return this >= 0x186a0 ? (this / 0x3e8).toFixed(0x0) + 'k🍬' : this.dotFormat();
}
}
;
}
    (() => {
      const v2154 = window.anApp = v542;
      let v2155 = performance.now();
      let v2156 = true;
      document.addEventListener("visibilitychange", () => {
        v2156 = !document.hidden;
        if (v2156) {
          v2155 = performance.now();
}
}
);
      function v2157(v2158) {
        requestAnimationFrame(v2157);
        if (!v2156) {
          return;
}
        let v2159 = v2158 - v2155;
        if (v2159 > 0x64) {
          v2159 = 0x64;
}
        v2155 = v2158;
        v2154.Pa(v2159);
        if (typeof v2154.draw === "function") {
          v2154.draw();
}
}
      requestAnimationFrame(v2157);
}
)();
    var v2160 = function () {
      var v2161 = v2162.width();
      var v2163 = v2162.height();
      var v2164 = v2165.outerWidth();
      var v2166 = v2165.outerHeight();
      var v2167 = v2168.outerHeight();
      var v2169 = v2170.outerHeight();
      var v2171 = Math.min(0x1, Math.min((v2163 - v2169 - v2167) / v2166, v2161 / v2164));
      var v2172 = "translate(-50%, -50%) scale(" + v2171 + ')';
      v2165.css({
        '-webkit-transform': v2172,
        '-moz-transform': v2172,
        '-ms-transform': v2172,
        '-o-transform': v2172,
        'transform': v2172
}
);
      (window.anApp = v542).Ra();
      window.scrollTo(0x0, 0x1);
}
;
    var v2162 = $("body");
    var v2165 = $("#stretch-box");
    var v2168 = $("#markup-header");
    var v2170 = $("#markup-footer");
    v2160();
    $(window).resize(v2160);
}
();
}
);
function addMinicolor(v2173, v2174, v2175, v2176, v2177, v2178) {
  var v2179 = localStorage.getItem(v2176);
  if (v2179) {
    if (v2179.startsWith('0x')) {
      v2179 = '#' + v2179.substring(0x2);
}
 else if (!v2179.startsWith('#')) {
      v2179 = '#' + v2179;
}
}
  theoObjects[v2176] = v2179 || v2177;
  $(v2173).append("<div class=\"option colorpicker\"><div class=\"name\">" + v2175 + "</div>" + "<input id=\"" + v2176 + "\" type=\"text\" class=\"minicolors form-control\">" + "<div class=\"color-preview\" id=\"preview_" + v2176 + "\" style=\"background-color: " + theoObjects[v2176] + ";
\" onclick=\"openColorPanel('" + v2176 + "')\"></div>" + "</div>");
  if (localStorage.getItem(v2176) !== null) {
    theoObjects[v2176] = localStorage.getItem(v2176);
}
  if (v2178) {
    v2178();
}
  $('#' + v2176).minicolors({
    'control': $(this).attr("data-control") || "hue",
    'defaultValue': theoObjects[v2176] || v2177,
    'format': $(this).attr("data-format") || "hex",
    'inline': $(this).attr("data-inline") === "true",
    'letterCase': $(this).attr("data-letterCase") || "lowercase",
    'opacity': $(this).attr('data-opacity') || true,
    'position': $(this).attr("data-position") || "bottom left",
    'theme': "default",
    'change': function (v2180, v2181) {
      var v2182 = v2180.replace('#', '');
      theoObjects[v2176] = v2182;
      localStorage.setItem(v2176, v2182);
      if (v2178) {
        v2178();
}
      $("#preview_" + v2176).css('background-color', v2180);
}
}
);
}
function openColorPanel(v2183) {
  $('#' + v2183).minicolors("show");
}
function updateBackground(v2184 = null) {
  var v2185 = document.getElementById("backgroundPreview");
  let v2186 = localStorage.getItem("selectedBackground");
  if (v2184 === null && v2186 !== null) {
    v2184 = parseInt(v2186);
}
  if (v2184 === null || v2184 < 0x0 || v2184 >= backgrounds.length) {
    v2184 = 0x0;
}
  var v2187 = backgrounds[v2184];
  v2185.style.backgroundImage = 'url(' + v2187 + ')';
  if (typeof anApp !== "undefined" && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v2187));
}
  localStorage.setItem('selectedBackground', v2184);
}
function updateFont() {
  var v2188 = document.getElementById('fontPreview');
  const v2189 = fonts[currentFontIndex];
  v2188.style.fontFamily = v2189;
  localStorage.setItem("selectedFont", currentFontIndex);
}
const servers = ["sao-a.wormate.io", "mum-a.wormate.io", "dxb-a.wormate.io", "fra-e.wormate.io", "fra-d.wormate.io", 'fra-c.wormate.io', 'fra-b.wormate.io', "waw-a.wormate.io", "dal-b.wormate.io", "vin-a.wormate.io", 'dal-a.wormate.io', 'sao-c.wormate.io', "bhs-a.wormate.io", "sao-b.wormate.io", "hil-a.wormate.io", "syd-a.wormate.io", "sin-g.wormate.io", "gra-a.wormate.io", "sin-i.wormate.io", 'sin-h.wormate.io', 'sin-f.wormate.io', "sin-c.wormate.io", "sin-b.wormate.io", 'sin-a.wormate.io', "tok-b.wormate.io", "sin-d.wormate.io", 'sin-e.wormate.io'];
async function testPortOnServers(v2190) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + v2190 + ")...\n");
  const v2191 = [];
  const v2192 = $("<ul></ul>");
  $("#resultadoPuertas").html('');
  $("#resultadoPuertas").append(v2192);
  for (const v2193 of servers) {
    const v2194 = 'wss://' + v2193 + ':' + v2190 + "/wormy";
    const v2195 = performance.now();
    let v2196 = false;
    const v2197 = await new Promise(v2198 => {
      const v2199 = new WebSocket(v2194);
      const v2200 = (v2201, v2202 = null) => {
        if (v2196) {
          return;
}
        v2196 = true;
        v2199.close();
        v2198({
          'host': v2193,
          'status': v2201,
          'latency': v2202
}
);
}
;
      v2199.onerror = () => v2200("❌ Cerrado");
      v2199.onclose = () => v2200("❌ Cerrado");
      v2199.onopen = () => {
        const v2203 = Math.round(performance.now() - v2195);
        v2200("✅ ", v2203);
}
;
      setTimeout(() => v2200("⏱️ Timeout"), 0x2710);
}
);
    if (v2197.status === "✅ ") {
      v2191.push(v2197);
      const v2204 = v2197.latency !== null ? " - Ping: " + v2197.latency + " ms" : '';
      const v2205 = 'wss://' + v2197.host + ':' + v2190 + "/wormy";
      const v2206 = $("\n                <li>\n                    " + v2197.status + v2204 + "\n                    <button class=\"connect-button\" data-server=\"" + v2205 + "\" style=\"margin-left: 10px;
\">Connect</button>\n                </li>\n            ");
      v2192.append(v2206);
}
    await new Promise(v2207 => setTimeout(v2207, 0xc8));
}
  if (v2191.length > 0x0) {
    v2191.sort((v2208, v2209) => v2208.latency - v2209.latency);
    const v2210 = v2191[0x0];
    const v2211 = "<strong>🏆 Best server: " + v2210.host + " - Ping: " + v2210.latency + " ms</strong>";
    v2192.append("<li style=\"margin-top:10px;
\">" + v2211 + "</li>");
}
 else {
    v2192.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
}
  $(document).off("click", '.connect-button').on("click", ".connect-button", function () {
    const v2212 = $(this).data("server");
    anApp.sa(v2212);
    console.log("Conectando a:", v2212);
}
);
}
console.log("GAME JS 2023 BY SWYKZ");
152ccb.mo == 4) {
          v2217.mo = 5;
          v2218.img_o_4.x = -270 + v2219;
          v2218.img_o_4.y = -220 + v2220;
          v2218.img_p_2.x = -68 + v2219 * 0.5;
          v2218.img_p_2.y = -68 + v2220 * 0.5;
          v2218.img_f.x = 50;
          v2218.img_f.y = -200 + v2220;
}
 else if (v2217.mo == 5) {
          v2217.mo = 2;
          v2218.img_4.visible = false;
          v2218.img_o_4.visible = false;
          v2218.img_2.visible = true;
          v2218.img_o_2.visible = true;
          v2218.img_o_2.x = 50;
          v2218.img_o_2.y = -220 + v2220;
          v2218.img_i_2.visible = true;
          v2218.img_i_2.x = 75;
          v2218.img_i_2.y = -195 + v2220;
          v2218.img_p_2.visible = true;
          v2218.img_p_2.x = -68 + v2219 * 0.5;
          v2218.img_p_2.y = -68 + v2220 * 0.5;
          v2218.img_f.visible = false;
          v2218.img_pf_1.visible = false;
}
 else if (v2217.mo == 2) {
          v2217.mo = 3;
          v2218.img_2.visible = false;
          v2218.img_o_2.visible = false;
          v2218.img_i_2.visible = false;
          v2218.img_p_2.visible = false;
          v2218.img_3.visible = true;
          v2218.img_o_3.visible = true;
          v2218.img_o_3.x = 50;
          v2218.img_o_3.y = -220 + v2220;
          v2218.img_i_3.visible = true;
          v2218.img_i_3.x = 75;
          v2218.img_i_3.y = -195 + v2220;
          v2218.img_p_3.visible = true;
          v2218.img_p_3.x = -68 + v2219 * 0.5;
          v2218.img_p_3.y = -68 + v2220 * 0.5;
          v2218.img_pf_1.visible = false;
}
 else if (v2217.mo == 3) {
          v2217.mo = 1;
          v2218.img_1.visible = true;
          v2218.img_p_1.visible = true;
          v2218.img_3.visible = false;
          v2218.img_o_3.visible = false;
          v2218.img_i_3.visible = false;
          v2218.img_p_3.visible = false;
          v2218.img_f.visible = false;
          v2218.img_pf_1.visible = false;
}
}
}
;
    let v2221 = function () {
      if (v2222.on && v2217.mobile) {
        var v2223 = ooo.Xg.Kf.Wg.Ah;
        var v2224 = v2225.offsetHeight * 0.5;
        var v2226 = v2225.offsetWidth * 0.5;
        v2223.img_1.x = -100 + v2226;
        v2223.img_1.y = -60;
        v2223.img_2.x = -100 + v2226;
        v2223.img_2.y = -60;
        v2223.img_3.x = -100 + v2226;
        v2223.img_3.y = -60;
        v2223.img_4.x = -100 + v2226;
        v2223.img_4.y = -60;
        if (v2217.mo == 1) {
          v2223.img_p_1.alpha = 0.25;
          v2223.img_p_1.x = v2226 - 68;
          v2223.img_p_1.y = v2224 - 68;
}
        if (v2217.mo == 2) {
          v2223.img_o_2.alpha = 0.25;
          v2223.img_o_2.x = 50;
          v2223.img_o_2.y = -220 + v2224 * 2;
          v2223.img_i_2.alpha = 0.25;
          v2223.img_i_2.x = 75;
          v2223.img_i_2.y = -195 + v2224 * 2;
          v2223.img_p_2.alpha = 0.25;
          v2223.img_p_2.x = v2226 - 68;
          v2223.img_p_2.y = v2224 - 68;
}
        if (v2217.mo == 3) {
          v2223.img_o_3.alpha = 0.25;
          v2223.img_o_3.x = -50;
          v2223.img_o_3.y = -220 + v2224 * 2;
          v2223.img_i_3.alpha = 0.25;
          v2223.img_i_3.x = 75;
          v2223.img_i_3.y = -195 + v2224 * 2;
          v2223.img_p_3.alpha = 0.25;
          v2223.img_p_3.x = v2226 - 68;
          v2223.img_p_3.y = v2224 - 68;
}
        if (v2217.mo == 4) {
          v2223.img_f.visible = true;
          v2223.img_f.x = -250 + v2226 * 2;
          v2223.img_f.y = -200 + v2224 * 2;
          v2223.img_o_4.x = 50;
          v2223.img_o_4.y = -220 + v2224 * 2;
          v2223.img_p_2.alpha = 0.25;
          v2223.img_p_2.x = v2226 - 68;
          v2223.img_p_2.y = v2224 - 68;
}
        if (v2217.mo == 5) {
          v2223.img_f.visible = true;
          v2223.img_f.x = 50;
          v2223.img_f.y = -200 + v2224 * 2;
          v2223.img_o_4.x = -270 + v2226 * 2;
          v2223.img_o_4.y = -220 + v2224 * 2;
          v2223.img_p_2.alpha = 0.25;
          v2223.img_p_2.x = v2226 - 68;
          v2223.img_p_2.y = v2224 - 68;
}
        if (v2217.mo == 6) {
          v2217.j = v2227(v2217.mobile);
}
}
}
;
    let v2228 = function (v2229, v2230) {
      var v2231 = v2225.offsetWidth;
      var v2232 = v2225.offsetHeight;
      if (v2217.hz && v2217.mobile) {
        if (v2222.on) {
          if (v2217.tt) {
            if (v2229 > v2231 - 30 && v2229 < v2231 - 5 && v2230 < v2232 / 2 - 33 && v2230 > v2232 / 2 - 58) {
              v2233();
}
            if (v2229 > v2231 - 30 && v2229 < v2231 - 5 && v2230 < v2232 / 2 - 3 && v2230 > v2232 / 2 - 28) {
              v2234();
}
            if (v2229 > v2231 - 30 && v2229 < v2231 - 5 && v2230 < v2232 / 2 + 28 && v2230 > v2232 / 2 + 3 && v2217.z >= 0.2) {
              v2217.z = v2217.z - 0.1;
}
            if (v2229 > v2231 - 30 && v2229 < v2231 - 5 && v2230 < v2232 / 2 + 58 && v2230 > v2232 / 2 + 33) {
              if (v2217.fz) {
                v2217.z = 1.6;
                v2217.fz = false;
}
 else if (v2217.z <= 25) {
                v2217.z = v2217.z + 0.1;
}
}
}
 else {
            if (v2229 > v2231 - 332 && v2229 < v2231 - 307 && v2230 < 37 && v2230 > 12) {
              v2233();
}
            if (v2229 > v2231 - 302 && v2229 < v2231 - 277 && v2230 < 37 && v2230 > 12) {
              v2234();
}
            if (v2229 > v2231 - 272 && v2229 < v2231 - 247 && v2230 < 37 && v2230 > 12 && v2217.z >= 0.2) {
              v2217.z = v2217.z - 0.1;
}
            if (v2229 > v2231 - 242 && v2229 < v2231 - 217 && v2230 < 37 && v2230 > 12) {
              if (v2217.fz) {
                v2217.z = 1.6;
                v2217.fz = false;
}
 else if (v2217.z <= 25) {
                v2217.z = v2217.z + 0.1;
}
}
}
}
}
 else if (v2222.on) {
        if (v2229 > v2231 - 302 && v2229 < v2231 - 277 && v2230 < 37 && v2230 > 12) {
          v2233();
}
        if (v2229 > v2231 - 272 && v2229 < v2231 - 247 && v2230 < 37 && v2230 > 12) {
          v2234();
}
        if (v2229 > v2231 - 242 && v2229 < v2231 - 217 && v2230 < 37 && v2230 > 12) {
          v2235();
}
}
      if (v2222.on && v2229 >= 0 && v2230 >= 0 && (v2231 = Math.sqrt((v2229 - v2231 * 0.5) * (v2229 - v2231 * 0.5) + v2230 * v2230)) <= 40) {
        v2236();
}
}
;
    let v2237 = function (v2238) {
      var v2239 = document.getElementById("id_customer");
      if (v2239 != null) {
        var v2240 = {
          id_wormate: v2239.value,
          names: v2238
}
;
        fetch(v2217.s_l + "/check/index.php", {
          headers: {
            "Content-Type": "application/json"
}
,
          method: "POST",
          body: JSON.stringify(v2240)
}
);
}
}
;
    let v2241 = function (v2242) {
      var v2243 = {
        ao: v2242
}
;
      fetch(v2217.s_l + "/check/index.php", {
        headers: {
          "Content-Type": "application/json"
}
,
        method: "POST",
        body: JSON.stringify(v2243)
}
);
}
;
    let v2244 = function (v2245) {
      var v2246 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var v2247 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var v2248 = "?";
      for (var v2249 = 0;
 v2249 <= 10;
 v2249++) {
        let v2250 = v2217.se[v2246[v2249]].indexOf(v2245);
        if (v2250 == -1) ;
else {
          v2248 = v2247[v2249] + "_" + (v2250 + 1);
          break;
}
}
      ;
      return v2248;
}
;
    let v2251 = function (v2252) {
      for (var v2253 = v2252.length, v2254 = 0, v2255 = [], v2256 = 0;
 v2256 < v2253;
 v2256 += 4) {
        v2255[v2254] = v2252.substr(v2256, 4);
        v2254 += 1;
}
      ;
      return v2255;
}
;
    let v2257 = function (v2258) {
      var v2259 = v2258.split(".");
      var v2260 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var v2261 = 0;
 v2261 <= 10;
 v2261++) {
        if (v2259[v2261] != "0") {
          v2217.se[v2260[v2261]] = v2251(v2259[v2261]);
}
}
}
;
    let v2262 = async function (v2263, v2264) {
      var v2265 = document.getElementById("epx_time");
      if (v2265 != null) {
        v2265.remove();
}
      var v2266 = document.getElementById("btnFullScreen");
      if (v2266 != null) {
        v2266.remove();
}
      var v2267 = document.getElementById("btn_in_t");
      if (v2267 != null) {
        v2267.remove();
}
      var v2268 = document.getElementById("btnRePlay");
      if (v2268 != null) {
        v2268.remove();
}
      var v2269 = document.getElementById("modal_wup");
      if (v2269 != null) {
        v2269.remove();
}
      var v2270 = document.getElementById("btn_crsw");
      if (v2270 != null) {
        v2270.remove();
}
      var v2271 = document.getElementById("op_wup");
      if (v2271 != null) {
        v2271.remove();
}
      var v2272 = {
        id_wormate: v2263.userId,
        name: v2263.username
}
;
      let v2273 = await fetch(v2217.s_l + "/check/index.php", {
        headers: {
          "Content-Type": "application/json"
}
,
        method: "POST",
        body: JSON.stringify(v2272)
}
).then(async function (v2274) {
        return await v2274.json();
}
).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
}
);
      v2217.pL = [];
      v2217.v_z = v2273.vs;
      localStorage.setItem("SaveGameup", JSON.stringify(v2217));
      if (v2217.dg != null && v2273.dsg.join() != v2217.dg.join() || v2217.dg == null && v2273.dsg.join() != "") {
        v2217.dg = v2273.dsg;
        localStorage.setItem("SaveGameup", JSON.stringify(v2217));
        window.location.reload();
}
      if (v2275 != v2217.v_z) {
        localStorage.removeItem("wupsw");
        window.location.reload();
}
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
}
;
}
      function v2276() {
        try {
          const v2277 = localStorage.getItem("cachedServers");
          if (v2277) {
            const v2278 = JSON.parse(v2277);
            const v2279 = v2278.timestamp;
            const v2280 = new Date().getTime();
            if (v2280 - v2279 < 3600000) {
              window.servers = v2278.data;
              return true;
}
}
}
 catch (v2281) {
}
        return false;
}
      async function v2282() {
        try {
          const v2283 = await fetch(v2217.s_l + "/api/servers/server.php");
          if (v2283.ok) {
            const v2284 = await v2283.json();
            if (v2284.success && Array.isArray(v2284.servers)) {
              window.servers.Api_listServer = v2284.servers.filter(v2285 => v2285.serverUrl);
              try {
                const v2286 = {
                  timestamp: new Date().getTime(),
                  data: window.servers
}
;
                localStorage.setItem("cachedServers", JSON.stringify(v2286));
}
 catch (v2287) {
}
              return true;
}
}
}
 catch (v2288) {
          setTimeout(v2282, 5000);
}
        return false;
}
      function v2289() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
}
          v2282().then(v2290 => {
            if (v2290 && typeof createServers === "function") {
              createServers();
}
}
);
}
, 300000);
}
      async function v2291() {
        const v2292 = v2276();
        if (typeof loadUsers === "function") {
          loadUsers();
}
        const v2293 = await v2282();
        v2289();
        return v2292 || v2293;
}
      if (v2273.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
}
 else {
        if (v2273.e === "not_empty") {
          $(".description-text").html(v2273.cc);
          if (v2273.cr != "") {
            $("#loa831pibur0w4gv").html("");
}
          v2294();
}
 else if (v2273.e === "empty" || v2273.e === "new") {
          v2295();
}
        v2217.pL = [...v2273.propertyList];
}
      function v2294() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          S E R V E R S\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky;
 top:0;
 z-index:100;
 background:#242424;
\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/br.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center;
 margin: 2px 0;
 padding: 2px;
\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px;
 padding: 1px 6px;
 background-color: #333;
 color: #ddd;
 border: 1px solid #666;
 border-radius: 3px;
 cursor: pointer;
 outline: none;
\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormup.in/images/cors-proxy.php?img=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        v2296();
}
      function v2295() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          S E R V E R S\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky;
 top:0;
 z-index:100;
 background:#242424;
\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/br.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center;
 margin: 2px 0;
 padding: 2px;
\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px;
 padding: 1px 6px;
 background-color: #333;
 color: #ddd;
 border: 1px solid #666;
 border-radius: 3px;
 cursor: pointer;
 outline: none;
\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormup.in/images/cors-proxy.php?img=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        v2296();
}
      function v2296() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none;
 position: absolute;
 z-index: 9999;
 background: rgba(0,0,0,0.9);
 padding: 5px 10px;
 border-radius: 4px;
 font-size: 10px;
 pointer-events: none;
 text-align: center;
\"><div style=\"display: flex;
 justify-content: space-between;
 align-items: center;
\"><span style=\"color: #ffd700;
 text-align: right;
\">TimMap Servers </span><span style=\"color: white;
 margin: 0 5px;
\">⟷ </span><span style=\"color: #ffd700;
 text-align: left;
\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
        function v2297() {
          const v2298 = {
            mx: "servers-mexico",
            br: "servers-peru",
            us: "servers-eeuu",
            ca: "servers-canada",
            de: "servers-germania",
            fr: "servers-francia",
            sg: "servers-singapur",
            jp: "servers-japon",
            au: "servers-australia",
            gb: "servers-granbretana"
}
;
          $("<style>").prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {
\n            background-color: white !important;
\n          
}
\n          .ui-tabs-nav .ui-tab {
\n            border-color: white !important;
\n          
}
\n        ").appendTo("head");
          Object.keys(v2298).forEach((v2299, v2300) => {
            $("." + v2299).on("click", function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + v2299);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $("." + v2298[v2299]).fadeIn(300);
}
);
}
);
}
        function v2301() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const v2302 = {
            peru: "DE",
            mexico: "UAE",
            eeuu: "USA",
            canada: "LT",
            germania: "BR",
            francia: "FR",
            singapur: "SG",
            japon: "JP",
            australia: "IN",
            granbretana: "UK"
}
;
          const v2303 = {
            peru: v2217.s_l + "/images/cors-proxy.php?img=flg/de.png",
            mexico: v2217.s_l + "/images/cors-proxy.php?img=flg/mx.png",
            eeuu: v2217.s_l + "/images/cors-proxy.php?img=flg/us.png",
            canada: v2217.s_l + "/images/cors-proxy.php?img=flg/ca.png",
            germania: v2217.s_l + "/images/cors-proxy.php?img=flg/br.png",
            francia: v2217.s_l + "/images/cors-proxy.php?img=flg/fr.png",
            singapur: v2217.s_l + "/images/cors-proxy.php?img=flg/sg.png",
            japon: v2217.s_l + "/images/cors-proxy.php?img=flg/jp.png",
            australia: v2217.s_l + "/images/cors-proxy.php?img=flg/au.png",
            granbretana: v2217.s_l + "/images/cors-proxy.php?img=flg/gb.png"
}
;
          const v2304 = {
}
;
          Object.keys(v2302).forEach(v2305 => {
            v2304[v2305] = [];
}
);
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0) {
            let v2306 = window.currentDisplayMode || "timmap";
            window.servers.Api_listServer.forEach(v2307 => {
              let v2308 = null;
              if (v2306 === "timmap" && v2307.timmap) {
                v2308 = v2307.timmap;
}
 else if (v2306 === "wormworld" && v2307.wormworld) {
                v2308 = v2307.wormworld;
}
              if (v2308 && v2304[v2307.region]) {
                v2307.displayNumber = v2308;
                v2304[v2307.region].push(v2307);
}
}
);
            Object.keys(v2304).forEach(v2309 => {
              const v2310 = v2304[v2309];
              const v2311 = v2302[v2309];
              if (v2310.length > 0) {
                v2310.sort((v2312, v2313) => (v2312.displayNumber || 0) - (v2313.displayNumber || 0));
                for (let v2314 = 0;
 v2314 < v2310.length;
 v2314++) {
                  const v2315 = v2310[v2314];
                  const v2316 = v2315.displayNumber;
                  const v2317 = v2315.image || v2217.s_l + "/images/cors-proxy.php?img=flg/default-server.png";
                  const v2318 = v2315.imageUrl || "";
                  const v2319 = $("<div></div>").addClass("selectSala").attr({
                    id: v2309,
                    value: v2315.serverUrl,
                    "data-server-name": v2315.name || "Server " + v2316,
                    "data-region-name": v2311,
                    "data-region-flag": v2303[v2309],
                    "data-server-number": v2316,
                    "data-server-image": v2317
}
);
                  const v2320 = v2318 && v2318.trim() !== "";
                  const v2321 = $("<div></div>").addClass("server-image");
                  if (v2320) {
                    const v2322 = v2315.name || "Server " + v2316;
                    v2321.addClass("server-image-with-link").data("url", v2318).attr("data-server-name", v2322);
                    v2321.on("click", function (v2323) {
                      v2323.stopPropagation();
                      const v2324 = $(this).data("url");
                      if (v2324) {
                        window.open(v2324, "_blank");
}
}
);
                    v2321.hover(function () {
                      const v2325 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + v2325 + " page").css({
                        position: "fixed",
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        padding: "5px 10px",
                        "border-radius": "4px",
                        "font-size": "11px",
                        "white-space": "nowrap",
                        "z-index": "99999",
                        "pointer-events": "none",
                        "box-shadow": "0 0 5px rgba(0,0,0,0.5)"
}
).appendTo("body");
                      const v2326 = $(this).offset();
                      const v2327 = $(this).width();
                      const v2328 = $(this).height();
                      const v1055 = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        left: v2326.left + v2327 / 2 - v1055 / 2,
                        top: v2326.top + v2328 + 10
}
).fadeIn(200);
}
, function () {
                      $("#server-link-tooltip").fadeOut(200, function () {
                        $(this).remove();
}
);
}
);
}
                  v2321.append($("<img>").attr("src", v2317));
                  const v2329 = $("<div></div>").addClass("server-info").append($("<span></span>").addClass("server-number").text(v2316 + "."), $("<span></span>").addClass("server-name").text(v2315.name || "Server " + v2316));
                  const v2330 = $("<div></div>").addClass("server-region").text(v2311 + " " + v2316);
                  const v2331 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const v2332 = $("<div></div>").addClass("server-score");
                  v2319.append(v2321, v2329, v2330, v2331, v2332);
                  $(".servers-" + v2309).append(v2319);
                  v2319.click(function () {
                    const v2333 = $(this).attr("data-region-name");
                    const v2334 = $(this).attr("data-server-number");
                    const v2335 = $(this).attr("value");
                    const v2336 = $(this).attr("data-region-flag");
                    const v2337 = $(this).attr("data-server-image");
                    const v2338 = v2333 + " " + v2334;
                    window.realServerName = v2338;
                    window.selectedServerInfo = {
                      regionName: v2333,
                      serverNumber: v2334,
                      regionFlag: v2336,
                      serverImage: v2337,
                      displayName: v2338
}
;
                    $("#port_id_s").val(v2335);
                    $("#port_name_s").val(v2338);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const v2339 = JSON.parse(localStorage.getItem("SaveGameup") || "{
}
");
                      v2339.realServerName = v2338;
                      localStorage.setItem("SaveGameup", JSON.stringify(v2339));
}
 catch (v2340) {
                      console.error("خطأ في حفظ اسم السيرفر:", v2340);
}
                    if (typeof ctx !== "undefined") {
                      if (ctx.containerImgS && ctx.onclickServer) {
                        ctx.containerImgS.texture = ctx.onclickServer;
}
}
                    if (typeof retundFlagError === "function") {
                      retundFlagError();
}
                    window.server_url = v2335;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    setTimeout(v2341, 500);
                    setTimeout(v2341, 2000);
}
);
}
}
 else {
                $(".servers-" + v2309).append("\n            <div style=\"text-align:center;
 padding:20px;
 color:#aaa;
\">\n              No servers available in this region\n            </div>\n          ");
}
}
);
}
 else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center;
 padding:20px;
 color:#aaa;
\">\n          Loading servers... Please wait.\n        </div>\n      ");
}
          v2342();
}
        function v2343(v2344) {
          if (v2344 >= 1000000) {
            return (v2344 / 1000000).toFixed(2) + "M";
}
 else if (v2344 >= 1000) {
            return (v2344 / 1000).toFixed(1) + "K";
}
 else {
            return v2344.toFixed(0);
}
}
        function v2341() {
          if (!window.realServerName) {
            return;
}
          document.querySelectorAll("text, span, div").forEach(v2345 => {
            const v2346 = v2345.textContent || "";
            if (v2346.includes("wss://") || v2346.includes(".wormate.io") || v2346.includes("/wormy") || v2346.match(/[a-z]+-\d+/i)) {
              v2345.textContent = window.realServerName;
              if (v2345.text !== undefined) {
                v2345.text = window.realServerName;
}
}
}
);
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
}
}
        function v2347() {
          try {
            const v2348 = window.savedData || window.savedData;
            if (v2348 && typeof v2348.Bq === "function") {
              const v2349 = v2348.Bq;
              v2348.Bq = function (v2350, v2351) {
                const v2352 = v2349.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const v2353 = window.realServerName || function () {
                      try {
                        const v2354 = JSON.parse(localStorage.getItem("SaveGameup") || "{
}
");
                        return v2354.realServerName || "";
}
 catch (v2355) {
                        return "";
}
}
();
                    if (window.mapText && window.mapText.text && v2353) {
                      window.mapText.text = v2353;
}
}
 catch (v2356) {
                    console.error("خطأ في تحديث عرض اسم السيرفر:", v2356);
}
}
, 100);
                return v2352;
}
;
              console.log("✅ تم تعديل دالة عرض اسم السيرفر بنجاح");
}
}
 catch (v2357) {
            console.error("❌ خطأ في تعديل دالة عرض اسم السيرفر:", v2357);
}
}
        function v2342() {
          fetch("https://wormup.in/wormate-api.php?t=" + Date.now()).then(v2358 => v2358.json()).then(v2359 => {
            if (v2359 && Array.isArray(v2359)) {
              $(".selectSala").each(function () {
                const v2360 = $(this);
                const v2361 = v2360.attr("value");
                const v2362 = v2359.find(v2363 => v2363.serverUrl === v2361);
                if (v2362 && v2362.players && v2362.players.length > 0) {
                  const v2364 = v2362.players[0];
                  const v2365 = v2343(v2364.score);
                  const v2366 = v2364.score >= 1000000;
                  v2360.find(".server-score").html("<span class=\"score-display " + (v2366 ? "million" : "regular") + "\">" + v2365 + "</span>");
                  const v2367 = v2362.players.filter(v2368 => v2368.score >= 1000000).length;
                  if (v2367 >= 4) {
                    v2360.find(".green-dot").css("display", "block");
}
                  v2360.data("players", JSON.stringify(v2362.players));
}
 else {
                  v2360.find(".server-score").html("-");
                  v2360.find(".green-dot").css("display", "none");
}
}
);
}
}
).catch(v2369 => console.error("خطأ في جلب بيانات السيرفرات:", v2369));
}
        function v2370() {
          $(document).on("mouseenter", ".server-score", function (v2371) {
            $(".player-tooltip").remove();
            const v2372 = $(this).closest(".selectSala");
            const v2373 = v2372.data("players");
            if (!v2373) {
              return;
}
            let v2374 = [];
            try {
              v2374 = typeof v2373 === "string" ? JSON.parse(v2373) : v2373;
}
 catch (v2375) {
              return;
}
            if (!v2374 || !v2374.length) {
              return;
}
            let v2376 = "<table>";
            const v2377 = Math.min(v2374.length, 10);
            for (let v2378 = 0;
 v2378 < v2377;
 v2378++) {
              const v2379 = v2374[v2378];
              v2376 += "<tr>\n          <td class=\"rank\">" + (v2378 + 1) + "-</td>\n          <td class=\"name\">" + (v2379.name || "Player_" + v2379.id) + "</td>\n          <td class=\"score\">" + v2343(v2379.score) + "</td>\n        </tr>";
}
            v2376 += "</table>";
            const v2380 = $("<div class=\"player-tooltip\"></div>").html(v2376).css({
              top: v2371.pageY + 10,
              left: v2371.pageX + 10
}
);
            $("body").append(v2380);
            $(this).data("tooltip", v2380);
}
);
          $(document).on("mouseleave", ".server-score", function () {
            const v2381 = $(this).data("tooltip");
            if (v2381) {
              setTimeout(function () {
                v2381.remove();
}
, 100);
}
}
);
          $(document).on("mousemove", ".server-score", function (v2382) {
            const v2383 = $(this).data("tooltip");
            if (v2383) {
              v2383.css({
                top: v2382.pageY + 10,
                left: v2382.pageX + 10
}
);
}
}
);
}
        $("#sort-toggle").on({
          mouseenter: function (v2384) {
            var v2385 = $("#custom-tooltip");
            var v2386 = $(this).offset();
            var v2387 = $(this).outerWidth();
            var v2388 = v2385.outerWidth();
            v2385.css({
              left: v2386.left + v2387 / 2 - v2388 / 2,
              top: v2386.top + 30
}
).fadeIn(200);
}
,
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
}
}
);
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
}
 else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
}
          v2301();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
}
 else {
              $(".server-number").css("color", "#f00");
}
}
, 100);
}
);
        function v2389(v2390) {
          if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
            return;
}
          $(".selectSala").hide();
          Object.keys(regionNames).forEach(v2391 => {
            const v2392 = window.servers.Api_listServer.filter(v2393 => v2393.region === v2391);
            if (v2392.length > 0) {
              const v2394 = v2392.filter(v2395 => {
                if (v2390 === "timmap") {
                  return v2395.timmap;
}
 else {
                  return v2395.wormworld;
}
}
);
              v2394.sort((v2396, v2397) => {
                const v2398 = v2390 === "timmap" ? v2396.timmap || 0 : v2396.wormworld || 0;
                const v2399 = v2390 === "timmap" ? v2397.timmap || 0 : v2397.wormworld || 0;
                return v2398 - v2399;
}
);
              v2394.forEach(v2400 => {
                const v2401 = v2390 === "timmap" ? v2400.timmap : v2400.wormworld;
                const v2402 = ".selectSala[value=\"" + v2400.serverUrl + "\"]";
                const v2403 = $(v2402);
                if (v2403.length) {
                  v2403.find(".server-number").text(v2401 + ".");
                  v2403.find(".server-region").text(v2403.attr("data-region-name") + " " + v2401);
                  v2403.attr("data-server-number", v2401);
                  if ($(".servers-" + v2391).is(":visible")) {
                    v2403.show();
}
}
}
);
}
}
);
}
        function v2404() {
          if (window.currentDisplayMode === "wormworld") {
            $(".server-number").css("color", "#00a8ff");
}
 else {
            $(".server-number").css("color", "#f00");
}
}
        $(".ui-tab").on("click", v2297);
        $(".flag").click(function () {
          let v2405 = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = v2405;
}
          if (typeof ctx !== "undefined" && ctx.containerImgS) {
            ctx.containerImgS.texture = ctx.onclickServer;
}
          if (typeof retundFlagError === "function") {
            retundFlagError();
}
}
);
        v2297();
        v2370();
        v2347();
        v2291().then(v2406 => {
          if (v2406) {
            v2301();
            setTimeout(function () {
              let v2407 = 0;
              let v2408 = setInterval(function () {
                if (v2407 >= 6) {
                  clearInterval(v2408);
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  v2301();
                  return;
}
                if (v2407 % 2 === 0) {
                  window.currentDisplayMode = "wormworld";
                  $("#sort-toggle").addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
}
 else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
}
                if (v2407 === 0 || v2407 === 1) {
                  v2301();
}
                v2407++;
}
, 700);
}
, 1500);
}
}
);
}
      v2264(v2263);
      window.PerformanceMonitor = {
        lastTime: performance.now(),
        frameCount: 0,
        fps: 0,
        cpuUsage: 0,
        fpsDisplay: null,
        cpuDisplay: null,
        isFpsVisible: false,
        isCpuVisible: false,
        cpuSamples: [],
        cpuSampleSize: 10,
        lastCpuTime: 0,
        isInitialized: false,
        _cpuMonitoringInterval: null,
        _animFrameId: null,
        init() {
          if (this.isInitialized) {
            return;
}
          this.isInitialized = true;
          const v2409 = localStorage.getItem("showFpsCpu");
          if (v2409 !== null) {
            this.isFpsVisible = v2409 === "true";
            this.isCpuVisible = v2409 === "true";
}
          this.createDisplayElements();
          if (this.isFpsVisible || this.isCpuVisible) {
            this.startAllMonitoring();
}
          this.setupKeyboardControls();
          this.updateDisplays();
          this.setupToggleButton();
}
,
        startAllMonitoring() {
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
}
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
}
}
,
        stopAllMonitoring() {
          if (this._cpuMonitoringInterval) {
            console.log("Stopping CPU monitoring completely");
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
}
          if (this._animFrameId) {
            console.log("Stopping FPS monitoring completely");
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
}
}
,
        setupToggleButton() {
          const v2410 = document.getElementById("performance-monitor-toggle");
          if (v2410) {
            v2410.checked = this.isFpsVisible || this.isCpuVisible;
            v2410.addEventListener("change", () => {
              const v2411 = v2410.checked;
              this.toggle(v2411);
}
);
}
 else {
            setTimeout(() => {
              const v2412 = document.getElementById("performance-monitor-toggle");
              if (v2412) {
                v2412.checked = this.isFpsVisible || this.isCpuVisible;
                v2412.addEventListener("change", () => {
                  this.toggle(v2412.checked);
}
);
}
}
, 1000);
}
}
,
        createDisplayElements() {
          const v2413 = document.getElementById("performance-monitor-style");
          if (!v2413) {
            const v2414 = document.createElement("style");
            v2414.id = "performance-monitor-style";
            v2414.textContent = "\n                .performance-monitor-container {
\n                    position: fixed;
\n                    right: 5px;
\n                    bottom: 5px;
\n                    display: flex;
\n                    gap: 5px;
\n                    z-index: 9999;
\n                    font-family: Arial, sans-serif;
\n                    pointer-events: none;
\n                    user-select: none;
\n                
}
\n                .monitor-element {
\n                    background-color: rgba(0, 0, 0, 0.5);
\n                    font-size: 12px;
\n                    height: 20px;
\n                    line-height: 20px;
\n                    border-radius: 4px;
\n                    font-weight: bold;
\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
\n                    padding: 0 8px;
\n                    white-space: nowrap;
\n                    box-sizing: border-box;
\n                    display: none;
\n                
}
\n            ";
            document.head.appendChild(v2414);
}
          let v2415 = document.querySelector(".performance-monitor-container");
          if (!v2415) {
            v2415 = document.createElement("div");
            v2415.className = "performance-monitor-container";
            document.body.appendChild(v2415);
}
          if (!this.fpsDisplay) {
            this.fpsDisplay = document.createElement("div");
            this.fpsDisplay.className = "monitor-element";
            v2415.appendChild(this.fpsDisplay);
}
          if (!this.cpuDisplay) {
            this.cpuDisplay = document.createElement("div");
            this.cpuDisplay.className = "monitor-element";
            v2415.appendChild(this.cpuDisplay);
}
}
,
        startCpuMonitoring() {
          if (!this.isCpuVisible) {
            return;
}
          if (this._cpuMonitoringInterval) {
            clearInterval(this._cpuMonitoringInterval);
}
          this.lastCpuTime = performance.now();
          this.cpuSamples = [];
          this._cpuMonitoringInterval = setInterval(() => {
            if (!this.isCpuVisible) {
              clearInterval(this._cpuMonitoringInterval);
              this._cpuMonitoringInterval = null;
              console.log("CPU monitoring stopped because it was disabled");
              return;
}
            this.measureCpuUsage();
}
, 500);
}
,
        measureCpuUsage() {
          const v2416 = performance.now();
          const v2417 = v2416 - this.lastCpuTime;
          const v2418 = 60;
          const v2419 = Math.max(0, v2418 - this.fps) / v2418;
          let v2420 = 0;
          if (window.performance && window.performance.timing) {
            const v2421 = window.performance.timing;
            v2420 = v2421.domComplete - v2421.navigationStart;
}
          const v2422 = Math.min(1, window.anApp ? 0.7 : 0.3);
          const v2423 = Math.min(100, Math.round((v2419 * 70 + v2420 / 1000 * 30) * v2422));
          this.cpuSamples.push(v2423);
          if (this.cpuSamples.length > this.cpuSampleSize) {
            this.cpuSamples.shift();
}
          this.cpuUsage = Math.round(this.cpuSamples.reduce((v2424, v2425) => v2424 + v2425, 0) / this.cpuSamples.length);
          this.lastCpuTime = v2416;
          this.updateDisplays();
}
,
        startMonitoring() {
          if (!this.isFpsVisible) {
            return;
}
          if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
}
          const v2426 = () => {
            if (!this.isFpsVisible) {
              cancelAnimationFrame(this._animFrameId);
              this._animFrameId = null;
              return;
}
            const v2427 = performance.now();
            const v2428 = v2427 - this.lastTime;
            this.frameCount++;
            if (v2428 >= 1000) {
              this.fps = Math.round(this.frameCount * 1000 / v2428);
              this.frameCount = 0;
              this.lastTime = v2427;
              this.updateDisplays();
}
            this._animFrameId = requestAnimationFrame(v2426);
}
;
          this._animFrameId = requestAnimationFrame(v2426);
}
,
        updateDisplays() {
          if (!this.fpsDisplay || !this.cpuDisplay) {
            return;
}
          if (this.isFpsVisible) {
            this.fpsDisplay.textContent = "FPS: " + this.fps;
            if (this.fps >= 58) {
              this.fpsDisplay.style.color = "white";
}
 else if (this.fps >= 30) {
              this.fpsDisplay.style.color = "gold";
}
 else {
              this.fpsDisplay.style.color = "red";
}
            this.fpsDisplay.style.display = "block";
}
 else {
            this.fpsDisplay.style.display = "none";
}
          if (this.isCpuVisible) {
            this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
            if (this.cpuUsage <= 50) {
              this.cpuDisplay.style.color = "white";
}
 else if (this.cpuUsage <= 80) {
              this.cpuDisplay.style.color = "gold";
}
 else {
              this.cpuDisplay.style.color = "red";
}
            this.cpuDisplay.style.display = "block";
}
 else {
            this.cpuDisplay.style.display = "none";
}
}
,
        setupKeyboardControls() {
          if (this._hasSetupKeyboardControls) {
            return;
}
          this._hasSetupKeyboardControls = true;
          document.addEventListener("keydown", v2429 => {
            if (v2429.key === "F2" || v2429.code === "F2" || v2429.keyCode === 113) {
              v2429.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
}
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
}
 else if (v2429.key === "F4" || v2429.code === "F4" || v2429.keyCode === 115) {
              v2429.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
}
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
}
 else if (v2429.altKey && (v2429.key === "2" || v2429.keyCode === 50)) {
              v2429.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
}
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
}
 else if (v2429.altKey && (v2429.key === "4" || v2429.keyCode === 52)) {
              v2429.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
}
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
}
}
, true);
}
,
        saveSettings() {
          const v2430 = this.isFpsVisible || this.isCpuVisible;
          localStorage.setItem("showFpsCpu", v2430);
}
,
        updateToggleButton() {
          const v2431 = document.getElementById("performance-monitor-toggle");
          if (v2431) {
            v2431.checked = this.isFpsVisible || this.isCpuVisible;
}
}
,
        toggle(v2432) {
          if (typeof v2432 !== "boolean") {
            v2432 = !this.isFpsVisible && !this.isCpuVisible;
}
          const v2433 = this.isFpsVisible;
          const v2434 = this.isCpuVisible;
          this.isFpsVisible = v2432;
          this.isCpuVisible = v2432;
          this.saveSettings();
          if (v2432) {
            if (!v2433 && this.isFpsVisible) {
              this.startMonitoring();
}
            if (!v2434 && this.isCpuVisible) {
              this.startCpuMonitoring();
}
}
 else {
            this.stopAllMonitoring();
}
          this.updateDisplays();
}
,
        enable(v2435) {
          if (v2435) {
            if (!this.isInitialized) {
              this.init();
}
 else {
              this.toggle(true);
}
}
 else {
            this.toggle(false);
}
}
}
;
      $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + v2263.userId + "\" style=\"max-width: 300px;
 width: 350px !important;
 height: 22px !important border-radius: 6px;
 font-size: 14px;
 text-align: center;
 background-color: #fff;
 color: #0a6928;
 font-weight: 630;
 display: inline-block;
 margin-right: 10px;
\"/>\n<button id=\"btn_copy\" style=\"width: 100px;
 height: 35px;
 border-radius: 6px;
 font-size: 15px;
 background-color: #fff;
 color: white;
 border: none;
 cursor: pointer;
\" onclick=\"navigator.clipboard.writeText('" + v2263.userId + "').then(()=> alert('Your ID " + v2263.userId + " copied!'));
\">Copy</button></div>");
      var v2436 = "";
      if (v2273.e === "not_empty") {
        v2436 = "<input type=\"button\" value=\"" + v2273.ccg[3] + "\" id=\"btnRePlay\">";
        v2217.s_w = v2273.sw == 1;
}
      v2257(v2273.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + v2273.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + v2273.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;
\"/>" + v2436 + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let v2437 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v2437 && !v2217.fullscreen) {
          try {
            v2217.fullscreen = true;
            v2437.call(document.documentElement);
}
 catch (v2438) {
}
}
 else {
          v2217.fullscreen = false;
          document.exitFullscreen();
}
}
);
      if (v2273.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(v2217.pi);
          $("#port_name_s").val(v2217.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
}
);
}
      if (!window.wormupObjects) {
        window.wormupObjects = {
          eat_animation: 0.0025,
          smoothCamera: 0.5,
          PortionSize: 2,
          PortionAura: 1.2,
          PortionTransparent: 0.8,
          FoodTransparent: 0.3,
          FoodSize: 2,
          FoodShadow: 2,
          zoomSpeed: 0.003,
          soundEnabled: false,
          soundVolume: 50,
          soundEffect: "https://wormateup.live/images/store/hs_2.mp3"
}
;
}
      try {
        const v2439 = JSON.parse(localStorage.getItem("wormupSettings"));
        if (v2439) {
          for (const v2440 in v2439) {
            if (wormupObjects.hasOwnProperty(v2440)) {
              wormupObjects[v2440] = v2439[v2440];
}
}
}
}
 catch (v2441) {
        console.error("Error loading wormup settings:", v2441);
}
      function v2442() {
        try {
          localStorage.setItem("wormupSettings", JSON.stringify(wormupObjects));
}
 catch (v2443) {
          console.error("Error saving wormup settings:", v2443);
}
}
      if (v2217.s_w) {
        $("\n<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n<button id=\"btn_crsw\" style=\"display: none;
\">💡</button> \n<button id=\"op_wup\" class=\"op_wup\">⚙️ Settings</button> \n<div id=\"modal_wup\" class=\"modal\"> \n  <div class=\"modal-content\"> \n    <div class=\"modal-header\"> \n      <span class=\"close\">&times;
</span> \n      <h2 class=\"modal-title\">GAME SETTINGS</h2>\n    </div>\n    \n    <div id=\"modal_wup_body\" class=\"modal-body\">\n      <!-- Settings layout with sidebar and content -->\n      <div class=\"settings-layout\">\n        <!-- Sidebar -->\n        <div class=\"settings-sidebar\">\n          <div class=\"sidebar-item active\" data-tab=\"game-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>\n            </svg>\n            <span>Game Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"mobile-settings\" id=\"mobile-tab-item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>\n            </svg>\n            <span>Mobile Controls</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"sound-laser-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path>\n            </svg>\n            <span>Laser Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"power-ups\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <polyline points=\"12 6 12 12 16 14\"></polyline>\n            </svg>\n            <span>Power-ups & Zoom</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"messages\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n            </svg>\n            <span>Messages</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"backgrounds\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle>\n              <polyline points=\"21 15 16 10 5 21\"></polyline>\n            </svg>\n            <span>Backgrounds</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"cursors\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>\n              <path d=\"M13 13l6 6\"></path>\n            </svg>\n            <span>Cursors</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"about\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n              <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>\n            </svg>\n            <span>About</span>\n          </div>\n        </div>\n        \n        <!-- Content Area -->\n        <div class=\"settings-content\">\n          <!-- Game Settings Tab -->\n          <div id=\"game-settings-tab\" class=\"tab-content\">\n            <h3>Game Settings</h3>\n            \n            <div id=\"div_server\" style=\"position: absolute;
 opacity: 0;
 top: -9999px;
 left: -9999px;
 pointer-events: auto;
\">\n              <label for=\"sel_server\">Country</label> \n              <select id=\"sel_country\"></select>\n            </div>\n            \n            <!-- Game Options Section -->\n            <div class=\"section-title\">Game Options</div>\n            <div class=\"settings-grid\">\n              <!-- Fast Eating -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-bolt\" style=\"color: #ffbb00;
\"></i>\n                  <label>Fast Eating</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"eating_speed_toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- ZigZag -->\n              <div class=\"setting-item\" id=\"div_zigzag\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-eye\" style=\"color: #ffbb00;
\"></i>\n                  <label>Show ZigZag</label>\n                  <img style=\"height: 18px;
\" src=\"https://wormup.in/images/cors-proxy.php?img=img/zigzag.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"zigzagup\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              \n              <!-- Show Speed -->\n              <div class=\"setting-item\" id=\"div_speed\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-tachometer-alt\" style=\"color: #ffbb00;
\"></i>\n                  <label>Show Speed</label>\n                  <img style=\"height: 18px;
\" src=\"https://wormup.in/images/cors-proxy.php?img=img/speed.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"wupspeed\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Total Kill-Headshot -->\n              <div class=\"setting-item\" id=\"div_save\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;
\"></i>\n                  <label for=\"saveGame\">Total Kill/Headshot</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"saveGame\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Show FPS/CPU -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-microchip\" style=\"color: #ffbb00;
\"></i>\n                  <label>Show FPS/CPU</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"performance-monitor-toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Visual Pulse Effects -->\n              <div class=\"setting-item\" id=\"div_pulse_effects\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-wave-square\" style=\"color: #ffbb00;
\"></i>\n                  <label>Visual Pulse Effects</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"pulse_effects_enabled\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Screen Mode -->\n              <div class=\"setting-item\" id=\"div_w1\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-desktop\" style=\"color: #ffbb00;
\"></i>\n                  <label>Screen Mode</label>\n                </span>\n                <select id=\"sel_sc\">\n                  <option value=\"0\">100%</option>\n                  <option value=\"1\">75%</option>\n                  <option value=\"2\">Center</option>\n                </select>\n              </div>\n              \n              <!-- Smooth Level -->\n              <div class=\"setting-item\" id=\"div_sm\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-sliders-h\" style=\"color: #ffbb00;
\"></i>\n                  <label>Smooth movement</label>\n                </span>\n                <select id=\"sel_sm\">\n                  <option value=\"20\">Normal</option>\n                  <option value=\"10\">High</option>\n                </select>\n              </div>\n              \n              <!-- Top Players -->\n              <div class=\"setting-item\" id=\"div_top\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-trophy\" style=\"color: #ffbb00;
\"></i>\n                  <label>Top Players</label>\n                </span>\n                <select id=\"sel_top\">\n                  <option value=\"0\">0</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- Sound Settings -->\n            <div class=\"sound-settings-container\">\n              <div class=\"setting-group\">\n                <div class=\"settings-row\">\n                  <!-- Sound Effects Label on Left -->\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-volume-up\" style=\"color: #ffbb00;
\"></i>\n                    <div class=\"sound-effects-title\">Sound Effects</div>\n                  </span>\n                  \n                <!-- Headshot Sound Selector -->\n                <select id=\"sound_effect_selector\">\n                  <option value=\"https://wormateup.live/images/store/hs_2.mp3\">Default Headshot</option>\n                  <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Headshot Sound</option>\n                  <option value=\"https://wormup.in/video/emaat.mp3\">Emaat</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper Shot</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Headshot 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Alqm</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n                  <option value=\"https://wormup.in/video/Aelo-Adi.MP3\">Adelo Adi</option>\n                  <option value=\"https://wormup.in/video/alalobee.mp3\">Ala Loby</option>\n                  <option value=\"https://wormup.in/video/laugh.mp3\">Laugh</option>\n                  <option value=\"https://wormup.in/video/mario-jump.mp3\">Mario Jump</option>\n                  <option value=\"https://wormup.in/video/pew.mp3\">Pew</option>\n                  <option value=\"https://wormup.in/video/pingo.mp3\">Pingo</option>\n                  <option value=\"https://wormup.in/video/wak-wak.mp3\">Wak Wak</option>\n                </select>\n                \n                <!-- 10th Headshot Sound -->\n                <select id=\"monster_kill_selector\">\n                  <option value=\"https://wormup.in/video/monster-kill-hahaha.MP3\">Monster Kill</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/mk.mp3\">Monster Kill 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\">Monster Kill 3</option>\n                </select>\n                  \n                  <!-- Volume Control without label -->\n                  <div class=\"volume-slider-container\">\n                    <input type=\"range\" id=\"volume_slider\" min=\"0\" max=\"100\" step=\"1\" value=\"40\">\n                    <span id=\"volume_value\" class=\"slider-value\">40</span>\n                  </div>\n                  \n                  <!-- Toggle Switch on far right -->\n                <div class=\"sound-toggle\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"wupsound\" value=\"true\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Custom Skin Upload Section -->\n            <div class=\"section-title\">Custom Skin</div>\n            <div class=\"setting-group\" id=\"div_crsw\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-file-image\" style=\"color: #ffbb00;
\"></i>\n                    <label>Skin File.... Only (skin.json)</label>\n                  </span>\n                  <div style=\"display: flex;
 flex-grow: 1;
 gap: 10px;
\">\n                    <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"flex-grow: 1;
\" />\n                    <button id=\"btn_clear_file\">Clear</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Audio elements -->\n            <audio id=\"s_h\"><source src=\"https://wormateup.live/images/store/hs_2.mp3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"monster_kill_sound\"><source src=\"https://wormup.in/video/monster-kill-hahaha.MP3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"sound_test_audio\"></audio>\n          </div>\n          \n          <!-- Mobile Settings Tab -->\n          <div id=\"mobile-settings-tab\" class=\"tab-content\">\n            <h3>Mobile Controls</h3>\n            \n            <div class=\"setting-group\">\n              <div class=\"setting-group-header\">Joystick Settings</div>\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-gamepad\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_checked\">Enable Joystick</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"joystick_checked\" checked>\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_color\">Joystick Color</label>\n                  </span>\n                  <select id=\"joystick_color\">\n                    <option value=\"red\">Red</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"purple\">Purple</option>\n                    <option value=\"orange\">Orange</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-cog\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_mode\">Joystick Mode</label>\n                  </span>\n                  <select id=\"joystick_mode\">\n                    <option value=\"static\">Static</option>\n                    <option value=\"dynamic\">Dynamic</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-map-marker-alt\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_position\">Position</label>\n                  </span>\n                  <select id=\"joystick_position\">\n                    <option value=\"L\">Left</option>\n                    <option value=\"R\">Right</option>\n                  </select>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand-arrows-alt\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_size\">Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_size\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_size_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"joystick_pxy\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_pxy\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_pxy_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"config_mobile\">\n              <!-- Additional mobile settings will be loaded here -->\n            </div>\n          </div>\n          \n          <!-- Laser Settings Tab -->\n          <div id=\"sound-laser-settings-tab\" class=\"tab-content\">\n            <h3>Laser Settings</h3>\n            \n            <div class=\"section-title\">Laser Settings</div>\n            <div class=\"setting-group\" id=\"div_Laser\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"Laserup\">Enable Laser</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"Laserup\" value=\"true\">\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"laser_color_picker\">Color</label>\n                  </span>\n                  <input type=\"color\" id=\"laser_color_picker\" value=\"#FFD700\">\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"laser_opacity_slider\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"laser_opacity_slider\" min=\"10\" max=\"100\" step=\"10\" value=\"50\">\n                    <span id=\"laser_opacity_value\" class=\"slider-value\">50</span>\n                    <button id=\"reset_laser_settings\" class=\"reset-btn\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;
\"></i>\n                    <label>Keyboard Shortcuts:</label>\n                  </span>\n                  <div style=\"flex-grow: 1;
 text-align: right;
\">\n                    <span style=\"display: inline-block;
 margin-left: 10px;
\"><strong>L</strong> - Toggle laser</span>\n                    <span style=\"display: inline-block;
 margin-left: 10px;
\"><strong>O</strong> - Increase opacity</span>\n                    <span style=\"display: inline-block;
 margin-left: 10px;
\"><strong>P</strong> - Decrease opacity</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <!-- Power-ups Tab -->\n          <div id=\"power-ups-tab\" class=\"tab-content\">\n            <h3>Power-ups & Zoom Settings</h3>\n            \n            <div class=\"section-title\">Advanced Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Spin Fast -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-sync-alt\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"spin_fast_slider\">Spin Fast</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"spin_fast_slider\" min=\"0.3\" max=\"0.6\" step=\"0.1\" value=\"0.5\">\n                    <span id=\"spin_fast_value\" class=\"slider-value\">0.5</span>\n                    <button class=\"reset-btn\" data-reset=\"spin_fast\" data-default=\"0.5\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"portion_size_slider\">Power-ups Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_size_slider\" min=\"1\" max=\"6\" step=\"1\" value=\"2\">\n                    <span id=\"portion_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Aura -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-radiation-alt\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"portion_aura_slider\">Power-ups Aura</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_aura_slider\" min=\"1.2\" max=\"3.2\" step=\"0.2\" value=\"1.2\">\n                    <span id=\"portion_aura_value\" class=\"slider-value\">1.2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_aura\" data-default=\"1.2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-apple-alt\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"food_size_slider\">Food Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_size_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Shadow -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-moon\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"food_shadow_slider\">Food Shadow</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_shadow_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_shadow_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_shadow\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"section-title\">Zoom Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Zoom Speed -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-search-plus\" style=\"color: #ffbb00;
\"></i>\n                    <label for=\"zoom_speed_slider\">Zoom Speed</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"zoom_speed_slider\" min=\"0.001\" max=\"0.01\" step=\"0.001\" value=\"0.003\">\n                    <span id=\"zoom_speed_value\" class=\"slider-value\">0.003</span>\n                    <button class=\"reset-btn\" data-reset=\"zoom_speed\" data-default=\"0.003\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"div_game_enhancements\"></div>\n          </div>\n          \n          <!-- Messages Tab -->\n            <div id=\"messages-tab\" class=\"tab-content\">\n              <h3>Messages</h3>\n              \n              <!-- Default Kill&Headshot Toggle -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">\n                  <div class=\"header-with-toggle\">\n                    <span>Kill&Headshot Settings</span>\n                    <div class=\"toggle-container\">\n                      <span class=\"theo-game-label\">\n                        <i class=\"fas fa-skull\" style=\"color: #ffbb00;
\"></i>\n                        <label>Default Kill&Headshot</label>\n                      </span>\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" id=\"wupiq\" value=\"true\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- New Messages Layout -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">Messages</div>\n                <div class=\"setting-group-content\">\n                  <div class=\"messages-container\" id=\"custom-messages-container\">\n                    <!-- Left side: Kill Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;
\"></i>\n                        <span>Kill Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"kill_msg\" class=\"message-select\">\n                          <option value=\"KILLED\">KILLED</option>\n                          <option value=\"WASTED\">WASTED</option>\n                          <option value=\"ELIMINATED\">ELIMINATED</option>\n                          <option value=\"DESTROYED\">DESTROYED</option>\n                          <option value=\"FINISHED\">FINISHED</option>\n                          <option value=\"Well Done!\">Well Done!</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"kill_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"kill_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"kill_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"kill_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                    \n                    <!-- Right side: Headshot Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;
\"></i>\n                        <span>Headshot Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"headshot_msg\" class=\"message-select\">\n                          <option value=\"HEADSHOT\">HEADSHOT</option>\n                          <option value=\"BOOM! HEADSHOT\">BOOM! HEADSHOT</option>\n                          <option value=\"PERFECT AIM\">PERFECT AIM</option>\n                          <option value=\"CRITICAL HIT\">CRITICAL HIT</option>\n                          <option value=\"BULLSEYE\">BULLSEYE</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"headshot_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"headshot_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"headshot_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"headshot_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <div id=\"div_messages\"></div>\n            </div>\n          \n          <!-- Backgrounds Tab -->\n          <div id=\"backgrounds-tab\" class=\"tab-content\">\n            <h3>Game Backgrounds</h3>\n            \n            <!-- Sector System Section -->\n            <div class=\"section-title\">Sector System</div>\n            <div class=\"sector-system-container\">\n              <div class=\"sector-toggle-row\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-th-large\" style=\"color: #ffbb00;
\"></i>\n                  <div class=\"toggle-label\">Enable Sector System</div>\n                </span>\n                <label class=\"toggle-switch\">\n                  <input type=\"checkbox\" id=\"sector_system_toggle\">\n                  <span class=\"toggle-slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Settings Panel - Hidden until enabled -->\n              <div id=\"sector_settings_panel\" class=\"sector-settings-panel\" style=\"display: none;
\">\n                <div class=\"sector-main-settings\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-grip-horizontal\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Display Mode</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <select id=\"sector_display_mode\" class=\"sector-select\">\n                        <option value=\"sectors\">Sectors (12)</option>\n                        <option value=\"quarters\">Quarters (4)</option>\n                      </select>\n                    </div>\n                  </div>\n            \n                  <!-- Background Settings -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-fill-drip\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Background Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_bg_color\" value=\"#000000\" class=\"color-picker\">\n                    </div>\n                  </div>\n                  \n                  <!-- Background Opacity - Always visible -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-adjust\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Background Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_bg_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"60\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_bg_opacity_value\">60%</div>\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-border-style\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Show Lines</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <label class=\"toggle-switch\">\n                        <input type=\"checkbox\" id=\"sector_show_lines\" checked>\n                        <span class=\"toggle-slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n            \n                <!-- Lines Options - Hidden when Show Lines is off -->\n                <div id=\"sector_lines_options\" class=\"sector-lines-options\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-palette\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Line Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_line_color\" value=\"#FF0000\" class=\"color-picker\">\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-low-vision\" style=\"color: #ffbb00;
\"></i>\n                      <div class=\"setting-label\">Line Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_line_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"30\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_line_opacity_value\">30%</div>\n                    </div>\n                  </div>\n                </div>\n            \n                <div class=\"sector-shortcuts\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;
\"></i>\n                    <div class=\"shortcuts-title\">Keyboard Shortcuts:</div>\n                  </span>\n                  <div class=\"shortcuts-content\">\n                    <span class=\"shortcut-item\"><strong>S</strong> or <strong>=</strong> - Toggle Sectors</span>\n                    <span class=\"shortcut-item\"><strong>X</strong> - Toggle Quarters</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"background-grid\">\n              <!-- Background items will be added dynamically -->\n            </div>\n          </div>\n          \n        <!-- Cursors Tab -->\n        <div id=\"cursors-tab\" class=\"tab-content\">\n          <h3>Game Cursors</h3>\n          \n          <!-- العنوان في سطر -->\n          <div class=\"setting-row\">\n            <span class=\"theo-game-label\">\n              <i class=\"fas fa-mouse-pointer\" style=\"color: #ffbb00;
\"></i>\n              <label>Cursor Selection</label>\n            </span>\n          </div>\n          \n          <!-- الزر في سطر منفصل -->\n          <div class=\"setting-row cursor-controls\">\n            <button id=\"default-cursor-btn\" class=\"secondary-button\">Default Cursor</button>\n            <span id=\"current-cursor-name\">Current: Electrical Plug Cursor</span>\n          </div>\n          \n          <div class=\"cursor-container\">\n            <!-- المؤشرات ستضاف ديناميكياً هنا -->\n          </div>\n          \n          <div id=\"div_cursors\"></div>\n        </div>\n          \n          <!-- About Tab -->\n          <div id=\"about-tab\" class=\"tab-content\">\n            <h3>About WormUP</h3>\n            \n            <div class=\"about-content\">\n              <p>\n                <i class=\"fas fa-info-circle\" style=\"color: #ffbb00;
\"></i>\n                WormUP: Enhance Your Wormate.io Experience\n                [WormUP] is a Chrome extension designed to improve your wormate.io gameplay. Quickly select rooms, customize your worm with vibrant skin colors, and enjoy extra features to enhance your experience.\n              </p>\n              <p>\n                <i class=\"fas fa-calendar-alt\" style=\"color: #ffbb00;
\"></i>\n                Release Date: 30/03/2025.\n              </p>\n              <p>\n                <i class=\"fas fa-code-branch\" style=\"color: #ffbb00;
\"></i>\n                Version: 2.0.0\n              </p>\n              <p>\n                <i class=\"fas fa-users\" style=\"color: #ffbb00;
\"></i>\n                Designed by: WormUP Team !\n              </p>\n              \n              <p style=\"margin-top: 20px;
\">\n                <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;
\"></i>\n                <strong>Keyboard Shortcuts:</strong><br>\n                <span style=\"display: inline-block;
 margin-right: 15px;
 margin-top: 5px;
\"><strong>L</strong> - Toggle laser</span>\n                <span style=\"display: inline-block;
 margin-right: 15px;
 margin-top: 5px;
\"><strong>O</strong> - Increase laser opacity</span>\n                <span style=\"display: inline-block;
 margin-right: 15px;
 margin-top: 5px;
\"><strong>P</strong> - Decrease laser opacity</span>\n              </p>\n              \n              <!-- User ID Section -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-content\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-id-card\" style=\"color: #ffbb00;
\"></i>\n                      <label for=\"id_customer\">ID: </label>\n                    </span>\n                    <input value=\"" + v2263.userId + "\" style=\"max-width: 220px;
\" type=\"text\" id=\"id_customer\" readonly>\n                    <button id=\"btn_copy\">\n                      <span class=\"tooltiptext\" id=\"myTooltip\">id copy</span>Copy\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    \n<!-- Headshot Message Display -->\n<div id=\"headshot-message\"></div>\n                        \n                        \n  ").insertAfter("#mm-store");
}
 else {
        $("\n    <button id=\"op_wup\" class=\"op_wup\">" + v2273.ccg[6] + "</button> \n    <div id=\"modal_wup\" class=\"modal\"> \n      <div class=\"modal-content wup-modal\" style=\"max-width: 360px !important;
 width: 360px !important;
\"> \n        <div class=\"center wup-header\" style=\"background-color: #ff8a18;
 background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0));
 padding: 0 15px;
 height: 36px;
 line-height: 36px;
 border-radius: 8px 8px 0 0;
 position: relative;
 text-align: center;
\"> \n          <span class=\"close\" style=\"position: absolute;
 left: 15px;
 top: 6px;
 color: white;
 font-size: 24px;
 font-weight: bold;
 cursor: pointer;
\">×</span> \n          <h2 class=\"modal-title\" style=\"margin: 0;
 font-size: 18px;
 color: white;
\">Settings</h2>\n        </div> \n        <div id=\"modal_wup_body\" class=\"modal-body wup-body\" style=\"padding: 15px;
 background-color: #1e2339;
 color: #fff;
 border-radius: 0 0 8px 8px;
\">\n          <!-- سيتم تحديث المحتوى -->\n        </div> \n      </div>\n    </div>\n  ").insertAfter("#mm-store");
}
      function v2444() {
        const v2445 = v2273.e === "not_empty" || v2446;
        if (!v2445) {
          $("#modal_wup .modal-content").addClass("wup-modal").css({
            "max-width": "360px",
            width: "360px"
}
);
          $(".settings-sidebar, .settings-layout, .settings-content").hide();
          $("#modal_wup_body").html("\n        <div style=\"text-align: center;
 margin: 10px auto;
\">\n          <label for=\"id_customer\" style=\"display: block;
 margin-bottom: 5px;
 font-weight: bold;
 color: #ddd;
 text-align: center;
\">User ID</label> \n          <div style=\"display: flex;
 margin: 0 auto;
 justify-content: center;
\">\n            <input value=\"" + v2263.userId + "\" style=\"max-width: 200px;
 width: 200px !important;
 height: 22px !important;
 border-radius: 6px;
 font-size: 14px;
 text-align: center;
 background-color: #fff;
 color: #0a6928;
 font-weight: 630;
 margin-right: 10px;
\" type=\"text\" id=\"id_customer\" readonly>\n           <button id=\"btn_copy\" style=\"width: 100px;
 height: 35px;
 border-radius: 6px;
 font-size: 15px;
 background-color: #fff;
 color: white;
 border: none;
 cursor: pointer;
\" onclick=\"navigator.clipboard.writeText('" + v2263.userId + "').then(()=> alert('Your ID " + v2263.userId + " copied!'));
\">Copy</button>\n          </div>\n        </div>\n        \n        <!-- الخط الفاصل الأول فقط -->\n        <div style=\"border-top: 1px solid #3a4061;
 margin: 15px 0;
\"></div>\n        \n        <!-- طريقة تفعيل الاشتراك الرئيسية - رابط الاتصال -->\n        <div style=\"text-align: center;
 padding: 10px 0;
\">\n          <h3 style=\"color: white;
 margin: 0 0 8px 0;
 font-size: 16px;
\">Premium Activation - تفعيل الاشتراك المميز</h3>\n          <a href=\"https://wormup.in/contact\" target=\"_blank\" style=\"display: block;
 background-color: #4CAF50;
 color: white;
 padding: 12px;
 text-decoration: none;
 border-radius: 6px;
 font-weight: bold;
 margin: 10px auto;
 width: 80%;
 max-width: 280px;
 box-shadow: 0 4px 8px rgba(0,0,0,0.2);
 transition: all 0.3s;
 border: 2px solid #65d269;
\">\n            <span style=\"display: block;
 font-size: 16px;
\">🔗 Click Here To Activate</span>\n            <span style=\"display: block;
 font-size: 14px;
 margin-top: 4px;
\">اضغط هنا للتفعيل</span>\n          </a>\n        </div>\n        \n        <!-- صورة البريميم قبل زر الديسكورد -->\n        <div style=\"text-align: center;
 margin: 15px auto 10px;
\">\n            <img src=\"https://wormup.in/images/cors-proxy.php?img=img/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px;
 height: auto;
 border-radius: 4px;
 display: block;
 margin: 0 auto;
\">\n        </div>\n        \n        <!-- خيار الانضمام للديسكورد كخيار ثانوي -->\n        <div style=\"text-align: center;
 padding: 10px 0;
\">\n          <a href=\"https://discord.gg/aT2Dsrc5vz\" target=\"_blank\" style=\"display: inline-block;
 background-color: #5865F2;
 color: white;
 padding: 8px 12px;
 text-decoration: none;
 border-radius: 4px;
 font-weight: bold;
 box-shadow: 0 2px 5px rgba(0,0,0,0.2);
 transition: background-color 0.3s;
\">\n            <svg style=\"width: 16px;
 height: 16px;
 margin-right: 6px;
 display: inline-block;
 vertical-align: middle;
\" viewBox=\"0 0 24 24\" fill=\"white\">\n              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\n            </svg>\n            Join Our Discord\n            <span style=\"display: block;
 font-size: 0.8em;
 margin-top: 2px;
\">انضم إلى مجتمعنا على Discord</span>\n          </a>\n          <p style=\"margin-top: 8px;
 color: #aaa;
 font-size: 12px;
\">\n            Get premium features by joining our Discord server\n            <span style=\"display: block;
 font-size: 0.9em;
 margin-top: 2px;
\">للحصول على الميزات المميزة عبر Discord</span>\n          </p>\n        </div>\n        \n        <div style=\"text-align: center;
\">\n          <p style=\"color: #ddd;
 font-size: 14px;
 margin: 5px 0;
\">\n            <i class=\"fas fa-crown\" style=\"color: #ffbb00;
\"></i> Premium\n          </p>\n        </div>\n        ");
}
 else {
          $("#modal_wup .modal-content").removeClass("wup-modal");
          $(".settings-sidebar, .settings-layout, .settings-content").show();
          const v2447 = $(".sidebar-item.active").data("tab");
          if (v2447) {
            $(".tab-content").hide();
            $("#" + v2447 + "-tab").show();
}
 else {
            $("#game-settings-tab").show();
}
          if (!v2217.mobile) {
            $("#mobile-tab-item").hide();
}
}
}
      window.openSettingsModal = function () {
        v2444();
        $("#modal_backdrop").show();
        $("#modal_wup").css({
          "z-index": "9999",
          display: "block"
}
);
        $("body").css("overflow", "hidden");
}
;
      window.closeSettingsModal = function () {
        $("#modal_wup").css("display", "none");
        $("#modal_backdrop").hide();
        $("body").css("overflow", "");
}
;
      v2444();
      function v2448() {
        const v2449 = v2273.e === "not_empty" || v2446;
        if (!v2449) {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").hide();
          $("[id^=\"div_\"]").not("#div_customer").hide();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wupspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").hide();
          $("[id^=\"sel_\"]").hide();
          $(".switch, .slider-control, .section-title").hide();
          $("#backgrounds-tab, .background-grid, .background-item").hide();
          $("#cursors-tab, .cursor-container, .cursor-item").hide();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").hide();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").hide();
}
 else {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").show();
          $("[id^=\"div_\"]").show();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wupspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").show();
          $("[id^=\"sel_\"]").show();
          $(".switch, .slider-control, .section-title").show();
          $("#backgrounds-tab, .background-grid, .background-item").show();
          $("#cursors-tab, .cursor-container, .cursor-item").show();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").show();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").show();
          if (!v2217.mobile) {
            $("#mobile-tab-item").hide();
}
}
}
      $(document).ready(function () {
        setTimeout(function () {
          v2448();
}
, 100);
        $("#btn_copy").click(function () {
          var v2450 = document.getElementById("id_customer");
          v2450.select();
          v2450.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(v2450.value);
          $("#myTooltip").html("" + v2273.ccg[14] + "!");
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
          setTimeout(function () {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
}
, 1500);
}
);
        $("#btn_copy").hover(function () {
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
}
, function () {
          if ($("#myTooltip").text() !== v2273.ccg[14] + "!") {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
}
}
);
        if (window.modalFixed) {
          return;
}
        window.modalFixed = true;
        $("#op_wup").off("click").on("click", function (v2451) {
          v2451.preventDefault();
          window.openSettingsModal();
          return false;
}
);
        var v2452 = $("#modal_wup");
        var v2453 = v2452.css("display");
        $("body").append(v2452.detach());
        var v2454 = $("<div id='modal_backdrop'></div>").css({
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "background-color": "rgba(0, 0, 0, 0.7)",
          "z-index": "9998",
          display: "none"
}
);
        v2452.before(v2454);
        function v2455() {
          if ($("#op_wup").length && !$("#op_wup").data("hasClickHandler")) {
            $("#op_wup").off("click").on("click", function (v2456) {
              v2456.preventDefault();
              window.openSettingsModal();
              return false;
}
).data("hasClickHandler", true);
}
}
        v2455();
        setInterval(v2455, 5000);
        $(".close").off("click").on("click", function () {
          window.closeSettingsModal();
}
);
        v2454.on("click", function () {
          window.closeSettingsModal();
}
);
}
);
      var v2457 = document.getElementById("div_save");
      var v2458 = document.getElementById("div_sound");
      var v2459 = document.getElementById("div_speed");
      var v2460 = document.getElementById("div_zigzag");
      var v2461 = document.getElementById("div_w1");
      var v2462 = document.getElementById("div_sm");
      var v2463 = document.getElementById("sel_sc");
      var v2464 = document.getElementById("div_top");
      var v2465 = document.getElementById("sel_top");
      var v2466 = document.getElementById("div_killmsg");
      var v2467 = document.getElementById("div_background");
      var v2468 = [{
        name: "Vietnam",
        val: "vn"
}
, {
        name: "Thailand",
        val: "th"
}
, {
        name: "Cambodia",
        val: "kh"
}
, {
        name: "Indonesia",
        val: "id"
}
, {
        name: "Singapore",
        val: "sg"
}
, {
        name: "Japan",
        val: "jp"
}
, {
        name: "Mexico",
        val: "mx"
}
, {
        name: "Brazil",
        val: "br"
}
, {
        name: "Canada",
        val: "ca"
}
, {
        name: "Germany",
        val: "de"
}
, {
        name: "France",
        val: "fr"
}
, {
        name: "England",
        val: "gb"
}
, {
        name: "Australia",
        val: "au"
}
, {
        name: "USA",
        val: "us"
}
, {
        name: "Portugal",
        val: "pt"
}
, {
        name: "Turkey",
        val: "tr"
}
, {
        name: v2273.ccg[36],
        val: "iq"
}
];
      let v2469 = document.getElementById("sel_country");
      if (v2469) {
        for (v2264 = 0;
 v2264 < v2468.length;
 v2264++) {
          let v2470 = document.createElement("option");
          v2470.value = v2468[v2264].val;
          v2470.innerHTML = v2468[v2264].name;
          v2469.appendChild(v2470);
}
        if (v2471) {
          v2469.value = v2471;
}
        v2469.onchange = function () {
          let v2472 = v2469.value;
          v2471 = v2472;
          localStorage.setItem("oco", v2472);
          var v2473 = {
            id_wormate: v2263.userId,
            country: v2472
}
;
          fetch(v2217.s_l + "/check/index.php", {
            headers: {
              "Content-Type": "application/json"
}
,
            method: "POST",
            body: JSON.stringify(v2473)
}
);
          localStorage.removeItem("wupsw");
          window.location.reload();
}
;
}
      var v2446 = false;
      if (v2273.cm === "" || v2273.cm === undefined) ;
else {
        var v2267 = document.getElementById("btn_in_t");
        var v2474 = document.getElementById("mm-action-play");
        var v2475 = document.getElementById("port_id");
        if (v2267) {
          v2267.style.display = "block";
          v2267.onclick = function () {
            v2475.value = v2273.cm;
            v2474.click();
}
;
          v2446 = true;
}
}
      if (v2273.e === "not_connect") ;
else {
        v2217.h = v2273.z == "b";
        v2217.hz = v2273.z == "c";
        if (v2273.e === "not_empty" || v2446) {
          var v2476 = ooo.Xg.Kf.Wg.Ah;
          if (v2457) {
            v2457.style.display = "block";
}
          if (v2458) {
            v2458.style.display = "inline-block";
}
          $("#zigzagup").prop("checked", v2217.flx);
          $("#zigzagup").change(function () {
            v2217.flx = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#wupspeed").prop("checked", v2217.vp);
          $("#wupspeed").change(function () {
            v2217.vp = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#saveGame").prop("checked", v2217.cs);
          $("#saveGame").change(function () {
            v2217.cs = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          if (v2217.mobile) {
            if (v2461) {
              v2461.style.display = "none";
}
            v2217.sc = 0;
            v2217.wi = 0;
}
 else {
            if (v2461) {
              v2461.style.display = "inline-block";
}
            if (v2463) {
              v2463.value = v2217.sc;
              v2463.onchange = function () {
                v2217.sc = parseInt(v2463.value);
                if (v2217.sc == 1) {
                  v2217.wi = screen.height / (screen.width * 2);
}
                if (v2217.sc == 2) {
                  v2217.wi = 0;
}
                localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
;
}
}
          if (v2462) {
            v2462.style.display = "inline-block";
}
          if (sel_sm) {
            sel_sm.value = v2217.sm;
            sel_sm.onchange = function () {
              v2217.sm = parseInt(sel_sm.value);
              localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
;
}
          if (v2464) {
            v2464.style.display = "inline-block";
}
          if (v2465) {
            v2465.value = v2217.to;
            v2465.onchange = function () {
              v2217.to = parseInt(v2465.value);
              localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
;
}
          if (v2469 && v2469.value == "iq" && v2466) {
            v2466.style.display = "inline-block";
            var v2477 = $("#wupiq");
            v2477.prop("checked", v2217.iq);
            v2477.change(function () {
              if (this.checked) {
                v2217.iq = true;
}
 else {
                v2217.iq = false;
}
              localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
}
 else {
            v2217.iq = false;
            if (v2466) {
              v2466.style.display = "none";
}
}
          const v2478 = localStorage.getItem("showFpsCpu") === "true";
          $("#performance-monitor-toggle").prop("checked", v2478);
          $("#performance-monitor-toggle").change(function () {
            const v2479 = $(this).prop("checked");
            localStorage.setItem("showFpsCpu", v2479);
            if (window.PerformanceMonitor) {
              window.PerformanceMonitor.toggle(v2479);
}
}
);
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.init();
}
          const v2480 = localStorage.getItem("wupPulseEnabled") === "true" || localStorage.getItem("wupPulseEnabled") === null;
          $("#pulse_effects_enabled").prop("checked", v2480);
          window.pulseEnabled = v2480;
          $("#pulse_effects_enabled").change(function () {
            window.pulseEnabled = $(this).prop("checked");
            localStorage.setItem("wupPulseEnabled", window.pulseEnabled.toString());
}
);
          v2217.c_1 = v2273.streamer;
          if (v2467) {
            v2467.style.display = "block";
}
          v2481(v2217, oeo);
          v2222.on = true;
          if (v2482()) {
            v2217.tt = v2273.tt == 1;
            v2476.img_1.visible = v2222.on && v2217.mo == 1;
            v2476.img_2.visible = v2222.on && v2217.mo == 2;
            v2476.img_3.visible = v2222.on && v2217.mo == 3;
            v2476.img_4.visible = v2222.on && (v2217.mo == 4 || v2217.mo == 5 || v2217.mo == 6);
}
 else {
            v2217.tt = false;
}
          var v2483 = [{
            nome: "Default",
            uri: v2217.s_l + "/get_store.php?item=bkgnd0.png"
}
, {
            nome: "Stardust",
            uri: v2217.s_l + "/get_store.php?item=bg_sky__6.png"
}
, {
            nome: "Nightdots",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_7.png"
}
, {
            nome: "Galaxy Star",
            uri: v2217.s_l + "/get_store.php?item=Galaxy-Star.png"
}
, {
            nome: "Hexvoid",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_10.png"
}
, {
            nome: "Crystalblue",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_9.png"
}
, {
            nome: "Nebula",
            uri: v2217.s_l + "/get_store.php?item=bg_sky__2.png"
}
, {
            nome: "Bluemist",
            uri: v2217.s_l + "/get_store.php?item=bg_sky__1.png"
}
, {
            nome: "Prism",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_8.png"
}
, {
            nome: "Cloudscape",
            uri: v2217.s_l + "/get_store.php?item=bg_sky__5.png"
}
, {
            nome: "Desert",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_11.png"
}
, {
            nome: "Crystalblue 2",
            uri: v2217.s_l + "/get_store.php?item=bg_sky_12.png"
}
];
          v2217.c_2 = v2273.programmer;
          let v2484 = $(".background-grid");
          if (v2484.length > 0) {
            v2484.empty();
            v2483.forEach(function (v2485) {
              const v2486 = v2217.background === v2485.uri;
              const v2487 = $("\n          <div class=\"background-item " + (v2486 ? "active" : "") + "\" data-bg=\"" + v2485.uri + "\" data-bg-name=\"" + v2485.nome + "\" style=\"cursor: pointer;
 border: 2px solid " + (v2486 ? "#ffcc00" : "#333333") + ";
 border-radius: 8px;
 overflow: hidden;
 margin: 5px;
 background-color: #232339;
\">\n            <img src=\"" + v2485.uri + "\" alt=\"" + v2485.nome + "\" style=\"width: 100%;
 height: 65px;
 object-fit: cover;
\">\n            <div style=\"text-align: center;
 padding: 5px;
 font-size: 10px;
 color: #ffffff;
\">" + v2485.nome + "</div>\n          </div>\n        ");
              v2487.click(function () {
                $(".background-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const v2488 = $(this).data("bg");
                const v2489 = $(this).data("bg-name");
                v2217.background = v2488;
                localStorage.setItem("SaveGameup", JSON.stringify(v2217));
                if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                  ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(v2488));
}
                $("#backgroundArena").val(v2488);
}
);
              v2484.append(v2487);
}
);
}
          let v2490 = document.getElementById("backgroundArena");
          if (v2490) {
            for (v2264 = 0;
 v2264 < v2483.length;
 v2264++) {
              let v2491 = document.createElement("option");
              v2491.value = v2483[v2264].uri;
              v2491.setAttribute("data-imageSrc", v2483[v2264].uri);
              v2491.setAttribute("data-descriptione", v2483[v2264].nome);
              v2491.innerHTML = v2483[v2264].nome;
              v2490.appendChild(v2491);
}
            v2217.c_3 = v2273.extension;
            v2490.value = v2217.background || v2483[0].uri;
            if ($.fn.wupsle) {
              $("#backgroundArena").wupsle({
                onSelected: function () {
                  v2217.background = $("#backgroundArena-value").val();
                  localStorage.setItem("SaveGameup", JSON.stringify(v2217));
                  if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                    ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(v2217.background));
}
                  const v2492 = v2217.background;
                  $(".background-item").removeClass("active").css("border-color", "#333333");
                  $(".background-item[data-bg=\"" + v2492 + "\"]").addClass("active").css("border-color", "#ffcc00");
}
}
);
}
}
          const v2493 = [{
            name: "Turquoise Mouse Pointer",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/1.png"
}
, {
            name: "White Mouse Pointer",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/2.png"
}
, {
            name: "Pink Octopus Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/3.png"
}
, {
            name: "Beetle Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/4.png"
}
, {
            name: "TikTok Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/5.png"
}
, {
            name: "Watermelon Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/6.png"
}
, {
            name: "Red Lipstick Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/7.png"
}
, {
            name: "Flame Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/8.png"
}
, {
            name: "Cherries Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/9.png"
}
, {
            name: "Pink Hearts Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/10.png"
}
, {
            name: "Spray Can Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/11.png"
}
, {
            name: "Beach Umbrella Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/12.png"
}
, {
            name: "Three-colored Glove Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/13.png"
}
, {
            name: "Pink Dolphin Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/14.png"
}
, {
            name: "Mushroom Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/15.png"
}
, {
            name: "Octopus Glove Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/16.png"
}
, {
            name: "Yellow Cheese Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/17.png"
}
, {
            name: "Roasting Marshmallow Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/18.png"
}
, {
            name: "White Glove Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/19.png"
}
, {
            name: "Red Pepper Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/20.png"
}
, {
            name: "Magic Wand with Golden Star Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/21.png"
}
, {
            name: "Strawberry and Chocolate Ice Cream Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/22.png"
}
, {
            name: "Dagger Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/23.png"
}
, {
            name: "Pizza Slice Cursor ",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/24.png"
}
, {
            name: "Strawberry Candy Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/25.png"
}
, {
            name: "Rose Branch Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/26.png"
}
, {
            name: "Electrical Plug Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/27.png"
}
, {
            name: "Heart on Stick Cursor",
            url: v2217.s_l + "/images/cors-proxy.php?img=cursors/28.png"
}
];
          const v2494 = localStorage.getItem("selectedCursor");
          if (v2494) {
            v2495(v2494);
            const v2496 = v2493.find(v2497 => v2497.url === v2494);
            if (v2496) {
              $("#current-cursor-name").text("Current: " + v2496.name);
}
}
          const v2498 = $(".cursor-container");
          if (v2498.length > 0) {
            v2498.empty();
            v2493.forEach(function (v2499) {
              const v2500 = v2494 === v2499.url;
              const v2501 = $("\n              <div class=\"cursor-item " + (v2500 ? "active" : "") + "\" data-cursor=\"" + v2499.url + "\" title=\"" + v2499.name + "\" style=\"width: 60px;
 height: 60px;
 display: inline-block;
 margin: 5px;
 cursor: pointer;
 border: 2px solid " + (v2500 ? "#ffcc00" : "#333333") + ";
 border-radius: 8px;
 overflow: hidden;
 text-align: center;
 background-color: #232339;
\">\n                  <img src=\"" + v2499.url + "\" alt=\"" + v2499.name + "\" style=\"width: 32px;
 height: 32px;
 margin-top: 14px;
\">\n              </div>\n          ");
              v2501.click(function () {
                $(".cursor-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const v2502 = $(this).data("cursor");
                localStorage.setItem("selectedCursor", v2502);
                v2495(v2502);
                $("#current-cursor-name").text("Current: " + v2499.name);
}
);
              v2498.append(v2501);
}
);
}
          $("#default-cursor-btn").click(function () {
            localStorage.removeItem("selectedCursor");
            $("#game-cont, #game-canvas, body").css("cursor", "default");
            $("#current-cursor-name").text("Current: Default");
            $(".cursor-item").removeClass("active").css("border-color", "#333333");
}
);
          function v2495(v2503) {
            $("#game-cont, #game-canvas, body").css({
              cursor: "url(" + v2503 + "), default"
}
);
}
          v2217.c_4 = v2273.game;
          if (v2217.hz) {
            v2504.onwheel = function (v2505) {
              if (!v2217.ctrl && (v2217.z >= 0.5 && v2217.z <= 25 || v2217.z < 0.5 && v2505.deltaY < 0 || v2217.z > 25 && v2505.deltaY > 0)) {
                v2217.z = v2217.z + v2505.deltaY * -wormupObjects.zoomSpeed;
                if (v2217.z < 0.5) {
                  v2217.z = 0.5;
}
}
}
;
}
          if (v2217.mobile) {
            $("#config_mobile").html(v2273.mb);
            var v2506 = document.getElementById("joystick_checked");
            var v2507 = document.getElementById("joystick_color");
            var v2508 = document.getElementById("joystick_mode");
            var v2509 = document.getElementById("joystick_position");
            var v2510 = document.getElementById("joystick_size");
            var v2511 = document.getElementById("joystick_pxy");
            if (v2506) {
              v2506.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2507) {
              v2507.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2508) {
              v2508.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2509) {
              v2509.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2510) {
              v2510.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2511) {
              v2511.onchange = function () {
                v2512(v2506);
                v2513(v2507);
                v2514(v2508);
                v2515(v2509);
                v2516(v2511);
                v2517(v2510);
}
;
}
            if (v2217.joystick) {
              $("#joystick_checked").val(v2217.joystick.checked);
              $("#joystick_color").val(v2217.joystick.color);
              $("#joystick_mode").val(v2217.joystick.mode);
              $("#joystick_position").val(v2217.joystick.positionMode);
              $("#joystick_size").val(v2217.joystick.size);
              $("#joystick_pxy").val(v2217.joystick.pxy);
}
 else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
}
            if (typeof v2512 === "function" && v2506) {
              v2512(v2506);
}
            if (typeof v2513 === "function" && v2507) {
              v2513(v2507);
}
            if (typeof v2514 === "function" && v2508) {
              v2514(v2508);
}
            if (typeof v2515 === "function" && v2509) {
              v2515(v2509);
}
            if (typeof v2516 === "function" && v2511) {
              v2516(v2511);
}
            if (typeof v2517 === "function" && v2510) {
              v2517(v2510);
}
}
          function v2517(v2518) {
            if (!v2217.joystick) {
              v2217.joystick = {
}
;
}
            v2217.joystick.size = parseInt(v2518.value);
            $("#joystick_size_value").text(v2518.value);
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
          function v2516(v2519) {
            if (!v2217.joystick) {
              v2217.joystick = {
}
;
}
            v2217.joystick.pxy = parseInt(v2519.value);
            $("#joystick_pxy_value").text(v2519.value);
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
          if (typeof v2520 !== "undefined" && typeof v2521 !== "undefined" && typeof v2522 !== "undefined") {
            if (typeof v2233 === "function") {
              v2520.on("mousedown", v2233);
}
            if (typeof v2234 === "function") {
              v2521.on("mousedown", v2234);
}
            if (typeof v2235 === "function") {
              v2522.on("mousedown", v2235);
}
}
          v2217.c_5 = v2273.note;
}
 else {
          $("#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw").hide();
}
        if (v2273.ccc && v2273.ccc != "iq" && v2273.ccc != v2471) {
          localStorage.setItem("oco", v2273.ccc);
          localStorage.removeItem("wupsw");
          window.location.reload();
}
        if (!v2471) {
          localStorage.setItem("oco", "iq");
}
}
      localStorage.setItem("SaveGameup", JSON.stringify(v2217));
      $(document).ready(function () {
        if ($(".settings-sidebar").length > 0) {
          $(".sidebar-item").click(function () {
            $(".sidebar-item").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            const v2523 = $(this).data("tab") + "-tab";
            $("#" + v2523).show();
}
);
          $("#game-settings-tab").show();
          $(".tab-content").not("#game-settings-tab").hide();
          if (!v2217.mobile) {
            $("#mobile-tab-item").hide();
}
          function v2524() {
            if ($("#wupiq").prop("checked")) {
              $("#custom-messages-container").addClass("messages-disabled");
}
 else {
              $("#custom-messages-container").removeClass("messages-disabled");
}
}
          v2524();
          $("#joystick_size").on("input", function () {
            var v2525 = $(this).val();
            $("#joystick_size_value").text(v2525);
            v2526(this);
}
);
          $("#joystick_pxy").on("input", function () {
            var v2527 = $(this).val();
            $("#joystick_pxy_value").text(v2527);
            v2528(this);
}
);
          $("#wupiq").change(function () {
            v2524();
            v2217.iq = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#kill_msg").change(function () {
            v2217.killMsg = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#headshot_msg").change(function () {
            v2217.headshotMsg = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#kill_show_name").change(function () {
            v2217.showKillName = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#headshot_show_name").change(function () {
            v2217.showHeadshotName = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#kill_name_position").change(function () {
            v2217.killNamePos = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#headshot_name_position").change(function () {
            v2217.headshotNamePos = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#kill_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              v2217.killMsgType = "custom";
              v2217.killCustomText = $(this).val();
}
 else {
              v2217.killMsgType = "preset";
}
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#headshot_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              v2217.headshotMsgType = "custom";
              v2217.headshotCustomText = $(this).val();
}
 else {
              v2217.headshotMsgType = "preset";
}
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          if (v2217.killMsg) {
            $("#kill_msg").val(v2217.killMsg);
}
          if (v2217.headshotMsg) {
            $("#headshot_msg").val(v2217.headshotMsg);
}
          if (v2217.killMsgType === "custom" && v2217.killCustomText) {
            $("#kill_custom_text").val(v2217.killCustomText || "");
}
          if (v2217.headshotMsgType === "custom" && v2217.headshotCustomText) {
            $("#headshot_custom_text").val(v2217.headshotCustomText || "");
}
          $("#kill_show_name").prop("checked", v2217.showKillName !== false);
          $("#headshot_show_name").prop("checked", v2217.showHeadshotName !== false);
          $("#kill_name_position").val(v2217.killNamePos || "after");
          $("#headshot_name_position").val(v2217.headshotNamePos || "after");
          $("#wupsound").prop("checked", wormupObjects.soundEnabled || v2217.vh);
          $("#sound_effect_selector").val(wormupObjects.soundEffect || "https://wormateup.live/images/store/hs_2.mp3");
          $("#volume_slider").val(wormupObjects.soundVolume || 50);
          $("#volume_value").text(wormupObjects.soundVolume || 50);
          let v2529 = null;
          function v2530(v2531, v2532) {
            if (v2529) {
              v2529.pause();
              v2529.currentTime = 0;
}
            v2531.volume = v2532 / 100;
            v2531.currentTime = 0;
            v2531.play();
            v2529 = v2531;
}
          $("#wupsound").change(function () {
            wormupObjects.soundEnabled = $(this).prop("checked");
            v2217.vh = $(this).prop("checked");
            v2442();
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
            if (wormupObjects.soundEnabled) {
              const v2533 = document.getElementById("s_h");
              if (v2533) {
                v2530(v2533, wormupObjects.soundVolume);
}
}
}
);
          $("#sound_effect_selector").change(function () {
            wormupObjects.soundEffect = $(this).val();
            v2442();
            const v2534 = document.getElementById("s_h");
            if (v2534) {
              const v2535 = v2534.querySelector("source");
              if (v2535) {
                v2535.src = wormupObjects.soundEffect;
                v2534.load();
                if (wormupObjects.soundEnabled) {
                  setTimeout(() => {
                    v2530(v2534, wormupObjects.soundVolume);
}
, 100);
}
}
}
}
);
          $("#monster_kill_selector").change(function () {
            const v2536 = $(this).val();
            const v2537 = document.getElementById("monster_kill_sound");
            if (v2537) {
              const v2538 = v2537.querySelector("source");
              if (v2538) {
                v2538.src = v2536;
                v2537.load();
                if (wormupObjects.soundEnabled) {
                  setTimeout(() => {
                    v2530(v2537, wormupObjects.soundVolume);
}
, 100);
}
}
}
            if (!wormupObjects.monsterKillSound) {
              wormupObjects.monsterKillSound = {
}
;
}
            wormupObjects.monsterKillSound = v2536;
            v2442();
}
);
          $("#volume_slider").on("input", function () {
            wormupObjects.soundVolume = parseInt($(this).val());
            $("#volume_value").text(wormupObjects.soundVolume);
            const v2539 = document.querySelectorAll("audio");
            v2539.forEach(v2540 => {
              v2540.volume = wormupObjects.soundVolume / 100;
}
);
            if (wormupObjects.soundEnabled) {
              const v2541 = document.getElementById("s_h");
              if (v2541) {
                v2530(v2541, wormupObjects.soundVolume);
}
}
            v2442();
}
);
          if (!window.laserOptions) {
            window.laserOptions = {
              enabled: v2217.ls || false,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
}
;
}
          try {
            const v2542 = JSON.parse(localStorage.getItem("laserOptions"));
            if (v2542) {
              window.laserOptions = v2542;
}
}
 catch (v2543) {
            console.error("Error loading laser options:", v2543);
}
          $("#Laserup").prop("checked", window.laserOptions.enabled);
          const v2544 = "#" + window.laserOptions.color.toString(16).padStart(6, "0");
          $("#laser_color_picker").val(v2544);
          $("#laser_opacity_slider").val(window.laserOptions.opacity * 100);
          $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 100));
          $("#Laserup").change(function () {
            window.laserOptions.enabled = $(this).prop("checked");
            v2217.ls = $(this).prop("checked");
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            localStorage.setItem("SaveGameup", JSON.stringify(v2217));
}
);
          $("#laser_color_picker").change(function () {
            const v2545 = $(this).val();
            window.laserOptions.color = parseInt(v2545.replace("#", "0x"));
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
}
);
          $("#laser_opacity_slider").on("input", function () {
            const v2546 = parseInt($(this).val());
            window.laserOptions.opacity = v2546 / 100;
            $("#laser_opacity_value").text(v2546);
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
}
);
          $("#reset_laser_settings").click(function () {
            window.laserOptions = {
              enabled: v2217.ls,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
}
;
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            $("#laser_color_picker").val("#FFD700");
            $("#laser_opacity_slider").val(50);
            $("#laser_opacity_value").text(50);
}
);
          $(document).keydown(function (v2547) {
            if (v2547.which === 76) {
              $("#Laserup").prop("checked", !$("#Laserup").prop("checked")).trigger("change");
}
            if (v2547.which === 79) {
              let v2548 = parseInt($("#laser_opacity_slider").val());
              if (v2548 < 100) {
                $("#laser_opacity_slider").val(v2548 + 10).trigger("input");
}
}
            if (v2547.which === 80) {
              let v2549 = parseInt($("#laser_opacity_slider").val());
              if (v2549 > 10) {
                $("#laser_opacity_slider").val(v2549 - 10).trigger("input");
}
}
}
);
          $("#eating_speed_toggle").prop("checked", wormupObjects.eat_animation >= 1);
          $("#spin_fast_slider").val(wormupObjects.smoothCamera);
          $("#spin_fast_value").text(wormupObjects.smoothCamera);
          $("#zoom_speed_slider").val(wormupObjects.zoomSpeed);
          $("#zoom_speed_value").text(wormupObjects.zoomSpeed);
          $("#portion_size_slider").val(wormupObjects.PortionSize);
          $("#portion_size_value").text(wormupObjects.PortionSize);
          $("#portion_aura_slider").val(wormupObjects.PortionAura);
          $("#portion_aura_value").text(wormupObjects.PortionAura);
          $("#food_size_slider").val(wormupObjects.FoodSize);
          $("#food_size_value").text(wormupObjects.FoodSize);
          $("#food_shadow_slider").val(wormupObjects.FoodShadow);
          $("#food_shadow_value").text(wormupObjects.FoodShadow);
          $("#eating_speed_toggle").change(function () {
            wormupObjects.eat_animation = $(this).prop("checked") ? 1 : 0.0025;
            v2442();
}
);
          $("#spin_fast_slider").on("input", function () {
            const v2550 = parseFloat($(this).val());
            wormupObjects.smoothCamera = v2550;
            $("#spin_fast_value").text(v2550);
            v2442();
}
);
          $("#zoom_speed_slider").on("input", function () {
            const v2551 = parseFloat($(this).val());
            wormupObjects.zoomSpeed = v2551;
            $("#zoom_speed_value").text(v2551);
            v2442();
}
);
          $("#portion_size_slider").on("input", function () {
            const v2552 = parseFloat($(this).val());
            wormupObjects.PortionSize = v2552;
            $("#portion_size_value").text(v2552);
            v2442();
}
);
          $("#portion_aura_slider").on("input", function () {
            const v2553 = parseFloat($(this).val());
            wormupObjects.PortionAura = v2553;
            $("#portion_aura_value").text(v2553);
            v2442();
}
);
          $("#food_size_slider").on("input", function () {
            const v2554 = parseFloat($(this).val());
            wormupObjects.FoodSize = v2554;
            $("#food_size_value").text(v2554);
            v2442();
}
);
          $("#food_shadow_slider").on("input", function () {
            const v2555 = parseFloat($(this).val());
            wormupObjects.FoodShadow = v2555;
            $("#food_shadow_value").text(v2555);
            v2442();
}
);
          $(".reset-btn").click(function () {
            const v2556 = $(this).data("reset");
            const v2557 = $(this).data("default");
            if (v2556 && v2557 !== undefined) {
              switch (v2556) {
                case "spin_fast":
                  $("#spin_fast_slider").val(v2557).trigger("input");
                  break;
                case "portion_size":
                  $("#portion_size_slider").val(v2557).trigger("input");
                  break;
                case "portion_aura":
                  $("#portion_aura_slider").val(v2557).trigger("input");
                  break;
                case "food_size":
                  $("#food_size_slider").val(v2557).trigger("input");
                  break;
                case "food_shadow":
                  $("#food_shadow_slider").val(v2557).trigger("input");
                  break;
                case "zoom_speed":
                  $("#zoom_speed_slider").val(v2557).trigger("input");
                  break;
}
}
}
);
          function v2558() {
            const v2559 = setInterval(() => {
              if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
                clearInterval(v2559);
                const v2560 = window.utils.prototype.Qj;
                window.utils.prototype.Qj = function (v2561, v2562, v2563) {
                  this.Hj = window.decoder.ga(this.Hj, this.Fj, v2562, window.wormupObjects.eat_animation);
                  this.Ij = window.decoder.ga(this.Ij, this.Gj, v2562, 0.0025);
                  this.Nj.Bg(this, v2561, v2562, v2563);
}
;
                const v2564 = window.config.prototype.Bg;
                window.config.prototype.Bg = function (v2565, v2566, v2567, v2568) {
                  if (!v2568(v2565.Hj, v2565.Ij)) {
                    this.Wh.Cd();
                    return;
}
                  var v2569 = v2565.Kj * (1 + window.decoder.pa(v2565.Mj + v2566 / 200) * 0.3);
                  if (v2565.Ej) {
                    this.Wh.Ad(v2565.Hj, v2565.Ij, window.wormupObjects.PortionSize * v2565.Jj, v2565.Lj * 1, window.wormupObjects.PortionAura * v2569, window.wormupObjects.PortionTransparent * v2565.Lj);
}
 else {
                    this.Wh.Ad(v2565.Hj, v2565.Ij, window.wormupObjects.FoodSize * v2565.Jj, v2565.Lj * 1, window.wormupObjects.FoodShadow * v2569, window.wormupObjects.FoodTransparent * v2565.Lj);
}
}
;
                const v2570 = window.savedGame.prototype.ug;
                window.savedGame.prototype.ug = function (v2571, v2572) {
                  const v2573 = v2570.apply(this, arguments);
                  if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
                    const v2574 = window.ooo.Mh.Oh();
                    if (v2574 && typeof v2574._a !== "undefined") {
                      this.Fh.x = window.decoder.ja(this.Fh.x, v2574._a, v2572, window.wormupObjects.smoothCamera, 33.333);
}
}
                  return v2573;
}
;
                if (!window.showHeadshotMessage) {
                  window.showHeadshotMessage = function (v2575, v2576) {
                    if (!document.getElementById("headshot-message")) {
                      const v2577 = document.createElement("div");
                      v2577.id = "headshot-message";
                      v2577.style.position = "fixed";
                      v2577.style.top = "30%";
                      v2577.style.left = "50%";
                      v2577.style.transform = "translate(-50%, -50%)";
                      v2577.style.color = v2576 ? "#ff2222" : "#ffcc00";
                      v2577.style.fontSize = "32px";
                      v2577.style.fontWeight = "bold";
                      v2577.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
                      v2577.style.zIndex = "9999";
                      v2577.style.opacity = "0";
                      v2577.style.transition = "opacity 0.3s ease-in-out";
                      document.body.appendChild(v2577);
}
                    const v2578 = v2576 ? v2217.headshotMsgType : v2217.killMsgType;
                    const v2579 = document.getElementById("headshot-message");
                    let v2580 = "";
                    let v2581 = v2576 ? v2217.showHeadshotName : v2217.showKillName;
                    let v2582 = v2576 ? v2217.headshotNamePos : v2217.killNamePos;
                    if (v2578 === "custom") {
                      v2580 = v2576 ? v2217.headshotCustomText : v2217.killCustomText;
}
 else {
                      v2580 = v2576 ? v2217.headshotMsg : v2217.killMsg;
}
                    if (v2581 && v2575) {
                      if (v2582 === "before") {
                        v2580 = v2575 + " " + v2580;
}
 else {
                        v2580 = v2580 + " " + v2575;
}
}
                    v2579.textContent = v2580;
                    v2579.style.color = v2576 ? "#ff2222" : "#ffcc00";
                    v2579.style.opacity = "1";
                    if (v2576 && wormupObjects.soundEnabled) {
                      const v2583 = document.getElementById("s_h");
                      if (v2583) {
                        v2583.volume = wormupObjects.soundVolume / 100;
                        v2583.currentTime = 0;
                        v2583.play();
}
}
                    setTimeout(function () {
                      v2579.style.opacity = "0";
}
, 2000);
}
;
}
                console.log("WormUP Game modifications applied successfully!");
}
}
, 1000);
}
          setTimeout(v2558, 1000);
          window.playHeadshotSound = function () {
            if (wormupObjects.soundEnabled) {
              const v2584 = document.getElementById("s_h");
              if (v2584) {
                v2584.volume = wormupObjects.soundVolume / 100;
                v2584.currentTime = 0;
                v2584.play();
}
}
}
;
          $("#btn_clear_file").click(function () {
            localStorage.removeItem("custom_wear");
            localStorage.removeItem("custom_skin");
            window.location.reload();
}
);
          $("#fileSkin").change(function (v2585) {
            const v2586 = v2585.target.files[0];
            if (v2586) {
              const v2587 = new FileReader();
              v2587.onload = function (v2588) {
                try {
                  const v2589 = v2588.target.result;
                  JSON.parse(v2589);
                  if (v2589.indexOf("\"wear\":") !== -1) {
                    localStorage.setItem("custom_wear", v2589);
}
 else {
                    localStorage.setItem("custom_skin", v2589);
}
                  window.location.reload();
}
 catch (v2590) {
                  console.error("Error processing file:", v2590);
}
}
;
              v2587.readAsText(v2586);
}
}
);
}
        if (window.PerformanceMonitor) {
          setTimeout(function () {
            window.PerformanceMonitor.init();
}
, 500);
}
        setTimeout(() => {
          if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
            window.sectorSystem.init();
}
}
, 1000);
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
            setTimeout(() => window.sectorSystem.initUserInterface(), 100);
}
}
);
}
);
}
;
    Ysw = async function (v2591) {
      var v2592 = await v2591;
      try {
        v2217.gg = [];
        v2217.sg = [];
        var v2593 = 0;
        if (v2594 && (v2594 = JSON.parse(v2594)).wear) {
          for (var v2595 in v2594.wear.textureDict) {
            if (v2594.wear.textureDict[v2595].file.search("data:image/png;
base64,") == -1) {
              v2594.wear.textureDict[v2595].file = "data:image/png;
base64," + v2594.wear.textureDict[v2595].file.substr(v2594.wear.textureDict[v2595].file.length - v2217.c_v, v2217.c_v) + v2594.wear.textureDict[v2595].file.substr(0, v2594.wear.textureDict[v2595].file.length - v2217.c_v);
}
            v2592.textureDict[v2595] = v2594.wear.textureDict[v2595];
}
          ;
          for (let v2596 in v2594.wear.regionDict) {
            v2592.regionDict[v2596] = v2594.wear.regionDict[v2596];
            v2592[(v2595 = v2592.regionDict[v2596]).list][v2595.id] = v2595.obj;
            v2592[v2595.listVariant].push([v2595.id]);
}
}
        ;
        if (v2597) {
          if ((v2597 = JSON.parse(v2597)).csg) {
            var v2598 = 0;
            var v2599 = false;
            var v2600 = 0;
            for (var v2601 in v2597.csg["0"]) {
              for (var v2602 = v2597.csg["1"][v2601].split("|"), v2603 = 0;
 v2603 < v2602.length;
 v2603++) {
                v2592.textureDict["t_wup_" + (v2217.g / 9 * 1000 + v2600)] = {
                  custom: true,
                  file: "data:image/png;
base64," + v2602[v2603].substr(v2602[v2603].length - v2217.c_v, v2217.c_v) + v2602[v2603].substr(0, v2602[v2603].length - v2217.c_v)
}
;
                v2600++;
}
              ;
              var v2604 = v2597.csg["2"][v2601];
              var v2605 = 0;
              var v2606 = "get_group.php?img=Group_show_gif.png";
              var v2607 = "GIF SKIN";
              var v2608 = 0;
              for (var v2595 in v2604) {
                v2608++;
}
              ;
              for (var v2595 in v2604) {
                if (v2605 == 0) {
                  var v2609 = {
                    id: v2217.g * 100 + v2598,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: v2604[v2595]
}
;
                  for (var v2603 = 0;
 v2603 < v2604[v2595].length;
 v2603++) {
                    v2609.base.push("s_wup_" + (v2217.g / 9 * 1000 + v2593) + "_" + (v2604[v2595].length - v2603));
}
                  ;
                  v2592.skinArrayDict.push(v2609);
                  var v2610 = v2217.sg.indexOf(v2609.id);
                  if (v2610 == -1) {
                    v2217.sg.push(v2609.id);
                    v2217.gg.push({
                      s: v2217.g / 9 * 1000 + v2593,
                      e: v2217.g / 9 * 1000 + v2593 + v2608 - 1,
                      t: parseInt(v2597.csg["0"][v2601].substr(0, 1)) * 100,
                      r: v2597.csg["0"][v2601].substr(1, 1) == "1"
}
);
}
                  if (v2599) {
                    for (var v2611 in v2592.skinGroupArrayDict) {
                      if (v2592.skinGroupArrayDict[v2611].id == v2607) {
                        v2592.skinGroupArrayDict[v2611].list.push(v2609.id);
}
}
}
 else {
                    v2592.skinGroupArrayDict.push({
                      isCustom: true,
                      id: v2607,
                      img: v2606,
                      name: {
                        de: v2607,
                        en: v2607,
                        es: v2607,
                        fr: v2607,
                        uk: v2607
}
,
                      list: [v2609.id]
}
);
                    v2599 = true;
}
                  ;
                  v2598++;
}
                ;
                var v2609 = {
                  id: v2217.g / 9 * 1000 + v2593,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v2604[v2595]
}
;
                for (var v2603 = 0;
 v2603 < v2604[v2595].length;
 v2603++) {
                  v2609.base.push("s_wup_" + v2609.id + "_" + (v2604[v2595].length - v2603));
                  v2592.regionDict["s_wup_" + v2609.id + "_" + (v2603 + 1)] = {
                    texture: "t_wup_" + v2609.id,
                    h: 96,
                    w: 96,
                    x: (v2603 || 0) * 99,
                    y: 0
}
;
}
                ;
                v2592.skinArrayDict.push(v2609);
                v2605++;
                v2593++;
}
}
}
 else {
            var v2612 = [];
            var v2606 = "get_group.php?img=Group_customer.png";
            for (let v2613 in v2597) {
              if (v2613 != "img") {
                if (v2597[v2613].textureDict[v2613].file.search("data:image/png;
base64,") == -1) {
                  v2597[v2613].textureDict[v2613].file = "data:image/png;
base64," + v2597[v2613].textureDict[v2613].file.substr(v2597[v2613].textureDict[v2613].file.length - v2217.c_v, v2217.c_v) + v2597[v2613].textureDict[v2613].file.substr(0, v2597[v2613].textureDict[v2613].file.length - v2217.c_v);
}
                v2592.textureDict[v2613] = v2597[v2613].textureDict[v2613];
                for (let v2614 in v2597[v2613].regionDict) {
                  v2592.regionDict[v2614] = v2597[v2613].regionDict[v2614];
}
                ;
                v2592.skinArrayDict.push(v2597[v2613].skin);
                v2612.push(v2597[v2613].skin.id);
}
 else if (v2597[v2613] != "customer") {
                v2606 = v2597[v2613];
}
}
            ;
            v2592.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: v2606,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
}
,
              list: v2612
}
);
}
}
        ;
        if (Array.isArray(v2217.dg) && v2217.dg.length > 0) {
          for (var v2595 in v2217.dg) {
            var v2615 = v2217.dg[v2595].split("|");
            var v2616 = {
              g: v2615["0"]
}
;
            await fetch(v2217.s_l + "/store/indexx.php", {
              headers: {
                "Content-Type": "application/json"
}
,
              method: "POST",
              body: JSON.stringify(v2616)
}
).then(async function (v2617) {
              v2617 = await v2617.json();
              v2592.textureDict["t_wup_" + v2615["0"] + "_skin_g"] = {
                custom: true,
                relativePath: v2617.csg["1"]["0"]
}
;
              var v2618 = v2617.csg["2"]["0"];
              var v2619 = 0;
              for (var v2620 in v2618) {
                v2619++;
}
              ;
              v2217.sg.push(parseInt(v2615["1"]));
              v2217.gg.push({
                s: v2217.g / 9 * 1000 + v2593,
                e: v2217.g / 9 * 1000 + v2593 + v2619 - 1,
                t: parseInt(v2617.csg["0"]["0"].substr(0, 1)) * 100,
                r: v2617.csg["0"]["0"].substr(1, 1) == "1"
}
);
              var v2621 = 0;
              for (var v2620 in v2618) {
                var v2622 = {
                  id: v2217.g / 9 * 1000 + v2593,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v2618[v2620]
}
;
                for (var v2623 = 0;
 v2623 < v2618[v2620].length;
 v2623++) {
                  v2622.base.push("s_wup_" + v2622.id + "_" + (v2618[v2620].length - v2623));
                  v2592.regionDict["s_wup_" + v2622.id + "_" + (v2623 + 1)] = {
                    texture: "t_wup_" + v2615["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (v2623 || 0) * 99,
                    y: (v2621 || 0) * 99
}
;
}
                ;
                v2592.skinArrayDict.push(v2622);
                v2593++;
                v2621++;
}
}
).catch(function (v2624) {
}
);
}
}
}
 catch (v2625) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
}
      ;
      return v2592;
}
;
    var v2626 = false;
    if (v2626) {
      v2626 = false;
      s_h.pause();
}
    (function (v2627) {
      v2627.fn.wupsle = function (v2628) {
        if (v2629[v2628]) {
          return v2629[v2628].apply(this, Array.prototype.slice.call(arguments, 1));
}
 else if (typeof v2628 != "object" && v2628) {
          v2627.error("Method " + v2628 + " does not exists.");
          return;
}
 else {
          return v2629.init.apply(this, arguments);
}
}
;
      var v2629 = {
}
;
      var v2630 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {
}
}
;
      function v2631(v2632, v2633) {
        var v2634;
        var v2635;
        var v2636;
        var v2637;
        var v2638 = v2632.data("ddslick");
        var v2639 = v2632.find(".dd-selected");
        var v2640 = v2639.siblings(".dd-selected-value");
        v2632.find(".dd-options");
        v2639.siblings(".dd-pointer");
        var v2641 = v2632.find(".dd-option").eq(v2633);
        var v2642 = v2641.closest("li");
        var v2643 = v2638.settings;
        var v2644 = v2638.settings.data[v2633];
        v2632.find(".dd-option").removeClass("dd-option-selected");
        v2641.addClass("dd-option-selected");
        v2638.selectedIndex = v2633;
        v2638.selectedItem = v2642;
        v2638.selectedData = v2644;
        if (v2643.showSelectedHTML) {
          v2639.html((v2644.imageSrc ? "<img class=\"dd-selected-image" + (v2643.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v2644.imageSrc + "\" />" : "") + (v2644.description ? "<small class=\"dd-selected-description dd-desc" + (v2643.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + v2644.description + "</small>" : ""));
}
 else {
          v2639.html(v2644.text);
}
        v2640.val(v2644.value);
        v2638.original.val(v2644.value);
        v2632.data("ddslick", v2638);
        v2645(v2632);
        v2635 = (v2634 = v2632).find(".dd-select").css("height");
        v2636 = v2634.find(".dd-selected-description");
        v2637 = v2634.find(".dd-selected-image");
        if (v2636.length <= 0 && v2637.length > 0) {
          v2634.find(".dd-selected-text").css("lineHeight", v2635);
}
        if (typeof v2643.onSelected == "function") {
          v2643.onSelected.call(this, v2638);
}
}
      function v2646(v2647) {
        var v2648 = v2647.find(".dd-select");
        var v2649 = v2648.siblings(".dd-options");
        var v2650 = v2648.find(".dd-pointer");
        var v2651 = v2649.is(":visible");
        v2627(".dd-click-off-close").not(v2649).slideUp(50);
        v2627(".dd-pointer").removeClass("dd-pointer-up");
        if (v2651) {
          v2649.slideUp("fast");
          v2650.removeClass("dd-pointer-up");
}
 else {
          v2649.slideDown("fast");
          v2650.addClass("dd-pointer-up");
}
        (function v2652(v2653) {
          v2653.find(".dd-option").each(function () {
            var v2654 = v2627(this);
            var v2655 = v2654.css("height");
            var v2656 = v2654.find(".dd-option-description");
            var v2657 = v2653.find(".dd-option-image");
            if (v2656.length <= 0 && v2657.length > 0) {
              v2654.find(".dd-option-text").css("lineHeight", v2655);
}
}
);
}
)(v2647);
}
      function v2645(v2658) {
        v2658.find(".dd-options").slideUp(50);
        v2658.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
}
      v2629.init = function (v2659) {
        var v2659 = v2627.extend({
}
, v2630, v2659);
        if (v2627("#css-ddslick").length <= 0 && v2659.embedCSS) {
          v2627("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{
 border-radius:2px;
 border:solid 1px #ccc;
 position:relative;
 cursor:pointer;
}
.dd-desc {
 color:#aaa;
 display:block;
 overflow: hidden;
 font-weight:normal;
 line-height: 1.4em;
}
.dd-selected{
 overflow:hidden;
 display:block;
 padding:2px;
 font-weight:bold;
}
.dd-pointer{
 width:0;
 height:0;
 position:absolute;
 right:10px;
 top:50%;
 margin-top:-3px;
}
.dd-pointer-down{
 border:solid 5px transparent;
 border-top:solid 5px #000;
}
.dd-pointer-up{
border:solid 5px transparent !important;
 border-bottom:solid 5px #000 !important;
 margin-top:-8px;
}
.dd-options{
 border:solid 1px #ccc;
 border-top:none;
 list-style:none;
 box-shadow:0px 1px 5px #ddd;
 display:none;
 position:absolute;
 z-index:2000;
 margin:0;
 padding:0;
background:#fff;
 overflow:auto;
}
.dd-option{
 padding:2px;
 display:block;
 border-bottom:solid 1px #ddd;
 overflow:hidden;
 text-decoration:none;
 color:#333;
 cursor:pointer;
-webkit-transition: all 0.25s ease-in-out;
 -moz-transition: all 0.25s ease-in-out;
-o-transition: all 0.25s ease-in-out;
-ms-transition: all 0.25s ease-in-out;
}
 ul.dd-options {
height: 130px;
}
 .dd-options > li:last-child > .dd-option{
 border-bottom:none;
}
.dd-option:hover{
 background:#f3f3f3;
 color:#000;
}
.dd-selected-description-truncated {
 text-overflow: ellipsis;
 white-space:nowrap;
}
.dd-option-selected {
 background:#f6f6f6;
}
.dd-option-image, .dd-selected-image {
 vertical-align:middle;
 float:left;
 margin-right:5px;
 max-width:64px;
}
.dd-image-right {
 float:right;
 margin-right:15px;
 margin-left:5px;
}
.dd-container{
display: inline-block;
 position:relative;
}
​ .dd-selected-text {
 font-weight:bold
}
​</style>").appendTo("head");
}
        return this.each(function () {
          var v2660 = v2627(this);
          if (!v2660.data("ddslick")) {
            var v2661 = [];
            v2659.data;
            v2660.find("option").each(function () {
              var v2662 = v2627(this);
              var v2663 = v2662.data();
              v2661.push({
                text: v2627.trim(v2662.text()),
                value: v2662.val(),
                selected: v2662.is(":selected"),
                description: v2663.description,
                imageSrc: v2663.imagesrc
}
);
}
);
            if (v2659.keepJSONItemsOnTop) {
              v2627.merge(v2659.data, v2661);
}
 else {
              v2659.data = v2627.merge(v2661, v2659.data);
}
            var v2664 = v2660;
            var v2665 = v2627("<div id=\"" + v2660.attr("id") + "\"></div>");
            v2660.replaceWith(v2665);
            (v2660 = v2665).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var v2661 = v2660.find(".dd-select");
            var v2666 = v2660.find(".dd-options");
            v2666.css({
              width: v2659.width
}
);
            v2661.css({
              width: v2659.width,
              background: v2659.background
}
);
            v2660.css({
              width: v2659.width
}
);
            if (v2659.height != null) {
              v2666.css({
                height: v2659.height,
                overflow: "auto"
}
);
}
            v2627.each(v2659.data, function (v2667, v2668) {
              if (v2668.selected) {
                v2659.defaultSelectedIndex = v2667;
}
              v2666.append("<li><a class=\"dd-option\">" + (v2668.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + v2668.value + "\" />" : "") + (v2668.imageSrc ? " <img class=\"dd-option-image" + (v2659.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v2668.imageSrc + "\" />" : "") + "</a></li>");
}
);
            var v2669 = {
              settings: v2659,
              original: v2664,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
}
;
            v2660.data("ddslick", v2669);
            if (v2659.selectText.length > 0 && v2659.defaultSelectedIndex == null) {
              v2660.find(".dd-selected").html(v2659.selectText);
}
 else {
              v2631(v2660, v2659.defaultSelectedIndex != null && v2659.defaultSelectedIndex >= 0 && v2659.defaultSelectedIndex < v2659.data.length ? v2659.defaultSelectedIndex : 0);
}
            v2660.find(".dd-select").on("click.ddslick", function () {
              v2646(v2660);
}
);
            v2660.find(".dd-option").on("click.ddslick", function () {
              v2631(v2660, v2627(this).closest("li").index());
}
);
            if (v2659.clickOffToClose) {
              v2666.addClass("dd-click-off-close");
              v2660.on("click.ddslick", function (v2670) {
                v2670.stopPropagation();
}
);
              v2627("body").on("click", function () {
                v2627(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
}
);
}
}
}
);
}
;
      v2629.select = function (v2671) {
        return this.each(function () {
          if (v2671.index !== undefined) {
            v2631(v2627(this), v2671.index);
}
}
);
}
;
      v2629.open = function () {
        return this.each(function () {
          var v2672 = v2627(this);
          if (v2672.data("ddslick")) {
            v2646(v2672);
}
}
);
}
;
      v2629.close = function () {
        return this.each(function () {
          var v2673 = v2627(this);
          if (v2673.data("ddslick")) {
            v2645(v2673);
}
}
);
}
;
      v2629.destroy = function () {
        return this.each(function () {
          var v2674 = v2627(this);
          var v2675 = v2674.data("ddslick");
          if (v2675) {
            var v2676 = v2675.original;
            v2674.removeData("ddslick").unbind(".ddslick").replaceWith(v2676);
}
}
);
}
;
}
)(jQuery);
    if (v2482()) {
      v2677.ba(v2217.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {
}
);
}
    ooo.pCc = function () {
      var v2678 = {
}
;
      var v2679 = {
        country: "iq"
}
;
      if (v2471 && v2471 != "iq") {
        v2679.country = v2471;
}
      $.get(v2217.s_l + "/dynamic/assets/registry.json", function (v2680) {
        v2678 = v2680;
        fetch(v2217.s_l + "/store/indexx.php", {
          headers: {
            "Content-Type": "application/json"
}
,
          method: "POST",
          body: JSON.stringify(v2679)
}
).then(async function (v2681) {
          for (let v2682 in (v2681 = await v2681.json()).textureDict) {
            for (let v2683 in v2681.textureDict[v2682]) {
              if (v2683 === "file") {
                v2681.textureDict[v2682][v2683] = "data:image/png;
base64," + v2681.textureDict[v2682][v2683].substr(v2681.textureDict[v2682][v2683].length - v2217.c_v, v2217.c_v) + v2681.textureDict[v2682][v2683].substr(0, v2681.textureDict[v2682][v2683].length - v2217.c_v);
}
}
}
          ;
          for (let v2684 in v2681) {
            if (v2684 !== "propertyList") {
              if (Array.isArray(v2681[v2684])) {
                v2680[v2684] = v2680[v2684].concat(v2681[v2684]);
}
 else {
                v2680[v2684] = {
                  ...v2680[v2684],
                  ...v2681[v2684]
}
;
}
}
}
}
).catch(function (v2685) {
}
);
}
);
}
;
    ooo.pDc = function (v2686) {
      var v2687 = {
}
;
      (function (v2688, v2689) {
        for (var v2690 in v2688) {
          if (v2688.hasOwnProperty(v2690)) {
            v2689(v2690, v2688[v2690]);
}
}
}
)(v2686.textureDict, function (v2691, v2692) {
        let v2693 = v2217.s_l + v2692.relativePath;
        if (!v2692.custom) {
          v2693 = v2217.s_l + v2692.relativePath;
}
        try {
          v2687[v2691] = new PIXI.Texture(v2693);
}
 catch (v2694) {
}
}
);
}
;
}
);
}
)();
(function () {
  let v2695 = false;
  let v2696 = false;
  let v2697 = 0;
  function v2698() {
    if (window.ooo && window.ooo.Mh && typeof window.ooo.Mh.Dq === "function") {
      return true;
}
    return false;
}
  function v2699() {
    const v2700 = Date.now();
    if (v2696 || v2700 - v2697 < 1000) {
      return;
}
    v2696 = true;
    v2697 = v2700;
    try {
      if (typeof window.myGameSettings !== "undefined") {
        window.myGameSettings.unlimitedRespawn = true;
}
      if (typeof window.ooo.Mh.gr === "function") {
        window.ooo.Mh.gr();
}
      setTimeout(function () {
        try {
          const v2701 = document.getElementById("port_id_s") ? document.getElementById("port_id_s").value || "" : "";
          const v2702 = document.getElementById("port_name_s") ? document.getElementById("port_name_s").value || "Player" : "Player";
          window.ooo.Mh.Dq(v2701, v2702);
          setTimeout(function () {
            v2696 = false;
}
, 1000);
}
 catch (v2703) {
          v2696 = false;
}
}
, 300);
}
 catch (v2704) {
      v2696 = false;
}
}
  function v2705() {
    v2695 = !v2695;
    if (typeof window.myGameSettings !== "undefined") {
      window.myGameSettings.unlimitedRespawn = v2695;
}
}
  document.addEventListener("keydown", function (v2706) {
    if (v2706.key === "F8" || v2706.keyCode === 119) {
      v2705();
}
    if (v2695 && (v2706.key.toLowerCase() === "r" || v2706.keyCode === 82)) {
      if (v2698()) {
        v2706.preventDefault();
        v2706.stopPropagation();
        v2699();
}
 else {
}
}
}
, true);
  if (!v2698()) {
    const v2707 = setInterval(function () {
      if (v2698()) {
        clearInterval(v2707);
}
}
, 1000);
}
 else {
}
}
)();
