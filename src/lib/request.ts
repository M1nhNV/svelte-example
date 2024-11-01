const customRequest = async (url: string, method: string = 'GET', params: object = {}) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const jsonData = await response.json();
  console.log('re: ', jsonData);
  return jsonData;
};

export { customRequest };
