class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  hello() {
    if (typeof this.name === "string") return `Olá, eu sou ${this.name}!`;
    return "Hello MTFKR!";
  }

  profile() {
    return { name: this.name, age: this.age, job: this.job };
  }
}

export default Person;
