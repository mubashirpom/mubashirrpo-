let Leon = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let Config = require('../config');
let axios = require('axios');
let request = require('request');
let got = require("got");
let QRReader = require('qrcode-reader');
let jimp = require('jimp');
let Language = require('../language');
let Lang = Language.getString('ttp');

var MORSE = 'Encodes or decodes the replied message with alphabets & symbols.'
var NEED = "*You must enter 'encode' or 'decode'.*"
var INV = "*❌️ Invalid Argument! Please enter 'encode' or 'decode' along with the command!*"
var NR = '*You must reply to any message!*'
if (Config.LANG == 'ML') NEED = "*നിങ്ങൾ 'encode' അല്ലെങ്കിൽ 'decode' നൽകണം!*", INV = "*❌️ അസാധുവായ വാദം! കമാൻഡിനൊപ്പം ദയവായി 'encode' അല്ലെങ്കിൽ 'decode' നൽകുക!*", NR = "*നിങ്ങൾ ഒരു സന്ദേശത്തിന് മറുപടി ആയി നൽകണം!*", MORSE = 'മറുപടി നൽകിയ സന്ദേശം അക്ഷരങ്ങളും ചിഹ്നങ്ങളും ഉപയോഗിച്ച് എൻകോഡ് ചെയ്യുകയോ ഡീകോഡ് ചെയ്യുകയോ ചെയ്യുന്നു.'//, RM = 'നൽകിയ 2 വാക്കുകൾക്കിടയിൽ readmore ചേർക്കുന്നു.'
if (Config.LANG == 'ID') NEED = "*Anda harus memasukkan 'encode' atau 'decode'.*", INV = "*❌️ Argumen Tidak Valid! Silakan masukkan 'encode' atau 'decode' bersama dengan perintah!*", NR = '*Anda harus membalas pesan apapun!*', MORSE = 'Mengenkode atau mendekode pesan yang dibalas dengan huruf & simbol.'//, RM = 'Tambahkan lebih banyak bacaan di antara 2 kata yang diberikan.'

let enc = { "a": "Z", "b": "Y", "c": "X", "d": "W", "e": "V", "f": "U", "g": "T", "h": "S", "i": "R", "j": "Q", "k": "P", "l": "O", "m": "N", "n": "M", "o": "L", "p": "K", "q": "J", "r": "I", "s": "H", "t": "G", "u": "F", "v": "E", "w": "D", "x": "C", "y": "B", "z": "A", "A": "z", "B": "y", "C": "x", "D": "w", "E": "v", "F": "u", "G": "t", "H": "s", "I": "r", "J": "q", "K": "p", "L": "o", "M": "n", "N": "m", "O": "l", "P": "k", "Q": "j", "R": "i", "S": "h", "T": "g", "U": "f", "V": "e", "W": "d", "X": "c", "Y": "b", "Z": "a", "0": "ø", "1": "9", "2": "8", "3": "7", "4": "6", "5": "=", "6": "4", "7": "3", "8": "2", "9": "1", "?": "¿", "%": "Œ", "!": "¡", ".": "*", ",": "+", "~": "?", " ": "&" }
let dec = { "Z": "a", "Y": "b", "X": "c", "W": "d", "V": "e", "U": "f", "T": "g", "S": "h", "R": "i", "Q": "j", "P": "k", "O": "l", "N": "m", "M": "n", "L": "o", "K": "p", "J": "q", "I": "r", "H": "s", "G": "t", "F": "u", "E": "v", "D": "w", "C": "x", "B": "y", "A": "z", "a": "Z", "b": "Y", "c": "X", "d": "W", "e": "V", "f": "U", "g": "T", "h": "S", "i": "R", "j": "Q", "k": "P", "l": "O", "m": "N", "n": "M", "o": "L", "p": "K", "q": "J", "r": "I", "s": "H", "t": "G", "u": "F", "v": "E", "w": "D", "x": "C", "y": "B", "z": "A", "ø": "0", "9": "1", "8": "2", "7": "3", "6": "4", "=": "5", "4": "6", "3": "7", "2": "8", "1": "9", "¿": "?", "Œ": "%", "¡": "!", "*": ".", "+": ",", "?": "~", "&": " " }

