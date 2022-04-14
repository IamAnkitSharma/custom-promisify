import { promisify as customPromisify } from "./util.js";

const client = {
  get: (time, cb) => {
    //mocking some asynchronous operation
    setTimeout(() => {
      cb(null, 'Some Data')
    }, time)
  }
};

(async () => {
  const promisifiedGetCustom = customPromisify(client.get)
  const data = await promisifiedGetCustom(3000);
  console.log(data);
})();