const promisify = (func) => {
  const promisifiedFunction = (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  };
  return promisifiedFunction;
};

export { promisify };