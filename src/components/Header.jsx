import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return ( 
    <Header className="bg-slate-200 shadow-md">
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
      <h1 classname="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className='text-slate-500'>Real</span>
        <span className='text-slate-500'>Estate</span>
        <span className='text-slate-500'>Pro</span>
      </h1>
      </Link>
      <form className='bg-slate-200 p-3 rounded-lg flex flex-wrap'>
        <input
        type='text'
        placeholder='Search...'
        className='bg-transparent focus:outline-none w-24 sm:w64'/>
        <FaSearch className='text-slate-600'/>
      </form> 
      <ul className='flex gap-4'>
        <Link to='/'>
      <li className='hidden sm:inline text-slate-700 hover:underline'>
        Home
      </li>
      </Link>
      <Link to='about'>
      <li className='hidden sm:inline text-slate-700 hover:underline'>
        About
      </li>
      </Link>
      <Link to='sign in'>
      <li className='hidden sm:inline text-slate-700 hover:underline'>
        Sign in
      </li>
      </Link>
      </ul>
      </div>
    </Header>
  )
}
