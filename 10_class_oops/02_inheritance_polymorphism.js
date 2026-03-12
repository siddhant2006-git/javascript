// inheritance - parent class ki property & methode use karna child ma

class animal{
  speak() {
    console.log("animal barking ")
  }

}

// extend keyward - keyward which are use to replace value parent to child


class dog extends animal{
  speak() {
    console.log("dog is barking ")
  }
}

const Dog = new dog();
Dog.speak();


// polymorphism- same method name but different behavior


class webbrower{
  server() {
    console.log("web brower is search engine ")
  }

}

class google extends webbrower{
  server() {
    console.log("google brower is old webbrower")
  }
}

class brave extends webbrower {
  server() {
    console.log("brave is new brower ")
  }
}

const arr = [new brave, new google]
arr.forEach(arra =>  arra.server());

