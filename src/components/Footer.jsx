const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="pb-3 mb-3 nav justify-content-center border-bottom">
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
