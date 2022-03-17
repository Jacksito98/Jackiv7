/* ====[ INDONESIA ]====

Nah kali ini gw mau bagi²
Script bot WhatsApp bahasa English
Silakan di pakek asal nama 
Pembuat atau creator jangan di 
Hapus atau di ganti nama luh
Jika di ganti atau di hapus
Saya tidak bakalan update sc ini !!
Pliss jangan jual sc ini 
Kalau mau nyolong kasih sumber om
Gak di kasih ?, Sans gw doain biar luh sial !!

====[ ENGLISH ]====

Well this time I want to share
WhatsApp bot script in English
Please use the original name
Makers or creators don't
Delete or rename luh
If replaced or deleted
I will not update this sc !!
Pls don't sell this SC
If you want to help, give me the source
Isn't it given?, Sans I pray for bad luck!!
*/


const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const skh = require('skh-api')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { color, bgcolor } = require('./database/lib/color')
const { fetchJosn, kyun, fetchText } = require('./database/lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

//━━━━[ Setting ]━━━━//

owner = setting.OwnerNumber
owner2 = `${owner}@s.whatsapp.net`
botname = setting.BotName
ownername = setting.OwnerName
const fakeimage = fs.readFileSync ('./database/image/dhani.jpg')
const thumb = fs.readFileSync ('./database/image/thumb.jpg')

//━━━━[ Database ]━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

//━━━━[ Time ]━━━━//

let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


if(waktu < "23:59:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌌'
}
if(waktu < "19:00:00"){
var sayingtime = '𝘏𝘢𝘷𝘦 𝘢 𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🌆'
}
if(waktu < "18:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯🌇'
}
if(waktu < "15:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘋𝘢𝘺🏞'
}
if(waktu < "11:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨🌅'
}
if(waktu < "05:00:00"){
var sayingtime = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵🏙'
}

//━━━━[ Module Exports ]━━━━//

module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Dhani.chats.all()
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.Me
		
//━━━━[ Mess And Others ]━━━━//

		mess = {
		wait: 'Eperate gil',
		eror: 'Bueno manito ocurrio un error rueda de ahi  !!',
		success: 'Listo toma largate',
		error: {
		stick: 'sorry it`s not a sticker !!',
		Iv: 'Invalid link !!'
		},
		only: {
		group: '*Características especiales del grupo!!*',
		owner: 'Este comando solo lo puede usar Jacksito Rueda mmgvo',
		admin: '*Y ete aqueroso queriendo usar poderes de admin xDDDD pica de aca !!*',
		Badmin: '*Rapa tu madre dame admin primero en el grupo:)  !!*'
		}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Dhani.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Dhani.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor((seconds % (3600 * 24)) / 3600);
		var m = Math.floor((seconds % 3600) / 60);
		var s = Math.floor(seconds % 60);
		var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
		var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " hora, ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minuto, ") : "";
		var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundo") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
		};
		
//━━━━[ Button ]━━━━//

		const sendButton = async (from, context, fortext, but, mek) => {
		buttonMessages = {
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 1
		}
		Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
		quoted: ftrol
		})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        Dhani.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
		jadinya = await Dhani.prepareMessage(from, img, image)
		buttonMessagesI = {
		imageMessage: jadinya.message.imageMessage,
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 4
		}
		Dhani.sendMessage(from, buttonMessagesI, buttonsMessage, {
		quoted: ftrol,
		contexInfo: ftrol
		})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
        kma = vid1
        mhan = await Dhani.prepareMessage(from, kma, video)
        const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
        }
        Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━[ Gathering Fake ]━━━━//

        const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./database/image/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${sayingtime} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
		const ftrol = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		orderMessage: {
		itemCount : 123,
		status: 1,
		surface : 1,
		message: `${sayingtime} ${pushname}`, 
		orderTitle: `${sayingtime} ${pushname}`,
		thumbnail: thumb, //Gambarnye
		sellerJid: '0@s.whatsapp.net' 
		}
		}
		}
		const ftok = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": thumb //Gambarnye
		},
		"title": `${sayingtime} ${pushname}`, //Kasih namalu 
		"description": `${botname}`, 
		"currencyCode": "USD",
		"priceAmount1000": "2000",
		"retailerId": `${sayingtime} ${pushname}`,
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
		const floc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		liveLocationMessage: {
		caption: `${sayingtime} ${pushname}`,
		jpegThumbnail: thumb
		}
		}
		}
		const fdoc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		documentMessage: {
		title: `${sayingtime} ${pushname}`, 
		jpegThumbnail: thumb
		}
		}
		}
		const fvid = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fgi = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'gifPlayback': 'true', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fvoc = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"audioMessage": {
		"mimetype":"audio/ogg; codecs=opus",
		"seconds": "99999",
		"ptt": "true"
		}
		} 
		}
		const fonceimg = {
		key: {
		fromMe: false,
		participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
		message: {
		imageMessage: {
		viewOnce: true
		},
		},
		};
		const foncevid = { 
		key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
		message: { 
		videoMessage: { 
		viewOnce: true
		},
		},
		};
        
//━━━━[ Storage ]━━━━//

        const hideTag = async function(from, text){
        let anu = await Dhani.groupMetadata(from)
        let members = anu.participants
        let ane = []
        for (let i of members){
        ane.push(i.jid)
        }
        Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./database/image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
        }
        const sendStickerFromUrl = async(to, url) => {
		var names = Date.now() / 10000;
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, './stik' + names + '.png', async function () {
		console.log('selesai');
		let filess = './stik' + names + '.png'
		let asw = './stik' + names + '.webp'
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
		let media = fs.readFileSync(asw)
		Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
		fs.unlinkSync(filess)
		fs.unlinkSync(asw)
		});
		});
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		mime = res.headers['content-type']
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
		type = MessageType.video
		mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
		mime = Mimetype.mp4Audio
		}
		Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
		fs.unlinkSync(filename)
		});
		}   
		if (budy.includes("https://chat.whatsapp.com/")) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(` *「 GROUP LINK DETECTOR 」*\nYou sent the group chat link, sorry you were kicked from the group`)
		setTimeout(() => {
		Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
		}, 0)
		}
		if (budy.includes("Gracias")) {
			if (!isGroup) return
			reply('𝗖𝘂𝗮𝗹 𝗚𝗿𝗮𝗰𝗶𝗮𝘀 𝗠𝗺𝗻̃𝗲𝗺𝗮 𝗲𝗻𝗰𝘂𝗲𝗿𝗮𝘁𝗲')
			}
			if (budy.includes("Bot")) {
				if (!isGroup) return
				reply('𝗸𝗹𝗸 𝗺𝗺𝗴𝘃𝗼 ?')
				}
				if (budy.includes("Kuin")) {
					if (!isGroup) return
					reply('𝗹𝗮 𝗺𝗮𝘀 𝗹𝗶𝗻𝗱𝗮 𝘀𝗶 𝗽𝗾 ♡︎ 𝗾𝘂𝗲 𝗽𝗮𝘀𝗮 ?')
					}
		if (budy.length > 3500) {
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return
		reply('Mark read\n'.repeat(300))
		reply(`*「 VIRTEX DETECTOR 」*\n\nYou sent a virtex, sorry you were kicked from the group`)
		console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
		Dhani.groupRemove(from, [sender])
		}
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//━━━━[ All Feature ]━━━━//

