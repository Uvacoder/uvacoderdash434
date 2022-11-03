import { memo, useEffect, useState } from 'react'

type BinaryDigitClockProps = number
type BinaryGroupDigitClockProps = [BinaryDigitClockProps]

function numberToBinary(base10Number: number) {
  const base2Values = [8, 4, 2, 1]
  let output = [0, 0, 0, 0]
  let remainder = base10Number

  base2Values.forEach((val, idx) => {
    const left = remainder - val

    if (left >= 0) {
      output[idx] = 1
      remainder = left
    }
  })

  return output
}

function numberAsBinaryArrayPair(number: number) {
  const pair = []
  if (number < 10) {
    pair[0] = numberToBinary(0)
    pair[1] = numberToBinary(number)
  } else {
    const numberAsArray = String(number).split('')
    pair[0] = numberToBinary(parseInt(numberAsArray[0], 10))
    pair[1] = numberToBinary(parseInt(numberAsArray[1], 10))
  }

  return pair
}

const Pip = ({ isOn }: { isOn: boolean }) => (
  <div
    className={`w-4 h-4 m-1 rounded-full transition duration-150 ease-in ${
      isOn ? 'bg-[#48d8b8] transform scale-x-1.1' : 'bg-[#525252]'
    }`}
  ></div>
)

const BinaryDigit = ({
  base2NumberAsArray,
  id,
}: {
  base2NumberAsArray?: BinaryGroupDigitClockProps
  id: string
}) => (
  <div>
    {base2NumberAsArray?.map((pip: BinaryDigitClockProps, idx: number) => (
      <Pip key={`${idx}-${id}-${pip}`} isOn={pip === 1} />
    ))}
  </div>
)

const BinaryDigitGroup = ({
  group,
}: {
  group?: [BinaryGroupDigitClockProps]
}) => (
  <div className='flex my-0 mx-2'>
    {group?.map((binaryDigit: [BinaryDigitClockProps], idx: number) => (
      <BinaryDigit
        key={`binary-digit${idx}`}
        id={`binary-pip${idx}`}
        base2NumberAsArray={binaryDigit}
      />
    ))}
  </div>
)

const Clock = () => {
  const [groupDigits, setGroupDigits]: [any, Function] = useState([[], [], []])

  const updateDigits = () => {
    const date = new Date()
    const newGroupDigits = [
      numberAsBinaryArrayPair(date.getHours()),
      numberAsBinaryArrayPair(date.getMinutes()),
      numberAsBinaryArrayPair(date.getSeconds()),
    ] as any
    setGroupDigits(newGroupDigits)
  }

  useEffect(() => {
    updateDigits()
    setInterval(() => {
      updateDigits()
    }, 1000)
  }, [])

  return (
    <div className='flex'>
      {groupDigits.map(
        (groupDigit: [BinaryGroupDigitClockProps], idx: number) => (
          <BinaryDigitGroup
            key={`binary-group-digit-${idx}`}
            group={groupDigit}
          />
        )
      )}
    </div>
  )
}

export default memo(Clock)
