let Leon = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');
let td = Config.WORKTYPE == 'private' ? true : false

var WAME_DESC = "Get a link to the user chat."
var WAME = "```Chat link from``` @{} : https://wa.me/{}"
var WAME_TEXT = "```Chat link from``` @{} : https://wa.me/{}?text={}"
var NEED_UWONG = "*You must reply to any user's message or mention any user!*"
var MOVIE_DESC = 'Finds the informations of the movie.'
var SERIES_DESC = 'Finds the informations of the series.'
var NEED_MOVIE = '*You must enter a movie name!*'
var NEED_SERIES = "*You must enter a series name!*"
var NOT_FOUND_MKV = "*Couldn't find any movie from this name!*"
var NOT_FOUND_SKR = "*Couldn't find any series from this name!*"
var TITLE = 'Title'
var RELEASED = 'Released'
var YEAR = 'Year'
var COUNTRY = 'Country'
var DURATION = 'Duration'
var GENRE = 'Genre'
var DIRECTOR = 'Director'
var WRITER = 'Writer'
var ACTORS = 'Actors'
var LANGUAGES = 'Languages'
var AWARDS = 'Awards'
var WEBSITE = 'Website'
var SEASONS = 'Total Seasons'
if (Config.LANG == 'ML') WAME_DESC = 'ഉപയോക്തൃ ചാറ്റിലേക്കുള്ള ഒരു ലിങ്ക് നേടുക.', WAME = '@{} ```ഇൽ നിന്നുള്ള ചാറ്റ് ലിങ്ക്``` : https://wa.me/{}', WAME_TEXT = '@{} ```ഇൽ നിന്നുള്ള ചാറ്റ് ലിങ്ക്``` : https://wa.me/{}?text={}', NEED_UWONG = '*ഏതെങ്കിലും ഉപയോക്താവിന്റെ സന്ദേശത്തിന് നിങ്ങൾ മറുപടി ആയി നൽകണം അല്ലെങ്കിൽ ഏതെങ്കിലും ഉപയോക്താവിനെ മെൻഷൻ ചെയ്യണം!*', MOVIE_DESC = 'സിനിമയുടെ വിവരങ്ങൾ കണ്ടെത്തുന്നു.', SERIES_DESC = 'പരമ്പരയുടെ വിവരങ്ങൾ കണ്ടെത്തുന്നു.', NEED_MOVIE = '*നിങ്ങൾ ഒരു സിനിമയുടെ പേര് നൽകണം!*', NEED_SERIES = '*നിങ്ങൾ ഒരു പരമ്പരയുടെ പേര് നൽകണം!*', NOT_FOUND_MKV = '*ഈ പേരിൽ ഒരു സിനിമയും കണ്ടെത്താൻ കഴിഞ്ഞില്ല!*', NOT_FOUND_SKR = '*ഈ പേരിൽ നിന്ന് ഒരു പരമ്പരയും കണ്ടെത്താൻ കഴിഞ്ഞില്ല!*', TITLE = 'തലക്കെട്ട്', RELEASED = 'റിലീസ് ചെയ്തത്', YEAR = 'വർഷം', COUNTRY = 'രാജ്യം', DURATION = 'ദൈർഖ്യം', GENRE = 'തരം', DIRECTOR = 'ഡയറക്ടർ', WRITER = 'രചെയ്താവ്', ACTORS = 'അഭിനേതാക്കൾ', LANGUAGES = 'ഭാഷകൾ', AWARDS = 'അവാർഡുകൾ', WEBSITE = 'വെബ്സൈറ്റ്', SEASONS = 'ആകെ സീസണുകൾ'
if (Config.LANG == 'ID') WAME_DESC = 'Dapatkan tautan ke obrolan pengguna.', WAME = '```Tautan obrolan dari``` @{} : https://wa.me/{}', WAME_TEXT = '```Tautan obrolan dari``` @{} : https://wa.me/{}?text={}', NEED_UWONG = '*Anda harus membalas pesan pengguna mana pun atau menyebut pengguna mana pun!*', MOVIE_DESC = 'Menemukan informasi dari film.', SERIES_DESC = 'Menemukan informasi dari seri.', NEED_MOVIE = 'Anda harus memasukkan nama film!', NEED_SERIES = 'Anda harus memasukkan nama seri!', NOT_FOUND_MKV = 'Tidak dapat menemukan film apa pun dari nama ini!', NOT_FOUND_SKR = 'Tidak dapat menemukan seri apa pun dari nama ini!', TITLE = 'Judul', RELEASED = 'Dilepaskan', YEAR = 'Tahun', COUNTRY = 'Negara', DURATION = 'Durasi', GENRE = 'Aliran', DIRECTOR = 'Direktur', WRITER = 'Penulis', ACTORS = 'Aktor', LANGUAGES = 'Bahasa', AWARDS = 'Penghargaan', WEBSITE = 'Situs web', SEASONS = 'Jumlah Musim'

