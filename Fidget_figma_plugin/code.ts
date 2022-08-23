// This file holds the main code for the plugins. It has access to the *document*.

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

//gather all the file data & send to the plugin
let fileData: string[] = [getURL(), getFileName()];
figma.ui.postMessage(fileData);

// When we get a message from the UI (mostly using for debugging for now)
figma.ui.onmessage = msg => {
  
  // someone clicked "send to slack"
  if (msg.type === 'send-to-slack') {
    console.log("Sent to slack")
  }

  // someone clicked "Cancel"
  if (msg.type === 'cancel') {
    figma.closePlugin();
    console.log("Closed")
  }
  
};

function getURL() {
  let pageName = encodeURIComponent(figma.currentPage.parent.name) //encodes string so it can be part of the URL
  return "https://www.figma.com/file/" + figma.fileKey + "/" + pageName //build the URL
  // I had to enable enablePrivatePluginApi in manifest.json to access the key. Only works for private plugins...

}

function getFileName() {
  return figma.currentPage.parent.name
}