case 'menu':
case 'help':
timestampe = speed();
latensie = speed() - timestampe
menu =`Hi ${pushname} ${sayingtime}


 \`\`\`❏「 HORARIO」\`\`\` 
│🔰 ${date}
│🔰 ${waktu}
│🔰 ${sayingtime}
└⬣

╭─⬣ 「 INFO BOT 」 ⬣
│🔰 *Bot name* : ${botname}
│🔰 *Owner name* : ${ownername}
│🔰 *Wa Version :* ${Dhani.user.phone.wa_version}
│🔰 *Owner number* : @${owner2.split("@")[0]}
│🔰 *Runtime* : ${runtime(process.uptime())}
│🔰 *Speed* : ${latensie.toFixed(4)} second
└⬣

\`\`\`❏「 INFO USER 」\`\`\`
•> *Nombre* : ${pushname}
•> *Tag* : @${senderr.split('@')[0]}
•> *Status* : ${isOwner ? 'Owner' : 'User'}`
teks =
`Seleccione el botón a continuación 
Si no te aparecen 
Por favor escribe ${prefix}allmenu
Sigueme en insta como @Jack_Paymon`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${ownername} || 2022_*`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '𝘼𝙇𝙇𝙈𝙀𝙉𝙐⏍' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝙊𝙒𝙉𝙀𝙍⎏' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner2]}}}, 'buttonsMessage')
break
case 'allmenu':
menu =`Ey klk ${pushname} @${senderr.split("@")[0]} ${sayingtime}


╭─❒ *⌜ INFO MENU ⌟* ❒
° 式 ⃟ ⛩️${prefix}runtime
° 式 ⃟ ⛩️${prefix}speed
° 式 ⃟ ⛩️${prefix}rules
° 式 ⃟ ⛩️${prefix}ssweb *Url*
° 式 ⃟ ⛩️${prefix}delete *Reply to bot messages*
└❏
*♣GITHUB* : https://github.com
──────────────┈ 
𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾: JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的
──────────────┈ ❁۪۪

╭┈──────𝚁𝙴𝙶𝙻𝙰𝚂
╰─➤⚒𝚁𝙴𝙶𝙻𝙰𝚂📜
↣𝚂𝙸 𝙽𝙾 𝚂𝙸𝙶𝚄𝙴𝚂 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂:𝙱𝚊𝚗+𝙱𝚕𝚘𝚌𝚔
↣𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝚂𝙿𝙰𝙼 : 𝙱𝚊𝚗
↣𝙽𝙾 𝙼𝙰𝙽𝙳𝙰𝚁 𝙿𝚁𝙸𝚅𝙰𝙳𝙾
↣𝙽𝙾 𝙼𝙰𝙽𝙳𝙰𝚁 2 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙰 𝙻𝙰 𝚅𝙴𝚉

𝐒𝐢𝐠𝐮𝐞𝐧𝐨𝐬 𝐄𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐑𝐞𝐝𝐞𝐬 𝐬𝐨𝐜𝐢𝐚𝐥𝐞𝐬
• • • • • • • • •「◆」• • • • • • • • • 
🍒 *<INSTAGRAM DEL GRUPO+ />*
 •> instagram.com/____etheral

💌 *<INSTAGRAM DE JACK+ />*
 •> instagram.com/jack_paymon/?hl=es

💌 *<INSTAGRAM DE KUIN+ />*
 •> instagram.com/w6y.x9v/?hl=es
• • • • • • • • •「◆」• • • • • • • • •


         _*<GROUP MENU + />*_
     
° 式 ⃟🏮 ${prefix}antilink *on / off*
° 式 ⃟🏮 ${prefix}welcome *on / off*
° 式 ⃟🏮 ${prefix}antivirtex *on / off*
° 式 ⃟🏮 ${prefix}promote *@tag*
° 式 ⃟🏮 ${prefix}demote *@tag*
° 式 ⃟🏮 ${prefix}add *628xxxx*
° 式 ⃟🏮 ${prefix}kick *@tag / Reply*
° 式 ⃟🏮 ${prefix}setppgroup *Reply Image*
° 式 ⃟🏮 ${prefix}setdesc *Text*
° 式 ⃟🏮 ${prefix}setname *Text*
° 式 ⃟🏮 ${prefix}hidetag *Text*
° 式 ⃟🏮 ${prefix}linkgroup
° 式 ⃟🏮 ${prefix}listonline
° 式 ⃟🏮 ${prefix}resetlinkgroup
° 式 ⃟🏮 ${prefix}infogroup
° 式 ⃟🏮 ${prefix}open 
° 式 ⃟🏮 ${prefix}close
° 式 ⃟🏮 ${prefix}tagme
° 式 ⃟🏮 ${prefix}leave
° 式 ⃟🏮 ${prefix}wa.me


         _*<MENU JUEGOS  + />*_
   
° 式 ⃟🀄 ${prefix}top5 
° 式 ⃟🀄 ${prefix}shipping
° 式 ⃟🀄 ${prefix}ppt 
° 式 ⃟🀄 ${prefix}random
° 式 ⃟🀄 ${prefix}pregunta
° 式 ⃟🀄 ${prefix}rankgay
° 式 ⃟🀄 ${prefix}gay
° 式 ⃟🀄 ${prefix}truth
° 式 ⃟🀄 ${prefix}casino
° 式 ⃟🀄 ${prefix}dare
° 式 ⃟🀄 ${prefix}rate

        _*<MENCIONES MENU + />*_

°°式 ⃟ 🎴 ${prefix}tagall
° 式 ⃟ 🎴 ${prefix}Sticktag [sticker]
° 式 ⃟ 🎴 ${prefix}totag [vid/img/stick]
° 式 ⃟ 🎴 ${prefix}notif
° 式 ⃟ 🎴 ${prefix}Hidetag


         _*<DOWNLOADER MENU + />*_

° 式 ⃟📥 ${prefix}ytmp3 *Link*
° 式 ⃟📥 ${prefix}ytmp4 *Link*
° 式 ⃟📥 ${prefix}tiktoknowm *Link*
° 式 ⃟📥 ${prefix}tiktokwm *Link*


         _*<STICKER MENU + />*_

° 式 ⃟🍬${prefix}sticker *Reply Image*
° 式 ⃟🍬${prefix}toimg *Reply Sticker*
° 式 ⃟🍬${prefix}attp
° 式 ⃟🍬${prefix}take 


         _*<MAKER MENU + />*_

