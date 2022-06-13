let Leon = require('../events');
let Config = require('../config');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Language = require('../language');
let Lang = Language.getString('ttp');
let { ERROR } = Language.getString('admin');
let td = Config.WORKTYPE == 'public' ? false : true
let tdc = ''
var NEED_WORD = '*You must enter 2 words by splitting with / symbol!*'
var PROC = '*⏰️ Processing...*'
if (Config.LANG == 'ML') NEED_WORD = '*നിങ്ങൾ / ചിഹ്നം ഉപയോഗിച്ച് വിഭജിച്ച് 2 വാക്കുകൾ നൽകണം!*', PROC = '*⏰️ പ്രോസസ്സിംഗ്...*'
if (Config.LANG == 'ID') NEED_WORD = '*Anda harus memasukkan 2 kata dengan memisahkan dengan / simbol!*', PROC = '*⏰️ Processing...*'

Leon.addCommand({pattern: 'textmaker', fromMe: td, desc: Lang.TEXT_MAKER}, (async (message, match) => {    

     let commands = ["glitch","neon","snow","cloud","luxury","gradient","sky","blackpink","beach","sand","engraved","glue","metal","galaxy","minion","holographic","glossy","fabric","pornhub","joker","avengers","marvel","stone","halloween","blood","xmas","badge","lion","wolf","leaves","diwali","bone","steel","rock","lava","america"];
     var TEXT_MAKER = '';
     commands.forEach(async (command, index) => {
        TEXT_MAKER += `*${index + 1}. ${command}*\n\n`
     });
     await message.sendReply(TEXT_MAKER);
}));

Leon.addCommand({pattern: 'glitch ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

     try {
      var webimage = await axios.get(`${Config.API}/textpro/glitch?text=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), tdc);
}));

Leon.addCommand({pattern: 'neon ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/neon?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), tdc);
}));

Leon.addCommand({pattern: 'snow ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/snow?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');

}));

Leon.addCommand({pattern: 'cloud ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/cloud?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'luxury ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/luxury3d?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'gradient ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/gradient3d?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'sky ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/cloudsky?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'blackpink ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/blackpink?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), tdc);
}));

Leon.addCommand({pattern: 'beach ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/summer-beach?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'sand ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/sand?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'engraved ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/sand-engraved?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'glue ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/glue?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'metal ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/metal-darkgold?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'galaxy ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/neon-galaxy?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'minion ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/minion?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'holographic ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/holographic?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'glossy ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/glossy-carbon?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'fabric ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/fabric?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');

}));

Leon.addCommand({pattern: 'stone ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

     try {
      var webimage = await axios.get(`${Config.API}/textpro/glitch?text=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), tdc);

}));

Leon.addCommand({pattern: 'pornhub ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

     try {
      var webimage = await axios.get(`${Config.API}/textpro/pornhub?text=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'joker ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/joker-logo?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'avengers ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

     try {
      var webimage = await axios.get(`${Config.API}/textpro/avengers?text=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'marvel ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

    try {
      var webimage = await axios.get(`${Config.API}/textpro/marvel?text=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), tdc);
}));

Leon.addCommand({pattern: 'halloween ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/halloween-fire?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'blood ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/blood?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'xmas ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/xmas?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'badge ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/silver-badge?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'lion ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/lion-logo?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'wolf ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes('/')) return await message.sendReply(NEED_WORD);
  
    var topText, bottomText;
    var split = match[1].split('/');
    bottomText = split[1];
    topText = split[0];

    try {
      var webimage = await axios.get(`${Config.API}/textpro/wolf-logo?text=${topText}&text2=${bottomText}&theme=galaxy`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'leaves ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/lion-logo?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'diwali ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/diwali?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'bone ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/bone-text?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'steel ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/steel?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'rock ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/rock?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'lava ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/lava?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));

Leon.addCommand({pattern: 'america ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(NEED_WORD);
    try {
      var webimage = await axios.get(`${Config.API}/textpro/captain-america?text=${match[1]}`, { responseType: 'arraybuffer' })
      await message.sendReply(PROC);
    } catch (e) {
      return await message.sendReply(ERROR);
    }
    await message.sendImage(Buffer.from(webimage.data), '');
}));