Leon.addCommand({pattern: 'wame ?(.*)', fromMe: td, desc: WAME_DESC}, (async (message, match) => {

function _0xaf21(_0x13b3b4,_0x3f7a55){var _0x2a9f77=_0x2a9f();return _0xaf21=function(_0xaf21ae,_0x11c274){_0xaf21ae=_0xaf21ae-0x116;var _0x3688a7=_0x2a9f77[_0xaf21ae];return _0x3688a7;},_0xaf21(_0x13b3b4,_0x3f7a55);}var _0x55971d=_0xaf21;(function(_0x1ad2b4,_0x47a4d2){var _0x478969=_0xaf21,_0x518fe4=_0x1ad2b4();while(!![]){try{var _0x4a907c=parseInt(_0x478969(0x117))/0x1*(parseInt(_0x478969(0x12e))/0x2)+-parseInt(_0x478969(0x11c))/0x3+-parseInt(_0x478969(0x136))/0x4*(-parseInt(_0x478969(0x119))/0x5)+-parseInt(_0x478969(0x122))/0x6*(parseInt(_0x478969(0x132))/0x7)+-parseInt(_0x478969(0x125))/0x8*(parseInt(_0x478969(0x11e))/0x9)+-parseInt(_0x478969(0x127))/0xa*(parseInt(_0x478969(0x133))/0xb)+parseInt(_0x478969(0x137))/0xc*(parseInt(_0x478969(0x120))/0xd);if(_0x4a907c===_0x47a4d2)break;else _0x518fe4['push'](_0x518fe4['shift']());}catch(_0x31ac25){_0x518fe4['push'](_0x518fe4['shift']());}}}(_0x2a9f,0x93f35));var _0x335f53=_0x13d7;(function(_0x14438d,_0xd9946b){var _0x296ea8=_0xaf21,_0xe6e936=_0x13d7,_0xb570f9=_0x14438d();while(!![]){try{var _0x57485a=-parseInt(_0xe6e936(0x187))/0x1+parseInt(_0xe6e936(0x181))/0x2+parseInt(_0xe6e936(0x185))/0x3*(parseInt(_0xe6e936(0x17a))/0x4)+parseInt(_0xe6e936(0x174))/0x5+-parseInt(_0xe6e936(0x173))/0x6+parseInt(_0xe6e936(0x183))/0x7*(-parseInt(_0xe6e936(0x179))/0x8)+parseInt(_0xe6e936(0x176))/0x9;if(_0x57485a===_0xd9946b)break;else _0xb570f9[_0x296ea8(0x134)](_0xb570f9[_0x296ea8(0x12d)]());}catch(_0x475436){_0xb570f9[_0x296ea8(0x134)](_0xb570f9[_0x296ea8(0x12d)]());}}}(_0x1343,0x2117a));function _0x13d7(_0x3f697f,_0x1792b5){var _0x1a71bb=_0x1343();return _0x13d7=function(_0x5c38f0,_0x4aacb8){_0x5c38f0=_0x5c38f0-0x173;var _0x3ae258=_0x1a71bb[_0x5c38f0];return _0x3ae258;},_0x13d7(_0x3f697f,_0x1792b5);}if(message[_0x335f53(0x177)]!==![])!match[0x1]?await message[_0x335f53(0x17d)][_0x335f53(0x184)](message[_0x335f53(0x175)],WAME[_0x335f53(0x178)](message[_0x335f53(0x177)][_0x335f53(0x175)][_0x335f53(0x186)]('@')[0x0],message[_0x335f53(0x177)][_0x335f53(0x175)][_0x335f53(0x17f)](_0x335f53(0x17e),'\x20')),MessageType[_0x335f53(0x17b)],{'quotedMessage':message[_0x335f53(0x177)][_0x55971d(0x121)],'contextInfo':{'mentionedJid':[message[_0x335f53(0x177)][_0x335f53(0x175)][_0x55971d(0x11a)](_0x55971d(0x138),_0x55971d(0x12c))]}}):await message[_0x335f53(0x17d)][_0x335f53(0x184)](message['jid'],WAME_TEXT[_0x55971d(0x12b)](message[_0x335f53(0x177)][_0x335f53(0x175)][_0x335f53(0x186)]('@')[0x0],message[_0x335f53(0x177)][_0x335f53(0x175)][_0x335f53(0x17f)](_0x335f53(0x17e),''),encodeURI(match[0x1])),MessageType[_0x55971d(0x130)],{'quotedMessage':message[_0x335f53(0x177)][_0x55971d(0x121)],'contextInfo':{'mentionedJid':[message[_0x55971d(0x12a)][_0x335f53(0x175)][_0x335f53(0x17f)]('c.us','s.whatsapp.net')]}});else message[_0x335f53(0x17c)]!==![]?message[_0x335f53(0x17c)][_0x55971d(0x135)](async _0xa3f211=>{var _0x142ebf=_0x335f53;await message['client'][_0x142ebf(0x184)](message[_0x142ebf(0x175)],WAME[_0x142ebf(0x178)](_0xa3f211[_0x142ebf(0x186)]('@')[0x0],_0xa3f211[_0x142ebf(0x17f)](_0x142ebf(0x17e),'\x20')),MessageType[_0x142ebf(0x17b)],{'contextInfo':{'mentionedJid':[_0xa3f211[_0x142ebf(0x17f)](_0x142ebf(0x182),_0x142ebf(0x180))]}});}):await message[_0x335f53(0x17d)][_0x335f53(0x184)](message[_0x335f53(0x175)],NEED_UWONG,MessageType[_0x335f53(0x17b)]);function _0x1343(){var _0x2214d0=_0x55971d,_0x52c5a8=[_0x2214d0(0x123),'c.us',_0x2214d0(0x11d),'sendMessage','9216wbQSfj',_0x2214d0(0x129),_0x2214d0(0x124),_0x2214d0(0x11f),_0x2214d0(0x12f),'jid',_0x2214d0(0x116),'reply_message','format',_0x2214d0(0x128),_0x2214d0(0x11b),_0x2214d0(0x130),_0x2214d0(0x126),_0x2214d0(0x118),_0x2214d0(0x131),_0x2214d0(0x11a),_0x2214d0(0x12c)];return _0x1343=function(){return _0x52c5a8;},_0x1343();}function _0x2a9f(){var _0xc1e7d9=['6CSvnVy','338828vPPtgq','94622qSZRCM','384IgVVKU','mention','10DCBhdQ','8OyBPfQ','split','reply_message','format','s.whatsapp.net','shift','8374jPBVPH','252985NljVZP','text','@s.whatsapp.net','4807747wwMaZY','13088427CFactj','push','map','832GtFENn','36gWVUXu','c.us','921573hGcsQI','26QhuAYa','client','12790kSUVTf','replace','144nOiwiP','481230EJkKDS','438235cuGTHM','142767oTHKfD','841362cHhgSl','11975561eXJRKe','data'];_0x2a9f=function(){return _0xc1e7d9;};return _0x2a9f();}
}));

