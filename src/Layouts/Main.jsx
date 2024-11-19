import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="tatp-main-header">
        <span>Sponsorship Management</span>
      </div>

      <div className="tatp-dasboard">
        <nav className="tatp-header-menu">
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="paid-tools-analytic">Paid Tools</NavLink>
            </li>
          </ul>
        </nav>
        <div className="tatp-dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
