import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Search Page</Link> <br />
          <Link to="/favorites">Favorites</Link> <br />
        </li>
      </ul>
      {props.children}
    </>
  )
}
export default BaseLayout;