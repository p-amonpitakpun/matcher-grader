import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import { readdirSync, readFile } from "fs";

import config from "./config.json";
import Events from "./events/index.js";

dotenv.config();

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

Events.map((event) => {
    if (event.once) {
        client.once(event.name, (...args) => event.exec(client, ...args));
        console.log(event);
    } else {
        client.on(event.name, (...args) => event.exec(client, ...args));
        console.log(event);
    }
});

client.login(process.env.TOKEN);
