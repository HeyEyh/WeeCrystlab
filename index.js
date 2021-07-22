require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();
const { prefix } = require('./config.json')


client.on("ready", () => {
console.log('Initialization Complete!')
console.log(`prefix set to: ${prefix}`)
})

//help menu//

client.on("message", msg => {
if (msg.content === `${prefix}noob`) {
    const helpMenuEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Menu')
	.setURL('https://github.com/HeyEyh/WeeCrystlab')
	.setDescription('Need Help?\nWe all need help some time or the other\nDont worry, you are not alone')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('wee', 'the default prefix', true)
	.addField('noob', 'displays this help menu',true)
	.addField('hi','returns ```hello bruv```')
	.setTimestamp()
	.setFooter('From the scientists at WeeCrystlabs', 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(helpMenuEmbed)
}
else if (msg.content === `${prefix}hi`){
   msg.channel.send('hello bruv');
}
})

client.login(process.env.BOT_TOKEN)


