# Fidget

An app that sends a message from Figma to Slack.

Directions to get this running:

1. FIGMA PLUGIN
    - In Figma, Go to Plugins > Development > Manage plugins in development
    - Add plugin > Import plugin from manifest
    - Choose the manifest.json from the Fidget_figma_plugin file
    - Make sure the slack webhook URL in ui.html is still valid (you can generate a new one at https://api.slack.com/apps/A03T54CJVRQ/incoming-webhooks?)


2. SLACK APP
    - Run the slack app in vsCode w/ Node.js
    - Make sure the token, signing secret, app token are valid in index.js (regenerate those from https://api.slack.com/apps)


3. Run the Figma plugin and cross your fingers that it all works