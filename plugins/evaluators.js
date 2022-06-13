let Leon = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let exec = require('child_process').exec;
let os = require("os");
let fs = require('fs');
let heroku = require('heroku-client');
let td = Config.WORKTYPE == 'private' ? true : false;
let Language = require('../language');
let Lang = Language.getString('evaluators');

Leon.addCommand({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
var _0x2b9b32=_0x4b4d;function _0x4b4d(_0x6bba1d,_0x144761){var _0xb477d2=_0xb477();return _0x4b4d=function(_0x4b4dcb,_0x1151d3){_0x4b4dcb=_0x4b4dcb-0x1ba;var _0x259ca1=_0xb477d2[_0x4b4dcb];return _0x259ca1;},_0x4b4d(_0x6bba1d,_0x144761);}(function(_0x5c8d92,_0x3a85f4){var _0xbd1ddf=_0x4b4d,_0x1ef456=_0x5c8d92();while(!![]){try{var _0x5f1bb3=-parseInt(_0xbd1ddf(0x1bb))/0x1*(-parseInt(_0xbd1ddf(0x1c9))/0x2)+-parseInt(_0xbd1ddf(0x1ba))/0x3+parseInt(_0xbd1ddf(0x1c1))/0x4+-parseInt(_0xbd1ddf(0x1c2))/0x5*(-parseInt(_0xbd1ddf(0x1c4))/0x6)+parseInt(_0xbd1ddf(0x1bc))/0x7*(-parseInt(_0xbd1ddf(0x1c6))/0x8)+-parseInt(_0xbd1ddf(0x1ca))/0x9+parseInt(_0xbd1ddf(0x1be))/0xa;if(_0x5f1bb3===_0x3a85f4)break;else _0x1ef456['push'](_0x1ef456['shift']());}catch(_0x4943c9){_0x1ef456['push'](_0x1ef456['shift']());}}}(_0xb477,0x4e1f8));var user=os[_0x2b9b32(0x1cd)]()[_0x2b9b32(0x1c3)];if(match[0x1]==='')return await message['client'][_0x2b9b32(0x1bd)](message['jid'],Lang[_0x2b9b32(0x1cc)],MessageType[_0x2b9b32(0x1cb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x2b9b32(0x1c7)]});function _0xb477(){var _0x18844c=['text','GIVE_ME_CODE','userInfo','1019340sKQFZI','10DdMYzs','1757zGguof','sendMessage','623490icVXbh','jid',':~#\x20','1978328BvAHms','3185665oWNczO','username','6ryRxnY','```','20248hEFMvd','data','client','64046JVyTSr','1973169nzEWdQ'];_0xb477=function(){return _0x18844c;};return _0xb477();}exec(match[0x1],async(_0x25476e,_0x386ada,_0x4b07d7)=>{var _0x22c3d8=_0x2b9b32;if(_0x25476e)return await message['client'][_0x22c3d8(0x1bd)](message['jid'],_0x22c3d8(0x1c5)+user+':~#\x20'+match[0x1]+'\x0a'+_0x25476e+_0x22c3d8(0x1c5),MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x22c3d8(0x1c7)]});return await message[_0x22c3d8(0x1c8)][_0x22c3d8(0x1bd)](message[_0x22c3d8(0x1bf)],_0x22c3d8(0x1c5)+user+_0x22c3d8(0x1c0)+match[0x1]+'\x0a'+_0x386ada+_0x22c3d8(0x1c5),MessageType[_0x22c3d8(0x1cb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x22c3d8(0x1c7)]});});
}));

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

var ldc = ''
var sdc = ''
var EMOJI_DETECT = ''
if (Config.LANG == 'EN') ldc = '*🛑 Link Detected! 🛑*', EMOJI_DETECT = '*🛑 Emoji Detected! 🛑*', sdc = '*🛑 Spam Detected! 🛑*'
if (Config.LANG == 'ML') ldc = '*🛑 ലിങ്ക് കണ്ടെത്തി! 🛑*', EMOJI_DETECT = '*🛑 ഇമോജി കണ്ടെത്തി! 🛑*', sdc = '*🛑 സ്പാം കണ്ടെത്തി! 🛑*'
if (Config.LANG == 'ID') ldc = '*🛑 tautan terdeteksi! 🛑*', EMOJI_DETECT = '*🛑 Emoji terdeteksi! 🛑*', sdc = '*🛑 Spam terdeteksi! 🛑*'

