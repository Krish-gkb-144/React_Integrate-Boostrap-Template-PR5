const Header = () => {
    return (
        <>
            {/* <div id="preloader">
                <div id="status" class="la-ball-triangle-path">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}

            {/* <div class="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
                <div class="top-border wow fadeInDown animated" style="visibility: visible; animation-name: fadeInDown;"></div>
                <div class="right-border wow fadeInRight animated" style="visibility: visible; animation-name: fadeInRight;"></div>
                <div class="bottom-border wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;"></div>
                <div class="left-border wow fadeInLeft animated" style="visibility: visible; animation-name: fadeInLeft;"></div>
            </div> */}
            <header id="banner" classNameName="scrollto clearfix" data-enllax-ratio=".5">
                <div id="header" className="nav-collapse">
                    <div className="row clearfix">
                        <div className="col-1">

                            <div id="logo">

                                <img src="images/logo.png" id="banner-logo" alt="Landing Page" />

                                <img src="images/logo-2.png" id="navigation-logo" alt="Landing Page" />

                            </div>

                            <aside>

                                <ul className="social-icons">
                                    <li>
                                        <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                                            <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" title="Google+" href="http://google.com/+username">
                                            <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                                            <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                                            <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" title="behance" href="http://www.behance.net">
                                            <i className="fa fa-behance fa-1x"></i><span>Behance</span>
                                        </a>
                                    </li>
                                </ul>

                            </aside>

                            <nav id="nav-main">
                                <ul>
                                    <li>
                                        <a href="#banner">Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#clients">Clients</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Pricing</a>
                                    </li>
                                </ul>
                            </nav>

                            <div id="nav-trigger"><span></span></div>
                            <nav id="nav-mobile"></nav>

                        </div>
                    </div>
                </div>

                <div id="banner-content" className="row clearfix">

                    <div className="col-38">

                        <div className="section-heading">
                            <h1>A FREE AND SIMPLE LANDING PAGE</h1>
                            <h2>Namari is a free landing page template you can use for your projects. It is free to use for your
                                personal and commercial projects, enjoy!</h2>
                        </div>

                        <a href="#" className="button">START CREATING TODAY</a>

                    </div>

                </div>
            </header>

        </>
    )
}
export default Header;