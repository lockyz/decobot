const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    message.delete().catch(O_o=>{});
    var roll = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
  ]
    var randomAnswer = roll[Math.floor(Math.random() * roll.length)];
    let embed = new RichEmbed()
        .setAuthor('Dice Roll')
        .setColor(embedColor)
        .addField("Number:", `${randomAnswer}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setTimestamp();
        message.channel.send({ embed: embed });
        return;
};

exports.help = {
    name: 'roll',
    aliases: ['diceroll'],
    description: 'Roll a Standard 6-sided dice.',
    usage: 'roll'
};