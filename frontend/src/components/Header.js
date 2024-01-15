import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Header() {
  let page = window.location.pathname;
  page = page.split('/');
  const [currentPage, setCurrentPage] = useState(page[1]);
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-4">
        <Link to="/" className="align-items-center me-md-auto text-dark text-decoration-none" id="header">
          <h4>Jan</h4>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item" style={{ borderBottom: currentPage==''?'2px solid #0073ff':'none', paddingBottom: currentPage==''?'1px':'none' }}>
            <Link to="/" className="nav-link" onClick={() => setCurrentPage('')}>Portfolio</Link>
          </li>
          <li className="nav-item" style={{ borderBottom: currentPage=='projects'?'2px solid #0073ff':'none', paddingBottom: currentPage=='projects'?'1px':'none' }}>
            <Link to="projects" className="nav-link" onClick={() => setCurrentPage('projects')} >Projekty</Link>
          </li>
          <li className="nav-item" style={{ borderBottom: currentPage=='contact'?'2px solid #0073ff':'none', paddingBottom: currentPage=='contact'?'1px':'none' }}>
            <Link to="contact" className="nav-link" onClick={() => setCurrentPage('contact')} >Kontakt</Link>
          </li>
        </ul>
      </header>
      <hr style={{ marginTop: '1px', color: 'gray' }} />
    </div>
  );
}
export default Header;