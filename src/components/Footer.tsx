import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <ul>
                    <Link to="/" className="links">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="links">
                        <li>About me</li>
                    </Link>
                    <Link to="/projects" className="links">
                        <li>Projects</li>
                    </Link>
                    <Link to="/quotes" className="links">
                        <li>Quotes</li>
                    </Link>
                </ul>
            </div>
            <div>
                <p>Made with &hearts; by Thais Mota</p>
            </div>
        </footer>
    );
}
