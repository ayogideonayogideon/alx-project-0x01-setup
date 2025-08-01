import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="py-4 text-white bg-blue-600 shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <h3 className="text-2xl font-bold">
     <Link href="/">Daily Contents</Link>
  </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;