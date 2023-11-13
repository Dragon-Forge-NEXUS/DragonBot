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
	.setDescription('DragonForge Bot Commands')
	.addFields(
		{ name: 'Utility', value: '\u200B' },
		{ name: 'help', value: '`/help`\nShows this Message' },
		{ name: 'rules', value: '`/rules`\nShows server rules' },
		{ name: 'server', value: '`/server`\nShows server info' },
		{ name: 'user', value: '`/user`\nShows user info' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Fun', value: '\u200B' },
		{ name: 'crazy?', value: '`/crazy`\nI was crazy once...' },
		{ name: 'user', value: '`/ping`\nJust a simple "ping"-"pong" message' },
		{ name: 'Youtube Most Recent Post', value: '`/mostrecentpost`\nGet the most recent post from a youtube channel\nyou must use a handle (eg: `@DragonForgeG`)' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Have a feature suggestion?', value: '`/crazy`\nI was crazy once...' },
	);