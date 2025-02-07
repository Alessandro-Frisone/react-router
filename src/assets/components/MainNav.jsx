// ---IMPORT FUNCTIONS--- //
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/Posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
