import faker from "faker";
const listLength = 12;

const robotList = [];

for (let i = 0; i < listLength; i++) {
  robotList.push({
    id: i,
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
    activity: faker.company.bs(),
    department: faker.commerce.department(),
    jobDescription: `${faker.hacker.ingverb()} ${faker.company.catchPhrase()}`
  });
}

export default robotList;
