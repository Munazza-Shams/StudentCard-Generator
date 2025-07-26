import React from 'react'

function Navbar() {
  return (
    <>
<nav
  className="navbar bg-light"
  style={{
    width: '100vw',
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
  }}
>
  <div className="d-flex align-items-center px-3" style={{ width: '100%' }}>
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtn1VskrCTgH7imA4ZvqGr1am4NUGzEAfPLWhJpi1QjDZiRbY0m5wcKmRMXBfVsBFbkrw&usqp=CAU"
        alt="Logo"
        width="30"
        height="34"
        className="d-inline-block align-text-top"
        style={{ marginRight: '10px' }}
      />
      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Admin Dashboard</span>
    </a>
  </div>
</nav>



    </>
  )
}

export default Navbar