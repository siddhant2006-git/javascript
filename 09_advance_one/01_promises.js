// promises- it works to probality of run the code
// 1. pending form-intially state
// 2. relsove form-operation complete fullfilled
// 3. reject form - operation field
// new -create the new object

const promisesOne = new Promise(function (resolve, reject) {
  //promises-do an async task
  //database, cryptography, network call
  setTimeout(function () {
    console.log(" async task is complete");
  }, 1000);
  resolve();
});

// then- is handle to resolve promise (use to resolve result  )
promisesOne.then(function () {
  console.log("promise consume ");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task is complete and");
});

// if the resolve function can execute then it can display the information to user

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "siddhant bhatnagar",
      email: "siddhant@gmail.com",
    });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

// if error promise -reject
// if not error promise-resolve
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "siddhant bhatnagar", password: "bhatnagar" });
    } else {
      reject("some thing error is wrong");
    }
  }, 1000);
});

// error catched -
// final result
const username = promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "siddhant ", password: "bhatnagar" });
    } else {
      reject("some thing error is wrong ");
    }
  }, 1000);
});

// async =function which atttend promise and wait the result without any blocking

// awit=keyword which is used to wait for promise resolution

//why try or catch use - it can throw the error from the await
async function consumepromiseFIve() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromiseFIve();

async function getallusers() {
  const response = await fetch("https://api.github.com/users/siddhant2006-git");
  try {
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getallusers();
