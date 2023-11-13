const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('websites')
		.setDescription('All official DragonForgeNEXUS websites'),
	async execute(interaction) {
		await interaction.reply({ content: '# Websites', embeds: [Command_List] });
	},
};

const Command_List = new EmbedBuilder()
	.setTitle('Websites')
	.addFields(
		{ name: 'Main', value: 'https://dragonforgenexus.xyz' },
		{ name: 'Blog', value: 'https://blog.dragonforgenexus.xyz' },
		{ name: 'Nightly', value: 'https://nightly.dragonforgenexus.xyz' },
	);