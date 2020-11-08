module.exports = {
  name: 'ping',
  description: "this is a ping command!",
  execute(message, args){
          const start = Date.now()
          message.channel.send("Pinging...").then(message => {
            const end = Date.now()
            message.edit(`:ping_pong: Pong! Took **${(end - start)}**ms!`)
          })
  }
}