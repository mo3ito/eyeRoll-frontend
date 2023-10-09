import { v4 as uuidv4 } from 'uuid';

const accordionItems = [
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
      { id: uuidv4(), name: "roll setting" , childOption:[{"id":uuidv4() , childName:"discount range" , href: "/business-owner-dashboard/discount-setting"},] },
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
    title: "online menu",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/online-menu", name: "import menu" , },
      
    ],
  },
];

export { accordionItems };