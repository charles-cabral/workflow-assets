class Person {
    constructor(name) {
      this.name = name;
    }

    hello() {
      if (typeof this.name === 'string') return `Olá, eu sou ${this.name}!`;
      return 'Hello MTFKR!';
    }
}

export default Person;