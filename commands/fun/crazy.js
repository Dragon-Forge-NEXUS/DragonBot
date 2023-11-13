const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crazy')
		.setDescription('I was crazy once...'),
	async execute(interaction) {
		await interaction.reply('I was crazy once, they locked me in a rat, a rubber rat, a rubber rat with rooms, and rooms make me crazy.');
		await interaction.followUp('https://tenor.com/view/tadc-pomni-crazy-digital-circus-the-amazing-digital-circus-gif-16494262442880588512');
	},
};