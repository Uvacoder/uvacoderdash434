import { mdiCog } from '@mdi/js'
import React from 'react'

import { colorsText } from '../../core/colors'
import { ColorKey, TrendType } from '../../interfaces'
import BaseLevel from '../Base/BaseLevel'
import BaseButton from '../Button/BaseButton'
import BaseIcon from '../Icon/BaseIcon'
import PillTagTrend from '../Pill/PillTagTrend'
import CardBox from './CardBox'

type Props = {
  number: number
  numberPrefix?: string
  numberSuffix?: string
  icon: string
  iconColor: ColorKey
  label: string
  trendLabel?: string
  trendType?: TrendType
  trendColor?: ColorKey
}

const CardBoxWidget = (props: Props) => {
  return (
    <CardBox>
      {props.trendLabel && props.trendType && props.trendColor && (
        <BaseLevel className='mb-3' mobile>
          <PillTagTrend
            label={props.trendLabel}
            type={props.trendType}
            color={props.trendColor}
            small
          />
          <BaseButton icon={mdiCog} color='lightDark' small />
        </BaseLevel>
      )}
      <BaseLevel mobile>
        <div>
          <h3 className='text-lg leading-tight text-gray-500 dark:text-slate-400'>
            {props.label}
          </h3>
          <h1 className='text-3xl leading-tight font-semibold'>
            {props.numberPrefix}
            {props.number}
            {props.numberSuffix}
          </h1>
        </div>
        {props.icon && (
          <BaseIcon
            path={props.icon}
            size='48'
            w=''
            h='h-16'
            className={colorsText[props.iconColor]}
          />
        )}
      </BaseLevel>
    </CardBox>
  )
}

export default CardBoxWidget
