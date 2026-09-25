const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    transparent: true,
    frame: false,             
    alwaysOnTop: true,    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // variável para controlar se os cliques do mouse atravessam a janela
  let ignoreMouse = false;

  // registra o atalho global F8 para alternar o modo
  globalShortcut.register('F8', () => {
    ignoreMouse = !ignoreMouse;
    
    // altera o comportamento da janela dinamicamente
    mainWindow.setIgnoreMouseEvents(ignoreMouse, { forward: true });
    console.log("Cliques a atravessar o chat: ", ignoreMouse);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
}); transparente = true;