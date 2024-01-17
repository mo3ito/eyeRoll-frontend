import { v4 as uuidv4 } from 'uuid';



const accordionAdminItems = [
  {
    id:uuidv4(),
    title:"reports",
    options: [
      { id: uuidv4(), href: "/", name: "number of customers" },
      { id: uuidv4(), href: "/", name: "number of business owners" },
    ],
  },
  {
    id:uuidv4(),
    title:"requests",
    options: [
      { id: uuidv4(), href: "/", name: "business owner requests" },
      { id: uuidv4(), href: "/", name: "admin requests" },
    ],
  },

];

export default accordionAdminItems ;