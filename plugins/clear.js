let {MessageType, Presence, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Leon = require('../events');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('clear');
let td = Config['WORKTYPE'] == 'private' ? true : false;

var URL_DESC = 'Uploads image in imgbb and sends url.'
var NAME = 'Name'
var ID = 'ID'
var SIZE = 'Size'
var EXT = 'Extention'
if (Config.LANG == 'ML') URL_DESC = 'imgbb-ൽ ചിത്രം അപ്‌ലോഡ് ചെയ്യുകയും url അയയ്ക്കുകയും ചെയ്യുന്നു.', NAME = 'പേര്', ID = 'ഐഡി', SIZE = 'വലിപ്പം', EXT = 'വിപുലീകരണം'
if (Config.LANG == 'ID') URL_DESC = 'Unggah gambar di imgbb dan kirim url.', NAME = 'Nama', ID = 'ID', SIZE = 'Ukuran', EXT = 'Ekstensi'

Leon.addCommand({pattern: 'clear', fromMe: true, desc: Lang.CLR_DESC}, (async (message, match) => {

function _0x1aed(_0x4fad56,_0x2a1010){var _0x5b4a3c=_0x5b4a();return _0x1aed=function(_0x1aed28,_0xc6415f){_0x1aed28=_0x1aed28-0x91;var _0x49c08d=_0x5b4a3c[_0x1aed28];return _0x49c08d;},_0x1aed(_0x4fad56,_0x2a1010);}function _0x5b4a(){var _0x1547b8=['modifyChat','835770nmeHgo','704436UtIwwk','7039960wDUraf','1017936UynmOa','sendMessage','15UyFTea','1603007BESCGb','424989dKcQvk','jid','CLR_DONE','CLR_PROC','847746OUwFDy','client','data','text'];_0x5b4a=function(){return _0x1547b8;};return _0x5b4a();}var _0x3b6340=_0x1aed;(function(_0x42bbf4,_0x23871f){var _0x25a6b9=_0x1aed,_0x4697e1=_0x42bbf4();while(!![]){try{var _0x469abf=-parseInt(_0x25a6b9(0x9f))/0x1+parseInt(_0x25a6b9(0x98))/0x2+-parseInt(_0x25a6b9(0x99))/0x3+parseInt(_0x25a6b9(0x9b))/0x4+parseInt(_0x25a6b9(0x9d))/0x5*(-parseInt(_0x25a6b9(0x93))/0x6)+-parseInt(_0x25a6b9(0x9e))/0x7+parseInt(_0x25a6b9(0x9a))/0x8;if(_0x469abf===_0x23871f)break;else _0x4697e1['push'](_0x4697e1['shift']());}catch(_0x52003b){_0x4697e1['push'](_0x4697e1['shift']());}}}(_0x5b4a,0x3a849),await message['client'][_0x3b6340(0x9c)](message[_0x3b6340(0xa0)],Lang[_0x3b6340(0x92)],MessageType[_0x3b6340(0x96)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']}),await message[_0x3b6340(0x94)][_0x3b6340(0x97)](message[_0x3b6340(0xa0)],ChatModification['delete']),await message[_0x3b6340(0x94)]['sendMessage'](message[_0x3b6340(0xa0)],Lang[_0x3b6340(0x91)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3b6340(0x95)]}));
}));

Leon.addCommand({pattern: 'url ?(.*)', fromMe: td, desc: URL_DESC}, (async (message, match) => {

const _0x3f338c=_0x404b;(function(_0x319a44,_0x177197){const _0x2f5c53=_0x404b,_0x53975c=_0x319a44();while(!![]){try{const _0x590265=-parseInt(_0x2f5c53(0x1fd))/0x1*(-parseInt(_0x2f5c53(0x1f4))/0x2)+parseInt(_0x2f5c53(0x1f7))/0x3+-parseInt(_0x2f5c53(0x1fe))/0x4*(parseInt(_0x2f5c53(0x203))/0x5)+-parseInt(_0x2f5c53(0x1fc))/0x6+-parseInt(_0x2f5c53(0x206))/0x7+parseInt(_0x2f5c53(0x204))/0x8+parseInt(_0x2f5c53(0x20a))/0x9;if(_0x590265===_0x177197)break;else _0x53975c['push'](_0x53975c['shift']());}catch(_0x1abd31){_0x53975c['push'](_0x53975c['shift']());}}}(_0x5410,0x5aec6));if(message[_0x3f338c(0x202)]===![]||message[_0x3f338c(0x202)][_0x3f338c(0x207)]===![])return await message[_0x3f338c(0x1f8)](_0x3f338c(0x1fa));function _0x404b(_0x31b3de,_0x1b759f){const _0x5410a3=_0x5410();return _0x404b=function(_0x404b86,_0xe3b96b){_0x404b86=_0x404b86-0x1f4;let _0x3e78f8=_0x5410a3[_0x404b86];return _0x3e78f8;},_0x404b(_0x31b3de,_0x1b759f);}var location=await message[_0x3f338c(0x1f9)][_0x3f338c(0x1f5)]({'key':{'remoteJid':message[_0x3f338c(0x202)]['jid'],'id':message[_0x3f338c(0x202)]['id']},'message':message[_0x3f338c(0x202)]['data'][_0x3f338c(0x20c)]});let apikey=_0x3f338c(0x1f6),options;function _0x5410(){const _0x273e42=['quotedMessage','\x20Byte(s)*\x0a_➥\x20','2Zujtdc','downloadAndSaveMediaMessage','27352c6187642feef7f7b6f2f09a4df0','256275LBMyzw','sendReply','client','*You\x20must\x20reply\x20to\x20any\x20image!*','extension','1204842xjuHmE','267054dzjwPO','4JTXpBt','imgbb-uploader','size','IMGBBAPIKEY','reply_message','2461695TYxxge','1679944kICRnr','SERVER\x20TIMEOUT\x20-\x20IMGBB\x20(\x20TOXIC-DEVIL\x20)','139972CEhpdk','image','_\x20:\x20*','*\x0a_➥\x20','4707828HXLGXd','_➥\x20'];_0x5410=function(){return _0x273e42;};return _0x5410();}if(match[0x1]!=='')options={'apiKey':apikey,'imagePath':location,'name':match[0x1]};else{if(match[0x1]==='')options={'apiKey':Config[_0x3f338c(0x201)],'imagePath':location};}let uploadImage=require(_0x3f338c(0x1ff));try{await uploadImage(options)['then'](async _0x43786f=>{const _0x33364b=_0x3f338c;let _0x3d04aa=_0x33364b(0x20b)+NAME+_0x33364b(0x208)+_0x43786f['title']+_0x33364b(0x209)+ID+_0x33364b(0x208)+_0x43786f['id']+'*\x0a_➥\x20'+SIZE+'_\x20:\x20*'+_0x43786f[_0x33364b(0x200)]+_0x33364b(0x20d)+EXT+'_\x20:\x20*'+_0x43786f[_0x33364b(0x207)][_0x33364b(0x1fb)]+'*\x0a_➥\x20URL_\x20:\x20'+_0x43786f['url'];await message[_0x33364b(0x1f8)](_0x3d04aa);});}catch(_0x68cd70){throw _0x3f338c(0x205);}
}));
