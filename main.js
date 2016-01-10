const BrowserWindow = require('electron').BrowserWindow;

var app = require('app');
var globalShortcut = require('global-shortcut');

app.on('ready', function() {
	
	var win = new BrowserWindow({
		width: 800, 
		height: 600
	});

	globalShortcut.register('MediaPreviousTrack', function() { 
		console.log('MediaPreviousTrack'); 
		win.webContents.executeJavaScript('document.querySelectorAll("i[role=previous]")[0].click()');
	});
	
	globalShortcut.register('MediaPlayPause', function() { 
		console.log('MediaPlayPause'); 
		win.webContents.executeJavaScript('document.querySelectorAll("i[role=play]")[0].click()');
	});

	globalShortcut.register('MediaNextTrack', function() { 
		console.log('MediaNextTrack');
		win.webContents.executeJavaScript('document.querySelectorAll("i[role=next]")[0].click()');
	});

	win.on('closed', function() {
		win = null;
		app.quit();
	});

	win.loadURL('https://connect.monstercat.com');
	win.show();
});