° 式 ⃟🎨${prefix}magma/Name*
° 式 ⃟🎨${prefix}hallowen/Name*
° 式 ⃟🎨${prefix}neonlight/Name*
° 式 ⃟🎨${prefix}broken/Name*
° 式 ⃟🎨${prefix}artpaper/Name*
° 式 ⃟🎨${prefix}blackpink *Text*
° 式 ⃟🎨${prefix}halloween *Text*
° 式 ⃟🎨${prefix}halloween2 *Text*
° 式 ⃟🎨${prefix}3dgradient *Text*
° 式 ⃟🎨${prefix}naturalleaves *Text*
° 式 ⃟🎨${prefix}dropwater *Text*
° 式 ⃟🎨${prefix}blood *Text*
° 式 ⃟🎨${prefix}blood2 *Text*

ᴍᴀs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ʟᴏɢᴏs 
 ᴇɴ ${prefix}ᴍᴀᴋᴇʀᴍᴇɴᴜ                                 

         _*<OWNER MENU + />*_

° 式 ⃟🪶 ${prefix}bc *Text*
° 式 ⃟🪶 ${prefix}bc2 *Text*
° 式 ⃟🪶 ${prefix}bctext *Text*
° 式 ⃟🪶 ${prefix}bcgc *Text*
° 式 ⃟🪶 ${prefix}setnamebot *Text*
° 式 ⃟🪶 ${prefix}setbiobot *Text*
° 式 ⃟🪶 ${prefix}setppbot *text*
° 式 ⃟🪶 ${prefix}demoteall
° 式 ⃟🪶 ${prefix}promoteall
° 式 ⃟🪶 ${prefix}fullkick`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${ownername} || 2022_*`, buttons: [{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀⏣' }, type: 1 },{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿⏍' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break

//━━━━[ Feature Group ]━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Type :\n${prefix}welcome on to enable\n${prefix}welcome off to disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('```welcome is enable !!```')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully enable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('```welcome has been off before !!```')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully disable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antilink on to enable\n${prefix}antilink off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply('```Antilink is enable !!```')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully enable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antivirtex on to enable\n${prefix}antivirtex off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply('```Antivirtex is enable !!```')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully enable the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'groupopen':
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successful opening group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'groupclose':
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successfully closing the group\`\`\` *${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgroup':
case 'link':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: mek })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you become admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, @${mentioned[0].split('@')[0]} You become admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
//━━━━[ fullkick ]━━━━//

case 'Fullkick':
           
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)            
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupRemove(from, members_id) 
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to not be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you are not an admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Lower : @${mentioned[0].split('@')[0]} Become a member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'sc':
case 'script':
case 'scriptbot':
case 'sourcode':
case 'sourcodebot':
menu = `Pase por aquí y no se olvide de suscribirse, dar me gusta, comentar, compartir .
${command} seguirá actualizándose, así que pásate para que no te lo pierdas
que pronto este bot estara publico lo subire a youtube Ten pendiente :D
https://youtube.com/channel/UCcnWMxH0nUbArCCkqubUeHA`
reply(menu)
break

case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Who wants to add ??')
if (args[0].startsWith('08')) return reply('Use country code bro')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Failed to add target, maybe because in private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag the target you want to kick !");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Success in Changing the Group Name to\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Successfully Changed Group Description\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setppgroup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Send or tag an image with the caption ${prefix}setpp`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'kontag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Utilizar${prefix}kontag @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'kontak':
if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Utilizar${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Group :* @${groupMetadata.owner.split('@')[0]}\n*Number of admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Enable' : 'Disable'}\n*AntiLink :* ${isAntiLink ? 'Enable' : 'Disable'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgroup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Successfully reset group link')
break
case 'enline':
case 'online':
case 'listonine':
case 'listaenlinea':
case 'enlinea':                
                  if (!isGroup) return reply(`Solo para grupos`)
                  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                  let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
                  Dhani.sendMessage(from, '*Lista de usuarios en linea*:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
                  quoted: mek,
                  contextInfo: { mentionedJid: online }
                  })
                  break
case 'tagme':
if (!isGroup) return reply(mess.only.group)
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
Dhani.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee... , the bot will leave the group')
}, 0)
break

//━━━━[ Feature TextMaker ]━━━━//
case 'magma':
     if (args.length < 1) return reply('text?')
     mag = body.slice(6)
     magbuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/magma?text=${mag}&apikey=apirey`)
     Dhani.sendMessage(from, magbuf, image, )
     break
case 'hallowen':
     if (args.length < 1) return reply('text?')
     ha = body.slice(9)
     habuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/hallowen-text?text=${ha}&apikey=apirey`)
     Dhani.sendMessage(from, habuf, image, )
     break
case 'neonlight':
     if (args.length < 1) return reply('text?')
     ne = body.slice(10)
     hane = await getBuffer(`https://api.reysekha.xyz/api/textpro/neon-light?text=${ne}&apikey=apirey`)
     Dhani.sendMessage(from, hane, image, )
     break
case 'broken':
     if (args.length < 1) return reply('text?')
     bro = body.slice(7)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/broken-glass?text=${bro}&apikey=apirey`)
     Dhani.sendMessage(from, brobef, image, )
     break
case 'artpaper':
     if (args.length < 1) return reply('text?')
     art = body.slice(9)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/art-papper?text=${art}&apikey=apirey`)
     Dhani.sendMessage(from, brobef, image, )
     break


//━━━━[ Feature Downloader ]━━━━//

case 'ytmp3':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_audio is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
ytmp3 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp4, audio, )
break
case 'ytmp4':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_video is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=NisaaCantik`)
ytmp4 = await getBuffer(anu.result.url)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktoknowm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktoknowm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.nowatermark)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktokwm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.video_URL.vid_wm)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break

//━━━━[ Feature Sticker ]━━━━//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`𝙀𝙣𝙫𝙞𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix}sticker\n𝙙𝙪𝙧𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙙𝙚 𝙫𝙞𝙙𝙚𝙤 1-9 𝙨𝙚𝙜 ‼️`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'here'})
fs.unlinkSync(ran)
})
break

//━━━━[ Feature Owner ]━━━━//

case 'bc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('The text?')
anu = await Dhani.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝙈𝙀𝙉𝙐'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙊𝙒𝙉𝙀𝙍'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '𝘉 𝘳 𝘰 𝘢 𝘥 𝘤 𝘢 𝘴 𝘵',
buttons: buttonss,
headerType: 1
}
await Dhani.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgi})
}
reply(`Broadcast Success`)
break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('text?')
anu100 = await Dhani.chats.all()
if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc100 = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Dhani.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
reply('Broadcast Success')
} else {
for (let _ of anu100) {
Dhani.sendMessage(_.jid, 
{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
"footerText": `*_© ${ownername} || 2022_*\n*_${waktu}_*`,
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "𝙈𝙀𝙉𝙐"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Broadcast Success')
}
break
case 'bctext':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, bc, image, { caption: `[ BROADCAST IMAGE ]\n\n${body.slice(4)}` })
}
reply('Broadcast Success')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}\n\n*_BROADCAST_*`)
}
reply('Broadcast Success')
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Dhani.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Success broadcast group')
}
break
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Dhani.chats.all()
Dhani.setMaxListeners(25)
for (let _ of anu) {
Dhani.deleteChat(_.jid)
}
reply('Successfully delete all chat')
break
case 'setnamebot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Text?')
namebot = body.slice(11)
Dhani.updateProfileName(namebot)
reply(`Success in changing the name to *${body.slice(11)}*`)
break
case 'setbiobot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('text?')
bio = body.slice(10)
Dhani.setStatus(`${bio}`)
reply(`Success changing bio to *${body.slice(10)}*`)
break
case 'setppbot':
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await Dhani.downloadAndSaveMediaMessage(enmediau)
await Dhani.updateProfilePicture(botNumber, mediau)
reply('_Successfully changing bot profile photo')
break

