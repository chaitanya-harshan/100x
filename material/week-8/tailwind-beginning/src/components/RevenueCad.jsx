import { ChevronRight } from '../icons/ChevronRight.jsx'
import {QuestionMark} from '../icons/QuestionMark.jsx'

export const RevenueCad = ({title, amount, orderCount}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-gray-700 flex">
        {title}
        <div className='pl-2 self-center'>
          <QuestionMark/>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-black font-semibold text-4xl">
          {"₹"+amount}
        </div>
        <div className="text-sky-700 font-semibold underline flex self-end">
          {`${orderCount} Orders`}
          <ChevronRight/>
        </div>
      </div>
    </div>
  )
}
