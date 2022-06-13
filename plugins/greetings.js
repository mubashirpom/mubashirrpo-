let Leon = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let sql = require('./sql/greetings');
let fs = require('fs');
let Language = require('../language');
let Lang = Language.getString('greetings');

Leon.addCommand({pattern: 'welcome$', fromMe: true, desc: Lang.WELCOME_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.sendReply(Lang.NOT_SET_WELCOME);
    } else {
        await message.sendReply(Lang.WELCOME_ALREADY_SETTED + hg.message + '```');
    }
}));

Leon.addCommand({pattern: 'welcome (.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.sendReply(Lang.NEED_WELCOME_TEXT);
    } else {
        match[1] = match[1].toLowerCase();
        if (match[1] === 'delete' || match[1] === 'remove' || match[1] === 'disable' || match[1] === 'del' || match[1] === 'rem') { await message.sendReply(Lang.WELCOME_DELETED); return await sql.deleteMessage(message.jid, 'welcome'); }
        await sql.setMessage(message.jid, 'welcome', match[1].replace(/#/g, '\n'));
        return await message.sendReply(Lang.WELCOME_SETTED);
    }
}));

Leon.addCommand({pattern: 'goodbye$', fromMe: true, desc: Lang.GOODBYE_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.sendReply(Lang.NOT_SET_GOODBYE);
    } else {
        await message.sendReply(Lang.GOODBYE_ALREADY_SETTED + hg.message + '```');
    }
}));

Leon.addCommand({pattern: 'goodbye (.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.sendReply(Lang.NEED_GOODBYE_TEXT);
    } else {
        if (match[1] === 'delete' || match[1] === 'remove' || match[1] === 'disable' || match[1] === 'del' || match[1] === 'rem') { await message.sendReply(Lang.GOODBYE_DELETED); return await sql.deleteMessage(message.jid, 'goodbye'); }
        await sql.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
        return await message.sendReply(Lang.GOODBYE_SETTED);
    }
}));
