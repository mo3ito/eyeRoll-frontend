// 'use client'
// import React,{useEffect, useRef} from 'react';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// } from 'chart.js';
// import {   Doughnut } from 'react-chartjs-2';
// // interface LineProps {
// //     options: ChartOptions<'line'>;
// //     data: ChartData<'line'>;
// //   }

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
//   );

 



//   const data2 = [
//     1200, 5000, 4000, 20000,
//     1200, 30000, 4000, 20000,
//     1200, 5000, 4000, 20000,
//   ];

//   const hoursOfDay = [
//     '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
//     '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
//     '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
//     '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
//   ];
  
//   // تعیین طیف رنگ‌ها به صورت ۲۴ تایی
//   const hexColors24 = [
//     '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb', '#9966ff',
//     '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb',
//     '#9966ff', '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0',
//     '#36a2eb', '#9966ff', '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56',
//   ];
  
  
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , "August" ,"September" , "October" , "November" , "December" ,];


// export const data = {
//     labels : hoursOfDay ,
//     datasets: [
//       {
//         label: 'Your sale',
//         data: data2.slice(0, labels.length), // از داده‌های شما استفاده کنید
//          backgroundColor:   [
//           '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb', '#9966ff',
//           '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb',
//         ],
        
      
//         // borderColor: "black",
//         // borderWidth: 2
        
        
        
//       },
    
     
//     ],
//   };



// export default function Chart() {
    
 
//   return (
//     <div className='w-full px-2 rpunded-md h-96'>
//    <Doughnut  className='!h-full !text-[5px]'  data={data} />
//   </div>
    
//   )
// }


import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip , ResponsiveContainer } from 'recharts';
const data = [{name: 'January', sale: 400},{name: 'February', sale: 200}, {name: 'March', sale: 350},
{name: 'April', sale: 370}, {name: 'May', sale: 170},{name: 'Jun', sale: 100},{name: 'Julay', sale: 240}, {name: 'August', sale: 170},
{name: 'September', sale: 360},{name: 'October', sale: 140},{name: 'November', sale: 190},{name: 'December', sale: 307},
];




const renderBarChart = (
  <ResponsiveContainer>
  <BarChart className='w-full h-full' width={350} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Bar   dataKey="sale" stroke="#8884d8" fill="#818cf8" barSize={10} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis  />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
  </BarChart>
  </ResponsiveContainer>
);

export default function Rechart (){
  return (
    <div className='w-full -translate-x-2 rpunded-md h-96  pt-8'>
    {renderBarChart}
    </div>
  )
}
