import React, {Fragment} from 'react';
const Recomended=()=>{
   return(
     <Fragment>
     <h2 className="lg:text-5xl text-4xl m-4 font-semibold text-center">Recomended hotel</h2>
  <section className="flex">
  <div className="flex-1 max-w-8xl max-auto p-10">
  <ul className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-x-8 gap-y-12">
  <li className="bg-white rounded-lg shadow-xl"><div className="h-30 items-center text-center"></div></li>
  <li className="bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  <li className="bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  <li className="bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  </ul>
  </div>
  </section>
     </Fragment>
   );
}
export default Recomended;