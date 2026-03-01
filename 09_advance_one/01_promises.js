const promisesOne = new Promise(function (resolve, reject) {
  //do an async task
  //database, cryptography, network call
  setTimeout(function () {
    console.log(" async task is complete");
  }, 1000)
  resolve()
})

promisesOne.then(function(){
  console.log("promise consume ")
})

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete ");
    resolve()
    
  }, 1000)
  
}).then(function () {
      console.log("async task is complete and")
  })


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

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({username:"siddhant bhatnagar", password:"bhatnagar"})
    } else {
      reject("some thing error is wrong");

    }
      
    
   },1000)
 })

const username=promisefour.then((user) => {
  console.log(user);
  return user.username 
})
  .catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log("the promise is either resolved or rejected");

  })
 

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "siddhant ", password: "bhatnagar" })
    } else {
      reject("some thing error is wrong ")
    }
  }, 1000)

})

// async =function which atttend promise and wait the result without any blocking

// awit=keyword which is used to wait for promise resolution

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
  }
  catch (error) {
    console.log(error);
  }
  
} 
getallusers();
 

