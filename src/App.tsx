import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";

const navClass =
  "px-4 py-2 hover:text-newsletter-accent transition-colors font-medium";

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-white/10">
        <nav className="container mx-auto flex items-center justify-between py-4 max-w-7xl">
          <NavLink to="/" className="font-bold text-lg text-white">
            Newsletter
          </NavLink>
          <div className="space-x-6">
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/posts" className={navClass}>
              Posts
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
