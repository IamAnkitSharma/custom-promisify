import { promisify as customPromisify } from "./util.js";

const client = {
  get: (time, cb) => {
    //mocking some asynchronous operation
    setTimeout(() => {
      cb(null, "Some Data");
    }, time);
  },
};

(async () => {
  //callback way
  client.get(3000, (err, data) => {
    console.log('From callback - '+ data)
  });

  //async way
  const promisifiedGetCustom = customPromisify(client.get);
  const data = await promisifiedGetCustom(3000);
  console.log('From promisifed - '+ data);
})();
