import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render () {
    return(
      <div className="">
        
    
    
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="#" className="logo">
                            <img src="assets/images/qweb_logo.svg" alt="QWEB"></img>
                        </a>
                        <ul className="nav">
                            <li><a href="#welcome" className="active">Home</a></li>
                            
                            <li><a href="#events">Events</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#work-process">Work Process</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div className="welcome-area" id="welcome">

        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">

                        <img src="assets/images/logo.svg" alt="QWEB"></img>
                        <h1 style={{fontWeight:600}}><ReactTypingEffect
                              eraseDelay={1000}
                              
                              typingDelay={0}
                              speed={70}
                              text={["Welcome to QWEB.","We create websites.","For local businesses.","For clubs.", "Completely student run."]} //text=["Hello.", "World!"]
                              /></h1>
                        <h4>Queen's Web Development Club is a student run organization that teaches students  how to build websites through tutorials, workshops and real practice.</h4>
                        <a href="#projects" className="main-button-slider">Learn More</a>
                        {//<a href="./sponsor.js" className="main-button-donate">Sponsor Us</a>
                        }       
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="section home-feature">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src="assets/images/code.svg" alt=""></img></i>
                                </div>
                                <h5 className="features-title">Public Tutorials</h5>
                                <p>Education of different web development skills, 
                                    such as HTML/CSS and Node.js. Keep an eye on our Facebook page as we will be posting event details closer to the date.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src="assets/images/member.svg" alt=""></img></i>
                                </div>
                                <h5 className="features-title">Member Only Workshops</h5>
                                <p>In-depth workshops are provided to our members to teach them important skills to ensure they get the most out of their practical experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src="assets/images/globe.svg" alt=""></img></i>
                                </div>
                                <h5 className="features-title">Real World Projects</h5>
                                <p>Members have the opportunity to work on real projects led by experienced members, gathered from local businesses and other school clubs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section padding-top-70 padding-bottom-0" id="work-process">
            <div className="container">
                <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                                <div className="left-heading">
                                    <h2 className="section-title">Our Development Process</h2>
                                </div>
                                <div className="left-text">
                                    <p>QWEB members are sorted into design teams and then given a real world customer to consult with. 
                                      The customer plays an integral role while iterating through the development process. 
                                      Experienced members lead development teams of members of varying abilities.</p>
                                </div>
                            </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src="assets/images/cycle.png" className="rounded img-fluid d-block mx-auto" alt="App"></img>
                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hr"></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Our Past Projects</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Want to see what we’ve created? Check out these projects made by our members!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="port-post-thumb">
                        <div className="img">
                            <img className="port" src="assets/images/port1.png" alt=""></img>
                        </div>
                        <div className="port-content">
                            <h3>
                                <a href="#">Sci Formal Hour Logger</a>
                            </h3>
                            <div className="text">
                                    Web App designed for the Sci-Formal organizing committee to collect volunteer hours.
                            </div>
                            <a href="https://app.scienceformal.ca" className="main-button">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="port-post-thumb">
                        <div className="img">
                            <img className="port" src="assets/images/port2.png" alt=""></img>
                        </div>
                        <div className="port-content">
                            <h3>
                                <a href="#">Biotech Leadership Consulting</a>
                            </h3>
                            <div className="text">
                                    Website designed for a company providing leadership consulting on pharmaceutical projects.
                            </div>
                            <a href="https://www.biotechleadership.com" className="main-button">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="port-post-thumb">
                        <div className="img">
                            <img className="port" src="assets/images/port3.png" alt=""></img>
                        </div>
                        <div className="port-content">
                            <h3>
                                <a href="#">Safe Dentistry</a>
                            </h3>
                            <div className="text">
                                Website designed for company providing dental clinics safe practice certification's via on-site visit.
                            </div>
                            <a href="http://safedentistryinc.com" className="main-button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
<section className="counter" id="events">
    <div className="content">
        <div className="container">
                <div className="row">
                        <div className="offset-lg-2 col-lg-8">
                            <div className="info">
                                <h1>Our Event Dates</h1>
                                <p>
                                    Interested in coming to a QWEB event? Make sure to keep an eye out for these dates!
                                        Details will be posted on our Facebook page closer to the actual date.
                                </p>
                            </div>
                        </div>
                    </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item decoration-bottom">
                        <strong>28</strong>
                        <span>January, 2020</span>
                        <span>HTML/CSS</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item decoration-top">
                        <strong>20</strong>
                        <span>Febuary, 2020</span>
                        <span>JavaScript</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item decoration-bottom">
                        <strong>18</strong>
                        <span>March, 2020</span>
                        <span>ReactJS</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item">
                        <strong>11</strong>
                        <span>April, 2020</span>
                        <span>NodeJS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
<section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s" data-scroll-reveal-id="5" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                    <img src="assets/images/together.svg" class="rounded img-fluid d-block mx-auto" alt="App"></img>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div class="left-heading">
                        <h2 class="section-title">Real Projects</h2>
                    </div>
                    <div class="left-text">
                        <p>QWEB actively networks with web development firms and local businesses to discover and generate authentic web projects for our members. Intermediate members perfect their craft by delivering solutions to real-world problems, relevant to the skills in the areas they seek to develop.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>
    

    

    <section className="section padding-top-70 padding-bottom-0" id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="assets/images/tech.png" className="rounded img-fluid d-block mx-auto" alt="App"></img>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div className="left-heading">
                        <h2 className="section-title">Tech We Use</h2>
                    </div>
                    <div className="left-text" style={{paddingRight:'1em'}}>
                        <p>We develop using various frameworks and technologies in order to create a refined end product with efficient modern design inside and out.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="hr"></div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="section colored" id="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Contact Us</h2>
                    </div>
                </div>
                <div className="offset-lg-2 col-lg-8">
                    <div className="center-text">
                        <p>
                            Would you like to get a website made or know an organization who does? 
                            Want to learn more about what we do and how to join? 
                            Whatever your questions are, feel free to contact us here or message our Facebook page!
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="margin-bottom-30">Our Office Space</h5>
                    <div className="contact-text">
                        <p>Queen’s Centre 613 284 Earl St
                        Kingston, ON K7L 3N6 Queen's University</p>
                    </div>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="contact-form">
                        <form id="contact" action="" method="get">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""></input>
                              </fieldset>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email Address" required=""></input>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="https://www.facebook.com/queensuweb/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/qweb-queens-university-website-development/about/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/orgs/queens-web-development-club"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/qweb_club/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">Copyright &copy; 2020 Queen's Web Development</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    );
    
  }
}

export default App;
