require('dotenv').config()

import { Client, MessageEmbed } from 'discord.js';
const client = new Client();
import { prefix } from './config.json';


client.on("ready", () => {
console.log('Initialization Complete!')
console.log(`prefix set to: ${prefix}`)
})

//help menu//

client.on("message", msg => {
if (msg.content === `${prefix}noob`) {
    const helpMenuEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Menu')
	.setURL('https://github.com/HeyEyh/WeeCrystlab')
	.setDescription('Need Help?\nWe all need help some time or the other\nDont worry, you are not alone')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('hi', 'returna', true)
	.setTimestamp()
	.setFooter('From the scientists at WeeCrystlabs', 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(helpMenuEmbed)
}
else if (msg.content === `${prefix}hi`){
   msg.channel.send('hello bruv');
}
})

client.on("message", msg =>{
if(msg.content === `${prefix}spam`){
	
	msg.channel.send(`spam is against the rules buddy`)
}
})


client.login(process.env.BOT_TOKEN)


