const pmbase = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

pmbase.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  pmbase.locales[matches[1]] = req(mod).default;
});

module.exports = pmbase;
