import React, {Fragment} from 'react';
const Footer=()=>{
   return(
<Fragment>
    <footer className="bg-footer-bg relative bg-no-repeat lg:bg-center p-0 mb-0 bg-top-right">
    <div className="flex-1 max-w-8xl max-auto p-10">
    <ul className="grid sm:grid-flow-row grid-col-1 gap-4 md:grid-cols-3 md:gap-8 grid-flow-col-dense sm:auto-cols-min mb-2">
    <li className="rounded-lg shadow-xl"><div className="max-h-full">
    <h1 className="text-gray-200 font-bold lg:text-2xl">BareFoot</h1><p className="max-h-full  text-xl p-1 pt-5 mb-2  text-gray-200 font-bold">Bare foot is atravela nd accomodattion website for nomads we make your travel experience more woenderful with our incomperable services.</p>
    </div></li>
    <li className="rounded-lg shadow-xl w-auto"><div className="max-h-full">
    <h1 className="text-gray-200 font-bold lg:text-2xl">About</h1><p className="max-h-full  text-xl p-1 pt-5 text-gray-200 font-bold">BareFoot<br /> News<br /> Terms and condition<br /> Privacy statement</p>
    </div></li>
    <li className="rounded-lg shadow-xl"><div className="max-h-full">
    <h1 className="text-gray-200 font-bold lg:text-2xl">Contact</h1><p className="text-gray-200 pt-5 font-bold text-xl">Bare foot is atravela nd accomodattion website for nomads we make your travel experience more woenderful with our incomperable services.</p>
    </div></li>
    </ul>
    </div>
    </footer>
</Fragment>
   );
}

export default Footer;