//━━━━[ Feature Other ]━━━━//

case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nResponde in ${latensie.toFixed(4)} segundos 💬`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Ownernya ${botname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('*_that`s my owner_*')
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply(`Donde esta la url bro?`)
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
case 'd':
case 'del':
case 'delete':
Dhani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'rules':
menu = `*_RULES BOT_*

1.No envíe spam a los bots.
Sanciones: *Block*

2.No llames a los bots.
Sanciones: *Block*

3.No explote el bot.
Sanciones: *Block permanente*

Si entiende las reglas, por favor escriba *${prefix}menu* Para empezar!

──「 *${botname}* 」──`
fakeitem(menu)
break

//━━━━[totag ]━━━━//

case 'totag':
case 'tag':
	if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`Responde a una image/documento/gif/sticker/audio/video con ${prefix + comando}`)
}
break

//━━━━[ pregunta ]━━━━//

case 'pregunta':
if (!isGroup) return reply(mess.only.group) 
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco','Nunca',]
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply('Y la pregunta?')
reply(answer)
break

//━━━━[ rankgay ]━━━━//

case 'rankgay':
	if (!isGroup) return reply(mess.only.group)
  
  if (args.length < 1) return Dhani.sendMessage(from, 'Escribe el nombre', text, {
quoted: mek
  })
  teks = body.slice(13)
  Dhani.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
  hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  break

//━━━━[ notificacion ]━━━━//
case 'notif':

	if (!isGroupAdmins) return reply(mess.only.admin)
	Dhani.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
	group = await Dhani.groupMetadata(from);
	member = group['participants']
	jids = [];
	member.map(async adm => {
	  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
	})
	options = {
	  text: teks,
	  contextInfo: {
	mentionedJid: jids
	  },
	  quoted: mek
	}
	await Dhani.sendMessage(from, options, text)
	break

//━━━━[ Link wa.me ]━━━━//
    case 'wa.me':
	case 'wame':
	Dhani.updatePresence(from, Presence.composing)
	options = {
	text: `Link WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
	contextInfo: {
	  mentionedJid: [sender]
	}
	  }
	  Dhani.sendMessage(from, options, text, {
	quoted: mek
	  })
	  break

//━━━━[ chatprank ]━━━━//

	case 'chatprank':
		Dhani.updatePresence(from, Presence.composing)
		if (!isGroup) return reply(mess.only.group)		
		if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}chatprank p/unten`)
		tels = body.slice(11)
		var teks1 = tels.split("/")[0];
		var teks2 = tels.split("/")[1];
		hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
		Dhani.sendMessage(from, hasil, text, {
		  quoted: mek
		})
	  	break
		  
//━━━━[ Bot ]━━━━//

		case 'bot':
			if (args.length < 1) return reply(`Bot ${pushname}`)
			teks = body.slice(5)
			try { 
			anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
			if (anu.error) return reply('No lo se')
			reply(anu.jawaban)
			} catch {
			  reply(mess.ferr)
			}
			break  

 //━━━━[ chiste ]━━━━//

        case 'chiste':
	   if (!isGroup) return reply(mess.only.group)
	   respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
	   answer = respuesta[Math.floor(Math.random() * respuesta.length)]
	   reply(answer)
	   break

 //━━━━[ fake ]━━━━//

case 'fake':
	if (!isGroup) return reply(mess.only.group)	
	if (args.length < 1) return reply(`✳️ *Uso del comamdo* :\n${prefix}fake @tag=msj=msjbot\n\n📌 *Ejemplo* : \n${prefix}fake @tagmember=hola=hola que hace`)
	var gh = body.slice(7)
	
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	var replace = gh.split("=")[0];
	var target = gh.split("=")[1];
	var bot = gh.split("=")[2];
	Dhani.sendMessage(from, `${bot}`, text, {
	  quoted: {
	key: {
	  fromMe: false, participant: `${mentioned}`, ...(from ? {
	remoteJid: from
	  }: {})
	}, message: {
	  conversation: `${target}`
	}}})
	  
	break

//━━━━[ piedra papel o tijeras ]━━━━//

case 'suit':
case 'ppt':
	if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply(`✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix + command}* papel`)
			  if (args[0] === 'tijera' ) {
				gunting = [
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Papel*\n├╼Ganaste🎊\n└──────────────",
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Piedra*\n├╼Perdiste F 🙂\n└──────────────",
				"┌──────────────\n├╼Tu *Tijera*\n├╼JackBot *Tijera*\n├╼Empate 😏\n└──────────────"
				]
				gun = gunting[Math.floor(Math.random() * gunting.length)]
				reply(gun)
				} else if (args[0] === 'papel') {
				ker = [
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Piedra*\n├╼Ganaste🎉\n└──────────────",
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Tijera*\n├╼Perdiste 😎\n└──────────────",
				"┌──────────────\n├╼Tu *Papel*\n├╼JackBot *Papel*\n├╼Empate 😏\n└──────────────"
				]
				kertas = ker[Math.floor(Math.random() * ker.length)]
				reply(kertas)
				} else if (args[0] === 'piedra') {
				bat = [
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Tijera*\n├╼Ganaste🎊\n└──────────────",
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Papel*\n├╼Te gane jsjs 😎\n└──────────────",
				"┌──────────────\n├╼Tu *Piedra*\n├╼JackBot *Piedra*\n├╼Empate 😏\n└──────────────"
				]
				batu = bat[Math.floor(Math.random() * bat.length)]
				reply(batu)
				} else {
				reply('✳️ Seleccione piedra/papel/tijera')
				}
break

//━━━━[ top5 ]━━━━//

