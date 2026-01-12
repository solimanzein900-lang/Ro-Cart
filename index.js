const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');
require('dotenv').config();

// Add MessageContent intent so bot can read messages
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    if (message.content !== "!prices") return;

    const embed = new EmbedBuilder()  
        .setTitle("📦 Game Price Menu")  
        .setDescription("Click the button to view the full price list for that game.\n\nWe can also get you any item in any game even if it's not listed.")  
        .setColor("#57F287");  

    const row = new ActionRowBuilder().addComponents(  
        new ButtonBuilder().setCustomId("gag").setLabel("Grow a Garden").setStyle(ButtonStyle.Success),  
        new ButtonBuilder().setCustomId("pvb").setLabel("Plants V Brainrots").setStyle(ButtonStyle.Success),  
        new ButtonBuilder().setCustomId("sab").setLabel("Steal A Brainrot").setStyle(ButtonStyle.Success),  
        new ButtonBuilder().setCustomId("mm2").setLabel("Murder Mystery 2").setStyle(ButtonStyle.Success)  
    );  

    await message.channel.send({ embeds: [embed], components: [row] });
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isButton()) return;

    const priceLists = {  
        gag: `## Grow a garden updated market!!

 🎁 Cheapest Pets on the market

🛒  Fast and Reliable Delivery

 <:headlesshorseman:1427271915940347904> Headless Horseman= 4$ USD or 1500 <:robux:1451660351643844691>
<:elephant:143501679924137178> Elephant = $5 USD or 1800 <:robux:1451660351643844691>
<:tiger:1427271972647338006> Tiger = 4$ USD or 1100 <:robux:1451660351643844691>
<:goldengoose:1420149676111433788> Golden Goose = 4$ USD or 1100 <:robux:1451660351643844691>
<:lobster:1420175961156096051> Lobster Thermidor = 4$ USD or 1100 <:robux:1451660351643844691>
<:fff:1420164117309952070> French Fry Ferret = 4$ USD or 1100 <:robux:1451660351643844691>
<:corruptedkitsune:1419962813337833552> Corrupted Kitsune = 4$ USD or 1100 <:robux:1451660351643844691>
<:Kitsune:1419961957251022929> Kitsune = 15$ USD or 5000 <:robux:1451660351643844691>
<:spino:1420369485667242015> Spinosaurus = 7$ USD or 2000 <:robux:1451660351643844691>
<:fennec_fox:1419960193252458606> Fennec Fox = 7$ USD or 2000 <:robux:1451660351643844691>
<:gag_mimicoctopus:1419966427632369755> Mimic Octopus = 5$ USD or 1500 <:robux:1451660351643844691>
<:Disco:1419962897572040764> Disco Bee = 8$ USD or 2800 <:robux:1451660351643844691>
<:Butterfly:1419962996884639785> Butterfly = 7$ USD or 2000 <:robux:1451660351643844691>
<:gag_queenbee:1419966294534393917> Queen Bee = 4$ USD or 1100 <:robux:1451660351643844691>
<:Raccoon:1419962353809887254> Raccoon = 10$ USD or 3000 <:robux:1451660351643844691>
<:rubyoctopus:1442183157502972074> Ruby Squid = 4$ USD or 1100 <:robux:1451660351643844691>

 🪙 1,000 Tokens = $14 USD or
🪙 10,000 Tokens = $100 USD

 We can get you any item, just make a ticket and ask for the price

To buy create a ticket <#1434980325142036530>`,

        pvb: `## Plants vs Brainrots updated market!! #

 🎁   Cheapest Pets on the market

🛒   Fast and Reliable Delivery

 <:kinglimone:1430263097196675072> 5 King Limone - $3 USD or 1200 <:robux:1451660351643844691>
<:kinglimone:1430263097196675072> 10 King Limone - $5 USD or 2000 <:robux:1451660351643844691>
<:kinglimone:1430263097196675072> 35 King Limone - $16 USD or 5500 <:robux:1451660351643844691>
💠 Random DPS

 <:mango:1425129793967493224> 5 Mango - $2 USD or 800 <:robux:1451660351643844691>
<:mango:1425129793967493224> 10 Mango - $3 USD or 1500 <:robux:1451660351643844691>
<:mango:1425129793967493224> 35 Mango - $7 USD or 3000 <:robux:1451660351643844691>
💠 Random DPS

 <:shroombinoo:1425097607981695058> 5 Shroombino - $2 USD or 600 <:robux:1451660351643844691>
<:shroombinoo:1425097607981695058> 10 Shroombino - $3 USD or 800 <:robux:1451660351643844691>
<:shroombinoo:1425097607981695058> 35 Shroombino - $6 USD or 2000 <:robux:1451660351643844691>
💠 Random DPS

<:tomatrio:1425127902759878666> 10 Tomatrio - $2 USD or 300 <:robux:1451660351643844691>
<:tomatrio:1425127902759878666> 35 Tomatrio - $4 USD or 750 <:robux:1451660351643844691>
💠 Random DPS

 <:mrcarrot:1425129345176961175> 15 Mr Carrot - $2 USD or 800 <:robux:1451660351643844691>
<:mrcarrot:1425129345176961175> 35 Mr Carrot - $4 USD or 1500 <:robux:1451660351643844691>
💠 Random DPS

 🌲8-11M DPS Hollow Tree - $15 USD or 4000 <:robux:1451660351643844691>
⭐ Star Fruit - $1 USD or 300 <:robux:1451660351643844691>

 We can get you any item in-game - just create a ticket and ask for the price

Create a ticket <#1434980325142036530> to buy`,

        sab: `## Steal A Brainrot updated market!!!

• 🛒 Fast and Reliable Delivery
• 🔗 200+ proofs & vouches

Strawberry Elephant = $900 USD
Meowl = $690 USD
Dragon Cannelloni = $95 USD
Garama & Madundung = $25 USD
Burguro & Fryuro = $30 USD
Ketupat Kepat = $11 USD
Ketchuru & Musturu = $12 USD
Esok Sekolah = $6 USD
Orcaledon = $6 USD
La Secret = $17 USD
Reinito Sleighito = $25 USD
Cooki & Milki = $32 USD
Fragrama & Chocrama = $30 USD
Los Puggies = $6 USD
Money Reindeer = $5 USD
Spaghetti Tualetti = $12 USD
Spooky & Pumpky = $24

 We can get you any brainrot even if it's not listed - just create a ticket and ask for the price

We can also get you any of these items with traits so they can make more money`,

        mm2: `## Murder Mystery 2 updated market!!!

 • 🛒 Fast and Reliable Delivery
• 🔗 200+ Proofs and Vouches

Gingerscope = $198 USD
Traveler's Set = $170 USD
Luger = $5 USD
Celestial Set = $70 USD
Bauble = $19 USD
Candy = $7 USD
IceBreaker = $7 USD
Heartblade = $6 USD
Watergun = $6 USD
IcePiercer = $11 USD
Harvester = $12 USD
Dark Set = $32 USD
Vampire Set = $40 USD
Rainbow Set = $12 USD
Sakura Set = $30 USD
Borealis Set = $6 USD
Corrupt = $16 USD
Candleflame = $4 USD
ElderWood Set = $7 USD
Ornament = $2 USD
Bat = $6 USD
Candy Set = $7 USD

We can get you any weapon - just ask for the price. We also sell half sets`
    };

    await interaction.reply({ content: priceLists[interaction.customId], ephemeral: true });
});

client.login(process.env.TOKEN);
