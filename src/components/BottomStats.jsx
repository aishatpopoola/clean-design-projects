import Stat from "./Stat";
import React from 'react'

const bottomStats = [
  {
    title: "Loop A",
    value: "26.53",
    unit: "°C",
    gauge: 135,
  },
  {
    title: "Loop B",
    value: "20.00",
    unit: "°C",
    gauge: 180,
  },
  {
    title: "NET PWR 1",
    value: "0.00",
    unit: "W",
    gauge: 0,
  },
  {
    title: "NET PWR 2",
    value: "0.00",
    unit: "W",
    gauge: 0,
  },
];

const BottomStats = () => {
  return (
    <div className="grid grid-cols-5 gap-4 pt-4">
      {bottomStats.map((stats, i) => (
        <Stat
       key={i}
        stats={stats}
        className={i === 2 ? 'col-start-4' : ''}
        size="sm"
      />
      ))}
    </div>
  )
}

export default BottomStats