import React from 'react'
import Overview from "../icons/overview.svg?component";
import Life from "../icons/life.svg?component";
import Comms from "../icons/comms.svg?component";
import Prop from "../icons/prop.svg?component";
import Mech from "../icons/mech.svg?component";
import Power from "../icons/power.svg?component";
import Avionics from "../icons/avionics.svg?component";
import GNC from "../icons/gnc.svg?component";
import Thermal from "../icons/thermal.svg?component";

const bars = [
  { title: "Overview", icon: Overview },
  { title: "Life", icon: Life },
  { title: "Comms", icon: Comms },
  { title: "Prop", icon: Prop },
  { title: "Mech", icon: Mech },
  { title: "Power", icon: Power },
  { title: "Avionics", icon: Avionics },
  { title: "GNC", icon: GNC },
  { title: "Thermal", icon: Thermal },
];

const Dock = () => {
  return (
    <div className="flex items-center justify-center pt-10 space-x-8">
    <div className="relative flex px-2 pt-5 pb-4 bg-blue-900 rounded-t-3xl">
      <svg
        className="fill-current text-blue-900 absolute top-0 bottom-0 left-0 -translate-x-3/4"
        width="83"
        height="86"
        viewBox="0 0 83 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.3029 8.65669C68.8626 3.17225 75.6254 0 82.7578 0H83V86H0L64.3029 8.65669Z"
        />
      </svg>
      {bars.map((bar, i) => (
        <a href="#" key={i} className="flex flex-col items-center px-4 group">
        <bar.icon
          className="text-white fill-current h-7 w-7 group-hover:text-red"
        />
        <span className="text-gray-600 text-xxxs mt-1.5 group-hover:text-red">
          { bar.title }
        </span>
      </a>
      ))}
      
      <svg
        className="fill-current text-blue-900 absolute top-0 bottom-0 right-0 translate-x-3/4"
        width="83"
        height="86"
        viewBox="0 0 83 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6971 8.65669C14.1374 3.17225 7.37457 0 0.242245 0H0V86H83L18.6971 8.65669Z"
        />
      </svg>
    </div>
  </div>
  )
}

export default Dock
