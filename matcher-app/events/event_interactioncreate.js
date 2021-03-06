export default {
    name: "interactionCreate",
    once: false,
    exec: async (client, interaction) => {
        if (!interaction.isCommand()) return;

        const { commandName } = interaction;

        if (commandName === "ping") {
            await interaction.reply("Pong!");
        } else if (commandName === "server") {
            await interaction.reply(
                `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
            );
        } else if (commandName === "user") {
            await interaction.reply(
                `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
            );
        }
    },
};
