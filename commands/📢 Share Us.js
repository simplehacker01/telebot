/*CMD
  command: 📢 Share Us
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var linktxt = "Telegram Very Fast SMS Bomber Bot  @IND_SMS_Bomber_Bot"
var linktxtwhtsp = "Telegram Very Fast SMS Bomber Bot  https://t.me/IND_SMS_Bomber_Bot"
var button = [
  [
    {
      title: "↗️ Share On Telegram",
      url: "https://t.me/share/url?text=" + linktxt + ""
    }
  ],
  [
    {
      title: "🈯️ Share On WhatsApp",
      url: "https://api.whatsapp.com/send?text=" + linktxtwhtsp + ""
    }
  ]
]
Bot.sendInlineKeyboard(button, "*ℹ️ Select A Platform For Sharing\n Made By: @Unknown_Reason*")
