import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const favorites = store.favorites;

  return (
    <nav className="navbar">
      <div style={{ width: "100px" }}>
        <Link to={"/"}>
          <img
            src="https://imgs.search.brave.com/bekywz0Fx6pyMrEIl8ksllX_EeqaWRL3Uc2VucgPqoc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvU3Rhcl9X/YXJzX2xvZ29fYmxh/Y2stNzAweDcwMC5w/bmc"
            alt="Imagen"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
      </div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites{" "}
          <span className="badge text-bg-secondary">{favorites.length}</span>
        </button>
        <ul className="dropdown-menu">
          {favorites.map((item) => {
            return (
              <li
                className="dropdown-item d-flex flex-row gap-2"
                key={item.name}
              >
                {item.name}
                <p
                  onClick={() => {
                    actions.removeFavorites(item);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  🗑️
                </p>
              </li>
            );
          })}
          {favorites.length === 0 && (
            <li className="dropdown-item">No hay favoritos</li>
          )}
        </ul>
      </div>
    </nav>
  );
};
