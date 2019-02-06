import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PageContainer } from 'components/layout';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
	Img,
	Div,
	Card,
	Section,
	Block,
	Paragraph,
	SectionBackground,
	Slider,
} from 'components/general';

const RelateMedia = styled.div`
	// border: 1px solid red;
`;

class TeamPage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - TeamPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TEAM HERO SECTION */}
				<SectionBackground bgColor="gradient">
					<PageContainer>
						<Section height="20rem" className="team-hero">
							<Block flexBasis="50" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H2 fontWeight="800" light>
											More than 30 years of shared experience for the best
											results
										</H2>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50" className="hero-block-2" />
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEAM SLIDER BLOCK */}
				<SectionBackground bgColor="grey">
					<PageContainer>
						<Section gridStart="768px">
							<Block flexBasis="40">
								<Paragraph>
									<Fade>
										<H6 italic>
											Our results are reflected on our customers opinions Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
										</H6>
										<H6 italic>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60">
								<Paragraph>
									<Slider
										className="team-pg-slider"
										autoPlay
										infiniteLoop={true}
										showStatus={false}
										emulateTouch={true}
										showArrows={false}
										width="100%"
										showThumbs={false}
										imgLinks={[
											'https://picsum.photos/500/300?image=1048',
											'https://picsum.photos/500/300?image=1033',
											'https://picsum.photos/500/300?image=1031',
										]}
									/>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEAM MEMBER SECION 1 */}
				<SectionBackground bgColor="light" className="team-members pt-5 pb-5">
					<PageContainer>
						<Section center gridStart="300px">
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Core Team
									</H3>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/hector.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Hector Klie</H6>
												<P>
													<small> CEO, Lead Data Scientist</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/hklie/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/arturo.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Arturo Klie</H6>
												<P>
													<small> CTO, Sr. Software Engineer</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/klieart/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/duc_le.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Le</H6>
												<P>
													<small>
														{' '}
														Sr. Reservoir Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/duchuule/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/duc_vuong.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Vuong</H6>
												<P>
													<small>
														{' '}
														Sr. Petroleum Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<A href="!#" target="_blank">
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/wei_ma.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Wei Ma</H6>
												<P>
													<small> Sr. Petroleum Engineer, Data Scientist</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/wei-ma-1b01b541/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEAM MEMBER SECION 2 */}
				<SectionBackground bgColor="grey" className="team-members pt-5 pb-5">
					<PageContainer>
						<Section center gridStart="300px">
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Advisors
									</H3>
								</Paragraph>
							</Block>

							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/advisor2.jpg"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Yves Chevalier</H6>
												<P>
													<small> Exploration Geosciences Expert</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/yves-m-r-chevalier-1b915451/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/consultant5.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Tan Nguyen</H6>
												<P>
													<small>
														{' '}
														Drilling and Production Engineer Expert
													</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/tan-nguyen-031b8596/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/reinaldo.png"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Reinaldo Gonzalez</H6>
												<P>
													<small> Geomodeling and Risk Analysis Expert</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/gonzalezreinaldo/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/consultant3.jpg"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Horacio Florez</H6>
												<P>
													<small>
														{' '}
														Computational Scientist and Geomechanics Expert
													</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/horacio-florez-87b37b24/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="static/images/team/fetkovich.jpg"
										imgCircle
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Mick Fetkovich</H6>
												<P>
													<small> Petroleum Engineer Expert</small>
												</P>
											</Div>
											<A
												href="https://www.linkedin.com/in/mick-fetkovich-90013235/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* RELATED MEDIA BLOCK */}
				<SectionBackground bgColor="light" className="">
					<PageContainer>
						<Fade>
							<Section gridStart="760px">
								<Block flexBasis="100">
									<Paragraph padding="0">
										<H4 fontWeight="800" className="pt-5">
											Related media content
										</H4>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=0"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600">
														Media content description
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=1"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600">
														Media content description
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=2"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600">
														Media content description
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
							</Section>
						</Fade>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}
export default TeamPage;
