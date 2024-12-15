import { contextBridge, ipcRenderer } from 'electron';

console.log('✅ Preload carregado com sucesso!');

contextBridge.exposeInMainWorld('api', {
  send: (channel: string, data: any) => {
    console.log(
      `📩 Enviando para ${channel} com dados`,
      data
    );
    ipcRenderer.send(channel, data);
  },
  receive: (
    channel: string,
    callback: (...args: any[]) => void
  ) => {
    console.log(`📬 Recebendo do canal ${channel}`);
    ipcRenderer.on(channel, (event, ...args) =>
      callback(...args)
    );
  },
});
