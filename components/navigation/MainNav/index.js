import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { H6, Img, Box, Small, Div } from 'components/general';

const MainNavbar = styled(Navbar)`
	.navbar-nav {
		flex-direction: column;
		padding-left: 1.5rem !important;
		padding-right: 1rem;
	}
	.nav-item {
		border-bottom: 1px solid dodgerblue;
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		font-size: 1rem;
		text-align: left;
	}
`;
const DCLogo = styled.div`
	padding-top: 4rem;
	padding-bottom: 2.5rem;
`;

export class MainNav extends React.Component {
	render() {
		return (
			<div className="d-none d-lg-block" id="main-navigation">
				<MainNavbar color="" light className="navbar-expand-lg">
					<Nav className="ml-auto" navbar>
						<Link prefetch href="/" passHref>
							<NavbarBrand>
								<DCLogo>
									<Img
										src="/static/images/deepcast-logo.png"
										alt=""
										className=""
									/>
								</DCLogo>
							</NavbarBrand>
						</Link>

						<NavItem>
							<Link prefetch href="/" passHref>
								<NavLink>Home</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link prefetch href="/product" passHref>
								<NavLink>Product</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link prefetch href="/solutions" passHref>
								<NavLink>Solutions</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link prefetch href="/team" passHref>
								<NavLink>Team</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link prefetch href="/media" passHref>
								<NavLink>Media</NavLink>
							</Link>
						</NavItem>

						{/* <NavItem>
							<Link prefetch href="/sendgrid" passHref>
								<NavLink>SendGrid</NavLink>
							</Link>
						</NavItem> */}
						<NavItem>
							<Link prefetch href="/test" passHref>
								<NavLink>Test Page</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</MainNavbar>
				<Box className="nav-contact-box">
					<hr />
					<Div className="text">
						<H6 fontWeight="400">
							<Small>CONTACT</Small>
						</H6>
						<H6>
							<Small>*info@deepcast.ai</Small>
							<br />
							<Small>*(832)431-3292</Small>
						</H6>

						<H6 className="address">
							<Small>
								800 Town and Country Blvd #300, <br />
								Houston, TX 77024
							</Small>
						</H6>
					</Div>
				</Box>
			</div>
		);
	}
}

export default MainNav;
