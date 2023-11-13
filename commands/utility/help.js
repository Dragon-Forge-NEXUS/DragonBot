const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('DragonBot Help'),
	async execute(interaction) {
		await interaction.reply({ content: '# Commands', embeds: [Command_List] });
	},
};

const Command_List = new EmbedBuilder()
	.setTitle('Commands')
	.setDescription('DragonBot Commands')
	.addFields(
		{ name: 'Utility', value: '\u200B' },
		{ name: 'Help', value: '`/help`\nSends this Message' },
		{ name: 'Rules', value: '`/rules`\nSends server rules' },
		{ name: 'Server', value: '`/server`\nSends server info' },
		{ name: 'User', value: '`/user`\nSends user info' },
		{ name: 'Websites', value: '`/websites`\nSends all official DragonForgeNEXUS websites' },
		{ name: 'Fun', value: '\u200B' },
		{ name: 'Crazy?', value: '`/crazy`\nI was crazy once...' },
		{ name: 'User', value: '`/ping`\nJust a simple "ping"-"pong" message' },
		{ name: 'Youtube Most Recent Post', value: '`/mostrecentpost`\nGet the most recent post from a youtube channel\nyou must use a handle (eg: `@DragonForgeG`)' },
		{ name: 'Parrot', value: '`/parrot`\nPARROT GO BURRR!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Have a feature suggestion?', value: 'Please click [here](https://github.com/Dragon-Forge-NEXUS/DragonBot/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=).' },
	);