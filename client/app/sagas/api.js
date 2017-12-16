const api = async (url, opts) => { // eslint-disable-line
  const response = await fetch(url, opts);
  const data = await response.json();
  return data;
};

export default api;