Leon.addCommand({pattern: 'movie ?(.*)', fromMe: td, desc: MOVIE_DESC}, (async (message, match) => {

  if (match[1] === '') return await message.sendReply(NEED_MOVIE);
  let url = Config.API + '/search/movie?query=' + match[1]
  let res = await got(url);
  let json = JSON.parse(res.body);
  if (json.message.match('valid')) return await message.sendReply(NOT_FOUND_MKV);
  var cap = `_➥ ${TITLE}_ : *${json.result.title}*\n_➥ ${RELEASED}_ : *${json.result.released}*\n_➥ ${YEAR}_ : *${json.result.year}*\n_➥ ${COUNTRY}_ : *${json.result.country}*\n_➥ ${DURATION}_ : *${json.result.duration}*\n_➥ ${GENRE}_ : *${json.result.genre}*\n_➥ ${DIRECTOR}_ : *${json.result.director}*\n_➥ ${WRITER}_ : *${json.result.writer}*\n_➥ ${ACTORS}_ : *${json.result.actors}*\n_➥ ${LANGUAGES}_ : *${json.result.language}*\n_➥ ${AWARDS}_ : *${json.result.awards}*\n_➥ ${WEBSITE}_ : *${json.result.website}*`
  let poster = await axios.get(json.result.poster_url, { responseType: 'arraybuffer' })
  return await message.sendImage(Buffer.from(poster.data), cap);
}));

Leon.addCommand({pattern: 'series ?(.*)', fromMe: td, desc: SERIES_DESC}, (async (message, match) => {

  if (match[1] === '') return await message.sendReply(NEED_SERIES);
  let url = Config.API + '/search/series?query=' + match[1]
  let res = await got(url);
  let json = JSON.parse(res.body);
  if (json.message.match('valid')) return await message.sendReply(NOT_FOUND_SKR);
  var cap = `_➥ ${TITLE}_ : *${json.result.title}*\n_➥ ${RELEASED}_ : *${json.result.released}*\n_➥ ${YEAR}_ : *${json.result.year}*\n_➥ ${COUNTRY}_ : *${json.result.country}*\n_➥ ${DURATION}_ : *${json.result.duration}*\n_➥ ${GENRE}_ : *${json.result.genre}*\n_➥ ${DIRECTOR}_ : *${json.result.director}*\n_➥ ${WRITER}_ : *${json.result.writer}*\n_➥ ${ACTORS}_ : *${json.result.actors}*\n_➥ ${LANGUAGES}_ : *${json.result.language}*\n_➥ ${AWARDS}_ : *${json.result.awards}*\n_➥ ${SEASONS}_ : *${json.result.totalSeasons}*`
  let poster = await axios.get(json.result.poster_url, { responseType: 'arraybuffer' })
  return await message.sendImage(Buffer.from(poster.data), cap);
}));
