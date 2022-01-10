const xmzbase = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

xmzbase.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  xmzbase.locales[matches[1]] = req(mod).default;
});

module.exports = xmzbase;
