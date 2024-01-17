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

];

export default accordionAdminItems ;