case 'top5':

	          if (!isGroup) return reply(mess.only.group)
          if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
          member = []
          top5 = args.join(' ')
          const p1 = groupMembers
          const p2 = groupMembers
          const p3 = groupMembers
          const p4 = groupMembers
          const p5 = groupMembers
          const o1 = p1[Math.floor(Math.random() * p1.length)]
          const o2 = p2[Math.floor(Math.random() * p2.length)]
          const o3 = p3[Math.floor(Math.random() * p3.length)]
          const o4 = p4[Math.floor(Math.random() * p4.length)]
          const o5 = p5[Math.floor(Math.random() * p5.length)]
          teks = `
*Atencion estos son los 5*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

//━━━━[ SHIP ]━━━━//

case 'shipping':
    if (!isGroup) return reply(mess.only.group)
			ds = []
			jdii = groupMembers
			koss = groupMembers
			akuu = jdii[Math.floor(Math.random() * jdii.length)]
			 diaa = koss[Math.floor(Math.random() * koss.length)]
			teks = `*La pareja del dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
			jds.push(akuu.jid)
			jds.push(diaa.jid)
			mentions(teks, jds, true)
			break

//━━━━[ random ]━━━━//

case 'random':
	if (!isGroup) return reply(mess.only.group)	
			jds = []
			 jdii = groupMembers
			 diaa = jdii[Math.floor(Math.random() * jdii.length)]
			teks = `✅ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
			jds.push(diaa.jid)
			mentions(teks, jds, true)
			break

	case 'attp':
			if (!isGroup) return reply(mess.only.group)	
			if (args.length < 1) return reply('▢ Ejemplo de uso : /attp Hola')
			reply ('▢ Espera un momento.')
			attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
			Dhani.sendMessage(from, attp2, sticker, {quoted: mek})
			break
			
	case 'sticktag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*cita el sticker para convertirlo en mencion*`)
}
break

case 'sexo':
if (!isGroup) return reply(mess.only.group)
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Mielda anoche @${akuu.jid.split('@')[0]} y @${diaa.jid.split('@')[0]} estaban cogiendo`
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
case 'bonito':
if (!isGroup) return reply(mess.only.group)
membr = []
const da = groupMembers
const db = groupMembers
const dc = da[Math.floor(Math.random() * da.length)]
const dd = db[Math.floor(Math.random() * db.length)]
teks = `*Lo mas bonito aqui es :* @${dc.jid.split('@')[0]}`
membr.push(dc.jid)
mentions(teks, membr, true)
break
case 'homosexual':
if (!isGroup) return reply(mess.only.group)
membr = []
const ca = groupMembers
const cb = groupMembers
const cc = ca[Math.floor(Math.random() * ca.length)]
const cd = cb[Math.floor(Math.random() * cb.length)]
teks = `*el mas homosexual aqui es :* @${cc.jid.split('@')[0]}`
membr.push(cc.jid)
mentions(teks, membr, true)
break
case 'gay':
if (!isGroup) return reply(mess.only.group)
membr = []
const aa = groupMembers
const ab = groupMembers
const ac = aa[Math.floor(Math.random() * aa.length)]
const ad = ab[Math.floor(Math.random() * ab.length)]
teks = `*Lo más gay aquí es:* @${ac.jid.split('@')[0]}`
membr.push(ac.jid)
mentions(teks, membr, true)
break

	


//━━━━[ TEXTPROME ]━━━━//

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlightglitch':
case 'neonlightonbrickwall':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Where's the text?*\nExample : ${prefix + command} your name`) 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=NisaaCantik&text=${q}`)
buffer = await getBuffer(anu.result)
text1 = `Here you are done`
text2 = `Bot By ${ownername}`
but = [
{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO ALLMENU'},type:1},
{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}
]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break
case '8bit':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'halloween3':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Example : ${prefix + command} Name1&Name2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
buffer = await getBuffer(anu.result)
Dhani.sendMessage(from, buffer, image, {caption: `*𝗕𝘆 :JᴀᴄᴋSɪᴛᴏ-⃫⃟冰⁩他妈的*`, quoted: mek})
break								
case 'ppcouple':
case 'ppcp':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=NisaaCantik`)
boy = await getBuffer(anu.result.male)
girl = await getBuffer(anu.result.female)
text2 = `Bot By ${ownername}`
but = [{buttonId:`${prefix+command}`,buttonText:{displayText:'NEXT ➡️'},type:1}]
sendButImage(from, `este es el chico `, text2, boy, but, {quoted: mek})
sendButImage(from, `esta es la chica `, text2, girl, but, {quoted: mek})
break

//━━━━[ Feature Wallpapers ]━━━━//

case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`) 
text1 = `Click Next To Go To The Next ${command}`
text2 = `Bot By ${ownername}`
but = [{buttonId:`${prefix+command}`,buttonText:{displayText:'NEXT ➡️'},type:1}]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break

case 'commad':
case 'comandos':
if (!isGroup) return reply(mess.only.group)
listMsg = {
buttonText: '𝗠𝗘𝗡𝗨', 
footerText: `*© ${ownername}*`,
description: `Eyy qlq @${senderr.split('@')[0]}, Por favor seleccione el menú aquí`,
sections: [
{
"title": `${waktu} - ${date} WIB`,
rows: [
{
"title": "[🌱] Group Menu",
"description": `Muestra una lista de características especiales del grupo`,
"rowId": `${prefix}grupmenu`
},
{
"title": "[🗃️] Download Menu",
"description": `Muestra una lista de características para descargas`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "[☕] Maker Menu",
"description": `Muestra una lista de funciones para crear un logotipo.`,
"rowId": `${prefix}makermenu`
},
{
"title": "[💻] Scrip Menu",
"description": `Muestra como tener este bot`,
"rowId": `${prefix}sc`
},
{
"title": "[🤖] redes Menu",
"description": `Muestra una lista de las redes sociales de Jack`,
"rowId": `${prefix}redes`
},
{
"title": "[🔎] Search Menu",
"description": `Muestra una lista de características de busquedas`,
"rowId": `${prefix}searchmenu`
},
{
"title": "[⛩️‍] Anime Menu",
"description": `Mostrando la lista de características del anime`,
"rowId": `${prefix}animemenu`
},
{
"title": "[🔞️] Nsfw Menu",
"description": `Muestra la lista de características de Nsfw 18+`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "[📚] Rules",
"description": `Reglas del bot`,
"rowId": `${prefix}reglas`
},
{
"title": "[🎮] Game Menu",
"description": `Mostrar juego/lista de juegos`,
"rowId": `${prefix}gamemenu`
},
{
"title": "[📚] Sticker menu",
"description": `Mostrar la lista de características de stickers`,
"rowId": `${prefix}stickermenu`
},
{
"title": "[📱️] Other Menu",
"description": `Muestra una lista de otras características`,
"rowId": `${prefix}othermenu`
},
{
"title": "[🧸] Creator",
"description": `Visualización de la lista de funciones especiales del propietario`,
"rowId": `${prefix}ownermenu`
}
]
}],
listType: 1
}
Dhani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break

case 'grupmenu':
case 'groupmenu':
if (!isGroup) return reply(mess.only.group)
menu =
`*「 GRUP MENU 」*

