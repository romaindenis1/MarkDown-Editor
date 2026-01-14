const { app, BrowserWindow, ipcMain, screen  } = require('electron')
const path = require('node:path')
const {marked} = require("marked")

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    width: screen.getPrimaryDisplay().workAreaSize.width,
    height: screen.getPrimaryDisplay().workAreaSize.height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('index.html')
  win.maximize();
  win.show();
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on("markdown:parse", (event, arg) => {
    event.returnValue = marked(arg)
})