import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import { readdirSync, readFile } from "fs";

import config from "./config.json";
import events from "./events/index.js";

import fs from "fs";

dotenv.config();

const secrets = {};

try {
    secrets.TOKEN =
        process.env.TOKEN ||
        fs.readFileSync("/run/secrets/TOKEN", "utf8") ||
        "";
} catch (err) {
    console.log("SECRETS: can't read secret files");
}

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

events.map((event) => {
    if (event.once) {
        client.once(event.name, (...args) => event.exec(client, ...args));
        console.log(event);
    } else {
        client.on(event.name, (...args) => event.exec(client, ...args));
        console.log(event);
    }
});

client.login(secrets.TOKEN);
