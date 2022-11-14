import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

Chart.register(
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
    },
    x: {
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

const ChartLineSample = ({ data }: any) => {
  return <Line options={options} data={data} className='h-96' />
}

export default ChartLineSample
