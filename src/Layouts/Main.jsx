import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="paid-tools-analytic">Paid Tools</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Main;