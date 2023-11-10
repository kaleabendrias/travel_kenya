import { FaFacebookF, FaTwitter, FaGoogle, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <Link to={'https://www.facebook.com'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaFacebookF />
                    </Link>
                    <Link to={'https://www.twitter.com'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaTwitter />
                    </Link>
                    <Link to={'https://www.google.com'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaGoogle />
                    </Link>
                    <Link to={'https://www.instagram.com'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaInstagram />
                    </Link>
                    <Link to={'https://www.linkedin.com'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaLinkedin />
                    </Link>
                    <Link to={'https://www.github.com/kaleabendrias/travel_kenya.git'} className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaGithub />
                    </Link>
                </section>
                <section className="mb-4">
                    <p>
                        Designed by <a href="https://example.com/">Kaleab Endrias & John Kagunda</a>
                    </p>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} J&K Website
            </div>
        </footer>
    );
};

export default Footer;
