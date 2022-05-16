export class Person {
  constructor(name, lastName){
    this.n = name;
    this.l = lastName;
    this.printPerson();
  }
  printPerson(age) {
    console.log("kişi :", this.n, this.l);
    if(age){
      console.log(this.n, age, "yaşındadır");
    }
  }
}
