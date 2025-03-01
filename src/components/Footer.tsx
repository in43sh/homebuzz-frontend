import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#353b3e] py-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top of Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* First Column - Contact Info */}
          <div>
            <h2 className="mb-3 text-2xl font-bold">Logo</h2>
            <p>12345 Valley Ave 1, Seattle, WA</p>
            <p>(800) 123-45-67</p>
            <p>(800) 123-45-68</p>
            <p>
              <a
                href="mailto:mail@mail.com"
                className="hover:text-primary-dark"
              >
                mail@mail.com
              </a>
            </p>
          </div>

          {/* Second Column - Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <p className="mb-3 text-gray-300">Let's get connected!</p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a href="#" className="hover:text-primary-dark">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-dark">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-dark">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Third Column - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">
              Sign up for our newsletter
            </h3>
            <p className="mb-3 text-gray-300">
              Get $10 off your next purchase.
            </p>
            <div className="flex items-center space-x-0">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-white bg-transparent p-2 text-white focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark rounded-r-md px-4 py-2 text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom of Footer */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-500 pt-4 text-sm text-gray-300 md:flex-row">
          <p className="mb-2 md:mb-0">
            <a href="/policy" className="hover:text-primary-dark">
              Policy statement
            </a>{' '}
            |
            <a href="/cookies" className="hover:text-primary-dark">
              {' '}
              Cookie usage
            </a>
          </p>
          <p>© 2025 Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
