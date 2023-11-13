const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('parrot')
		.setDescription('BURRRRRRRR'),
	async execute(interaction) {
		// Generate a random number between 1 and 100
		const randomNumber = Math.floor(Math.random() * 100) + 1;

		// Set the URL based on the random number
		const urlToSend = randomNumber === 1
			? 'https://tenor.com/view/party-parrot-sunglasses-dance-dancing-gif-13439693'
			: 'https://tenor.com/view/parrot-party-dance-gif-13267006';

		// Send the selected URL
		await interaction.reply(urlToSend);
	},
};