const getContacts = state => state.transaction.items;
const getError = state => state.transaction.error;

// eslint-disable-next-line
export default {
  getContacts,
  getError,
};
