# OpenPlatform Electron App

This application runs the app like a browser.

- update `openplatform` URL address in `package.json`
- and build it

## Building

- `$ npm install -g electron-packager`
- `$ cd app`
- `$ npm install`
- __macOS__ `$ electron-packager . OpenPlatform --overwrite --icon icon.icns`
- __Linux__ `$ electron-packager . OpenPlatform --overwrite --icon icon.png`
- __Windows__ `$ electron-packager . OpenPlatform --overwrite --icon icon.ico`

## How do I run it without building?

- `$ npm install`
- `$ npm start`
