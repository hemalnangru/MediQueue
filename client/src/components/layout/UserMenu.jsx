import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/useAuth";

const UserMenu = ({ mobile = false, onClose = () => {} }) => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (mobile) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobile]);

  const handleLogout = () => {
    logout();
    setOpen(false);
    onClose();
    navigate("/");
  };

  const initials =
    user?.fullName
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  if (mobile) {
    return (
      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              {initials}
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                {user?.fullName}
              </p>

              <p className="text-sm capitalize text-slate-500">
                {user?.role}
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/dashboard"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
        >
          <User size={20} />
          My Profile
        </Link>

        <Link
          to="/settings"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
        >
          <Settings size={20} />
          Settings
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:border-blue-500 hover:shadow-md"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {initials}
        </div>

        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900">
            {user?.fullName}
          </p>

          <p className="text-xs capitalize text-slate-500">
            {user?.role}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="border-b border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {initials}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {user?.fullName}
                </h3>

                <p className="text-sm capitalize text-slate-500">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
            >
              <User size={20} />
              My Profile
            </Link>

            <Link
              to="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
            >
              <Settings size={20} />
              Settings
            </Link>
          </div>

          <div className="border-t border-slate-200 p-2">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;