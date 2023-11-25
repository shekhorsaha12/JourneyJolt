import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <Link className="sidebar-brand" to="/home">
          <span className="align-middle">
            <img src="./img/jj-invert.png" alt="" width={180} />
          </span>
        </Link>
        <ul className="sidebar-nav mt-5">
          <li className={`sidebar-item ${location.pathname === '/home' ? 'active' : ''}`}>
            <Link className={`sidebar-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">
              <i className="align-middle" data-feather="sliders"></i>
              <span className="align-middle">Home</span>
            </Link>
          </li>
          <li className={`sidebar-item ${['/places', '/place-details', '/create-place', '/edit-place'].includes(location.pathname) ? 'active' : ''}`}>
            <Link className={`sidebar-link`} to="/places">
              <i className="align-middle" data-feather="user"></i>
              <span className="align-middle">Places</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Sidebar;