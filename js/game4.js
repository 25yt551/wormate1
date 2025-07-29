var SITE_XTHOST = "https://wormateup.live";
window.detectLog = null; // Global bir değişken tanımlanır, log verilerini tutmak için kullanılabilir.

const _wormup = {
  // BETAisSkinCustom fonksiyonu, parametre olarak gelen değerin bir string olup olmadığını ve içinde harf bulunup bulunmadığını kontrol eder.
  'BETAisSkinCustom'(_0x2c6494) {
    var _0x21e880 = /[a-zA-Z]/;  // A-Z, a-z arasında harfleri kontrol etmek için regex
    return typeof _0x2c6494 === "string" && _0x21e880.test(_0x2c6494);  // Eğer parametre bir string ve harf içeriyorsa true döner
  },

  // testSkinCustom fonksiyonu, parametreyi BETAisSkinCustom fonksiyonu ile test eder. Eğer geçerli bir skin (görünüm) ise özel bir değer döner, değilse parametreyi olduğu gibi döndürür.
  'testSkinCustom': function (_0x45c99a) {
    return _wormup.BETAisSkinCustom(_0x45c99a) ? 0x22 || 0x21 : _0x45c99a;  // Eğer geçerli bir skinse, 0x22 veya 0x21 döner
  },

  // testSkinMod fonksiyonu, bir skin modunun geçerliliğini kontrol eder. 399 ile 999 arasında bir değere sahip olup olmadığını kontrol eder.
  'testSkinMod': function (_0x13a10b) {
    return _0x13a10b >= 0x18f && _0x13a10b < 0x3e7;  // Eğer parametre 399 ile 999 arasında ise true döner
  },

  // testWear fonksiyonu, bir "wear" (görünüm) modunun geçerliliğini kontrol eder. 399 ile 999 arasında olup olmadığını test eder.
  'testWear': function (_0x1e7457) {
    return _0x1e7457 >= 0x18f && _0x1e7457 < 0x3e7;  // Eğer parametre 399 ile 999 arasında ise true döner
  },

  // isNumberValid fonksiyonu, parametrenin boş, null, undefined olup olmadığını ve geçerli bir sayı olup olmadığını kontrol eder.
  'isNumberValid': function (_0x1ef083) {
    return _0x1ef083 !== '' && _0x1ef083 !== null && _0x1ef083 !== undefined && !isNaN(_0x1ef083);  // Geçerli bir sayı olup olmadığını kontrol eder
  },

  // validInput fonksiyonu, parametreyi önce skin modları ile test eder. Eğer geçerli değilse, input'tan bir değer alır ve encode eder.
  'validInput': function (_0x78f033) {
    if (!_wormup.testSkinMod(_0x78f033) && !_wormup.BETAisSkinCustom(_0x78f033)) {
      return _0x78f033;  // Eğer geçerli değilse parametreyi olduğu gibi döndürür
    }
    try {
      let _0x2f3ba2 = $('#inputReplaceSkin').val();  // inputReplaceSkin ID'sine sahip input'un değerini alır
      // Eğer bu değeri bir sayı olarak geçerli kabul ederse, encode eder; değilse 0x23 döndürür.
      return encodeURI(_wormup.isNumberValid(_0x2f3ba2) ? _0x2f3ba2 : 0x23);
    } catch (_0x15fbeb) {
      return encodeURI(0x23);  // Hata durumunda 0x23 değeri döndürülür
    }
  },

  'aload': false,  // Başlangıçta false olan bir boolean değer (yüklenmiş olup olmadığını kontrol etmek için kullanılabilir)
  'aId': 0x0  // Başlangıçta 0 olan bir ID değeri
};


// localStorage'dan "inputReplaceSkin" değerini alıyoruz.
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");

// Diğer değişkenler ve başlangıç değerleri.
var hoisinhnhanh;  // Anlamı net olmayan değişken (muhtemelen bir fonksiyon veya özellik).
var PilotoAutomatico = null;  // Otomatik pilot özelliği başlangıçta kapalı.
var isPlaying = false;  // Oyunun başlangıç durumu (oyun oynanmıyor).
var pwrups = {};  // Güçlendiriciler (power-ups) başlangıçta boş bir obje.
window.keyMove = 0x51;  // Klavye ile hareket için varsayılan tuş kodu (0x51 = 'Q').

var theoEvents = {
  'eventoPrincipal': null,  // Ana olay (şu anda tanımlı değil).
  
  // Joystick ile ilgili ayarlar:
  'joystick': {
    'positionMode': 'L',  // Joystick konum modu (solda).
    'checked': true,  // Joystick kontrolü aktif.
    'size': 0x5a,  // Joystick boyutu (90).
    'mode': "dynamic",  // Joystick modu (dinamik).
    'position': {
      'left': "110px",  // Joystick'in sol tarafa yerleşimi.
      'bottom': "110px"  // Joystick'in alt tarafa yerleşimi.
    },
    'color': '#FF3B3B',  // Joystick'in rengi (kırmızı).
    'pxy': 0x6e  // Joystick'in bir başka parametresi (110).
  }
};

var theoKzObjects = {
  'FB_UserID': '',  // Facebook kullanıcı ID'si (şu an boş).
  'smoothCamera': 0.5,  // Kamera geçiş hızı (0 ile 1 arasında).
  'eat_animation': 0.0025,  // Yeme animasyonu hızı.
  'flag': "https://i.imgur.com/EkbSd65.png",  // Bayrak görseli URL'si.
  
  // Potenciador (güçlendirici) ayarları:
  'PortionSize': localStorage.PotenciadorSize || 0x2,  // Güçlendirici boyutu (varsayılan: 2).
  'PortionAura': localStorage.PotenciadorAura || 1.2,  // Güçlendirici etki alanı (varsayılan: 1.2).
  'PortionTransparent': 0.8,  // Güçlendirici şeffaflık oranı.
  
  // Yiyeceklerle ilgili ayarlar:
  'FoodTransparent': 0.3,  // Yiyecek şeffaflık oranı.
  
  // Mod ayarları:
  'ModeStremer': false,  // Yayın modu (varsayılan: false).
  'ModeStremerbatop': false,  // Yayın modu (toplanabilir şeyler).
  'ModeStremeremoj': false,  // Yayın modu (emojiler).
  'ModeStremerheadshot': false,  // Yayın modu (headshot'lar).
  'ModeStremersaveheadshot': false,  // Yayın modu (headshot'ları kaydet).
  
  'arrow': false,  // Ok (şu an aktif değil).
  
  // Klavye kısayolları:
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,  // Yeniden doğma tuşu (varsayılan: 'R' tuşu).
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,  // Otomatik hareket tuşu (varsayılan: 'Q' tuşu).
  
  'AbilityZ': false,  // Z tuşu için özel yetenek (şu an aktif değil).
  
  // Yiyeceklerle ilgili diğer ayarlar:
  'FoodShadow': localStorage.ComidaShadow || 0x2,  // Yiyecek gölgesi (varsayılan: 2).
  'FoodSize': localStorage.ComidaSize || 0x2,  // Yiyecek boyutu (varsayılan: 2).
  
  'headshot': 0x0,  // Baş vuruş sayısı (başlangıçta 0).
  'visibleSkin': [],  // Görünür skinler (başlangıçta boş).
  'pL': [],  // Diğer oyuncu verileri (başlangıçta boş).
  
  // Joystick ayarları
  'gamePad': theoEvents.joystick,  // Joystick ayarları burada kullanılıyor.
  'mobile': false,  // Mobil versiyon aktif değil.
  
  // Yüklenme durumu
  'loading': false,  // Yükleniyor mu? (başlangıçta false).
  
  // Oyuncunun öldürme istatistikleri
  'kill': 0x0,  // Öldürme sayısı (başlangıçta 0).
  'totalKills': 0x0,  // Toplam öldürme sayısı (başlangıçta 0).
  'totalHeadshots': 0x0,  // Toplam baş vurma sayısı (başlangıçta 0).
  
  'adblock': false,  // Reklam engelleyici durumu (başlangıçta false).
  
  // Oyuncu durumları
  'CLIENTE_ADMIN': 0x1,  // Admin durumu.
  'CLIENTE_ACTIVO': 0x3,  // Aktif oyuncu durumu.
  'CLIENTE_INACTIVO': 0x4,  // Pasif oyuncu durumu.
};






// Telefonun mobil olup olmadığını kontrol etme fonksiyonu
const PhoneChecked = function () {
  let _0x4e7b44 = false;
  theoKzObjects.mobile = false;  // Başlangıçta mobil değil
  var _0x1fb765 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x1fb765)) {
    theoKzObjects.mobile = true;  // Eğer mobilse, mobil olarak işaretle
    _0x4e7b44 = true;
  }
  return _0x4e7b44;
};

// Telefonun durumunu tekrar kontrol etme fonksiyonu
const RechekingPhone = function () {
  let _0x2795e8 = false;
  var _0xcd56da = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xcd56da)) {
    _0x2795e8 = true;
  }
  return _0x2795e8;
};

// Joystick (kumanda) işlevselliği yükleme
const loadJoy = function (_0x2ba8f9) {
  let _0x3568d0;
  try {
    console.log(_0x2ba8f9);  // Giriş parametresini logla
    if (!theoKzObjects.gamePad) {  // Eğer gamepad tanımlanmamışsa
      theoKzObjects.gamePad = theoEvents.joystick;  // Gamepad'i tanımla
    }
    if (RechekingPhone() && (_0x2ba8f9 || theoKzObjects.gamePad.checked)) {  // Mobil cihaz ve gamepad aktifse
      _0x3568d0 = nipplejs.create(theoKzObjects.gamePad);  // NippleJS ile joystick oluştur
      _0x3568d0.on("move", function (_0x3c7443, _0x3d2688) {  // Hareketi takip et
        theoEvents.eventoPrincipal.sk = _0x3d2688.angle.radian <= Math.PI ? -0x1 * _0x3d2688.angle.radian : Math.PI - (_0x3d2688.angle.radian - Math.PI);
        console.log(_0x3d2688);  // Hareket bilgilerini logla
      });
    }
    return _0x3568d0;
  } catch (_0x4f9e79) {
    console.log(_0x4f9e79);  // Hata durumunda logla
  }
};

// Kullanıcılar ve sunucular için veri yapıları
let clientes = {
  'clientesVencidos': [],  // Vadesi geçmiş kullanıcılar
  'clientesActivos': []    // Aktif kullanıcılar
};

let servers = {
  'Api_listServer': []     // API'den alınan geçerli sunucular
};

async function loadUsers() {
  await fetch("api/users.php")
    .then(_0x15ab82 => _0x15ab82.json()) 
    .then(_0x2f891d => {
      if (_0x2f891d.success) {  
        let _0xeca9c4 = _0x2f891d.Users;  
        const _0x5419f6 = new Date();  
        _0x5419f6.setHours(0x0, 0x0, 0x0, 0x0);  

        clientes.clientesActivos = _0xeca9c4.filter(_0x59eefd => {
          if (_0x59eefd.cliente_DateExpired) {  
            const _0x5c6217 = new Date(_0x59eefd.cliente_DateExpired);  
            return _0x5c6217 >= _0x5419f6; 
          }
          return true;  
        });
      } else {
        clientes = {
          'clientesVencidos': [],
          'clientesActivos': []
        };

      }
    })
    //["catch"](_0x5f50a2 => {
      //console.error("Error loading users:", _0x5f50a2);
      //alert("There is a problem with the page, please check it..");
    //});
}


// Sunucu verilerini yükleyen asenkron fonksiyon
async function loadServers() {
  // API'den sunucu verilerini çekme
  await fetch("https://wormateup.live/HırsızYILDO/api/server_wmxt.php")
    .then(_0x30b35d => _0x30b35d.json()) // JSON'a dönüştür
    .then(_0x537e09 => {
      if (_0x537e09.success) {  // Eğer API'den başarılı yanıt alındıysa
        let _0x15993c = _0x537e09.servers;  // Sunucu verilerini al

        // Geçerli URL'ye sahip sunucuları filtrele
        servers.Api_listServer = _0x15993c.filter(_0x28b8f9 => {
          return _0x28b8f9.serverUrl;  // serverUrl olan sunucuları seç
        });
      } else {
        // Eğer API'den hata alınmışsa, sunucu verilerini Save
        servers = {
          'Api_listServer': []
        };
        alert("There is a problem with the page, please check it..");
      }
    });
}






// Kullanıcı ve sunucu verilerini yükle
loadUsers();
loadServers();

$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  'fontStyle': {
    'name': new PIXI.TextStyle({
      'fill': "#FFFF00",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#EFFA45",
      'fontFamily': "wormup",
      'fontWeight': 'bold'
    }),
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado': new PIXI.TextStyle({
      'align': 'center',
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado1': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo': new PIXI.TextStyle({
      'align': 'center',
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'amarillo1': new PIXI.TextStyle({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'keysColor': new PIXI.TextStyle({
      'align': "center",
      'fill': "#fff009",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#fff009",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontWeight': "bold",
      'fontFamily': 'wormup',
      'wordWrap': true
    })
  }
};

ctx.clock = PIXI.Sprite.fromImage('https://asserts.wormworld.io/images/clock.png');
ctx.clock.width = 0x64;
ctx.clock.height = 0x64;
ctx.clock.x = -0x32;
ctx.clock.y = -0x32;
const app = new PIXI.Application({
  'width': window.innerWidth,
  'height': window.innerHeight
});
document.body.appendChild(app.view);
ctx.hoisinhnhanh = PIXI.Sprite.from('https://i.imgur.com/QZfm7vv.png');
ctx.hoisinhnhanh.width = 0x17;
ctx.hoisinhnhanh.height = 0x17;
ctx.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
ctx.top10sv.height = 0x19;
ctx.top10sv.width = 0x64;
ctx.top10sv.x = 0x3c;
ctx.top10sv.y = -0x32;
ctx.quaytron = PIXI.Sprite.from('https://i.imgur.com/a7lVOy5.png');
ctx.quaytron.width = -0x17;
ctx.quaytron.height = -0x17;
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);
function updateSpritePositions() {
  const _0x3be975 = -0x5a;
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - 0x12c;
  ctx.hoisinhnhanh.y = _0x3be975;
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 0xa;
  ctx.quaytron.y = _0x3be975;
}
updateSpritePositions();
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  updateSpritePositions();
});
ctx.value_server = new PIXI.Text("WFT", ctx.fontStyle.name);
ctx.value_server.x = 0x11;
ctx.value_server.y = 0x3;
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado);
if (theoKzObjects.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1);
} else {
  ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1);
}
ctx.label_kill.x = 0x42;
ctx.label_kill.y = 0x7f;
ctx.label_hs.x = 0xb;
ctx.label_hs.y = 0x7f;
ctx.value1_kill.x = 0x42;
ctx.value1_kill.y = 0x8e;
ctx.value1_hs.x = 0xb;
ctx.value1_hs.y = 0x8e;
ctx.value2_kill.x = 0x42;
ctx.value2_kill.y = 0x9e;
ctx.value2_hs.x = 0xb;
ctx.value2_hs.y = 0x9e;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -0x2d;
ctx.containerCountInfo.y = -0x4c;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0x0;
ctx.containerImgS.y = 0x12;
ctx.containerImgS.width = 0x19;
ctx.containerImgS.height = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -0x2;
ctx.borderImg.y = 0x4e;
ctx.borderImg.width = 0x6e;
ctx.borderImg.height = 0x3c;
ctx.setServer = function (_0x1981fe) {
  ctx.value_server.text = _0x1981fe || "WFT";
};
ctx.setCountGame = function (_0x2ffbde, _0x4814bc, _0x371544, _0x307b5a) {
  ctx.value1_hs.text = _0x4814bc;
  ctx.value1_kill.text = _0x2ffbde;
  if (theoKzObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = _0x307b5a;
    ctx.value2_kill.text = _0x371544;
  }
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x5ccbaf) {
  return typeof _0x5ccbaf;
} : function (_0x194dcd) {
  return _0x194dcd && typeof Symbol == "function" && _0x194dcd.constructor === Symbol && _0x194dcd !== Symbol.prototype ? 'symbol' : typeof _0x194dcd;
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0x4994a4, _0x132ea0) {
      for (var _0x47f1ca = 0x0; _0x47f1ca < _0x132ea0.length; _0x47f1ca += 0x2) {
        _0x4994a4 = _0x4994a4.replaceAll(_0x132ea0[_0x47f1ca], _0x132ea0[_0x47f1ca + 0x1]);
      }
      return _0x4994a4;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0xfad1c6) {}
})();
window.addEventListener('load', function () {
  function _0x560f31() {
    (function (_0x43ba33, _0x3ced56, _0x1d4726) {
      function _0x4defa3() {
        if (typeof _0x3ced56.createElement != 'function') {
          return _0x3ced56.createElement(arguments[0x0]);
        } else {
          return _0x342868 ? _0x3ced56.createElementNS.call(_0x3ced56, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x3ced56.createElement.apply(_0x3ced56, arguments);
        }
      }
      var _0x2adb91 = [];
      var _0x3d9470 = [];
      var _0x10b077 = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x876e, _0x174d4d) {
          var _0x55331b = this;
          setTimeout(function () {
            _0x174d4d(_0x55331b[_0x876e]);
          }, 0x0);
        },
        'addTest': function (_0x512b9d, _0x5aa802, _0x20ab90) {
          _0x3d9470.push({
            'name': _0x512b9d,
            'fn': _0x5aa802,
            'options': _0x20ab90
          });
        },
        'addAsyncTest': function (_0x49a68c) {
          _0x3d9470.push({
            'name': null,
            'fn': _0x49a68c
          });
        }
      };
      function _0x4ac27e() {}
      _0x4ac27e.prototype = _0x10b077;
      _0x4ac27e = new _0x4ac27e();
      var _0xffea0e = false;
      try {
        _0xffea0e = "WebSocket" in _0x43ba33 && _0x43ba33.WebSocket.CLOSING === 0x2;
      } catch (_0x2ab467) {}
      _0x4ac27e.addTest("websockets", _0xffea0e);
      var _0x4fa82f = _0x3ced56.documentElement;
      var _0x342868 = _0x4fa82f.nodeName.toLowerCase() === "svg";
      _0x4ac27e.addTest("canvas", function () {
        var _0x4cb54f = _0x4defa3("canvas");
        return !!_0x4cb54f.getContext && !!_0x4cb54f.getContext('2d');
      });
      _0x4ac27e.addTest("canvastext", function () {
        return _0x4ac27e.canvas !== false && typeof _0x4defa3("canvas").getContext('2d').fillText == "function";
      });
      (function () {
        var _0xe0919c;
        var _0x36e609;
        var _0x2d1836;
        var _0x1825b1;
        var _0x565945;
        var _0x1d9435;
        var _0x367890;
        for (var _0xd29353 in _0x3d9470) {
          if (_0x3d9470.hasOwnProperty(_0xd29353)) {
            _0xe0919c = [];
            _0x36e609 = _0x3d9470[_0xd29353];
            if (_0x36e609.name && (_0xe0919c.push(_0x36e609.name.toLowerCase()), _0x36e609.options && _0x36e609.options.aliases && _0x36e609.options.aliases.length)) {
              for (_0x2d1836 = 0x0; _0x2d1836 < _0x36e609.options.aliases.length; _0x2d1836++) {
                _0xe0919c.push(_0x36e609.options.aliases[_0x2d1836].toLowerCase());
              }
            }
            _0x1825b1 = (_0x36e609.fn === _0x1d4726 ? "undefined" : _typeof(_0x36e609.fn)) === "function" ? _0x36e609.fn() : _0x36e609.fn;
            _0x565945 = 0x0;
            for (; _0x565945 < _0xe0919c.length; _0x565945++) {
              _0x1d9435 = _0xe0919c[_0x565945];
              _0x367890 = _0x1d9435.split('.');
              if (_0x367890.length === 0x1) {
                _0x4ac27e[_0x367890[0x0]] = _0x1825b1;
              } else {
                if (!!_0x4ac27e[_0x367890[0x0]] && !(_0x4ac27e[_0x367890[0x0]] instanceof Boolean)) {
                  _0x4ac27e[_0x367890[0x0]] = new Boolean(_0x4ac27e[_0x367890[0x0]]);
                }
                _0x4ac27e[_0x367890[0x0]][_0x367890[0x1]] = _0x1825b1;
              }
              _0x2adb91.push((_0x1825b1 ? '' : "no-") + _0x367890.join('-'));
            }
          }
        }
      })();
      (function (_0x192b66) {
        var _0x14b91d = _0x4fa82f.className;
        var _0x289dc7 = _0x4ac27e._config.classPrefix || '';
        if (_0x342868) {
          _0x14b91d = _0x14b91d.baseVal;
        }
        if (_0x4ac27e._config.enableJSClass) {
          var _0xb958dc = new RegExp("(^|\\s)" + _0x289dc7 + "no-js(\\s|$)");
          _0x14b91d = _0x14b91d.replace(_0xb958dc, '$1' + _0x289dc7 + 'js$2');
        }
        if (_0x4ac27e._config.enableClasses) {
          _0x14b91d += " " + _0x289dc7 + _0x192b66.join(" " + _0x289dc7);
          if (_0x342868) {
            _0x4fa82f.className.baseVal = _0x14b91d;
          } else {
            _0x4fa82f.className = _0x14b91d;
          }
        }
      })(_0x2adb91);
      delete _0x10b077.addTest;
      delete _0x10b077.addAsyncTest;
      for (var _0x169550 = 0x0; _0x169550 < _0x4ac27e._q.length; _0x169550++) {
        _0x4ac27e._q[_0x169550]();
      }
      _0x43ba33.Modernizr = _0x4ac27e;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x3a8a1c(_0x54da55, _0x15b62a, _0x3ed796) {
    const _0xbb8929 = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
    const _0x40dce2 = ["#FFD500", "#FFC75A", '#00B2ED', '#FF4544', "#0094D7", "#CCCF81", '#ff0999'];
    let _0x253b4c = _0xbb8929[_0x15b62a] - parseInt((_0x3ed796 == 0.99 ? 0x1 : _0x3ed796) * _0xbb8929[_0x15b62a] / 0x1);
    const _0x32bcff = new PIXI.TextStyle({
      'align': "center",
      'fill': _0x40dce2[_0x15b62a],
      'fontSize': 0x19,
      'lineJoin': "round",
      'whiteSpace': "normal",
      'wordWrap': true,
      'dropShadow': true,
      'dropShadowBlur': 0x6,
      'fontFamily': 'wormup',
      'fontWeight': 'bold'
    });
    let _0x337b24 = "pwr_clock" + _0x15b62a;
    if (!pwrups[_0x337b24] && _0xbb8929[_0x15b62a] === _0x253b4c) {
      pwrups[_0x337b24] = new PIXI.Text(_0x253b4c, _0x32bcff);
      pwrups[_0x337b24].y = 0x3d;
      _0x54da55.Tf[_0x15b62a].addChild(pwrups[_0x337b24]);
    }
    if (pwrups[_0x337b24]) {
      pwrups[_0x337b24].x = _0x253b4c >= 0x64 ? 0xb : _0x253b4c >= 0xa ? 0x12 : 0x1a;
      pwrups[_0x337b24].text = _0x253b4c;
      if (_0x253b4c === 0x0) {
        delete pwrups[_0x337b24];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x560f31()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function _0x21090b(_0x73fd34) {
      const _0x551674 = _0x73fd34 + '=';
      const _0x4b7822 = document.cookie.split(';');
      for (let _0x36a70e = 0x0; _0x36a70e < _0x4b7822.length; _0x36a70e++) {
        let _0x1502b4 = _0x4b7822[_0x36a70e];
        while (_0x1502b4.charAt(0x0) === " ") {
          _0x1502b4 = _0x1502b4.substring(0x1);
        }
        if (_0x1502b4.indexOf(_0x551674) === 0x0) {
          return _0x1502b4.substring(_0x551674.length, _0x1502b4.length);
        }
      }
      return '';
    }
    function _0x472880(_0x1d8fe8, _0x113251, _0x167522) {
      var _0x16f7ce = new Date();
      _0x16f7ce.setTime(_0x16f7ce.getTime() + _0x167522 * 0x5265c00);
      var _0x598fa0 = "expires=" + _0x16f7ce.toUTCString();
      document.cookie = _0x1d8fe8 + '=' + _0x113251 + "; " + _0x598fa0 + "; path=/";
    }
    function _0x304328(_0x55489e) {
      if (_0x55489e[_0x43732e]) {
        return _0x55489e[_0x43732e];
      } else {
        return _0x55489e.en ? _0x55489e.en : _0x55489e.x;
      }
    }
    function _0x35bd9d(_0x54e849) {
      var _0x3d0722 = (Math.floor(_0x54e849) % 0x3c).toString();
      var _0x5807e6 = (Math.floor(_0x54e849 / 0x3c) % 0x3c).toString();
      var _0x43cba6 = (Math.floor(_0x54e849 / 0xe10) % 0x18).toString();
      var _0x5e33ec = Math.floor(_0x54e849 / 0x15180).toString();
      var _0x56e529 = window.I18N_MESSAGES['util.time.days'];
      var _0x2e982c = window.I18N_MESSAGES["util.time.hours"];
      var _0xfd2862 = window.I18N_MESSAGES["util.time.min"];
      var _0x1240d3 = window.I18N_MESSAGES["util.time.sec"];
      if (_0x5e33ec > 0x0) {
        return _0x5e33ec + " " + _0x56e529 + " " + _0x43cba6 + " " + _0x2e982c + " " + _0x5807e6 + " " + _0xfd2862 + " " + _0x3d0722 + " " + _0x1240d3;
      } else {
        if (_0x43cba6 > 0x0) {
          return _0x43cba6 + " " + _0x2e982c + " " + _0x5807e6 + " " + _0xfd2862 + " " + _0x3d0722 + " " + _0x1240d3;
        } else {
          return _0x5807e6 > 0x0 ? _0x5807e6 + " " + _0xfd2862 + " " + _0x3d0722 + " " + _0x1240d3 : _0x3d0722 + " " + _0x1240d3;
        }
      }
    }
    function _0x53ce60(_0x47079f, _0x5c8be4, _0x231246) {
      var _0x3cce12 = document.createElement("script");
      var _0x22c8e9 = true;
      if (_0x5c8be4) {
        _0x3cce12.id = _0x5c8be4;
      }
      _0x3cce12.async = 'async';
      _0x3cce12.type = 'text/javascript';
      _0x3cce12.src = _0x47079f;
      if (_0x231246) {
        _0x3cce12.onload = _0x3cce12.onreadystatechange = function () {
          _0x22c8e9 = false;
          try {
            _0x231246();
          } catch (_0x47a3ae) {
            console.log(_0x47a3ae);
          }
          _0x3cce12.onload = _0x3cce12.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x3cce12);
    }
    function _0x3ec824(_0x3082c0, _0x2d8b21) {
      _0x2d8b21.prototype = Object.create(_0x3082c0.prototype);
      _0x2d8b21.prototype.constructor = _0x2d8b21;
      _0x2d8b21.parent = _0x3082c0;
      return _0x2d8b21;
    }
    function _0x3f2c24(_0x546449) {
      _0x546449 %= _0x216076;
      return _0x546449 < 0x0 ? _0x546449 + _0x216076 : _0x546449;
    }
    function _0x5a27f8(_0x26308, _0x40a34a, _0x3247bb) {
      if (_0x26308 > _0x3247bb) {
        return _0x3247bb;
      } else {
        if (_0x26308 < _0x40a34a) {
          return _0x40a34a;
        } else {
          return Number.isFinite(_0x26308) ? _0x26308 : (_0x40a34a + _0x3247bb) * 0.5;
        }
      }
    }
    function _0x969762(_0x31c42f, _0x2ff0c0, _0x1ace1d, _0x1982b5) {
      var _0x4f6f06 = _0x2ff0c0 + _0x1982b5;
      if (_0x31c42f == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x2c0626 = _0x31c42f.length >>> 0x0;
      var _0x42ba37 = _0x1ace1d >> 0x0;
      var _0x32eb52 = _0x42ba37 < 0x0 ? Math.max(_0x2c0626 + _0x42ba37, 0x0) : Math.min(_0x42ba37, _0x2c0626);
      var _0x14be21 = _0x2ff0c0 >> 0x0;
      var _0x25268d = _0x14be21 < 0x0 ? Math.max(_0x2c0626 + _0x14be21, 0x0) : Math.min(_0x14be21, _0x2c0626);
      var _0x575e75 = _0x4f6f06 === undefined ? _0x2c0626 : _0x4f6f06 >> 0x0;
      var _0x462051 = _0x575e75 < 0x0 ? Math.max(_0x2c0626 + _0x575e75, 0x0) : Math.min(_0x575e75, _0x2c0626);
      var _0x4a69b4 = Math.min(_0x462051 - _0x25268d, _0x2c0626 - _0x32eb52);
      var _0xde7490 = 0x1;
      for (_0x25268d < _0x32eb52 && _0x32eb52 < _0x25268d + _0x4a69b4 && (_0xde7490 = -0x1, _0x25268d += _0x4a69b4 - 0x1, _0x32eb52 += _0x4a69b4 - 0x1); _0x4a69b4 > 0x0;) {
        if (_0x25268d in _0x31c42f) {
          _0x31c42f[_0x32eb52] = _0x31c42f[_0x25268d];
        } else {
          delete _0x31c42f[_0x32eb52];
        }
        _0x25268d += _0xde7490;
        _0x32eb52 += _0xde7490;
        _0x4a69b4--;
      }
      return _0x31c42f;
    }
    function _0x22332e(_0x7c0ea7) {
      if (_0x7c0ea7.parent != null) {
        _0x7c0ea7.parent.removeChild(_0x7c0ea7);
      }
    }
    function _0x25d498(_0x2cd941, _0x2f9bae, _0x160713) {
      var _0x390ce8 = (0x1 - Math.abs(_0x160713 * 0x2 - 0x1)) * _0x2f9bae;
      var _0x288794 = _0x390ce8 * (0x1 - Math.abs(_0x2cd941 / 0x3c % 0x2 - 0x1));
      var _0x153921 = _0x160713 - _0x390ce8 / 0x2;
      if (_0x2cd941 >= 0x0 && _0x2cd941 < 0x3c) {
        return [_0x153921 + _0x390ce8, _0x153921 + _0x288794, _0x153921 + 0x0];
      } else {
        if (_0x2cd941 >= 0x3c && _0x2cd941 < 0x78) {
          return [_0x153921 + _0x288794, _0x153921 + _0x390ce8, _0x153921 + 0x0];
        } else {
          if (_0x2cd941 >= 0x78 && _0x2cd941 < 0xb4) {
            return [_0x153921 + 0x0, _0x153921 + _0x390ce8, _0x153921 + _0x288794];
          } else {
            if (_0x2cd941 >= 0xb4 && _0x2cd941 < 0xf0) {
              return [_0x153921 + 0x0, _0x153921 + _0x288794, _0x153921 + _0x390ce8];
            } else {
              return _0x2cd941 >= 0xf0 && _0x2cd941 < 0x12c ? [_0x153921 + _0x288794, _0x153921 + 0x0, _0x153921 + _0x390ce8] : [_0x153921 + _0x390ce8, _0x153921 + 0x0, _0x153921 + _0x288794];
            }
          }
        }
      }
    }
    function _0xc2ff7f() {
      function _0x5b6be5() {
        let _0x4902c0 = theoKzObjects.adblock ? 0x1 : 0x5;
        $("#adbl-1").text(window.I18N_MESSAGES['index.game.antiadblocker.msg1']);
        $("#adbl-2").text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $('#adbl-continue').hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x5cd300 = _0x4902c0;
        for (var _0x548f94 = 0x0; _0x548f94 < _0x4902c0; _0x548f94++) {
          setTimeout(function () {
            _0x5cd300--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x5cd300));
            if (_0x5cd300 === 0x0) {
           //   console.log('aipAABC');
              try {
                ga('send', "event", 'antiadblocker', window.runtimeHash + "_complete");
              } catch (_0x5c5dd8) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, (_0x548f94 + 0x1) * 0x3e8);
        }
      }
      var _0x13f6dc = false;
      function _0xd51047() {}
      var _0x36bca6 = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0xd51047(false);
      });
      _0x36bca6.a = function (_0x524980) {
        _0xd51047 = _0x524980;
        if (!_0x13f6dc) {
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
                },
                'AIP_COMPLETE': function (_0xe8c5eb) {
                  console.log("aipC");
                  _0xd51047(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", 'preroll', window.runtimeHash + "_complete");
                  } catch (_0x45c4fd) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0x13f6dc = true;
          } catch (_0x4c22f2) {}
        }
      };
      _0x36bca6.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log('aipS');
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x506d37) {}
          _0x5b6be5();
        } else {
          console.log('aipAABS');
          try {
            ga("send", 'event', 'antiadblocker', window.runtimeHash + "_start");
          } catch (_0x90e95) {}
          _0x5b6be5();
        }
      };
      return _0x36bca6;
    }
    function _0x55429c(_0x27c254, _0x4ad4a1) {
      var _0x43eab0 = $('#' + _0x27c254);
      var _0x3ce21b = {};
      var _0x3dec9d = false;
      _0x3ce21b.a = function () {
        if (!_0x3dec9d) {
          _0x43eab0.empty();
          _0x43eab0.append("<div id='" + _0x4ad4a1 + "'></div>");
          try {
            try {
              ga('send', "event", "banner", window.runtimeHash + "_display");
            } catch (_0x2984ee) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x4ad4a1);
            });
            _0x3dec9d = true;
          } catch (_0x493425) {}
        }
      };
      _0x3ce21b.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + '_refresh');
          } catch (_0x2d5023) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x4ad4a1);
          });
        } catch (_0x24aba0) {}
      };
      return _0x3ce21b;
    }
    function _0x21bffa() {
      function _0x4c87d5(_0x290217) {
        var _0x1c2c4e = _0x290217 + Math.floor(Math.random() * 0xffff) * 0x25;
        _0x472880(_0x445805.d, _0x1c2c4e, 0x1e);
      }
      return function () {
        var _0x5146b4 = parseInt(_0x21090b(_0x445805.d)) % 0x25;
        console.log("init1 pSC: " + _0x5146b4);
        if (!(_0x5146b4 >= 0x0) || !(_0x5146b4 < _0x2d1b9d.e)) {
          _0x5146b4 = Math.max(0x0, _0x2d1b9d.e - 0x2);
          console.log("init2 pSC: " + _0x5146b4);
        }
        var _0x241264 = {};
        _0x6eb4ba = _0x241264;
        _0x241264.f = _0x2d1b9d;
        _0x241264.g = false;
        _0x241264.i = Date.now();
        _0x241264.j = 0x0;
        _0x241264.k = 0x0;
        _0x241264.l = null;
        _0x241264.m = _0x104c53;
        _0x241264.n = _0x43732e;
        _0x241264.o = null;
        _0x241264.p = null;
        _0x241264.q = null;
        _0x241264.r = null;
        _0x241264.s = null;
        _0x241264.t = null;
        _0x241264.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x10c277) {
              if (_0x10c277.coords !== undefined) {
                var _0x2584e7 = _0x10c277.coords;
                if (_0x2584e7.latitude !== undefined && _0x2584e7.longitude !== undefined) {
                  _0x241264.l = _0x10c277;
                }
              }
            }, function (_0x3af4cf) {});
          }
        } catch (_0x96b540) {}
        _0x241264.v = function () {
          _0x241264.p = new _0x279dab();
          _0x241264.q = new _0x41b329();
          _0x241264.r = new _0x11dc4e();
          _0x241264.s = new _0x500c42();
          _0x241264.t = new _0x11290c();
          _0x241264.u = new _0x1f18f6();
          _0x241264.o = new _0x262ae5();
          _0x241264.o.z = new _0x9c712d(_0x241264.o);
          _0x241264.a();
        };
        _0x241264.a = function () {
          try {
            ga("send", "event", 'app', window.runtimeHash + "_init");
          } catch (_0x3ce958) {}
          _0x241264.o.A = function () {
            _0x241264.o.B();
          };
          _0x241264.o.C = function () {
            var _0x36ccc6 = _0x241264.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x36ccc6);
            } catch (_0x4ae057) {}
            _0x241264.r.G(_0x11dc4e.AudioState.H);
            _0x241264.s.I(_0x241264.s.H.J());
          };
          _0x241264.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x422e85) {}
            if ($("body").height() >= 0x1ae) {
              _0x241264.f.K.c();
            }
            _0x241264.p.L();
            (function () {
              var _0x3a0413 = Math.floor(_0x241264.o.N.M);
              var _0x56b982 = _0x241264.o.O;
              if (_0x241264.u.P()) {
                _0x241264.u.Q(function () {
                  _0x241264.R(_0x3a0413, _0x56b982);
                });
              } else {
                _0x241264.R(_0x3a0413, _0x56b982);
              }
            })();
          };
          _0x241264.o.S = function (_0x408f17) {
            _0x408f17(_0x241264.s.H.T(), _0x241264.s.H.U());
          };
          _0x241264.u.V(function () {
            if (_0x241264.p.W) {
              _0x241264.r.G(_0x11dc4e.AudioState.F);
              _0x241264.s.I(_0x241264.s.F);
            }
            if (_0x241264.u.P()) {
              try {
                var _0x425c1f = _0x241264.u.X();
                ga("set", "userId", _0x425c1f);
              } catch (_0x1e880f) {}
            }
            if (_0x241264.Y() && _0x241264.u.P() && !_0x241264.u.Z()) {
              _0x241264.$(false, false);
              _0x241264.s.aa._(new _0x476fc7());
            } else {
              _0x241264.ba(true);
            }
          });
          _0x241264.p.ca(function () {
            _0x241264.r.G(_0x11dc4e.AudioState.F);
            _0x241264.s.I(_0x241264.s.F);
          });
          _0x241264.q.a(function () {
            _0x241264.o.a();
            _0x241264.r.a();
            _0x241264.s.a();
            _0x241264.t.a();
            _0x241264.p.a();
            _0x241264.u.a();
            if (_0x241264.Y() && !_0x241264.Z()) {
              _0x241264.s.aa._(new _0x476fc7());
            } else {
              _0x241264.ba(true);
            }
          });
        };
        _0x241264.da = function (_0x3fcb02) {
          if (_0x241264.u.P()) {
            var _0x84fc8e = _0x241264.u.ea();
            $.get("https://gateway.wormate.io/pub/wuid/" + _0x84fc8e + '/consent/change?value=' + encodeURI(_0x3fcb02), function (_0x3fedde) {});
          }
        };
        _0x241264.fa = function (_0x284bda) {
          var _0xa4069c = _0x241264.u.ea();
          var _0x5e988e = _0x241264.s.F.D();
          var _0x342500 = _0x241264.s.F.ga();
          var _0x2f5941 = _0x241264.t.ha(_0x4843a0.ia);
          var _0x504398 = _0x241264.t.ha(_0x4843a0.ja);
          var _0x17d37c = _0x241264.t.ha(_0x4843a0.ka);
          var _0x280906 = _0x241264.t.ha(_0x4843a0.la);
          var _0x3872c2 = _0x241264.t.ha(_0x4843a0.ma);
          var _0x430091 = 0x0;
          if (_0x241264.l != null) {
            var _0x147081 = _0x241264.l.coords.latitude;
            var _0xa71a99 = _0x241264.l.coords.longitude;
            _0x430091 = Math.max(0x0, Math.min(0x7fff, (_0x147081 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math.max(0x0, Math.min(0xffff, (_0xa71a99 + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          _wormup.testSkinCustom(_0x2f5941);
          let _0x5a5c0e = 'U_' + (_0x2f5941 > 0x270f ? "0000" : _0x2f5941.toString().padStart(0x4, 0x0)) + (_0x3872c2 > 0x3e7 ? "000" : _0x3872c2.toString().padStart(0x3, 0x0)) + (_0x504398 > 0x3e7 ? "000" : _0x504398.toString().padStart(0x3, 0x0)) + (_0x17d37c > 0x3e7 ? "000" : _0x17d37c.toString().padStart(0x3, 0x0));
          _0x342500 = (_0x342500.length >= 0x20 ? _0x342500.substr(0x0, 0x10) : _0x342500.substr(0x0, 0x10).padEnd(0x10, '_')) + _0x5a5c0e;
          _0x342500 = _0x342500.trim();
          console.log(_0x342500);
          var _0xbede99 = "https://gateway.wormate.io/pub/wuid/" + _0xa4069c + "/start?gameMode=" + encodeURI(_0x5e988e) + "&gh=" + _0x430091 + "&nickname=" + encodeURI(_0x342500) + "&skinId=" + _wormup.validInput(_0x2f5941) + "&eyesId=" + encodeURI(_0x504398) + "&mouthId=" + encodeURI(_0x17d37c) + '&glassesId=' + encodeURI(_0x280906) + "&hatId=" + encodeURI(_0x3872c2);
          console.log("urlRequest: " + _0xbede99);
          $.get(_0xbede99, function (_0x3486d2) {
            var _0x1c9219 = _0x3486d2.server_url;
            _0x284bda(_0x1c9219);
          });
        };
        _0x241264.na = function () {
          _0x5146b4++;
          console.log("start pSC: " + _0x5146b4);
          if (!_0x241264.f.oa && _0x5146b4 >= _0x241264.f.e) {
            _0x241264.s.I(_0x241264.s.pa);
            _0x241264.r.G(_0x11dc4e.AudioState.qa);
            _0x241264.f.ra.b();
          } else {
            _0x4c87d5(_0x5146b4);
            _0x241264.sa();
          }
        };
        _0x241264.sa = function (_0x541e1c) {
          if (_0x241264.o.ta()) {
            _0x241264.s.I(_0x241264.s.ua);
            _0x241264.r.G(_0x11dc4e.AudioState.ua);
            var _0x4c0f91 = _0x241264.s.F.D();
            _0x472880(_0x445805.va, _0x4c0f91, 0x1e);
            console.log("save gm: " + _0x4c0f91);
            var _0xbbed1f = _0x241264.s.xa.wa();
            _0x472880(_0x445805.ya, _0xbbed1f, 0x1e);
            console.log("save sPN: " + _0xbbed1f);
            if (_0x241264.u.P()) {
              _0x241264.fa(function (_0x23421c) {
                hoisinhnhanh = _0x541e1c ? _0x541e1c : _0x23421c;
                _0x241264.o.za(window.server_url || _0x23421c, _0x241264.u.ea());
              });
            } else {
              var _0x4da76b = _0x241264.s.F.ga();
              _0x472880(_0x445805.Aa, _0x4da76b, 0x1e);
              var _0x1cf982 = _0x241264.t.ha(_0x4843a0.ia);
              _0x472880(_0x445805.Ba, _0x1cf982, 0x1e);
              _0x241264.fa(function (_0x4599ba) {
                hoisinhnhanh = _0x541e1c ? _0x541e1c : _0x4599ba;
                _0x241264.o.Ca(_0x4599ba, _0x4da76b, _0x1cf982);
              });
            }
          }
        };
        _0x241264.R = function (_0x43895a, _0x4ffca9) {
          var _0x13fa71 = _0x241264.s.F.ga();
          _0x241264.s.H.Da(_0x43895a, _0x4ffca9, _0x13fa71);
          _0x241264.r.G(_0x11dc4e.AudioState.Ea);
          _0x241264.s.I(_0x241264.s.H.Fa());
        };
        _0x241264.Ga = function () {
          if (!_0x241264.Ha()) {
            return _0x241264.t.Ia();
          }
          var _0x146c7c = parseInt(_0x21090b(_0x445805.Ba));
          return _0x146c7c != null && _0x241264.t.Ja(_0x146c7c, _0x4843a0.ia) ? _0x146c7c : _0x241264.t.Ia();
        };
        _0x241264.Ka = function (_0x529352) {
          _0x472880(_0x445805.La, !!_0x529352, 0x708);
        };
        _0x241264.Ha = function () {
          return _0x21090b(_0x445805.La) === 'true';
        };
        _0x241264.ba = function (_0x3eb2e5) {
          if (_0x3eb2e5 != _0x241264.g) {
            _0x241264.g = _0x3eb2e5;
            var _0x54ca4e = _0x54ca4e || {};
            _0x54ca4e.consented = _0x3eb2e5;
            _0x54ca4e.gdprConsent = _0x3eb2e5;
            _0x241264.f.Ma.a();
            _0x241264.f.K.a();
            _0x241264.f.ra.a(function (_0x1c5ff7) {
              if (_0x1c5ff7) {
                _0x4c87d5(_0x5146b4 = 0x0);
              }
              _0x241264.sa();
            });
          }
        };
        _0x241264.$ = function (_0x413a0d, _0x480da7) {
          _0x472880(_0x445805.Na, _0x413a0d ? 'true' : "false");
          if (_0x480da7) {
            _0x241264.da(_0x413a0d);
          }
          _0x241264.ba(_0x413a0d);
        };
        _0x241264.Z = function () {
          switch (_0x21090b(_0x445805.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x241264.Y = function () {
          try {
            return !!window.isIPInEEA || _0x241264.l != null && !!_0x5c98ad.Oa(_0x241264.l.coords.latitude, _0x241264.l.coords.longitude);
          } catch (_0x599b46) {
            return true;
          }
        };
        _0x241264.Pa = function () {
          _0x241264.j = Date.now();
          _0x241264.k = _0x241264.j - _0x241264.i;
          _0x241264.o.Qa(_0x241264.j, _0x241264.k);
          _0x241264.s.Qa(_0x241264.j, _0x241264.k);
          _0x241264.i = _0x241264.j;
        };
        _0x241264.Ra = function () {
          _0x241264.s.Ra();
        };
        return _0x241264;
      }();
    }
    function _0x262ae5() {
      var _0x284ca4 = {
        'Wa': 0x1e,
        'Xa': new Float32Array(0x64),
        'Ya': 0x0,
        'Za': 0x0,
        '$a': 0x0,
        '_a': 0x0,
        'ab': 0x0,
        'bb': 0x0,
        'cb': 0x0,
        'db': null,
        'eb': 0x12c,
        'C': function () {},
        'B': function () {},
        'S': function () {},
        'A': function () {},
        'fb': new _0x3698bc(),
        'z': null,
        'N': null,
        'gb': {},
        'hb': {},
        'ib': 12.5,
        'jb': 0x28,
        'kb': 0x1,
        'lb': -0x1,
        'mb': 0x1,
        'nb': 0x1,
        'ob': -0x1,
        'pb': -0x1,
        'qb': 0x1,
        'rb': 0x1,
        'sb': -0x1,
        'O': 0x1f4,
        'tb': 0x1f4
      };
      _0x284ca4.fb.ub = 0x1f4;
      _0x284ca4.N = new _0x10e6d0(_0x284ca4.fb);
      _0x284ca4.a = function () {
        _0x284ca4.N.vb((window.anApp = _0x6eb4ba).s.H.wb);
        setInterval(function () {
          _0x284ca4.S(function (_0xb01424, _0x4de334) {
            _0x284ca4.xb(_0xb01424, _0x4de334);
          });
        }, 0xa);
      };
      _0x284ca4.yb = function (_0x2f73bb, _0x27ce66, _0x1e0df2, _0x549370) {
        _0x284ca4.lb = _0x2f73bb;
        _0x284ca4.mb = _0x27ce66;
        _0x284ca4.nb = _0x1e0df2;
        _0x284ca4.ob = _0x549370;
        _0x284ca4.zb();
      };
      _0x284ca4.Ab = function (_0x2d6353) {
        _0x284ca4.kb = _0x2d6353;
        _0x284ca4.zb();
      };
      _0x284ca4.zb = function () {
        _0x284ca4.pb = _0x284ca4.lb - _0x284ca4.kb;
        _0x284ca4.qb = _0x284ca4.mb + _0x284ca4.kb;
        _0x284ca4.rb = _0x284ca4.nb - _0x284ca4.kb;
        _0x284ca4.sb = _0x284ca4.ob + _0x284ca4.kb;
      };
      _0x284ca4.Qa = function (_0x225cad, _0x342f85) {
        _0x284ca4.$a += _0x342f85;
        _0x284ca4.Za -= _0x284ca4.Ya * 0.2 * _0x342f85;
        _0x284ca4.z.Bb();
        if (_0x284ca4.db != null && (_0x284ca4.cb === 0x2 || _0x284ca4.cb === 0x3)) {
          _0x284ca4.Cb(_0x225cad, _0x342f85);
          _0x284ca4.jb = 0x4 + _0x284ca4.ib * _0x284ca4.N.Db;
        }
        var _0x6b4cb5 = 0x3e8 / Math.max(0x1, _0x342f85);
        var _0x23d127 = 0x0;
        var _0x3d47e0 = 0x0;
        for (; _0x3d47e0 < _0x284ca4.Xa.length - 0x1; _0x3d47e0++) {
          _0x23d127 = _0x23d127 + _0x284ca4.Xa[_0x3d47e0];
          _0x284ca4.Xa[_0x3d47e0] = _0x284ca4.Xa[_0x3d47e0 + 0x1];
        }
        _0x284ca4.Xa[_0x284ca4.Xa.length - 0x1] = _0x6b4cb5;
        _0x284ca4.Wa = (_0x23d127 + _0x6b4cb5) / _0x284ca4.Xa.length;
      };
      _0x284ca4.Eb = function (_0x177878, _0x4df3f2) {
        return _0x177878 > _0x284ca4.pb && _0x177878 < _0x284ca4.qb && _0x4df3f2 > _0x284ca4.rb && _0x4df3f2 < _0x284ca4.sb;
      };
      _0x284ca4.Cb = function (_0x55f42f, _0x17ae20) {
        var _0x359014 = _0x284ca4.$a + _0x284ca4.Za;
        var _0x4c42a6 = (_0x359014 - _0x284ca4._a) / (_0x284ca4.ab - _0x284ca4._a);
        _0x284ca4.N.Fb(_0x55f42f, _0x17ae20);
        _0x284ca4.N.Gb(_0x55f42f, _0x17ae20, _0x4c42a6, _0x284ca4.Eb);
        var _0x3344d9 = 0x0;
        var _0x1ccf1a;
        for (_0x1ccf1a in _0x284ca4.hb) {
          var _0x436285 = _0x284ca4.hb[_0x1ccf1a];
          _0x436285.Fb(_0x55f42f, _0x17ae20);
          _0x436285.Gb(_0x55f42f, _0x17ae20, _0x4c42a6, _0x284ca4.Eb);
          if (_0x436285.Hb && _0x436285.Db > _0x3344d9) {
            _0x3344d9 = _0x436285.Db;
          }
          if (!_0x436285.Ib && (!!(_0x436285.Jb < 0.005) || !_0x436285.Hb)) {
            _0x436285.Kb();
            delete _0x284ca4.hb[_0x436285.Mb.Lb];
          }
        }
        _0x284ca4.Ab(_0x3344d9 * 0x3);
        var _0x45e9fe;
        for (_0x45e9fe in _0x284ca4.gb) {
          var _0x358592 = _0x284ca4.gb[_0x45e9fe];
          _0x358592.Fb(_0x55f42f, _0x17ae20);
          _0x358592.Gb(_0x55f42f, _0x17ae20, _0x284ca4.Eb);
          if (_0x358592.Nb && (_0x358592.Jb < 0.005 || !_0x284ca4.Eb(_0x358592.Ob, _0x358592.Pb))) {
            _0x358592.Kb();
            delete _0x284ca4.gb[_0x358592.Mb.Lb];
          }
        }
      };
      _0x284ca4.Qb = function (_0x71c482, _0x44fba9) {
        if (_0x284ca4.cb === 0x1) {
          _0x284ca4.cb = 0x2;
          _0x284ca4.C();
        }
        var _0x21658 = (window.anApp = _0x6eb4ba).j;
        _0x284ca4.bb = _0x71c482;
        if (_0x71c482 === 0x0) {
          _0x284ca4._a = _0x21658 - 0x5f;
          _0x284ca4.ab = _0x21658;
          _0x284ca4.$a = _0x284ca4._a;
          _0x284ca4.Za = 0x0;
        } else {
          _0x284ca4._a = _0x284ca4.ab;
          _0x284ca4.ab = _0x284ca4.ab + _0x44fba9;
        }
        var _0x149e0f = _0x284ca4.$a + _0x284ca4.Za;
        _0x284ca4.Ya = (_0x149e0f - _0x284ca4._a) / (_0x284ca4.ab - _0x284ca4._a);
      };
      _0x284ca4.Rb = function () {
        if (_0x284ca4.cb === 0x1 || _0x284ca4.cb === 0x2) {
          _0x284ca4.cb = 0x3;
          var _0x1817a6 = _0x284ca4.db;
          setTimeout(function () {
            if (_0x284ca4.cb === 0x3) {
              _0x284ca4.cb = 0x0;
            }
            if (_0x1817a6 != null && _0x1817a6 === _0x284ca4.db) {
              _0x284ca4.db.close();
              _0x284ca4.db = null;
            }
          }, 0x1388);
          _0x284ca4.B();
        }
      };
      _0x284ca4.ta = function () {
        return _0x284ca4.cb !== 0x2 && (_0x284ca4.cb = 0x1, _0x284ca4.z.Sb(), _0x284ca4.gb = {}, _0x284ca4.hb = {}, _0x284ca4.N.Tb(), _0x284ca4.db != null && (_0x284ca4.db.close(), _0x284ca4.db = null), true);
      };
      _0x284ca4.Ub = function () {
        _0x284ca4.db = null;
        _0x284ca4.z.Sb();
        if (_0x284ca4.cb !== 0x3) {
          _0x284ca4.A();
        }
        _0x284ca4.cb = 0x0;
      };
      _0x284ca4.za = function (_0x15d6d3, _0x2c2504) {
        _0x284ca4.Vb(_0x15d6d3, function () {
          var _0x259325 = Math.min(0x800, _0x2c2504.length);
          var _0x288de8 = new ArrayBuffer(0x6 + _0x259325 * 0x2);
          var _0x24d7c6 = new DataView(_0x288de8);
          var _0x7c07df = 0x0;
          _0x24d7c6.setInt8(_0x7c07df, 0x81);
          _0x7c07df = _0x7c07df + 0x1;
          _0x24d7c6.setInt16(_0x7c07df, 0xaf0);
          _0x7c07df = _0x7c07df + 0x2;
          _0x24d7c6.setInt8(_0x7c07df, 0x1);
          _0x7c07df = _0x7c07df + 0x1;
          _0x24d7c6.setInt16(_0x7c07df, _0x259325);
          _0x7c07df = _0x7c07df + 0x2;
          var _0x11a99e = 0x0;
          for (; _0x11a99e < _0x259325; _0x11a99e++) {
            _0x24d7c6.setInt16(_0x7c07df, _0x2c2504.charCodeAt(_0x11a99e));
            _0x7c07df = _0x7c07df + 0x2;
          }
          _0x284ca4.Wb(_0x288de8);
        });
      };
      _0x284ca4.Ca = function (_0x9c2028, _0x24af10, _0x9462) {
        _0x284ca4.Vb(_0x9c2028, function () {
          var _0x2f8600 = Math.min(0x20, _0x24af10.length);
          var _0x44e3d8 = new ArrayBuffer(0x7 + _0x2f8600 * 0x2);
          var _0x202a21 = new DataView(_0x44e3d8);
          var _0xfc70c1 = 0x0;
          _0x202a21.setInt8(_0xfc70c1, 0x81);
          _0xfc70c1 = _0xfc70c1 + 0x1;
          _0x202a21.setInt16(_0xfc70c1, 0xaf0);
          _0xfc70c1 = _0xfc70c1 + 0x2;
          _0x202a21.setInt8(_0xfc70c1, 0x0);
          _0xfc70c1 = _0xfc70c1 + 0x1;
          _0x202a21.setInt16(_0xfc70c1, _0x9462);
          _0xfc70c1 = _0xfc70c1 + 0x2;
          _0x202a21.setInt8(_0xfc70c1, _0x2f8600);
          _0xfc70c1++;
          var _0xe139b7 = 0x0;
          for (; _0xe139b7 < _0x2f8600; _0xe139b7++) {
            _0x202a21.setInt16(_0xfc70c1, _0x24af10.charCodeAt(_0xe139b7));
            _0xfc70c1 = _0xfc70c1 + 0x2;
          }
          _0x284ca4.Wb(_0x44e3d8);
        });
      };
      _0x284ca4.Wb = function (_0x5e4f07) {
        try {
          if (_0x284ca4.db != null && _0x284ca4.db.readyState === WebSocket.OPEN) {
            _0x284ca4.db.send(_0x5e4f07);
          }
        } catch (_0x2fd8ed) {
          console.log("Socket send error: " + _0x2fd8ed);
          _0x284ca4.Ub();
        }
      };
      _0x284ca4.xb = function (_0x25bf0e, _0x1af717) {
        var _0x3f2557 = _0x1af717 ? 0x80 : 0x0;
        var _0x283fec = _0x3f2c24(_0x25bf0e) / _0x216076 * 0x80 & 0x7f;
        var _0x2e3c14 = (_0x3f2557 | _0x283fec) & 0xff;
        if (_0x284ca4.eb !== _0x2e3c14) {
          var _0x34b7ca = new ArrayBuffer(0x1);
          new DataView(_0x34b7ca).setInt8(0x0, _0x2e3c14);
          _0x284ca4.Wb(_0x34b7ca);
          _0x284ca4.eb = _0x2e3c14;
        }
      };
      _0x284ca4.Vb = function (_0x1d9f40, _0x40261e) {
        let _0x3d3ac7 = loadJoy(!theoKzObjects.mobile);
        var _0x3f08d7 = _0x284ca4.db = new WebSocket(_0x1d9f40);
        _0x3f08d7.binaryType = "arraybuffer";
        window.onOpen = _0x3f08d7.onopen = function () {
          _0x3e4a7f("open");
          if (_0x284ca4.db === _0x3f08d7) {
            console.log("Socket opened");
            _0x40261e();
          }
          isPlaying = true;
        };
        window.onclose = _0x3f08d7.onclose = function () {
          _0x3e4a7f("closed");
          _wormup.aload = false;
          if (_0x284ca4.db === _0x3f08d7) {
            console.log("Socket closed");
            _0x284ca4.Ub();
          }
          isPlaying = false;
          if (_0x3d3ac7) {
            _0x3d3ac7.destroy();
          }
        };
        _0x3f08d7.onerror = function (_0x1206ef) {
          if (_0x284ca4.db === _0x3f08d7) {
            console.log("Socket error");
            _0x284ca4.Ub();
          }
          isPlaying = false;
          if (_0x3d3ac7) {
            _0x3d3ac7.destroy();
          }
        };
        _0x3f08d7.onmessage = function (_0x1df577) {
          if (_0x284ca4.db === _0x3f08d7) {
            _0x284ca4.z.Xb(_0x1df577.data);
          }
        };
      };
      return _0x284ca4;
    }
    var _0x43732e = window.I18N_LANG;
    _0x43732e ||= 'en';
    var _0x104c53 = undefined;
    switch (_0x43732e) {
      case 'uk':
        _0x104c53 = "uk_UA";
        break;
      case 'de':
        _0x104c53 = "de_DE";
        break;
      case 'fr':
        _0x104c53 = "fr_FR";
        break;
      case 'ru':
        _0x104c53 = "ru_RU";
        break;
      case 'es':
        _0x104c53 = 'es_ES';
        break;
      default:
        _0x104c53 = "en_US";
    }
    moment.locale(_0x104c53);
    var _0x6eb4ba = undefined;
    var _0x1c8759 = function () {
      var _0x689875 = {
        'Yb': eval('PIXI;')
      };
      var _0x57b213 = _0x689875.Yb.BLEND_MODES;
      var _0x3a7f56 = _0x689875.Yb.WRAP_MODES;
      return {
        'Zb': _0x689875.Yb.Container,
        '$b': _0x689875.Yb.BaseTexture,
        '_b': _0x689875.Yb.Texture,
        'ac': _0x689875.Yb.Renderer,
        'bc': _0x689875.Yb.Graphics,
        'cc': _0x689875.Yb.Shader,
        'dc': _0x689875.Yb.Rectangle,
        'ec': _0x689875.Yb.Sprite,
        'fc': _0x689875.Yb.Text,
        'gc': _0x689875.Yb.Geometry,
        'hc': _0x689875.Yb.Mesh,
        'ic': {
          'jc': _0x57b213.ADD
        },
        'kc': {
          'lc': _0x3a7f56.REPEAT
        }
      };
    }();
    var _0x216076 = Math.PI * 0x2;
    (function () {
      var _0x7129be = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x32cd1e) {
        return this[_0x7129be[0x0]](_0x32cd1e);
      };
      DataView.prototype.nc = function (_0x32d67b) {
        return this[_0x7129be[0x1]](_0x32d67b);
      };
      DataView.prototype.oc = function (_0x4d0dae) {
        return this[_0x7129be[0x2]](_0x4d0dae);
      };
      DataView.prototype.pc = function (_0x3e7eb6) {
        return this[_0x7129be[0x3]](_0x3e7eb6);
      };
      DataView.prototype.qc = function (_0x26e3fe) {
        return this[_0x7129be[0x4]](_0x26e3fe);
      };
    })();
    var _0x2a3930 = function () {
      function _0x25e314(_0x5d8217) {
        this.rc = _0x5d8217;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x25e314.VELOCITY_TYPE = 0x0;
      _0x25e314.FLEXIBLE_TYPE = 0x1;
      _0x25e314.MAGNETIC_TYPE = 0x2;
      _0x25e314.ZOOM_TYPE = 0x6;
      _0x25e314.X2_TYPE = 0x3;
      _0x25e314.X5_TYPE = 0x4;
      _0x25e314.X10_TYPE = 0x5;
      return _0x25e314;
    }();
    var _0x279dab = function () {
      function _0x2be80d() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x48cfc4.yc();
      }
      function _0x1ef41e(_0x1fe6c1, _0x35ca63) {
        for (var _0x501c3b in _0x1fe6c1) {
          if (_0x1fe6c1.hasOwnProperty(_0x501c3b)) {
            _0x35ca63(_0x501c3b, _0x1fe6c1[_0x501c3b]);
          }
        }
      }
      _0x2be80d.prototype.a = function () {
        this.L();
      };
      _0x2be80d.prototype.W = function () {
        return this.wc != null;
      };
      _0x2be80d.prototype.zc = function () {
        return this.wc != null ? this.wc.revision : -0x1;
      };
      _0x2be80d.prototype.Ac = function () {
        return this.wc;
      };
      _0x2be80d.prototype.L = function () {
        var _0x5bb925 = this;
        $.get("https://resources.wormate.io/dynamic/assets/revision.json", function (_0x3a4f72) {
          if (_0x3a4f72 > _0x5bb925.zc()) {
            _0x5bb925.Bc();
          }
        });
      };
      _0x2be80d.prototype.Bc = function () {
        var _0x1f1018 = this;
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0xa220db) {
          if (_0xa220db.revision > _0x1f1018.zc()) {
            _0x1f1018.Cc(_0xa220db);
          }
        });
      };
      _0x2be80d.prototype.ca = function (_0x3af9a8) {
        this.uc.push(_0x3af9a8);
      };
      _0x2be80d.prototype.Dc = function () {
        return this.xc;
      };
      _0x2be80d.prototype.Ec = function () {
        for (var _0x251faa = 0x0; _0x251faa < this.uc.length; _0x251faa++) {
          this.uc[_0x251faa]();
        }
      };
      _0x2be80d.prototype.Fc = function (_0x5863c7, _0x36b3da) {
        if (!(_0x5863c7.revision <= this.zc())) {
          _0x1ef41e(this.vc, function (_0x591f1a, _0x558d66) {
            var _0x561be8 = _0x36b3da[_0x591f1a];
            if (_0x561be8 == null || _0x558d66.Gc !== _0x561be8.Gc) {
              print("disposing prev texture: " + _0x591f1a + " at " + _0x558d66.Gc);
              _0x558d66.Hc.destroy();
            }
          });
          this.vc = _0x36b3da;
          this.wc = _0x5863c7;
          this.xc = _0x48cfc4.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x2be80d.prototype.Cc = function (_0x1d2831) {
        var _0x367923 = {};
        (function (_0x2bbde9, _0x5de04b) {
          for (var _0x315831 in _0x2bbde9) {
            if (_0x2bbde9.hasOwnProperty(_0x315831)) {
              _0x5de04b(_0x315831, _0x2bbde9[_0x315831]);
            }
          }
        })(_0x1d2831.textureDict, function (_0x3d45e2, _0x59c4de) {
          var _0x51e6c5 = _0x59c4de.custom ? _0x59c4de.relativePath : "https://resources.wormate.io" + _0x59c4de.relativePath;
          try {
            _0x367923[_0x3d45e2] = new _0x1c3202(_0x51e6c5, _0x1c8759.$b.from(_0x59c4de.file || _0x51e6c5));
          } catch (_0x27dfa3) {
            console.log(_0x51e6c5);
          }
        });
        this.Fc(_0x1d2831, _0x367923);
      };
      return _0x2be80d;
    }();
    var _0x48cfc4 = function () {
      function _0x104e32() {
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
      function _0x736e7f(_0x329196, _0x34eb7e) {
        for (var _0x135a99 in _0x329196) {
          if (_0x329196.hasOwnProperty(_0x135a99)) {
            _0x34eb7e(_0x135a99, _0x329196[_0x135a99]);
          }
        }
      }
      _0x104e32.yc = function () {
        var _0x1afd1f = new _0x48cfc4();
        _0x1afd1f.Jc = {};
        _0x1afd1f.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x1afd1f.Lc = {};
        _0x1afd1f.Mc = {
          'Zc': null
        };
        _0x1afd1f.Nc = {};
        _0x1afd1f.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x1afd1f.Pc = {};
        _0x1afd1f.Qc = {
          'ad': {},
          'bd': _0x1afd1f.Oc,
          'cd': _0x1afd1f.Kc
        };
        _0x1afd1f.Rc = {};
        _0x1afd1f.Sc = {
          'Zc': []
        };
        _0x1afd1f.Tc = {};
        _0x1afd1f.Uc = {
          'Zc': []
        };
        _0x1afd1f.Vc = {};
        _0x1afd1f.Wc = {
          'Zc': []
        };
        _0x1afd1f.Xc = {};
        _0x1afd1f.Yc = {
          'Zc': []
        };
        return _0x1afd1f;
      };
      _0x104e32.Ic = function (_0x4d9648, _0x3e838d) {
        var _0x380e2e = new _0x48cfc4();
        var _0x1bbc6e = {};
        _0x736e7f(_0x4d9648.colorDict, function (_0x4ea920, _0x3eda04) {
          _0x1bbc6e[_0x4ea920] = _0x3eda04;
        });
        var _0x4634d9 = {};
        _0x736e7f(_0x4d9648.regionDict, function (_0x362384, _0x4123ae) {
          _0x4634d9[_0x362384] = new _0x16f823(_0x3e838d[_0x4123ae.texture].Hc, _0x4123ae.x, _0x4123ae.y, _0x4123ae.w, _0x4123ae.h, _0x4123ae.px, _0x4123ae.py, _0x4123ae.pw, _0x4123ae.ph);
        });
        _0x380e2e.Nc = {};
        for (var _0x484f15 = 0x0; _0x484f15 < _0x4d9648.skinArrayDict.length; _0x484f15++) {
          var _0x1a4a5b = _0x4d9648.skinArrayDict[_0x484f15];
          _0x380e2e.Nc[_0x1a4a5b.id] = new _0x48cfc4.WormSkinData('#' + _0x1bbc6e[_0x1a4a5b.prime], _0x1a4a5b.base.map(function (_0x4a6a10) {
            return _0x4634d9[_0x4a6a10];
          }), _0x1a4a5b.glow.map(function (_0x248d47) {
            return _0x4634d9[_0x248d47];
          }));
        }
        var _0x39f95e = _0x4d9648.skinUnknown;
        _0x380e2e.Oc = new _0x48cfc4.WormSkinData('#' + _0x1bbc6e[_0x39f95e.prime], _0x39f95e.base.map(function (_0x30cfa2) {
          return _0x4634d9[_0x30cfa2];
        }), _0x39f95e.glow.map(function (_0x3d050b) {
          return _0x4634d9[_0x3d050b];
        }));
        _0x380e2e.Rc = {};
        _0x736e7f(_0x4d9648.eyesDict, function (_0x14d6a1, _0x5d4868) {
          _0x14d6a1 = parseInt(_0x14d6a1);
          _0x380e2e.Rc[_0x14d6a1] = new _0x48cfc4.WearSkinData(_0x5d4868.base.map(function (_0xea1949) {
            return _0x4634d9[_0xea1949.region];
          }));
        });
        _0x380e2e.Sc = new _0x48cfc4.WearSkinData(_0x4d9648.eyesUnknown.base.map(function (_0x400fae) {
          return _0x4634d9[_0x400fae.region];
        }));
        _0x380e2e.Tc = {};
        _0x736e7f(_0x4d9648.mouthDict, function (_0x51e343, _0x2fb26a) {
          _0x51e343 = parseInt(_0x51e343);
          _0x380e2e.Tc[_0x51e343] = new _0x48cfc4.WearSkinData(_0x2fb26a.base.map(function (_0x77fbf) {
            return _0x4634d9[_0x77fbf.region];
          }));
        });
        _0x380e2e.Uc = new _0x48cfc4.WearSkinData(_0x4d9648.mouthUnknown.base.map(function (_0x358df1) {
          return _0x4634d9[_0x358df1.region];
        }));
        _0x380e2e.Vc = {};
        _0x736e7f(_0x4d9648.glassesDict, function (_0x45231d, _0x50e1ba) {
          _0x45231d = parseInt(_0x45231d);
          _0x380e2e.Vc[_0x45231d] = new _0x48cfc4.WearSkinData(_0x50e1ba.base.map(function (_0x134d00) {
            return _0x4634d9[_0x134d00.region];
          }));
        });
        _0x380e2e.Wc = new _0x48cfc4.WearSkinData(_0x4d9648.glassesUnknown.base.map(function (_0x3f79d2) {
          return _0x4634d9[_0x3f79d2.region];
        }));
        _0x380e2e.Xc = {};
        _0x736e7f(_0x4d9648.hatDict, function (_0x11794f, _0x1a104c) {
          _0x11794f = parseInt(_0x11794f);
          _0x380e2e.Xc[_0x11794f] = new _0x48cfc4.WearSkinData(_0x1a104c.base.map(function (_0x5b3a70) {
            return _0x4634d9[_0x5b3a70.region];
          }));
        });
        _0x380e2e.Yc = new _0x48cfc4.WearSkinData(_0x4d9648.hatUnknown.base.map(function (_0x4bc6c1) {
          return _0x4634d9[_0x4bc6c1.region];
        }));
        _0x380e2e.Jc = {};
        _0x736e7f(_0x4d9648.portionDict, function (_0x427257, _0x46ed32) {
          _0x427257 = parseInt(_0x427257);
          _0x380e2e.Jc[_0x427257] = new _0x48cfc4.PortionSkinData(_0x4634d9[_0x46ed32.base], _0x4634d9[_0x46ed32.glow]);
        });
        var _0x43bd9b = _0x4d9648.portionUnknown;
        _0x380e2e.Kc = new _0x48cfc4.PortionSkinData(_0x4634d9[_0x43bd9b.base], _0x4634d9[_0x43bd9b.glow]);
        _0x380e2e.Lc = {};
        _0x736e7f(_0x4d9648.abilityDict, function (_0x5e93a7, _0x1d1713) {
          _0x5e93a7 = parseInt(_0x5e93a7);
          _0x380e2e.Lc[_0x5e93a7] = new _0x48cfc4.AbilitySkinData(_0x4634d9[_0x1d1713.base]);
        });
        var _0x4d2970 = _0x4d9648.abilityUnknown;
        _0x380e2e.Mc = new _0x48cfc4.AbilitySkinData(_0x4634d9[_0x4d2970.base]);
        _0x380e2e.Pc = {};
        _0x736e7f(_0x4d9648.teamDict, function (_0x526a3d, _0x569ce4) {
          _0x526a3d = parseInt(_0x526a3d);
          _0x380e2e.Pc[_0x526a3d] = new _0x48cfc4.TeamSkinData(_0x569ce4.name, new _0x48cfc4.WormSkinData('#' + _0x1bbc6e[_0x569ce4.skin.prime], [], _0x569ce4.skin.glow.map(function (_0x2b3217) {
            return _0x4634d9[_0x2b3217];
          })), new _0x48cfc4.PortionSkinData([], _0x4634d9[_0x569ce4.portion.glow]));
        });
        _0x380e2e.Qc = new _0x48cfc4.TeamSkinData({}, _0x380e2e.Oc, _0x380e2e.Kc);
        return _0x380e2e;
      };
      _0x104e32.prototype.dd = function (_0x54f15f) {
        var _0x7aeb77 = this.Nc[_0x54f15f];
        return _0x7aeb77 || this.Oc;
      };
      _0x104e32.prototype.ed = function (_0x3a1372) {
        var _0x26ce47 = this.Pc[_0x3a1372];
        return _0x26ce47 || this.Qc;
      };
      _0x104e32.prototype.fd = function (_0x180b2c) {
        var _0x58f929 = this.Rc[_0x180b2c];
        return _0x58f929 || this.Sc;
      };
      _0x104e32.prototype.gd = function (_0x1b5a48) {
        var _0x529043 = this.Tc[_0x1b5a48];
        return _0x529043 || this.Uc;
      };
      _0x104e32.prototype.hd = function (_0x27cc28) {
        var _0x3941a5 = this.Vc[_0x27cc28];
        return _0x3941a5 || this.Wc;
      };
      _0x104e32.prototype.jd = function (_0x33efb8) {
        var _0x344afd = this.Xc[_0x33efb8];
        return _0x344afd || this.Yc;
      };
      _0x104e32.prototype.kd = function (_0x7690c1) {
        var _0x5e25d3 = this.Jc[_0x7690c1];
        return _0x5e25d3 || this.Kc;
      };
      _0x104e32.prototype.ld = function (_0xdbc547) {
        var _0x1f5f7d = this.Lc[_0xdbc547];
        return _0x1f5f7d || this.Mc;
      };
      _0x104e32.TeamSkinData = function () {
        function _0x52bdcf(_0x16a95d, _0x11931e, _0x21e317) {
          this.ad = _0x16a95d;
          this.bd = _0x11931e;
          this.cd = _0x21e317;
        }
        return _0x52bdcf;
      }();
      _0x104e32.WormSkinData = function () {
        function _0x2dfaf7(_0x5bbbae, _0x39382f, _0x427686) {
          this._c = _0x5bbbae;
          this.Zc = _0x39382f;
          this.$c = _0x427686;
        }
        return _0x2dfaf7;
      }();
      _0x104e32.WearSkinData = function () {
        function _0x465514(_0x271341) {
          this.Zc = _0x271341;
        }
        return _0x465514;
      }();
      _0x104e32.PortionSkinData = function () {
        function _0x490d9f(_0x5a8722, _0x43f99e) {
          this.Zc = _0x5a8722;
          this.$c = _0x43f99e;
        }
        return _0x490d9f;
      }();
      _0x104e32.AbilitySkinData = function () {
        function _0x1fc80c(_0x5be7d3) {
          this.Zc = _0x5be7d3;
        }
        return _0x1fc80c;
      }();
      return _0x104e32;
    }();
    var _0x11dc4e = function () {
      function _0x21fc3d() {
        this.md = _0x11dc4e.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x21fc3d.prototype.a = function () {};
      _0x21fc3d.prototype.rd = function (_0x220e6b) {
        this.od = _0x220e6b;
      };
      _0x21fc3d.prototype.G = function (_0x1f21cf) {
        this.md = _0x1f21cf;
        this.sd();
      };
      _0x21fc3d.prototype.td = function (_0x116a5c) {
        this.nd = _0x116a5c;
        this.sd();
      };
      _0x21fc3d.prototype.sd = function () {};
      _0x21fc3d.prototype.ud = function (_0x460118, _0x4c940b) {
        if (!(window.anApp = _0x6eb4ba).p.W) {
          return null;
        }
        var _0x3a8fc8 = _0x460118[_0x4c940b];
        return _0x3a8fc8 == null || _0x3a8fc8.length == 0x0 ? null : _0x3a8fc8[Math.floor(Math.random() * _0x3a8fc8.length)].cloneNode();
      };
      _0x21fc3d.prototype.vd = function (_0x10bbd1, _0x117e6e, _0x436497) {
        if (this.od && !(_0x436497 <= 0x0)) {
          var _0x4f4c27 = this.ud(_0x10bbd1, _0x117e6e);
          if (_0x4f4c27 != null) {
            _0x4f4c27.volume = Math.min(0x1, _0x436497);
            _0x4f4c27.play();
          }
        }
      };
      _0x21fc3d.prototype.wd = function (_0x4a9502, _0x179edc) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x4a9502, _0x179edc);
        }
      };
      _0x21fc3d.prototype.zd = function (_0xd76959, _0x424c2c) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0xd76959, _0x424c2c);
        }
      };
      _0x21fc3d.prototype.Cd = function () {};
      _0x21fc3d.prototype.Dd = function () {};
      _0x21fc3d.prototype.Ed = function () {};
      _0x21fc3d.prototype.Fd = function () {};
      _0x21fc3d.prototype.Gd = function () {};
      _0x21fc3d.prototype.Hd = function () {};
      _0x21fc3d.prototype.Id = function (_0x48e5bb, _0x25a089, _0x450081) {};
      _0x21fc3d.prototype.Jd = function (_0x186e03) {};
      _0x21fc3d.prototype.Kd = function (_0x3f0a58) {};
      _0x21fc3d.prototype.Ld = function (_0x5b4511) {};
      _0x21fc3d.prototype.Md = function (_0x2c4894) {};
      _0x21fc3d.prototype.Nd = function (_0x27e26d) {};
      _0x21fc3d.prototype.Od = function (_0x158f75) {};
      _0x21fc3d.prototype.Pd = function (_0x34c262) {};
      _0x21fc3d.prototype.Qd = function (_0x4b9724) {};
      _0x21fc3d.prototype.Rd = function (_0x3ce478) {};
      _0x21fc3d.prototype.Sd = function (_0x18e043) {};
      _0x21fc3d.prototype.Td = function (_0x3f6e8d) {};
      _0x21fc3d.prototype.Ud = function (_0x58a72a) {};
      _0x21fc3d.prototype.Vd = function (_0x377a39) {};
      _0x21fc3d.prototype.Wd = function (_0xde18ce) {};
      _0x21fc3d.prototype.Xd = function (_0x29c594, _0x1b045c) {};
      _0x21fc3d.prototype.Yd = function (_0x60d11b) {};
      _0x21fc3d.prototype.Zd = function (_0x55ae5f, _0x13c44d, _0x2f8f82) {};
      (function () {
        function _0xaa04b2(_0x52b3ab) {
          this.$d = new _0x1fb1ee(_0x52b3ab, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0xaa04b2.prototype.be = function (_0x5abbe2) {
          if (_0x5abbe2) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0xaa04b2.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0xaa04b2.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x101d68(_0xf26ef0) {
          this.ge = _0xf26ef0.map(function (_0x4d4486) {
            return new _0x1fb1ee(_0x4d4486, 0.4);
          });
          _0x26a8fd(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x26a8fd(_0xcb8d6a, _0x224602, _0x479c92) {
          for (var _0x177e49 = _0x479c92 - 0x1; _0x177e49 > _0x224602; _0x177e49--) {
            var _0x75068c = _0x224602 + Math.floor(Math.random() * (_0x177e49 - _0x224602 + 0x1));
            var _0x113589 = _0xcb8d6a[_0x177e49];
            _0xcb8d6a[_0x177e49] = _0xcb8d6a[_0x75068c];
            _0xcb8d6a[_0x75068c] = _0x113589;
          }
        }
        _0x101d68.prototype.be = function (_0x452065) {
          if (_0x452065) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x101d68.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x101d68.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x101d68.prototype.ke = function (_0x57b0f4) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x57b0f4, 0x64);
            var _0xa3cd4a = (this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je;
            var _0x5950ef = this;
            var _0x2ca3a8 = setTimeout(function () {
              if (_0x5950ef.ae && _0x2ca3a8 == _0x5950ef.ie) {
                _0x5950ef.he.fe(_0x5950ef.je, 0x64);
                _0x5950ef.he = _0x5950ef.le();
                _0x5950ef.he._d.currentTime = 0x0;
                _0x5950ef.ke(_0x5950ef.je);
              }
            }, _0xa3cd4a);
            this.ie = _0x2ca3a8;
          }
        };
        _0x101d68.prototype.le = function () {
          var _0x283b9f = this.ge[0x0];
          var _0x219051 = Math.max(0x1, this.ge.length / 0x2);
          _0x26a8fd(this.ge, _0x219051, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x283b9f;
        };
      })();
      var _0x1fb1ee = function () {
        function _0x3c53c9(_0x112d3d, _0xbfd0c7) {
          this._d = _0x112d3d;
          this.me = _0xbfd0c7;
          this.de = 0x0;
          _0x112d3d.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x3c53c9.prototype.ee = function (_0x2c294c, _0xd60154) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x2c294c, _0xd60154);
        };
        _0x3c53c9.prototype.fe = function (_0x149e14, _0x41415d) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x149e14, _0x41415d);
        };
        _0x3c53c9.prototype.pe = function (_0x286958, _0x364012, _0x58611c) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x4538f1 = this;
          var _0x367c44 = 0x1 / (_0x364012 / _0x58611c);
          var _0x2ac69a = setInterval(function () {
            if (_0x4538f1.oe && _0x2ac69a != _0x4538f1.ne) {
              clearInterval(_0x2ac69a);
              return;
            }
            if (_0x286958) {
              _0x4538f1.de = Math.min(0x1, _0x4538f1.de + _0x367c44);
              _0x4538f1._d.volume = _0x4538f1.de * _0x4538f1.me;
              if (_0x4538f1.de >= 0x1) {
                _0x4538f1.oe = false;
                clearInterval(_0x2ac69a);
              }
            } else {
              _0x4538f1.de = Math.max(0x0, _0x4538f1.de - _0x367c44);
              _0x4538f1._d.volume = _0x4538f1.de * _0x4538f1.me;
              if (_0x4538f1.de <= 0x0) {
                _0x4538f1._d.pause();
                _0x4538f1.oe = false;
                clearInterval(_0x2ac69a);
              }
            }
          }, _0x58611c);
          this.oe = true;
          this.ne = _0x2ac69a;
          this._d.play();
        };
        return _0x3c53c9;
      }();
      _0x21fc3d.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x21fc3d;
    }();
    var _0x1dfc9a = function () {
      function _0x36d006(_0x40f49c) {
        this.se = _0x40f49c;
        this.te = _0x40f49c.get()[0x0];
        this.ue = new _0x1c8759.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x1c8759.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x568031 = [{
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x216076 - 0x0),
        'Ae': 0x0 + Math.random(_0x216076 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x36d006.prototype.a = function () {
        var _0x218eef = window.anApp = _0x6eb4ba;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x568031.length);
        for (var _0xed2e24 = 0x0; _0xed2e24 < this.we.length; _0xed2e24++) {
          this.we[_0xed2e24] = new _0x1c8759.ec();
          this.we[_0xed2e24].texture = _0x218eef.q.Fe;
          this.we[_0xed2e24].anchor.set(0.5);
          this.we[_0xed2e24].zIndex = 0x1;
          this.ve.addChild(this.we[_0xed2e24]);
        }
        this.xe = new Array(_0x218eef.q.Ge.length);
        for (var _0x294dc5 = 0x0; _0x294dc5 < this.xe.length; _0x294dc5++) {
          this.xe[_0x294dc5] = new _0x1c8759.ec();
          this.xe[_0x294dc5].texture = _0x218eef.q.Ge[_0x294dc5];
          this.xe[_0x294dc5].anchor.set(0.5);
          this.xe[_0x294dc5].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x294dc5]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x447fdc = 0x0; _0x447fdc < this.ye.length; _0x447fdc++) {
          this.ye[_0x447fdc] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x36d006.sc = false;
      _0x36d006.Le = function (_0x35f584) {
        _0x36d006.sc = _0x35f584;
      };
      _0x36d006.prototype.Ra = function () {
        var _0x18184f = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x3d1577 = this.se.width();
        var _0x360a55 = this.se.height();
        this.ue.resize(_0x3d1577, _0x360a55);
        this.ue.resolution = _0x18184f;
        this.te.width = _0x18184f * _0x3d1577;
        this.te.height = _0x18184f * _0x360a55;
        var _0x2db18c = Math.max(_0x3d1577, _0x360a55) * 0.8;
        for (var _0x193245 = 0x0; _0x193245 < this.we.length; _0x193245++) {
          this.we[_0x193245].width = _0x2db18c;
          this.we[_0x193245].height = _0x2db18c;
        }
      };
      _0x36d006.prototype.Pa = function (_0x5e8c73, _0x55c86e) {
        if (_0x36d006.sc) {
          var _0x4e7a7e = _0x5e8c73 / 0x3e8;
          var _0x88052d = _0x55c86e / 0x3e8;
          var _0x40cfee = this.se.width();
          var _0x59a16e = this.se.height();
          for (var _0x194a5f = 0x0; _0x194a5f < this.we.length; _0x194a5f++) {
            var _0x34aea4 = _0x568031[_0x194a5f % _0x568031.length];
            var _0x1236a9 = this.we[_0x194a5f];
            var _0x1fb57a = _0x34aea4.Ce * (_0x4e7a7e * 0.08) + _0x34aea4.Ae >= 0x0 ? Math.cos((_0x34aea4.Ce * (_0x4e7a7e * 0.08) + _0x34aea4.Ae) % _0x216076) : Math.cos((_0x34aea4.Ce * (_0x4e7a7e * 0.08) + _0x34aea4.Ae) % _0x216076 + _0x216076);
            var _0x3ef1b9 = _0x34aea4.De * (_0x4e7a7e * 0.08) >= 0x0 ? Math.sin(_0x34aea4.De * (_0x4e7a7e * 0.08) % _0x216076) : Math.sin(_0x34aea4.De * (_0x4e7a7e * 0.08) % _0x216076 + _0x216076);
            var _0x44ec6e = 0.2 + (_0x34aea4.Ae + _0x34aea4.Be * _0x4e7a7e >= 0x0 ? Math.cos((_0x34aea4.Ae + _0x34aea4.Be * _0x4e7a7e) % _0x216076) : Math.cos((_0x34aea4.Ae + _0x34aea4.Be * _0x4e7a7e) % _0x216076 + _0x216076)) * 0.2;
            _0x1236a9.tint = _0x34aea4.Ee;
            _0x1236a9.alpha = _0x44ec6e;
            _0x1236a9.position.set(_0x40cfee * (0.2 + (_0x1fb57a + 0x1) * 0.5 * 0.6), _0x59a16e * (0.1 + (_0x3ef1b9 + 0x1) * 0.5 * 0.8));
          }
          var _0x26d41e = Math.max(_0x40cfee, _0x59a16e) * 0.05;
          for (var _0x2f5b1d = 0x0; _0x2f5b1d < this.xe.length; _0x2f5b1d++) {
            var _0x2bb98a = this.ye[_0x2f5b1d];
            var _0x58bb9a = this.xe[_0x2f5b1d];
            var _0x95e97e = _0x216076 * _0x2f5b1d / this.xe.length + _0x2bb98a.He;
            _0x2bb98a.Ke += _0x2bb98a.Ie * _0x88052d;
            if (_0x2bb98a.Ke > 1.3) {
              _0x2bb98a.He = Math.random() * _0x216076;
              _0x2bb98a.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x2bb98a.Je = 0.15 + Math.random() * 0.7;
              _0x2bb98a.Ke = -0.3;
            }
            var _0x2feb94 = _0x2bb98a.Je + Math.sin(Math.sin(_0x95e97e + _0x4e7a7e * 0.48) * 0x6) * 0.03;
            var _0x332eb0 = _0x2bb98a.Ke;
            var _0x780ff5 = _0x5a27f8(Math.sin(Math.PI * _0x332eb0), 0.1, 0x1);
            var _0x3f53b9 = (0.4 + (0x1 + Math.sin(_0x95e97e + _0x4e7a7e * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x167967 = _0x95e97e + _0x2bb98a.Ie * 0x2 * _0x4e7a7e;
            _0x58bb9a.alpha = _0x780ff5;
            _0x58bb9a.position.set(_0x40cfee * _0x2feb94, _0x59a16e * _0x332eb0);
            _0x58bb9a.rotation = _0x167967;
            var _0x179d35 = _0x58bb9a.texture.width / _0x58bb9a.texture.height;
            _0x58bb9a.width = _0x3f53b9 * _0x26d41e;
            _0x58bb9a.height = _0x3f53b9 * _0x26d41e * _0x179d35;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x36d006;
    }();
    var _0x445805 = function () {
      function _0x2e9fc7() {}
      _0x2e9fc7.Na = "consent_state_2";
      _0x2e9fc7.ya = "showPlayerNames";
      _0x2e9fc7.Me = "musicEnabled";
      _0x2e9fc7.Ne = "sfxEnabled";
      _0x2e9fc7.Oe = "account_type";
      _0x2e9fc7.va = "gameMode";
      _0x2e9fc7.Aa = "nickname";
      _0x2e9fc7.Ba = "skin";
      _0x2e9fc7.d = "prerollCount";
      _0x2e9fc7.La = "shared";
      return _0x2e9fc7;
    }();
    var _0x5c98ad = function () {
      function _0xb67377(_0xe0319f, _0x54ec6d, _0x194717) {
        var _0x39c840 = false;
        var _0x88b8a3 = _0x194717.length;
        var _0x3f21bb = 0x0;
        for (var _0x1e8936 = _0x88b8a3 - 0x1; _0x3f21bb < _0x88b8a3; _0x1e8936 = _0x3f21bb++) {
          if (_0x194717[_0x3f21bb][0x1] > _0x54ec6d != _0x194717[_0x1e8936][0x1] > _0x54ec6d && _0xe0319f < (_0x194717[_0x1e8936][0x0] - _0x194717[_0x3f21bb][0x0]) * (_0x54ec6d - _0x194717[_0x3f21bb][0x1]) / (_0x194717[_0x1e8936][0x1] - _0x194717[_0x3f21bb][0x1]) + _0x194717[_0x3f21bb][0x0]) {
            _0x39c840 = !_0x39c840;
          }
        }
        return _0x39c840;
      }
      var _0x5a4b16 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x57b769, _0x18310d) {
          return _0xb67377(_0x18310d, _0x57b769, _0x5a4b16);
        }
      };
    }();
    var _0x5aa9c0 = function () {
      function _0x43d30b(_0x33004b) {
        var _0x17dd34 = undefined;
        _0x17dd34 = _0x33004b > 0x0 ? '+' + Math.floor(_0x33004b) : _0x33004b < 0x0 ? '-' + Math.floor(_0x33004b) : '0';
        var _0x2ac0bd = Math.min(1.5, 0.5 + _0x33004b / 0x258);
        var _0xa8ab0b = undefined;
        if (_0x33004b < 0x1) {
          _0xa8ab0b = "0xFFFFFF";
        } else {
          if (_0x33004b < 0x1e) {
            var _0x2b6465 = (_0x33004b - 0x1) / 0x1d;
            _0xa8ab0b = ((((0x1 - _0x2b6465) * 0x1 + _0x2b6465 * 0.96) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x2b6465) * 0x1 + _0x2b6465 * 0.82) * 0xff & 0xff) << 0x8) + (((0x1 - _0x2b6465) * 0x1 + _0x2b6465 * 0x0) * 0xff & 0xff);
          } else {
            if (_0x33004b < 0x12c) {
              var _0x290afa = (_0x33004b - 0x1e) / 0x10e;
              _0xa8ab0b = ((((0x1 - _0x290afa) * 0.96 + _0x290afa * 0.93) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x290afa) * 0.82 + _0x290afa * 0.34) * 0xff & 0xff) << 0x8) + (((0x1 - _0x290afa) * 0x0 + _0x290afa * 0.25) * 0xff & 0xff);
            } else {
              if (_0x33004b < 0x2bc) {
                var _0x1e3514 = (_0x33004b - 0x12c) / 0x190;
                _0xa8ab0b = ((((0x1 - _0x1e3514) * 0.93 + _0x1e3514 * 0.98) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x1e3514) * 0.34 + _0x1e3514 * 0x0) * 0xff & 0xff) << 0x8) + (((0x1 - _0x1e3514) * 0.25 + _0x1e3514 * 0.98) * 0xff & 0xff);
              } else {
                _0xa8ab0b = 16318713;
              }
            }
          }
        }
        var _0x349169 = Math.random();
        var _0xd8c94f = 0x1 + Math.random() * 0.5;
        return new _0x265980(_0x17dd34, _0xa8ab0b, true, 0.5, _0x2ac0bd, _0x349169, _0xd8c94f);
      }
      function _0x27e4b5(_0x5bc089, _0x178a83) {
        var _0x4b7bd0 = undefined;
        var _0x13035a = undefined;
        if (_0x178a83) {
          _0x4b7bd0 = 1.3;
          _0x13035a = 15554111;
        } else {
          _0x4b7bd0 = 1.1;
          _0x13035a = 16044288;
        }
        return new _0x265980(_0x5bc089, _0x13035a, true, 0.5, _0x4b7bd0, 0.5, 0.7);
      }
      var _0x11d6bc = _0x3ec824(_0x1c8759.Zb, function () {
        _0x1c8759.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x11d6bc.prototype.Re = function (_0x5551be) {
        this.Qe += _0x5551be;
        if (this.Qe >= 0x1) {
          var _0xbadb9c = Math.floor(this.Qe);
          this.Qe -= _0xbadb9c;
          var _0x2faddf = _0x43d30b(_0xbadb9c);
          this.addChild(_0x2faddf);
          this.Pe.push(_0x2faddf);
        }
      };
      let _0x1e3d5d = 0x0;
      function _0x11e5aa() {
        _0x1e3d5d = 0x0;
        console.log("تم تصفير عداد الصوت.");
      }
      _0x11d6bc.prototype.Se = function (_0x17c4c8) {
        _0x3e4a7f("count", _0x17c4c8);
        if (_0x17c4c8) {
          if (!theoKzObjects.ModeStremerheadshot) {
            const _0x4ef863 = new Audio();
            if (_0x1e3d5d % 0xa === 0x9) {
              _0x4ef863.src = "https://wormateup.live/up/video/monster-kill-hahaha.mp3";
            } else {
              _0x4ef863.src = localStorage.getItem("selectedSound") || 'https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3';
            }
            if (localStorage.getItem("isMuted") !== "true") {
              _0x4ef863.play()['catch'](function (_0x157a50) {
                console.error("Error playing sound: ", _0x157a50);
              });
            }
            _0x1e3d5d++;
            if (_0x1e3d5d % 0xa === 0x0) {
              _0x1e3d5d = 0x0;
            }
          }
          var _0x16dcba = localStorage.getItem('headshotMessage') || " Yapıyorsun Bu İşi";
          var _0x35143a = _0x27e4b5(_0x16dcba, true);
          this.addChild(_0x35143a);
          this.Pe.push(_0x35143a);
          if (_0x35143a) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(() => theoKzObjects.emoji_headshot = false, 0xbb8);
          }
        } else {
          var _0x41aebf = localStorage.getItem("killMessage") || "Biri Çarptı Knk ";
          var _0x35143a = _0x27e4b5(_0x41aebf, false);
          this.addChild(_0x35143a);
          this.Pe.push(_0x35143a);
          if (_0x35143a) {
            theoKzObjects.emoji_kill = true;
            setTimeout(() => theoKzObjects.emoji_kill = false, 0xbb8);
          }
        }
      };


      
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          _0x11e5aa();
        //  console.log("Oyuncu Devam Butonuna Bastı.");
        });
        $(document).on("click", "#final-replay", function () {
          _0x11e5aa();
         // console.log("Oyuncu yeniden başlatma tuşuna bastı.");
        });
        $(document).on("keydown", function (_0x2508a2) {
          if (_0x2508a2.key === 'r' || _0x2508a2.key === 'R') {
            _0x11e5aa();
          //  console.log("Oyuncu yeniden dogmak için bastı R.");
          }
        });
      });
      _0x11d6bc.prototype.Te = function (_0x1b6e01, _0x329f11) {
        var _0x5beb6f = (window.anApp = _0x6eb4ba).s.H.wb;
        var _0x4b950c = _0x5beb6f.ue.width / _0x5beb6f.ue.resolution;
        var _0xdcc78e = _0x5beb6f.ue.height / _0x5beb6f.ue.resolution;
        var _0x267021 = 0x0;
        while (_0x267021 < this.Pe.length) {
          var _0x4ce898 = this.Pe[_0x267021];
          _0x4ce898.Ue = _0x4ce898.Ue + _0x329f11 / 0x7d0 * _0x4ce898.Ve;
          _0x4ce898.We = _0x4ce898.We + _0x329f11 / 0x7d0 * _0x4ce898.Xe;
          _0x4ce898.alpha = Math.sin(Math.PI * _0x4ce898.We) * 0.5;
          _0x4ce898.scale.set(_0x4ce898.Ue);
          _0x4ce898.position.x = _0x4b950c * (0.25 + _0x4ce898.Ye * 0.5);
          _0x4ce898.position.y = _0x4ce898.Ze ? _0xdcc78e * (0x1 - (0x1 + _0x4ce898.We) * 0.5) : _0xdcc78e * (0x1 - (0x0 + _0x4ce898.We) * 0.5);
          if (_0x4ce898.We > 0x1) {
            _0x22332e(_0x4ce898);
            this.Pe.splice(_0x267021, 0x1);
            _0x267021--;
          }
          _0x267021++;
        }
      };
      var _0x265980 = function () {
        return _0x3ec824(_0x1c8759.fc, function (_0xecc71, _0x16778c, _0x2d4e57, _0x3f53f5, _0x24dabe, _0xd6ccd3, _0x2c28de) {
          _0x1c8759.fc.call(this, _0xecc71, {
            'fill': _0x16778c,
            'fontFamily': "wormup",
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x2d4e57;
          this.Ue = _0x3f53f5;
          this.Ve = _0x24dabe;
          this.Ye = _0xd6ccd3;
          this.We = 0x0;
          this.Xe = _0x2c28de;
        });
      }();
      return _0x11d6bc;
    }();
    var _0x1c3202 = function () {
      function _0x5b68af(_0x55597c, _0x43a02e) {
        this.Gc = _0x55597c;
        this.Hc = _0x43a02e;
      }
      return _0x5b68af;
    }();
    var _0x328318 = {
      '$e': 0x0,
      '_e': 0x10
    };
    var _0x3698bc = function () {
      function _0x459c55() {
        this.af = _0x328318.$e;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x459c55.TEAM_DEFAULT = 0x0;
      _0x459c55.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0x459c55;
    }();
    var _0x2174f7 = function () {
      function _0x423bc1(_0x5c1872) {
        this.se = _0x5c1872;
        this.te = _0x5c1872.get()[0x0];
        this.ue = new _0x1c8759.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x1c8759.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 0x168);
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x3a8d30();
        this.mf = new _0x1c8759.bc();
        this.nf = new _0x1c8759.Zb();
        this.pf = new _0x1c8759.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x1c8759.Zb();
        this.rf = new _0x1c8759.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x1c8759.Zb();
        this.tf = new _0x48b711();
        this.uf = new _0x3ef0f4();
        this.vf = new _0x4abb1c();
        this.wf = new _0x5aa9c0();
        this.xf = new _0x1c8759.ec();
        this.yf = {
          'x': 0x0,
          'y': -0x14
        };
        this.a();
      }
      _0x423bc1.prototype.a = function () {
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x6eb4ba).q.Af;
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
      };
      _0x423bc1.prototype.Ra = function () {
        var _0x11a69c = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x1957ea = this.se.width();
        var _0x4127ef = this.se.height();
        this.ue.resize(_0x1957ea, _0x4127ef);
        this.ue.resolution = _0x11a69c;
        this.te.width = _0x11a69c * _0x1957ea;
        this.te.height = _0x11a69c * _0x4127ef;
        this.jf = Math.min(Math.min(_0x1957ea, _0x4127ef), 0.625 * Math.max(_0x1957ea, _0x4127ef));
        this.xf.position.x = _0x1957ea / 0x2;
        this.xf.position.y = _0x4127ef / 0x2;
        this.xf.width = _0x1957ea;
        this.xf.height = _0x4127ef;
        this.vf.position.x = _0x1957ea - 0xe1;
        this.vf.position.y = 0x1;
        window.changedNf = () => this.jf = Math.min(Math.max(_0x1957ea, _0x4127ef), window.multiplier * Math.min(_0x1957ea, _0x4127ef));
        if (theoKzObjects.ModeStremer) {
          this.tf.position.x = _0x1957ea / 0x2 + 0x96;
          this.uf.position.x = _0x1957ea / 0x2 + 0xa;
          this.vf.position.x = _0x1957ea / 0x2 - 0x82;
        } else {
          this.tf.position.x = 0x3c;
          this.uf.position.x = 0x6e;
          this.vf.position.x = _0x1957ea - 0xc8;
        }
        this.tf.position.y = 0x3c;
        this.uf.position.y = 0xa;
        this.vf.position.y = 0x3;
        this.tf.addChild(ctx.hoisinhnhanh);
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.quaytron);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0x423bc1.prototype.Te = function (_0xc48b8a, _0x339503) {
        var _0x522cee = window.anApp = _0x6eb4ba;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0xc48b8a.af == _0x328318.$e ? _0x522cee.q.Cf : _0x522cee.q.Df);
        var _0x32c9c2 = this.mf;
        _0x32c9c2.clear();
        _0x32c9c2.lineStyle(0.8, 0xff0000);
        _0x32c9c2.drawCircle(0x0, 0x0, _0xc48b8a.ub);
        _0x32c9c2.endFill();
        this.vf.Ef = _0x339503;
        this.sf.visible = _0x339503;
      };
      _0x423bc1.prototype.Pa = function (_0x3111f5, _0x4b216c) {
        if (!(this.ue.width <= 0x5)) {
          var _0x5b9007 = window.anApp = _0x6eb4ba;
          var _0xb19724 = _0x5b9007.o.N;
          var _0x7ed602 = this.ue.width / this.ue.resolution;
          var _0x2db975 = this.ue.height / this.ue.resolution;
          this['if'] = _0x5b9007.o.jb > this['if'] ? Math.min(_0x5b9007.o.jb, this['if'] + _0x4b216c * 0.002) : Math.max(_0x5b9007.o.jb, this['if'] - _0x4b216c * 0.002);
          var _0x1044cf = this.jf / this['if'];
          var _0x381732 = _0x5b9007.o.N.Ff[_0x2a3930.ZOOM_TYPE];
          var _0x716a75 = _0x381732 != null && _0x381732.sc;
          this.kf = _0x5a27f8(this.kf + _0x4b216c / 0x3e8 * ((_0x716a75 ? 0x1 : 0x0) * 0.1 - this.kf), 0x0, 0x1);
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x4b216c * 0.01;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x3111f5 / 0x4b0 * 0x2 * Math.PI);
          var _0x19fc77 = _0xb19724.Gf();
          this.yf.x = _0x19fc77.x + (this.yf.x - _0x19fc77.x) * Math.pow(0x1 - theoKzObjects.smoothCamera, _0x4b216c / 33.333);
          this.yf.y = _0x19fc77.y + (this.yf.y - _0x19fc77.y) * Math.pow(0.5, _0x4b216c / 33.333);
          var _0x2b24b4 = _0x7ed602 / _0x1044cf / 0x2;
          var _0xba8dcb = _0x2db975 / _0x1044cf / 0x2;
          _0x5b9007.o.yb(this.yf.x - _0x2b24b4 * 1.3, this.yf.x + _0x2b24b4 * 1.3, this.yf.y - _0xba8dcb * 1.3, this.yf.y + _0xba8dcb * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x2b24b4 * 0x2, _0xba8dcb * 0x2);
          var _0x43fd9e = _0x5b9007.o.fb.ub;
          this.ve.scale.x = _0x1044cf;
          this.ve.scale.y = _0x1044cf;
          this.ve.position.x = _0x7ed602 / 0x2 - this.yf.x * _0x1044cf;
          this.ve.position.y = _0x2db975 / 0x2 - this.yf.y * _0x1044cf;
          var _0x1de1ae = Math.hypot(_0x19fc77.x, _0x19fc77.y);
          if (_0x1de1ae > _0x43fd9e - 0xa) {
            this.hf = _0x5a27f8(0x1 + (_0x1de1ae - _0x43fd9e) / 0xa, 0x0, 0x1);
            var _0x2b89c7 = Math.cos(this.ff * _0x216076 / 0x168) * (0x1 - this.hf) + this.hf * 0x1;
            var _0x4a66a2 = Math.sin(this.ff * _0x216076 / 0x168) * (0x1 - this.hf);
            var _0x2bbee0 = (Math.atan2(_0x4a66a2, _0x2b89c7) + _0x216076) % _0x216076 * 0x168 / _0x216076;
            var _0x34aeda = this.hf * (0.5 + this.gf * 0.5);
            var _0x5e6d63 = _0x25d498(Math.floor(_0x2bbee0), 0x1, 0.85 - this.hf * 0.25);
            this.lf.Hf(_0x5e6d63[0x0], _0x5e6d63[0x1], _0x5e6d63[0x2], 0.1 + _0x34aeda * 0.2);
          } else {
            this.hf = 0x0;
            var _0x2ef982 = _0x25d498(Math.floor(this.ff), 0x1, 0.85);
            this.lf.Hf(_0x2ef982[0x0], _0x2ef982[0x1], _0x2ef982[0x2], 0.1);
          }
          var _0x1a4f53 = 0x0;
          for (; _0x1a4f53 < this.sf.children.length; _0x1a4f53++) {
            var _0x12d36f = this.sf.children[_0x1a4f53];
            _0x12d36f.position.x = _0x7ed602 / 0x2 - (this.yf.x - _0x12d36f.If.x) * _0x1044cf;
            _0x12d36f.position.y = _0x2db975 / 0x2 - (this.yf.y - _0x12d36f.If.y) * _0x1044cf;
          }
          this.tf.Jf.position.x = _0x19fc77.x / _0x43fd9e * this.tf.Kf;
          this.tf.Jf.position.y = _0x19fc77.y / _0x43fd9e * this.tf.Kf;
          this.uf.Qa(_0x3111f5);
          this.wf.Te(_0x3111f5, _0x4b216c);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x423bc1.prototype.Lf = function (_0x3399, _0x18fb6b) {
        _0x18fb6b.Of.Nf.Mf().zIndex = (_0x3399 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x18fb6b.Of.Pf.Mf());
        this.pf.addChild(_0x18fb6b.Of.Nf.Mf());
      };
      _0x423bc1.prototype.Qf = function (_0x4dce7c, _0x25d857, _0x5abf8b) {
        _0x25d857.Rf.zIndex = (window.anApp = _0x6eb4ba).o.fb.bf ? 0x0 : 0xa + (_0x4dce7c + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x25d857.Rf);
        if (_0x4dce7c != (window.anApp = _0x6eb4ba).o.fb.bf) {
          this.sf.addChild(_0x5abf8b);
        }
      };
      var _0x48b711 = function () {
        return _0x3ec824(_0x1c8759.Zb, function () {
          _0x1c8759.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x1c8759.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x1c8759.bc();
          var _0x18d012 = new _0x1c8759.bc();
          _0x18d012.beginFill("black", 0.4);
          _0x18d012.drawCircle(0x0, 0x0, this.Kf);
          _0x18d012.endFill();
          _0x18d012.lineStyle(0x2, 0xffffff);
          _0x18d012.drawCircle(0x0, 0x0, this.Kf);
          _0x18d012.moveTo(0x0, -this.Kf);
          _0x18d012.lineTo(0x0, +this.Kf);
          _0x18d012.moveTo(-this.Kf, 0x0);
          _0x18d012.lineTo(+this.Kf, 0x0);
          _0x18d012.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(0xff0000);
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x18d012);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x3ef0f4 = function () {
        var _0x345243 = _0x3ec824(_0x1c8759.Zb, function () {
          _0x1c8759.Zb.call(this);
          this.Tf = {};
        });
        _0x345243.prototype.Qa = function (_0x19df60) {
          var _0x178053 = 0.5 + Math.cos(_0x216076 * (_0x19df60 / 0x3e8 / 1.6)) * 0.5;
          var _0xed1efe;
          for (_0xed1efe in this.Tf) {
            var _0x58b9e9 = this.Tf[_0xed1efe];
            var _0x4be3ec = _0x58b9e9.Uf;
            _0x58b9e9.alpha = 0x1 - _0x4be3ec + _0x4be3ec * _0x178053;
          }
        };
        _0x345243.prototype.Te = function (_0x381dcc) {
          var _0x26eb34;
          for (_0x26eb34 in this.Tf) {
            if (_0x381dcc[_0x26eb34] == null || !_0x381dcc[_0x26eb34].sc) {
              _0x22332e(this.Tf[_0x26eb34]);
              delete this.Tf[_0x26eb34];
            }
          }
          var _0xa6e7be = 0x0;
          var _0x5c00f0;
          for (_0x5c00f0 in _0x381dcc) {
            var _0xdc2ba6 = _0x381dcc[_0x5c00f0];
            if (_0xdc2ba6.sc) {
              var _0x52fcbd = this.Tf[_0x5c00f0];
              if (!_0x52fcbd) {
                var _0x14387a = (window.anApp = _0x6eb4ba).p.Dc().ld(_0xdc2ba6.rc).Zc;
                _0x52fcbd = new _0x2c1a17();
                _0x52fcbd.texture = _0x14387a.Hc;
                _0x52fcbd.width = 0x28;
                _0x52fcbd.height = 0x28;
                this.Tf[_0x5c00f0] = _0x52fcbd;
                this.addChild(_0x52fcbd);
              }
              _0x3a8a1c(this, _0x5c00f0, _0xdc2ba6.tc);
              _0x52fcbd.Uf = _0xdc2ba6.tc;
              if (theoKzObjects.ModeStremer) {
                _0x52fcbd.position.x = _0xa6e7be + 0xe1;
              } else {
                _0x52fcbd.position.x = _0xa6e7be;
              }
              _0xa6e7be = _0xa6e7be + 0x28;
            }
          }
        };
        var _0x2c1a17 = function () {
          return _0x3ec824(_0x1c8759.ec, function () {
            _0x1c8759.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x345243;
      }();
      var _0x4abb1c = function () {
        var _0x5c4f55 = _0x3ec824(_0x1c8759.Zb, function () {
          _0x1c8759.Zb.call(this);
          this.Ef = true;
          this.Vf = 0x10;
          this.Wf = 0x11;
          this.Pe = [];
          var _0x5b742d = 0x0;
          for (; _0x5b742d < 0x4; _0x5b742d++) {
            this.Xf();
          }
        });
        _0x5c4f55.prototype.Te = function (_0x447f88) {
          var _0x347b3d = window.anApp = _0x6eb4ba;
          var _0x400275 = _0x347b3d.o.fb.af == _0x328318._e;
          var _0x2d118e = 0x7;
          var _0x50c383 = 0x0;
          if (_0x50c383 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x50c383].Yf(0x1, "white");
          this.Pe[_0x50c383].Zf('', window.I18N_MESSAGES[''], '(' + _0x347b3d.o.tb + " online)");
          this.Pe[_0x50c383].position.y = _0x2d118e;
          _0x2d118e = _0x2d118e + this.Vf;
          _0x50c383 = _0x50c383 + 0x1;
          if (_0x447f88.$f.length > 0x0) {
            _0x2d118e = _0x2d118e + this.Wf;
          }
          var _0x37a70b = 0x0;
          for (; _0x37a70b < _0x447f88.$f.length; _0x37a70b++) {
            var _0x34895f = _0x447f88.$f[_0x37a70b];
            var _0x2cdbef = _0x347b3d.p.Dc().ed(_0x34895f._f);
            if (_0x50c383 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x50c383].Yf(0.8, _0x2cdbef.bd._c);
            this.Pe[_0x50c383].Zf('' + (_0x37a70b + 0x1), _0x304328(_0x2cdbef.ad), '' + Math.floor(_0x34895f.M));
            this.Pe[_0x50c383].position.y = _0x2d118e;
            _0x2d118e = _0x2d118e + this.Vf;
            _0x50c383 = _0x50c383 + 0x1;
          }
          if (_0x447f88.ag.length > 0x0) {
            _0x2d118e = _0x2d118e + this.Wf;
          }
          var _0x59f45d = 0x0;
          for (; _0x59f45d < _0x447f88.ag.length; _0x59f45d++) {
            var _0x1ad84e = _0x447f88.ag[_0x59f45d];
            var _0x2f9cfb = _0x347b3d.o.fb.bf == _0x1ad84e.bg;
            var _0xf61924 = undefined;
            var _0x53f87b = undefined;
            if (_0x2f9cfb) {
              _0xf61924 = "yellow";
              _0x53f87b = _0x347b3d.o.N.Mb.ad;
            } else {
              var _0x4caec0 = _0x347b3d.o.hb[_0x1ad84e.bg];
              if (_0x4caec0 != null) {
                _0xf61924 = _0x400275 ? _0x347b3d.p.Dc().ed(_0x4caec0.Mb.cg).bd._c : _0x347b3d.p.Dc().dd(_0x4caec0.Mb.dg)._c;
                _0x53f87b = this.Ef ? _0x4caec0.Mb.ad : "---";
              } else {
                _0xf61924 = "gray";
                _0x53f87b = '?';
              }
            }
            if (_0x2f9cfb) {
              _0x2d118e = _0x2d118e + this.Wf;
            }
            if (_0x50c383 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x50c383].Yf(_0x2f9cfb ? 0x1 : 0.8, _0xf61924);
            var _0x351b73 = Math.floor(_0x1ad84e.M);
            _0x351b73.dotFormat();
            this.Pe[_0x50c383].Zf('' + (_0x59f45d + 0x1), _0x53f87b, '' + _0x351b73.dotFormat());
            this.Pe[_0x50c383].position.y = _0x2d118e;
            _0x2d118e = _0x2d118e + this.Vf;
            _0x50c383 = _0x50c383 + 0x1;
            if (_0x2f9cfb) {
              _0x2d118e = _0x2d118e + this.Wf;
            }
          }
          if (_0x347b3d.o.O > _0x447f88.ag.length) {
            _0x2d118e = _0x2d118e + this.Wf;
            if (_0x50c383 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x50c383].Yf(0x2, "white");
            window.tuNewScore = Math.floor(_0x347b3d.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0x50c383].Zf('' + _0x347b3d.o.O, _0x347b3d.o.N.Mb.ad, '' + window.tuNewScore.dotFormat());
            this.Pe[_0x50c383].position.y = _0x2d118e;
            _0x2d118e = _0x2d118e + this.Vf;
            _0x50c383 = _0x50c383 + 0x1;
            _0x2d118e = _0x2d118e + this.Wf;
          }
          while (this.Pe.length > _0x50c383) {
            _0x22332e(this.Pe.pop());
          }
        };
        _0x5c4f55.prototype.Xf = function () {
          var _0x4d9a4e = new _0x2d3107();
          _0x4d9a4e.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x4d9a4e.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x4d9a4e);
          this.addChild(_0x4d9a4e);
        };
        var _0x2d3107 = function () {
          var _0x15e7a4 = _0x3ec824(_0x1c8759.Zb, function () {
            _0x1c8759.Zb.call(this);
            this.eg = new _0x1c8759.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.eg.anchor.x = 0x2;
            this.eg.position.x = 0x4;
            this.addChild(this.eg);
            this.fg = new _0x1c8759.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x4;
            this.addChild(this.fg);
            this.gg = new _0x1c8759.fc('', {
              'fontFamily': 'wormup',
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xbe;
            this.addChild(this.gg);
          });
          _0x15e7a4.prototype.Zf = function (_0x58638f, _0x517c7f, _0x5388e5) {
            this.eg.text = _0x58638f;
            this.gg.text = _0x5388e5;
            var _0x50ecc2 = _0x517c7f;
            this.fg.text = _0x50ecc2;
            while (this.fg.width > 0x78) {
              _0x50ecc2 = _0x50ecc2.substring(0x0, _0x50ecc2.length - 0x1);
              this.fg.text = _0x50ecc2 + '..';
            }
          };
          _0x15e7a4.prototype.Yf = function (_0x556ad6, _0x43f576) {
            this.eg.alpha = _0x556ad6;
            this.eg.style.fill = _0x43f576;
            this.fg.alpha = _0x556ad6;
            this.fg.style.fill = _0x43f576;
            this.gg.alpha = _0x556ad6;
            this.gg.style.fill = _0x43f576;
          };
          return _0x15e7a4;
        }();
        return _0x5c4f55;
      }();
      return _0x423bc1;
    }();
    var _0x9c712d = function () {
      function _0x5befef(_0x4ae391) {
        this.o = _0x4ae391;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x5befef.prototype.Xb = function (_0x151f78) {
        this.hg.push(new DataView(_0x151f78));
      };
      _0x5befef.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x5befef.prototype.Bb = function () {
        for (var _0x38ae6d = 0x0; _0x38ae6d < 0xa; _0x38ae6d++) {
          if (this.hg.length === 0x0) {
            return;
          }
          var _0x4c05f7 = this.hg.shift();
          try {
            this.jg(_0x4c05f7);
          } catch (_0x408dee) {
            console.log("DataReader error: " + _0x408dee);
            throw _0x408dee;
          }
        }
      };
      _0x5befef.prototype.jg = function (_0x4903be) {
        switch (_0x4903be.mc(0x0) & 0xff) {
          case 0x0:
            this.kg(_0x4903be, 0x1);
            return;
          case 0x1:
            this.lg(_0x4903be, 0x1);
            return;
          case 0x2:
            this.mg(_0x4903be, 0x1);
            return;
          case 0x3:
            this.ng(_0x4903be, 0x1);
            return;
          case 0x4:
            this.og(_0x4903be, 0x1);
            return;
          case 0x5:
            this.pg(_0x4903be, 0x1);
            return;
        }
      };
      _0x5befef.prototype.kg = function (_0x325b3f, _0x469867) {
       // console.log('sgp1');
        this.o.fb.af = _0x325b3f.mc(_0x469867);
        _0x469867 = _0x469867 + 0x1;
        var _0x26b118 = _0x325b3f.nc(_0x469867);
        _0x469867 = _0x469867 + 0x2;
        this.o.fb.bf = _0x26b118;
        this.o.N.Mb.Lb = _0x26b118;
        this.o.fb.ub = _0x325b3f.pc(_0x469867);
        _0x469867 = _0x469867 + 0x4;
        this.o.fb.cf = _0x325b3f.pc(_0x469867);
        _0x469867 = _0x469867 + 0x4;
        this.o.fb.df = _0x325b3f.pc(_0x469867);
        _0x469867 = _0x469867 + 0x4;
        (window.anApp = _0x6eb4ba).s.H.wb.Te(this.o.fb, (window.anApp = _0x6eb4ba).s.xa.wa());
       // console.log("sgp2");
        return _0x469867;
      };
      _0x5befef.prototype.lg = function (_0xf9a3c7, _0x253e85) {
        var _0x496bec = this.ig++;
        var _0x3d0709 = _0xf9a3c7.nc(_0x253e85);
        _0x253e85 += 0x2;
        var _0xc2d2ad = undefined;
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x5ba5e5 = 0x0; _0x5ba5e5 < _0xc2d2ad; _0x5ba5e5++) {
          _0x253e85 = this.sg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x2e1f57 = 0x0; _0x2e1f57 < _0xc2d2ad; _0x2e1f57++) {
          _0x253e85 = this.tg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x2c84bf = 0x0; _0x2c84bf < _0xc2d2ad; _0x2c84bf++) {
          _0x253e85 = this.ug(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0xcaeb7b = 0x0; _0xcaeb7b < _0xc2d2ad; _0xcaeb7b++) {
          _0x253e85 = this.vg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x1e68de = 0x0; _0x1e68de < _0xc2d2ad; _0x1e68de++) {
          _0x253e85 = this.wg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x4a9bc0 = 0x0; _0x4a9bc0 < _0xc2d2ad; _0x4a9bc0++) {
          _0x253e85 = this.xg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x23712b = 0x0; _0x23712b < _0xc2d2ad; _0x23712b++) {
          _0x253e85 = this.yg(_0xf9a3c7, _0x253e85);
        }
        _0xc2d2ad = this.qg(_0xf9a3c7, _0x253e85);
        _0x253e85 += this.rg(_0xc2d2ad);
        for (var _0x458249 = 0x0; _0x458249 < _0xc2d2ad; _0x458249++) {
          _0x253e85 = this.zg(_0xf9a3c7, _0x253e85);
        }
        if (_0x496bec > 0x0) {
          _0x253e85 = this.Ag(_0xf9a3c7, _0x253e85);
        }
        this.o.Qb(_0x496bec, _0x3d0709);
        return _0x253e85;
      };
      _0x5befef.prototype.vg = function (_0x4b762d, _0x5a89d8) {
        var _0x595eba = new _0x10e6d0.Config();
        _0x595eba.Lb = _0x4b762d.nc(_0x5a89d8);
        _0x5a89d8 = _0x5a89d8 + 0x2;
        _0x595eba.cg = this.o.fb.af == _0x328318._e ? _0x4b762d.mc(_0x5a89d8++) : _0x3698bc.TEAM_DEFAULT;
        _0x595eba.dg = _0x4b762d.nc(_0x5a89d8);
        let _0x5d536c = _0x5a89d8;
        _0x5a89d8 = _0x5a89d8 + 0x2;
        _0x595eba.Bg = _0x4b762d.nc(_0x5a89d8);
        let _0x3cb658 = _0x5a89d8;
        _0x5a89d8 = _0x5a89d8 + 0x2;
        _0x595eba.Cg = _0x4b762d.nc(_0x5a89d8);
        let _0x333b05 = _0x5a89d8;
        _0x5a89d8 = _0x5a89d8 + 0x2;
        _0x595eba.Dg = _0x4b762d.nc(_0x5a89d8);
        let _0x3c6676 = _0x5a89d8;
        _0x5a89d8 = _0x5a89d8 + 0x2;
        _0x595eba.Eg = _0x4b762d.nc(_0x5a89d8);
        let _0x623ded = _0x5a89d8;
        _0x5a89d8 = _0x5a89d8 + 0x2;
        var _0x3b4f65 = _0x4b762d.mc(_0x5a89d8);
        _0x5a89d8 = _0x5a89d8 + 0x1;
        var _0x163e41 = '';
        var _0x784a19 = 0x0;
        for (; _0x784a19 < _0x3b4f65; _0x784a19++) {
          _0x163e41 = _0x163e41 + String.fromCharCode(_0x4b762d.nc(_0x5a89d8));
          _0x5a89d8 = _0x5a89d8 + 0x2;
        }
        if (_0x5a89d8 > 0xd2) {
          for (let _0x5bad31 in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[_0x5bad31].Mb.ad)) {
            //  console.log("nombre: " + this.o.hb[_0x5bad31].Mb.ad);
              var _0x2b2ed1 = this.o.hb[_0x5bad31].Mb.ad.substr(-0xd);
            //  console.log("elimina spacios: " + _0x2b2ed1);
              _0x5befef = _0x2b2ed1.substr(0x0, 0x4);
            //  console.log("primeros digitos: " + _0x5befef);
              let _0x34cb37 = _0x2b2ed1.substr(0x4, 0x3);
             // console.log("segundos digitos: " + _0x34cb37);
              let _0x52dcff = _0x2b2ed1.substr(0x7, 0x3);
            //  console.log("tercer digitos: " + _0x52dcff);
              let _0x59a8e2 = _0x2b2ed1.substr(0xa, 0x3);
             // console.log("mouthId_A: " + _0x59a8e2);
              if (_0x5befef !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(_0x5befef)) !== -0x1) {
                this.o.hb[_0x5bad31].Mb.dg = parseInt(_0x5befef);
              }
              if (_0x34cb37 !== '000') {
                this.o.hb[_0x5bad31].Mb.Eg = parseInt(_0x34cb37);
              }
              if (_0x52dcff !== "000") {
                this.o.hb[_0x5bad31].Mb.Bg = parseInt(_0x52dcff);
              }
              if (_0x59a8e2 !== "000") {
                this.o.hb[_0x5bad31].Mb.Cg = parseInt(_0x59a8e2);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x595eba.Lb) {
          _0x595eba.dg = theoKzObjects.PropertyManager.rh;
          _0x595eba.Bg = theoKzObjects.PropertyManager.sh;
          _0x595eba.Cg = theoKzObjects.PropertyManager.th;
          _0x595eba.Dg = theoKzObjects.PropertyManager.uh;
          _0x595eba.Eg = theoKzObjects.PropertyManager.vh;
          _0x4b762d.setInt16(_0x5d536c, _0x595eba.dg);
          _0x4b762d.setInt16(_0x3cb658, _0x595eba.Bg);
          _0x4b762d.setInt16(_0x333b05, _0x595eba.Cg);
          _0x4b762d.setInt16(_0x3c6676, _0x595eba.Dg);
          _0x4b762d.setInt16(_0x623ded, _0x595eba.Eg);
          _wormup.aload = true;
          _wormup.aId = _0x5d536c;
        }
        _0x595eba.ad = _0x163e41;
        if (this.o.fb.bf === _0x595eba.Lb) {
          this.o.N.Fg(_0x595eba);
          _0x595eba.Mb = _0x595eba.Lb;
          _0x595eba.bd = _0x595eba.ad;
        } else {
          var _0x5dc382 = this.o.hb[_0x595eba.Lb];
          if (_0x5dc382 != null) {
            _0x5dc382.Kb();
          }
          var _0x3385cb = new _0x10e6d0(this.o.fb);
          _0x3385cb.vb((window.anApp = _0x6eb4ba).s.H.wb);
          this.o.hb[_0x595eba.Lb] = _0x3385cb;
          _0x3385cb.Fg(_0x595eba);
        }
        return _0x5a89d8;
      };
      _0x5befef.prototype.wg = function (_0x235c06, _0xccf979) {
        var _0x14e62c = _0x235c06.nc(_0xccf979);
        _0xccf979 += 0x2;
        var _0xaaad27 = _0x235c06.mc(_0xccf979);
        _0xccf979++;
        var _0xedf32d = !!(_0xaaad27 & 0x1);
        var _0x2a3f37 = !!(_0xaaad27 & 0x2);
        var _0x1623ac = 0x0;
        if (_0xedf32d) {
          _0x1623ac = _0x235c06.nc(_0xccf979);
          _0xccf979 += 0x2;
        }
        var _0x531535 = this.Gg(_0x14e62c);
        if (_0x531535 === undefined) {
          return _0xccf979;
        }
        _0x531535.Ib = false;
        if (!_0x531535.Hb) {
          return _0xccf979;
        }
        var _0x408517 = this.Gg(_0x14e62c);
        if (_0xedf32d && _0x408517 !== undefined && _0x408517.Hb) {
          if (_0x1623ac === this.o.fb.bf) {
            var _0xa50402 = this.o.N.Gf();
            var _0x1f5557 = _0x531535.Hg(_0xa50402.x, _0xa50402.y);
            Math.max(0x0, 0x1 - _0x1f5557.distance / (this.o.jb * 0.5));
            if (_0x1f5557.distance < this.o.jb * 0.5) {
              (window.anApp = _0x6eb4ba).s.H.wb.wf.Se(_0x2a3f37);
            }
          } else {
            if (_0x14e62c === this.o.fb.bf) {
              ;
            } else {
              var _0x103efc = this.o.N.Gf();
              var _0x398ffc = _0x531535.Hg(_0x103efc.x, _0x103efc.y);
              Math.max(0x0, 0x1 - _0x398ffc.distance / (this.o.jb * 0.5));
            }
          }
        } else {
          if (_0x14e62c === this.o.fb.bf) {
            ;
          } else {
            var _0x515ff9 = this.o.N.Gf();
            var _0x284e59 = _0x531535.Hg(_0x515ff9.x, _0x515ff9.y);
            Math.max(0x0, 0x1 - _0x284e59.distance / (this.o.jb * 0.5));
          }
        }
        return _0xccf979;
      };
      _0x5befef.prototype.zg = function (_0x454297, _0x67cb9b) {
        var _0x3052b6 = _0x454297.nc(_0x67cb9b);
        _0x67cb9b += 0x2;
        var _0x1cbf62 = _0x3052b6 === this.o.fb.bf ? null : this.o.hb[_0x3052b6];
        var _0x1ca2f3 = _0x454297.mc(_0x67cb9b);
        _0x67cb9b += 0x1;
        var _0x42dfaf = !!(_0x1ca2f3 & 0x1);
        if (_0x1ca2f3 & 0x2) {
          var _0x509b48 = _0x454297.pc(_0x67cb9b);
          _0x67cb9b += 0x4;
          if (_0x1cbf62) {
            _0x1cbf62.Ig(_0x509b48);
          }
        }
        var _0x13db72 = this.Jg(_0x454297.mc(_0x67cb9b++), _0x454297.mc(_0x67cb9b++), _0x454297.mc(_0x67cb9b++));
        var _0x22ba10 = this.Jg(_0x454297.mc(_0x67cb9b++), _0x454297.mc(_0x67cb9b++), _0x454297.mc(_0x67cb9b++));
        if (_0x1cbf62) {
          _0x1cbf62.Kg(_0x13db72, _0x22ba10, _0x42dfaf);
          var _0x31fb65 = this.o.N.Gf();
          var _0x1409e2 = _0x1cbf62.Gf();
          var _0x22b514 = Math.max(0x0, 0x1 - Math.hypot(_0x31fb65.x - _0x1409e2.x, _0x31fb65.y - _0x1409e2.y) / (this.o.jb * 0.5));
          (window.anApp = _0x6eb4ba).r.Zd(_0x22b514, _0x3052b6, _0x42dfaf);
        }
        var _0x37892c = this.qg(_0x454297, _0x67cb9b);
        _0x67cb9b += this.rg(_0x37892c);
        if (_0x1cbf62) {
          for (var _0x59abec in _0x1cbf62.Ff) {
            var _0x579fef = _0x1cbf62.Ff[_0x59abec];
            if (_0x579fef) {
              _0x579fef.sc = false;
            }
          }
        }
        for (var _0x12f4d7 = 0x0; _0x12f4d7 < _0x37892c; _0x12f4d7++) {
          var _0x54bce1 = _0x454297.mc(_0x67cb9b);
          _0x67cb9b++;
          var _0x581b3d = _0x454297.mc(_0x67cb9b);
          _0x67cb9b++;
          if (_0x1cbf62) {
            var _0x105d78 = _0x1cbf62.Ff[_0x54bce1];
            _0x105d78 ||= _0x1cbf62.Ff[_0x54bce1] = new _0x2a3930(_0x54bce1);
            _0x105d78.sc = true;
            _0x105d78.tc = Math.min(0x1, Math.max(0x0, _0x581b3d / 0x64));
          }
        }
        return _0x67cb9b;
      };
      _0x5befef.prototype.Ag = function (_0x13f9b2, _0x4180bc) {
        var _0x40b5c6 = this.o.N;
        var _0x454f75 = _0x13f9b2.mc(_0x4180bc);
        _0x4180bc += 0x1;
        var _0x4d9749 = !!(_0x454f75 & 0x1);
        var _0x102928 = !!(_0x454f75 & 0x2);
        var _0xb57f52 = !!(_0x454f75 & 0x4);
        if (_0x102928) {
          var _0x33d910 = _0x40b5c6.M;
          _0x40b5c6.Ig(_0x13f9b2.pc(_0x4180bc));
          _0x4180bc += 0x4;
          _0x33d910 = _0x40b5c6.M - _0x33d910;
          if (_0x33d910 > 0x0) {
            (window.anApp = _0x6eb4ba).s.H.wb.wf.Re(_0x33d910);
          }
        }
        if (_0xb57f52) {
          this.o.ib = _0x13f9b2.pc(_0x4180bc);
          _0x4180bc += 0x4;
        }
        var _0x36bf19 = this.Jg(_0x13f9b2.mc(_0x4180bc++), _0x13f9b2.mc(_0x4180bc++), _0x13f9b2.mc(_0x4180bc++));
        var _0x2cbae0 = this.Jg(_0x13f9b2.mc(_0x4180bc++), _0x13f9b2.mc(_0x4180bc++), _0x13f9b2.mc(_0x4180bc++));
        _0x40b5c6.Kg(_0x36bf19, _0x2cbae0, _0x4d9749);
        (window.anApp = _0x6eb4ba).r.Zd(0.5, this.o.fb.bf, _0x4d9749);
        var _0xf894c4 = this.qg(_0x13f9b2, _0x4180bc);
        _0x4180bc += this.rg(_0xf894c4);
        for (var _0x5a0ba7 in _0x40b5c6.Ff) {
          var _0x1a2f48 = _0x40b5c6.Ff[_0x5a0ba7];
          if (_0x1a2f48) {
            _0x1a2f48.sc = false;
          }
        }
        for (var _0x2e2b2c = 0x0; _0x2e2b2c < _0xf894c4; _0x2e2b2c++) {
          var _0x12b70e = _0x13f9b2.mc(_0x4180bc);
          _0x4180bc++;
          var _0x164197 = _0x13f9b2.mc(_0x4180bc);
          _0x4180bc++;
          var _0x1679eb = _0x40b5c6.Ff[_0x12b70e];
          if (!_0x1679eb) {
            _0x1679eb = new _0x2a3930(_0x12b70e);
            _0x40b5c6.Ff[_0x12b70e] = _0x1679eb;
          }
          _0x1679eb.sc = true;
          _0x1679eb.tc = Math.min(0x1, Math.max(0x0, _0x164197 / 0x64));
        }
        (window.anApp = _0x6eb4ba).s.H.wb.uf.Te(_0x40b5c6.Ff);
      };
      _0x5befef.prototype.xg = function (_0x535317, _0x4e32ee) {
        var _0x4241f1 = this;
        var _0x29738c = _0x535317.nc(_0x4e32ee);
        _0x4e32ee += 0x2;
        var _0x5d3931 = this.Gg(_0x29738c);
        var _0x47037f = _0x535317.pc(_0x4e32ee);
        _0x4e32ee += 0x4;
        var _0x29da2c = [];
        for (var _0x4ec31b in _0x5d3931.Ff) {
          if (_0x4ec31b == 0x0) {
            _0x29da2c.push("velocidad");
            $(".v0").fadeIn();
          } else {
            if (_0x4ec31b == 0x1) {
              _0x29da2c.push("movimiento");
              $('.v1').fadeIn();
            } else {
              if (_0x4ec31b == 0x2) {
                _0x29da2c.push("iman");
                $('.v2').fadeIn();
              } else {
                if (_0x4ec31b == 0x3) {
                  _0x29da2c.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (_0x4ec31b == 0x4) {
                    _0x29da2c.push("comidax5");
                    $('.v4').fadeIn();
                  } else {
                    if (_0x4ec31b == 0x5) {
                      _0x29da2c.push("comidax10");
                      $(".v5").fadeIn();
                    } else if (_0x4ec31b == 0x6) {
                      _0x29da2c.push('zoom');
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x29da2c;
        $(".Worm_cerca").text(" : " + _0x5d3931.Mb.ad);
        if (_0x5d3931.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x56dae6 = this.qg(_0x535317, _0x4e32ee);
        _0x4e32ee += this.rg(_0x56dae6);
        if (_0x5d3931) {
          _0x5d3931.Ig(_0x47037f);
          _0x5d3931.Lg(function () {
            return _0x4241f1.Jg(_0x535317.mc(_0x4e32ee++), _0x535317.mc(_0x4e32ee++), _0x535317.mc(_0x4e32ee++));
          }, _0x56dae6);
          _0x5d3931.Mg(true);
          var _0x39f250 = this.o.N.Gf();
          var _0x35d949 = _0x5d3931.Gf();
          var _0x300295 = Math.max(0x0, 0x1 - Math.hypot(_0x39f250.x - _0x35d949.x, _0x39f250.y - _0x35d949.y) / (this.o.jb * 0.5));
          (window.anApp = _0x6eb4ba).r.Xd(_0x300295, _0x29738c);
        } else {
          _0x4e32ee += _0x56dae6 * 0x6;
        }
        return _0x4e32ee;
      };
      _0x5befef.prototype.yg = function (_0x424a7a, _0x242524) {
        var _0x4f7b7f = _0x424a7a.nc(_0x242524);
        _0x242524 += 0x2;
        var _0x23c346 = this.o.hb[_0x4f7b7f];
        if (_0x23c346 && _0x23c346.Ib) {
          _0x23c346.Mg(false);
        }
        (window.anApp = _0x6eb4ba).r.Yd(_0x4f7b7f);
        return _0x242524;
      };
      _0x5befef.prototype.sg = function (_0x362256, _0x1cc2d9) {
        var _0x431de0 = new _0x2ac1b5.Config();
        _0x431de0.Lb = _0x362256.oc(_0x1cc2d9);
        _0x1cc2d9 += 0x4;
        _0x431de0.cg = this.o.fb.af === _0x328318._e ? _0x362256.mc(_0x1cc2d9++) : _0x3698bc.TEAM_DEFAULT;
        _0x431de0.Ng = this.Jg(_0x362256.mc(_0x1cc2d9++), _0x362256.mc(_0x1cc2d9++), _0x362256.mc(_0x1cc2d9++));
        _0x431de0.dg = _0x362256.mc(_0x1cc2d9++);
        var _0x1606d3 = this.o.gb[_0x431de0.Lb];
        if (_0x1606d3 != null) {
          _0x1606d3.Kb();
        }
        var _0x1764bc = new _0x2ac1b5(_0x431de0, (window.anApp = _0x6eb4ba).s.H.wb);
        _0x1764bc.Og(this.Pg(_0x431de0.Lb), this.Qg(_0x431de0.Lb), true);
        this.o.gb[_0x431de0.Lb] = _0x1764bc;
        return _0x1cc2d9;
      };
      _0x5befef.prototype.tg = function (_0x43b128, _0x542925) {
        var _0x56e1fd = _0x43b128.oc(_0x542925);
        _0x542925 += 0x4;
        var _0x32cce7 = this.o.gb[_0x56e1fd];
        if (_0x32cce7) {
          _0x32cce7.Rg = 0x0;
          _0x32cce7.Sg = _0x32cce7.Sg * 1.5;
          _0x32cce7.Nb = true;
        }
        return _0x542925;
      };
      _0x5befef.prototype.ug = function (_0x2c2ccc, _0x18ec9f) {
        var _0x14def8 = _0x2c2ccc.oc(_0x18ec9f);
        _0x18ec9f += 0x4;
        var _0xe3f351 = _0x2c2ccc.nc(_0x18ec9f);
        _0x18ec9f += 0x2;
        var _0x1d28b4 = this.o.gb[_0x14def8];
        if (_0x1d28b4) {
          _0x1d28b4.Rg = 0x0;
          _0x1d28b4.Sg = _0x1d28b4.Sg * 0.1;
          _0x1d28b4.Nb = true;
          var _0xa21f25 = this.Gg(_0xe3f351);
          if (_0xa21f25 && _0xa21f25.Hb) {
            this.o.fb.bf;
            var _0x4916fa = _0xa21f25.Gf();
            _0x1d28b4.Og(_0x4916fa.x, _0x4916fa.y, false);
          }
        }
        return _0x18ec9f;
      };
      var _0x583698 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x5befef.prototype.mg = function (_0x3db348) {
        var _0x2f10c5 = (window.anApp = _0x6eb4ba).q.Ug.Tg;
        var _0x1a6ec9 = _0x2f10c5.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x43d8fe = _0x583698[0x0];
        var _0x27fc57 = 0x50 - _0x43d8fe;
        var _0x328293 = 0x0;
        for (var _0x39c7c0 = 0x0; _0x39c7c0 < 0x274; _0x39c7c0++) {
          var _0x6527d1 = _0x3db348.mc(0x1 + _0x39c7c0);
          for (var _0x58180e = 0x0; _0x58180e < 0x8; _0x58180e++) {
            var _0x104730 = (_0x6527d1 >> _0x58180e & 0x1) != 0x0;
            var _0x386c42 = (_0x43d8fe + _0x328293 * 0x50) * 0x4;
            if (_0x104730) {
              _0x1a6ec9.data[_0x386c42] = 0xff;
              _0x1a6ec9.data[_0x386c42 + 0x1] = 0xff;
              _0x1a6ec9.data[_0x386c42 + 0x2] = 0xff;
              _0x1a6ec9.data[_0x386c42 + 0x3] = 0xff;
            } else {
              _0x1a6ec9.data[_0x386c42 + 0x3] = 0x0;
            }
            if (++_0x43d8fe >= _0x27fc57 && ++_0x328293 < 0x50) {
              _0x43d8fe = _0x583698[_0x328293];
              _0x27fc57 = 0x50 - _0x43d8fe;
            }
          }
        }
        _0x2f10c5.putImageData(_0x1a6ec9, 0x0, 0x0);
        var _0x41d66b = (window.anApp = _0x6eb4ba).s.H.wb.tf.Sf;
        _0x41d66b.texture = (window.anApp = _0x6eb4ba).q.Ug.Hc;
        _0x41d66b.texture.update();
      };
      _0x5befef.prototype.og = function (_0x868248, _0x20de38) {
        var _0x58f6de = _0x868248.oc(_0x20de38);
        _0x20de38 += 0x4;
        console.log("Wormy Error: " + _0x58f6de);
      };
      _0x5befef.prototype.pg = function (_0xfdfbeb, _0x3c6a3d) {
        console.log("g.o");
        this.o.Rb();
      };
      _0x5befef.prototype.ng = function (_0x12c7f2, _0x353a13) {
        this.o.tb = _0x12c7f2.nc(_0x353a13);
        _0x353a13 += 0x2;
        this.o.O = _0x12c7f2.nc(_0x353a13);
        _0x353a13 += 0x2;
        var _0x1b5496 = new _0x24fd6b();
        _0x1b5496.ag = [];
        if (theoKzObjects.ModeStremerbatop) {
          var _0x200395 = _0x12c7f2.mc(_0x353a13++);
          for (var _0xd205a = 0x9; _0xd205a < _0x200395; _0xd205a++) {
            var _0x558d9b = _0x12c7f2.nc(_0x353a13);
            _0x353a13 += 0x2;
            var _0x4bbdf8 = _0x12c7f2.pc(_0x353a13);
            _0x353a13 += 0x4;
            _0x1b5496.ag.push(_0x24fd6b.Vg(_0x558d9b, _0x4bbdf8));
          }
        } else {
          var _0x200395 = _0x12c7f2.mc(_0x353a13++);
          for (var _0xd205a = 0x0; _0xd205a < _0x200395; _0xd205a++) {
            var _0x558d9b = _0x12c7f2.nc(_0x353a13);
            _0x353a13 += 0x2;
            var _0x4bbdf8 = _0x12c7f2.pc(_0x353a13);
            _0x353a13 += 0x4;
            _0x1b5496.ag.push(_0x24fd6b.Vg(_0x558d9b, _0x4bbdf8));
          }
        }
        _0x1b5496.$f = [];
        if (this.o.fb.af === _0x328318._e) {
          var _0x7c9b55 = _0x12c7f2.mc(_0x353a13++);
          for (var _0x1b5ac6 = 0x0; _0x1b5ac6 < _0x7c9b55; _0x1b5ac6++) {
            var _0x370f59 = _0x12c7f2.mc(_0x353a13);
            _0x353a13 += 0x1;
            var _0x48856a = _0x12c7f2.pc(_0x353a13);
            _0x353a13 += 0x4;
            _0x1b5496.$f.push(_0x24fd6b.Wg(_0x370f59, _0x48856a));
          }
        }
        (window.anApp = _0x6eb4ba).s.H.wb.vf.Te(_0x1b5496);
      };
      _0x5befef.prototype.Gg = function (_0x462b05) {
        return _0x462b05 === this.o.fb.bf ? this.o.N : this.o.hb[_0x462b05];
      };
      _0x5befef.prototype.Jg = function (_0x1df133, _0x5c7869, _0xfb61d) {
        return (((_0xfb61d & 0xff | _0x5c7869 << 0x8 & 0xff00 | _0x1df133 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
      };
      _0x5befef.prototype.Pg = function (_0x25e0ec) {
        return ((_0x25e0ec & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x5befef.prototype.Qg = function (_0x31aacb) {
        return ((_0x31aacb >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x5befef.prototype.qg = function (_0x16bc59, _0x2228fc) {
        var _0x28f6c6 = _0x16bc59.mc(_0x2228fc);
        if ((_0x28f6c6 & 0x80) == 0x0) {
          return _0x28f6c6;
        }
        var _0x1742f5 = _0x16bc59.mc(_0x2228fc + 0x1);
        if ((_0x1742f5 & 0x80) == 0x0) {
          return _0x1742f5 | _0x28f6c6 << 0x7 & 0x3f80;
        }
        var _0x4eb782 = _0x16bc59.mc(_0x2228fc + 0x2);
        if ((_0x4eb782 & 0x80) == 0x0) {
          return _0x4eb782 | _0x1742f5 << 0x7 & 0x3f80 | _0x28f6c6 << 0xe & 0x1fc000;
        }
        var _0x23e1db = _0x16bc59.mc(_0x2228fc + 0x3);
        return (_0x23e1db & 0x80) == 0x0 ? _0x23e1db | _0x4eb782 << 0x7 & 0x3f80 | _0x1742f5 << 0xe & 0x1fc000 | _0x28f6c6 << 0x15 & 0xfe00000 : undefined;
      };
      _0x5befef.prototype.rg = function (_0x1b671c) {
        if (_0x1b671c < 0x80) {
          return 0x1;
        } else {
          if (_0x1b671c < 0x4000) {
            return 0x2;
          } else {
            if (_0x1b671c < 0x200000) {
              return 0x3;
            } else {
              return _0x1b671c < 0x10000000 ? 0x4 : undefined;
            }
          }
        }
      };
      return _0x5befef;
    }();
    var _0x194f96 = function () {
      function _0x1a44a7(_0x1e1c51) {
        this.Xg = _0x1e1c51;
      }
      _0x1a44a7.Yg = function () {
        return new _0x194f96(null);
      };
      _0x1a44a7.Zg = function (_0x3708c0) {
        return new _0x194f96(_0x3708c0);
      };
      _0x1a44a7.prototype.$g = function () {
        return this.Xg;
      };
      _0x1a44a7.prototype._g = function () {
        return this.Xg != null;
      };
      _0x1a44a7.prototype.ah = function (_0x27674a) {
        if (this.Xg != null) {
          _0x27674a(this.Xg);
        }
      };
      return _0x1a44a7;
    }();
    var _0x2ac1b5 = function () {
      function _0xe3d4a0(_0x4d38d7, _0x4e1d31) {
        this.Mb = _0x4d38d7;
        this.bh = _0x4d38d7.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x4d38d7.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = Math.PI * 0x2 * Math.random();
        this.gh = new _0x32024c();
        this.gh.hh((window.anApp = _0x6eb4ba).o.fb.af, this.Mb.cg === _0x3698bc.TEAM_DEFAULT ? null : (window.anApp = _0x6eb4ba).p.Dc().ed(this.Mb.cg), (window.anApp = _0x6eb4ba).p.Dc().kd(this.Mb.dg));
        _0x4e1d31.Lf(_0x4d38d7.Lb, this.gh);
      }
      _0xe3d4a0.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0xe3d4a0.prototype.Og = function (_0x312701, _0x32a207, _0x141947) {
        this.Ob = _0x312701;
        this.Pb = _0x32a207;
        if (_0x141947) {
          this.ch = _0x312701;
          this.dh = _0x32a207;
        }
      };
      _0xe3d4a0.prototype.Fb = function (_0x5cf65f, _0x5ea84b) {
        var _0x563edd = Math.min(0.5, this.Sg * 0x1);
        var _0x5b1f77 = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x563edd > this.eh ? Math.min(_0x563edd, this.eh + _0x5ea84b * 0.0025) : Math.max(_0x563edd, this.eh - _0x5ea84b * 0.0025);
        this.fh = _0x5b1f77 > this.fh ? Math.min(_0x5b1f77, this.fh + _0x5ea84b * 0.0025) : Math.max(_0x5b1f77, this.fh - _0x5ea84b * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x5ea84b * 0.0025) : Math.max(this.Rg, this.Jb - _0x5ea84b * 0.0025);
      };
      _0xe3d4a0.prototype.Gb = function (_0x4017c1, _0x2eabce, _0x585461) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x2eabce * theoKzObjects.eat_animation) : Math.max(this.Ob, this.ch - _0x2eabce * theoKzObjects.eat_animation);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x2eabce * 0.0025) : Math.max(this.Pb, this.dh - _0x2eabce * 0.0025);
        this.gh.Te(this, _0x4017c1, _0x2eabce, _0x585461);
      };
      _0xe3d4a0.Config = function () {
        function _0x4c0fbe() {
          this.Lb = 0x0;
          this.cg = _0x3698bc.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x4c0fbe;
      }();
      return _0xe3d4a0;
    }();
    var _0x32024c = function () {
      function _0x28a81c() {
        this.Of = new _0x11a43c(new _0x225268(), new _0x225268());
        this.Of.Pf.jh.blendMode = _0x1c8759.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x28a81c.prototype.hh = function (_0x29faa4, _0x1a08cf, _0x3391bd) {
        var _0x3a996c = _0x3391bd.Zc;
        if (_0x3a996c != null) {
          this.Of.Nf.kh(_0x3a996c);
        }
        var _0x5d4077 = _0x29faa4 == _0x328318._e && _0x1a08cf != null ? _0x1a08cf.cd.$c : _0x3391bd.$c;
        if (_0x5d4077 != null) {
          this.Of.Pf.kh(_0x5d4077);
        }
      };
      _0x28a81c.prototype.Te = function (_0x4106c4, _0x4fa3fd, _0x1d70e4, _0x3de347) {
        if (!_0x3de347(_0x4106c4.ch, _0x4106c4.dh)) {
          this.Of.lh();
          return;
        }
        var _0x48c55f = _0x4106c4.fh * (0x1 + Math.cos(_0x4106c4.Ae + _0x4fa3fd / 0xc8) * 0.3);
        if (_0x4106c4.bh) {
          this.Of.mh(_0x4106c4.ch, _0x4106c4.dh, theoKzObjects.PortionSize * _0x4106c4.eh, _0x4106c4.Jb * 0x1, theoKzObjects.PortionAura * _0x48c55f, theoKzObjects.PortionTransparent * _0x4106c4.Jb);
        } else {
          this.Of.mh(_0x4106c4.ch, _0x4106c4.dh, theoKzObjects.FoodSize * _0x4106c4.eh, _0x4106c4.Jb * 0x1, theoKzObjects.FoodShadow * _0x48c55f, theoKzObjects.FoodTransparent * _0x4106c4.Jb);
        }
      };
      var _0x11a43c = function () {
        function _0x2ab029(_0x13a7ff, _0x17f9d8) {
          this.Nf = _0x13a7ff;
          this.Pf = _0x17f9d8;
        }
        _0x2ab029.prototype.mh = function (_0x2fa974, _0x4a94cc, _0x15bded, _0x3b6ac4, _0x4ad0c9, _0x4d819a) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x2fa974, _0x4a94cc);
          this.Nf.oh(_0x15bded);
          this.Nf.qh(_0x3b6ac4);
          this.Pf.Mg(true);
          this.Pf.nh(_0x2fa974, _0x4a94cc);
          this.Pf.oh(_0x4ad0c9);
          this.Pf.qh(_0x4d819a);
        };
        _0x2ab029.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x2ab029;
      }();
      return _0x28a81c;
    }();
    var _0x11290c = function () {
      function _0x7735f9() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x2d5624(_0x1eaf8c, _0x270dc4) {
        if (!(window.anApp = _0x6eb4ba).p.W()) {
          return null;
        }
        var _0xb0af4b = (window.anApp = _0x6eb4ba).p.Ac();
        if (_0x270dc4 === _0x4843a0.ia) {
          var _0x1ff2ca = _0x3a4ece(_0xb0af4b.skinArrayDict, _0x1eaf8c);
          return _0x1ff2ca < 0x0 ? null : _0xb0af4b.skinArrayDict[_0x1ff2ca];
        }
        switch (_0x270dc4) {
          case _0x4843a0.ja:
            return _0xb0af4b.eyesDict[_0x1eaf8c];
          case _0x4843a0.ka:
            return _0xb0af4b.mouthDict[_0x1eaf8c];
          case _0x4843a0.la:
            return _0xb0af4b.glassesDict[_0x1eaf8c];
          case _0x4843a0.ma:
            return _0xb0af4b.hatDict[_0x1eaf8c];
        }
        return null;
      }
      function _0x3a4ece(_0x12c877, _0x521abc) {
        for (var _0x5732ce = 0x0; _0x5732ce < _0x12c877.length; _0x5732ce++) {
          if (_0x12c877[_0x5732ce].id == _0x521abc) {
            return _0x5732ce;
          }
        }
        return -0x1;
      }
      _0x7735f9.prototype.a = function () {};
      _0x7735f9.prototype.ha = function (_0x568094) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (_0x568094) {
          case _0x4843a0.ia:
            return this.rh;
          case _0x4843a0.ja:
            return this.sh;
          case _0x4843a0.ka:
            return this.th;
          case _0x4843a0.la:
            return this.uh;
          case _0x4843a0.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x7735f9.prototype.xh = function (_0x52c541) {
        this.wh.push(_0x52c541);
        this.yh();
      };
      _0x7735f9.prototype.Ia = function () {
        if (!(window.anApp = _0x6eb4ba).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x179916 = (window.anApp = _0x6eb4ba).p.Ac();
        var _0x4f3ef2 = [];
        for (var _0x247a55 = 0x0; _0x247a55 < _0x179916.skinArrayDict.length; _0x247a55++) {
          var _0x33276e = _0x179916.skinArrayDict[_0x247a55];
          if (this.Ja(_0x33276e.id, _0x4843a0.ia)) {
            _0x4f3ef2.push(_0x33276e);
          }
        }
        return _0x4f3ef2.length === 0x0 ? 0x0 : _0x4f3ef2[parseInt(_0x4f3ef2.length * Math.random())].id;
      };
      _0x7735f9.prototype.zh = function () {
        if ((window.anApp = _0x6eb4ba).p.W) {
          var _0x54efc5 = (window.anApp = _0x6eb4ba).p.Ac().skinArrayDict;
          var _0x545029 = _0x3a4ece(_0x54efc5, this.rh);
          if (!(_0x545029 < 0x0)) {
            for (var _0x3ba070 = _0x545029 + 0x1; _0x3ba070 < _0x54efc5.length; _0x3ba070++) {
              if (this.Ja(_0x54efc5[_0x3ba070].id, _0x4843a0.ia)) {
                this.rh = _0x54efc5[_0x3ba070].id;
                this.yh();
                return;
              }
            }
            for (var _0xf0a328 = 0x0; _0xf0a328 < _0x545029; _0xf0a328++) {
              if (this.Ja(_0x54efc5[_0xf0a328].id, _0x4843a0.ia)) {
                this.rh = _0x54efc5[_0xf0a328].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x7735f9.prototype.Ah = function () {
        if ((window.anApp = _0x6eb4ba).p.W) {
          var _0x31d544 = (window.anApp = _0x6eb4ba).p.Ac().skinArrayDict;
          var _0x2a9c00 = _0x3a4ece(_0x31d544, this.rh);
          if (!(_0x2a9c00 < 0x0)) {
            for (var _0x193f28 = _0x2a9c00 - 0x1; _0x193f28 >= 0x0; _0x193f28--) {
              if (this.Ja(_0x31d544[_0x193f28].id, _0x4843a0.ia)) {
                this.rh = _0x31d544[_0x193f28].id;
                this.yh();
                return;
              }
            }
            for (var _0x1c27ee = _0x31d544.length - 0x1; _0x1c27ee > _0x2a9c00; _0x1c27ee--) {
              if (this.Ja(_0x31d544[_0x1c27ee].id, _0x4843a0.ia)) {
                this.rh = _0x31d544[_0x1c27ee].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x7735f9.prototype.Bh = function (_0x232260, _0x6336a6) {
        if (!(window.anApp = _0x6eb4ba).p.W() || this.Ja(_0x232260, _0x6336a6)) {
          switch (_0x6336a6) {
            case _0x4843a0.ia:
              if (this.rh != _0x232260) {
                this.rh = _0x232260;
                this.yh();
              }
              return;
            case _0x4843a0.ja:
              if (this.sh != _0x232260) {
                this.sh = _0x232260;
                this.yh();
              }
              return;
            case _0x4843a0.ka:
              if (this.th != _0x232260) {
                this.th = _0x232260;
                this.yh();
              }
              return;
            case _0x4843a0.la:
              if (this.uh != _0x232260) {
                this.uh = _0x232260;
                this.yh();
              }
              return;
            case _0x4843a0.ma:
              if (this.vh != _0x232260) {
                this.vh = _0x232260;
                this.yh();
              }
              return;
          }
        }
      };
      _0x7735f9.prototype.Ja = function (_0x31de0f, _0x56d381) {
        var _0x362b8e = _0x2d5624(_0x31de0f, _0x56d381);
        return _0x362b8e != null && ((window.anApp = _0x6eb4ba).u.P() ? _0x362b8e.price == 0x0 && !_0x362b8e.nonbuyable || (window.anApp = _0x6eb4ba).u.Ch(_0x31de0f, _0x56d381) : _0x362b8e.guest);
      };
      _0x7735f9.prototype.yh = function () {
        for (var _0x4bf6ea = 0x0; _0x4bf6ea < this.wh.length; _0x4bf6ea++) {
          this.wh[_0x4bf6ea]();
        }
      };
      return _0x7735f9;
    }();
    var _0x4843a0 = function () {
      function _0x334283() {}
      _0x334283.ia = 'SKIN';
      _0x334283.ja = 'EYES';
      _0x334283.ka = "MOUTH";
      _0x334283.la = "GLASSES";
      _0x334283.ma = 'HAT';
      return _0x334283;
    }();
    var _0x16f823 = function () {
      function _0x165567(_0x13e2da, _0x4a0db7, _0x1de954, _0x2474c9, _0x92fac3, _0x92e6b9, _0x10fb43, _0xe6a3a, _0x6ab71d) {
        this.Hc = new _0x1c8759._b(_0x13e2da, new _0x1c8759.dc(_0x4a0db7, _0x1de954, _0x2474c9, _0x92fac3));
        this.Dh = _0x4a0db7;
        this.Eh = _0x1de954;
        this.Fh = _0x2474c9;
        this.Gh = _0x92fac3;
        this.Hh = _0x92e6b9 || (_0xe6a3a || _0x2474c9) / 0x2;
        this.Ih = _0x10fb43 || (_0x6ab71d || _0x92fac3) / 0x2;
        this.Jh = _0xe6a3a || _0x2474c9;
        this.Kh = _0x6ab71d || _0x92fac3;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x165567;
    }();
    var _0x41b329 = function () {
      function _0x45330e() {
        this.fn_o = _0x4245a2;
        this.Fe = new _0x1c8759._b(_0x1c8759.$b.from('/images/bg-obstacle.png'));
        var _0x4f03ec = _0x1c8759.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80)), new _0x1c8759._b(_0x4f03ec, new _0x1c8759.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x1c8759._b(_0x4245a2());
        this.Df = new _0x1c8759._b(function () {
          var _0x183fe8 = _0x1c8759.$b.from('/images/bg-pattern-pow2-TEAM2.png');
          _0x183fe8.wrapMode = _0x1c8759.kc.lc;
          return _0x183fe8;
        }());
        this.Af = new _0x1c8759._b(_0x1c8759.$b.from("/images/lens.png"));
        var _0x4b81e5 = _0x1c8759.$b.from("/images/wear-ability.png");
        var _0x311798 = _0x1c8759.$b.from("https://i.imgur.com/EDt862t.png");
        var _0x224eef = _0x1c8759.$b.from('https://i.imgur.com/U5sTlhC.png');
        var _0x8d3486 = _0x1c8759.$b.from("https://i.imgur.com/ub4ed3R.png");
        var _0x92ba1f = _0x1c8759.$b.from('https://i.imgur.com/LFiCido.png');
        this.X_x5 = new _0x16f823(_0x92ba1f, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x10 = new _0x16f823(_0x92ba1f, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x16f823(_0x92ba1f, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Id_mobileguia = new _0x16f823(_0x8d3486, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
        this.emoji_headshot = new _0x16f823(_0x311798, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.emoji_kill = new _0x16f823(_0x224eef, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Ph = new _0x16f823(_0x4b81e5, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x16f823(_0x4b81e5, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this.Rh = new _0x16f823(_0x92ba1f, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.Ug = function () {
          var _0xa812bd = window.document.createElement("canvas");
          _0xa812bd.width = 0x50;
          _0xa812bd.height = 0x50;
          return {
            'te': _0xa812bd,
            'Tg': _0xa812bd.getContext('2d'),
            'Hc': new _0x1c8759._b(_0x1c8759.$b.from(_0xa812bd))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x4245a2(_0x1b0385) {
        var _0x12ddf3 = _0x1c8759.$b.from(_0x1b0385 || "https://i.imgur.com/8ubx4RA.png");
        _0x12ddf3.wrapMode = _0x1c8759.kc.lc;
        return _0x12ddf3;
      }
      _0x45330e.prototype.a = function (_0x40ff65) {
        function _0x2ca91b() {
          if (--_0x3b0af8 == 0x0) {
            _0x40ff65();
          }
        }
        var _0x3b0af8 = 0x4;
        this.Bd = {};
        _0x2ca91b();
        this.yd = {};
        _0x2ca91b();
        this.Sh = [];
        _0x2ca91b();
        this.Th = null;
        _0x2ca91b();
      };
      return _0x45330e;
    }();
    var _0x500c42 = function () {
      function _0x456ede() {
        this.H = new _0x3a2604();
        this.F = new _0x40aed7();
        this.Uh = new _0x10bec4();
        this.Vh = new _0x500512();
        this.Wh = new _0x15ac69();
        this.Xh = new _0x3f8cd1();
        this.Yh = new _0x42abd8();
        this.Zh = new _0x141d33();
        this.xa = new _0x1e7efe();
        this.$h = new _0x5d8c0e();
        this._h = new _0x1f981a();
        this.ai = new _0x300fbf();
        this.aa = new _0x1be465();
        this.ua = new _0x3b746d();
        this.pa = new _0x586f21();
        this.bi = [];
        this.ci = null;
      }
      function _0x19d4c5(_0x450663, _0xc2e15a) {
        if (_0xc2e15a != 0x0) {
          var _0x41ac24 = _0x450663[_0xc2e15a];
          _0x969762(_0x450663, 0x0, 0x1, _0xc2e15a);
          _0x450663[0x0] = _0x41ac24;
        }
      }
      function _0x2713bd(_0x2f9c7a, _0x4ffff5) {
        if (_0x4ffff5 != _0x2f9c7a.length + 0x1) {
          var _0x508d48 = _0x2f9c7a[_0x4ffff5];
          _0x969762(_0x2f9c7a, _0x4ffff5 + 0x1, _0x4ffff5, _0x2f9c7a.length - _0x4ffff5 - 0x1);
          _0x2f9c7a[_0x2f9c7a.length - 0x1] = _0x508d48;
        }
      }
      function _0x3b02a4(_0x2cfd33, _0xdf5997) {
        for (var _0x4221c4 = 0x0; _0x4221c4 < _0x2cfd33.length; _0x4221c4++) {
          if (_0x2cfd33[_0x4221c4] == _0xdf5997) {
            return _0x4221c4;
          }
        }
        return -0x1;
      }
      _0x456ede.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x46c24c = 0x0; _0x46c24c < this.bi.length; _0x46c24c++) {
          this.bi[_0x46c24c].a();
        }
        this.ci = new _0x1dfc9a(_0x61389.di);
      };
      _0x456ede.prototype.Qa = function (_0x5784d9, _0x306b30) {
        for (var _0x5cea8b = this.bi.length - 0x1; _0x5cea8b >= 0x0; _0x5cea8b--) {
          this.bi[_0x5cea8b].Pa(_0x5784d9, _0x306b30);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x5784d9, _0x306b30);
        }
      };
      _0x456ede.prototype.Ra = function () {
        for (var _0x4700b8 = this.bi.length - 0x1; _0x4700b8 >= 0x0; _0x4700b8--) {
          this.bi[_0x4700b8].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x456ede.prototype.I = function (_0x696fcf) {
        var _0x4a21c2 = _0x3b02a4(this.bi, _0x696fcf);
        if (!(_0x4a21c2 < 0x0)) {
          this.bi[0x0].ei();
          _0x19d4c5(this.bi, _0x4a21c2);
          this.fi();
        }
      };
      _0x456ede.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x2713bd(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x456ede.prototype.fi = function () {
        var _0x470f74 = this.bi[0x0];
        _0x470f74.ii();
        _0x470f74.ji();
        this.ki();
      };
      _0x456ede.prototype.li = function () {
        return this.bi.length != 0x0 && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x456ede.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x456ede;
    }();
    var _0x24fd6b = function () {
      function _0x347886() {
        this.ag = [];
        this.$f = [];
      }
      _0x347886.Vg = function (_0x339461, _0x1fa350) {
        return {
          'bg': _0x339461,
          'M': _0x1fa350
        };
      };
      _0x347886.Wg = function (_0x5d1da9, _0x1433a0) {
        return {
          '_f': _0x5d1da9,
          'M': _0x1433a0
        };
      };
      return _0x347886;
    }();
    var _0x1f18f6 = function () {
      function _0x49f12b() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      _0x49f12b.prototype.a = function () {
        this.vi();
      };
      _0x49f12b.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x49f12b.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x49f12b.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x49f12b.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : '/images/guest-avatar-xmas2022.png';
      };
      _0x49f12b.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x49f12b.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x49f12b.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x49f12b.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x49f12b.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x49f12b.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x49f12b.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x49f12b.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x49f12b.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x49f12b.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x49f12b.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x49f12b.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x49f12b.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x49f12b.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x49f12b.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x49f12b.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x49f12b.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x49f12b.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x49f12b.prototype.V = function (_0x54020b) {
        this.ni.push(_0x54020b);
        _0x54020b();
      };
      _0x49f12b.prototype.Pi = function (_0x518ba2) {
        this.oi.push(_0x518ba2);
        _0x518ba2();
      };
      _0x49f12b.prototype.Qi = function (_0x46f456) {
        this.pi.push(_0x46f456);
      };
      _0x49f12b.prototype.Ch = function (_0x4c7cdc, _0x5c8159) {
        var _0x490127 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x490127) {
          return false;
        }
        for (var _0xf7cb9d = 0x0; _0xf7cb9d < _0x490127.length; _0xf7cb9d++) {
          var _0x2d28ff = _0x490127[_0xf7cb9d];
          if (_0x2d28ff.id == _0x4c7cdc && _0x2d28ff.type === _0x5c8159) {
            return true;
          }
        }
        return false;
      };
      _0x49f12b.prototype.P = function () {
        return this.qi;
      };
      _0x49f12b.prototype.ea = function () {
        return this.ri;
      };
      _0x49f12b.prototype.Q = function (_0x3fe0e7) {
        var _0x53d7de = this;
        if (this.qi) {
          this.Ri(function (_0x245c38) {
            if (_0x245c38) {
              var _0x1db326 = _0x53d7de.zi();
              var _0x3e13b5 = _0x53d7de.Ai();
              _0x53d7de.si = _0x245c38;
              _0x3a998e(_0x53d7de.si);
              _0x53d7de.Si();
              var _0x1cd3e6 = _0x53d7de.zi();
              var _0x43f402 = _0x53d7de.Ai();
              if (_0x43f402 > 0x1 && _0x43f402 != _0x3e13b5) {
                (window.anApp = _0x6eb4ba).s.aa.Ti(new _0x4f2546(_0x43f402));
              }
              var _0x239a83 = _0x1cd3e6 - _0x1db326;
              if (_0x239a83 >= 0x14) {
                (window.anApp = _0x6eb4ba).s.aa.Ti(new _0x41428e(_0x239a83));
              }
            }
            if (_0x3fe0e7) {
              _0x3fe0e7();
            }
          });
        }
      };
      _0x49f12b.prototype.Ri = function (_0x4fbaed) {
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/getUserData", function (_0xd3d713) {
          _0x4fbaed(_0xd3d713.user_data);
        });
      };
      _0x49f12b.prototype.Ui = function (_0x32ba92, _0x287c96, _0x59ca51) {
        var _0x1cb80a = this;
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x32ba92 + "&type=" + _0x287c96, function (_0xa23dde) {
          if (_0xa23dde.code == 0x4b0) {
            _0x1cb80a.Q(_0x59ca51);
          } else {
            _0x59ca51();
          }
        }).fail(function () {
          _0x59ca51();
        });
      };
      _0x49f12b.prototype.Vi = function () {
        var _0xfbe2f4 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x424772) {
          if (_0x424772.status === "connected") {
            if (_0x424772.authResponse && _0x424772.authResponse.accessToken) {
              _0xfbe2f4.Yi("facebook", "fb_" + _0x424772.authResponse.accessToken);
            } else {
              _0xfbe2f4.Xi();
            }
            return;
          }
          FB.login(function (_0x4feef3) {
            if (_0x4feef3.status === "connected" && _0x4feef3.authResponse && _0x4feef3.authResponse.accessToken) {
              _0xfbe2f4.Yi("facebook", "fb_" + _0x4feef3.authResponse.accessToken);
            } else {
              _0xfbe2f4.Xi();
            }
          });
        });
      };
      _0x49f12b.prototype.Zi = function () {
        var _0x2e7ef9 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        //console.log('gsi:l');
        GoogleAuth.then(function () {
         // console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
        //    console.log("gsi:sil");
            var _0x23d3c3 = GoogleAuth.currentUser.get();
            _0x2e7ef9.Yi("google", "gg_" + _0x23d3c3.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x1911f0) {
            if (_0x1911f0.error !== undefined) {
           //   console.log("gsi:e: " + _0x1911f0.error);
              _0x2e7ef9.Xi();
              return;
            } else {
              if (_0x1911f0.isSignedIn()) {
             //   console.log('gsi:s');
                _0x2e7ef9.Yi("google", "gg_" + _0x1911f0.getAuthResponse().id_token);
                return;
              } else {
            //    console.log("gsi:c");
                _0x2e7ef9.Xi();
                return;
              }
            }
          });
        });
      };
      _0x49f12b.prototype.Wi = function () {
       // console.log("iSI: " + this.qi);
        var _0x5b4ff3 = this.ri;
        var _0x2b98e3 = this.ti;
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
        _0x472880(_0x445805.Oe, '', 0x3c);
        switch (_0x2b98e3) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x5b4ff3 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x49f12b.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/deleteAccount", function (_0x5b90db) {
            if (_0x5b90db.code === 0x4b0) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x49f12b.prototype.vi = function () {
       // console.log('rs');
        var _0x486728 = _0x21090b(_0x445805.Oe);
        var _0x4ffdf8 = this;
        if (_0x486728 == "facebook") {
        //  console.log("rs:fb");
          (function _0x41bde4() {
            if (typeof FB != "undefined") {
              _0x4ffdf8.Vi();
            } else {
              setTimeout(_0x41bde4, 0x64);
            }
          })();
        } else if (_0x486728 == 'google') {
          //console.log('rs:gg');
          (function _0xfdf435() {
            if (GoogleAuth !== undefined) {
              _0x4ffdf8.Zi();
            } else {
              setTimeout(_0xfdf435, 0x64);
            }
          })();
        } else {
        //  console.log("rs:lo");
          this.Wi();
        }
      };
      _0x49f12b.prototype.aj = function () {
        var _0x50c37e = 0x0;
        for (; _0x50c37e < this.ni.length; _0x50c37e++) {
          this.ni[_0x50c37e]();
        }
        this.Si();
      };
      _0x49f12b.prototype.Si = function () {
        var _0x273695 = 0x0;
        for (; _0x273695 < this.oi.length; _0x273695++) {
          this.oi[_0x273695]();
        }
        var _0x223e85 = this.pi;
        this.pi = [];
        var _0x2b7fa7 = 0x0;
        for (; _0x2b7fa7 < _0x223e85.length; _0x2b7fa7++) {
          _0x223e85[_0x2b7fa7]();
        }
      };
      _0x49f12b.prototype.Yi = function (_0x556b3e, _0x1f9e7c) {
        var _0x2084da = this;
        var _0x4c55c5 = 0x0;
        var _0x467a4a = localStorage.getItem("token__gg");
        if (_0x467a4a) {
          console.log("Using the stored token:", _0x467a4a);
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x467a4a + "/login", function (_0x540737) {
            if (_0x540737 && _0x540737.code === 0x5cd && _0x540737.error === "expired_token") {
              _0x4c55c5++;
              console.log("auto login attempt:", _0x4c55c5);
              $("#login-view").html("<h2>Auto Login Google 🎅 Wormate Hırsız YILDO  : " + _0x4c55c5 + "</h2>");
              _0x2eeba5();
            } else {
              _0xc9f904(_0x540737);
            }
          }).fail(function () {
            _0x2eeba5();
          });
        } else {
          _0x2eeba5();
        }
        function _0x2eeba5() {
          console.log("Fetching a new token...");
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x1f9e7c + "/login", function (_0x47508e) {
            if (_0x47508e && _0x47508e.code === 0x5cd && _0x47508e.error === "expired_token") {
              _0x4c55c5++;
              console.log("auto login attempt:", _0x4c55c5);
              $("#login-view").html("<h2>Auto Login Google Wormate.io  : " + _0x4c55c5 + "</h2>");
              _0x2eeba5();
            } else {
              _0xc9f904(_0x47508e);
            }
          }).fail(function () {
            _0x2084da.Xi();
          });
        }
        function _0xc9f904(_0x5d2a70) {
          if (_0x5d2a70 && _0x5d2a70.user_data) {
            _0x3a998e(_0x5d2a70.user_data);
            var _0x195067 = this.ri;
            _0x2084da.qi = true;
            _0x2084da.ri = _0x1f9e7c;
            _0x2084da.si = _0x5d2a70.user_data;
            theoKzObjects.FB_UserID = _0x5d2a70.user_data.userId;
            _0x2084da.ti = _0x556b3e;
            _0x472880(_0x445805.Oe, _0x2084da.ti, 0x3c);
            _0xce1bba();
            for (var _0x24b1fa = 0x0; _0x24b1fa < clientes.clientesActivos.length; _0x24b1fa++) {
              var _0x5530d2 = clientes.clientesActivos[_0x24b1fa].cliente_NOMBRE;
              var _0x238c3a = clientes.clientesActivos[_0x24b1fa].cliente_ID;
              var _0x5762bd = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin;
              var _0x38cc75 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin1;
              var _0x549e1e = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin2;
              var _0x334a17 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin3;
              var _0x2e3661 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin4;
              var _0x12e1ec = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin5;
              var _0x5af5c1 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin6;
              var _0x3a0e77 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin7;
              var _0x11acd8 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin8;
              var _0x897acb = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin9;
              var _0x2c32d2 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin10;
              var _0x406cc3 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin11;
              var _0x23c2a6 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin12;
              var _0xed91c3 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin13;
              var _0x291f36 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin14;
              var _0xd00a = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin15;
              var _0x40c414 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin16;
              var _0x4ca509 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin17;
              var _0x1d206e = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin18;
              var _0x3def67 = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin19;
              var _0x3729af = clientes.clientesActivos[_0x24b1fa].Client_VisibleSkin20;
              var _0x51adc7 = clientes.clientesActivos[_0x24b1fa].Client_KeyAccecs;
              var _0x3b20f4 = clientes.clientesActivos[_0x24b1fa].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0x0) {} else {
                if (theoKzObjects.FB_UserID == _0x238c3a) {
                  $(".column-left").append("<div class='het-han'>Bitiş Tarihi ⏰  : " + _0x3b20f4 + '</div>');
                  _0x4214d2();
                  _0x25fd6e();
                } else {}
              }
            }
            theoKzObjects.loading = false;
            if (_0x195067 !== _0x1f9e7c) {
              _0x2084da.aj();
            } else {
              _0x2084da.Si();
            }
            localStorage.setItem('token__gg', _0x1f9e7c);
          } else {
            _0x2084da.Xi();
          }
        }
      };
      _0x49f12b.prototype.Xi = function () {
        this.Wi();
      };
      _0x49f12b.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x49f12b.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x49f12b;
    }();
    var _0x3a8d30 = function () {
      function _0x333ec0() {
        this.cj = {};
        this.cj[_0x3a54d2] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x47d56c] = _0x1c8759._b.WHITE;
        this.cj[_0x5c8d3d] = [0x0, 0x0];
        this.cj[_0x16e0f6] = [0x0, 0x0];
        var _0x1d2bc = _0x1c8759.cc.from(_0x3f8566, _0x20caae, this.cj);
        this.zf = new _0x1c8759.hc(_0x3e6714, _0x1d2bc);
      }
      var _0x2c929e = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x25b4d8 = 'a2_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x3a54d2 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x47d56c = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5c8d3d = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x16e0f6 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x588982 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x3e6714 = new _0x1c8759.gc().addAttribute(_0x2c929e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x25b4d8, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x3f8566 = "precision mediump float;attribute vec2 " + _0x2c929e + ";attribute vec2 " + _0x25b4d8 + ";uniform mat3 " + "translationMatrix" + ";uniform mat3 " + 'projectionMatrix' + ";varying vec2 " + _0x588982 + ";void main(){" + _0x588982 + '=' + _0x25b4d8 + ";gl_Position=vec4((" + 'projectionMatrix' + '*' + "translationMatrix" + "*vec3(" + _0x2c929e + ",1.0)).xy,0.0,1.0);}";
      var _0x20caae = "precision highp float;varying vec2 " + _0x588982 + ";uniform vec4 " + _0x3a54d2 + ";uniform sampler2D " + _0x47d56c + ";uniform vec2 " + _0x5c8d3d + ";uniform vec2 " + _0x16e0f6 + ";void main(){vec2 coord=" + _0x588982 + '*' + _0x5c8d3d + '+' + _0x16e0f6 + ";vec4 v_color_mix=" + _0x3a54d2 + ';gl_FragColor=texture2D(' + _0x47d56c + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x333ec0.prototype.Hf = function (_0x20d799, _0x58f135, _0x519a76, _0x5a907c) {
        var _0x1f9118 = this.cj[_0x3a54d2];
        _0x1f9118[0x0] = _0x20d799;
        _0x1f9118[0x1] = _0x58f135;
        _0x1f9118[0x2] = _0x519a76;
        _0x1f9118[0x3] = _0x5a907c;
      };
      _0x333ec0.prototype.Bf = function (_0x53e6db) {
        this.cj[_0x47d56c] = _0x53e6db;
      };
      _0x333ec0.prototype.Te = function (_0x453ec6, _0x1bf57b, _0x4120f5, _0x46c6e9) {
        this.zf.position.x = _0x453ec6;
        this.zf.position.y = _0x1bf57b;
        this.zf.scale.x = _0x4120f5;
        this.zf.scale.y = _0x46c6e9;
        var _0x5523ab = this.cj[_0x5c8d3d];
        _0x5523ab[0x0] = _0x4120f5 * 0.2520615384615385;
        _0x5523ab[0x1] = _0x46c6e9 * 0.4357063736263738;
        var _0x3815f7 = this.cj[_0x16e0f6];
        _0x3815f7[0x0] = _0x453ec6 * 0.2520615384615385;
        _0x3815f7[0x1] = _0x1bf57b * 0.4357063736263738;
      };
      return _0x333ec0;
    }();
    var _0x225268 = function () {
      function _0x30af65() {
        this.jh = new _0x1c8759.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x30af65.prototype.kh = function (_0x3c7801) {
        if (_0x3c7801 && _0x3c7801.Hc) {
          this.jh.texture = _0x3c7801.Hc;
          this.jh.anchor.set(_0x3c7801.Lh, _0x3c7801.Mh);
          this.dj = _0x3c7801.Nh;
          this.ej = _0x3c7801.Oh;
        }
      };
      _0x30af65.prototype.oh = function (_0x3037d6) {
        this.jh.width = _0x3037d6 * this.dj;
        this.jh.height = _0x3037d6 * this.ej;
      };
      _0x30af65.prototype.fj = function (_0x851bd) {
        this.jh.rotation = _0x851bd;
      };
      _0x30af65.prototype.nh = function (_0x57859c, _0x327abe) {
        this.jh.position.set(_0x57859c, _0x327abe);
      };
      _0x30af65.prototype.Mg = function (_0x246bd7) {
        this.jh.visible = _0x246bd7;
      };
      _0x30af65.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x30af65.prototype.qh = function (_0x34c74c) {
        this.jh.alpha = _0x34c74c;
      };
      _0x30af65.prototype.Mf = function () {
        return this.jh;
      };
      _0x30af65.prototype.ih = function () {
        _0x22332e(this.jh);
      };
      return _0x30af65;
    }();
    var _0x10e6d0 = function () {
      function _0x24bf93(_0x8cc4ad) {
        this.fb = _0x8cc4ad;
        this.Mb = new _0x10e6d0.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x24bf93.prototype.Kb = function () {
        if (this.pj != null) {
          _0x22332e(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x22332e(this.qj);
        }
      };
      _0x24bf93.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x24bf93.prototype.Fg = function (_0x12e6f4) {
        this.Mb = _0x12e6f4;
        this.rj(this.Hb);
      };
      _0x24bf93.prototype.Mg = function (_0x5f29d8) {
        var _0x5a2d25 = this.Hb;
        this.Hb = _0x5f29d8;
        this.rj(_0x5a2d25);
      };
      _0x24bf93.prototype.Ig = function (_0x4b07ec) {
        this.M = _0x4b07ec * 0x32;
        var _0x1b098a = _0x4b07ec;
        if (_0x4b07ec > this.fb.cf) {
          _0x1b098a = Math.atan((_0x4b07ec - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x526736 = Math.sqrt(Math.pow(_0x1b098a * 0x5, 0.707106781186548) * 0x4 + 0x19);
        var _0x42e832 = Math.min(0xc8, Math.max(0x3, (_0x526736 - 0x5) * 0x5 + 0x1));
        var _0x546aee = this.kj;
        this.Db = (0x5 + _0x526736 * 0.9) * 0.025;
        this.kj = Math.floor(_0x42e832);
        this.ij = _0x42e832 - this.kj;
        if (_0x546aee > 0x0 && _0x546aee < this.kj) {
          var _0x52afa8 = this.lj[_0x546aee * 0x2 - 0x2];
          var _0x52512b = this.lj[_0x546aee * 0x2 - 0x1];
          var _0x17edd5 = this.mj[_0x546aee * 0x2 - 0x2];
          var _0x2a71c8 = this.mj[_0x546aee * 0x2 - 0x1];
          var _0x51c0a0 = this.nj[_0x546aee * 0x2 - 0x2];
          var _0x442db1 = this.nj[_0x546aee * 0x2 - 0x1];
          for (var _0x4bfdf3 = _0x546aee; _0x4bfdf3 < this.kj; _0x4bfdf3++) {
            this.lj[_0x4bfdf3 * 0x2] = _0x52afa8;
            this.lj[_0x4bfdf3 * 0x2 + 0x1] = _0x52512b;
            this.mj[_0x4bfdf3 * 0x2] = _0x17edd5;
            this.mj[_0x4bfdf3 * 0x2 + 0x1] = _0x2a71c8;
            this.nj[_0x4bfdf3 * 0x2] = _0x51c0a0;
            this.nj[_0x4bfdf3 * 0x2 + 0x1] = _0x442db1;
          }
        }
      };
      _0x24bf93.prototype.Lg = function (_0xdd0b38, _0x2eae7a) {
        this.kj = _0x2eae7a;
        for (var _0x155209 = 0x0; _0x155209 < this.kj; _0x155209++) {
          this.lj[_0x155209 * 0x2] = this.mj[_0x155209 * 0x2] = this.nj[_0x155209 * 0x2] = _0xdd0b38();
          this.lj[_0x155209 * 0x2 + 0x1] = this.mj[_0x155209 * 0x2 + 0x1] = this.nj[_0x155209 * 0x2 + 0x1] = _0xdd0b38();
        }
      };
      _0x24bf93.prototype.Kg = function (_0xf5a41c, _0x31f7fd, _0x58cefd) {
        this.hj = _0x58cefd;
        for (var _0x1e2400 = 0x0; _0x1e2400 < this.kj; _0x1e2400++) {
          this.lj[_0x1e2400 * 0x2] = this.mj[_0x1e2400 * 0x2];
          this.lj[_0x1e2400 * 0x2 + 0x1] = this.mj[_0x1e2400 * 0x2 + 0x1];
        }
        var _0x3e8db4 = _0xf5a41c - this.mj[0x0];
        var _0x51fb46 = _0x31f7fd - this.mj[0x1];
        this.sj(_0x3e8db4, _0x51fb46, this.kj, this.mj);
      };
      _0x24bf93.prototype.sj = function (_0x47ff92, _0x31213c, _0x405143, _0xc0ad1c) {
        var _0x4e7dd3 = Math.hypot(_0x47ff92, _0x31213c);
        if (!(_0x4e7dd3 <= 0x0)) {
          var _0x19af22 = _0xc0ad1c[0x0];
          var _0x2e9a79 = undefined;
          _0xc0ad1c[0x0] += _0x47ff92;
          var _0x207d63 = _0xc0ad1c[0x1];
          var _0x266b71 = undefined;
          _0xc0ad1c[0x1] += _0x31213c;
          var _0x3d0d5b = this.Db / (this.Db + _0x4e7dd3);
          var _0x78cebf = 0x1 - _0x3d0d5b * 0x2;
          var _0x178c53 = 0x1;
          for (var _0x33d124 = _0x405143 - 0x1; _0x178c53 < _0x33d124; _0x178c53++) {
            _0x2e9a79 = _0xc0ad1c[_0x178c53 * 0x2];
            _0xc0ad1c[_0x178c53 * 0x2] = _0xc0ad1c[_0x178c53 * 0x2 - 0x2] * _0x78cebf + (_0x2e9a79 + _0x19af22) * _0x3d0d5b;
            _0x19af22 = _0x2e9a79;
            _0x266b71 = _0xc0ad1c[_0x178c53 * 0x2 + 0x1];
            _0xc0ad1c[_0x178c53 * 0x2 + 0x1] = _0xc0ad1c[_0x178c53 * 0x2 - 0x1] * _0x78cebf + (_0x266b71 + _0x207d63) * _0x3d0d5b;
            _0x207d63 = _0x266b71;
          }
          _0x3d0d5b = this.ij * this.Db / (this.ij * this.Db + _0x4e7dd3);
          _0x78cebf = 0x1 - _0x3d0d5b * 0x2;
          _0xc0ad1c[_0x405143 * 0x2 - 0x2] = _0xc0ad1c[_0x405143 * 0x2 - 0x4] * _0x78cebf + (_0xc0ad1c[_0x405143 * 0x2 - 0x2] + _0x19af22) * _0x3d0d5b;
          _0xc0ad1c[_0x405143 * 0x2 - 0x1] = _0xc0ad1c[_0x405143 * 0x2 - 0x3] * _0x78cebf + (_0xc0ad1c[_0x405143 * 0x2 - 0x1] + _0x207d63) * _0x3d0d5b;
        }
      };
      _0x24bf93.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x24bf93.prototype.Hg = function (_0x40d178, _0xcf1fc) {
        var _0x38fcba = 0xf4240;
        var _0x228a11 = _0x40d178;
        var _0x34a1c8 = _0xcf1fc;
        for (var _0x278aa3 = 0x0; _0x278aa3 < this.kj; _0x278aa3++) {
          var _0x5139f0 = this.nj[_0x278aa3 * 0x2];
          var _0x4d1251 = this.nj[_0x278aa3 * 0x2 + 0x1];
          var _0x2122ab = Math.hypot(_0x40d178 - _0x5139f0, _0xcf1fc - _0x4d1251);
          if (_0x2122ab < _0x38fcba) {
            _0x38fcba = _0x2122ab;
            _0x228a11 = _0x5139f0;
            _0x34a1c8 = _0x4d1251;
          }
        }
        return {
          'x': _0x228a11,
          'y': _0x34a1c8,
          'distance': _0x38fcba
        };
      };
      _0x24bf93.prototype.vb = function (_0x46f2e3) {
        this.oj = _0x46f2e3;
      };
      _0x24bf93.prototype.Fb = function (_0x25b52c, _0x3e287e) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + Math.cos(_0x25b52c / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + Math.cos(_0x25b52c / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb + _0x3e287e * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + Math.cos(_0x25b52c / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb - _0x3e287e * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x3e287e * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x3e287e * 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x24bf93.prototype.Gb = function (_0xf690a8, _0xdd6551, _0x4d4925, _0x216fbd) {
        if (this.Hb && this.Ib) {
          var _0x3759a4 = Math.pow(0.11112, _0xdd6551 / 0x5f);
          for (var _0x1689ca = 0x0; _0x1689ca < this.kj; _0x1689ca++) {
            var _0x7c1677 = this.lj[_0x1689ca * 0x2] * (0x1 - _0x4d4925) + this.mj[_0x1689ca * 0x2] * _0x4d4925;
            var _0x342ea4 = this.lj[_0x1689ca * 0x2 + 0x1] * (0x1 - _0x4d4925) + this.mj[_0x1689ca * 0x2 + 0x1] * _0x4d4925;
            this.nj[_0x1689ca * 0x2] = _0x7c1677 * (0x1 - _0x3759a4) + this.nj[_0x1689ca * 0x2] * _0x3759a4;
            this.nj[_0x1689ca * 0x2 + 0x1] = _0x342ea4 * (0x1 - _0x3759a4) + this.nj[_0x1689ca * 0x2 + 0x1] * _0x3759a4;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0xf690a8, _0xdd6551, _0x216fbd);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - this.Db * 0x3;
        }
      };
      _0x24bf93.prototype.rj = function (_0x38e911) {
        if (this.Hb) {
          if (!_0x38e911) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x22332e(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x22332e(this.qj);
          }
        }
      };
      _0x24bf93.prototype.uj = function () {
        var _0xb5208f = window.anApp = _0x6eb4ba;
        if (this.pj == null) {
          this.pj = new _0x1819f2();
        } else {
          _0x22332e(this.pj.Rf);
        }
        this.pj.hh(_0xb5208f.o.fb.af, _0xb5208f.p.Dc().ed(this.Mb.cg), _0xb5208f.p.Dc().dd(this.Mb.dg), _0xb5208f.p.Dc().fd(this.Mb.Bg), _0xb5208f.p.Dc().gd(this.Mb.Cg), _0xb5208f.p.Dc().hd(this.Mb.Dg), _0xb5208f.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x5e65a6('');
          this.qj.style.fontFamily = "wormup";
          this.qj.anchor.set(0.5);
        } else {
          _0x22332e(this.qj);
        }
        this.qj.style.fontSize = 0xf;
        this.qj.style.fill = _0xb5208f.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x24bf93.Config = function () {
        function _0x33205a() {
          this.Lb = 0x0;
          this.cg = _0x3698bc.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x33205a;
      }();
      return _0x24bf93;
    }();
    var _0x5e65a6 = function () {
      return _0x3ec824(_0x1c8759.fc, function (_0x4267aa, _0xc86c15, _0x3579ad) {
        _0x1c8759.fc.call(this, _0x4267aa, _0xc86c15, _0x3579ad);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x1819f2 = function () {
      function _0x4d9215() {
        this.Rf = new _0x1c8759.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x42d0fe();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x225268(), new _0x225268());
        for (var _0x30a80a = 0x1; _0x30a80a < 0x31d; _0x30a80a++) {
          this.xj[_0x30a80a] = this.yj(_0x30a80a, new _0x225268(), new _0x225268());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x41ec1 = Math.PI * 0.1;
      var _0x279aba = -0.06640625;
      var _0xa11fd6 = -0.03515625;
      var _0x2071d0 = -0.0625;
      var _0x43a925 = _0x279aba * 0x3 + 0.84375;
      var _0xed13eb = 0.2578125 - _0x279aba * 0x3;
      var _0x2e2e0c = _0x279aba + _0xa11fd6;
      var _0x2495d1 = _0x2071d0 + _0x2071d0;
      var _0x4a98dd = _0xa11fd6 * 0x3 + 0.2578125;
      var _0x211c95 = 0.84375 - _0xa11fd6 * 0x3;
      var _0x1c0df8 = _0xa11fd6 + _0x279aba;
      _0x4d9215.prototype.yj = function (_0x2ca190, _0xef56f4, _0x257692) {
        var _0x1810a3 = new _0x1cce45(_0xef56f4, _0x257692);
        _0xef56f4.jh.zIndex = 0.001 * ((0x31d - _0x2ca190) * 0x2 + 0x1 + 0x3);
        _0x257692.jh.zIndex = 0.001 * ((0x31d - _0x2ca190) * 0x2 - 0x2 + 0x3);
        return _0x1810a3;
      };
      _0x4d9215.prototype.hh = function (_0x23a7fe, _0x2ceaa6, _0x49d1cb, _0x363648, _0x53f6ba, _0x3e9a52, _0xf1ea2c) {
        var _0x5b85cd = _0x49d1cb.Zc;
        var _0x24f3f3 = _0x23a7fe == _0x328318._e ? _0x2ceaa6.bd.$c : _0x49d1cb.$c;
        if (_0x5b85cd.length > 0x0 && _0x24f3f3.length > 0x0) {
          for (var _0x477b94 = 0x0; _0x477b94 < this.xj.length; _0x477b94++) {
            this.xj[_0x477b94].Nf.kh(_0x5b85cd[_0x477b94 % _0x5b85cd.length]);
            this.xj[_0x477b94].Pf.kh(_0x24f3f3[_0x477b94 % _0x24f3f3.length]);
          }
        }
        this.vj.hh(_0x363648, _0x53f6ba, _0x3e9a52, _0xf1ea2c);
      };
      var _0x42d0fe = function () {
        var _0xa9c995 = _0x3ec824(_0x1c8759.Zb, function () {
          _0x1c8759.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x1c8759.Zb();
          this.Hj = [];
          for (var _0x4de0d1 = 0x0; _0x4de0d1 < 0x4; _0x4de0d1++) {
            var _0x4f96d5 = new _0x225268();
            _0x4f96d5.kh((window.anApp = _0x6eb4ba).q.Ph);
            this.Gj.addChild(_0x4f96d5.jh);
            this.Hj.push(_0x4f96d5);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x225268();
          this.Jj.kh((window.anApp = _0x6eb4ba).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x225268();
          this.xEmojiType_headshot.kh((window.anApp = _0x6eb4ba).q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x225268();
          this.xEmojiType_kill.kh((window.anApp = _0x6eb4ba).q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x225268();
          this.guia_mobile.kh((window.anApp = _0x6eb4ba).q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new _0x225268();
          this.flx.kh((window.anApp = _0x6eb4ba).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x225268();
          this.xxx5.kh((window.anApp = _0x6eb4ba).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x225268();
          this.xxx2.kh((window.anApp = _0x6eb4ba).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x225268();
          this.xxx10.kh((window.anApp = _0x6eb4ba).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x225268();
          this.xxxLupatype.kh((window.anApp = _0x6eb4ba).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        _0xa9c995.prototype.hh = function (_0x330059, _0x5ec564, _0x128351, _0xb3732d) {
          this.Lj(0.002, this.Cj, _0x330059.Zc);
          this.Lj(0.003, this.Dj, _0x5ec564.Zc);
          this.Lj(0.004, this.Fj, _0xb3732d.Zc);
          this.Lj(0.005, this.Ej, _0x128351.Zc);
        };
        _0xa9c995.prototype.Lj = function (_0x45806f, _0x5f567d, _0x29c6e6) {
          while (_0x29c6e6.length > _0x5f567d.length) {
            var _0x50c954 = new _0x225268();
            _0x5f567d.push(_0x50c954);
            this.addChild(_0x50c954.Mf());
          }
          while (_0x29c6e6.length < _0x5f567d.length) {
            _0x5f567d.pop().ih();
          }
          var _0x520a03 = _0x45806f;
          for (var _0x3b3d46 = 0x0; _0x3b3d46 < _0x29c6e6.length; _0x3b3d46++) {
            _0x520a03 += 0.0001;
            var _0x7ec97d = _0x5f567d[_0x3b3d46];
            _0x7ec97d.kh(_0x29c6e6[_0x3b3d46]);
            _0x7ec97d.jh.zIndex = _0x520a03;
          }
        };
        _0xa9c995.prototype.mh = function (_0xea4660, _0x11b23d, _0x507d58, _0x3b43c8) {
          this.visible = true;
          this.position.set(_0xea4660, _0x11b23d);
          this.rotation = _0x3b43c8;
          for (var _0x5db4ff = 0x0; _0x5db4ff < this.Cj.length; _0x5db4ff++) {
            this.Cj[_0x5db4ff].oh(_0x507d58);
          }
          for (var _0x1781b8 = 0x0; _0x1781b8 < this.Dj.length; _0x1781b8++) {
            this.Dj[_0x1781b8].oh(_0x507d58);
          }
          for (var _0x42bf50 = 0x0; _0x42bf50 < this.Ej.length; _0x42bf50++) {
            this.Ej[_0x42bf50].oh(_0x507d58);
          }
          for (var _0x2562d8 = 0x0; _0x2562d8 < this.Fj.length; _0x2562d8++) {
            this.Fj[_0x2562d8].oh(_0x507d58);
          }
        };
        _0xa9c995.prototype.lh = function () {
          this.visible = false;
        };
        _0xa9c995.prototype.Mj = function (_0x4fd695, _0x2217d8, _0x3c686a, _0x3a0b8b) {
          this.Gj.visible = true;
          var _0x254069 = _0x3c686a / 0x3e8;
          var _0x17695c = 0x1 / this.Hj.length;
          for (var _0xd3df11 = 0x0; _0xd3df11 < this.Hj.length; _0xd3df11++) {
            var _0x504b9c = 0x1 - (_0x254069 + _0x17695c * _0xd3df11) % 0x1;
            this.Hj[_0xd3df11].jh.alpha = 0x1 - _0x504b9c;
            this.Hj[_0xd3df11].oh(_0x2217d8 * (0.5 + _0x504b9c * 4.5));
          }
        };
        _0xa9c995.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0xa9c995.prototype.Nj = function (_0x140058, _0x1e8430, _0x50d99c, _0x274992) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0x140058.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x140058.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x274992 * 0.0025) : Math.max(_0x140058.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x274992 * 0.0025);
          this.Jj.oh(_0x1e8430);
        };
        _0xa9c995.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0xa9c995.prototype.Nflex = function (_0x2355c0, _0x33fe0f, _0x4ef1ad, _0x353098) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = (_0x2355c0.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x2355c0.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x353098 * 0.0025) : Math.max(_0x2355c0.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x353098 * 0.0025);
          this.flx.oh(_0x33fe0f);
        };
        _0xa9c995.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0xa9c995.prototype.ActiveX5 = function (_0xd77d01, _0x8572f2, _0x5c6075, _0x50dda4) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0xd77d01.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0xd77d01.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x50dda4 * 0.0025) : Math.max(_0xd77d01.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x50dda4 * 0.0025);
          this.xxx5.oh(_0x8572f2);
        };
        _0xa9c995.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0xa9c995.prototype.ActiveX2 = function (_0x461781, _0xc2de14, _0x1de3a5, _0x99cad0) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x461781.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x461781.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x99cad0 * 0.0025) : Math.max(_0x461781.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x99cad0 * 0.0025);
          this.xxx2.oh(_0xc2de14);
        };
        _0xa9c995.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0xa9c995.prototype.ActiveX10 = function (_0x8d111, _0x42781e, _0x14b60e, _0x328099) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x8d111.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x8d111.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x328099 * 0.0025) : Math.max(_0x8d111.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x328099 * 0.0025);
          this.xxx10.oh(_0x42781e);
        };
        _0xa9c995.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0xa9c995.prototype.ActiveZlupa = function (_0x5d6c4c, _0x346001, _0x3f1d01, _0x316e4c) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0x5d6c4c.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x5d6c4c.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x316e4c * 0.0025) : Math.max(_0x5d6c4c.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x316e4c * 0.0025);
          this.xxxLupatype.oh(_0x346001);
        };
        _0xa9c995.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0xa9c995.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0xa9c995.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0xa9c995.prototype.Rx = function (_0x66afef, _0x283fad, _0x25c881, _0x5afd6c) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x283fad);
        };
        _0xa9c995.prototype.Njh = function (_0x50197d, _0x4dc598, _0x1ec42a, _0x4d3cff) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x4dc598);
        };
        _0xa9c995.prototype.Njk = function (_0x36392a, _0x50ab7b, _0x395c05, _0x3179f8) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x50ab7b);
        };
        return _0xa9c995;
      }();
      _0x4d9215.prototype.Oj = function (_0x29af61) {
        return this.Aj + this.Bj * Math.sin(_0x29af61 * _0x41ec1 - this.zj);
      };
      _0x4d9215.prototype.tj = function (_0x320447, _0x44f385, _0x50e6db, _0x235de1) {
        var _0x2ccd4e = _0x320447.Db * 0x2;
        var _0x23e6f8 = _0x320447.nj;
        var _0x420808 = _0x320447.kj;
        var _0x45c994 = _0x420808 * 0x4 - 0x3;
        this.zj = _0x44f385 / 0x190 * Math.PI;
        this.Aj = _0x2ccd4e * 1.5;
        this.Bj = _0x2ccd4e * 0.15 * _0x320447.jj;
        var _0x2a1133 = undefined;
        var _0x24c1ba = undefined;
        var _0x4c2563 = undefined;
        var _0x38d714 = undefined;
        var _0x3ce13b = undefined;
        var _0x198a1a = undefined;
        var _0x337a5a = undefined;
        var _0x3830a0 = undefined;
        _0x24c1ba = _0x23e6f8[0x0];
        _0x198a1a = _0x23e6f8[0x1];
        if (_0x235de1(_0x24c1ba, _0x198a1a)) {
          _0x4c2563 = _0x23e6f8[0x2];
          _0x337a5a = _0x23e6f8[0x3];
          _0x38d714 = _0x23e6f8[0x4];
          _0x3830a0 = _0x23e6f8[0x5];
          var _0x38d003 = Math.atan2(_0x3830a0 + _0x198a1a * 0x2 - _0x337a5a * 0x3, _0x38d714 + _0x24c1ba * 0x2 - _0x4c2563 * 0x3);
          this.vj.mh(_0x24c1ba, _0x198a1a, _0x2ccd4e, _0x38d003);
          this.xj[0x0].mh(_0x24c1ba, _0x198a1a, _0x2ccd4e, this.Oj(0x0), _0x38d003);
          this.xj[0x1].mh(_0x43a925 * _0x24c1ba + _0xed13eb * _0x4c2563 + _0x2e2e0c * _0x38d714, _0x43a925 * _0x198a1a + _0xed13eb * _0x337a5a + _0x2e2e0c * _0x3830a0, _0x2ccd4e, this.Oj(0x1), _0x1cce45.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x24c1ba + 0.75 * _0x4c2563 + _0x2495d1 * _0x38d714, 0.375 * _0x198a1a + 0.75 * _0x337a5a + _0x2495d1 * _0x3830a0, _0x2ccd4e, this.Oj(0x2), _0x1cce45.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x4a98dd * _0x24c1ba + _0x211c95 * _0x4c2563 + _0x1c0df8 * _0x38d714, _0x4a98dd * _0x198a1a + _0x211c95 * _0x337a5a + _0x1c0df8 * _0x3830a0, _0x2ccd4e, this.Oj(0x3), _0x1cce45.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x99725a = 0x4;
        var _0x2ac45d = 0x2;
        for (var _0x507c16 = _0x420808 * 0x2 - 0x4; _0x2ac45d < _0x507c16; _0x2ac45d += 0x2) {
          _0x24c1ba = _0x23e6f8[_0x2ac45d];
          _0x198a1a = _0x23e6f8[_0x2ac45d + 0x1];
          if (_0x235de1(_0x24c1ba, _0x198a1a)) {
            _0x2a1133 = _0x23e6f8[_0x2ac45d - 0x2];
            _0x3ce13b = _0x23e6f8[_0x2ac45d - 0x1];
            _0x4c2563 = _0x23e6f8[_0x2ac45d + 0x2];
            _0x337a5a = _0x23e6f8[_0x2ac45d + 0x3];
            _0x38d714 = _0x23e6f8[_0x2ac45d + 0x4];
            _0x3830a0 = _0x23e6f8[_0x2ac45d + 0x5];
            this.xj[_0x99725a].mh(_0x24c1ba, _0x198a1a, _0x2ccd4e, this.Oj(_0x99725a), _0x1cce45.angleBetween(this.xj[_0x99725a - 0x1], this.xj[_0x99725a + 0x1]));
            _0x99725a++;
            this.xj[_0x99725a].mh(_0x279aba * _0x2a1133 + 0.84375 * _0x24c1ba + 0.2578125 * _0x4c2563 + _0xa11fd6 * _0x38d714, _0x279aba * _0x3ce13b + 0.84375 * _0x198a1a + 0.2578125 * _0x337a5a + _0xa11fd6 * _0x3830a0, _0x2ccd4e, this.Oj(_0x99725a), _0x1cce45.angleBetween(this.xj[_0x99725a - 0x1], this.xj[_0x99725a + 0x1]));
            _0x99725a++;
            this.xj[_0x99725a].mh(_0x2071d0 * _0x2a1133 + 0.5625 * _0x24c1ba + 0.5625 * _0x4c2563 + _0x2071d0 * _0x38d714, _0x2071d0 * _0x3ce13b + 0.5625 * _0x198a1a + 0.5625 * _0x337a5a + _0x2071d0 * _0x3830a0, _0x2ccd4e, this.Oj(_0x99725a), _0x1cce45.angleBetween(this.xj[_0x99725a - 0x1], this.xj[_0x99725a + 0x1]));
            _0x99725a++;
            this.xj[_0x99725a].mh(_0xa11fd6 * _0x2a1133 + 0.2578125 * _0x24c1ba + 0.84375 * _0x4c2563 + _0x279aba * _0x38d714, _0xa11fd6 * _0x3ce13b + 0.2578125 * _0x198a1a + 0.84375 * _0x337a5a + _0x279aba * _0x3830a0, _0x2ccd4e, this.Oj(_0x99725a), _0x1cce45.angleBetween(this.xj[_0x99725a - 0x1], this.xj[_0x99725a + 0x1]));
            _0x99725a++;
          } else {
            this.xj[_0x99725a].lh();
            _0x99725a++;
            this.xj[_0x99725a].lh();
            _0x99725a++;
            this.xj[_0x99725a].lh();
            _0x99725a++;
            this.xj[_0x99725a].lh();
            _0x99725a++;
          }
        }
        _0x24c1ba = _0x23e6f8[_0x420808 * 0x2 - 0x4];
        _0x198a1a = _0x23e6f8[_0x420808 * 0x2 - 0x3];
        if (_0x235de1(_0x24c1ba, _0x198a1a)) {
          _0x2a1133 = _0x23e6f8[_0x420808 * 0x2 - 0x6];
          _0x3ce13b = _0x23e6f8[_0x420808 * 0x2 - 0x5];
          _0x4c2563 = _0x23e6f8[_0x420808 * 0x2 - 0x2];
          _0x337a5a = _0x23e6f8[_0x420808 * 0x2 - 0x1];
          this.xj[_0x45c994 - 0x5].mh(_0x24c1ba, _0x198a1a, _0x2ccd4e, this.Oj(_0x45c994 - 0x5), _0x1cce45.angleBetween(this.xj[_0x45c994 - 0x6], this.xj[_0x45c994 - 0x4]));
          this.xj[_0x45c994 - 0x4].mh(_0x1c0df8 * _0x2a1133 + _0x211c95 * _0x24c1ba + _0x4a98dd * _0x4c2563, _0x1c0df8 * _0x3ce13b + _0x211c95 * _0x198a1a + _0x4a98dd * _0x337a5a, _0x2ccd4e, this.Oj(_0x45c994 - 0x4), _0x1cce45.angleBetween(this.xj[_0x45c994 - 0x5], this.xj[_0x45c994 - 0x3]));
          this.xj[_0x45c994 - 0x3].mh(_0x2495d1 * _0x2a1133 + 0.75 * _0x24c1ba + 0.375 * _0x4c2563, _0x2495d1 * _0x3ce13b + 0.75 * _0x198a1a + 0.375 * _0x337a5a, _0x2ccd4e, this.Oj(_0x45c994 - 0x3), _0x1cce45.angleBetween(this.xj[_0x45c994 - 0x4], this.xj[_0x45c994 - 0x2]));
          this.xj[_0x45c994 - 0x2].mh(_0x2e2e0c * _0x2a1133 + _0xed13eb * _0x24c1ba + _0x43a925 * _0x4c2563, _0x2e2e0c * _0x3ce13b + _0xed13eb * _0x198a1a + _0x43a925 * _0x337a5a, _0x2ccd4e, this.Oj(_0x45c994 - 0x2), _0x1cce45.angleBetween(this.xj[_0x45c994 - 0x3], this.xj[_0x45c994 - 0x1]));
          this.xj[_0x45c994 - 0x1].mh(_0x4c2563, _0x337a5a, _0x2ccd4e, this.Oj(_0x45c994 - 0x1), _0x1cce45.angleBetween(this.xj[_0x45c994 - 0x2], this.xj[_0x45c994 - 0x1]));
        } else {
          this.xj[_0x45c994 - 0x5].lh();
          this.xj[_0x45c994 - 0x4].lh();
          this.xj[_0x45c994 - 0x3].lh();
          this.xj[_0x45c994 - 0x2].lh();
          this.xj[_0x45c994 - 0x1].lh();
        }
        if (this.wj == 0x0 && _0x45c994 > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && _0x45c994 == 0x0) {
          _0x22332e(this.vj);
        }
        while (this.wj < _0x45c994) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        while (this.wj > _0x45c994) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x140d81 = _0x320447.Ff[_0x2a3930.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && _0x140d81 != null && _0x140d81.sc) {
          this.vj.Mj(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.Ij();
        }
        var _0x2248f7 = _0x320447.Ff[_0x2a3930.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && _0x2248f7 != null && _0x2248f7.sc) {
          this.vj.Nj(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.ModeStremeremoj) {} else {
          if (theoKzObjects.emoji_headshot && _0x320447 && _0x320447.Mb && _0x320447.Mb.Mb) {
            this.vj.Njh(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
          } else {
            this.vj.xzs();
          }
          if (theoKzObjects.emoji_kill && _0x320447 && _0x320447.Mb && _0x320447.Mb.Mb) {
            this.vj.Njk(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (theoKzObjects.mobile && theoKzObjects.arrow && _0x320447 && _0x320447.Mb && _0x320447.Mb.Mb) {
          this.vj.Rx(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        }
        var _0x4e4c78 = _0x320447.Ff[_0x2a3930.FLEXIBLE_TYPE];
        if (this.xj[0x0].gj() && _0x4e4c78 != null && _0x4e4c78.sc) {
          this.vj.Nflex(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.flexx();
        }
        var _0x159c18 = _0x320447.Ff[_0x2a3930.X5_TYPE];
        if (this.xj[0x0].gj() && _0x159c18 != null && _0x159c18.sc) {
          this.vj.ActiveX5(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.xXx5();
        }
        var _0x7be053 = _0x320447.Ff[_0x2a3930.X2_TYPE];
        if (this.xj[0x0].gj() && _0x7be053 != null && _0x7be053.sc) {
          this.vj.ActiveX2(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.xXx2();
        }
        var _0x38aca3 = _0x320447.Ff[_0x2a3930.X10_TYPE];
        if (this.xj[0x0].gj() && _0x38aca3 != null && _0x38aca3.sc) {
          this.vj.ActiveX10(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.xXx10();
        }
        var _0x7e09eb = _0x320447.Ff[_0x2a3930.ZOOM_TYPE];
        if (this.xj[0x0].gj() && _0x7e09eb != null && _0x7e09eb.sc) {
          this.vj.ActiveZlupa(_0x320447, _0x2ccd4e, _0x44f385, _0x50e6db);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x1cce45 = function () {
        function _0x4e0591(_0x29a188, _0x2a4da9) {
          this.Nf = _0x29a188;
          this.Nf.Mg(false);
          this.Pf = _0x2a4da9;
          this.Pf.Mg(false);
        }
        _0x4e0591.prototype.mh = function (_0x1270fe, _0x1ee077, _0x205bcd, _0x4f9468, _0x4072e1) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x1270fe, _0x1ee077);
          this.Nf.oh(_0x205bcd);
          this.Nf.fj(_0x4072e1);
          this.Pf.Mg(true);
          this.Pf.nh(_0x1270fe, _0x1ee077);
          this.Pf.oh(_0x4f9468);
          this.Pf.fj(_0x4072e1);
        };
        _0x4e0591.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x4e0591.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x4e0591.angleBetween = function (_0x178087, _0x147caa) {
          return Math.atan2(_0x178087.Nf.jh.position.y - _0x147caa.Nf.jh.position.y, _0x178087.Nf.jh.position.x - _0x147caa.Nf.jh.position.x);
        };
        return _0x4e0591;
      }();
      return _0x4d9215;
    }();
    var _0x418798 = function () {
      function _0x3c9063(_0x213db6) {
        this.se = _0x213db6;
        this.te = _0x213db6.get()[0x0];
        this.ue = new _0x1c8759.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x1819f2();
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
        var _0x29c852 = this;
        (window.anApp = _0x6eb4ba).p.ca(function () {
          if ((window.anApp = _0x6eb4ba).p.W()) {
            _0x29c852.Fb();
          }
        });
      }
      _0x3c9063.prototype.Fb = function () {
        var _0x218071 = window.anApp = _0x6eb4ba;
        this.Pj.hh(_0x328318.$e, null, _0x218071.p.Dc().dd(this.rh), _0x218071.p.Dc().fd(this.sh), _0x218071.p.Dc().gd(this.th), _0x218071.p.Dc().hd(this.uh), _0x218071.p.Dc().jd(this.vh));
      };
      _0x3c9063.prototype.Le = function (_0x41d302) {
        this.sc = _0x41d302;
      };
      _0x3c9063.prototype.ak = function (_0x3d4fd3, _0x34777d, _0xfa4f08) {
        this.rh = _0x3d4fd3;
        this.Sj = _0x34777d;
        this.Xj = _0xfa4f08;
        this.Fb();
      };
      _0x3c9063.prototype.bk = function (_0x1ae080, _0x24f1dd, _0x59f6b8) {
        this.sh = _0x1ae080;
        this.Tj = _0x24f1dd;
        this.Yj = _0x59f6b8;
        this.Fb();
      };
      _0x3c9063.prototype.ck = function (_0x578b4c, _0x193267, _0x8de752) {
        this.th = _0x578b4c;
        this.Uj = _0x193267;
        this.Zj = _0x8de752;
        this.Fb();
      };
      _0x3c9063.prototype.dk = function (_0x5ab65c, _0x5a910f, _0x2b190d) {
        this.uh = _0x5ab65c;
        this.Vj = _0x5a910f;
        this.$j = _0x2b190d;
        this.Fb();
      };
      _0x3c9063.prototype.ek = function (_0x8673f6, _0x48fe30, _0x40bf9e) {
        this.vh = _0x8673f6;
        this.Wj = _0x48fe30;
        this._j = _0x40bf9e;
        this.Fb();
      };
      _0x3c9063.prototype.Ra = function () {
        var _0x22c6af = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x22c6af;
        this.te.width = _0x22c6af * this.Qj;
        this.te.height = _0x22c6af * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x2c572a = _0x5a27f8(Math.floor(this.Qj / this.Ng) * 0x2 - 0x5, 0x1, this.Pj.xj.length);
        if (this.Pj.wj != _0x2c572a) {
          for (var _0x48f81f = _0x2c572a; _0x48f81f < this.Pj.xj.length; _0x48f81f++) {
            this.Pj.xj[_0x48f81f].lh();
          }
          while (this.Pj.wj < _0x2c572a) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          while (this.Pj.wj > _0x2c572a) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x3c9063.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x6eb4ba).p.W) {
            var _0x777f3d = Date.now();
            var _0x1474a0 = _0x777f3d / 0xc8;
            var _0x160f3a = Math.sin(_0x1474a0);
            var _0x4c136e = this.Ng;
            var _0x36c567 = this.Ng * 1.5;
            var _0x221199 = this.Qj - (this.Qj - _0x4c136e * 0.5 * (this.Pj.wj - 0x1)) * 0.5;
            var _0x516a62 = this.Rj * 0.5;
            var _0x1f538f = 0x0;
            var _0x414f30 = 0x0;
            for (var _0x481e11 = -0x1; _0x481e11 < this.Pj.wj; _0x481e11++) {
              var _0x299bd5 = _0x481e11;
              var _0x2dba87 = Math.cos(_0x299bd5 * 0x1 / 0xc * Math.PI - _0x1474a0) * (0x1 - Math.pow(0x10, _0x299bd5 * -0x1 / 0xc));
              if (_0x481e11 >= 0x0) {
                var _0x22a2e4 = _0x221199 + _0x4c136e * -0.5 * _0x299bd5;
                var _0x7f0b43 = _0x516a62 + _0x4c136e * 0.5 * _0x2dba87;
                var _0x15b04b = _0x4c136e * 0x2;
                var _0x2f7b7f = _0x36c567 * 0x2;
                var _0x1e06aa = Math.atan2(_0x414f30 - _0x2dba87, _0x299bd5 - _0x1f538f);
                if (_0x481e11 == 0x0) {
                  this.Pj.vj.mh(_0x22a2e4, _0x7f0b43, _0x15b04b, _0x1e06aa);
                }
                this.Pj.xj[_0x481e11].mh(_0x22a2e4, _0x7f0b43, _0x15b04b, _0x2f7b7f, _0x1e06aa);
                var _0x19fda3 = this.Sj ? this.Xj ? 0.4 + _0x160f3a * 0.2 : 0.9 + _0x160f3a * 0.1 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x481e11].Nf.qh(_0x19fda3);
                this.Pj.xj[_0x481e11].Pf.qh(_0x19fda3);
              }
              _0x1f538f = _0x299bd5;
              _0x414f30 = _0x2dba87;
            }
            for (var _0x5f182d = 0x0; _0x5f182d < this.Pj.vj.Cj.length; _0x5f182d++) {
              var _0x38baf6 = this.Tj ? this.Yj ? 0.4 + _0x160f3a * 0.2 : 0.9 + _0x160f3a * 0.1 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x5f182d].qh(_0x38baf6);
            }
            for (var _0x22c9cf = 0x0; _0x22c9cf < this.Pj.vj.Dj.length; _0x22c9cf++) {
              var _0x14b7a7 = this.Uj ? this.Zj ? 0.4 + _0x160f3a * 0.2 : 0.9 + _0x160f3a * 0.1 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x22c9cf].qh(_0x14b7a7);
            }
            for (var _0x14b96d = 0x0; _0x14b96d < this.Pj.vj.Ej.length; _0x14b96d++) {
              var _0x37f15a = this.Vj ? this.$j ? 0.4 + _0x160f3a * 0.2 : 0.9 + _0x160f3a * 0.1 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x14b96d].qh(_0x37f15a);
            }
            for (var _0x2127b9 = 0x0; _0x2127b9 < this.Pj.vj.Fj.length; _0x2127b9++) {
              var _0x391c1f = this.Wj ? this._j ? 0.4 + _0x160f3a * 0.2 : 0.9 + _0x160f3a * 0.1 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x2127b9].qh(_0x391c1f);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x3c9063;
    }();
    var _0x61389 = function () {
      function _0x4901a1(_0x419d2c) {
        this.rc = _0x419d2c;
      }
      _0x4901a1.fk = $('#game-view');
      _0x4901a1.gk = $("#results-view");
      _0x4901a1.hk = $("#main-menu-view");
      _0x4901a1.ik = $('#popup-view');
      _0x4901a1.jk = $('#toaster-view');
      _0x4901a1.kk = $("#loading-view");
      _0x4901a1.lk = $("#stretch-box");
      _0x4901a1.mk = $("#game-canvas");
      _0x4901a1.di = $("#background-canvas");
      _0x4901a1.nk = $("#social-buttons");
      _0x4901a1.ok = $("#markup-wrap");
      _0x4901a1.prototype.a = function () {};
      _0x4901a1.prototype.ii = function () {};
      _0x4901a1.prototype.ji = function () {};
      _0x4901a1.prototype.ei = function () {};
      _0x4901a1.prototype.Ra = function () {};
      _0x4901a1.prototype.Pa = function (_0x2ff627, _0x3eb701) {};
      return _0x4901a1;
    }();
    var _0x3a2604 = function () {
      function _0xa538d5(_0x2588ec, _0x39dda8, _0x419d78, _0x7eef95, _0x188b86, _0x54d6ca) {
        var _0x5281f5 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x2588ec + "</span></div>";
        var _0xdbbaaa = $(_0x5281f5);
        _0xdbbaaa.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              'method': 'feed',
              'display': "popup",
              'link': _0x39dda8,
              'name': _0x419d78,
              'caption': _0x7eef95,
              'description': _0x188b86,
              'picture': _0x54d6ca
            }, function () {});
          }
        });
        return _0xdbbaaa;
      }
      var _0x594e63 = $("#final-caption");
      var _0x42d721 = $('#final-continue');
      var _0x10faa7 = $("#congrats-bg");
      var _0xb540e0 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x4f5cb3 = $('#final-share-fb');
      var _0x42db25 = $("#final-message");
      var _0x1ca243 = $('#final-score');
      var _0x1a3fb4 = $("#final-place");
      var _0x44a5aa = $("#final-board");
      var _0x2cbab0 = _0x3ec824(_0x61389, function () {
        _0x61389.call(this, 0x0);
        var _0x10f979 = this;
        var _0x5936e7 = window.anApp = _0x6eb4ba;
        var _0x389931 = _0x61389.mk.get()[0x0];
        console.log("sSE=" + _0x2d1b9d.qk);
        _0x4f5cb3.toggle(_0x2d1b9d.qk);
        _0x594e63.text(window.I18N_MESSAGES["index.game.result.title"]);
        _0x42d721.text(window.I18N_MESSAGES["index.game.result.continue"]);
        _0x42d721.click(function () {
          _0x5936e7.r.Cd();
          _0x5936e7.f.Ma.c();
          _0x5936e7.r.G(_0x11dc4e.AudioState.F);
          _0x5936e7.s.I(_0x5936e7.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (_0x4418f7) {
          if (_0x4418f7.keyCode == 0x20) {
            _0x10f979.rk = true;
          }
          if (_0x4418f7.keyCode == 0x6b) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (_0x4418f7.keyCode == 0x6d) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (theoKzObjects.KeyCodeRespawn == _0x4418f7.keyCode) {
            _0x10f979.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 0x3e8);
          }
        }).keyup(function (_0x435cf6) {
          if (_0x435cf6.keyCode == 0x20) {
            _0x10f979.rk = false;
          }
        });
        _0x389931.addEventListener('touchmove', function (_0x200733) {
          if ((!RechekingPhone() || !theoKzObjects.gamePad.checked) && (_0x200733 = _0x200733 || window.event)) {
            _0x200733 = _0x200733.touches[0x0];
            if (_0x200733.clientX !== undefined) {
              _0x10f979.sk = Math.atan2(_0x200733.clientY - _0x389931.offsetHeight * 0.5, _0x200733.clientX - _0x389931.offsetWidth * 0.5);
            } else {
              _0x10f979.sk = Math.atan2(_0x200733.pageY - _0x389931.offsetHeight * 0.5, _0x200733.pageX - _0x389931.offsetWidth * 0.5);
            }
          }
        }, true);
        _0x389931.addEventListener("touchstart", function (_0x5965e7) {
          if (_0x5965e7 = _0x5965e7 || window.event) {
            _0x10f979.rk = _0x5965e7.touches.length >= 0x2;
          }
          _0x5965e7.preventDefault();
        }, true);
        _0x389931.addEventListener("touchend", function (_0x39e1b8) {
          if (_0x39e1b8 = _0x39e1b8 || window.event) {
            _0x10f979.rk = _0x39e1b8.touches.length >= 0x2;
          }
        }, true);
        _0x389931.addEventListener("mousemove", function (_0x4c06a3) {
          if (!PilotoAutomatico && (_0x4c06a3 = _0x4c06a3 || window.event && _0x4c06a3.clientX !== undefined)) {
            _0x10f979.sk = Math.atan2(_0x4c06a3.clientY - _0x389931.offsetHeight * 0.5, _0x4c06a3.clientX - _0x389931.offsetWidth * 0.5);
          }
        }, true);
        _0x389931.addEventListener("mousedown", function (_0x580962) {
          console.log(_0x580962);
          _0x10f979.rk = true;
        }, true);
        _0x389931.addEventListener("mouseup", function (_0x78c38f) {
          console.log(_0x78c38f);
          _0x10f979.rk = false;
        }, true);
        this.wb = new _0x2174f7(_0x61389.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x10f979;
      });
      _0x2cbab0.prototype.a = function () {};
      _0x2cbab0.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x61389.fk.stop();
          _0x61389.fk.fadeIn(0x1f4);
          _0x61389.gk.stop();
          _0x61389.gk.fadeOut(0x1);
          _0x61389.hk.stop();
          _0x61389.hk.fadeOut(0x32);
          _0x61389.ik.stop();
          _0x61389.ik.fadeOut(0x32);
          _0x61389.jk.stop();
          _0x61389.jk.fadeOut(0x32);
          _0x61389.kk.stop();
          _0x61389.kk.fadeOut(0x32);
          _0x61389.lk.stop();
          _0x61389.lk.fadeOut(0x1);
          _0x61389.di.stop();
          _0x61389.di.fadeOut(0x32);
          _0x1dfc9a.Le(false);
          _0x61389.nk.stop();
          _0x61389.nk.fadeOut(0x32);
          _0x61389.ok.stop();
          _0x61389.ok.fadeOut(0x32);
        } else {
          _0x61389.fk.stop();
          _0x61389.fk.fadeIn(0x1f4);
          _0x61389.gk.stop();
          _0x61389.gk.fadeIn(0x1f4);
          _0x61389.hk.stop();
          _0x61389.hk.fadeOut(0x32);
          _0x61389.ik.stop();
          _0x61389.ik.fadeOut(0x32);
          _0x61389.jk.stop();
          _0x61389.jk.fadeOut(0x32);
          _0x61389.kk.stop();
          _0x61389.kk.fadeOut(0x32);
          _0x61389.lk.stop();
          _0x61389.lk.fadeOut(0x1);
          _0x61389.di.stop();
          _0x61389.di.fadeOut(0x32);
          _0x1dfc9a.Le(false);
          _0x61389.nk.stop();
          _0x61389.nk.fadeOut(0x32);
          _0x61389.ok.stop();
          _0x61389.ok.fadeOut(0x32);
        }
      };
      _0x2cbab0.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x2cbab0.prototype.Fa = function () {
        console.log('re');
        _0x10faa7.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x10faa7.fadeIn(0x1f4);
        }, 0xbb8);
        _0xb540e0.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0xb540e0.fadeIn(0x1f4);
        }, 0x1f4);
        this.cb = 0x1;
        return this;
      };
      _0x2cbab0.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x6eb4ba).r.Gd();
        }
      };
      _0x2cbab0.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x2cbab0.prototype.Pa = function (_0x1c32cf, _0x4fbed0) {
        this.wb.Pa(_0x1c32cf, _0x4fbed0);
      };
      _0x2cbab0.prototype.Da = function (_0x7cbe94, _0x5f0de0, _0x29aedb) {
        var _0x4f40a6 = undefined;
        var _0x343667 = undefined;
        var _0x46644c = undefined;
        if (_0x5f0de0 >= 0x1 && _0x5f0de0 <= 0xa) {
          _0x4f40a6 = window.I18N_MESSAGES["index.game.result.place.i" + _0x5f0de0];
          _0x343667 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x46644c = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x29aedb).replace("{1}", _0x7cbe94).replace("{2}", _0x4f40a6);
        } else {
          _0x4f40a6 = '';
          _0x343667 = window.I18N_MESSAGES["index.game.result.tryHit"];
          _0x46644c = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", _0x29aedb).replace("{1}", _0x7cbe94);
        }
        _0x42db25.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x1ca243.html(_0x7cbe94);
        _0x1a3fb4.html(_0x4f40a6);
        _0x44a5aa.html(_0x343667);
        if (_0x2d1b9d.qk) {
          var _0x16a22f = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x4f5cb3.empty().append(_0xa538d5(_0x16a22f, 'https://wormate.io', "wormate.io", _0x46644c, _0x46644c, 'https://wormate.io/images/og-share-img-new.jpg'));
        }
      };
      _0x2cbab0.prototype.T = function () {
        return this.sk;
      };
      _0x2cbab0.prototype.U = function () {
        return this.rk;
      };
      return _0x2cbab0;
    }();
    var _0x3b746d = function () {
      var _0x29ed04 = $("#loading-worm-a");
      var _0x433816 = $("#loading-worm-b");
      var _0x3a86e6 = $('#loading-worm-c');
      var _0x49909b = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0xa5493a = _0x3ec824(_0x61389, function () {
        _0x61389.call(this, 0x0);
      });
      _0xa5493a.prototype.a = function () {};
      _0xa5493a.prototype.ii = function () {
        _0x61389.fk.stop();
        _0x61389.fk.fadeOut(0x32);
        _0x61389.gk.stop();
        _0x61389.gk.fadeOut(0x32);
        _0x61389.hk.stop();
        _0x61389.hk.fadeOut(0x32);
        _0x61389.ik.stop();
        _0x61389.ik.fadeOut(0x32);
        _0x61389.jk.stop();
        _0x61389.jk.fadeOut(0x32);
        _0x61389.kk.stop();
        _0x61389.kk.fadeIn(0x1f4);
        _0x61389.lk.stop();
        _0x61389.lk.fadeIn(0x1);
        _0x61389.di.stop();
        _0x61389.di.fadeIn(0x1f4);
        _0x1dfc9a.Le(true);
        _0x61389.nk.stop();
        _0x61389.nk.fadeOut(0x32);
        _0x61389.ok.stop();
        _0x61389.ok.fadeOut(0x32);
      };
      _0xa5493a.prototype.ji = function () {
        this.tk();
      };
      _0xa5493a.prototype.tk = function () {
        _0x29ed04.css("background-position", "100% 200%");
        for (var _0x9ccdd9 = 0x0; _0x9ccdd9 < _0x49909b.length; _0x9ccdd9++) {
          var _0x3e47f5 = Math.floor(Math.random() * _0x49909b.length);
          var _0x3cfca9 = _0x49909b[_0x9ccdd9];
          _0x49909b[_0x9ccdd9] = _0x49909b[_0x3e47f5];
          _0x49909b[_0x3e47f5] = _0x3cfca9;
        }
        _0x29ed04.css("background-position", _0x49909b[0x0]);
        _0x433816.css('background-position', _0x49909b[0x1]);
        _0x3a86e6.css('background-position', _0x49909b[0x2]);
      };
      return _0xa5493a;
    }();
    var _0x40aed7 = function () {
      $("#mm-event-text");
      var _0x16f965 = $('#mm-skin-canv');
      var _0x13459d = $("#mm-skin-prev");
      var _0x493579 = $("#mm-skin-next");
      var _0x19923d = $("#mm-skin-over");
      var _0x1f565d = $("#mm-skin-over-button-list");
      var _0x4aef7a = $("#mm-params-nickname");
      var _0x5e429a = $("#mm-params-game-mode");
      var _0x1b66d5 = $('#mm-action-buttons');
      var _0x234f6c = $("#mm-action-play");
      var _0x42fdab = $("#mm-action-guest");
      var _0x578c94 = $("#mm-action-login");
      var _0x527f63 = $("#mm-player-info");
      var _0x2be2da = $("#mm-store");
      var _0x229060 = $("#mm-leaders");
      var _0x51f37d = $("#mm-settings");
      var _0x307ca5 = $("#mm-coins-box");
      var _0x46a14c = $("#mm-player-avatar");
      var _0x4f342e = $("#mm-player-username");
      var _0x42a47b = $('#mm-coins-val');
      var _0x169ed6 = $("#mm-player-exp-bar");
      var _0x235fe1 = $('#mm-player-exp-val');
      var _0x432887 = $('#mm-player-level');
      var _0x293c7e = _0x3ec824(_0x61389, function () {
        _0x61389.call(this, 0x1);
        var _0x18bb86 = window.anApp = _0x6eb4ba;
        this.uk = new _0x418798(_0x16f965);
        _0x5e429a.click(function () {
          _0x18bb86.r.Cd();
        });
        _0x16f965.click(function () {
          if (_0x18bb86.u.P()) {
            _0x18bb86.r.Cd();
            _0x18bb86.s.I(_0x18bb86.s.$h);
          }
        });
        _0x13459d.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.t.Ah();
        });
        _0x493579.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.t.zh();
        });
        _0x4aef7a.keypress(function (_0x2f3ca0) {
          if (_0x2f3ca0.keyCode == 0xd) {
            _0x18bb86.na();
          }
        });
        _0x234f6c.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.na();
        });
        _0x42fdab.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.na();
        });
        _0x578c94.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.s.I(_0x18bb86.s.Zh);
        });
        _0x51f37d.click(function () {
          _0x18bb86.r.Cd();
          _0x18bb86.s.I(_0x18bb86.s.xa);
        });
        _0x527f63.click(function () {
          if (_0x18bb86.u.P()) {
            _0x18bb86.r.Cd();
            _0x18bb86.s.I(_0x18bb86.s.Yh);
          }
        });
        _0x229060.click(function () {
          if (_0x18bb86.u.P()) {
            _0x18bb86.r.Cd();
            _0x18bb86.s.I(_0x18bb86.s.Xh);
          }
        });
        _0x2be2da.click(function () {
          if (_0x18bb86.u.P()) {
            _0x18bb86.r.Cd();
            _0x18bb86.s.I(_0x18bb86.s._h);
          }
        });
        _0x307ca5.click(function () {
          if (_0x18bb86.u.P()) {
            _0x18bb86.r.Cd();
            _0x18bb86.s.I(_0x18bb86.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("<div id=\"final-continue1\">Return to Lobby!</div>");
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let _0x336628 = hoisinhnhanh;
          if (_0x336628) {
            anApp.r.Hd();
            anApp.sa(_0x336628);
          }
        });
        var _0x402b98 = _0x21090b(_0x445805.va);
        if (_0x402b98 != "ARENA" && _0x402b98 != "TEAM2") {
          _0x402b98 = "ARENA";
        }
        _0x5e429a.val(_0x402b98);
       // console.log("Load GM: " + _0x402b98);
      });
      _0x293c7e.prototype.a = function () {
        var _0xb355cf = window.anApp = _0x6eb4ba;
        var _0xc3e8eb = this;
        _0xb355cf.u.V(function () {
          _0xb355cf.s.F.xk();
        });
        _0xb355cf.u.Pi(function () {
          if (_0xb355cf.u.P()) {
            _0xb355cf.t.Bh(_0xb355cf.u.Di(), _0x4843a0.ia);
            _0xb355cf.t.Bh(_0xb355cf.u.Ei(), _0x4843a0.ja);
            _0xb355cf.t.Bh(_0xb355cf.u.Fi(), _0x4843a0.ka);
            _0xb355cf.t.Bh(_0xb355cf.u.Gi(), _0x4843a0.la);
            _0xb355cf.t.Bh(_0xb355cf.u.Hi(), _0x4843a0.ma);
          } else {
            _0xb355cf.t.Bh(_0xb355cf.Ga(), _0x4843a0.ia);
            _0xb355cf.t.Bh(0x0, _0x4843a0.ja);
            _0xb355cf.t.Bh(0x0, _0x4843a0.ka);
            _0xb355cf.t.Bh(0x0, _0x4843a0.la);
            _0xb355cf.t.Bh(0x0, _0x4843a0.ma);
          }
        });
        _0xb355cf.u.Pi(function () {
          _0x234f6c.toggle(_0xb355cf.u.P());
          _0x578c94.toggle(!_0xb355cf.u.P());
          _0x42fdab.toggle(!_0xb355cf.u.P());
          _0x229060.toggle(_0xb355cf.u.P());
          _0x2be2da.toggle(_0xb355cf.u.P());
          _0x307ca5.toggle(_0xb355cf.u.P());
          if (_0xb355cf.u.P()) {
            _0x19923d.hide();
            _0x4f342e.html(_0xb355cf.u.wi());
            _0x46a14c.attr("src", _0xb355cf.u.xi());
            _0x42a47b.html(_0xb355cf.u.zi());
            _0x169ed6.width(_0xb355cf.u.Bi() * 0x64 / _0xb355cf.u.Ci() + '%');
            _0x235fe1.html(_0xb355cf.u.Bi() + " / " + _0xb355cf.u.Ci());
            _0x432887.html(_0xb355cf.u.Ai());
            _0x4aef7a.val(_0xb355cf.u.ga());
          } else {
            _0x19923d.toggle(_0x2d1b9d.qk && !_0xb355cf.Ha());
            _0x4f342e.html(_0x4f342e.data("guest"));
            _0x46a14c.attr("src", '/images/guest-avatar-xmas2022.png');
            _0x42a47b.html('10');
            _0x169ed6.width('0');
            _0x235fe1.html('');
            _0x432887.html(0x1);
            _0x4aef7a.val(_0x21090b(_0x445805.Aa));
          }
        });
        _0xb355cf.t.xh(function () {
          _0xc3e8eb.uk.ak(_0xb355cf.t.ha(_0x4843a0.ia), false, false);
          _0xc3e8eb.uk.bk(_0xb355cf.t.ha(_0x4843a0.ja), false, false);
          _0xc3e8eb.uk.ck(_0xb355cf.t.ha(_0x4843a0.ka), false, false);
          _0xc3e8eb.uk.dk(_0xb355cf.t.ha(_0x4843a0.la), false, false);
          _0xc3e8eb.uk.ek(_0xb355cf.t.ha(_0x4843a0.ma), false, false);
        });
      };
      _0x293c7e.prototype.ii = function () {
        _0x61389.fk.stop();
        _0x61389.fk.fadeOut(0x32);
        _0x61389.gk.stop();
        _0x61389.gk.fadeOut(0x32);
        _0x61389.hk.stop();
        _0x61389.hk.fadeIn(0x1f4);
        _0x61389.ik.stop();
        _0x61389.ik.fadeOut(0x32);
        _0x61389.jk.stop();
        _0x61389.jk.fadeOut(0x32);
        _0x61389.kk.stop();
        _0x61389.kk.fadeOut(0x32);
        _0x61389.lk.stop();
        _0x61389.lk.fadeIn(0x1);
        _0x61389.di.stop();
        _0x61389.di.fadeIn(0x1f4);
        _0x1dfc9a.Le(true);
        _0x61389.nk.stop();
        _0x61389.nk.fadeIn(0x1f4);
        _0x61389.ok.stop();
        _0x61389.ok.fadeIn(0x1f4);
      };
      _0x293c7e.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
        this.uk.Le(true);
      };
      _0x293c7e.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x293c7e.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x293c7e.prototype.Pa = function (_0x4f7533, _0x430fcd) {
        this.uk.Pa();
      };
      _0x293c7e.prototype.ga = function () {
        return _0x4aef7a.val();
      };
      _0x293c7e.prototype.D = function () {
        return _0x5e429a.val();
      };
      _0x293c7e.prototype.xk = function () {
        _0x1b66d5.show();
      };
      _0x293c7e.prototype.vk = function () {
        var _0x4cb8a1 = $('#mm-advice-cont').children();
        var _0x33c948 = 0x0;
        setInterval(function () {
          _0x4cb8a1.eq(_0x33c948).fadeOut(0x1f4, function () {
            if (++_0x33c948 >= _0x4cb8a1.length) {
              _0x33c948 = 0x0;
            }
            _0x4cb8a1.eq(_0x33c948).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x293c7e.prototype.wk = function () {
        function _0xeb7edd() {
          _0x5d7e5e.Ka(true);
          setTimeout(function () {
            _0x19923d.hide();
          }, 0xbb8);
        }
        var _0x5d7e5e = window.anApp = _0x6eb4ba;
        if (_0x2d1b9d.qk && !_0x5d7e5e.Ha()) {
          _0x19923d.show();
          var _0x4b71cf = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
          var _0x8d5682 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
          var _0x6e84c3 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x1f565d.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x8d5682 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x4b71cf + "</span></a>").click(_0xeb7edd));
          _0x1f565d.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x6e84c3 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x4b71cf + "</span></a>").click(_0xeb7edd));
        }
      };
      return _0x293c7e;
    }();
    var _0x586f21 = function () {
      var _0x1c1544 = _0x3ec824(_0x61389, function () {
        _0x61389.call(this, 0x0);
      });
      _0x1c1544.prototype.a = function () {};
      _0x1c1544.prototype.ii = function () {
        _0x61389.fk.stop();
        _0x61389.fk.fadeOut(0x32);
        _0x61389.gk.stop();
        _0x61389.gk.fadeOut(0x32);
        _0x61389.hk.stop();
        _0x61389.hk.fadeOut(0x32);
        _0x61389.ik.stop();
        _0x61389.ik.fadeOut(0x32);
        _0x61389.jk.stop();
        _0x61389.jk.fadeOut(0x32);
        _0x61389.kk.stop();
        _0x61389.kk.fadeOut(0x32);
        _0x61389.lk.stop();
        _0x61389.lk.fadeOut(0x1);
        _0x61389.di.stop();
        _0x61389.di.fadeOut(0x32);
        _0x1dfc9a.Le(false);
        _0x61389.nk.stop();
        _0x61389.nk.fadeOut(0x32);
        _0x61389.ok.stop();
        _0x61389.ok.fadeOut(0x32);
      };
      return _0x1c1544;
    }();
    var _0x1be465 = function () {
      var _0x238679 = $("#toaster-stack");
      var _0x2f39b7 = _0x3ec824(_0x61389, function () {
        _0x61389.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x2f39b7.prototype.a = function () {};
      _0x2f39b7.prototype.ii = function () {
        _0x61389.fk.stop();
        _0x61389.fk.fadeOut(0x32);
        _0x61389.gk.stop();
        _0x61389.gk.fadeOut(0x32);
        _0x61389.hk.stop();
        _0x61389.hk.fadeOut(0x32);
        _0x61389.ik.stop();
        _0x61389.ik.fadeOut(0x32);
        _0x61389.jk.stop();
        _0x61389.jk.fadeIn(0x1f4);
        _0x61389.kk.stop();
        _0x61389.kk.fadeOut(0x32);
        _0x61389.lk.stop();
        _0x61389.lk.fadeIn(0x1);
        _0x61389.di.stop();
        _0x61389.di.fadeIn(0x1f4);
        _0x1dfc9a.Le(true);
        _0x61389.nk.stop();
        _0x61389.nk.fadeOut(0x32);
        _0x61389.ok.stop();
        _0x61389.ok.fadeIn(0x1f4);
      };
      _0x2f39b7.prototype.ji = function () {
        this.Ak();
      };
      _0x2f39b7.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0x0;
      };
      _0x2f39b7.prototype._ = function (_0x5b395e) {
        this.yk.unshift(_0x5b395e);
        setTimeout(function () {
          (window.anApp = _0x6eb4ba).s.ki();
        }, 0x0);
      };
      _0x2f39b7.prototype.Ti = function (_0x20c95f) {
        this.yk.push(_0x20c95f);
        setTimeout(function () {
          (window.anApp = _0x6eb4ba).s.ki();
        }, 0x0);
      };
      _0x2f39b7.prototype.Ak = function () {
        var _0x3ec844 = this;
        if (this.zk == null) {
          if (this.yk.length == 0x0) {
            (window.anApp = _0x6eb4ba).s.gi();
            return;
          }
          var _0xddea24 = this.yk.shift();
          this.zk = _0xddea24;
          var _0x3400ed = _0xddea24.Bk();
          _0x3400ed.hide();
          _0x3400ed.fadeIn(0x12c);
          _0x238679.append(_0x3400ed);
          _0xddea24.Ck = function () {
            _0x3400ed.fadeOut(0x12c);
            setTimeout(function () {
              _0x3400ed.remove();
            }, 0x12c);
            if (_0x3ec844.zk == _0xddea24) {
              _0x3ec844.zk = null;
            }
            _0x3ec844.Ak();
          };
          _0xddea24.ji();
        }
      };
      return _0x2f39b7;
    }();
    var _0x481718 = function () {
      var _0x9cd1c7 = $("#popup-menu-label");
      var _0x198f28 = $('#popup-menu-coins-box');
      var _0x3fb3c3 = $('#popup-menu-coins-val');
      $("#popup-menu-back").click(function () {
        var _0x3d7e1b = window.anApp = _0x6eb4ba;
        _0x3d7e1b.r.Cd();
        _0x3d7e1b.s.gi();
      });
      _0x198f28.click(function () {
        var _0x2d5164 = window.anApp = _0x6eb4ba;
        if (_0x2d5164.u.P()) {
          _0x2d5164.r.Cd();
          _0x2d5164.s.I(_0x2d5164.s.Wh);
        }
      });
      var _0x10bbde = _0x3ec824(_0x61389, function (_0x3a22fa, _0x45bebd) {
        _0x61389.call(this, 0x1);
        this.ad = _0x3a22fa;
        this.Dk = _0x45bebd;
      });
      _0x10bbde.prototype.a = function () {
        _0x10bbde.parent.prototype.a.call(this);
        if (!_0x10bbde.Ek) {
          _0x10bbde.Ek = true;
          var _0x207238 = window.anApp = _0x6eb4ba;
          _0x207238.u.Pi(function () {
            if (_0x207238.u.P()) {
              _0x3fb3c3.html(_0x207238.u.zi());
            } else {
              _0x3fb3c3.html('0');
            }
          });
        }
      };
      _0x10bbde.Fk = $("#coins-view");
      _0x10bbde.Gk = $("#leaders-view");
      _0x10bbde.Hk = $('#profile-view');
      _0x10bbde.Ik = $("#settings-view");
      _0x10bbde.Jk = $('#login-view');
      _0x10bbde.Kk = $("#skins-view");
      _0x10bbde.Lk = $('#store-view');
      _0x10bbde.Mk = $("#wear-view");
      _0x10bbde.Nk = $("#withdraw-consent-view");
      _0x10bbde.Ok = $("#delete-account-view");
      _0x10bbde.Pk = $("#please-wait-view");
      _0x10bbde.prototype.ii = function () {
        _0x61389.fk.stop();
        _0x61389.fk.fadeOut(0xc8);
        _0x61389.gk.stop();
        _0x61389.gk.fadeOut(0xc8);
        _0x61389.hk.stop();
        _0x61389.hk.fadeOut(0xc8);
        _0x61389.ik.stop();
        _0x61389.ik.fadeIn(0xc8);
        _0x61389.jk.stop();
        _0x61389.jk.fadeOut(0xc8);
        _0x61389.kk.stop();
        _0x61389.kk.fadeOut(0xc8);
        _0x61389.nk.stop();
        _0x61389.nk.fadeIn(0xc8);
        _0x61389.ok.stop();
        _0x61389.ok.fadeIn(0xc8);
        _0x9cd1c7.html(this.ad);
        _0x198f28.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x10bbde.prototype.Rk = function () {};
      _0x10bbde.prototype.Sk = function () {
        _0x481718.Pk.stop();
        _0x481718.Pk.fadeIn(0x12c);
      };
      _0x10bbde.prototype.Qk = function () {
        _0x481718.Pk.stop();
        _0x481718.Pk.fadeOut(0x12c);
      };
      return _0x10bbde;
    }();
    var _0x15ac69 = function () {
      var _0x40343e = $("#store-buy-coins_125000");
      var _0x610693 = $("#store-buy-coins_50000");
      var _0x99002b = $("#store-buy-coins_16000");
      var _0x59ce46 = $("#store-buy-coins_7000");
      var _0x1bf5e8 = $('#store-buy-coins_3250');
      var _0x12530d = $('#store-buy-coins_1250');
      var _0x1d185a = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x3523ac = window.anApp = _0x6eb4ba;
        var _0x79443a = this;
        _0x40343e.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_125000");
        });
        _0x610693.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_50000");
        });
        _0x99002b.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_16000");
        });
        _0x59ce46.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_7000");
        });
        _0x1bf5e8.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_3250");
        });
        _0x12530d.click(function () {
          _0x3523ac.r.Cd();
          _0x79443a.Tk("coins_1250");
        });
      });
      _0x1d185a.prototype.a = function () {
        _0x1d185a.parent.prototype.a.call(this);
      };
      _0x1d185a.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeIn(0xc8);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x1d185a.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
      };
      _0x1d185a.prototype.Tk = function (_0x1abb63) {};
      return _0x1d185a;
    }();
    var _0x3f8cd1 = function () {
      var _0x25895a = $("#highscore-table");
      var _0x4c1789 = $("#leaders-button-level");
      var _0x9688bc = $("#leaders-button-highscore");
      var _0x5119fe = $("#leaders-button-kills");
      var _0x3bd447 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x4ab9eb = window.anApp = _0x6eb4ba;
        var _0x561851 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x4c1789,
            'Yk': "byLevel"
          },
          'Zk': {
            'Xk': _0x9688bc,
            'Yk': "byHighScore"
          },
          '$k': {
            'Xk': _0x5119fe,
            'Yk': 'byKillsAndHeadShots'
          }
        };
        _0x4c1789.click(function () {
          _0x4ab9eb.r.Cd();
          _0x561851._k(_0x561851.Vk.Wk);
        });
        _0x9688bc.click(function () {
          _0x4ab9eb.r.Cd();
          _0x561851._k(_0x561851.Vk.Zk);
        });
        _0x5119fe.click(function () {
          _0x4ab9eb.r.Cd();
          _0x561851._k(_0x561851.Vk.$k);
        });
      });
      _0x3bd447.prototype.a = function () {
        _0x3bd447.parent.prototype.a.call(this);
      };
      _0x3bd447.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeIn(0xc8);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x3bd447.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
        var _0x514534 = this;
        this.Sk();
        $.get("https://gateway.wormate.io/pub/leaders", function (_0x1de5e0) {
          _0x514534.Uk = _0x1de5e0;
          _0x514534._k(_0x514534.al ?? _0x514534.Vk.Wk);
          _0x514534.Qk();
        }).done(function () {
          _0x514534.Qk();
        });
      };
      _0x3bd447.prototype._k = function (_0x68babc) {
        this.al = _0x68babc;
        for (var _0x41390f in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x41390f)) {
            var _0x3cdc15 = this.Vk[_0x41390f];
            _0x3cdc15.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass('pressed');
        var _0x5b0d07 = this.Uk[this.al.Yk];
        var _0x3e5c52 = '';
        for (var _0x4f4125 = 0x0; _0x4f4125 < _0x5b0d07.length; _0x4f4125++) {
          var _0x3b377f = _0x5b0d07[_0x4f4125];
          _0x3e5c52 += "<div class=\"table-row\"><span>" + (_0x4f4125 + 0x1) + "</span><span><img src=\"" + _0x3b377f.avatarUrl + "\"/></span><span>" + _0x3b377f.username + "</span><span>" + _0x3b377f.level + "</span><span>" + _0x3b377f.highScore + '</span><span>' + _0x3b377f.headShots + " / " + _0x3b377f.kills + "</span></div>";
        }
        _0x25895a.empty();
        _0x25895a.append(_0x3e5c52);
      };
      return _0x3bd447;
    }();
    var _0x141d33 = function () {
      var _0x246735 = $("#popup-login-gg");
      var _0xaff9a8 = $("#popup-login-fb");
      var _0x3f0a91 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
        var _0x493abb = window.anApp = _0x6eb4ba;
        var _0x5bef4b = this;
        _0x246735.click(function () {
          _0x493abb.r.Cd();
          _0x5bef4b.Sk();
          _0x493abb.u.Qi(function () {
            _0x5bef4b.Qk();
          });
          setTimeout(function () {
            _0x5bef4b.Qk();
          }, 0x2710);
          _0x493abb.u.Zi();
        });
        _0xaff9a8.click(function () {
          _0x493abb.r.Cd();
          _0x5bef4b.Sk();
          _0x493abb.u.Qi(function () {
            _0x5bef4b.Qk();
          });
          setTimeout(function () {
            _0x5bef4b.Qk();
          }, 0x2710);
          _0x493abb.u.Vi();
        });
      });
      _0x3f0a91.prototype.a = function () {
        _0x3f0a91.parent.prototype.a.call(this);
      };
      _0x3f0a91.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeIn(0xc8);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x3f0a91.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
      };
      return _0x3f0a91;
    }();
    var _0x42abd8 = function () {
      var _0x37b22c = $("#profile-avatar");
      var _0x324d83 = $("#profile-username");
      var _0x1738f5 = $("#profile-experience-bar");
      var _0x5845a9 = $("#profile-experience-val");
      var _0x47efa8 = $("#profile-level");
      var _0x20e7c2 = $("#profile-stat-highScore");
      var _0x3d391a = $("#profile-stat-bestSurvivalTime");
      var _0x58f996 = $("#profile-stat-kills");
      var _0x475b1b = $("#profile-stat-headshots");
      var _0x1de251 = $("#profile-stat-gamesPlayed");
      var _0x4d5fd2 = $("#profile-stat-totalTimeSpent");
      var _0x1ba616 = $("#profile-stat-registrationDate");
      var _0x1671a6 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES['index.game.popup.menu.profile.tab'], true);
      });
      _0x1671a6.prototype.a = function () {
        _0x1671a6.parent.prototype.a.call(this);
      };
      _0x1671a6.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeIn(0xc8);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x1671a6.prototype.ji = function () {
        var _0x3f9a89 = window.anApp = _0x6eb4ba;
        _0x3f9a89.r.Dd();
        var _0x1514b4 = _0x3f9a89.u.Oi();
        var _0x258b2d = moment([_0x1514b4.year, _0x1514b4.month - 0x1, _0x1514b4.day]).format('LL');
        _0x324d83.html(_0x3f9a89.u.wi());
        _0x37b22c.attr("src", _0x3f9a89.u.xi());
        _0x1738f5.width(_0x3f9a89.u.Bi() * 0x64 / _0x3f9a89.u.Ci() + '%');
        _0x5845a9.html(_0x3f9a89.u.Bi() + " / " + _0x3f9a89.u.Ci());
        _0x47efa8.html(_0x3f9a89.u.Ai());
        _0x20e7c2.html(_0x3f9a89.u.Ii());
        _0x3d391a.html(_0x35bd9d(_0x3f9a89.u.Ji()));
        _0x58f996.html(_0x3f9a89.u.Ki());
        _0x475b1b.html(_0x3f9a89.u.Li());
        _0x1de251.html(_0x3f9a89.u.Mi());
        _0x4d5fd2.html(_0x35bd9d(_0x3f9a89.u.Ni()));
        _0x1ba616.html(_0x258b2d);
      };
      return _0x1671a6;
    }();
    var _0x1e7efe = function () {
      var _0x1b1409 = $("#settings-music-enabled-switch");
      var _0x21f9a5 = $("#settings-sfx-enabled-switch");
      var _0x3ed746 = $("#settings-show-names-switch");
      var _0x155fd0 = $("#popup-logout");
      var _0x53fbac = $('#popup-logout-container');
      var _0x21531e = $('#popup-delete-account');
      var _0x4316df = $("#popup-delete-account-container");
      var _0x41d3f7 = $('#popup-withdraw-consent');
      var _0x48b1d2 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES['index.game.popup.menu.settings.tab'], false);
        var _0x5ed60f = this;
        var _0x4e1c28 = window.anApp = _0x6eb4ba;
        _0x1b1409.click(function () {
          var _0x35d9ab = !!_0x1b1409.prop("checked");
          _0x472880(_0x445805.Me, _0x35d9ab, 0x1e);
          _0x4e1c28.r.td(_0x35d9ab);
          _0x4e1c28.r.Cd();
        });
        _0x21f9a5.click(function () {
          var _0x53010f = !!_0x21f9a5.prop("checked");
          _0x472880(_0x445805.Ne, _0x53010f, 0x1e);
          _0x4e1c28.r.rd(_0x53010f);
          _0x4e1c28.r.Cd();
        });
        _0x3ed746.click(function () {
          _0x4e1c28.r.Cd();
        });
        _0x155fd0.click(function () {
          _0x4e1c28.r.Cd();
          _0x5ed60f.Sk();
          setTimeout(function () {
            _0x5ed60f.Qk();
          }, 0x7d0);
          _0x4e1c28.u.Wi();
        });
        _0x21531e.click(function () {
          if (_0x4e1c28.u.P()) {
            _0x4e1c28.r.Cd();
            _0x4e1c28.s.I(_0x4e1c28.s.Vh);
          } else {
            _0x4e1c28.r.Hd();
          }
        });
        _0x41d3f7.click(function () {
          if (_0x4e1c28.Y()) {
            _0x4e1c28.r.Cd();
            _0x4e1c28.s.I(_0x4e1c28.s.Uh);
          } else {
            _0x4e1c28.r.Hd();
          }
        });
      });
      _0x48b1d2.prototype.a = function () {
        _0x48b1d2.parent.prototype.a.call(this);
        var _0x1463b4 = window.anApp = _0x6eb4ba;
        var _0x4f62f0 = undefined;
        switch (_0x21090b(_0x445805.Me)) {
          case "false":
            _0x4f62f0 = false;
            break;
          default:
            _0x4f62f0 = true;
        }
        _0x1b1409.prop("checked", _0x4f62f0);
        _0x1463b4.r.td(_0x4f62f0);
        var _0x44b5ef = undefined;
        switch (_0x21090b(_0x445805.Ne)) {
          case 'false':
            _0x44b5ef = false;
            break;
          default:
            _0x44b5ef = true;
        }
        _0x21f9a5.prop("checked", _0x44b5ef);
        _0x1463b4.r.rd(_0x44b5ef);
        var _0x16aaf2 = undefined;
        switch (_0x21090b(_0x445805.ya)) {
          case "false":
            _0x16aaf2 = false;
            break;
          default:
            _0x16aaf2 = true;
        }
      //  console.log("Load sPN: " + _0x16aaf2);
        _0x3ed746.prop('checked', _0x16aaf2);
        _0x1463b4.u.V(function () {
          _0x53fbac.toggle(_0x1463b4.u.P());
          _0x4316df.toggle(_0x1463b4.u.P());
        });
      };
      _0x48b1d2.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeIn(0xc8);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x48b1d2.prototype.ji = function () {
        var _0x3df428 = window.anApp = _0x6eb4ba;
        _0x3df428.r.Dd();
        if (_0x3df428.Y()) {
          _0x41d3f7.show();
        } else {
          _0x41d3f7.hide();
        }
      };
      _0x48b1d2.prototype.wa = function () {
        return _0x3ed746.prop("checked");
      };
      return _0x48b1d2;
    }();
    var _0x5d8c0e = function () {
      var _0x3fa155 = $("#store-view-canv");
      var _0x76583d = $("#skin-description-text");
      var _0x5bf69f = $('#skin-group-description-text');
      var _0x3956f4 = $("#store-locked-bar");
      var _0x5dcd55 = $("#store-locked-bar-text");
      var _0x407dfe = $('#store-buy-button');
      var _0x42a645 = $("#store-item-price");
      var _0x31cdd6 = $("#store-groups");
      var _0x311927 = $("#store-view-prev");
      var _0x22bc6e = $("#store-view-next");
      var _0x4e612f = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES['index.game.popup.menu.skins.tab'], true);
        var _0x3e864a = this;
        var _0x1a50d6 = window.anApp = _0x6eb4ba;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x418798(_0x3fa155);
        _0x407dfe.click(function () {
          _0x1a50d6.r.Cd();
          _0x3e864a.fl();
        });
        _0x311927.click(function () {
          _0x1a50d6.r.Cd();
          _0x3e864a.bl.gl();
        });
        _0x22bc6e.click(function () {
          _0x1a50d6.r.Cd();
          _0x3e864a.bl.hl();
        });
      });
      _0x4e612f.prototype.a = function () {
        _0x4e612f.parent.prototype.a.call(this);
        var _0x1f519d = this;
        var _0x135b68 = window.anApp = _0x6eb4ba;
        _0x135b68.p.ca(function () {
          var _0x3c673e = _0x135b68.p.Ac();
          if (_0x3c673e != null) {
            _0x1f519d.cl = [];
            for (var _0x2899f2 = 0x0; _0x2899f2 < _0x3c673e.skinGroupArrayDict.length; _0x2899f2++) {
              _0x1f519d.cl.push(new _0x137513(_0x1f519d, _0x3c673e.skinGroupArrayDict[_0x2899f2]));
            }
            _0x1f519d.dl = {};
            for (var _0x304e07 = 0x0; _0x304e07 < _0x3c673e.skinArrayDict.length; _0x304e07++) {
              var _0x2bafd4 = _0x3c673e.skinArrayDict[_0x304e07];
              _0x1f519d.dl[_0x2bafd4.id] = _0x2bafd4;
            }
          }
        });
        this.il(false);
        _0x135b68.t.xh(function () {
          _0x1f519d.il(false);
        });
      };
      _0x4e612f.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeIn(0xc8);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x4e612f.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x4e612f.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x4e612f.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x4e612f.prototype.Pa = function (_0x1a65ac, _0x4c3072) {
        this.el.Pa();
      };
      _0x4e612f.prototype.jl = function () {
        var _0x7d8580 = this;
        var _0x1ed3bf = this;
        var _0x873c6b = window.anApp = _0x6eb4ba;
        _0x31cdd6.empty();
        for (var _0x55f9e0 = 0x0; _0x55f9e0 < this.cl.length; _0x55f9e0++) {
          (function (_0x26c2c4) {
            var _0x3bbee2 = _0x7d8580.cl[_0x26c2c4];
            var _0x428025 = document.createElement('li');
            _0x31cdd6.append(_0x428025);
            var _0x4b812a = $(_0x428025);
            _0x4b812a.html(_0x3bbee2.kl());
            _0x4b812a.click(function () {
              _0x873c6b.r.Cd();
              _0x1ed3bf.ll(_0x3bbee2);
            });
            _0x3bbee2.ml = _0x4b812a;
          })(_0x55f9e0);
        }
        if (this.cl.length > 0x0) {
          var _0x31961e = _0x873c6b.t.ha(_0x4843a0.ia);
          for (var _0x55f9e0 = 0x0; _0x55f9e0 < this.cl.length; _0x55f9e0++) {
            var _0x567ef4 = this.cl[_0x55f9e0];
            var _0x5d7c47 = _0x567ef4.nl.list;
            for (var _0x20fe0a = 0x0; _0x20fe0a < _0x5d7c47.length; _0x20fe0a++) {
              if (_0x5d7c47[_0x20fe0a] == _0x31961e) {
                _0x567ef4.ol = _0x20fe0a;
                this.ll(_0x567ef4);
                return;
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x4e612f.prototype.ll = function (_0xa20e0) {
        if (this.bl != _0xa20e0) {
          var _0x3739e3 = window.anApp = _0x6eb4ba;
          this.bl = _0xa20e0;
          _0x31cdd6.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x5bf69f.html('');
          if (_0xa20e0.nl != null) {
            var _0x5acd8a = _0x3739e3.p.Ac().textDict[_0xa20e0.nl.description];
            if (_0x5acd8a != null) {
              _0x5bf69f.html(_0x304328(_0x5acd8a).includes('href') ? _0x304328(_0x5acd8a).replaceAll('href', "target=\"_black\" href") : _0x304328(_0x5acd8a));
            }
          }
          this.il(true);
        }
      };
      _0x4e612f.prototype.pl = function () {
        return this.bl == null ? _0x194f96.Yg() : this.bl.ql();
      };
      _0x4e612f.prototype.fl = function () {
        var _0x2976da = this;
        this.pl().ah(function (_0x5ed58d) {
          _0x2976da.rl(_0x5ed58d);
        });
      };
      _0x4e612f.prototype.rl = function (_0x97886a) {
        var _0x3b5915 = this;
        var _0x37de35 = window.anApp = _0x6eb4ba;
        var _0x844738 = this.dl[_0x97886a].price;
        if (!(_0x37de35.u.zi() < _0x844738)) {
          this.Sk();
          var _0xd03ee1 = _0x37de35.t.ha(_0x4843a0.ia);
          var _0x33e79f = _0x37de35.t.ha(_0x4843a0.ja);
          var _0x2865b1 = _0x37de35.t.ha(_0x4843a0.ka);
          var _0x1d2963 = _0x37de35.t.ha(_0x4843a0.la);
          var _0x229e00 = _0x37de35.t.ha(_0x4843a0.ma);
          _0x37de35.u.Ui(_0x97886a, _0x4843a0.ia, function () {
            _0x37de35.t.Bh(_0xd03ee1, _0x4843a0.ia);
            _0x37de35.t.Bh(_0x33e79f, _0x4843a0.ja);
            _0x37de35.t.Bh(_0x2865b1, _0x4843a0.ka);
            _0x37de35.t.Bh(_0x1d2963, _0x4843a0.la);
            _0x37de35.t.Bh(_0x229e00, _0x4843a0.ma);
            if (_0x37de35.u.Ch(_0x97886a, _0x4843a0.ia)) {
              _0x37de35.t.Bh(_0x97886a, _0x4843a0.ia);
            }
            _0x3b5915.Qk();
          });
        }
      };
      _0x4e612f.prototype.il = function (_0x5a6403) {
        var _0x2ea829 = window.anApp = _0x6eb4ba;
        this.el.bk(_0x2ea829.t.ha(_0x4843a0.ja), false, false);
        this.el.ck(_0x2ea829.t.ha(_0x4843a0.ka), false, false);
        this.el.dk(_0x2ea829.t.ha(_0x4843a0.la), false, false);
        this.el.ek(_0x2ea829.t.ha(_0x4843a0.ma), false, false);
        var _0x26564c = this.pl();
        if (_0x26564c._g()) {
            var _0x20ef5d = _0x26564c.$g();
            var _0x507ff1 = this.dl[_0x20ef5d];
            var _0x27ce89 = false;
    
            // Skin tanımları
            var _0x52e4c6 = { Bm: false };
            var _0x239d11 = true;
            var _0x49cfe0 = "some_skin_id";
            var _0x2b848b = "some_button_value";
    
            if (_0x2ea829.t.Ja(_0x20ef5d, _0x4843a0.ia)) {
                _0x3956f4.hide();
                _0x407dfe.hide();
            } else {
                if (_0x507ff1 == null || _0x507ff1.nonbuyable == 0x1) {
                    _0x27ce89 = true;
                    _0x3956f4.show();
                    _0x407dfe.hide();
                    _0x5dcd55.text(window.I18N_MESSAGES['index.game.popup.menu.store.locked']);
                    if (_0x507ff1 != null && _0x507ff1.nonbuyable && _0x507ff1.nonbuyableCause != null) {
                        var _0x4b3f09 = _0x2ea829.p.Ac().textDict[_0x507ff1.nonbuyableCause];
                        if (_0x4b3f09 != null) {
                            _0x5dcd55.text(_0x304328(_0x4b3f09));
                        }
                    }
                } else {
                    _0x3956f4.hide();
                    _0x407dfe.show();
                    _0x42a645.html(_0x507ff1.price);
                }
            }
    
            // mbf nesnesini burada tanımlıyoruz
            var mbf = {
                mbf_cambiar_add: function(skinId, buttonValue) {
                    console.log("Skin ID: " + skinId + ", Button Value: " + buttonValue);
                    // Gerçek işlemler burada yapılacak
                    // Desenin kaydedildiğine dair alert gösterme
                    alert("Desen kayıt edildi! (Oyun İçi Desen Değişim Güncellemede !");
                }
            };
    
            _0x76583d.html('');
            if (_0x507ff1 != null && _0x507ff1.description != null) {
                var _0x3ff55e = _0x2ea829.p.Ac().textDict[_0x507ff1.description];
                if (_0x3ff55e != null) {
                    _0x76583d.html(_0x304328(_0x3ff55e).includes('href') ? _0x304328(_0x3ff55e).replaceAll('href', "target=\"_black\" href") : _0x304328(_0x3ff55e));
                }
            }
    

            StoreSkinID.html(_0x507ff1.id);
            this.el.ak(_0x20ef5d, true, _0x27ce89);
            if (_0x5a6403) {
                _0x2ea829.t.Bh(_0x20ef5d, _0x4843a0.ia);
            }
        }
    };
    
      var _0x137513 = function () {
        function _0x42e489(_0x1c2dae, _0x2ab0f9) {
          this.sl = _0x1c2dae;
          this.ol = 0x0;
          this.nl = _0x2ab0f9;
        }
        _0x42e489.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x42e489.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x42e489.prototype.kl = function () {
          let _0x5b929 = _0x304328(this.nl.name);
          if (this.nl.img) {
            var _0x39235a = "<img src=\"";
            _0x39235a = _0x39235a + 'https://wormateup.live' + "/images/paths/" + this.nl.img;
            _0x5b929 = _0x39235a = _0x39235a + "\" height=\"43\" width=\"220\" />";
          }
          return _0x5b929;
        };
        _0x42e489.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x194f96.Yg() : _0x194f96.Zg(this.nl.list[this.ol]);
        };
        return _0x42e489;
      }();
      return _0x4e612f;
    }();
    var _0x1f981a = function () {
      var _0x1c610e = $("#store-go-coins-button");
      var _0x1bb1dc = $('#store-go-skins-button');
      var _0x7627cc = $("#store-go-wear-button");
      var _0x246eaa = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var _0x5d05ac = window.anApp = _0x6eb4ba;
        _0x1c610e.click(function () {
          _0x5d05ac.r.Cd();
          _0x5d05ac.s.I(_0x5d05ac.s.Wh);
        });
        _0x1bb1dc.click(function () {
          _0x5d05ac.r.Cd();
          _0x5d05ac.s.I(_0x5d05ac.s.$h);
        });
        _0x7627cc.click(function () {
          _0x5d05ac.r.Cd();
          _0x5d05ac.s.I(_0x5d05ac.s.ai);
        });
      });
      _0x246eaa.prototype.a = function () {
        _0x246eaa.parent.prototype.a.call(this);
      };
      _0x246eaa.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeIn(0xc8);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x246eaa.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
      };
      return _0x246eaa;
    }();
    var _0x300fbf = function () {
      var _0x1f0434 = $("#wear-view-canv");
      var _0x375c28 = $('#wear-description-text');
      var _0x29cbe1 = $("#wear-locked-bar");
      var _0x34d63d = $('#wear-locked-bar-text');
      var _0xeb78c0 = $("#wear-buy-button");
      var _0x3c138c = $('#wear-item-price');
      var _0x2cf6ee = $('#wear-eyes-button');
      var _0x28bd78 = $("#wear-mouths-button");
      var _0x15a59d = $("#wear-glasses-button");
      var _0xa96c90 = $("#wear-hats-button");
      var _0x2fdd78 = $('#wear-tint-chooser');
      var _0x17bdc4 = $('#wear-view-prev');
      var _0xa69d4b = $('#wear-view-next');
      var _0x29054c = _0x3ec824(_0x481718, function () {
        var _0x40eee5 = this;
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var _0x21fa57 = window.anApp = _0x6eb4ba;
        var _0x30e330 = this;
        this.tl = [];
        this.ja = new _0x211e3c(this, _0x4843a0.ja, _0x2cf6ee);
        this.ka = new _0x211e3c(this, _0x4843a0.ka, _0x28bd78);
        this.la = new _0x211e3c(this, _0x4843a0.la, _0x15a59d);
        this.ma = new _0x211e3c(this, _0x4843a0.ma, _0xa96c90);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x418798(_0x1f0434);
        _0xeb78c0.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.Bl();
        });
        _0x17bdc4.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.ul.Cl();
        });
        _0xa69d4b.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.ul.Dl();
        });
        _0x2cf6ee.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.El(_0x40eee5.ja);
        });
        _0x28bd78.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.El(_0x40eee5.ka);
        });
        _0x15a59d.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.El(_0x40eee5.la);
        });
        _0xa96c90.click(function () {
          _0x21fa57.r.Cd();
          _0x30e330.El(_0x40eee5.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x29054c.prototype.a = function () {
        _0x29054c.parent.prototype.a.call(this);
        var _0x54cc2f = window.anApp = _0x6eb4ba;
        var _0x2b67a3 = this;
        _0x54cc2f.p.ca(function () {
          var _0x1f803c = _0x54cc2f.p.Ac();
          if (_0x1f803c != null) {
            _0x2b67a3.vl = _0x1f803c.eyesDict;
            _0x2b67a3.wl = _0x1f803c.mouthDict;
            _0x2b67a3.xl = _0x1f803c.glassesDict;
            _0x2b67a3.yl = _0x1f803c.hatDict;
            _0x2b67a3.zl = _0x1f803c.colorDict;
            _0x2b67a3.ja.Fl(_0x1f803c.eyesVariantArray);
            _0x2b67a3.ja.Gl(_0x2b67a3.vl);
            _0x2b67a3.ka.Fl(_0x1f803c.mouthVariantArray);
            _0x2b67a3.ka.Gl(_0x2b67a3.wl);
            _0x2b67a3.la.Fl(_0x1f803c.glassesVariantArray);
            _0x2b67a3.la.Gl(_0x2b67a3.xl);
            _0x2b67a3.ma.Fl(_0x1f803c.hatVariantArray);
            _0x2b67a3.ma.Gl(_0x2b67a3.yl);
          }
        });
        this.il(false);
        _0x54cc2f.t.xh(function () {
          _0x2b67a3.il(false);
        });
      };
      _0x29054c.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeIn(0xc8);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0x29054c.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x29054c.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x29054c.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x29054c.prototype.Pa = function (_0x2ffc85, _0x97c7d8) {
        this.Al.Pa();
      };
      _0x29054c.prototype.El = function (_0x424457) {
        this.ul = _0x424457;
        for (var _0xc94936 = 0x0; _0xc94936 < this.tl.length; _0xc94936++) {
          this.tl[_0xc94936].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x29054c.prototype.Hl = function () {
        return this.ul == null ? _0x194f96.Yg() : _0x194f96.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x29054c.prototype.Bl = function () {
        var _0x37e326 = this;
        this.Hl().ah(function (_0x593d5c) {
          _0x37e326.Ui(_0x593d5c.Lb, _0x593d5c.rc);
        });
      };
      _0x29054c.prototype.Ui = function (_0x27c9c1, _0x1ff2c1) {
        var _0x3530a1 = this;
        var _0x187117 = window.anApp = _0x6eb4ba;
        var _0x206689 = undefined;
        switch (_0x1ff2c1) {
          case _0x4843a0.ja:
            _0x206689 = this.vl[_0x27c9c1].price;
            break;
          case _0x4843a0.ka:
            _0x206689 = this.wl[_0x27c9c1].price;
            break;
          case _0x4843a0.la:
            _0x206689 = this.xl[_0x27c9c1].price;
            break;
          case _0x4843a0.ma:
            _0x206689 = this.yl[_0x27c9c1].price;
            break;
          default:
            return;
        }
        if (!(_0x187117.u.zi() < _0x206689)) {
          this.Sk();
          var _0x23f4b6 = _0x187117.t.ha(_0x4843a0.ia);
          var _0xfaa882 = _0x187117.t.ha(_0x4843a0.ja);
          var _0x147540 = _0x187117.t.ha(_0x4843a0.ka);
          var _0x16c39b = _0x187117.t.ha(_0x4843a0.la);
          var _0x23882c = _0x187117.t.ha(_0x4843a0.ma);
          _0x187117.u.Ui(_0x27c9c1, _0x1ff2c1, function () {
            _0x187117.t.Bh(_0x23f4b6, _0x4843a0.ia);
            _0x187117.t.Bh(_0xfaa882, _0x4843a0.ja);
            _0x187117.t.Bh(_0x147540, _0x4843a0.ka);
            _0x187117.t.Bh(_0x16c39b, _0x4843a0.la);
            _0x187117.t.Bh(_0x23882c, _0x4843a0.ma);
            if (_0x187117.u.Ch(_0x27c9c1, _0x1ff2c1)) {
              _0x187117.t.Bh(_0x27c9c1, _0x1ff2c1);
            }
            _0x3530a1.Qk();
          });
        }
      };
      _0x29054c.prototype.Il = function (_0x599de2, _0x1e7218) {
        switch (_0x1e7218) {
          case _0x4843a0.ja:
            return this.vl[_0x599de2];
          case _0x4843a0.ka:
            return this.wl[_0x599de2];
          case _0x4843a0.la:
            return this.xl[_0x599de2];
          case _0x4843a0.ma:
            return this.yl[_0x599de2];
        }
        return null;
      };
      _0x29054c.prototype.il = function (_0x8bd205) {
        var _0x221296 = window.anApp = _0x6eb4ba;
        this.Al.ak(_0x221296.t.ha(_0x4843a0.ia), false, false);
        this.Al.bk(_0x221296.t.ha(_0x4843a0.ja), false, false);
        this.Al.ck(_0x221296.t.ha(_0x4843a0.ka), false, false);
        this.Al.dk(_0x221296.t.ha(_0x4843a0.la), false, false);
        this.Al.ek(_0x221296.t.ha(_0x4843a0.ma), false, false);
        var _0x10ace7 = this.Hl();
        if (_0x10ace7._g()) {
          var _0x1219b6 = _0x10ace7.$g();
          var _0x4850d3 = this.Il(_0x1219b6.Lb, _0x1219b6.rc);
          var _0x3ca304 = false;
          if (_0x221296.t.Ja(_0x1219b6.Lb, _0x1219b6.rc)) {
            _0x29cbe1.hide();
            _0xeb78c0.hide();
          } else {
            if (_0x4850d3 == null || _0x4850d3.nonbuyable == 0x1) {
              _0x3ca304 = true;
              _0x29cbe1.show();
              _0xeb78c0.hide();
              _0x34d63d.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (_0x4850d3 != null && _0x4850d3.nonbuyable && _0x4850d3.nonbuyableCause != null) {
                var _0x19df7f = _0x221296.p.Ac().textDict[_0x4850d3.nonbuyableCause];
                if (_0x19df7f != null) {
                  _0x34d63d.text(_0x304328(_0x19df7f));
                }
              }
            } else {
              _0x29cbe1.hide();
              _0xeb78c0.show();
              _0x3c138c.html(_0x4850d3.price);
            }
          }
          _0x375c28.html('');
          if (_0x4850d3 != null && _0x4850d3.description != null) {
            var _0x51e59a = _0x221296.p.Ac().textDict[_0x4850d3.description];
            if (_0x51e59a != null) {
              _0x375c28.html(_0x304328(_0x51e59a).includes('href') ? _0x304328(_0x51e59a).replaceAll('href', "target=\"_black\" href") : _0x304328(_0x51e59a));
            }
          }
          switch (_0x1219b6.rc) {
            case _0x4843a0.ja:
              this.Al.bk(_0x1219b6.Lb, true, _0x3ca304);
              break;
            case _0x4843a0.ka:
              this.Al.ck(_0x1219b6.Lb, true, _0x3ca304);
              break;
            case _0x4843a0.la:
              this.Al.dk(_0x1219b6.Lb, true, _0x3ca304);
              break;
            case _0x4843a0.ma:
              this.Al.ek(_0x1219b6.Lb, true, _0x3ca304);
          }
          if (_0x8bd205) {
            _0x221296.t.Bh(_0x1219b6.Lb, _0x1219b6.rc);
          }
        }
      };
      var _0x211e3c = function () {
        function _0x5e9d37(_0x31fed0, _0x57ca4f, _0x29c9a6) {
          this.sl = _0x31fed0;
          this.rc = _0x57ca4f;
          this.Xk = _0x29c9a6;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x5e9d37.prototype.Fl = function (_0x317e0f) {
          this.Kl = _0x317e0f;
        };
        _0x5e9d37.prototype.Gl = function (_0xdbf2bf) {
          this.Jl = _0xdbf2bf;
        };
        _0x5e9d37.prototype.ii = function () {
          var _0x538685 = window.anApp = _0x6eb4ba;
          var _0x5d230c = _0x538685.t.ha(this.rc);
          for (var _0x129a9e = 0x0; _0x129a9e < this.Kl.length; _0x129a9e++) {
            for (var _0x184c8a = 0x0; _0x184c8a < this.Kl[_0x129a9e].length; _0x184c8a++) {
              if (this.Kl[_0x129a9e][_0x184c8a] == _0x5d230c) {
                this.Nl(_0x129a9e);
                this.Ol(_0x184c8a);
                return;
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x5e9d37.prototype.Cl = function () {
          var _0x510069 = this.Ll - 0x1;
          if (_0x510069 < 0x0) {
            _0x510069 = this.Kl.length - 0x1;
          }
          this.Nl(_0x510069);
          this.Ol(this.Ml % this.Kl[_0x510069].length);
        };
        _0x5e9d37.prototype.Dl = function () {
          var _0x150a5a = this.Ll + 0x1;
          if (_0x150a5a >= this.Kl.length) {
            _0x150a5a = 0x0;
          }
          this.Nl(_0x150a5a);
          this.Ol(this.Ml % this.Kl[_0x150a5a].length);
        };
        _0x5e9d37.prototype.Nl = function (_0x3a56eb) {
          var _0x1802c5 = this;
          if (!(_0x3a56eb < 0x0) && !(_0x3a56eb >= this.Kl.length)) {
            this.Ll = _0x3a56eb;
            _0x2fdd78.empty();
            var _0x26477b = this.Kl[this.Ll];
            if (_0x26477b.length > 0x1) {
              for (var _0x45de48 = 0x0; _0x45de48 < _0x26477b.length; _0x45de48++) {
                (function (_0x5d0046) {
                  var _0x31607f = _0x26477b[_0x5d0046];
                  var _0x2d7b00 = _0x1802c5.Jl[_0x31607f];
                  var _0x424659 = '#' + _0x1802c5.sl.zl[_0x2d7b00.prime];
                  var _0x3a5c24 = $("<div style=\"border-color:" + _0x424659 + "\"></div>");
                  _0x3a5c24.click(function () {
                    (window.anApp = _0x6eb4ba).r.Cd();
                    _0x1802c5.Ol(_0x5d0046);
                  });
                  _0x2fdd78.append(_0x3a5c24);
                })(_0x45de48);
              }
            }
          }
        };
        _0x5e9d37.prototype.Ol = function (_0x5e6083) {
          if (!(_0x5e6083 < 0x0) && !(_0x5e6083 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x5e6083;
            _0x2fdd78.children().css('background-color', "transparent");
            var _0x4fb2b0 = _0x2fdd78.children(":nth-child(" + (0x1 + _0x5e6083) + ')');
            _0x4fb2b0.css("background-color", _0x4fb2b0.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x5e9d37.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x5e9d37;
      }();
      return _0x29054c;
    }();
    var _0x10bec4 = function () {
      var _0xac87bf = $("#withdraw-consent-yes");
      var _0x434278 = $("#withdraw-consent-no");
      var _0xcc3089 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var _0x5b3a6b = window.anApp = _0x6eb4ba;
        _0xac87bf.click(function () {
          _0x5b3a6b.r.Cd();
          if (_0x5b3a6b.Y()) {
            _0x5b3a6b.s.I(_0x5b3a6b.s.F);
            _0x5b3a6b.$(false, true);
            _0x5b3a6b.s.aa._(new _0x476fc7());
          } else {
            _0x5b3a6b.s.gi();
          }
        });
        _0x434278.click(function () {
          _0x5b3a6b.r.Cd();
          _0x5b3a6b.s.gi();
        });
      });
      _0xcc3089.prototype.a = function () {
        _0xcc3089.parent.prototype.a.call(this);
      };
      _0xcc3089.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeIn(0xc8);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeOut(0x32);
      };
      _0xcc3089.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Dd();
      };
      return _0xcc3089;
    }();
    var _0x500512 = function () {
      var _0x4d7ce4 = $("#delete-account-timer");
      var _0x456947 = $("#delete-account-yes");
      var _0x9500fd = $('#delete-account-no');
      var _0x1d9ec3 = _0x3ec824(_0x481718, function () {
        _0x481718.call(this, window.I18N_MESSAGES['index.game.popup.menu.delete.tab'], false);
        var _0x224077 = window.anApp = _0x6eb4ba;
        _0x456947.click(function () {
          _0x224077.r.Cd();
          if (_0x224077.u.P()) {
            _0x224077.u.bj();
            _0x224077.u.Wi();
          } else {
            _0x224077.s.gi();
          }
        });
        _0x9500fd.click(function () {
          _0x224077.r.Cd();
          _0x224077.s.gi();
        });
        this.Pl = [];
      });
      _0x1d9ec3.prototype.a = function () {
        _0x1d9ec3.parent.prototype.a.call(this);
      };
      _0x1d9ec3.prototype.Rk = function () {
        _0x481718.Fk.stop();
        _0x481718.Fk.fadeOut(0x32);
        _0x481718.Gk.stop();
        _0x481718.Gk.fadeOut(0x32);
        _0x481718.Hk.stop();
        _0x481718.Hk.fadeOut(0x32);
        _0x481718.Jk.stop();
        _0x481718.Jk.fadeOut(0x32);
        _0x481718.Ik.stop();
        _0x481718.Ik.fadeOut(0x32);
        _0x481718.Kk.stop();
        _0x481718.Kk.fadeOut(0x32);
        _0x481718.Lk.stop();
        _0x481718.Lk.fadeOut(0x32);
        _0x481718.Mk.stop();
        _0x481718.Mk.fadeOut(0x32);
        _0x481718.Nk.stop();
        _0x481718.Nk.fadeOut(0x32);
        _0x481718.Ok.stop();
        _0x481718.Ok.fadeIn(0xc8);
      };
      _0x1d9ec3.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Hd();
        _0x456947.stop();
        _0x456947.hide();
        _0x4d7ce4.stop();
        _0x4d7ce4.show();
        _0x4d7ce4.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x4d7ce4.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x4d7ce4.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x4d7ce4.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x4d7ce4.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x4d7ce4.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x4d7ce4.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x4d7ce4.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x4d7ce4.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x4d7ce4.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x4d7ce4.hide();
          _0x456947.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x1d9ec3.prototype.Rl = function (_0x3207a3, _0xe17731) {
        var _0x4f1fdf = setTimeout(_0x3207a3, _0xe17731);
        this.Pl.push(_0x4f1fdf);
      };
      _0x1d9ec3.prototype.Ql = function () {
        for (var _0x2c239a = 0x0; _0x2c239a < this.Pl.length; _0x2c239a++) {
          clearTimeout(this.Pl[_0x2c239a]);
        }
        this.Pl = [];
      };
      return _0x1d9ec3;
    }();
    var _0x43942a = function () {
      function _0x5b421c() {
        this.Ck = function () {};
      }
      _0x5b421c.prototype.Bk = function () {};
      _0x5b421c.prototype.ji = function () {};
      return _0x5b421c;
    }();
    var _0x41428e = function () {
      var _0x2116ca = _0x3ec824(_0x43942a, function (_0x2f0ace) {
        _0x43942a.call(this);
        var _0x23497f = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x23497f + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x2f0ace + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + '</div></div>');
        var _0x34c06b = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = _0x6eb4ba).r.Cd();
          _0x34c06b.Ck();
        });
      });
      _0x2116ca.prototype.Bk = function () {
        return this.Sl;
      };
      _0x2116ca.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Fd();
      };
      return _0x2116ca;
    }();
    var _0x4f2546 = function () {
      var _0x6aab26 = _0x3ec824(_0x43942a, function (_0x3f04a0) {
        _0x43942a.call(this);
        var _0x263cbf = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x263cbf + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x3f04a0 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + '</div></div>');
        var _0x51f507 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x6eb4ba).r.Cd();
          _0x51f507.Ck();
        });
      });
      _0x6aab26.prototype.Bk = function () {
        return this.Sl;
      };
      _0x6aab26.prototype.ji = function () {
        (window.anApp = _0x6eb4ba).r.Ed();
      };
      return _0x6aab26;
    }();
    var _0x476fc7 = function () {
      var _0x5e9bff = _0x3ec824(_0x43942a, function () {
        _0x43942a.call(this);
        var _0x600549 = this;
        var _0x4a7d0a = window.anApp = _0x6eb4ba;
        var _0x1feecf = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x1feecf + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + '/images/linelogo-xmas2022.png' + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", '&nbsp;').replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x4a7d0a.r.Cd();
          if (_0x4a7d0a.Y()) {
            _0x4a7d0a.$(true, true);
          }
          _0x600549.Ck();
        });
      });
      _0x5e9bff.prototype.Bk = function () {
        return this.Sl;
      };
      _0x5e9bff.prototype.ji = function () {
        var _0x1cbb2c = this;
        var _0x3802f5 = window.anApp = _0x6eb4ba;
        if (_0x3802f5.Y() && !_0x3802f5.Z()) {
          _0x3802f5.r.Hd();
          setTimeout(function () {
            _0x1cbb2c.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x1cbb2c.Ck();
          }, 0x0);
        }
      };
      return _0x5e9bff;
    }();
    var _0x3c6f22 = {};
    _0x3c6f22.main = {
      'Ma': _0x55429c("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      'K': _0x55429c("ltmolilci1iurq1i", "wormate-io_970x250"),
      'ra': _0xc2ff7f(),
      'e': 0x4,
      'oa': false,
      'qk': true
    };
    _0x3c6f22.miniclip = {
      'Ma': _0x55429c('aqnvgcpz05orkobh', 'WRM_wormate-io_300x250'),
      'K': _0x55429c("ltmolilci1iurq1i", "wormate-io_970x250"),
      'ra': _0xc2ff7f(),
      'e': 0x4,
      'oa': false,
      'qk': false
    };
    var _0x2d1b9d = _0x3c6f22[window.ENV];
    _0x2d1b9d ||= _0x3c6f22.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x247177) {
      _0x247177.preventDefault();
      _0x247177.stopPropagation();
      return false;
    });
    _0x53ce60("//connect.facebook.net/" + _0x104c53 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': "861926850619051",
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
      });
    });
    _0x53ce60("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com'
        });
      });
    });
    _0x6eb4ba = _0x21bffa();
    _0x6eb4ba.v();
    if (PhoneChecked()) {
      _0x53ce60('https://wormateup.live/up/js/joy.min.js', "mobileconfig", function () {
        _0x582ec2();
      });
    }
    ;
    let _0x582ec2 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = 0x51;
    window.addEventListener("keydown", function (_0x529f29) {
      console.log("event.keyCode " + _0x529f29.keyCode);
      _0x529f29 = _0x529f29.which || _0x529f29.keyCode || 0x0;
      if (_0x529f29 !== 0x71 && window.keyMove !== _0x529f29 || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let _0x221997 = theoEvents.eventoPrincipal.sk = 0x0;
        _0x529f29 = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let _0x43c7f8 = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (_0x43c7f8 >= Math.PI ? -_0x43c7f8 : _0x43c7f8) + (_0x221997 === 0x0 ? 0x0 : Math.PI / 0x4);
          _0x221997++;
        }, 0xa5 + (_0x529f29 >= 0x186a0 ? 0x5 : _0x529f29 >= 0x2710 ? 0xa : 0x0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    let _0x326b5b = [{
      'nombre': "chuot 1",
      'url': "https://i.imgur.com/SjFtyqp.png"
    }, {
      'nombre': "chuot 2",
      'url': "https://i.imgur.com/4QC2Exd.png"
    }, {
      'nombre': "chuot 3",
      'url': "https://i.imgur.com/PfdBkc2.png"
    }, {
      'nombre': "chuot 4",
      'url': "https://i.imgur.com/vD4zoMk.png"
    }, {
      'nombre': "chuot 5",
      'url': "https://i.imgur.com/n4N79UI.png"
    }, {
      'nombre': "arrow",
      'url': "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      'nombre': 'Superman',
      'url': "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      'nombre': "Kratos",
      'url': 'https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png'
    }, {
      'nombre': "Pusheen_Ca",
      'url': "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      'nombre': "lipstick",
      'url': "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      'nombre': "AKM",
      'url': 'https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png'
    }, {
      'nombre': "Cherries_Pointer",
      'url': "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      'nombre': "Tom_and_JerryCurso",
      'url': 'https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png'
    }, {
      'nombre': "JerryPointer",
      'url': "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let _0x41c5a1 = [{
      'nombre': "Default",
      'url': 'https://i.imgur.com/8ubx4RA.png'
    }, {
      'nombre': "Schwarze Background",
      'url': "https://i.imgur.com/3cxXwZ6.png"
    }, {
      'nombre': "light blue",
      'url': 'https://i.imgur.com/dWtJFIx.png'
    }, {
      'nombre': 'woman',
      'url': 'https://i.imgur.com/19YALRi.png'
    }, {
      'nombre': "Navidad",
      'url': "https://i.imgur.com/PSRIvVM.png"
    }, {
      'nombre': 'Mal3ab',
      'url': 'https://i.imgur.com/MlCgOma.png'
    }, {
      'nombre': 'Galaxy_Star',
      'url': "https://i.imgur.com/yayb9Ru.png"
    }, {
      'nombre': "Desert",
      'url': "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    theoKzObjects.loading = true;
    var _0x3d91f0 = '';
    _0x3d91f0 += "</div>";
    _0x3d91f0 += "</div>";
    _0x3d91f0 += "</div>";
    _0x3d91f0 += "<div id=\"wormcerca\">";
    _0x3d91f0 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0x3d91f0 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0x3d91f0 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0x3d91f0 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0x3d91f0 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0x3d91f0 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0x3d91f0 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x3d91f0 += "</div>";
    _0x3d91f0 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0x3d91f0 += `
    </div>
    <div class="worm_2">
<button id="settingBtn">
    <img src="https://i.imgur.com/bKAe6W9.png" />
</button>
<div id="settingContent">
   // <button id="closeBtn" class="close-btn">X</button> <!-- Kapatma butonu -->

    <div class="container1">
        <span class="settings_span">Spin-Fast: </span>
        <input id="smoothCamera" class="range" type="range" min="0.3" max="0.6" value="${theoKzObjects.smoothCamera}" step="0.1" oninput="document.getElementById('smoothCameraValue').textContent=this.value" />
        <span id="smoothCameraValue" class="value-box">${theoKzObjects.smoothCamera}</span> <!-- Değer kutusu -->
    </div>

    <div class="container1">
        <span class="settings_span">Power-ups-Size: </span>
        <input id="PortionSize" class="range" type="range" min="1" max="6" value="${theoKzObjects.PortionSize}" step="1" oninput="document.getElementById('rangevalue1').textContent=this.value" />
        <span id="rangevalue1" class="value-box">${theoKzObjects.PortionSize}</span> <!-- Değer kutusu -->
    </div>

    <div class="container1">
        <span class="settings_span">Power-ups-Aura: </span>
        <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="${theoKzObjects.PortionAura}" step="0.2" oninput="document.getElementById('PortionAuravalue').textContent=this.value" />
        <span id="PortionAuravalue" class="value-box">${theoKzObjects.PortionAura}</span> <!-- Değer kutusu -->
    </div>

    <div class="container1">
        <span class="settings_span">Food-Size: </span>
        <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="${theoKzObjects.FoodSize}" step="0.5" oninput="document.getElementById('rangevalue2').textContent=this.value" />
     //   <span id="rangevalue2" class="value-box">${theoKzObjects.FoodSize}</span> <!-- Değer kutusu -->
    </div>

    <div class="container1">
        <span class="settings_span">Food-Shadow: </span>
        <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="${theoKzObjects.FoodShadow}" step="0.5" oninput="document.getElementById('FoodShadowvalue').textContent=this.value" />
      //  <span id="FoodShadowvalue" class="value-box">${theoKzObjects.FoodShadow}</span> <!-- Değer kutusu -->
    </div>
</div>

    <div style="display:none" id="zoom-container">
        <div id="zoom-out">-</div>
        <div id="zoom-in">+</div>
        <div class="worm_3">
            x.<span id="zoom-percentage"></span>
        </div>
    </div>
    `;
    
        $("#game-view").append(_0x3d91f0);
    function _0x3a998e(_0x5e3b46) {
      if (theoKzObjects.PropertyManager) {
        _0x5e3b46.skinId = theoKzObjects.PropertyManager.rh;
        _0x5e3b46.eyesId = theoKzObjects.PropertyManager.sh;
        _0x5e3b46.mouthId = theoKzObjects.PropertyManager.th;
        _0x5e3b46.glassesId = theoKzObjects.PropertyManager.uh;
        _0x5e3b46.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0xce1bba() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.wormate.io\">🎅 Wormate Hırsız YILDO 2025</a></div>");
     //Logo degişmek istersen $('.mm-logo').replaceWith("<div class=\"nhap-nhay\">ğ—˜ ğ—š ğ—¬ ğ—£ ğ—§</div>");
      $("#mm-store").after("\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Settings\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span>Player Settings<span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n\n                <!-- 3.Kısım 4.Kısım -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">🔧 General Setting</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">🐍Snake HS Animation</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">🐶Mouse Background</button>\n                </div>\n\n                <!-- 14.kısım 12.kısım 13.kısım -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(() => alert('Your ID " + theoKzObjects.FB_UserID + " Copy!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            🔊\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormateup.live/up/video/emaat.mp3\">ولك امعط</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">القم</option>\n    <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">اديلوو ادي</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">ع لووبي</option>\n    <option value=\"https://wormateup.live/up/video/laugh.mp3\">Laugh ههههه</option>\n    <option value=\"https://wormateup.live/up/video/mario-jump.mp3\">Mario Jump</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // عناصر التحكم\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // قائمة الأصوات\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // الصوت الافتراضي فارغ\n  let audio = null; // كائن الصوت غير مهيأ\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // التحقق من إعداد الصوت\n\n  // إعدادات الصوت الأولية\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // تحديث الصوت عند التغيير في القائمة\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // إيقاف أي صوت قيد التشغيل\n      audio = new Audio(audioSrc); // إنشاء كائن صوت جديد\n      audio.play(); // تشغيل الصوت الجديد\n    }\n  });\n\n  // تعطيل الصوت\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // إيقاف الصوت إذا تم كتمه\n    }\n  });\n\n  // تشغيل الصوت عند تمرير الماوس على الخيارات\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // إنشاء كائن صوت عند المرور\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // لا يتم تشغيل الصوت الأولي هنا\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n              <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> automatic for snake <a href=\"/\">Q key</a>: You can return wherever you are with    \n                </div>\n            <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i>  <a href=\"/\">R Key</a> When your automatic snake explodes, it will restart.   \n\n            </div>\n                        <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i>   <a href=\"/\">Z key</a>    You can turn off the zoom directly in the game with .\n\n            </div>\n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3>You can change the text on the heads you throw in the game from here.</h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">Multiplication Text</label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"I think he was hit by a truck🤣\">I think it was hit by a tractor 🤣</option>\n                            <option value=\" Depremmi Oldu\">🤣  Was there an earthquake? 🤣</option>\n                            <option value=\"Aha Car Hit🤣\">Aha The Car Crashed🤣</option>\n                            <option value= 0 O Neydi  qızz!🙀\">What was that girl!🙀</option>\n\n                        </select>\n                    </div>\n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">:Select Headshot Text</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\"إWhat happened to my leaf?\">what happenedyapram🤣</option>\n                            <option value=\" But How Did I Hit You?🤣 🔪\">But How Did I Hit You? 🤣 🔪</option>\n                            <option value=\" HEADSHOT ☠️\">HEADSHOT ☠️</option>\n\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Save </button>\n            </div>\n\n                <!-- محتوى تبويب إعدادات الخلفيات (تم حذف كافة الخلفيات) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        /* تنسيق التبويبات */\n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        /* تنسيق خيارات الخلفية */\n        .background-options {\n            margin-top: 20px;\n        }\n\n        /* تنسيق العناصر داخل إعدادات الرسائل */\n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        /* تنسيق محتوى إعدادات الرسائل */\n        #messageSettings {\n            display: flex;\n            flex-direction: row; /* وضع العناصر في صف */\n            justify-content: center; /* محاذاة العناصر في المنتصف */\n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // دالة التنقل بين التبويبات\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// دالة لحفظ الرسائل\nfunction saveMessages() {\n    // استرجاع القيم من القوائم المنسدلة\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // حفظ القيم في localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // عرض رسالة تأكيد\n    alert(\"It has been successfully registered!\");\n\n    // لعرض القيم المدخلة في وحدة التحكم لتتأكد من الحفظ\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// دالة لاسترجاع الرسائل المخزنة من localStorage عند تحميل الصفحة\nfunction loadMessages() {\n    // استرجاع القيم من localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // التحقق من أن القيم مخزنة في localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // لعرض القيم في وحدة التحكم للتأكد من استرجاعها بشكل صحيح\n    console.log(\"Loaded Headshot Message: \" + savedHeadshot);\n    console.log(\"Loaded Kill Message: \" + savedKill);\n}\n\n// استرجاع الرسائل المخزنة عند تحميل الصفحة أو بعد إضافة المحتوى الجديد\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // تأخير بسيط للتأكد من تحميل المحتوى\n}\n\n// استدعاء initializeSettings عند إضافة المحتوى أو تحميل الصفحة\ninitializeSettings();\n\n\n\n\n\n        // دالة لحفظ الخلفية\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"تم حفظ الخلفية بنجاح!\");\n        }\n    </script>\n");
$("#loa831pibur0w4gv").replaceWith(`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div class="label" id="titleSetings">No need Active!</div>
    <div class="bao-list1">
        <center>
            <div class="hg">
                <br> <br> <br><br> <br> <br>
                Free For ALL!
            </div>
        </center>
        <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>
    </div>
</div>
`);
      var _0x11d5f6 = document.getElementById('settingBtn');
      var _0x88e0ac = document.getElementById("settingContent");
      _0x11d5f6.addEventListener('click', function () {
        if (_0x88e0ac.style.display === 'none') {
          _0x88e0ac.style.display = "block";
        } else {
          _0x88e0ac.style.display = 'none';
        }
      });
      $("#PortionSize").on('input', function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $('#FoodShadow').on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });

      $("#mm-advice-cont").html(`
<div class="wormworld-connect-count-b32" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
    <input type="button" value="🖥️ Full Screen" id="fullscreen_button" style="margin-top:5px;width:100%;height:35px;" />
    <input type="button" value="RESPAWN" onclick="respawnFn()" style="margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;" />
    <input type="button" value="SKINLAB" onclick="window.location.href='https://wormate.io'" style="margin-top:5px;width:100%;height:35px;" />
</div>


    `);





    $(document).ready(function () {
      $("#fullscreen_button").on('click', function () {  // id ile tam ekran butonunu seçiyoruz
          if (!document.fullscreenElement &&  // Eğer tam ekran değilse
              !document.mozFullScreen && !document.webkitIsFullScreen) {  // Mozilla ve Webkit uyumlu olmayan eski tarayıcıları kontrol et
              if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();  // Modern tarayıcılar için
              } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();  // Firefox için
              } else if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen();  // Webkit tarayıcıları (Chrome, Safari) için
              }
          } else {
              if (document.exitFullscreen) {
                  document.exitFullscreen();  // Modern tarayıcılar için
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();  // Firefox için
              } else if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen();  // Webkit tarayıcıları (Chrome, Safari) için
              }
          }
      });
  });
  
      $("#hoisinh").click(function () {
        let _0x49cb0d = _0x49cb0d;
        if (_0x49cb0d) {
          anApp.r.Hd();
          anApp.sa(_0x49cb0d);
        }
      });
      $(".mm-merchant").replaceWith('');
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n          <div id=\"title\"></div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ");
      $('.ui-tab').on("click", account);
      $(".flag").click(function () {
        let _0x57739b = $(this).attr("value");
        theoKzObjects.flag = _0x57739b;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(_0x57739b);
      });
      for (a = 0x0; a < servers.Api_listServer.length; a++) {
        var _0x490402 = servers.Api_listServer[a].serverUrl;
        var _0x34f560 = servers.Api_listServer[a].name;
        var _0x4854dc = servers.Api_listServer[a].region;
        let _0x682c50 = document.createElement('p');
        _0x682c50.value = _0x490402;
        _0x682c50.innerHTML = _0x34f560;
        if (_0x4854dc == "peru") {
          $(".servers-peru").prepend(_0x682c50);
        } else {
          if (_0x4854dc == "mexico") {
            $(".servers-mexico").prepend(_0x682c50);
          } else {
            if (_0x4854dc == "eeuu") {
              $(".servers-eeuu").prepend(_0x682c50);
            } else {
              if (_0x4854dc == "canada") {
                $(".servers-canada").prepend(_0x682c50);
              } else {
                if (_0x4854dc == "germania") {
                  $(".servers-germania").prepend(_0x682c50);
                } else {
                  if (_0x4854dc == "francia") {
                    $(".servers-francia").prepend(_0x682c50);
                  } else {
                    if (_0x4854dc == "singapur") {
                      $(".servers-singapur").prepend(_0x682c50);
                    } else {
                      if (_0x4854dc == "japon") {
                        $(".servers-japon").prepend(_0x682c50);
                      } else {
                        if (_0x4854dc == 'australia') {
                          $('.servers-australia').prepend(_0x682c50);
                        } else if (_0x4854dc == 'granbretana') {
                          $(".servers-granbretana").prepend(_0x682c50);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        $(_0x682c50).attr('id', _0x4854dc);
        $(_0x682c50).attr("class", "selectSala");
        $(_0x682c50).attr('value', _0x34f560);
        $(_0x682c50).click(function () {
          ctx.setServer($(this).text());
          let _0x544e9b = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = _0x544e9b;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function _0x25fd6e() {
      $('#getskin').on("click", function () {
        for (var _0x56e726 = 0x0; _0x56e726 < clientes.clientesActivos.length; _0x56e726++) {
          var _0x204783 = clientes.clientesActivos[_0x56e726].cliente_NOMBRE;
          var _0x5550a4 = clientes.clientesActivos[_0x56e726].cliente_ID;
          var _0x3eef56 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin;
          var _0xddf50f = clientes.clientesActivos[_0x56e726].Client_VisibleSkin1;
          var _0x2ff1ee = clientes.clientesActivos[_0x56e726].Client_VisibleSkin2;
          var _0x27e4bf = clientes.clientesActivos[_0x56e726].Client_VisibleSkin3;
          var _0x279665 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin4;
          var _0x5b1d31 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin5;
          var _0x4cffb7 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin6;
          var _0x2bcf54 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin7;
          var _0x335276 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin8;
          var _0x458d5f = clientes.clientesActivos[_0x56e726].Client_VisibleSkin9;
          var _0x1134e9 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin10;
          var _0x3e9f98 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin11;
          var _0x252750 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin12;
          var _0x30bf00 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin13;
          var _0x1ccbda = clientes.clientesActivos[_0x56e726].Client_VisibleSkin14;
          var _0x90c668 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin15;
          var _0x1bf441 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin16;
          var _0x233249 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin17;
          var _0x1095cc = clientes.clientesActivos[_0x56e726].Client_VisibleSkin18;
          var _0x2be536 = clientes.clientesActivos[_0x56e726].Client_VisibleSkin19;
          var _0x1143ed = clientes.clientesActivos[_0x56e726].Client_VisibleSkin20;
          var _0x582e1b = clientes.clientesActivos[_0x56e726].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0x0) {} else {
            if (theoKzObjects.FB_UserID == _0x5550a4) {
              if (_0x582e1b == "XTPRIVATESKIN") {
                for (let _0x4a496a = 0x0; _0x4a496a < theoKzObjects.idSkin.length; _0x4a496a++) {
                  const _0x5eb06d = theoKzObjects.idSkin[_0x4a496a];
                  if (_0x5eb06d.id == _0x3eef56 || _0x5eb06d.id == _0xddf50f || _0x5eb06d.id == _0x2ff1ee || _0x5eb06d.id == _0x27e4bf || _0x5eb06d.id == _0x279665 || _0x5eb06d.id == _0x5b1d31 || _0x5eb06d.id == _0x4cffb7 || _0x5eb06d.id == _0x2bcf54 || _0x5eb06d.id == _0x335276 || _0x5eb06d.id == _0x458d5f || _0x5eb06d.id == _0x1134e9 || _0x5eb06d.id == _0x3e9f98 || _0x5eb06d.id == _0x252750 || _0x5eb06d.id == _0x30bf00 || _0x5eb06d.id == _0x1ccbda || _0x5eb06d.id == _0x90c668 || _0x5eb06d.id == _0x1bf441 || _0x5eb06d.id == _0x233249 || _0x5eb06d.id == _0x1095cc || _0x5eb06d.id == _0x2be536 || _0x5eb06d.id == _0x1143ed) {
                    _0x5eb06d.nonbuyable = false;
                  }
                }
              } else {}
            } else {}
          }
        }
      });
    }
    function _0x4214d2() {
      theoKzObjects.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n         <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <div class=\"label\" id=\"titleSetings\"></div>\n          <div class=\"bao-list1\">\n            <div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n              Güncelleme: 18/12/2024\n            </div>\n            <br>\n            <div class=\"list1\">\n            <i class=\"fa fa-volume-off\" aria-hidden=\"true\" style=\"color: #ff0000;\"></i>\nSizlere en iyi Oyun Performansı vermek için çalışmalarımız son hız ile devam ediyor.  - Aktivasyon için bizlere lütfen aşagıdaki bağlantı üzerinden iletişime geçiniz Siz Değerli - Oyuncularımızı görmekten memnuniyet duyuyoruz iyi oyunlar.</div>\n<br> \n<br> <br> <br> <br>  \n<div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n\n              <a href=\"https://discord.gg/\">1.Metin 2.metin 3.metin 4.metin</a>\n            </div>\n          </div>\n        </div>\n      ");
      $('#mm-coins-box').replaceWith(`
        <div style="margin: 0;" id="mm-coins-box">
          <button 
            style="
              width: 90px;
              height: 32px;
              float: right;
              border-radius: 10px;
              border: solid #fac 2px;
            " 
            id="getskin">🔐Skins</button>
        </div>
      `);
      
      $(document).on('click', '#getskin', function() {
        alert('Desen kilidi açıldı!');
      });


      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.eat_animation = 0x1;
          localStorage.setItem('mySwitch', 'on');
        } else {
          console.log("I'm not checked");
          theoKzObjects.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var _0x4b9cb1 = localStorage.getItem("mySwitch");
        if (_0x4b9cb1 === 'on') {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          theoKzObjects.eat_animation = 0x1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          theoKzObjects.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremer = false;
          localStorage.setItem('ModeStremer', "false");
        }
      });
      $(document).ready(function () {
        var _0x24e4e5 = localStorage.getItem("ModeStremer");
        if (_0x24e4e5 === 'true') {
          theoKzObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on('click', function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", 'false');
        }
      });
      $(document).ready(function () {
        var _0x5a2ae8 = localStorage.getItem("ModeStremerbatop");
        if (_0x5a2ae8 === "true") {
          theoKzObjects.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerbatop = false;
          $('#settings-stremingmodebatop-switch').prop('checked', false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on('click', function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremersaveheadshot = true;
          localStorage.setItem('ModeStremersaveheadshot', "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var _0x3ade99 = localStorage.getItem("ModeStremersaveheadshot");
        if (_0x3ade99 === "true") {
          theoKzObjects.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop('checked', true);
        } else {
          theoKzObjects.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem('ModeStremerheadshot', "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var _0x518dd5 = localStorage.getItem("ModeStremerheadshot");
        if (_0x518dd5 === 'true') {
          theoKzObjects.ModeStremerheadshot = true;
          $('#settings-stremingmodeheadshot-switch').prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $('#settings-stremingmodeheadshot-switch').on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", 'true');
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var _0x1a1b7e = localStorage.getItem('ModeStremerheadshot');
        if (_0x1a1b7e === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop('checked', false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var _0x1d5513 = localStorage.getItem("ModeStremeremoj");
        if (_0x1d5513 === "true") {
          theoKzObjects.ModeStremeremoj = true;
          $('#settings-stremingmodeemoj-switch').prop("checked", true);
        } else {
          theoKzObjects.ModeStremeremoj = false;
          $('#settings-stremingmodeemoj-switch').prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on('click', function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.arrow = false;
        } else {
          console.log("I'm not checked");
          theoKzObjects.arrow = true;
        }
      });
      $('#PortionSize').on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $('#PortionAura').on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $('#FoodSize').on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $('#FoodShadow').on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (_0x2355ff) {
        if (isValidHotkey(_0x2355ff)) {
          var _0x432d4a = $(this);
          var _0x263ff4 = getPresedKey(_0x2355ff);
          var _0x17ad44 = _0x2355ff.keyCode;
          _0x432d4a.val(_0x263ff4);
          _0x432d4a.blur();
          window.keyMove = _0x17ad44;
          window.localStorage.setItem(_0x432d4a.attr('id'), _0x17ad44);
        } else {
          _0x2355ff.preventDefault();
        }
      });
      for (a = 0x0; a < _0x326b5b.length; a++) {
        var _0xe6e626 = _0x326b5b[a].url;
        var _0x33209b = _0x326b5b[a].nombre;
        let _0x4eb8e4 = document.createElement("img");
        _0x4eb8e4.src = _0xe6e626;
        $(".cursor-container").prepend(_0x4eb8e4);
        $(_0x4eb8e4).attr("class", 'cursor');
        $(_0x4eb8e4).click(function () {
          let _0x21053d = $(this).attr('src');
          localStorage.cursorSeleccionado = _0x21053d;
          $('#game-cont').css({
            'cursor': "url(" + _0x21053d + "), default"
          });
          $('#game-canvas').css({
            'cursor': "url(" + _0x21053d + "), default"
          });
          $("body").css({
            'cursor': 'url(' + _0x21053d + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", 'default');
        });
        
      }
      $("#game-cont").css({
        'cursor': "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        'cursor': "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        'cursor': "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0x0; a < _0x41c5a1.length; a++) {
        var _0x4fdcc5 = _0x41c5a1[a].url;
        var _0x31ca12 = _0x41c5a1[a].nombre;
        let _0x51cd24 = document.createElement('img');
        _0x51cd24.src = _0x4fdcc5;
        $(".background-container").prepend(_0x51cd24);
        $(_0x51cd24).attr('class', "background");
        $(_0x51cd24).attr("value", _0x31ca12);
        $(_0x51cd24).click(function () {
          let _0x514d35 = $(this).attr("src");
          let _0x221a76 = $(this).attr("value");
          backgroundIMG = _0x514d35;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + _0x221a76);
          _0x6eb4ba.q.Cf = new _0x1c8759._b(_0x6eb4ba.q.fn_o(_0x514d35));
        });
      }
      $(".background-container").prepend('');
      _0x6eb4ba.q.Cf = new _0x1c8759._b(_0x6eb4ba.q.fn_o(localStorage.fondoSeleccionado));
    }
    function _0x3e4a7f(_0x71f58c, _0x13b645) {
      let _0x2c7fc8 = function (_0x40fb63, _0x5d9f00, _0x16fe34, _0x3362b8) {
        ctx.setCountGame(_0x40fb63, _0x5d9f00, _0x16fe34, _0x3362b8);
      };
      if (_0x71f58c === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0x0) + (_0x13b645 ? 0x0 : 0x1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0x0) + (_0x13b645 ? 0x1 : 0x0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (_0x13b645 ? 0x0 : 0x1);
        theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (_0x13b645 ? 0x1 : 0x0);
        _0x2c7fc8(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x71f58c === 'open') {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        $("#contadorKill_12").show();
        _0x2c7fc8(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x71f58c === 'closed') {
        pwrups = {};
      }
      if (_0x71f58c === "cerrar") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        theoKzObjects.totalKills = 0x0;
        theoKzObjects.totalHeadshots = 0x0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(0x3, 0x2);
      };
    }
    setTimeout(function () {
      var _0x1a1a4e = [
        "2727"
      ];
      
      $("#mm-action-play").on("click", function () {
        var _0x4f7105 = $("#mm-params-nickname").val();
        var _0x354c35 = _0x1a1a4e.some(function (_0x59ccd7) {
          return _0x4f7105.toLowerCase().includes(_0x59ccd7.toLowerCase());
        });
        if (_0x354c35) {
          $("#mm-params-nickname").val(" Küfürlü*");
        }
      });
      $('#final-share-fb').css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", 'block');
      $("#mm-bottom-buttons").addClass("buttonNavidad");
      var _0x223d6b = $('<img>', {
        'id': "gold-crown",
        'src': 'https://i.imgur.com/z2o76Xe.png',
        'alt': 'gold-crown'
      });
      $("#mm-player-avatar").after(_0x223d6b);
      $('#gold-crown').css({
        'position': 'absolute',
        'top': "-23px",
        'transform': "translateX(-2%)",
        'width': "50px",
        'height': "auto"
      });
      $("#relojHelp").css("position", "absolute");
      $('#relojHelp').css("top", "12px");
      $('#relojHelp').css('left', "5px");
      $("#delete-account-view").css('display', "none");
    }, 0xbb8);
    var _0x2f1af3 = function _0x5f5b5c() {
      requestAnimationFrame(_0x5f5b5c);
      (window.anApp = _0x6eb4ba).Pa();
    };
    _0x2f1af3();
    function _0x1adea4() {
      var _0x149c6e = _0x1672b6.width();
      var _0x2b0d7b = _0x1672b6.height();
      var _0x2d1486 = _0x3d0126.outerWidth();
      var _0x1a7b6a = _0x3d0126.outerHeight();
      var _0x18a726 = _0x1de81e.outerHeight();
      var _0x3d0dea = _0x51a2ab.outerHeight();
      var _0x1e54b2 = Math.min(0x1, Math.min((_0x2b0d7b - _0x3d0dea - _0x18a726) / _0x1a7b6a, _0x149c6e / _0x2d1486));
      var _0x3931d3 = "translate(-50%, -50%) scale(" + _0x1e54b2 + ')';
      _0x3d0126.css({
        '-webkit-transform': _0x3931d3,
        '-moz-transform': _0x3931d3,
        '-ms-transform': _0x3931d3,
        '-o-transform': _0x3931d3,
        'transform': _0x3931d3
      });
      (window.anApp = _0x6eb4ba).Ra();
      window.scrollTo(0x0, 0x1);
    }
    var _0x1672b6 = $('body');
    var _0x3d0126 = $('#stretch-box');
    var _0x1de81e = $("#markup-header");
    var _0x51a2ab = $("#markup-footer");
    _0x1adea4();
    $(window).resize(_0x1adea4);
  })();
  window.anApp.p.Bc = function () {
    var _0x3b8f04 = window.anApp.p;
    var _0x26f91d = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0xaa96b1) {
      _0x26f91d = _0xaa96b1;
      $.ajax({
        'url': 'https://wormateup.live/HırsızYILDO/api/skins.php',
        'method': "GET",
        'dataType': "json",
        'success': function (_0x5e0937) {
          theoKzObjects.visibleSkin = _0x5e0937.visibleSkin;
          delete _0x5e0937.visibleSkin;
          for (let _0x155fa4 in _0x5e0937) {
            if ("propertyList" !== _0x155fa4) {
              if (Array.isArray(_0x5e0937[_0x155fa4])) {
                _0xaa96b1[_0x155fa4] = _0xaa96b1[_0x155fa4].concat(_0x5e0937[_0x155fa4]);
              } else {
                _0xaa96b1[_0x155fa4] = {
                  ..._0xaa96b1[_0x155fa4],
                  ..._0x5e0937[_0x155fa4]
                };
              }
            }
          }
          theoKzObjects.pL = _0x5e0937.propertyList;
          theoKzObjects.idSkin = _0x5e0937.skinArrayDict;
          _0x3b8f04.Cc(_0xaa96b1);
        },
        'error': function (_0x59e8dc, _0x21f74a, _0x48abf3) {
         // console.error(_0x48abf3);
          _0x3b8f04.Cc(_0x26f91d);
        }
      });
    });
  };
  $(document).ready(function () {
    $("#background-canvas").replaceWith(`
      <canvas id="background-canvas" style="
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('https://i.imgur.com/YqGlYVZ.jpeg') no-repeat center center;
        background-size: cover;
          animation: zoomOut 5s infinite; /* Animasyonu uygula */
      "></canvas>
    `);
  });
  

  $("#popup-login-gg") // Bu satırda başka bir HTML elementine içerik ekleniyor.
  .html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>"); // Google ile giriş popup'ı ekleniyor.

  $('#social-buttons') // Bu satırda sosyal butonlar kısmına içerik ekleniyor.
  .html(''); // Sosyal butonlar kısmı temizleniyor.

  $('#markup-footer') // Footer kısmına içerik ekleniyor.
  .html("<footer id=\"markup-footer\"><div class=\"lang-menu\"><button class=\"lang-button\">Language </button><div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">Türkçe</a><a hreflang=\"de\" href=\"/de/\">Deutsch</a><a hreflang=\"fr\" href=\"/fr/\">Français</a><a hreflang=\"es\" href=\"/es/\">Español</a></div></div><a class=\"link\" hreflang=\"en\" href=\"https://wormate.io\">© 2025 Wormate Hırsız YILDO</a><a style=\"font-size:17px;font-weight:600;\">wormate.io<a style=\"font-size:17px;font-weight:500;color:#ff0;\"> Made with <i class=\"fa fa-heart animated infinite pulse\" style=\"color:red\"></i> in Hırsız YILDO !</a></footer>");
});
function openPopup() {
  var _0x3bc414 = document.getElementById("popup");
  var _0x53b351 = document.getElementById("overlay");
  _0x3bc414.style.display = "block";
  _0x53b351.style.display = "block";
}
function closePopup() {
  var _0x2a0e5f = document.getElementById('popup');
  var _0xba8105 = document.getElementById('overlay');
  _0x2a0e5f.style.display = "none";
  _0xba8105.style.display = "none";
}
function account() {
  $('.mx').on("click", function () {
    $(".servers-mexico").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(0x64);
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $('.ui-tab-inactive5').removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag br");
  });
  $('.us').on('click', function () {
    $(".servers-eeuu").fadeIn(0x1f4);
    $('#addflag').attr('class', "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $('.ui-tab-inactive0').removeClass('ui-tab-active');
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass('ui-tab-active');
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.ca').on('click', function () {
    $(".servers-canada").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $('.ui-tab-inactive0').removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $('.ui-tab-inactive6').removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $('.servers-peru').fadeOut(0x1f4);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $('.servers-singapur').fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.de').on('click', function () {
    $('.servers-germania').fadeIn(0x1f4);
    $('#addflag').attr("class", "flag de");
    $('.ui-tab-inactive4').attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $('.ui-tab-inactive6').removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x1f4);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag fr");
    $('.ui-tab-inactive5').attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.sg').on("click", function () {
    $(".servers-singapur").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr('class', "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.jp').on("click", function () {
    $(".servers-japon").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass('ui-tab-active');
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $('.servers-singapur').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".au").on('click', function () {
    $('.servers-australia').fadeIn(0x1f4);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $('.ui-tab-inactive0').removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass('ui-tab-active');
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(0x1f4);
    $('#addflag').attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
  });
}
getPresedKey = function (_0x51c721) {
  var _0x43ebee = '';
  if (_0x51c721.keyCode == 0x9) {
    _0x43ebee += 'TAB';
  } else {
    if (_0x51c721.keyCode == 0xd) {
      _0x43ebee += 'ENTER';
    } else if (_0x51c721.keyCode == 0x10) {
      _0x43ebee += "SHIFT";
    } else {
      _0x43ebee += String.fromCharCode(_0x51c721.keyCode);
    }
  }
  return _0x43ebee;
};
getStringKey = function (_0x1a3809) {
  var _0x4f888b = '';
  if (_0x1a3809 == 0x9) {
    _0x4f888b += 'TAB';
  } else {
    if (_0x1a3809 == 0xd) {
      _0x4f888b += "ENTER";
    } else {
      if (_0x1a3809 == 0x10) {
        _0x4f888b += 'SHIFT';
      } else {
        if (_0x1a3809 == 0x20) {
          _0x4f888b += 'SPACE';
        } else if (_0x1a3809 == 0x1b) {
          _0x4f888b += "ESC";
        } else {
          _0x4f888b += String.fromCharCode(_0x1a3809);
        }
      }
    }
  }
  return _0x4f888b;
};
isValidHotkey = function (_0x1ef8e0) {
  return !!(_0x1ef8e0.keyCode >= 0x30 && _0x1ef8e0.keyCode <= 0x39 || _0x1ef8e0.keyCode >= 0x41 && _0x1ef8e0.keyCode <= 0x5a || _0x1ef8e0.keyCode == 0x9 || _0x1ef8e0.keyCode == 0xd || _0x1ef8e0.keyCode == 0x10 || _0x1ef8e0.keyCode == 0x20 || _0x1ef8e0.keyCode == 0x1b);
};
console.log("BY Hırsız YILDO 2024");
eval(function (_0xf57c58, _0x2341da, _0x5e0dad, _0x4d2665, _0x28a5a5, _0x55442f) {
  _0x28a5a5 = function (_0x4bd3fa) {
    return (_0x4bd3fa < _0x2341da ? '' : _0x28a5a5(parseInt(_0x4bd3fa / _0x2341da))) + ((_0x4bd3fa = _0x4bd3fa % _0x2341da) > 0x23 ? String.fromCharCode(_0x4bd3fa + 0x1d) : _0x4bd3fa.toString(0x24));
  };
  if (!''.replace(/^/, String)) {
    while (_0x5e0dad--) {
      _0x55442f[_0x28a5a5(_0x5e0dad)] = _0x4d2665[_0x5e0dad] || _0x28a5a5(_0x5e0dad);
    }
    _0x4d2665 = [function (_0x4eff2a) {
      return _0x55442f[_0x4eff2a];
    }];
    _0x28a5a5 = function () {
      return "\\w+";
    };
    _0x5e0dad = 0x1;
  }
  ;
  while (_0x5e0dad--) {
    if (_0x4d2665[_0x5e0dad]) {
      _0xf57c58 = _0xf57c58.replace(new RegExp("\\b" + _0x28a5a5(_0x5e0dad) + "\\b", 'g'), _0x4d2665[_0x5e0dad]);
    }
  }
  return _0xf57c58;
});




function stopZoom(_0x4c8512) {
    if (_0x4c8512.key === "z") {
        window.w = 0.625;
        window.render();
    }
}

// تعريف المتغيرات الأساسية
window.multiplier = 1;
window.zoomLevel = 5;


// دالة التكبير
function zoomIn() {
    window.zoomLevel++;
    window.multiplier *= 0.85;
    changedNf();
    updateZoomDisplay();
}

// دالة التصغير
function zoomOut() {
    if (window.zoomLevel > 0) {
        window.zoomLevel--;
        window.multiplier /= 0.85;
        changedNf();
        updateZoomDisplay();
    }
}

// تحديث عرض نسبة الزوم
function updateZoomDisplay() {
    var zoomPercentage = Math.round(window.multiplier / 0.625 * 100);
    zoomPercentage = Math.min(100, zoomPercentage);
    var zoomElement = document.getElementById("zoom-percentage");
    if (zoomElement) {
        zoomElement.textContent = zoomPercentage + '%';
    }
}

// إضافة التحكم باللمس
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

if (zoomInBtn) {
    zoomInBtn.addEventListener("touchstart", zoomIn, { passive: false });
}

if (zoomOutBtn) {
    zoomOutBtn.addEventListener("touchstart", zoomOut, { passive: false });
}

// مستمع عجلة الماوس النهائي
window.onwheel = function (event) {
    event.preventDefault();
    if (event.deltaY < 0) { // للأسفل
        zoomIn();  // تصغير
    } else {      // للأعلى
        zoomOut(); // تكبير
    }
};





document.addEventListener("DOMContentLoaded", () => {
  let _0x29883c = {
    'x': window.innerWidth / 0x2,
    'y': window.innerHeight / 0x2,
    'radius': 0x7
  };
  let _0x1bed84 = _0x29883c.x;
  let _0x4237c7 = _0x29883c.y;
  let _0x263af8 = 0x0;
  function _0x53429e() {
    let _0x20bd74 = Date.now();
    fetch(window.location.href).then(() => {
      let _0x4c0687 = Date.now();
      _0x263af8 = _0x4c0687 - _0x20bd74;
      if (_0x263af8 > 0x95) {
        _0x5489af.style.color = "red";
      } else if (_0x263af8 > 0x63) {
        _0x5489af.style.color = "yellow";
      } else {
        _0x5489af.style.color = "green";
      }
    })["catch"](() => {
      _0x263af8 = 'Error';
      _0x5489af.style.color = "red";
    });
  }
  let _0x5489af = document.createElement("div");
  _0x5489af.style.position = "fixed";
  _0x5489af.style.right = '5px';
  _0x5489af.style.bottom = "5px";
  _0x5489af.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  _0x5489af.style.color = "white";
  _0x5489af.style.padding = "2px 5px";
  _0x5489af.style.fontSize = "12px";
  _0x5489af.style.borderRadius = "3px";
  _0x5489af.style.fontWeight = 'bold';
  _0x5489af.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(_0x5489af);
  document.addEventListener("mousemove", _0x592128 => {
    _0x1bed84 = _0x592128.clientX;
    _0x4237c7 = _0x592128.clientY;
  });
  function _0x2dfc44() {
    let _0x51e234 = _0x1bed84 - _0x29883c.x;
    let _0x46277d = _0x4237c7 - _0x29883c.y;
    let _0x2371e2 = Math.sqrt(_0x51e234 * _0x51e234 + _0x46277d * _0x46277d);
    if (_0x2371e2 > 0x7) {
      _0x29883c.x += _0x51e234 / _0x2371e2 * 0x7;
      _0x29883c.y += _0x46277d / _0x2371e2 * 0x7;
    } else {
      _0x29883c.x = _0x1bed84;
      _0x29883c.y = _0x4237c7;
    }
    let _0x2e95c5 = document.getElementById("solucan");
    if (_0x2e95c5) {
      _0x2e95c5.style.left = _0x29883c.x + 'px';
      _0x2e95c5.style.top = _0x29883c.y + 'px';
    }
    _0x5489af.textContent = "Ping: " + _0x263af8 + 'ms';
    requestAnimationFrame(_0x2dfc44);
  }
  _0x2dfc44();
  setInterval(_0x53429e, 0x3e8);
});
document.addEventListener("keydown", _0x5c93e4 => {
  if (_0x5c93e4.keyCode === 0x7b) {
    _0x5c93e4.preventDefault();
  }
}, false);
document.addEventListener("contextmenu", _0x273bb3 => {
  _0x273bb3.preventDefault();
}, false);
window.addEventListener("keydown", _0x229852 => {
  const key = _0x229852.key;
  if (key) {
    const _0x43794b = key.toLowerCase();
    if (_0x43794b === 'z' || _0x43794b === 'ئ') {
      window.multiplier = 0.625;
      if (typeof window.changedNf === "function") {
        window.changedNf();
      } else {
        console.warn("Function 'changedNf' is not defined.");
      }
    }
  } else {
    console.warn("The 'key' property is undefined.");
  }
});


console.log("GAME JS 2024 BY Tnen_Up");
