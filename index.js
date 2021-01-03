const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client();


client.once('ready', () =>{
    console.log('online!');
})

try{
    client.login('Nzk1MzQ1ODgwMjU2ODcyNDY5.X_IBkg.KIwJKx97ymnnnyEXjx76umHDp5A');
}catch{

}



