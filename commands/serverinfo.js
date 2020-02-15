const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    message.delete().catch(O_o=>{});
		let embed = new RichEmbed()
		.setAuthor(message.guild.name)
		.setColor(embedColor)
		.setThumbnail(`${message.guild.iconURL}`)
		.addField("ID:", `${message.guild.id}`, true)
        .addField('Total Members:', message.guild.memberCount, true)
        .addField('Server Region:', message.guild.region, true)
        .addField('Created:', message.guild.createdAt, true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
		.setTimestamp();
		message.channel.send({ embed: embed });
		return;
};

exports.help = {
    name: 'serverinfo',
    aliases: ['si'],
    description: 'View server information.',
    usage: 'serverinfo'
};