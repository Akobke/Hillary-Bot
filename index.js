const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'hillary_the_chat_wench',
		password: process.env.TWITCH_TOKEN
	},
	channels: [ '1ron_chef' ]
});

const Dclient = new Client({ intents: [GatewayIntentBits.Guilds] });

Dclient.once('ready', () => {
	console.log('Ready!');
});

Dclient.login(process.env.DISCORD_TOKEN);

client.connect();

const amessage = 702691367922696313;

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
	console.log(tags.username)
	console.log(message)
	if((tags.username === '1ron_chef') && (message.toLowerCase() === 'test')){
		client.say(channel, "It works my dude")
		Dclient.channels.fetch('702691367922696313').then(channel=>channel.send(`https://www.twitch.tv/1ron_chef`))
	}
});

