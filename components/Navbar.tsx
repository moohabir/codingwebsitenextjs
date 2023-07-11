import React from 'react';

function Navbar() {
  return (
    <div className="mx-auto">
      <nav className="flex justify-center items-center m-auto gap-10 mx-auto">
        <h2 className="text-2xl font-bold">SelfLearnCoders</h2>
        <p>Home</p>
        <p>About</p>
        <p>Courses</p>
        <p>Profile</p>
        <p>Login</p>
      </nav>
    </div>
  );
}

export default Navbar;
