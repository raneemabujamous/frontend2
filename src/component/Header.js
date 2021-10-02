import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/fav">faveroite</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
