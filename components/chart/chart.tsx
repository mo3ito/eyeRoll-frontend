'use client'
import React,{useEffect, useRef} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// interface LineProps {
//     options: ChartOptions<'line'>;
//     data: ChartData<'line'>;
//   }

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export const options = {
    responsive: true,
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12, // تعداد حداکثر تیک‌ها برای نمایش (در اینجا 12 ماه)
          fontSize: 20
        },
        
      },
      y: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5,
          fontSize: 12, // اندازه فونت تیک‌های محور عمودی
        },
      },
    },
  };
  const data2 = [
    1200, 5000, 4000, 20000,
    1200, 30000, 4000, 20000,
    1200, 5000, 4000, 20000,
  ];
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , "August" ,"September" , "October" , "November" , "December" ,];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data2.slice(0, labels.length), // از داده‌های شما استفاده کنید
        backgroundColor: ['#a78bfa' , "#38bdf8"],
        
      },
     
    ],
  };



export default function Chart() {
    const chartRef = useRef(null)
 
  return (
    <div className='w-full px-2 border rpunded-md h-96'>
   <Bar ref={chartRef} className='!h-full !text-[5px]' options={options} data={data} />
  </div>
    
  )
}
