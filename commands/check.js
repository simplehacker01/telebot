/*CMD
  command: check
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

var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("/main")
  User.addToGroup("user")
}
if (user == "left") {
  Bot.sendMessage("*⚠️ YOU DIDN'T JOIN ALL CHANNEL⚠️*")
}
