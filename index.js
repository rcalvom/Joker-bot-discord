// https://discord.js.org/#/docs/main/stable/general/welcome
const Discord = require('discord.js');
const config = require('./config.json');


const bot = new Discord.Client();

const prefix = "J!";

bot.once('ready', () =>{
    console.log("Logged in as " + bot.user.tag + "!");
});

bot.on('message', function name(message) {
   if(message.author.bot) return;
   if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch(command){
        case "joke": {
            message.channel.send("prueba de tts.", {
                tts: true
            });
            break;
        }
        case "ping": {
            message.reply("Pong! La latencia es de " + (Date.now() - message.createdTimestamp) + "ms.");
            break;
        }
        default: {
            message.reply("El comando \"" + command + "\" no existe.");
            break;
        }
    }

});


bot.login(config.BOT_TOKEN);




