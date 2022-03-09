const Model = require('../models/messagesModel');

const saveMsg = async (messageData) => {
  const timestamps = new Date().toISOString().replace('T', ' ').substring(0, 19);

  await Model.saveMsg({ ...messageData, timestamps });
};

const showMsg = async () => {
  const messages = await Model.showMsg();

  return messages;
};

module.exports = {
  saveMsg,
  showMsg,
};
