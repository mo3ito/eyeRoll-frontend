import { v4 as uuidv4 } from 'uuid';

const userAsideMenuItems = [
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
    title: "Register/Login",
    options: [
      { id: uuidv4(), href: "/register-user", name: "register as customer" },
      { id: uuidv4(), href: "/register-user/login", name: "login as customer" },
      { id: uuidv4(), href: "/register-business-owner", name: "register as business owner" },
      { id: uuidv4(), href: "/register-business-owner/login", name: "login as business owner" },
    ],
  },

];

export default userAsideMenuItems ;