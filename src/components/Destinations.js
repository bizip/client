import React, {Fragment} from 'react';
const Destinations=()=>{
   return(
     <Fragment>
     <div className="min-h-screen flex lg:items-center bg-purple-500">
     <div className="flex-1 max-w-8xl max-auto p-10">
     <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 grid-flow-row-dense">
     <li className="bg-gray-200 rounded-lg shadow-xl row-span-4"><div className="h-24"></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl"><div className="h-24"></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl "><div className="h-24"></div></li>
     <li className="bg-gray-200 rounded-lg shadow-xl col-span-2"><div className="h-24"></div></li>
     </ul>
     </div>
     </div>
     </Fragment>
   );
}
export default Destinations;