import React from 'react';
import { Link } from 'react-router-dom';

export const MenuComponent = () => (

    <nav>
        <ul className="list-unstyled">
            <li>
                <Link to="/vagas">Vagas</Link>
            </li>
        </ul>
    </nav>
)
 
export default MenuComponent;