
const { App } = require("@slack/bolt");


const app = new App({
    token: "xoxb-3916522946278-3925615234180-YBHsQA4RcbQX0Ko3rnRBPR5E", //Find in the Oauth  & Permissions tab
    signingSecret: "2939a9f7e2ccf5f05c30fd72c57f70ef", // Find in Basic Information Tab
    socketMode:true,
    appToken: "xapp-1-A03T54CJVRQ-3908722730455-46ff87d4b0ee0cc79e77a35a22af3dfc98cec9b615a6fc506e20c32a210e38d3" // Token from the App-level Token that we created
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
