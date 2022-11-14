import numeral from 'numeral'
import React, { useEffect, useState } from 'react'

type Props = {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

const NumberDynamic = ({
  prefix = '',
  suffix = '',
  value,
  duration = 500,
}: Props) => {
  const [newValue, setNewValue] = useState(0)

  const newValueFormatted =
    newValue < 1000 ? newValue : numeral(newValue).format('0,0')

  const stepDurationMs = 25

  const grow = (growIncrement: number) => {
    const v = Math.ceil(newValue + growIncrement)

    if (v > value) {
      setNewValue(value)
      return false
    }

    setNewValue(v)

    setTimeout(() => {
      grow(growIncrement)
    }, stepDurationMs)
  }

  const growInit = () => {
    grow(value / (duration / stepDurationMs))
  }

  useEffect(() => {
    growInit()
  })

  return (
    <div>
      {prefix}
      {newValueFormatted}
      {suffix}
    </div>
  )
}

export default NumberDynamic
