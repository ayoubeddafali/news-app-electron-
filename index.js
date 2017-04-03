const electron = require("electron")
const path = require("path")
const { app, BrowserWindow, Menu } = electron
var mainWindow;
app.on("ready", () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`file:///${__dirname}/dist/index.html`)


})