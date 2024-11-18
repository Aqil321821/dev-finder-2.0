import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content aqil'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl text-white' />
          <Link to='/' className='font-bold align-middle text-xl text-white '>
            Dev Finder
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-white uppercase'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn text-white uppercase'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
