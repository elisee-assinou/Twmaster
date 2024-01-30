import React from 'react';

function App() {
  return (
    <div className="container min-h-screen mx-auto bg-center bg-cover px-28 py-5 relative" style={{ backgroundImage: "url('/image.png')" }}>
      <nav className='flex items-center'>
        <img src='logo.png' alt='logo'className='w-40 cursor-pointer'/>
        <ul className='flex-1 text-center'>
          <li className='list-none  inline-block px-5' ><a href='/' className='no-underline text-white px-2'>Home</a></li>
          <li className='list-none  inline-block px-5'><a href='/' className='no-underline text-white px-2'>About</a></li>
          <li className='list-none  inline-block px-5'><a href='/' className='no-underline text-white px-2'>Features</a></li>
          <li className='list-none  inline-block px-5'><a href='/' className='no-underline text-white px-2'>Contact</a></li>
        </ul>
        <img src='cart.png' alt='cart' className='w-6 cursor-pointer' />
      </nav>

      <div className='text-white mt-48 max-w-xl'>
        <h1 className='text-6xl leading-normal '>Groceries<br />delivery in<span className='font-light'> 15 mins</span> </h1>
        <p>Grocify offers a wide range of products, including fresh products, meats, dairy baked goods and non perishable items</p>

        <div className='mt-10'>
          <a href='/' className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">Order Now   </a>
          <a href='/'>Download App <span className='text-xl'>&#8595;</span></a>
        </div>
      </div>
      <img src='grocery-image.png' alt='grocery' className='w-full xl:w-1/2 xl:absolute bottom-0 right-0'/>
    </div>
  );
}

export default App;
