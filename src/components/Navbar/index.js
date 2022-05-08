import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu, NavItem,
	NavLink,
	NavBtn,
	NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	const toggleHome = () => {
		animateScroll.scrollToTop();
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
					<NavLogo to='/' onClick={toggleHome}>
							dolla
					</NavLogo>
					<MobileIcon onClick={toggle}>
							<FaBars />
					</MobileIcon>
					<NavMenu>
							<NavItem>
									<NavLink
										to='about'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}
										>
										About
									</NavLink>
							</NavItem>
							<NavItem>
									<NavLink
										to='discover'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}
										>
										Discover
									</NavLink>
							</NavItem>
							<NavItem>
									<NavLink
										to='services'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}
										>
										Services
									</NavLink>
							</NavItem>
							<NavItem>
									<NavLink
										to='signup'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}
										>
										Sign Up
									</NavLink>
							</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/signin'>Sign in</NavBtnLink>
					</NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;