// ---IMPORT FUNCTIONS--- //
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav className="flex justify-center items-center align-center">
      <img className="w-28 h-28" src="./img/LOGO_138.png" alt="" />
      <ul className="flex justify-center gap-12 font-extrabold text-xl p-8 w-full">
        <li className="cursor-pointer transition-transform duration-200 hover:scale-115">
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-115">
          <NavLink to="/ContactUs">Contact Us</NavLink>
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-115">
          <NavLink to="/Posts">Posts</NavLink>
        </li>
      </ul>
      <img className="w-28 h-28" src="./public/img/LOGO_138.png" alt="" />
    </nav>
  )
}
