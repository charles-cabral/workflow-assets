import Person from "./js/Person"
import data from "./js/Data"
import Ui from "./js/Ui"

const chloe = new Person("Chloe", 48, "Devops");
const rebecca = new Person("Rebecca", 32, "Support");

data.push(
    chloe.profile(),
    rebecca.profile()
)

export default function() {
    return Ui(data);
}