export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appName = 'pixibli';

  return (
    <footer className='container mx-auto p-8 flex items-center'>
      <div className='flex-1'>
        <p>
          © {currentYear} {appName}. All rights reserved.
        </p>
        <p>Powered by imagination & AI.</p>
      </div>
      <div className='flex-1 flex justify-center'>
        <ul className='flex text-transform-uppercase gap-4 text-underline font-bold'>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Terms of Service</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='flex-1 flex justify-end gap-4'>
        <p>VISUAL FLAIR</p>
      </div>
    </footer>
  );
}
