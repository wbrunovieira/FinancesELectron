import { app, BrowserWindow } from 'electron';
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/../node_modules/electron`),
  files: ['src/**/*.{js,html,css}'],
  hardResetMethod: 'exit',
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