if (Config.WORKTYPE == 'private') {
    
    Leon.addCommand({pattern: 'qr ?(.*)', fromMe: true, desc: Lang.QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendReply(Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendImage(Buffer.from(webimage.data), '*Made By Leon*');

    }));

    Leon.addCommand({pattern: 'readqr ?(.*)', fromMe: true, desc: Lang.QR_DESC}, (async (message, match) => {

    var _0x502fb8=_0x36ac;(function(_0x54862e,_0x1271a0){var _0x27bec4=_0x36ac,_0x3f97d2=_0x54862e();while(!![]){try{var _0xae1eeb=parseInt(_0x27bec4(0x7d))/0x1+-parseInt(_0x27bec4(0x91))/0x2*(-parseInt(_0x27bec4(0x8c))/0x3)+parseInt(_0x27bec4(0x7e))/0x4+parseInt(_0x27bec4(0x85))/0x5*(parseInt(_0x27bec4(0x89))/0x6)+-parseInt(_0x27bec4(0x7f))/0x7*(parseInt(_0x27bec4(0x87))/0x8)+parseInt(_0x27bec4(0x8f))/0x9+parseInt(_0x27bec4(0x8d))/0xa*(-parseInt(_0x27bec4(0x95))/0xb);if(_0xae1eeb===_0x1271a0)break;else _0x3f97d2['push'](_0x3f97d2['shift']());}catch(_0x18bd16){_0x3f97d2['push'](_0x3f97d2['shift']());}}}(_0x153d,0xc793a));if(!message[_0x502fb8(0x93)]||!message[_0x502fb8(0x93)][_0x502fb8(0x83)])return await message[_0x502fb8(0x82)](Lang[_0x502fb8(0x84)]);var downloading=await message[_0x502fb8(0x82)](Lang[_0x502fb8(0x92)]),location=await message[_0x502fb8(0x88)][_0x502fb8(0x7c)]({'key':{'remoteJid':message['reply_message'][_0x502fb8(0x8b)],'id':message['reply_message']['id']},'message':message[_0x502fb8(0x93)]['data'][_0x502fb8(0x90)]});let img=await jimp[_0x502fb8(0x81)](location),qr=new QRReader();function _0x36ac(_0x4c4efa,_0x1ae434){var _0x153d8b=_0x153d();return _0x36ac=function(_0x36ac05,_0x308298){_0x36ac05=_0x36ac05-0x7c;var _0x35d574=_0x153d8b[_0x36ac05];return _0x35d574;},_0x36ac(_0x4c4efa,_0x1ae434);}qr[_0x502fb8(0x86)]=async(_0x1ba0ad,_0x1e79c2)=>{var _0x5cdc36=_0x502fb8;if(_0x1ba0ad)return await message['sendReply'](_0x1ba0ad);return await message[_0x5cdc36(0x82)](Lang[_0x5cdc36(0x94)]+_0x5cdc36(0x8e)+_0x1e79c2[_0x5cdc36(0x8a)]+'*');},qr[_0x502fb8(0x80)](img['bitmap']);function _0x153d(){var _0xeb1c91=['512886ywKrHk','downloadAndSaveMediaMessage','1417640eLVbCT','2954504pCqxWJ','2107LQDgjo','decode','read','sendReply','image','NEED_IMAGE','16655KAcQjV','callback','23088iUWNPu','client','2190KyCZFt','result','jid','465yGSxxg','730pfppbY','\x0a\x20*','12529026NwsyZQ','quotedMessage','4202tdYxWx','RQ_PROC','reply_message','SUC_READ'];_0x153d=function(){return _0xeb1c91;};return _0x153d();}
    }));

    Leon.addCommand({pattern: 'morse ?(.*)', fromMe: true, desc: MORSE}, (async (message, match) => {

    const _0xc4e16e=_0x380a;(function(_0x594247,_0x29a482){const _0xdfc5f1=_0x380a,_0xcfb24b=_0x594247();while(!![]){try{const _0x15d843=-parseInt(_0xdfc5f1(0xa5))/0x1*(parseInt(_0xdfc5f1(0xa1))/0x2)+-parseInt(_0xdfc5f1(0xa4))/0x3+-parseInt(_0xdfc5f1(0xa2))/0x4+parseInt(_0xdfc5f1(0xaa))/0x5*(-parseInt(_0xdfc5f1(0xae))/0x6)+-parseInt(_0xdfc5f1(0xb0))/0x7*(parseInt(_0xdfc5f1(0xab))/0x8)+-parseInt(_0xdfc5f1(0x9f))/0x9*(parseInt(_0xdfc5f1(0xa0))/0xa)+-parseInt(_0xdfc5f1(0xa8))/0xb*(-parseInt(_0xdfc5f1(0xa6))/0xc);if(_0x15d843===_0x29a482)break;else _0xcfb24b['push'](_0xcfb24b['shift']());}catch(_0x1c9ed8){_0xcfb24b['push'](_0xcfb24b['shift']());}}}(_0x58a7,0x97f4a));if(match[0x1]==='')return await message[_0xc4e16e(0xad)](NEED);match[0x1]=match[0x1]['toLowerCase']();if(match[0x1]!=='encode'&&match[0x1]!==_0xc4e16e(0xaf))return await message[_0xc4e16e(0xad)](INV);if(!message['reply_message']||!message[_0xc4e16e(0x9e)]['text'])return await message[_0xc4e16e(0xad)](NR);function _0x380a(_0x53a942,_0x5f03aa){const _0x58a75d=_0x58a7();return _0x380a=function(_0x380af7,_0x2a8688){_0x380af7=_0x380af7-0x9e;let _0x2fec62=_0x58a75d[_0x380af7];return _0x2fec62;},_0x380a(_0x53a942,_0x5f03aa);}let text=message[_0xc4e16e(0x9e)][_0xc4e16e(0xa3)];match[0x1]==='encode'?(text=Array[_0xc4e16e(0xa9)](text)[_0xc4e16e(0xa7)](_0x2015b7=>enc[_0x2015b7]??_0x2015b7)[_0xc4e16e(0xac)](''),await message[_0xc4e16e(0xad)](text)):(text=Array[_0xc4e16e(0xa9)](text)[_0xc4e16e(0xa7)](_0x165ade=>dec[_0x165ade]??_0x165ade)[_0xc4e16e(0xac)](''),await message['sendReply'](text));function _0x58a7(){const _0x301cf8=['6689172eiWKdU','reply_message','5423778ZkQmHw','10HgBmdi','977078HYAnMo','2064308EeqTuT','text','889785MzFXCC','2dbrqbD','13404usWbjh','map','46387azFGSJ','from','305XeaphG','8HViVqE','join','sendReply','72786fBwMAI','decode'];_0x58a7=function(){return _0x301cf8;};return _0x58a7();}
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    Leon.addCommand({pattern: 'qr ?(.*)', fromMe: false, desc: Lang.QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendReply(Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendImage(Buffer.from(webimage.data), '*Made By Leon*');

    }));

    Leon.addCommand({pattern: 'readqr ?(.*)', fromMe: false, desc: Lang.QR_DESC}, (async (message, match) => {

    var _0x502fb8=_0x36ac;(function(_0x54862e,_0x1271a0){var _0x27bec4=_0x36ac,_0x3f97d2=_0x54862e();while(!![]){try{var _0xae1eeb=parseInt(_0x27bec4(0x7d))/0x1+-parseInt(_0x27bec4(0x91))/0x2*(-parseInt(_0x27bec4(0x8c))/0x3)+parseInt(_0x27bec4(0x7e))/0x4+parseInt(_0x27bec4(0x85))/0x5*(parseInt(_0x27bec4(0x89))/0x6)+-parseInt(_0x27bec4(0x7f))/0x7*(parseInt(_0x27bec4(0x87))/0x8)+parseInt(_0x27bec4(0x8f))/0x9+parseInt(_0x27bec4(0x8d))/0xa*(-parseInt(_0x27bec4(0x95))/0xb);if(_0xae1eeb===_0x1271a0)break;else _0x3f97d2['push'](_0x3f97d2['shift']());}catch(_0x18bd16){_0x3f97d2['push'](_0x3f97d2['shift']());}}}(_0x153d,0xc793a));if(!message[_0x502fb8(0x93)]||!message[_0x502fb8(0x93)][_0x502fb8(0x83)])return await message[_0x502fb8(0x82)](Lang[_0x502fb8(0x84)]);var downloading=await message[_0x502fb8(0x82)](Lang[_0x502fb8(0x92)]),location=await message[_0x502fb8(0x88)][_0x502fb8(0x7c)]({'key':{'remoteJid':message['reply_message'][_0x502fb8(0x8b)],'id':message['reply_message']['id']},'message':message[_0x502fb8(0x93)]['data'][_0x502fb8(0x90)]});let img=await jimp[_0x502fb8(0x81)](location),qr=new QRReader();function _0x36ac(_0x4c4efa,_0x1ae434){var _0x153d8b=_0x153d();return _0x36ac=function(_0x36ac05,_0x308298){_0x36ac05=_0x36ac05-0x7c;var _0x35d574=_0x153d8b[_0x36ac05];return _0x35d574;},_0x36ac(_0x4c4efa,_0x1ae434);}qr[_0x502fb8(0x86)]=async(_0x1ba0ad,_0x1e79c2)=>{var _0x5cdc36=_0x502fb8;if(_0x1ba0ad)return await message['sendReply'](_0x1ba0ad);return await message[_0x5cdc36(0x82)](Lang[_0x5cdc36(0x94)]+_0x5cdc36(0x8e)+_0x1e79c2[_0x5cdc36(0x8a)]+'*');},qr[_0x502fb8(0x80)](img['bitmap']);function _0x153d(){var _0xeb1c91=['512886ywKrHk','downloadAndSaveMediaMessage','1417640eLVbCT','2954504pCqxWJ','2107LQDgjo','decode','read','sendReply','image','NEED_IMAGE','16655KAcQjV','callback','23088iUWNPu','client','2190KyCZFt','result','jid','465yGSxxg','730pfppbY','\x0a\x20*','12529026NwsyZQ','quotedMessage','4202tdYxWx','RQ_PROC','reply_message','SUC_READ'];_0x153d=function(){return _0xeb1c91;};return _0x153d();}
    }));

    Leon.addCommand({pattern: 'morse ?(.*)', fromMe: false, desc: MORSE}, (async (message, match) => {

    const _0xc4e16e=_0x380a;(function(_0x594247,_0x29a482){const _0xdfc5f1=_0x380a,_0xcfb24b=_0x594247();while(!![]){try{const _0x15d843=-parseInt(_0xdfc5f1(0xa5))/0x1*(parseInt(_0xdfc5f1(0xa1))/0x2)+-parseInt(_0xdfc5f1(0xa4))/0x3+-parseInt(_0xdfc5f1(0xa2))/0x4+parseInt(_0xdfc5f1(0xaa))/0x5*(-parseInt(_0xdfc5f1(0xae))/0x6)+-parseInt(_0xdfc5f1(0xb0))/0x7*(parseInt(_0xdfc5f1(0xab))/0x8)+-parseInt(_0xdfc5f1(0x9f))/0x9*(parseInt(_0xdfc5f1(0xa0))/0xa)+-parseInt(_0xdfc5f1(0xa8))/0xb*(-parseInt(_0xdfc5f1(0xa6))/0xc);if(_0x15d843===_0x29a482)break;else _0xcfb24b['push'](_0xcfb24b['shift']());}catch(_0x1c9ed8){_0xcfb24b['push'](_0xcfb24b['shift']());}}}(_0x58a7,0x97f4a));if(match[0x1]==='')return await message[_0xc4e16e(0xad)](NEED);match[0x1]=match[0x1]['toLowerCase']();if(match[0x1]!=='encode'&&match[0x1]!==_0xc4e16e(0xaf))return await message[_0xc4e16e(0xad)](INV);if(!message['reply_message']||!message[_0xc4e16e(0x9e)]['text'])return await message[_0xc4e16e(0xad)](NR);function _0x380a(_0x53a942,_0x5f03aa){const _0x58a75d=_0x58a7();return _0x380a=function(_0x380af7,_0x2a8688){_0x380af7=_0x380af7-0x9e;let _0x2fec62=_0x58a75d[_0x380af7];return _0x2fec62;},_0x380a(_0x53a942,_0x5f03aa);}let text=message[_0xc4e16e(0x9e)][_0xc4e16e(0xa3)];match[0x1]==='encode'?(text=Array[_0xc4e16e(0xa9)](text)[_0xc4e16e(0xa7)](_0x2015b7=>enc[_0x2015b7]??_0x2015b7)[_0xc4e16e(0xac)](''),await message[_0xc4e16e(0xad)](text)):(text=Array[_0xc4e16e(0xa9)](text)[_0xc4e16e(0xa7)](_0x165ade=>dec[_0x165ade]??_0x165ade)[_0xc4e16e(0xac)](''),await message['sendReply'](text));function _0x58a7(){const _0x301cf8=['6689172eiWKdU','reply_message','5423778ZkQmHw','10HgBmdi','977078HYAnMo','2064308EeqTuT','text','889785MzFXCC','2dbrqbD','13404usWbjh','map','46387azFGSJ','from','305XeaphG','8HViVqE','join','sendReply','72786fBwMAI','decode'];_0x58a7=function(){return _0x301cf8;};return _0x58a7();}
    }));
}
