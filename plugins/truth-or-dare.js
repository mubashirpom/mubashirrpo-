let Leon = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');
let td = Config.WORKTYPE == 'private' ? true : false;

var TRUTH_DESC = "Sends random truth to play truth or dare."
var DARE_DESC = "Sends random dare to play truth or dare."
if (Config.LANG == 'ML') TRUTH_DESC = "ട്രൂത്ത് ഓർ ഡെയർ കളിക്കാനായി ക്രമരഹിതമായ ട്രൂത്ത് അയക്കുന്നു.", DARE_DESC = "ട്രൂത്ത് ഓർ ഡെയർ കളിക്കാനായി ക്രമരഹിതമായ ഡെയർ അയക്കുന്നു."
if (Config.LANG == 'ID') TRUTH_DESC = "Mengirimkan kebenaran acak untuk memainkan kebenaran atau tantangan..", DARE_DESC = "Mengirimkan tantangan acak untuk bermain kebenaran atau tantangan."

Leon.addCommand({pattern: 'truth ?(.*)', fromMe: td, desc: TRUTH_DESC}, (async (message, match) => {

  let url = Config.API + '/truth-or-dare/truth?lang=' + Config.LANG
  let res = await got(url);
  let json = JSON.parse(res.body);
  let truth = json.result.truth
  var img = ["https://i.ibb.co/w4PCg7H/62396edecb66b.jpg","https://i.ibb.co/D5Zqsdz/62396f3e2540d.jpg","https://i.ibb.co/YPWYLps/62396f848328f.jpg"]
  img = img[Math.floor(Math.random() * img.length)];
  img = await axios.get(img, { responseType: 'arraybuffer' })
  return await message.sendImage(Buffer.from(img.data), `${"```" + truth + "```"}`);
}));

Leon.addCommand({pattern: 'dare ?(.*)', fromMe: td, desc: DARE_DESC}, (async (message, match) => {

  let url = Config.API + '/truth-or-dare/dare?lang=' + Config.LANG
  let res = await got(url);
  let json = JSON.parse(res.body);
  let dare = json.result.dare
  var img = ["https://i.ibb.co/qnGhRvg/62396efd0874d.jpg","https://i.ibb.co/zQTPqVd/62396f588ee20.jpg","https://i.ibb.co/19YTTQc/62396fa12079a.jpg"]
  img = img[Math.floor(Math.random() * img.length)];
  img = await axios.get(img, { responseType: 'arraybuffer' })
  return await message.sendImage(Buffer.from(img.data), `${"```" + dare + "```"}`);
}));
