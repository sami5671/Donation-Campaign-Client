import { NavLink } from "react-router-dom";
const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/Statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* navbar start  */}
      <section className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start lg:mr-40">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <img className="w-1/2 lg:w-1/4" src="/Logo.png" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-12 gap-10">{links}</ul>
          </div>
        </div>
        {/* Navbar end here  */}
      </section>
    </>
  );
};

export default Header;
