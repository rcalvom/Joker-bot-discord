// https://discord.js.org/#/docs/main/stable/general/welcome
const Discord = require('discord.js');
const config = require('./config.json');
const database = require('./database');


const bot = new Discord.Client();

const prefix = "J!";

bot.once('ready', () =>{
    console.log("Logged in as " + bot.user.tag + "!");
    console.log(database.RandomJoke());
});

bot.on('message', function name(message) {
    if(message.author.bot) return;
    
    if(!message.content.startsWith(prefix)){
        if(Math.floor(Math.random() * 20) <= 0 ) {
            message.react('🤡').catch(console.error);
        }
        return;
    } 

    let commandBody = message.content.slice(prefix.length);
    let args = commandBody.split(' ');
    let command = args.shift().toLowerCase();

    switch(command){
        case "joke": {
            const joke = database.RandomJoke();
            message.channel.send(joke);
            message.react('🤡').catch(console.error);
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




