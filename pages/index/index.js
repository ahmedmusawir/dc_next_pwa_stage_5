import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	A,
	P,
	Img,
	Video,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Button,
	Input,
	SectionBackground,
} from 'components/general';

class HomePage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* HOME HERO SECTION */}
				<SectionBackground
					bgImgLink="/static/images/_home/home-hero-1600.jpg"
					parallax
				>
					<PageContainer>
						<Section height="lg" className="home-hero">
							<Block flexBasis="40" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="800">
											STREAMLINE YOUR OPERATION
										</H1>
										<H6 light>
											Lorem ipsum dolor sit amet consec, sicing elit. Lorem
											ipsum dolor sit amet cons, adipisicing elit.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" className="hero-block-2">
								{/* <Img
									src="/static/images/oil-rig.png"
									alt=""
									className="img-fluid"
								/> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TOP TEXT & IMAGE SECTION */}
				<SectionBackground bgColor="grey" className="pt-5">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph padding="4rem">
									<Fade>
										<H4 fontWeight="800">
											Simplify and Automate Through Innovations in Physics and
											AI
										</H4>

										<H6>
											To help the industrial sector thrive through the
											application of data-driven processes and cutting-edge AI
											technologies.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Img
											src="/static/images/home-ai-logo.jpg"
											alt=""
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FLEX VIDEO SECTION */}
				<Section type="flex" className="home-video-section">
					<Block>
						<Video
							mp4Src="/static/videos/ai-vid.mp4"
							webmSrc="/static/videos/ai-vid.webm"
							posterSrc="/static/images/_home/home-video-cover.jpg"
						/>
					</Block>
				</Section>

				{/* PARTNER LOGO SECTION */}
				<SectionBackground bgColor="" className="partners-block pb-5">
					<PageContainer>
						<Section gridStart="300px">
							<Block flexBasis="100">
								<Paragraph>
									<H4 fontWeight="800" className="text-center mt-5">
										We Strive for Cutting-Edge Solutions Through our Strategic
										High-Tech Partnerships
									</H4>
								</Paragraph>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-1.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-2.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-3.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-4.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-5.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-1.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-2.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-3.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-4.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-5.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="blue" className="home-subscription">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="60">
								<Paragraph padding="4rem">
									<Fade bottom cascade>
										<H4 light fontWeight="800">
											More to Come!
										</H4>
										<H5 light>
											Sign up for our newsletter to get the latest product
											announcements
										</H5>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="40">
								<Paragraph className="form-container">
									<Fade>
										<Form>
											<FormGroup>
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
												/>
											</FormGroup>
											<Button color="danger" className="float-right mt-1">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}
export default HomePage;
