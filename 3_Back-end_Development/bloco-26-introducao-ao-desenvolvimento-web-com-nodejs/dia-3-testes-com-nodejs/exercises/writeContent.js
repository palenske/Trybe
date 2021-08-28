const fs = require('fs').promises;

module.exports = (file, content) => {
  fs.writeFileSync(`./${file}`, content);
  return 'ok';
};
