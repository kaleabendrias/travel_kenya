import { FaFacebookF, FaTwitter, FaGoogle, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <Link
              to={"https://www.facebook.com"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"https://www.twitter.com"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"https://www.google.com"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle />
            </Link>
            <Link
              to={"https://www.instagram.com"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.linkedin.com"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"https://www.github.com/kaleabendrias/travel_kenya.git"}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
          </section>
          <section className="mb-4">
            <p>
              Designed by{" "}
              <span>
                <a
                  href="https://github.com/kaleabendrias"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kaleab Endrias &
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/RafaelJohn9"
                  target="_blank"
                  rel="noreferrer"
                >
                  John Kgunda
                </a>
              </span>
            </p>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} J&K Website
        </div>
      </footer>
    );
};

export default Footer;
