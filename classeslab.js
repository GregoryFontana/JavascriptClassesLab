// class Governor {

//  static education = "He has a Harvard PhD.";
// static family = "He has multiple children.";
// static policy = "He has ambition";
// static disposition() {
//     return "He is totally insane"
// }
// }
// console.log(Governor.education)
// console.log(Governor.family)
// console.log(Governor.disposition)

//Inheritance
class Person {
    constructor(name, age, hair, eyes, certificate = true) {
      this.name = name;
      this.age = age;
      this.hair = hair;
      this.eyes = eyes;
      this.legs = 5;
      this.certificate = certificate;
    }
    drinks() {
      console.log("drinks Whiskey!");
    }
    wearsHat() {
      console.log("has a Chapeau");
    }
    hatesCats() {
      console.log("believes that cats are just rats with fur!");
    }
  }
  class PostalWorker extends Person {
    // constructor(name, age, hair, eyes, certificate){
    //     super(name, age, hair, eyes, certificate)
  
    // }
    wearsHat() {
      console.log("wears baseball caps only!");
    }
    deliversPackage() {
      console.log("by throwing packages against the front door.");
    }
  }
  class Chef extends Person {}
  
  const Elvis = new PostalWorker("Elvis", "23", "black", "blue", false);
  const PostalWorker1 = new PostalWorker("Jimmy", "45", "red", true);
  const PostalWorker2 = new PostalWorker("Bob", "65", "bald", true);
  const Chef1 = new Chef();
  const Chef2 = console.log(Elvis);
  