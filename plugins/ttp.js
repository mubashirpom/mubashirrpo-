let Leon = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ttp');

var NEED_EMO = "*You must enter an emoji and type by splitting with / symbol!*"
var UNSUP = "*❌️ Entered emoji is not supported!*"
var INVALID_CHAR = "*❌️ Invalid Character! You must enter an emoji along with the command.*"
var TYPE_INVALID = "*❌️ Entered type is invalid! Please enter a valid type.*\n\n```Types:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter*\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"
var NAM = "Name"
var DESC = "Description"
var EMO = "Emoji"
var UC = "Unicode"
var TYPE = "Type"
if (Config.LANG == 'ML') NAM = "പേര്", DESC = "വിവരണം", EMO = "ഇമോജി", UC = "യൂണികോഡ്", TYPE = "തരം", NEED_EMO = "*നിങ്ങൾ ഒരു എമോജിയും ടൈപ്പും / ചിഹ്നം ഉപയോഗിച്ച് വിഭജിച്ച് നൽകണം!*", UNSUP = "*❌️ നൽകിയ ഇമോജി പിന്തുണയ്ക്കുന്നില്ല!*", INVALID_CHAR = "❌️ അസാധുവായ പ്രതീകം! നിങ്ങൾ കമാൻഡിനോടൊപ്പം ഒരു ഇമോജി നൽകണം.*", TYPE_INVALID = "*❌️ നൽകിയ തരം അസാധുവാണ്! ദയവായി ഒരു സാധുവായ തരം നൽകുക.*\n\n```തരങ്ങൾ:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter *\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"
if (Config.LANG == 'ID') NAM = "Nama", DESC = "Deskripsi", EMO = "Emoji", UC = "Unicode", TYPE = "Tipe", NEED_EMO = "*Anda harus memasukkan emoji dan mengetik dengan memisahkan tanda /!*", UNSUP = "*❌️ Emoji yang dimasukkan tidak didukung!*", INVALID_CHAR = "❌️ Karakter Tidak Valid! Anda harus memasukkan emoji beserta perintahnya .*", TYPE_INVALID = "*❌️ Jenis yang dimasukkan tidak valid! Harap masukkan jenis yang valid.*\n\n```Jenis:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter *\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"

Leon.addCommand({ pattern: 'ttp ?(.*)', fromMe: td, desc: Lang.TTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get(Config.API + '/creator/ttp?text=' + uri, { responseType: 'arraybuffer' })
      await message.sendImage(Buffer.from(ttinullimage.data), "");
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get(Config.API + '/creator/ttp?text=' + uri, { responseType: 'arraybuffer' })
      await message.sendImage(Buffer.from(ttinullimage.data), "");
    }
}));

Leon.addCommand({ pattern: 'attp ?(.*)', fromMe: td, desc: Lang.ATTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get(Config.API + '/creator/attp?text=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get(Config.API + '/creator/attp?text=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }
}));

Leon.addCommand({pattern: 'emoji ?(.*)', fromMe: td, desc: Lang.EMOJI_DESC}, (async (message, match) => {
       
const _0x49468c=_0x2382;(function(_0x35412e,_0x364e03){const _0x5e99d3=_0x2382,_0xfff395=_0x35412e();while(!![]){try{const _0x5950e6=-parseInt(_0x5e99d3(0x1b4))/0x1+-parseInt(_0x5e99d3(0x1ba))/0x2+parseInt(_0x5e99d3(0x1b1))/0x3+parseInt(_0x5e99d3(0x1bf))/0x4*(-parseInt(_0x5e99d3(0x1a4))/0x5)+-parseInt(_0x5e99d3(0x1b7))/0x6*(-parseInt(_0x5e99d3(0x1ac))/0x7)+parseInt(_0x5e99d3(0x1bd))/0x8+-parseInt(_0x5e99d3(0x1b3))/0x9*(parseInt(_0x5e99d3(0x1af))/0xa);if(_0x5950e6===_0x364e03)break;else _0xfff395['push'](_0xfff395['shift']());}catch(_0x1d6f8e){_0xfff395['push'](_0xfff395['shift']());}}}(_0x3bc8,0x77164));if(match[0x1]==='')return await message['sendReply'](NEED_EMO);function _0x3bc8(){const _0x47186c=['9220WqzAKW','data','1575798wmAfPz','WhatsApp','180pjuHoh','563250DEsTcG','&type=','image','269742PZxnId','_➥\x20','/emoji-to-png?emoji=','1056468Pzeewb','Type\x20is\x20Invalid','match','6772888GmppxH','desc','2153768wFAJoE','from','_\x20:\x20*','result','emoji','split','*\x0a_➥\x20','😮‍💨','5PWUEZe','body','name','arraybuffer','_\x20:\x0a*','sendReply','includes','message','119eElOxv','API','parse'];_0x3bc8=function(){return _0x47186c;};return _0x3bc8();}var emoji,type;match[0x1][_0x49468c(0x1aa)]('/')?(emoji=match[0x1][_0x49468c(0x1a1)]('/')[0x0],type=match[0x1][_0x49468c(0x1a1)]('/')[0x1]):(emoji=match[0x1],type=_0x49468c(0x1b2));if(emoji==encodeURI('😮‍💨')||emoji==_0x49468c(0x1a3))return await message['sendReply'](UNSUP);var emoR=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;if(!emoji[_0x49468c(0x1bc)](emoR))return await message['sendReply'](INVALID_CHAR);function _0x2382(_0x41af55,_0x507709){const _0x3bc86b=_0x3bc8();return _0x2382=function(_0x2382eb,_0x3a82f9){_0x2382eb=_0x2382eb-0x1a0;let _0x7456bc=_0x3bc86b[_0x2382eb];return _0x7456bc;},_0x2382(_0x41af55,_0x507709);}let url=Config[_0x49468c(0x1ad)]+_0x49468c(0x1b9)+emoji+_0x49468c(0x1b5)+type,res=await got(url),json=JSON[_0x49468c(0x1ae)](res[_0x49468c(0x1a5)]);if(json[_0x49468c(0x1ab)]['includes'](_0x49468c(0x1bb)))return await message[_0x49468c(0x1a9)](TYPE_INVALID);var cap=_0x49468c(0x1b8)+NAM+_0x49468c(0x1c1)+json[_0x49468c(0x1c2)][_0x49468c(0x1a6)]+_0x49468c(0x1a2)+DESC+_0x49468c(0x1a8)+json[_0x49468c(0x1c2)][_0x49468c(0x1be)]+'*\x0a_➥\x20'+EMO+_0x49468c(0x1c1)+json[_0x49468c(0x1c2)][_0x49468c(0x1a0)]+_0x49468c(0x1a2)+UC+'_\x20:\x20*'+json[_0x49468c(0x1c2)]['unicode']+_0x49468c(0x1a2)+TYPE+_0x49468c(0x1c1)+(type==undefined?_0x49468c(0x1b2):type)+'*';let png=await axios['get'](json[_0x49468c(0x1c2)][_0x49468c(0x1b6)],{'responseType':_0x49468c(0x1a7)});return await message['sendImage'](Buffer[_0x49468c(0x1c0)](png[_0x49468c(0x1b0)]),cap);
}));

