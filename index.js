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
	.setDescription('Need Help?\nDont worry, you are not alone')
	.setThumbnail('https://github.com/HeyEyh/WeeCrystlab/raw/main/128x128.png')
	.addField('wee', '```diff\n- the default prefix\n```')
	.addField('noob', '```diff\n- displays this help menu\n```')
	.addField('hi','```diff\n- returns "hello"\n```')
	.setTimestamp()
	.setFooter('From the Scientists at WeeCrystlabs', 'https://github.com/HeyEyh/WeeCrystlab/raw/main/128x128.png');

msg.channel.send(helpMenuEmbed)
}
else if (msg.content === `${prefix}hi`){
   msg.channel.send('hello');
}
})

client.login(process.env.BOT_TOKEN)


