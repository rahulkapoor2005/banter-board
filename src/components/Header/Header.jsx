import React, { useState, useEffect } from 'react';
import { Container, Logo, LogoutButton } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 750);

  // Update the `isWideScreen` state when the window resizes
  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 750);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 w-full bg-black p-4">
      <Container>
        <nav className="mt-4 flex">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/">
              <Logo width="30px" />
            </Link>
          </div>
          <ul className={`flex flex-wrap items-center gap-4 text-sm`}>
            {isWideScreen &&
              navItems
                .filter((item) => ['Home', 'Login', 'Signup', 'All Posts', 'Add Post'].includes(item.name))
                .map(
                  (item) =>
                    item.active && (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className="block rounded-full bg-black px-4 py-2 text-sm font-medium group-hover:bg-transparent text-white"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
            {/* Other buttons (All Posts, Add Post, Logout) */}
            {navItems
              .filter((item) => !['Home', 'Login', 'Signup', 'All Posts', 'Add Post'].includes(item.name))
              .map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="block rounded-full bg-black px-4 py-2 text-sm font-medium group-hover:bg-transparent text-white"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
