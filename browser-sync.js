// 🎌 BROWSER-SYNC FOR AUTO RELOAD JAZZ-PLUS A BETTER IMPLEMENTATION OF EXTENSIONLESS URLS 🎌
module.exports = {
  server: {
    baseDir: 'build',
    routes: {
      '/': 'build',
    },
  },
  port: '8080',
  open: false,
  notify: false,
  serveStatic: [
    'build',
  ],
  serveStaticOptions: {
    extensions: ['html'],
  },
};
