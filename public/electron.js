const { app, BrowserWindow } = require ('electron');

if (require('electron-squirrel-startup')) app.quit();

function createWindow() {

    const win = new BrowserWindow({
        show: false, 
        autoHideMenuBar: true,
        movable: false,
        resizable: false,
        minimizable: false,
        frame: false,

        
    });
    win.loadURL("http://localhost:5173");
    win.maximize();
    win.show;

}

app.on("ready", createWindow);

