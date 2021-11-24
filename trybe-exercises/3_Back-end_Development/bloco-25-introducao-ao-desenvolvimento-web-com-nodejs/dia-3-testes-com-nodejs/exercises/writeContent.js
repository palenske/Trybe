const fs = require('fs');

module.exports = (file, content) => {
  fs.writeFileSync(`./${file}`, content);
  return 'ok';
};
