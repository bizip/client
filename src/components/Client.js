import React, {Fragment} from 'react';
import img from '../images/client.jpg';
const Client=()=>{
   return(
<Fragment className="bg-gray-300">
<h2 className="lg:text-5xl text-4xl m-4 font-semibold text-center">Our client</h2>
  <section className="flex bg-gray-500">
  <div className="flex-1 max-w-8xl max-auto p-10">
  <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-x-8 gap-y-12">
  <li className="bg-white rounded-lg shadow-xl"><div className="h-30 items-center text-center">
  
            
                <a href="#">
                    <img alt="Placeholder" class="block ml-20 -mt-9 w-20 h-20 rounded-full overflow-visible" src="https://picsum.photos/600/400/?random" />
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    
                    <p class="text-grey-darker text-sm">
                    The keys are your screen names (used as the prefix for the responsive utility variants Tailwind generates
                    </p>
                </header>
  </div></li>
  <li className="bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  <li className="bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  </ul>
  </div>
  </section>
</Fragment>
   );
}

export default Client;