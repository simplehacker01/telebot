/*CMD
  command: 💣 SMS Bomber
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

Api.sendPhoto({
  photo: "https://telegra.ph/file/ec3c75e1cc304ce6344e0.jpg",
  reply_markup: {
    inline_keyboard: [
      // line 1
      [
        { text: "💣 SMS BOMBER {Server 1}", web_app: { url: "https://termux.xyz/sms-bomber"} }
      ], [
        { text: "💣 SMS BOMBER {Server 2}", web_app: { url: "https://bombersmm.xyz/"} }
      ], [
        { text: "💣 SMS BOMBER {Server 3}", web_app: { url: "https://Mix-Bomber.UnknownReason.in"} }
      ]
      
      
      
    ]
  }
  
  

    
  
  
  
  
  
})
