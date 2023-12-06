const students = [
  {
    id: 1,
    name: "Something",
    score: 78,
  },

  {
    id: 2,
    name: "nothing",
    score: 87,
  },
  {
    id: 3,
    name: "Anything",
    score: 58,
  },
  {
    id: 4,
    name: "Everything",
    score: 98,
  },
];

const toppers = students.sort((a, b) => b - a);

console.log(toppers);
