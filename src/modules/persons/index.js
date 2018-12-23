import data from "./lib/model";
import Person from "./lib/controller";
import template from "./lib/view";

const chloe = new Person("Chloe", 48, "Devops");
const rebecca = new Person("Rebecca", 32, "Support");

// eslint-disable-next-line no-console
console.log(chloe.hello());

data.push(chloe.profile(), rebecca.profile());

export default function() {
    return template(data);
}