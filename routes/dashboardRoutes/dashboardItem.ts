import { v4 as uuidv4 } from 'uuid';

const accordions = [
  {
    id:uuidv4(),
    title:"main pages",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard", name: "dashboard" },
      { id: uuidv4(), href: "/", name: "home" },
    ],
  },
  {
    id: uuidv4(),
    title: "setting",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/discount-setting", name: "roll setting" },
      { id: uuidv4(), href: "#", name: "review setting" },
    ],
  },
  {
    id: uuidv4(),
    title: "reports",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/roll-reports", name: "roll reports" },
      { id: uuidv4(), href: "#", name: "review reports" },
    ],
  },
  {
    id: uuidv4(),
    title: "Determine access",
    options: [
      { id: uuidv4(), href: "#", name: "Functional word" },
      { id: uuidv4(), href: "#", name: "Functional word" },
    ],
  },
];

export { accordions };