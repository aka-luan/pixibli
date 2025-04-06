import Image from 'next/image';
import Button from './Button';

export default function Header() {
  const isLoggedIn = true;

  return (
    <nav className='container mx-auto p-8 flex items-center'>
      <div className='flex-1'>
        <ul className='flex text-transform-uppercase gap-4 text-underline font-bold'>
          {isLoggedIn ? (
            <>
              <li>
                <a href='#'>Transform</a>
              </li>
              <li>
                <a href='#'>Gallery</a>
              </li>
              <li>
                <a href='#'>How it Works</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='#'>Transform</a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className='flex-1 flex justify-center text-5xl font-quicksand'>
        {/* <Image
          src={'/nav-logo.png'}
          alt='pixibli logo'
          width={220}
          height={200}></Image> */}
        <p>pixibli</p>
      </div>
      <div className='flex-1 flex justify-end gap-4'>
        {isLoggedIn ? (
          <>
            <Button className='secondary'>Log Out</Button>
          </>
        ) : (
          <>
            <Button className='secondary'>Log In</Button>
            <Button className='primary'>Sign Up</Button>
          </>
        )}
      </div>
    </nav>
  );
}
