import CustomModal from "./CustomModal";
import { useState } from "react";

function Header2(){
const [userSearch, setUserSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="z-30 w-full bg-white rounded-md border-gray-200">
        <div className="px-3 py-1.5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div>
                <form action="">
                    <div>
                        <label htmlFor="" className="text-gray-600">Show enteries</label>
                        <input type="number" className="border h-8 text-[14px] ml-2 px-1 w-12 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none"/>
                    </div>
                </form>
              </div>
              <form className="hidden llg:block lg:pl-3.5">
                <div className="relative lg:w-96">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 h-8 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 outline-none"
                    placeholder="Search..."
                  />
                </div>
              </form>
              <div className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 my-auto" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"/></svg>
              </div>
            </div>

            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="sr-only">Search</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                type="button"
                onClick={()=>{
                    setIsOpen(!isOpen)
                }}
                className="text-white bg-red-500 flex  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-md text-sm py-1 px-2"
              >
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"/></svg>
                </div>
                <p className="text-[12px]">New board</p>
              </button>

              <div className="flex items-center bg-black text-white rounded-md p-1 ml-3 justify-between border-red-600">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full"
                  id="user-menu-button-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M28.048 26.787v14.627h-8.042V29.809a5.52 5.52 0 0 0-1.255-3.495l-7.03-8.528l-6.221 6.22V6.614h17.394L17.806 11.7l6.06 7.341l.512.62l1.97 2.39a7.488 7.488 0 0 1 1.7 4.736"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M23.865 19.041L36.32 6.586l6.18 6.18l-14.452 14.466"/></svg>
                </button>
                <div>
                  <p className="text-[10px] font-bold flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"  viewBox="0 0 24 24"><path fill="currentColor" d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7q-.15 0-.275-.05t-.25-.175"/></svg>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
                <CustomModal isOpen={isOpen}/>
              </div>
      </nav>
    )
}

export default Header2