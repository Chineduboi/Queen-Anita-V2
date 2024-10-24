//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349169759221";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBYbHBSb29LalFOWDZLTE1pQWMwaXF2VEViZWNZQzhLYWYzcVd2T3NrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHpybUM4YUc2WXFXUThtRFVvSUpkR3NjcTZZbGZrdXNQOFlFMHdIVWVEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TlBkUWFuNVNoYjVienJxS21pemo1aVFlckpWeG9xLzFWTDUyM1pIKzJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZaTJYWHJ0d3V0Mk5xVGU1aERRTjgyZTRNSkxnUUg5UkZnZ2orNVFqN2pvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NKzJ1SDZRdkZOUHgzaHF0dnVjZDZtL1o5amZzdlpQc01pYkc2QWM1bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR6M0tDTXloTWorOWJYZTExejVCR21PaXBHWUJ5RjVrQVNHck9CZGlKRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0cxQ051SGZ4VHFwV2FRdWNvQW8xbklVcFo0VGxqbVhrRkw0K0QvRDEwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRoRnByNS9hMjlhUjZUeklzdlZqVTBNTFl6dUxFdzdnREJobEtzVzRrRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMrOGI3bFgySVRLSVgxSWozTk9EdVZPcHZkM2JGb3hUNWRJLzVCS1E0RktCUFlkcjFvb3BkQVlrV0pobnZrQ0QxekZyWGhzeFFsN3lRaU1TNDEyZEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6InV5MjZxL040L0M2MXJlMjl6a3BJc2lDeTcvSHJ3c0dMaC9MeVRDU3kvVnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBtWjh1S1FQUnhxOXpUZHdGcWVaN0EiLCJwaG9uZUlkIjoiYWY4YTI2ZmQtZmE5Yi00OTM4LTkwNzYtODc5NmI3ZjU5NmRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndYMEx4VEdTTnM4dEV6dUlEK3pGeDlkQTk3QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZjkvVm9zZnAzeXNpOFg2a2crdDJLaVNCb0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkJTTTZGVzIiLCJtZSI6eyJpZCI6IjIzNDkxNjk3NTkyMjE6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDb2FjaCBDaGkgQ2hpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbWk5YlVCRU1MKzZyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwVnZvVlZxdmptNnpYcmxUL1lpRmRwbVArcTdDYWpwV20xVGhwK3Y4ZXg0PSIsImFjY291bnRTaWduYXR1cmUiOiJlOVN5ZUJnVVhVam9rWkFzNExrWittQ2xnaUQ1MXk2YmsrWW55ZlF4MHhrRm9mZHZLRzJWWUEzVXgvZVIvVTltZzRqU09rZElVbEx6dVMwTlhyM1FEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2NxY3FBMEdoVGYvbWVEUk4yeG9XY0xSYU1ucEJUYUlVY2MvSEhCejUxQWMrb3hYSlBycFJGT1NzL05HVW1YRVhCcGZNNGJDdkdPK3A4Yy9CS2I2QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY5NzU5MjIxOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVZiNkZWYXI0NXVzMTY1VS8ySWhYYVpqL3F1d21vNlZwdFU0YWZyL0hzZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTgwNjE1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQS3EifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
