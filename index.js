require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();
const { prefix } = require('./config.json')

//log display options
client.on("ready", () => {
console.log('Initialization Complete!')
console.log(`prefix set to: ${prefix}`)
})


client.on("message", msg => {
if (msg.content === `${prefix}noob`) {
    const helpMenuEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Menu')
	.setDescription('List of Commands')
	.setURL('https://github.com/HeyEyh/WeeCrystlab')
	.setThumbnail('https://imgur.com/1d9hSsf.png')
	.addField('wee', '```diff\n- the default prefix\n```')
	.addField('noob', '```diff\n- displays this help menu\n```')
	.addField('server details', '```diff\n- returns all available server details like: name, total members```')
	.addField('server basic', '```diff\n- returns basic server name and total members```')
	.addField('hi','```diff\n- returns "hello"\n```')
	.setTimestamp()
	.setFooter('From the Scientists at WeeCrystlabs', 'https://i.imgur.com/1d9hSsf.png');

msg.channel.send(helpMenuEmbed)
}
else if (msg.content === `${prefix}demand rating`){
   msg.channel.send('-profile');
}
else if (msg.content === `${prefix}server details`) {
	const serverDetailsNotbasic = new Discord.MessageEmbed()
	.addField('Server Name',`${msg.guild.name}`)
	.addField('Total Members', `${msg.guild.memberCount}`)
	.addField('Created At', `${msg.guild.createdAt}`)
	.addField('Region', `${msg.guild.region}`)
	.setFooter(`Owner of this guild: ${msg.guild.owner}`)

	msg.channel.send(serverDetailsNotbasic);
}

else if (msg.content === `${prefix}server`) {

	const serverDetailsbasic = new Discord.MessageEmbed()
	.addField(`Server Name`,`${msg.guild.name}`)
	.addField('Total Members', `${msg.guild.memberCount}`)
	
	msg.channel.send(serverDetailsbasic);
}
})

client.login(process.env.BOT_TOKEN)


