import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

// TODO:
//  - add hover and active for links

const Header = () => {
  const user = useAuth();

  return (
    <header
      className="
        d-flex
        flex-wrap
        align-items-center
        justify-content-center
        justify-content-md-between
        p-3
        mb-4
        border-bottom
        shadow-sm
      "
    >
      <Link
        to="/"
        className="
            d-flex
            align-items-center
            col-md-3
            mb-2
            mb-md-0
            text-dark
            text-decoration-none
          "
      >
        CRM Realty BBS
      </Link>

      <nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/form" className="nav-link px-2 link-dark">Форма</Link>
        </li>
        <li>
          <Link to="/table" className="nav-link px-2 link-dark">Таблица</Link>
        </li>
      </nav>

      <div className="col-md-3 text-end">
        <Button type="button" variant="outline-primary" className="me-2">Сотрудники</Button>
        <Button
          type="button"
          variant="danger"
          onClick={() => user?.signOut(() => {
            console.log('выход из аккаунта');
            localStorage.removeItem('token');
          })}
        >
          Выход
        </Button>
      </div>
    </header>
  );
};

export default Header;