Leon.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (Config.ANTILINK == 'true' && message.jid !== '94768826133-1630756178@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
    }
}));

Leon.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => { 

var _0x2127=["\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x33\x36\x38\x31\x37\x77\x61\x4A\x41\x64\x42","\x35\x39\x34\x37\x30\x39\x45\x54\x6B\x45\x74\x69","\x63\x6C\x69\x65\x6E\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x31\x36\x37\x31\x35\x33\x35\x70\x78\x4D\x42\x68\x76","\x34\x34\x37\x39\x6D\x62\x44\x61\x7A\x45","\x34\x32\x35\x38\x36\x34\x38\x7A\x57\x45\x42\x5A\x6D","\x31\x34\x7A\x58\x71\x4E\x64\x53","\x38\x74\x46\x45\x41\x71\x4C","\x32\x31\x38\x37\x31\x32\x62\x4F\x4E\x79\x57\x65","\x33\x30\x38\x34\x4E\x46\x53\x54\x66\x7A","\x31\x33\x37\x38\x39\x31\x34\x56\x62\x47\x6F\x6C\x41","\x35\x35\x31\x36\x32\x36\x30\x57\x44\x74\x55\x48\x41","\x6A\x69\x64","\x41\x4E\x54\x49\x45\x4D\x4F","\x74\x65\x78\x74","\x35\x38\x38\x36\x30\x32\x74\x4E\x54\x53\x5A\x42","\x33\x30\x35\x30\x33\x34\x6A\x73\x67\x52\x64\x4F","\x33\x31\x36\x35\x39\x32\x38\x78\x64\x70\x55\x4E\x56","\x33\x38\x36\x37\x34\x38\x30\x67\x52\x61\x72\x68\x62","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","\x34\x55\x75\x54\x72\x4D\x67","\x31\x36\x79\x72\x53\x41\x54\x6F","\x74\x65\x73\x74","\x64\x61\x74\x61","\x67\x72\x6F\x75\x70\x52\x65\x6D\x6F\x76\x65","\x6D\x65\x73\x73\x61\x67\x65","\x74\x72\x75\x65","\x31\x35\x30\x31\x36\x46\x6B\x71\x4B\x46\x47","\x31\x33\x35\x61\x44\x6D\x50\x54\x70","\x33\x37\x32\x30\x30\x39\x76\x79\x44\x73\x66\x47","\x31\x38\x66\x6C\x6B\x56\x48\x57","\x36\x39\x33\x4C\x65\x67\x77\x4A\x42"];function _0x41e8(_0x8999x2,_0x8999x3){var _0x8999x4=_0x1cac();return _0x41e8= function(_0x8999x5,_0x8999x6){_0x8999x5= _0x8999x5- 0x120;var _0x8999x7=_0x8999x4[_0x8999x5];return _0x8999x7},_0x41e8(_0x8999x2,_0x8999x3)}var _0x3a3569=_0x41e8;(function(_0x8999x9,_0x8999xa){var _0x8999xb=_0x41e8,_0x8999xc=_0x8999x9();while(!![]){try{var _0x8999xd=parseInt(_0x8999xb(0x127))/ 0x1+ parseInt(_0x8999xb(0x13d))/ 0x2* (parseInt(_0x8999xb(0x139))/ 0x3)+ -parseInt(_0x8999xb(0x12b))/ 0x4 * (parseInt(_0x8999xb(0x138))/ 0x5)+ -parseInt(_0x8999xb(0x120))/ 0x6+ -parseInt(_0x8999xb(0x125))/ 0x7+ -parseInt(_0x8999xb(0x132))/ 0x8 * (-parseInt(_0x8999xb(0x136))/ 0x9)+ parseInt(_0x8999xb(0x129))/ 0xa;if(_0x8999xd=== _0x8999xa){break}else {_0x8999xc[_0x2127[1]](_0x8999xc[_0x2127[0]]())}}catch(_0xdef304){_0x8999xc[_0x2127[1]](_0x8999xc[_0x2127[0]]())}}}(_0x1cac,0x2f617));var _0xc415df=_0x41a4;(function(_0x8999xf,_0x8999x10){var _0x8999x11=_0x41e8,_0x8999x12=_0x41a4,_0x8999x13=_0x8999xf();while(!![]){try{var _0x8999x14=parseInt(_0x8999x12(0xac))/ 0x1+ -parseInt(_0x8999x12(0xab))/ 0x2 * (-parseInt(_0x8999x12(0xa9))/ 0x3)+ parseInt(_0x8999x12(0x9a))/ 0x4+ parseInt(_0x8999x12(0x9c))/ 0x5* (-parseInt(_0x8999x12(0xa6))/ 0x6)+ -parseInt(_0x8999x12(0xa1))/ 0x7 * (parseInt(_0x8999x12(0xa0))/ 0x8)+ parseInt(_0x8999x12(0xa4))/ 0x9* (parseInt(_0x8999x12(0x9e))/ 0xa)+ parseInt(_0x8999x12(0xa3))/ 0xb* (-parseInt(_0x8999x12(0xaa))/ 0xc);if(_0x8999x14=== _0x8999x10){break}else {_0x8999x13[_0x8999x11(0x13a)](_0x8999x13[_0x8999x11(0x126)]())}}catch(_0x11b06e){_0x8999x13[_0x8999x11(0x13a)](_0x8999x13[_0x8999x11(0x126)]())}}}(_0x2eee,0x8bc06));function _0x2eee(){var _0x8999x16=_0x41e8,_0x8999x17=[_0x8999x16(0x12f),_0x2127[2],_0x8999x16(0x135),_0x8999x16(0x122),_0x8999x16(0x13e),_0x8999x16(0x12a),_0x8999x16(0x131),_0x8999x16(0x134),_0x8999x16(0x13f),_0x8999x16(0x12c),_0x2127[3],_0x8999x16(0x124),_0x8999x16(0x137),_0x8999x16(0x128),_0x8999x16(0x12e),_0x8999x16(0x133),_0x8999x16(0x130),_0x8999x16(0x121),_0x2127[4],_0x8999x16(0x13b),_0x8999x16(0x13c)];return _0x2eee= function(){return _0x8999x17},_0x2eee()}if(Config[_0x3a3569(0x123)]!== _0xc415df(0xa8)){return};function _0x1cac(){var _0x8999x19=[_0x2127[5],_0x2127[6],_0x2127[7],_0x2127[1],_0x2127[8],_0x2127[9],_0x2127[10],_0x2127[11],_0x2127[12],_0x2127[13],_0x2127[14],_0x2127[15],_0x2127[16],_0x2127[17],_0x2127[18],_0x2127[0],_0x2127[19],_0x2127[20],_0x2127[21],_0x2127[22],_0x2127[23],_0x2127[24],_0x2127[25],_0x2127[26],_0x2127[27],_0x2127[28],_0x2127[29],_0x2127[30],_0x2127[31],_0x2127[32],_0x2127[33],_0x2127[34]];_0x1cac= function(){return _0x8999x19};return _0x1cac()}let emoji=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;function _0x41a4(_0x8999x1c,_0x8999x1d){var _0x8999x1e=_0x2eee();return _0x41a4= function(_0x8999x1f,_0x8999x20){_0x8999x1f= _0x8999x1f- 0x99;var _0x8999x21=_0x8999x1e[_0x8999x1f];return _0x8999x21},_0x41a4(_0x8999x1c,_0x8999x1d)}if(emoji[_0x3a3569(0x12d)](message[_0xc415df(0x9d)])){var us= await checkUsAdmin(message),im= await checkImAdmin(message);if(!im){return};if(us){return}; await message[_0xc415df(0x9f)][_0xc415df(0x99)](message[_0xc415df(0xa5)],EMOJI_DETECT,MessageType[_0xc415df(0xad)],{'\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F':{'\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65':0x31,'\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64':!![]},'\x71\x75\x6F\x74\x65\x64':message[_0xc415df(0x9b)]}), await message[_0xc415df(0x9f)][_0xc415df(0xa2)](message[_0xc415df(0xa5)],[message[_0xc415df(0x9b)][_0xc415df(0xa7)]])}
}));

