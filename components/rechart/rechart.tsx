import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip , ResponsiveContainer } from 'recharts';
const data = [{name: 'January', sale: 400},{name: 'February', sale: 200}, {name: 'March', sale: 350},
{name: 'April', sale: 370}, {name: 'May', sale: 170},{name: 'Jun', sale: 100},{name: 'Julay', sale: 240}, {name: 'August', sale: 170},
{name: 'September', sale: 360},{name: 'October', sale: 140},{name: 'November', sale: 190},{name: 'December', sale: 307},
];




const renderBarChart = (
  <ResponsiveContainer>
  <BarChart className='w-full h-full' width={350} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Bar className='!rounded-full'  dataKey="sale" stroke="#8884d8" fill="#a78bfa"  barSize={10} />
    <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
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
