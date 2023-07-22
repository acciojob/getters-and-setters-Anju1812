class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Example usage:
const person1 = new Person("John Doe", 30);
console.log(`Person's name: ${person1.name}, Age: ${person1.age}`);

const student1 = new Student("Alice", 20);
student1.study();

const teacher1 = new Teacher("Mr. Smith", 45);
teacher1.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
