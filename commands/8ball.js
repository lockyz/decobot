const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    message.delete().catch(O_o=>{});
    var roll = [
      "Yes",
      "No"
  ]
    const sayMessage = args.join(" ");
    if(!sayMessage) {
    return message.reply("You didn't ask a question")}
    var randomAnswer = roll[Math.floor(Math.random() * roll.length)];
    let embed = new RichEmbed()
    .setAuthor('8Ball')
    .setColor(embedColor)
    .addField("Question", sayMessage, true)
    .addField("Answer:", `${randomAnswer}`, true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    .setTimestamp();
    message.channel.send({ embed: embed });
    return;
};

exports.help = {
    name: '8ball',
    aliases: [],
    description: 'Answer a yes or no question',
    usage: '8ball {question}'
};