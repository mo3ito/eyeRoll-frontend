import { v4 as uuidv4 } from 'uuid';

const accordions = [
  {
    id: uuidv4(),
    title: "Algoritm",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/determining-discount", name: "Determining discount" },
      { id: uuidv4(), href: "#", name: "word discount" },
    ],
  },
  {
    id: uuidv4(),
    title: "Algoritm",
    options: [
      { id: uuidv4(), href: "#", name: "Functional word" },
      { id: uuidv4(), href: "#", name: "Functional word" },
    ],
  },
  {
    id: uuidv4(),
    title: "Algoritm",
    options: [
      { id: uuidv4(), href: "#", name: "Functional word" },
      { id: uuidv4(), href: "#", name: "Functional word" },
    ],
  },
];

export { accordions };