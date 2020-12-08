import React, {Fragment} from 'react';
import hotel from '../images/hotel.jpg';
const Destinations=()=>{
   return(
     <Fragment>
     <div className="flex lg:items-center">
     <div className="flex-1 max-w-8xl max-auto p-10">
     <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 grid-flow-row-dense">
     <li className="bg-gray-200 rounded-lg shadow-xl row-span-4"><div className="h-screen"><img src={hotel} alt="Hotel" /></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl"><div className="h-screen"><img src={hotel} alt="Hotel" /></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl"><div className="h-screen"><img src={hotel} alt="Hotel" /></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl col-span-2"><div className="h-screen"><img src={hotel} alt="Hotel" /></div></li>
     </ul>
     </div>
     </div>
     </Fragment>
   );
}
export default Destinations;