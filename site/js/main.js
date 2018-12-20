import GetPersons from './component'
import Person from './person'

const persons = [
    { name: 'Charles', age: 32, job: 'Frontend Developer' },
    { name: 'Maria', age: 21, job: 'QA' },
    { name: 'João', age: 25, job: 'Backend Developer' }
]

const charles = new Person('Charles Cabral');
console.log(charles.hello());

persons[0].name = charles.hello()

GetPersons(persons)