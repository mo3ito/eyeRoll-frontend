import RenderBarChart from "./renderBarChart";
import { showNumberReports } from "@/types/reports/reportsType";


export default function Rechart ({  onlineMenuPageSeen, eyeRollPageSeen, discountTaken}:showNumberReports){
  return (
    <div className='w-full  rpunded-md h-80   pt-8 '>
    <RenderBarChart
      onlineMenuPageSeen={onlineMenuPageSeen}
      eyeRollPageSeen={eyeRollPageSeen}
      discountTaken={discountTaken}
    />
    </div>
  )
}
