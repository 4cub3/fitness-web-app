import React from 'react'

interface HtextProps{
    children: React.ReactNode
}

const Htext:React.FC<HtextProps> = ({children}) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold capitalize">{children}</h1>
  )
}

export default Htext