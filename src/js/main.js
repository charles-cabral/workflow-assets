import persons from "./data";
import Person from "./class";
import RenderPersons from "./component";

const person = new Person("James", 48, "Devops");
const person2 = new Person("Rick", 32, "Support");

console.log(person.hello());

persons.push(person.profile(), person2.profile());

RenderPersons(persons);