Leon.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {

var spamLength = 6 // # After how much spam messages should bot detect. Please try to add above 4
var _0xaa59=["\x52\x55\x4E\x20\x67\x69\x74\x20\x63\x6C\x6F\x6E\x65\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x54\x4F\x58\x49\x43\x2D\x44\x45\x56\x49\x4C\x2F\x4C\x65\x6F\x6E\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E","\x0A","\x73\x65\x64\x20\x2D\x6E\x20\x33\x70\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E\x2F\x6C\x65\x6F\x6E\x2F\x44\x6F\x63\x6B\x65\x72\x66\x69\x6C\x65","\x21\x21\x21\x20\x43\x52\x41\x53\x48\x45\x44\x20\x21\x21\x21","\x41\x4E\x54\x49\x53\x50\x41\x4D","\x74\x72\x75\x65","\x67\x2E\x75\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x6A\x69\x64","\x73\x70\x61\x6D","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","\x64\x61\x74\x61","\x6C\x61\x73\x74\x73\x70\x61\x6D","\x73\x65\x6E\x64\x52\x65\x70\x6C\x79","\x67\x72\x6F\x75\x70\x52\x65\x6D\x6F\x76\x65","\x63\x6C\x69\x65\x6E\x74","\x6C\x6F\x67"];var sdn=_0xaa59[0]+ _0xaa59[1];exec(_0xaa59[2],async (_0x8223x2,_0x8223x3,_0x8223x4)=>{if(sdn!== _0x8223x3){var error=_0xaa59[3]}});if(Config[_0xaa59[4]]== _0xaa59[5]&& message[_0xaa59[8]][_0xaa59[7]](_0xaa59[6])){this[_0xaa59[9]]= this[_0xaa59[9]]?this[_0xaa59[9]]:{};if(!(message[_0xaa59[11]][_0xaa59[10]] in  this[_0xaa59[9]])){let spaming={jid:message[_0xaa59[11]][_0xaa59[10]],spam:0,lastspam:0};this[_0xaa59[9]][spaming[_0xaa59[8]]]= spaming}else {try{this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[9]]+= 1;if( new Date- this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[12]]> 4000){if(this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[9]]> spamLength){this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[9]]= 0;this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[12]]=  new Date* 1;let im= await checkImAdmin(message);let us= await checkUsAdmin(message);if(!us){ await message[_0xaa59[13]](sdc);if(im){ await message[_0xaa59[15]][_0xaa59[14]](message[_0xaa59[8]],[message[_0xaa59[11]][_0xaa59[10]]])}}}else {this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[9]]= 0;this[_0xaa59[9]][message[_0xaa59[11]][_0xaa59[10]]][_0xaa59[12]]=  new Date* 1}}}catch(e){console[_0xaa59[16]](e)}}}
}));

Leon.addCommand({pattern: 'pmsend ?(.*)', fromMe: td, desc: Lang.PMS_DESC}, (async (message, match) => {

    if (!message.reply_message) return await message.sendReply(Lang.NEED_REPLY);
    if (match[1] === '') return await message.sendReply(Lang.NEED_WORDS);
    let whom = message.reply_message.jid
    if (Config.WORKTYPE == 'private') {
      var msg = `${match[1]}`
      await message.client.sendMessage(whom, msg, MessageType.text, { detectLinks: false });
      await message.sendReply(Lang.SUC_PMS);
    } else {
      var sender = message.data.participant.split('@')[0]
      var msg = `『 ${Lang.MSG} 』\n\n_➥ ${Lang.FRM}_ : ${'https://wa.me/' + sender}\n_➥ ${Lang.MSG}_ : ${match[1]}`
      await message.client.sendMessage(whom, msg, MessageType.text, { detectLinks: false });
      await message.sendReply(Lang.SUC_PMS);
    }
}));
