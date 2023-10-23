import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
        <header>
            <nav>
                <NavLink to='/'>Logo</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='about'>About us</NavLink>
                <NavLink to='content'>Reviews</NavLink>
                <NavLink to='content'>Sign up</NavLink>
                <NavLink to='content'>Log in</NavLink>
            </nav>
        </header>
    )
}

export default NavBar