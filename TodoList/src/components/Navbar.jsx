import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white h-12 py-2' >
    <div className='Logo'>
        <span className='font-bold text-xl mx-8'>Itask</span>
    </div>
        <ul className='flex gap-8 mx-9' >
        <li className='hover:font-bold transition-all cursor-pointer'>Home </li>
        <li className='hover:font-bold transition-all '>About </li>
        </ul>
    </nav>
  )
}

export default Navbar
