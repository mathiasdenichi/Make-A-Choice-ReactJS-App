/// argument = defined is a default.

class Person {
  constructor (name = "SpongeBob", age = 0, years = ['Default']) {
        this.name = name
        this.age = age
        this.years = years
  }
  /// Call the function by adding the const.function();
  getDescription() {
    return `${this.name} is ${this.age} years old.${this.years[0]}`
  }
}
///Sub Class
class Student extends Person {
  constructor (name, age, years, major) {
    /// Continues from Previous Class
    super(name, age, years);
    this.major = major
  }

  hasMajor() {
    /// Double Flips Event
    return !!this.major;
  }
  getDescription() {
    /// Call function from above using super.
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += `And their major is ${this.major}`;
    }
    return description
  }
}

//Sub Class Traveller
class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location
  }

  getGreeting(){
    return `Hello my name is ${this.name}, I'm ${this.age} years old and I live in ${this.location}`
  }
}

/// Arrays can be called

const sponge = new Student();
const mathias = new Traveller('Mathias', '28', 'Sarasota');

console.log(mathias.getGreeting());