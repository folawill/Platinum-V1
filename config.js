//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2349021204279";
global.sudo = process.env.SUDO || "2349021204279";
global.owner = process.env.OWNER_NUMBER || "2349021204279";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR04yWGNrbTdiZjRHQnpFelN5WUM5TFpBSmVYUld3ZEQ1Vlo4bUhSWlJXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiak1nN3lJSDhPU1NvU3JNQnBhTVR0NXljOEdMVTZvemNzeG9Cc3dlN2drTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QURpZk5zMStZN1o4b0NrZ0hxWTdSYUhiOWF1d3BlamxrM0I3QnJGdTFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbnRQR0d1dmNDNXI2bllNU0taT0djdHhOZDlrZUs5Mm5XK2RjWDNERUMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBbU1NVWYxK3U1S1M0bDVOc3BNY293RU05MHY0V0lLUWROejMrREhUbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVweThzdEZBeTlpZGYyd2tVOFNLa0lPZWZ1bm10UWZKcFExemFoakZ1ajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZjaU5tY0JaV001RkVxR3hTOVZ5bW85Wm9NYm9VWWc0TzdDbjB6VmtIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFWVEh1dG1WQ011NEIyeHVpTThHL2xDV3BkZW40SzdSaTh0ZStRTXdGST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ0MVphSlREVUNiVEVUbGdVN1lJMzUvTWU4TXJpRnFsQmFDQUxDakN0TTVEOWtUb09IVjBQczZRNjd1YkYxRjlJR2dJemxheVYwODVRMjR6YWJSWml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJQMEFENDJaWnpiL1orQklqSEZCZEJUaVhEQnNoREFVN0g5TVk3V3duZXdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwdXdndXUxYlNBYU1XVDV1WWxTeXFRIiwicGhvbmVJZCI6IjA4NzU3MTcwLWI4YWMtNDRmOS05ZDQ2LWEyMzhmNmJlYWU1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaU80YWU5dHZ0VkZYN3U5dXBzMXh2WCs2YjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWNpQ1ArcmlNeVBKRTh2M25kZUJYb0J0VlFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZEUjZRNkMyIiwibWUiOnsiaWQiOiIyMzQ5MDIxMjA0Mjc5OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNvYWNoIEZvbGFrZSBXaWxsaWFtcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT09KalBnREVKcXFqTHdHR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGxzUS9lbHR2Y1JYbmxJb0hTdCtvUVl5VGFuTDFUN04rYkErNHBtRXFqOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOGlROTJhbi83eWIxYU1iNFJJK3UzZEtTbDhEZFdxamQzL2kzUjZPT0VqeFJGeEJzTWRlL3dPSWVLQ2RDVmhWYlRmMnc2b2U4eDdxQTUxelpFL2dmQXc9PSIsImRldmljZVNpZ25hdHVyZSI6ImIzSmVkNUMza0o3VGdMcjduWGI2NHZBRVdPS0JPbmRlc09vQXBvNFNPUUhnZW1aN0ZGMkEzZjkwTnJ3QUcrVmRrQXUvSld5UmFWVVhSamtDZ2JpUGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMTIwNDI3OTo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlSmJFUDNwYmIzRVY1NVNLQjByZnFFR01rMnB5OVUremZtd1B1S1poS28vIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NjQzODc5fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Powered by CoachFolake™",
  author: process.env.PACK_AUTHER || "Powered by CoachFolake™",
  packname: process.env.PACK_NAME || "Powered by CoachFolake™",
  botname: process.env.BOT_NAME || "CoachFolake™",
  ownername: process.env.OWNER_NAME || "CoachFolake™",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
