import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdPictureAsPdf } from "react-icons/md";



const FooterIcon = ({icon, socialLink}) => {
  return (
    <a href={socialLink} className="icon" target="_blank" rel="social icon">
      {icon}
    </a>
  )
}


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          <FooterIcon icon={<FaLinkedin className="logo-icon" />} socialLink="https://www.linkedin.com/in/catnguyen1/" />
          <FooterIcon icon={<FaSquareGithub className="logo-icon"  />} socialLink="https://github.com/NguyenCatNguyen" />
          <FooterIcon icon={<MdPictureAsPdf className="logo-icon" />} socialLink="./pdf/CatNguyen.pdf" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Cat Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;