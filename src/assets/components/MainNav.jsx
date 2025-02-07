// ---IMPORT FUNCTIONS--- //
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex justify-center gap-12 font-bold text-xl p-8 w-full">
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
