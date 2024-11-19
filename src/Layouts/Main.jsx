import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="tatp-main-header">
        <h2>Sponsorship Management</h2>
      </div>

      <div className="tatp-dasboard">
        <nav className="tatp-header-menu">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="paid-tools-analytic">Paid Tools</Link>
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
