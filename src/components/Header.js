import React from 'react';

const Header = () => {
    return (
        <div class="ui secondary pointing menu">
  <a class="item">
    Home
  </a>
  <a class="item active">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
    );
}

export default Header;