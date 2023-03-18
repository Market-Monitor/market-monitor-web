const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-11/12 mx-auto pt-10 pb-20">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-black text-gray-700">
              Market<span className="text-emerald-500">Monitor</span>
            </h1>
          </div>

          <div className="flex items-start justify-between">
            <div className="ml-20">
              <strong>Resources</strong>
              <ul>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Tech Updates</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>

            <div className="ml-20">
              <strong>About MarketMonitor</strong>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="ml-20">
              <strong>Socials</strong>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600">
          &copy; {new Date().getFullYear()} MarketMonitor. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
