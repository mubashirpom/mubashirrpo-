let Leon = require('../events');
let {MessageType, Mimetype} = require('@adiwajshing/baileys');
let Config = require('../config');
let fs = require('fs');
let got = require('got');
let FormData = require('form-data');
let stream = require('stream');
let {promisify} = require('util');
let pipeline = promisify(stream.pipeline);
let Language = require('../language');
let Lang = Language.getString('removebg');

if (Config.WORKTYPE == 'private') {

    Leon.addCommand({pattern: 'rbg ?(.*)', fromMe: true, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    

        if (message.reply_message === false || message.reply_message.image === false) return await message.sendReply(Lang.NEED_PHOTO);
        if (Config.RBG_API_KEY === 'false') return await message.sendReply(Lang.NO_API_KEY);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        }); 
    
        await pipeline(
		    rbg,
		    fs.createWriteStream('rbg.png')
        );
    
        await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'RemoveBG.png', mimetype: Mimetype.png, quoted: message.data });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Leon.addCommand({pattern: 'rbg ?(.*)', fromMe: false, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    

        if (message.reply_message === false || message.reply_message.image === false) return await message.sendReply(Lang.NEED_PHOTO);
        if (Config.RBG_API_KEY === 'false') return await message.sendReply(Lang.NO_API_KEY);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        }); 
    
        await pipeline(
		    rbg,
		    fs.createWriteStream('rbg.png')
        );
    
        await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'RemoveBG.png', mimetype: Mimetype.png, quoted: message.data });
    }));
}
