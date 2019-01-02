import persons from "./lib/model";
import Person from "./lib/controller";
import template from "./lib/view";

const chloe = new Person("Chloe", 48, "Devops");
const rebecca = new Person("Rebecca", 32, "Support");

persons.push(
    chloe.profile(),
    rebecca.profile()
);

// console.table(persons);

export default function() {
    return template(persons);
}