import React from 'react'

 function Navbar() {
  return (
    <div>
      <nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#add">Add Book</a></li>
   
  </ul>
</nav>
        <h1>Welcome to our library app</h1>
        <p>This is a simple website with a navigation bar.</p>
        <p>Click on the links above to navigate.</p>
        <div id="home">
            <h2>Home</h2>
            <p>This is the home section.</p>
        
        </div>
    </div>
  )
}
export default Navbar;
