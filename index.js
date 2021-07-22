require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();
const { prefix } = require('./config.json')


client.on("ready", () => {
console.log('Initialization Complete!')
})

client.on("message", msg => {
if (msg.content === 'noob') {
    const helpMenuEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Menu')
	.setURL('https://github.com/HeyEyh/WeeCrystlab')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Need Help?\nWe all need help some time or the other\nDont worry, you are not alone')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(helpMenuEmbed)
}
else if (msg.content === 'hi homie'){
   msg.channel.send('hello bruv');
}
})


client.login(process.env.BOT_TOKEN)