➢${prefix}antilink _on / off_
➢${prefix}antivirtex _on / off_
➢${prefix}welcome _on / off_
➢${prefix}nsfw _on / off_
➢${prefix}group _buka / tutup_
➢${prefix}promote _@tag / reply_
➢${prefix}demote _@tag / reply_
➢${prefix}add _628xx_
➢${prefix}kick _@tag / reply_
➢${prefix}setpp _reply_
➢${prefix}setdesc _teks_
➢${prefix}setname _teks_
➢${prefix}hidetag _teks_
➢${prefix}kontak _628x|Nama_
➢${prefix}kontag _@tag|Nama_
➢${prefix}sticktag _Reply Sticker_
➢${prefix}totag _Reply Image_
➢${prefix}promoteall
➢${prefix}demoteall
➢${prefix}listadmin
➢${prefix}grupowner
➢${prefix}linkgrup
➢${prefix}infogrup
➢${prefix}listonline
➢${prefix}resetlinkgrup`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
if (!isGroup) return reply(mess.only.group)
menu =
`*「 DOWNLOAD MENU 」*

➢${prefix}ytmp3 _Link_
➢${prefix}ytmp4 _Link_
➢${prefix}tiktok _Link_
➢${prefix}tiktokwm _Link_
➢${prefix}tiktoknowm _Link_
➢${prefix}tiktokaudio _Link_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
if (!isGroup) return reply(mess.only.group)
menu =
`*「 MAKER MENU 」*

➢${prefix}blackpink _Teks_
➢${prefix}halloween _Teks_
➢${prefix}halloween2 _Teks_
➢${prefix}3dgradient _Teks_
➢${prefix}naturalleaves _Teks_
➢${prefix}dropwater _Teks_
➢${prefix}blood _Teks_
➢${prefix}blood2 _Teks_
➢${prefix}snow _Teks_
➢${prefix}cloud _Teks_
➢${prefix}neondevil _Teks_
➢${prefix}neon _Teks_
➢${prefix}glowingneonlight _Teks_
➢${prefix}neonlightglitch _Teks_
➢${prefix}neonlightonbrickwall _Teks_
➢${prefix}neonlight _Teks_
➢${prefix}neonlight2 _Teks_
➢${prefix}neonlight3 _Teks_
➢${prefix}greenneon _Teks_
➢${prefix}toxic _Teks_
➢${prefix}matrix _Teks_
➢${prefix}thunder _Teks_
➢${prefix}thunder2 _Teks_
➢${prefix}bokeh _Teks_
➢${prefix}carbontext _Teks_
➢${prefix}christmas _Teks_
➢${prefix}breakwall _Teks_
➢${prefix}roadwarning _Teks_
➢${prefix}engraved3d _Teks_
➢${prefix}embossed _Teks_
➢${prefix}3dstone _Teks_
➢${prefix}futuristic _Teks_
➢${prefix}sketch _Teks_
➢${prefix}bluecircuit _Teks_
➢${prefix}space _Teks_
➢${prefix}magmahot _Teks_
➢${prefix}artpapercut _Teks_
➢${prefix}3dluxurygold _Teks_
➢${prefix}robotr2d2 _Teks_
➢${prefix}harrypotter _Teks_
➢${prefix}glitch3 _Teks_
➢${prefix}greenhorror _Teks_
➢${prefix}horrorgift _Teks_
➢${prefix}erodedmetal _Teks_
➢${prefix}3dglowingmetal _Teks_
➢${prefix}blackmetal _Teks_
➢${prefix}bluemetal _Teks_
➢${prefix}shynimetal _Teks_
➢${prefix}rustymetal _Teks_
➢${prefix}metalpurple _Teks_
➢${prefix}metalrainbow _Teks_
➢${prefix}metaldarkgold _Teks_
➢${prefix}colorfullluxurymetal _Teks_
➢${prefix}glossybluemetal _Teks_
➢${prefix}3dglossymetal _Teks_
➢${prefix}3ddeepseametal _Teks_
➢${prefix}leddisplayscreen _Teks_
➢${prefix}metallic _Teks_
➢${prefix}glossymetallic _Teks_
➢${prefix}christmastree _Teks_
➢${prefix}sparklesmerrychristmas _Teks_
➢${prefix}countryflag3d _Teks_
➢${prefix}americanflag3d _Teks_
➢${prefix}3dscfi _Teks_
➢${prefix}3drainbow _Teks_
➢${prefix}3dwaterpipe _Teks_
➢${prefix}3dchrome _Teks_
➢${prefix}bluegem _Teks_
➢${prefix}purplegem _Teks_
➢${prefix}pinkcandy _Teks_
➢${prefix}transformer _Teks_
➢${prefix}berry _Teks_
➢${prefix}brokenglass _Teks_
➢${prefix}3drealistic _Teks_
➢${prefix}3dunderwater _Teks_
➢${prefix}writeinsandsummerbeach _Teks_
➢${prefix}sandwriting _Teks_
➢${prefix}foilballoon _Teks_
➢${prefix}3dglue _Teks_
➢${prefix}1917 _Teks_
➢${prefix}minion _Teks_
➢${prefix}doubleexposure _Teks_
➢${prefix}holographic3d _Teks_
➢${prefix}deluxegold _Teks_
➢${prefix}deluxesilver _Teks_
➢${prefix}glossycarbon _Teks_
➢${prefix}fabric _Teks_
➢${prefix}xmascards3d _Teks_
➢${prefix}wicker _Teks_
➢${prefix}fireworksparkle _Teks_
➢${prefix}skeleton _Teks_
➢${prefix}ultragloss _Teks_
➢${prefix}denim _Teks_
➢${prefix}decorategreen _Teks_
➢${prefix}peridot _Teks_
➢${prefix}rock _Teks_
➢${prefix}lava _Teks_
➢${prefix}rainbowequalizer _Teks_
➢${prefix}purpleglass _Teks_
➢${prefix}decorativeglass _Teks_
➢${prefix}chocolatecake _Teks_
➢${prefix}strawberry _Teks_
➢${prefix}koifish _Teks_
➢${prefix}bread _Teks_
➢${prefix}3dbox _Teks_
➢${prefix}freeadvancedglow _Teks_
➢${prefix}honey _Teks_
➢${prefix}marble _Teks_
➢${prefix}marbleslabs _Teks_
➢${prefix}icecold _Teks_
➢${prefix}fruitjuice _Teks_
➢${prefix}abstragold _Teks_
➢${prefix}biscuit _Teks_
➢${prefix}bagel _Teks_
➢${prefix}wood _Teks_
➢${prefix}hexagolden _Teks_
➢${prefix}wonderfulgraffitiart _Teks_
➢${prefix}8bit _Teks1&Teks2_
➢${prefix}pornhub _Teks1&Teks2_
➢${prefix}glitch _Teks1&Teks2_
➢${prefix}glitch2 _Teks1&Teks2_
➢${prefix}layered _Teks1&Teks2_
➢${prefix}3dsteel _Teks1&Teks2_
➢${prefix}realistic _Teks1&Teks2_
➢${prefix}lionlogo _Teks1&Teks2_
➢${prefix}ninjalogo _Teks1&Teks2_
➢${prefix}wolf _Teks1&Teks2_
➢${prefix}wolf2 _Teks1&Teks2_
➢${prefix}halloween3 _Teks1&Teks2_
➢${prefix}marvel _Teks1&Teks2_
➢${prefix}marvel2 _Teks1&Teks2_
➢${prefix}cinematichorror _Teks1&Teks2_
➢${prefix}avengers _Teks1&Teks2_
➢${prefix}graffiti3 _Teks1&Teks2_
➢${prefix}captainamerica _Teks1&Teks2_
➢${prefix}girlneko _Teks1&Teks2_
➢${prefix}sadboy _Teks1&Teks2_
➢${prefix}makerkaneki _Teks1&Teks2_
➢${prefix}rem _Teks1&Teks2_
➢${prefix}lolimaker _Teks1&Teks2_
➢${prefix}gura _Teks1&Teks2_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'sc':
case 'script':
case 'sourcode':
if (!isGroup) return reply(mess.only.group)
menu =(`Pase por aquí y no se olvide de suscribirse, dar me gusta, comentar, compartir .
sc seguirá actualizándose, así que pásate para que no te lo pierdas
que pronto este bot estara publico lo subire a youtube Ten pendiente :D
https://youtube.com/channel/UCcnWMxH0nUbArCCkqubUeHA`)
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'redes':
case 're':
if (!isGroup) return reply(mess.only.group)
menu =(`╔─━━━░★░━━━─╗
AGRADECIMIENTO
╚─━━━━░★░━━━─╝

➢Si quieres agradecer o realizar una donación por utilizar mi bot puedes hacerlo, suscribiendote a mi canal y siguiendome en mis redes:

★·.·¯·.·★ *YOUTUBE* ★·.·¯·.·★
➢https://www.youtube.com/channel/UCTfpv-KmckjC1rwPKqw_t1w

★·.·¯·.·★ *INSTAGRAM* ★·.·´¯·.·★
➢https://www.instagram.com/jack_paymon/?hl=es

★·.·¯·.·★ *PAYPAL* ★·.·¯·.·★
➢https://www.paypal.me/jacksito23`)
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

