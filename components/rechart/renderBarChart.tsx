import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip , ResponsiveContainer } from 'recharts';
import { showNumberReports } from '@/types/reports/reportsType';


export default function RenderBarChart({ onlineMenuPageSeen, eyeRollPageSeen, discountTaken}: showNumberReports) {

  const data = [
    {name: 'eyeRoll page' , value:eyeRollPageSeen },
    {name: 'online menu' , value:onlineMenuPageSeen } ,
    {name: 'discounts paid' , value:discountTaken }
    
  ]

  return (
    <ResponsiveContainer>
    <BarChart className='w-full h-full' width={350} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Bar className='!rounded-full'  dataKey="value" stroke="#8884d8" fill="#a78bfa"  barSize={50} />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    </BarChart>
    </ResponsiveContainer>
  )
}
