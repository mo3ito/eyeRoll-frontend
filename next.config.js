
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      typedRoutes: true,
    },
  }
   
  module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     typedRoutes: true,
//   },
//   compiler:{
//     removeConsole:{
//       exclude:['error'],
//     }
//   }
// }
 
// module.exports = nextConfig