module.exports = client => {
  let botStatus = [
    `SuperiorCAD take over the world`,
    "people do /help",
    `Over SkyTech Network`,
    `people look in the Sky`,
    `Me Growing`
]

    setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

    client.user.setUsername('SkyTech Designs'); // sets the bots name
    client.user.setStatus("online"); // sets the bots status
    
  console.log(`Hello ${client.user.username} is now online!`); // consoles logs this when bot is turned on
   
};
