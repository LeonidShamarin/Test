function bulkRun(tasks) {
  const promises = tasks.map(
    ([fn, args]) =>
      new Promise((resolve) => {
        fn(...args, (...results) => {
          resolve(results.length === 1 ? results[0] : results);
        });
      })
  );

  return Promise.all(promises);
}

// Тестування функції bulkRun
const f1 = (cb) => {
  cb(1);
};

const f2 = (a, cb) => {
  cb(a);
};

const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
