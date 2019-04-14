# Puppeteer error

```sh
yarn
yarn build
$ react-snap
Error: Failed to launch chrome!
dlopen node_modules/puppeteer/.local-chromium/mac-641577/chrome-mac/Chromium.app/Contents/MacOS/../Versions/75.0.3738.0/Chromium Framework.framework/Chromium Framework: dlopen(node_modules/puppeteer/.local-chromium/mac-641577/chrome-mac/Chromium.app/Contents/MacOS/../Versions/75.0.3738.0/Chromium Framework.framework/Chromium Framework, 261): Library not loaded: /System/Library/Frameworks/MediaPlayer.framework/Versions/A/MediaPlayer
  Referenced from: node_modules/puppeteer/.local-chromium/mac-641577/chrome-mac/Chromium.app/Contents/Versions/75.0.3738.0/Chromium Framework.framework/Versions/A/Chromium Framework
  Reason: image not found


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (node_modules/puppeteer/lib/Launcher.js:342:14)
    at Interface.helper.addEventListener (node_modules/puppeteer/lib/Launcher.js:331:50)
    at Interface.emit (events.js:187:15)
    at Interface.close (readline.js:379:8)
    at Socket.onend (readline.js:157:10)
    at Socket.emit (events.js:187:15)
    at endReadableNT (_stream_readable.js:1092:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
error Command failed with exit code 1.
```
