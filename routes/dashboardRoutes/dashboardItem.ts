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
    title:"Roll",
        options: [
      // { id: uuidv4(), name: "roll setting" , childOption:[{"id":uuidv4() , childName:"discount range" , href: "/business-owner-dashboard/discount-setting"},] },
      { id: uuidv4(), href: "/business-owner-dashboard/discount-setting", name: "set roll" },
      { id: uuidv4(), href: "/business-owner-dashboard/roll-reports", name: "roll reports" },
      { id: uuidv4(), href: "/business-owner-dashboard/qr-code-link-roll", name: "roll QR Code link" , },
    ],
  },
  // {
  //   id: uuidv4(),
  //   title: "setting",
  //   options: [
  //     { id: uuidv4(), name: "roll setting" , childOption:[{"id":uuidv4() , childName:"discount range" , href: "/business-owner-dashboard/discount-setting"},] },
  //     { id: uuidv4(), href: "#", name: "review setting" },
  //   ],
  // },
  {
    id: uuidv4(),
    title: "online menu",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/online-menu/add-product", name: "add new product" , },
      { id: uuidv4(), href: "/business-owner-dashboard/online-menu/edit-menu", name: "edit menu" , },
      { id: uuidv4(), href: "/business-owner-dashboard/online-menu/logo-workplace-image", name: "import logo & work place image"},
      { id: uuidv4(), href: "/business-owner-dashboard/online-menu/qr-code-link", name: "online menu QR Code link" , },
      ,
      
    ],
  },
  {
    id: uuidv4(),
    title: "information",
    options: [
      { id: uuidv4(), href: "/business-owner-dashboard/information", name: "edit information" , },
      { id: uuidv4(), href: "/business-owner-dashboard/information/edit-password", name: "edit password" , },
      
    ],
  },
];

export { accordionItems };