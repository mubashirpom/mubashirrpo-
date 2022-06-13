let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Leon = require('../events');
let fs = require('fs');
let Config = require('../config');
let got = require('got');
let td = Config.WORKTYPE == 'private' ? true : false

var LYRICS_DESC = "Searches for the music lyrics from name."
var NEED_LYRICS = "*You must enter a music name!*"
var SEARCHING_LYRICS = "```🔍 Searching for your lyrics...```"
var COULDNT_FIND = "*Cannot find any lyrics!*"
if (Config.LANG == 'ML') LYRICS_DESC = "തന്നിരിക്കുന്ന പാട്ടിന്റെ പേര് വെച്ച് പാട്ടിന്റെ വരികൾ തിരയുന്നു.", NEED_LYRICS = "നിങ്ങൾ ഏതെങ്കിലും പാട്ടിന്റെ പേര് നൽകണം.", SEARCHING_LYRICS = "```🔍 നിങ്ങളുടെ വരികൾക്കായി തിരയുന്നു...```", COULDNT_FIND = "*വരികൾ ഒന്നും കണ്ടെത്താനായില്ല!*"
if (Config.LANG == 'ID') LYRICS_DESC = "Mencari lirik musik dari nama.", NEED_LYRICS = "*Anda harus memasukkan nama musik!*", SEARCHING_LYRICS = "```🔍 Mencari lirik Anda...```", COULDNT_FIND = "*Tidak dapat menemukan lirik apapun!*"

Leon.addCommand({pattern: 'lyrics ?(.*)', fromMe: td, desc: LYRICS_DESC}, (async (message, match) => {

const _0x5847c8=_0x4558;(function(_0x2c7822,_0x4de9ee){const _0x556896=_0x4558,_0x389246=_0x2c7822();while(!![]){try{const _0x5db548=-parseInt(_0x556896(0x126))/0x1+parseInt(_0x556896(0x121))/0x2*(-parseInt(_0x556896(0x125))/0x3)+-parseInt(_0x556896(0x123))/0x4*(parseInt(_0x556896(0x129))/0x5)+-parseInt(_0x556896(0x124))/0x6+parseInt(_0x556896(0x127))/0x7*(-parseInt(_0x556896(0x120))/0x8)+parseInt(_0x556896(0x11c))/0x9+-parseInt(_0x556896(0x128))/0xa*(-parseInt(_0x556896(0x12a))/0xb);if(_0x5db548===_0x4de9ee)break;else _0x389246['push'](_0x389246['shift']());}catch(_0x427aff){_0x389246['push'](_0x389246['shift']());}}}(_0x1c92,0xb640d));function _0x1c92(){const _0x422c44=['10815dULqiT','27910NHgkJJ','15ErhzTB','16324TgMyPj','API','parse','/search/lyrics?query=','7711470WuQSrp','```','result','sendReply','2776BBcqvH','15518wLODhq','body','1488784mZiNsN','4570218dCtKeI','549elRilg','417862EjUyMK'];_0x1c92=function(){return _0x422c44;};return _0x1c92();}function _0x4558(_0x52837c,_0x523c0d){const _0x1c925f=_0x1c92();return _0x4558=function(_0x455847,_0x55dd36){_0x455847=_0x455847-0x11c;let _0x39b00c=_0x1c925f[_0x455847];return _0x39b00c;},_0x4558(_0x52837c,_0x523c0d);}if(match[0x1]==='')return await message[_0x5847c8(0x11f)](NEED_LYRICS);if(match[0x1]!==''){let url=Config[_0x5847c8(0x12b)]+_0x5847c8(0x12d)+match[0x1],res=await got(url),json=JSON[_0x5847c8(0x12c)](res[_0x5847c8(0x122)]);var msg;try{msg=json[_0x5847c8(0x11e)];}catch{msg=COULDNT_FIND;}if(msg!=='*Cannot\x20find\x20the\x20lyrics!*')await message[_0x5847c8(0x11f)](SEARCHING_LYRICS),await new Promise(_0x4ac869=>setTimeout(_0x4ac869,0xbb8)),await message['sendReply']('```'+msg+_0x5847c8(0x11d));else return await message['sendReply'](msg);}
}));
