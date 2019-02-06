import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    // position: relative;

    // FOLLOWING IS A MUST FOR FLEX FIXED FOOTER TO WORK
    height: 100%; 
  }  
  html {
    scroll-behavior: smooth;
    @media screen and (max-width: 991px) {
    	margin-top: 65px;
    }
  }
  body {

    // H1 SIZE FIX FOR MOBILE DEVICES
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 2rem !important;
      }
    }
    
    // FOR A BOOTSTRAP BUGFIX
    line-height: 0;
    
    // FOR REMOVING ROUNDED CORNERS GLOBALLY 
    input, button {
      border-radius: 0px !important;
    }

    // FOR HTML VIDEO
    // video::-webkit-media-controls-overlay-play-button {
    //   display: none;
    // }
    // *::-webkit-media-controls-start-playback-button {
    //   display: none!important;
    //   -webkit-appearance: none;
    // }
  }



  #__next {
    // FOR SIDE BAR NAV TO WORK
    @media screen and (min-width: 992px) {

      // MUST FOR FIXED FOOTER
      height: 100% !important; 
      
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }
  }
  
  #main-content-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    // MUST FOR THE SITE TO HAVE FULL SCREEN WIDTH
    flex-grow: 1; 
  }

  main {
    // MUST FOR FIXED FOOTER
    flex-grow: 1; 
	}

	main,
	footer {
		flex-shrink: 0;
  }

	

  
  h1, h2, h3, h4, h5, h6 {
    //BOOTSTRAP 4 BUGFIX
    margin-bottom: 0; 
    padding-bottom: 1rem;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

// NAV BAR STYLES [DESKTOP NAV]

  #main-navigation {
    position: relative;
    width: 308px;

    .navbar {
      position: fixed;
      top: 0;
    }
    .nav-contact-box {
      position: fixed;
      top: 480px;
  
      .text {
        padding-left: 2rem;
        margin-top: 3rem;
  
        .address {
          margin-top: 1rem;
        }
      }
    }

  }

  

// HOME PAGE STYLES

  .home-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }

  .home-video-section {
    @media screen and (max-width: 768px) {
      min-height: 0rem !important;
    }
  }

  .partners-block {
    img {
      width: 100px !important;
    }
  }

  .home-subscription {
    .form-container {
      form {
        input {
          padding: 1.3rem;
        }
        button {
          padding: 0.2rem 2rem;
          font-size: 1.5rem;
        }
      }
    }
  }

// PRODUCT PAGE STYLES

  .product-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }
  .product-price-block {
    button {
      padding: .75rem;
      font-weight: 800;
      min-width: 270px;

      @media screen and (max-width: 350px) {
        min-width: 200px !important;
      }
    }
  }

// SOLUTIONS PAGE STYLES

  .solutions-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 100%;
      }
    }
    @media screen and (max-width: 700px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
      
    }
    .hero-block-1 {

      @media screen and (max-width: 350px) {
          padding-top: 3rem;

          // FOR MOBILE ORIENTATION - FAILING SO FAR
          @media screen and (orientation: landscape) {
            border: 2px solid red;
            margin-top: -3rem !important;
          }
          @media screen and (orientation: portrait) {
            border: 2px solid yellow;
          }
          
      }
     
    }

    

  }
  .solutions-pg-quote-slider {
    .carousel {
      
      .slide {
        background: #f8f9fa;
      }
      .control-arrow {
        // font-size: 2rem;
        // border: 1px solid red;
      }
    }
  }
  .product-price-block {
    button {
      padding: .75rem;
      font-weight: 800;
      min-width: 270px;
    }
  }  

// TEAM PAGE STYLES  

  .team-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
  }

  .team-pg-slider {
    .carousel {
      .slide {
        background: white;
      }
      .control-dots {
        margin-right: .5rem;
        padding: .5rem;
        .dot {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  .team-members {
    img {
      width: 100px !important;
    }
    img.linkedin-icon {
      width: 50px !important;
    }
    .member {
        min-width: 165px !important;
        margin: 0 !important;
      .text {
        min-height: 130px;
      }
    }

    @media screen and (min-width: 501px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 769px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 1201px) {
      .member {
        .text {
          min-height: 125px;
        }
      }
    }
  } //team-members ends


// MEDIA PAGE STYLES

  .media-hero {
    @media (min-width: 992px) and (max-width: 1150px) {
      padding-top: 3.5rem;
    }
    @media screen and (max-width: 991px) {
      display: block;
      min-height: 20rem;
      .hero-block-1 {
        text-align: center;
        padding-top: 3rem;
      }
      .hero-block-2 {
        .media-search {
          input[type='text'] {
            width: 70%
          }
          button {
            width: 30%;
          }  
        }
      }
    }
    @media screen and (max-width: 425px) {
      height: 25rem;
    }
  }

  .media-article {
    img {
      padding: 1rem;
      padding-bottom: 2rem;
      @media screen and (max-width: 1150px) and (min-width: 991px) {
        width: 100%;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
  .media-pagination {
    display: flex;
    justify-content: center;

    .page-numbers {
      padding: 1rem 1rem 0 1rem;
    }
  }

// FOOTER STYLES

  .footer-content {

    ul {
      list-style-type: none;
      padding: 0 !important;
    }
    .social-block {
      margin-top: 4.7rem;
    }

    @media screen and (max-width: 450px) {
      text-align: center;
      .social-icons {
        justify-content: center;
      }
    }
    @media screen and (max-width: 768px) {
      .footer-block {
        padding-top: 4rem;
      }
      .social-block {
        margin-top: 0rem;
      }
    }
   
  }

`;

export default GlobalStyle;
