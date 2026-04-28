import { Outlet, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function MainLayout() {
  const navigate = useNavigate();
  const { logout, userId } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <img
            src="/Logo.svg"
            alt="SportSee"
            className="logo"
          />

          <nav className="site-nav">
            <div className="nav-left-group">
              <NavLink to={`/dashboard/${userId}`}>
                Dashboard
              </NavLink>

              <NavLink to={`/profile/${userId}`}>
                Mon profil
              </NavLink>
            </div>

            <button
              type="button"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>©Sportsee Tous droits réservés</span>

          <div className="footer-links">
            <span>Conditions générales</span>
            <span>Contact</span>
            <img
              src="/littleLogo.svg"
              alt=""
              aria-hidden="true"
              className="footer-logo"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;