// ---IMPORT FUNCTIONS--- //
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---IMPORT LAYOUT--- //
import DefaultLayout from "./assets/components/Layout/DefaultLayout";

// ---IMPORT PAGES--- //
import Homepage from "./assets/components/pages/Homepage";
import ContactUs from "./assets/components/pages/ContactUs";
import Posts from "./assets/components/pages/Posts";
import Ricette from "./assets/components/pages/Ricette";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Posts/:id" element={<Ricette/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
