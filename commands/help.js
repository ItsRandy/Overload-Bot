const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`kick`', 'Kicks a member from your server via mention or ID')
        .addField('`ban`', 'Bans a member from your server via mention or ID')
        .addField('`clear`', 'Purges messages')
        .addField('`warn`', 'Warn user are id mention (Coming soon)')
        .addField('`un-ban`', 'Un-bans someone from a server')
        .addField('`lockdown`', 'Locks down a chat stops people from typing their')
        .addField('`report`', 'Reports a member(MUST HAVE A CHAT IN YOUR SERVER CALLED ``reports``)')
        .addField('`Discord Community Server`', 'Link: https://discord.gg/MSMqMR8')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`meme`', 'Generates a random meme (use at own risk) ')
        .addField('`avatar`', 'Generates Your Profile Picture')
        .addField('`8ball`', 'Generates a reply to your message')
        .addField('`bot-info`', 'Gets the bots info')
        .addField('`Discord Community Server`', 'Link: https://discord.gg/MSMqMR8')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`ping`', 'Get the bot\'s API ping')
        .addField('`weather`', 'Checks weather forecast for provided location')
        .addField('`poll`', 'Generates a poll where you can react to it')
        .addField('`slowmode`', ' Edits Are adds a slowmode to the chat you type it in')
        .addField('`server`', 'Gets the server info')
        .addField('`User`', 'Gets the User info')
        .addField('`Discord Community Server`', 'Link: https://discord.gg/MSMqMR8')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
