// ---IMPORT FUNCTIONS--- //
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav className="flex justify-center items-center align-center">
      <img className="w-28 h-28" src="./public/img/Logo_138.webp" alt="" />
      <ul className="flex justify-center gap-12 font-bold text-xl p-8 w-full">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/Posts">Posts</NavLink>
        </li>
      </ul>
      <img className="w-28 h-28" src="./public/img/Logo_138.webp" alt="" />
    </nav>
  )
}
