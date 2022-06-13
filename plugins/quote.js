let Leon = require('../events');
let {MessageType, Mimetype} = require('@adiwajshing/baileys');
let Config = require('../config');
let axios = require('axios');
let td = Config.WORKTYPE == 'public' ? false : true

var QUOTE_DESC = ''
var QUOTE = ''
var AUTHOR = ''
var NOT_FOUND = ''
if (Config.LANG == 'EN') QUOTE_DESC = "Sends random quotes in english.", QUOTE = "```Quote:```", AUTHOR = "```Author:```", NOT_FOUND = "*An Error Occurred!*"
if (Config.LANG == 'ML') QUOTE_DESC = "ഇംഗ്ലീഷിൽ ക്രമരഹിതമായ ഉദ്ധരണികൾ അയയ്ക്കുക.", QUOTE = "```ഉദ്ധരണി:```", AUTHOR = "```രചയിതാവ്:```", NOT_FOUND = "*ഒരു പിശക് സംഭവിച്ചു!*"
if (Config.LANG == 'ID') QUOTE_DESC = "Mengirim kutipan acak dalam bahasa Inggris.", QUOTE = "```Mengutip:```", AUTHOR = "```Pengarang:```", NOT_FOUND = "*Terjadi kesalahan!*"

Leon.addCommand({pattern: 'quote ?(.*)', fromMe: td, desc: QUOTE_DESC}, async (message, match) => {
	await axios.get(`${Config.API}/random/quote`).then(async (json) => {
           await message.sendReply('📌 ' + QUOTE + ' *' + json.data.quote + '*\n' + '✒️ ' + AUTHOR + ' *' + json.data.author+ '*');
        });
});
