const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    message.delete().catch(O_o=>{});
    let member = message.mentions.members.first() || message.member,
    user = member.user;
    let embed = new RichEmbed()
      .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
      .setColor(embedColor)
      .setThumbnail(`${user.displayAvatarURL}`)
      .addField("ID:", `${user.id}`, true)
      .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
      .addField('Status:', user.presence.status, true)
      .addField("In Server", message.guild.name, true)
      .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
      .addField("Created:", user.createdAt, true)
      .addField("Joined:", member.joinedAt, true)
      .addField("Bot:", `${user.bot}`, true)
      .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
      .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();
      message.channel.send({ embed: embed });
      return;
};

exports.help = {
    name: 'userinfo',
    aliases: ['ui'],
    description: 'View User Information.',
    usage: 'userinfo {mention}'
};