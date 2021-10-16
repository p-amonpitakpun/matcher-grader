export default {
    name: "messageCreate",
    once: false,
    exec: (client, msg) => {
        console.log(
            `msg recieved from ${msg.author.username} in ${msg.channel.name}: ${msg.content}`
        );
    },
};
