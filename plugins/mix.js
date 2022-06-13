let Leon = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');

var MIX_DESC = "Mixes a pair of emoji to image."
var NEED_EMO = "*You must enter 2 emojis to mix each other!*\n```Example:```\n```.mix 😊😶```"
var NEED_TWO = "*Please enter 2 emojis to mix!*\n```Example:```\n```.mix 🙂🙃```"
var NOT_SUP = "*Emoji is not Supported! Try any other pair.*"
if (Config.LANG == 'ML') MIX_DESC = "ചിത്രമായി ഒരു ജോടി ഇമോജി മിക്സ് ചെയ്യുന്നു.", NEED_EMO = "*പരസ്പരം മിക്സ് ചെയ്യുന്നതിന് നിങ്ങൾ 2 ഇമോജികൾ നൽകണം!*\n```ഉദാഹരണം:```\n```.mix 😊😶```", NEED_TWO = "*മിക്‌സ് ചെയ്യാൻ 2 ഇമോജികൾ നൽകുക!*\n```ഉദാഹരണം:```\n```.mix 😉😇```", NOT_SUP = "*ഇമോജി പിന്തുണയ്ക്കുന്നില്ല! മറ്റേതെങ്കിലും ജോഡി പരീക്ഷിക്കുക.*"
if (Config.LANG == 'ID') MIX_DESC = "Mencampur sepasang emoji ke gambar.", NEED_EMO = "*Anda harus memasukkan 2 emoji untuk mencampur satu sama lain!*\n```Contoh:```\n```.mix 😊😶```", NEED_TWO = "*Masukkan 2 emoji untuk dicampur!*\n```Contoh:```\n```.mix 😉😇```", NOT_SUP = "*Emoji tidak Didukung! Coba pasangan lain.*"

Leon.addCommand({pattern: 'mix ?(.*)', fromMe: true, desc: MIX_DESC}, (async (message, match) => {

const _0x38048c=_0x9700;(function(_0x30b4da,_0x4fda2e){const _0xfee3ea=_0x9700,_0x5dc653=_0x30b4da();while(!![]){try{const _0x5e4050=-parseInt(_0xfee3ea(0x1d7))/0x1*(-parseInt(_0xfee3ea(0x1e3))/0x2)+-parseInt(_0xfee3ea(0x1e1))/0x3*(parseInt(_0xfee3ea(0x1ec))/0x4)+parseInt(_0xfee3ea(0x1da))/0x5+parseInt(_0xfee3ea(0x1e8))/0x6*(-parseInt(_0xfee3ea(0x1e0))/0x7)+parseInt(_0xfee3ea(0x1e5))/0x8*(parseInt(_0xfee3ea(0x1ea))/0x9)+parseInt(_0xfee3ea(0x1db))/0xa*(-parseInt(_0xfee3ea(0x1de))/0xb)+-parseInt(_0xfee3ea(0x1d5))/0xc;if(_0x5e4050===_0x4fda2e)break;else _0x5dc653['push'](_0x5dc653['shift']());}catch(_0x47e6a7){_0x5dc653['push'](_0x5dc653['shift']());}}}(_0x3634,0xda921));function _0x3634(){const _0x5e0fdb=['1933590BtDzzC','body','parse','33tfGAhk','result','707RFsFRp','3Giczth','API','2JpiNcC','Emoji','16fcNTVH','arraybuffer','any','87972MlYQaK','from','6505443ANuAdR','includes','4121828MrqSup','947736RnPXpm','sendReply','1314011KZejvW','message','data','6529870FuuEkm'];_0x3634=function(){return _0x5e0fdb;};return _0x3634();}function _0x9700(_0x42b34e,_0x4fcbca){const _0x363479=_0x3634();return _0x9700=function(_0x9700e,_0x10f43e){_0x9700e=_0x9700e-0x1d5;let _0x4647f8=_0x363479[_0x9700e];return _0x4647f8;},_0x9700(_0x42b34e,_0x4fcbca);}if(match[0x1]==='')return await message[_0x38048c(0x1d6)](NEED_EMO);let url=Config[_0x38048c(0x1e2)]+'/emoji-mix?emoji='+match[0x1],res=await got(url),json=JSON[_0x38048c(0x1dd)](res[_0x38048c(0x1dc)]);if(json[_0x38048c(0x1d8)][_0x38048c(0x1eb)](_0x38048c(0x1e7)))return await message[_0x38048c(0x1d6)](NEED_TWO);if(json[_0x38048c(0x1d8)][_0x38048c(0x1eb)](_0x38048c(0x1e4)))return await message[_0x38048c(0x1d6)](NOT_SUP);var img=await axios['get'](json[_0x38048c(0x1df)],{'responseType':_0x38048c(0x1e6)});return await message['sendImage'](Buffer[_0x38048c(0x1e9)](img[_0x38048c(0x1d9)]),'');
}));
