'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const date = searchParams.get('date')
  const numberPeople = searchParams.get('numberPeople')

  return (
    <>
      You're looking for a table on {date} with {numberPeople} people.
    </>
  )
}