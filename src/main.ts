import { app, BrowserWindow } from 'electron';
import path from 'path';

process.env.NODE_ENV =
  process.env.NODE_ENV || 'development';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // Carregar o servidor de Vite
    const url = 'http://localhost:3000';
    console.log('Carregando URL (desenvolvimento):', url);
    mainWindow.loadURL(url);
  } else {
    // Carregar o arquivo HTML gerado pelo Vite na build
    const indexPath = path.join(
      __dirname,
      '../dist/index.html'
    );
    console.log(
      'Carregando arquivo HTML (produção):',
      indexPath
    );
    mainWindow.loadFile(indexPath);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  console.log('Electron está pronto 🚀');
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
