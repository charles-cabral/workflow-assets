class Person {
  constructor(name, age, job, icon, type) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.icon = icon;
    this.type = type;
  }

  hello() {
    if (typeof this.name === "string")
      return `Olá, eu sou ${this.name}!`;
    return "Hello MTFKR!";
  }

  profile() {
    return {
      name: this.name,
      age: this.age,
      job: this.job,
      icon: this.icon,
      type: this.type
    };
  }
}

export default Person;
