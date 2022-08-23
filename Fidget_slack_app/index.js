
const { App } = require("@slack/bolt");


const app = new App({
    token: "lorem", //Find in the Oauth  & Permissions tab
    signingSecret: "ipsum", // Find in Basic Information Tab
    socketMode:true,
    appToken: "dolor" // Token from the App-level Token in Basic Info tab (give read and write scopes)
});

app.command("/square", async ({ command, ack, say }) => {
    try {
      await ack();
      let txt = command.text // The inputted parameters
      if(isNaN(txt)) {
          say(txt + " is not a number")
      } else {
          say(txt + " squared = " + (parseFloat(txt) * parseFloat(txt)))
      }
    } catch (error) {
      console.log("err")
      console.error(error);
    }
});

app.command("/hello", async ({ command, ack, say }) => {
    try {
        await ack();
        say("Hello! I hope you're having a wonderful day <3")
      } catch (error) {
        console.log("err")
        console.error(error);
      }
});


app.start(3000)
