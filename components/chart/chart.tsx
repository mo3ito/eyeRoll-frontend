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
  ArcElement
} from 'chart.js';
import { Bar , Pie } from 'react-chartjs-2';
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
    Legend,
    ArcElement
  );

  // ChartJS.register(ArcElement, Tooltip, Legend);


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
    plugins: {
      legend: {
        labels: {
          font: {
            size: 10, // اندازه فونت برای متن labels را تعیین کنید
          },
        },
      },
    },
  };
  const data2 = [
    1200, 5000, 4000, 20000,
    1200, 30000, 4000, 20000,
    1200, 5000, 4000, 20000,
  ];

  const hoursOfDay = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
  ];
  
  // تعیین طیف رنگ‌ها به صورت ۲۴ تایی
  const hexColors24 = [
    '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb', '#9966ff',
    '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb',
    '#9966ff', '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0',
    '#36a2eb', '#9966ff', '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56',
  ];
  
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , "August" ,"September" , "October" , "November" , "December" ,];


export const data = {
    labels ,
    datasets: [
      {
        label: 'Your sale',
        data: data2.slice(0, labels.length), // از داده‌های شما استفاده کنید
         backgroundColor:   [
          '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb', '#9966ff',
          '#c9cbcf', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb',
        ],
        
      
        // borderColor: "black",
        // borderWidth: 2
        
        
      },
    
     
    ],
  };



export default function Chart() {
    const chartRef = useRef(null)
 
  return (
    <div className='w-full px-2 rpunded-md h-96'>
   <Pie ref={chartRef} className='!h-full !text-[5px]' options={options} data={data} />
  </div>
    
  )
}
