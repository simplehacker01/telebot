/*CMD
  command: /admin
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





var button = [
  [
    {
      title: " Bot Owner 👤 ",
      url: "tg://settings"
    }

  ],

 [
    {
      title: " Developer 🧑‍💻 ",
      url: "https://t.me/+2C83L6iB6XoyZWI9"
    }

  ],

[
    {
      title: " Back 🔙 ",
      url: "https://telegram.me/IND_SMS_Bomber_Bot?start=IFRlcmkgY2hvb2RpeW9uIGtp"
    }

  ],


]






Bot.sendInlineKeyboard(button, "*Bot Owner* "+
    user.first_name +"👋")





