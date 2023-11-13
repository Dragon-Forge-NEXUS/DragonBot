const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { yt_api_key } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mostrecentpost')
		.setDescription('Get the most recent post from a YouTube channel')
		.addStringOption(option =>
			option.setName('handle')
				.setDescription('Handle of the channel (e.g., @DragonForgeG)')),
	async execute(interaction) {
		const channelHandle = interaction.options.getString('handle');

		// Remove '@' from the handle
		const username = channelHandle.slice(1);

		// Make a request to the YouTube Data API to search for the channel
		const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${username}&order=relevance&key=${yt_api_key}`;

		try {
			const response = await axios.get(apiUrl);

			// Get the channel ID from the search results
			const channelId = response.data.items[0].snippet.channelId;

			// Use the channel ID to get the most recent video
			const videoUrl = await getMostRecentVideo(channelId);
			await interaction.reply(videoUrl);
		}
		catch (error) {
			console.error('Error fetching YouTube data:', error);
			await interaction.reply('Error fetching YouTube data.');
		}
	},
};

async function getMostRecentVideo(channelId) {
	const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=1&key=${yt_api_key}`;
	const response = await axios.get(apiUrl);
	const videoId = response.data.items[0].id.videoId;
	return `https://www.youtube.com/watch?v=${videoId}`;
}