///Anime Menu aun no///

///Anime nfws aun no//

case 'rules':
case 'reglas':
if (!isGroup) return reply(mess.only.group)
menu =(`ೋ❀❀ೋ═══ ═══ೋ❀❀ೋ
➪✰ 𝓡𝓮𝓰𝓵𝓪𝓼 𝓓𝓮𝓵 𝓑𝓸𝓽 ✰➪
ೋ❀❀ೋ═══ ═══ೋ❀❀ೋ
¤ = ~ ~ ◉ ~~ = ¤.•♫•♬•♬•♫•.
𝑅𝑒𝓈𝓅𝑒𝓉𝒶 𝓁𝒶𝓈 𝓇𝑒𝑔𝓁𝒶𝓈  𝑜 𝒷𝒶𝓃
.•♫•♬•♬•♫•.¤ = ~ ~ ◉ ~~ = ¤

▀▄▀▄▀▄  JackiV7 ▄▀▄▀▄▀


*-No hacer spam de comandos+*

Usar los comando cada 5 segundos
De lo contrario el bot se cashea y se apaga automáticamente

*-No estar enviando link del grupos al bot para que se una*

Hablare al creador y el lo une a tu grupo

*-No llamar al bot, ni al creador*

Si lo haces, seras baneado del bot y bloqueado

*-GRUPO DE WHATSAPP DE AYUDA*
https://chat.whatsapp.com/Jv3BQj0TgZl4wyrslvM3f
`)
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'gamemenu':
if (!isGroup) return reply(mess.only.group)
menu =
`*「 JUEGOS MENU 」*

➢${prefix}top5 
➢${prefix}shipping
➢${prefix}ppt 
➢${prefix}random
➢${prefix}pregunta
➢${prefix}rankgay
➢${prefix}gay
➢${prefix}truth
➢${prefix}casino
➢${prefix}dare
➢${prefix}rate
➢${prefix}sexo
➢${prefix}bonito
➢${prefix}homosexual
➢${prefix}fake
➢${prefix}chiste
➢${prefix}chatprank`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu': 
if (!isGroup) return reply(mess.only.group)
menu =
`*「 STICKER MENU 」*

➢${prefix}sticker *Reply Image* 
➢${prefix}toimg *Reply Sticker*
➢${prefix}attp 
➢${prefix}take`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'othermenu': 
if (!isGroup) return reply(mess.only.group)
menu =
`*「 OTHER MENU 」*

➢${prefix}Bot 
➢${prefix}donar
➢${prefix}owner 
➢${prefix}runtime
➢${prefix}speed
➢${prefix}sider
➢${prefix}hnum
➢${prefix}bin`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'ownermenu':
if (!isGroup) return reply(mess.only.group)
menu =
`*「 OWNER MENU 」*

➢${prefix}bc *Text* 
➢${prefix}bc2 *Text*
➢${prefix}bctext *Text* 
➢${prefix}bcgc *Text*
➢${prefix}setnamebot *Text*
➢${prefix}setbiobot *Text*
➢${prefix}setppbot *text*
➢${prefix}demoteall
➢${prefix}promoteall
➢${prefix}fullkick`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${waktu}_*`, buttons: [{ buttonId: `${prefix}comandos`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\n𝗦𝗢𝗬 𝗛𝗢𝗠𝗢𝗦𝗘𝗫𝗨𝗔𝗟 >.<' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'abcde':
if (!isGroup) return reply(mess.only.group)
reply('𝗧𝗼𝗱𝗼𝘀 𝘀𝗮𝗯𝗲𝗺𝗼𝘀 𝗾𝘂𝗲 𝘀𝗼𝘀 𝗛𝗼𝗺𝗼𝘀𝗲𝘅𝘂𝗮𝗹 𝗮𝗺𝗶𝗴𝗼:(\n𝗡𝗼 𝘁𝗲 𝗮𝘃𝗲𝗿𝗴𝘂̈𝗲𝗻𝗰𝗲𝘀 𝗱𝗲\n𝗲𝘀𝗼 𝗧𝗾𝗺❤️')
break


///Casino//

case 'slot':
case 'casino':
if (!isGroup) return reply(mess.only.group)
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
if (somtoyy== '🍌 : 🍌 : 🍌') {
bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `¿Juega de nuevo? Haga click abajo  `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍒 : 🍒 : 🍒') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `¿Juega de nuevo? Haga click abajo  `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🔔 : 🔔 : 🔔') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `¿Juega de nuevo? Haga click abajo  `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍐 : 🍐 : 🍐') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `¿Juega de nuevo? Haga click abajo  `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍇 : 🍇 : 🍇') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `¿Juega de nuevo? Haga click abajo  `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else {
ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXDDDD`, `¿Juega de nuevo? Haga click abajo `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
}
break



