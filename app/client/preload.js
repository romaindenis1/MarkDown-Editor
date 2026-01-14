const { contextBridge, ipcRenderer  } = require('electron');

//Communication backend frontend
contextBridge.exposeInMainWorld('markdown', {
    parse: (text) => ipcRenderer.sendSync("markdown:parse", text),
    openFile: async () => {
        console.log("openFile")
        return await ipcRenderer.invoke('open-file');
    },
});

window.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor')
  ipcRenderer.on('file-opened', (_event, value) => {
    editor.value = value
    
    const md = document.getElementById("editor").value
    const html = ipcRenderer.sendSync("markdown:parse", md)
    document.getElementById("preview").innerHTML = html
  })
})