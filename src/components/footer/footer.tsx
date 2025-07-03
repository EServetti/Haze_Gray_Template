import { House, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-content">
        <span className="footer-contact">
          <h3>Haze Gray</h3>
          <span className="footer-contact-items">
            <a href="https://haze-gray.super.site/">
                <House />
            </a>
            <a href="https://www.linkedin.com/company/haze-gray-consulting/">
              <Linkedin />
            </a>
          </span>
        </span>
        <section className="footer-rows">
          <ul>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
            <li>
              <a href="">Item_1</a>
            </li>
          </ul>
        </section>
        <p>© Haze Gray.</p>
      </div>
    </footer>
  );
};

export default Footer;
