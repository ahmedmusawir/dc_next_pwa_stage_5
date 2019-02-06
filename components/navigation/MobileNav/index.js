import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { Img } from 'components/general';

const MainNavbar = styled(Navbar)`
	background: white;
	
	.navbar-collapse {
		height: 100vh;
		width: 100vw;
	}

	.navbar-toggler {
			border: 2px solid dodgerblue;
			background: dodgerblue;
			padding: 0.5rem;
			outline: none;
		}
	}

	.nav-item {
		border-bottom: 1px solid grey;
		padding: 2rem;
		font-size: 1rem;
		text-align: center;

		a {
			color: grey !important;
		}
	}
`;
const DCLogo = styled.div`
	margin-top: 5px;
	img {
		width: 95% !important;
		margin-top: -5px;
	}
`;
export class MobileNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div className="d-block d-lg-none">
				<MainNavbar dark className="fixed-top">
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
						className=""
					/>
					<Link prefetch href="/" passHref>
						<NavbarBrand>
							<DCLogo>
								<Img
									src="/static/images/deepcast-logo.png"
									alt=""
									className="img-fluid pull-right"
								/>
							</DCLogo>
						</NavbarBrand>
					</Link>

					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
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
							</NavItem>
							<NavItem>
								<Link prefetch href="/test" passHref>
									<NavLink>Test Page</NavLink>
								</Link>
							</NavItem> */}
						</Nav>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default MobileNav;
