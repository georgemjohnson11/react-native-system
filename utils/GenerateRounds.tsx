import faker from "faker";

const generateRound = () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(3),
  author: "Unknown",
});

const generateRounds = (numberOfRounds: number) =>
  Array.from({ length: numberOfRounds }, () => generateRound());

export const DATA = generateRounds(20);