case 'truth':
if (!isGroup) return reply(mess.only.group)
const trut =['¿Alguna vez te ha gustado alguien? ¿cuánto tiempo?','Si puedes o si quieres, ¿de qué gc/fuera de gc te harías amigo? (quizás diferente/del mismo género)','¿Cuál es tu mayor miedo?','¿Alguna vez te ha gustado alguien y te has sentido ¿Te gusta esa persona? ¿La razón?', '¿Qué te hace feliz cuando estás triste?', '¿Alguna vez has tenido un amor unilateral? si es asi quien? ¿Cómo se siente hermano?','¿Alguna vez has estado con alguien más?','¿Qué es lo más temido?','¿Quién es la persona más influyente en tu vida','¿Qué cosa orgullosa obtuviste este año?' ,'¿Quién es la persona que puede hacerte muy feliz?','¿Quién te ha hecho muy feliz alguna vez?','(para los musulmanes) ¿alguna vez has dejado de orar todo el día?','¿Quién es más cercano a tu tipo ideal de pareja? aquí','¿Con quién te gusta jugar?','¿Alguna vez has rechazado a la gente? ¿Cuál es la razón por qué?', 'Nombra un incidente que te hizo sentir herido y que aún recuerdas', '¿Qué logros has obtenido este año?', '¿Cuál fue tu peor hábito en la escuela? ']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Dhani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
if (!isGroup) return reply(mess.only.group)
const dare =['Envía un mensaje a tu ex y dile "Todavía me gustas", "Llama a la persona que te gusta o a tu novia ahora y envíale un mensaje de texto al jugador", "Papa a un miembro del grupo", "Di "ERES TAN HERMOSA, NO MIENTE" a los chicos. ',' ss llamada reciente de whatsapp', 'soltar emoticón "??💨" cada vez que escriba en gc/pc durante 1 día', 'enviar nota de voz diciendo ¿puedo llamarte bebé?', 'soltar cita/cita de canción, luego etiquete al miembro apropiado haga esa cita','utilice la foto de Sule durante 3 días','escriba en el idioma local las 24 horas','cambie el nombre a "Soy un hijo de lucinta luna" durante 5 horas','chatee al contacto wa en el orden de acuerdo con su % batre, continúe diciéndole "Tengo suerte de tenerte", "bromea con tu ex y di" te amo, vuelve por favor", "graba la voz y lee la sura al-kautsar", "di "Estoy enamorado de ti, ¿quieres ser mi novia o no? "A la última persona del sexo opuesto con la que chateaste (enviar por wa/teléfono), espera a que responda, si es así, déjalo aquí', 'menciona ¡tu tipo de novio!', 'snap/post boyfriend/crush photo',' gritó incoherentemente y luego envía usando vn aquí','toca tu cara y envíasela a uno de tus amigos','ki Remueve tu foto con la leyenda, soy un niño adoptado', 'grita con palabras duras mientras vn y luego envíalo aquí', 'grita "anjimm gabutt anjimmm" frente a tu casa', 'cambia el nombre a "BOWO" para 24 horas', 'Pretenderse poseído, por ejemplo: poseído por maung, poseído por saltamontes, poseído por refrigerador, etc. ']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Dhani.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
break
case 'rate':
if (!isGroup) return reply(mess.only.group)
rate = body.slice(1)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
Dhani.sendMessage(from, '*Pregunta :* '+rate+'\n*Respuesta :* '+ te+'%', text, { quoted: mek })
break
          case 'sider':
             if (!isGroupAdmins) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await Dhani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `• 𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧 𝗘𝗦𝗧𝗔 𝗦𝗜𝗘𝗡𝗗𝗢 𝗟𝗘𝗜𝗗𝗢 𝗣𝗢𝗥:\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `• 𝗘𝗡𝗧𝗥𝗘𝗚𝗔𝗗𝗢 𝗔 :\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Cita un mensaje del bot!')
}
             break


//𝘤𝘢𝘴𝘦𝘴 𝘉𝘺 𝘍𝘹𝘛𝘦𝘢𝘮 𝘐𝘮`𝘍𝘦𝘭𝘪𝘹
					
case 'hnum':
	if (args.length === 0) return reply(`⬡ HACK NUM\n\n¿Como usar?\n\nEjemplo : ${prefix + command} <numero sin el + y sin espacios>`)
	qe = args.join(' ')
bufx = await fetchJson(`http://apilayer.net/api/validate?access_key=0037494de576f1341eb310a420dd5cb0&number=${qe}&country_code=&format=1`)
fx = `             <𝖨𝖭𝖥𝖮 𝖭𝖴𝖬\>
			
き⃟🐥 Numero : ${bufx.number}
き⃟🐥 Formato Local : ${bufx.local_format}
き⃟🐥 Formato Internacional : ${bufx.international_format}
き⃟🐥 Prefijo : ${bufx.country_prefix}
き⃟🐥 Codigo de Pais : ${bufx.country_code}
き⃟🐥 Pais : ${bufx.country_name}
き⃟🐥 Localización : ${bufx.location}
き⃟🐥 Compañía : ${bufx.carrier}
き⃟🐥 Linea : ${bufx.line_type}`
Dhani.sendMessage (from, fx, MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
break
	
case 'bin':
qe = args.join(' ')
bufx = await fetchJson(`https://lookup.binlist.net/${qe}`)
fx = `            <BIN\>
		  
き⃟🐥 Bin : ${qe}
き⃟🐥 Tipo : ${bufx.scheme}
き⃟🐥 Marca : ${bufx.brand}
き⃟🐥 Tipo : ${bufx.type}
き⃟🐥 Pais : ${bufx.country.emoji} ${bufx.country.name}
き⃟🐥 Longitud ${bufx.country.latitude}
き⃟🐥 Latitud ${bufx.country.longitude}
き⃟🐥 Banco : ${bufx.bank.name}`
Dhani.sendMessage (from, fx, MessageType.text, {quoted: ftoko, "forwardingScore": 9999, "isForwarded": true})
break			 
			 
			 
//━━━━[ End of Features ]━━━━//

default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
