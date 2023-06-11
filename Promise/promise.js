

function myPromise(executer) {
  let onReject, onResolve;

  function resolve(value) {
    debugger;
    if (typeof onResolve === "function") onResolve(value);
  }

  function reject(value) {
    if (typeof onReject === "function") onReject(value);
  }

  this.then = function (cb) {
    onResolve = cb;
    return this;
  };
  executer(resolve, reject);
}

const a = new myPromise((resolve, reject) => {
  // setTimeout(() => {
    resolve(1);
  // }, 500);
});

a.then((ress) => {
  console.log(ress);
});
