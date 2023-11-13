const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('the server rules'),
	async execute(interaction) {
		await interaction.reply({ content: '# Rules', embeds: [Rules], ephemeral: true });
		await interaction.followUp({ content: '# NSFW', embeds: [NSFW], ephemeral: true });
		await interaction.followUp({ content: '# VENTING AND SUPPORT', embeds: [VENTING_AND_SUPPORT], ephemeral: true });
	},
};

const Rules = new EmbedBuilder()
	.setTitle('Rules')
	.addFields(
		{ name: '#1 | Be respectful', value: 'No hate or drama is tolerated in this server, regardless of your opinion on them. This means absolutely no racism, sexism, homophobia, transphobia etc. Treat others with the respect you would like to be treated with.' },
		{ name: '#2 | No Spamming', value: 'Spamming is prohibited and if you are caught spamming, whether that be through text, images, links, text images, etc. you will face disciplinary action.' },
		{ name: '#3 | Server Raiding/Trolling', value: 'Mentions of raiding this or any other server will result in disciplinary action. Trolling in this server will result in disciplinary action.' },
		{ name: '#4 | No Religious/Political Talk', value: 'This server is not a political or religious debating server. Keep all discussions based on these two topics and relating topics out of this server.' },
		{ name: '#5 | Language', value: 'This is an English only server!' },
		{ name: '#6 | Server Names', value: 'Server Nicknames may not contain emotes, must be in standard discord font only, and no special characters are permitted (all parts of a name must be found on a standard English keyboard). Additionally names must abide by other server rules including, but not limited to English language only. A notice will be given if your name does not comply with the rules, and failure to comply with said notice will result in a warning on your account and your name being changed by a moderator.' },
		{ name: '#7 | Slurs & Swearing', value: 'This Server disallows any slur that can be found offensive to a race/group/religion. Regardless of intent in posting it, whether it is "reclaimed" or not, etc, they are banned from use. This includes media with slurs as well, joke or not. Swearing definitely is allowed however, just be respectful of other folks.' },
		{ name: '#8 | Media Guidelines', value: 'All media must be posted in its appropriate channel. (I.e. memes should only be posted in #memes, etc.) This applies to reaction GIFs/images, video links, etc.' },
		{ name: '#9 | Alt Accounts', value: 'You are allowed to have one alt account in the server. Alt accounts MUST be disclosed to a moderator at the time of joining, and the bio of the account must include the name of the owner/main account (i.e. This account belongs to user MainAccount#1234). Any alt account that does not meet both of these requirements will be banned, and the owner will face disciplinary action.' },
		{ name: '#10 | Follow the Discord Community Guidelines and TOS', value: 'You can find them here:\nhttps://discordapp.com/guidelines\n-This includes rules for being respectful, honest, and keeping a proper community on Discord. All of these rules are enforced here.\nhttps://discord.com/terms\n-This encompasses a lot, but in brief, no third-party software modifications to Discord (like BetterDiscord and other developer packages), Copyright disputes, and use of Discord\'s software that you agree to when you install the program. Again, ALL of these rules are enforced here. READ THEM.' },
		{ name: '#1 | Be respectful', value: 'Rules function AS INTENDED. Just because you bend the wording of a rule into a pretzel and don\'t break the specific RAW (Rule As Written) does not mean you didn\'t break the RAI (Rule As Intended). Rules can be subject to interpretation and if the Admins and Mods believe you broke a rule as it is INTENDED to function, you can expect the same consequences. All rules can apply to profiles as well as communications.' },
	);

const NSFW = new EmbedBuilder()
	.setTitle('NSFW')
	.addFields(
		{ name: '#1', value: 'NSFW content is only allowed in the form of a creative medium.' },
		{ name: '#2', value: 'Please be aware that there will likely/will be MINORS in this server. What does this mean?\nAbsolutely NO hardcore sexual content (porn is prohibited).\nSlight suggestiveness MUST be placed under a spoiler with a CLEAR warning.' },
		{ name: '#3', value: 'Slight gore (small amounts of blood, scars, small wounds) is fine.' },
		{ name: '#4', value: 'Major gore (large open wounds, lots of blood, inner body parts, bloody battles etc) MUST be put under a spoiler with a CLEAR warning.' },
	);

const VENTING_AND_SUPPORT = new EmbedBuilder()
	.setTitle('VENTING AND SUPPORT')
	.setDescription('Everyone has tough times. Be it a bad day you wish to rant about, or an issue that has been with you for a while you wish to get support on, then there are many resources that can help.\nI would like to state that while this server will allow light venting and ranting about light issues, no one here is a professional.\nWe cannot help you with major issues. We can offer support and a shoulder to lean on, but please realise we are just other people stuck behind a screen.\nSo, while this server offers ⁠community-support for those who have friends and such here and wish to rant with a shoulder to lean on and people to listen, please remember that, once again, no one here is a professional and that there are other resources available.\nIf you are having a hard time in life, be it traumatic, mental health related, etc, please try and seek professional help!\nIf you are having any thoughts of ||suicide or self-harm||, PLEASE CONTACT YOUR LOCAL HOTLINE!\nIf you do not know your local hotline, GOOGLE ||"suicide hotline"|| AND YOU WILL BE IMMEDIATELY TOLD.');