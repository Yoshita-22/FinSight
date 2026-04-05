import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useRole } from "../../context/RoleContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {darkMode,setDarkMode} = useTheme();
  const {role,setRole} = useRole();
  return (
    <nav className="
      w-full
      bg-surface-light dark:bg-surface-dark
      border-b border-border-light dark:border-border-dark
      px-6 py-4
    ">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="
          text-lg font-semibold
          text-text-primaryLight dark:text-text-primaryDark
        ">
          FinSight
        </h1>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">

          {/* Role Toggle */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="
              px-3 py-1 rounded-lg
              bg-card-light dark:bg-card-dark
              text-text-primaryLight dark:text-text-primaryDark
              border border-border-light dark:border-border-dark
            "
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

          {/* Theme Button */}
        <button
            onClick = {()=>setDarkMode(darkMode=>!darkMode)}
            className="
                p-2 rounded-full
                bg-card-light dark:bg-card-dark
                border border-border-light dark:border-border-dark
                transition hover:scale-105
            "
            >
            {darkMode ? (
                <FiSun className="text-yellow-400 text-lg" />
            ) : (
                <FiMoon className="text-gray-700 dark:text-white text-lg" />
            )}
        </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primaryLight dark:text-text-primaryDark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="
              px-3 py-2 rounded-lg
              bg-card-light dark:bg-card-dark
              text-text-primaryLight dark:text-text-primaryDark
              border border-border-light dark:border-border-dark
            "
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={()=>setDarkMode(darkMode=>!darkMode)}
             className="flex items-center gap-2 btn-primary"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            Toggle Theme
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;