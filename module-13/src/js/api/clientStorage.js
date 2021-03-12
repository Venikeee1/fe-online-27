const clientStorage = {
  getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  },
  setItem(key, payload) {
    const body = JSON.stringify(payload);
    localStorage.setItem(key, body);
  },
};

export default clientStorage;
