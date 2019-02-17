import Person from "./js/Person"
import data from "./js/Data"
import Ui from "./js/Ui"

const chloe = new Person("Maria", 48, "Devops");
const rebecca = new Person("Rebecca", 32, "Support");
const mathew = new Person("Mathew", 32, "Support");
const david = new Person("David", 32, "Support");
const jonas = new Person("Jonas", 32, "Support");

data.push(
    chloe.profile(),
    rebecca.profile(),
    mathew.profile(),
    david.profile(),
    jonas.profile()
)

export default () => Ui(data)