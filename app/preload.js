const { contextBridge } = require('electron');
let marked;

try {
    marked = require("https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js");
} catch (error) {
    console.error('Failed to load marked:', error); // Log the error
}

contextBridge.exposeInMainWorld('markdown', {
    parse: (text) => marked ? marked(text) : '',
});
