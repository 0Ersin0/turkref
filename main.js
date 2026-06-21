const { app, BrowserWindow, Menu, session } = require("electron");
const path = require("path");

Menu.setApplicationMenu(null);

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 1024,
        minHeight: 768,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
            webSecurity: true,
            allowRunningInsecureContent: false,
            experimentalFeatures: false,
            devTools: false,                 
            webviewTag: false,               
            nodeIntegrationInWorker: false,  
        },
    });

    win.setMenuBarVisibility(false);
    win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        callback(false); 
    });
    session.defaultSession.setPermissionCheckHandler(() => false);

    createWindow();
});

app.on("window-all-closed", () => {
    app.quit();
});

app.on('web-contents-created', (event, contents) => {
    contents.setWindowOpenHandler(() => ({ action: 'deny' }));
    contents.on('will-navigate', (event) => { event.preventDefault(); });
    contents.on('will-attach-webview', (event) => { event.preventDefault(); });
    
    
    contents.session.on('will-download', (event, item) => {
        const url = item.getURL();
        const filename = item.getFilename() || '';
        const safeExtensions = ['.xlsx', '.xls', '.pdf'];
        const hasValidExt = safeExtensions.some(ext => filename.toLowerCase().endsWith(ext));
        if (url && url.startsWith('blob:') && hasValidExt) return; // 🛡️ Sadece güvenli uzantılara izin ver
        event.preventDefault(); 
    });
});