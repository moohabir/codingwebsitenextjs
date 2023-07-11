import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <footer className="flex flex-col gap-10 ">
        <h2 className="text-xl font-bold">Pages</h2>
        <p>Home</p>
        <p>About</p>
        <p>Courses</p>
        <p>Profile</p>
        <p>Login</p>
      </footer>
      <p className=" flex justify-center items-center m-auto">
        {' '}
        &copy;Mohamed Abdille, 2023{' '}
      </p>
    </div>
  );
}

export default Footer;
