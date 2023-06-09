'use client'

import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import { useRouter } from 'next/navigation'
import "react-datepicker/dist/react-datepicker.css"
import Link from 'next/link'

export default function Page() {
  const router = useRouter()
  const [startDate, setStartDate] = useState(new Date())
  const [numberPeople, setNumberPeople] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberPeople(event.target.value)
  }

  const handleDateChange = (date: Date) => {
    console.log(date)
    setStartDate(date)
  }

  return (
    <div className='container'>
      <form>
        <DatePicker 
          selected={startDate} 
          onChange={handleDateChange} 
          showTimeSelect
          dateFormat="MMM d, yyyy h:mm aa"
        />
        <select
        name="numberPeople"
        onChange={handleChange}
        defaultValue={'placeholder'}>
          <option disabled={true} value='placeholder'>Number of People</option>
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <option value={num}>{num}</option>
          ))}
        </select>
        <Link href={{
          pathname: '/search',
          query: { date: startDate.toString(), numberPeople: numberPeople }
        }}
        >
          Find Reservations!
        </Link>
      </form>
    </div>
  )
}