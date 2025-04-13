async function createTODO(title,description,method) {
  return {
    title,
    description,
    method,
    _id: 1,
  };
}

module.exports = {
    createTODO,
};