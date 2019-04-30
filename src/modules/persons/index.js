import Person from "./js/Person"
import data from "./js/Data"
import Ui from "./js/Ui"

const chloe = new Person("Maria", 48, "Devops", "insect", "insect");
const rebecca = new Person("Rebecca", 32, "Support", "pig", "mammals");
const mathew = new Person("Mathew", 32, "Support", "giraffe", "mammals");
const david = new Person("David", 32, "Support", "sheep", "mammals");
const jonas = new Person("Jonas", 32, "Support", "toad", "reptiles");

data.push(
    chloe.profile(),
    rebecca.profile(),
    mathew.profile(),
    david.profile(),
    jonas.profile()
)

export default () => Ui(data)