const config = {
  host: 'database',
  port: 27017,
  db: 'votes'
};

// Exported objects are copies
module.exports.config = () => {
  return Object.assign({}, config);
};
