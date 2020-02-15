const { prefix } = require('../config');

module.exports = async (client, message) => {

    if (!message.guild) return;

    const badWords = ["update", "1.15", "1.14", "when will"];
    if( badWords.some(word => message.content.includes(word)) ) {
        message.reply("2 Things\n1 Patience is a virtue\n2 You should really read <#429296499927547914>");
      }

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const newPrefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : prefix;

    const getPrefix = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(getPrefix)) return message.channel.send(`My prefix in this guild is \`${prefix}\``);

    if (message.author.bot) return;
    if (message.content.indexOf(newPrefix) !== 0) return;

    const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    cmd.run(client, message, args);
};
