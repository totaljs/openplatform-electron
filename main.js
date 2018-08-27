const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const windowStateKeeper = require('electron-window-state');
const path = require('path');

let mainWindow;

module.paths.push(path.resolve('node_modules'));
module.paths.push(path.resolve('../node_modules'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app', 'node_modules'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app.asar', 'node_modules'));

const meta = require('./package.json');

function createWindow () {
	var mainWindowState = windowStateKeeper({ defaultWidth: 1280, defaultHeight: 768 });
	mainWindow = new BrowserWindow({ icon: __dirname + '/icon.png', x: mainWindowState.x, y: mainWindowState.y, width: mainWindowState.width, height: mainWindowState.height, webPreferences: { nodeIntegration: false }});
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
	mainWindowState.manage(mainWindow);
	mainWindow.loadURL(meta.openplatform);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
app.on('activate', () => mainWindow === null && createWindow());