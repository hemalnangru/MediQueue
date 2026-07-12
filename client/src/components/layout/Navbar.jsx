import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Ambulance,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Departments", path: "/departments" },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
  <HeartPulse size={24} />
</div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                MediQueue
              </h2>

              <p className="text-xs text-gray-500">
                Hospital Management
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-3">

          <Link to="/login">
  <Button variant="ghost">
    Login
  </Button>
</Link>

<Link to="/register">
  <Button variant="outline">
    Register
  </Button>
</Link>

            <Button className="gap-2 shadow-lg">
              <Ambulance size={18} />
                Emergency
              <ArrowRight size={16} />
            </Button>

          </div>

          {/* Mobile */}

          <button
  onClick={() => setOpen(!open)}
  className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
>
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white/95 py-5 backdrop-blur-xl lg:hidden">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
              ))}

              <Button className="mt-3">
                Emergency
              </Button>

            </div>

          </div>
        )}

      </Container>
    </header>
  );
};

export default Navbar;