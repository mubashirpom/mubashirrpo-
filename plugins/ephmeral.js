let Leon = require('../events');
let {MessageType, WA_DEFAULT_EPHEMERAL, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');

var EPHMERAL_DESC;
var NEED_ARG;
var INVLD_ARG;
var SUC_ON;
var SUC_OFF;
if (Config.LANG == 'EN') EPHMERAL_DESC = "Turns on/off ephmeral or disapearing messages in the chat.", NEED_ARG = "*You must enter 'off' or 'on' along with the command!*", INVLD_ARG = "*❌️ Invalid Argument! Please use 'on' or 'off' along with the command.*", SUC_ON = "*✅️ Successfully turned on ephmeral/disappearing message!*", SUC_OFF = "*☑️ Successfully turned off ephmeral/disappearing message!*"
if (Config.LANG == 'ML') EPHMERAL_DESC = "ചാറ്റിൽ എഫ്മെറൽ അല്ലെങ്കിൽ ഡിസ്അപ്പിയറിങ് മെസ്സേജ് ഓൺ/ഓഫ് ചെയ്യുന്നു.", NEED_ARG = "*നിങ്ങൾ കമാൻഡിനോടൊപ്പം 'ഓഫ്' അല്ലെങ്കിൽ 'ഓൺ' എന്ന് നൽകണം!*", INVLD_ARG = "*❌️ അസാധുവായ വാദം! കമാൻഡിനോടൊപ്പം ദയവായി 'ഓൺ' അല്ലെങ്കിൽ 'ഓഫ്' ഉപയോഗിക്കുക.*", SUC_ON = " *✅️ എഫ്മെറൽ/അപ്രത്യക്ഷമാകുന്ന സന്ദേശം വിജയകരമായി ഓണാക്കി!*", SUC_OFF = "*☑️ എഫ്മെറൽ/അപ്രത്യക്ഷമാകുന്ന സന്ദേശം വിജയകരമായി ഓഫാക്കി!*"
if (Config.LANG == 'ID') EPHMERAL_DESC = "Mengaktifkan/menonaktifkan pesan singkat atau menghilang dalam obrolan.", NEED_ARG = "*Anda harus memasukkan 'off' atau 'on' bersama dengan perintah!*", INVLD_ARG = "*❌️ Argumen Tidak Valid! Silakan gunakan 'on' atau 'off' bersama dengan perintah.*", SUC_ON = " *✅️ Berhasil mengaktifkan pesan singkat/menghilang!*", SUC_OFF = "*☑️ Berhasil mematikan pesan singkat/menghilang!*"

Leon.addCommand({pattern: 'ephmeral ?(.*)', fromMe: true, desc: EPHMERAL_DESC}, (async (message, match) => {

var _0x9eac=["","\x73\x65\x6E\x64\x52\x65\x70\x6C\x79","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6F\x6E","\x6A\x69\x64","\x74\x6F\x67\x67\x6C\x65\x44\x69\x73\x61\x70\x70\x65\x61\x72\x69\x6E\x67\x4D\x65\x73\x73\x61\x67\x65\x73","\x63\x6C\x69\x65\x6E\x74","\x6F\x66\x66"];if(match[1]=== _0x9eac[0]){return  await message[_0x9eac[1]](NEED_ARG)};match[1]= match[1][_0x9eac[2]]();if(match[1]=== _0x9eac[3]){ await message[_0x9eac[6]][_0x9eac[5]](message[_0x9eac[4]],WA_DEFAULT_EPHEMERAL);return  await message[_0x9eac[1]](SUC_ON)}else {if(match[1]=== _0x9eac[7]){ await message[_0x9eac[6]][_0x9eac[5]](message[_0x9eac[4]],0);return  await message[_0x9eac[1]](SUC_OFF)}else {return  await message[_0x9eac[1]](INVLD_ARG)}}
}));
