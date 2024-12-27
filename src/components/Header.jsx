const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="mb-2 text-white d-flex align-items-center mb-lg-0 text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="mb-2 nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
            <li>
              <a href="#" className="px-2 nav-link text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="px-2 text-white nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="px-2 text-white nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="px-2 text-white nav-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="px-2 text-white nav-link">
                About
              </a>
            </li>
          </ul>

          <form
            className="mb-3 col-12 col-lg-auto mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
