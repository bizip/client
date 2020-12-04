import React, {Fragment} from 'react';
const Navigation=()=>{
   return(
<Fragment>
<nav className="flex items-center bg-gray-100 p-3 flex-wrap w-full">
<a href="/home">
<span className="text-2xl text-black font-bold tracking-wide block">BareFoot</span></a>
<button className="nav-taggler text-xl text-black inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto" data-target="#navigation"><i className="material-icons">menu</i></button>
<div className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-8 flex flex-col">
<a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>Home</span></a>
<a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>Guest</span></a>
<a href="home" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:bg-gray-200 hover:text-grey text-xl"><span>House</span></a>
</div>
</div>
</nav>
</Fragment>
   );
}

export default Navigation;