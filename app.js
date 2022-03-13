const {Telegraf , Composer} = require('micro-bot')

// const bot = new Telegraf('5240687861:AAE7zJbfxnfmOyp8fTUWWmTgRHBQs2-Sofs')
const bot = new Composer()


bot.start((ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWelcome to Holycoin bot` , {
        reply_markup: {
            keyboard: [
                [{text: "🔥 Etherscan Contract"}, {text: "🌐 Website"}],
                [{text: "💌 Social Media"},{text: "💠 About"}],
                [{text: "🔗 Contract"}]
            ],
            resize_keyboard: true
        }
    })
})


bot.hears('🔥 Etherscan Contract',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id ,  `Address: \n0x70104c3cAc800C27F78EA7074D3f12Ecdd8A5D17 \n\nWeb Address: \nhttps://ropsten.etherscan.io/address/0x70104c3cAc800C27F78EA7074D3f12Ecdd8A5D17`)
})

bot.hears('🌐 Website',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Website: \nhttps://holycoin.exchange/`)
})

bot.hears('💌 Social Media',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Facebook: \nhttps://www.facebook.com/Holycoin-Holy-103989312250431/`)
})


bot.hears('💠 About',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Holycoin is a form of currency based on the ERC20 Token Standard which will be used in the given crowd sale, on top of Ethereum’s Smart Contract to eliminate counter-party risk and allow fast secure payments to investors.`)
})


bot.hears('🔗 Contract',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Email:\nholycoin1206@gmail.com \nPhone: \n1 (903) 244-2649`)
})


module.exports = bot

// bot.launch().then(()=>console.log('Bot Started')).catch((e)=>console.log(e))