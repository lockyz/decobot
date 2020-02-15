const { RichEmbed } = require('discord.js');
const { embedColor, prefix, discord, owner } = require('../config');
const { version } = require('../package.json');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    const infoEmbed = new RichEmbed()
        .setTitle(client.user.username)
        .setDescription(`Hello I am Deco Bot, I am here to help with any issues you may have. If you need help do ${prefix}help`)
        .setColor(embedColor)
        .addField('Bot Author', `<@${owner}>`)
        .addField('Bot Version', version)
        .setFooter('©2019 Lockyz Group');

    message.channel.send(infoEmbed);
};

exports.help = {
    name: 'info',
    aliases: ['botinfo'],
    description: 'View bot information.',
    usage: 'info'
};