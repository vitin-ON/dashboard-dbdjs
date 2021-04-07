const dbdExpress = require("dbd.express")

const dbd = require("dbd.js")
const bot = new dbd.Bot({
sharding: true,
shardAmount: 2,
token: "TOKEN",
prefix: ['prefix']
})



const Dashboard = new dbdExpress(bot)
Dashboard.API({
  port: "3000",
  useSecureProtocol:true,
  authorizationKey: "Bearer root@1234",
 headers:{
  'Authorization': 'Bearer root@1234',
  'Content-Type': "application/json"
}
})

Dashboard.createUI() 

bot.command({
  name: "criarconta",
  code: `
  $djsEval[client.Express.addAccounts({
username: "usuário",
password: "senha"
})]
  `
})
