import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebookF, url: "https://www.facebook.com" },
        { icon: FaTwitter, url: "https://www.twitter.com" },
        { icon: FaGoogle, url: "https://www.google.com" },
        { icon: FaInstagram, url: "https://www.instagram.com" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/kaleab-endrias-43bab3267/" },
        { icon: FaGithub, url: "https://www.github.com/kaleabendrias/travel_kenya.git" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">J&K Website</h2>
                        <p className="mt-2 text-gray-400">Explore the world with us</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.url}
                                className="text-white hover:text-gray-300 transition duration-300"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <link.icon className="text-2xl" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    <p className="mb-4">
                        Powered by{" "}
                        <a href="https://github.com/kaleabendrias" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                            Kaleab Endrias
                        </a>{" "}
                        &{" "}
                        <a href="https://github.com/RafaelJohn9" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                            John Kgunda
                        </a>
                    </p>
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} J&K Website. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;