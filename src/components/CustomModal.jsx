
const CustomModal = ({ isOpen }) => {
  const arr = [1, 2, 3];
  return (
    <div
      className={
        !isOpen ? "hidden" : "container m-auto z-[105] overflow-hidden"
      }
    > 
        <div className="flex justify-center">
          <div className="absolute inset-x-10 top-[0%] flex sm:justify-end justify-center sm:mr-12 overflow-y-auto">
            <div className="animate__animated animate__zoomInDown ease-in-out transition-all duration-700 pb-3 mb-5 z-[105] w-[500px] rounded-lg shadow-xl">
              <div className=" mt-1">
                <div className="flex items-center rounded-t-lg justify-between px-4 py-2 bg-black text-white">
                  <div>Board Settings</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <circle cx="12" cy="12" r="2" stroke="currentColor" />
                        <path
                          fill="currentColor"
                          d="m5.399 5.88l.25-.434a.5.5 0 0 0-.617.093zM3.4 9.344l-.478-.148a.5.5 0 0 0 .228.58zm-.002 5.311l-.25-.433a.5.5 0 0 0-.228.581zm2 3.464l-.367.34a.5.5 0 0 0 .617.093zm4.6 2.655h-.5a.5.5 0 0 0 .39.488zm4.001.002l.111.488a.5.5 0 0 0 .389-.488zM18.6 18.12l-.25.433a.5.5 0 0 0 .617-.093zm1.998-3.466l.478.148a.5.5 0 0 0-.228-.58zm.002-5.311l.25.433a.5.5 0 0 0 .228-.581zm-2-3.465l.367-.34a.5.5 0 0 0-.617-.093zM14 3.225h.5a.5.5 0 0 0-.389-.487zm-4-.002l-.111-.488a.5.5 0 0 0-.39.488zm4 1.849h-.5zm5 8.66l-.25.433zm-2 3.464l-.25.433zM5 13.732l.25.433zm2-6.928l-.25.433zM3.878 9.492a8.49 8.49 0 0 1 1.887-3.273l-.733-.68a9.49 9.49 0 0 0-2.11 3.658zm.76 6.758a8.527 8.527 0 0 1-.761-1.742l-.956.296a9.54 9.54 0 0 0 .852 1.946zm1.128 1.53a8.53 8.53 0 0 1-1.127-1.53l-.866.5a9.528 9.528 0 0 0 1.259 1.71zm8.123 2.51a8.49 8.49 0 0 1-3.778-.002l-.222.974a9.491 9.491 0 0 0 4.222.003zm6.233-5.782a8.49 8.49 0 0 1-1.887 3.273l.733.68a9.491 9.491 0 0 0 2.11-3.658zm-.76-6.758c.324.563.577 1.147.762 1.742l.955-.296a9.529 9.529 0 0 0-.852-1.946zm-1.128-1.53a8.48 8.48 0 0 1 1.127 1.53l.866-.5a9.524 9.524 0 0 0-1.259-1.71zm-8.123-2.51a8.49 8.49 0 0 1 3.778.002l.222-.974a9.49 9.49 0 0 0-4.222-.003zm.389 1.362v-1.85h-1v1.85zM7.25 6.37l-1.601-.925l-.5.866l1.6.925zm-2.5 6.928l-1.601.924l.5.866l1.6-.924zm.5-3.464l-1.6-.923l-.5.866l1.6.923zm5.25 10.94v-1.847h-1v1.847zm-3.75-4.012l-1.601.924l.5.866l1.6-.924zm12.101.925l-1.601-.925l-.5.866l1.601.925zm-4.351 3.09v-1.85h-1v1.85zM20.351 8.91l-1.601.924l.5.866l1.601-.924zm.498 5.311L19.25 13.3l-.5.866l1.6.923zM14.5 5.072V3.225h-1v1.847zm3.851.374l-1.601.925l.5.866l1.601-.925zM13.5 5.072c0 1.924 2.083 3.127 3.75 2.165l-.5-.866a1.5 1.5 0 0 1-2.25-1.3zm5.25 4.763c-1.667.962-1.667 3.368 0 4.33l.5-.866a1.5 1.5 0 0 1 0-2.598zm-1.5 6.928c-1.667-.962-3.75.24-3.75 2.165h1a1.5 1.5 0 0 1 2.25-1.299zm-6.75 2.165c0-1.924-2.083-3.127-3.75-2.165l.5.866a1.5 1.5 0 0 1 2.25 1.3zm-5.25-4.763c1.667-.962 1.667-3.368 0-4.33l-.5.866c1 .577 1 2.02 0 2.598zM9.5 5.072A1.5 1.5 0 0 1 7.25 6.37l-.5.866c1.667.962 3.75-.24 3.75-2.165z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                
              </div>
              {/* <button
                  onClick={() => setIsHidden(true)}
                  type="button"
                  className="text-gray-400 -mr-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex dark:hover:bg-gray-600 dark:hover:text-white items-end"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button> */}
              <div className="bg-white px-4 pt-4">
                <form action="">
                  <div className="flex justify-start flex-col items-start">
                    <label htmlFor="" className="text-gray-400">
                      Board Name
                    </label>
                    <input
                      type="text"
                      className="border px-2 w-full py-1 border-black rounded-md"
                    />
                  </div>
                  <div className="flex-col flex items-start pt-2">
                    <label htmlFor="" className="text-gray-400">
                      Board Description
                    </label>
                    <textarea
                      name="des"
                      id=""
                      cols="30"
                      rows="1"
                      className="border border-black rounded-md p-2 w-full"
                    ></textarea>
                  </div>
                </form>
              </div>

              <div className="px-1.5 bg-white py-4">
                <div className="flex justify-between bg-gray-200 px-2 rounded-sm py-1">
                  <div className="bg-red-600 py-2 px-4 rounded-md gap-4 text-white flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="border border-white rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125z"
                      />
                    </svg>
                    <p className="text-[12px] font-bold">Columns</p>
                  </div>

                  <div className="bg-gray-400 py-2 px-3 rounded-md gap-4 text-black flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1"
                      />
                    </svg>
                    <p className="text-[12px] font-bold">Document type</p>
                  </div>

                  <div className="bg-gray-400 py-2 px-3 rounded-md gap-4 text-black flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15 20q-.69 0-1.153-.462q-.462-.463-.462-1.153V5.615q0-.69.462-1.152Q14.31 4 15 4h2.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.463 1.152Q18.46 20 17.77 20zm-.615-14.385v12.77q0 .23.192.423q.192.192.423.192h2.77q.23 0 .422-.192q.193-.193.193-.423V5.615q0-.23-.193-.423Q18 5 17.77 5H15q-.23 0-.423.192q-.192.193-.192.423M6.23 20q-.69 0-1.153-.462q-.463-.463-.463-1.153V5.615q0-.69.463-1.152Q5.54 4 6.23 4H9q.69 0 1.153.463q.462.462.462 1.152v12.77q0 .69-.462 1.152Q9.69 20 9 20zM5.615 5.615v12.77q0 .23.193.423Q6 19 6.23 19H9q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q9.231 5 9 5H6.23q-.23 0-.422.192q-.193.193-.193.423M18.385 5h-4zm-8.77 0h-4z"
                      />
                    </svg>
                    <p className="text-[12px] font-bold">Priorities</p>
                  </div>
                </div>
              </div>

              <div className="pt-1 pb-10 bg-gray-200">
                {arr.map((item) => (
                    <div className="bg-gray-200 px-4 py-1" key={item}>
                      <div className="bg-white flex justify-between items-center px-2 rounded-md py-2">
                        <div className="text-left">
                          <h4 className="font-bold">
                            Versorger rechnung prufen
                          </h4>
                          <p className="text-[12px] font-semibold text-gray-500">
                            Zuardnung kunde, PoS und vertrag prufen sowie bie
                            in...
                          </p>
                          <div className="flex gap-4">
                            <p className="text-[12px] font-semibold text-gray-500">
                              Team:{" "}
                              <span className="text-[12px] text-black">FM</span>{" "}
                            </p>
                            <p className="text-[12px] text-gray-500">
                              Rank:{" "}
                              <span className="text-[12px] font-semibold text-black">
                                10
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-green-600 text-white rounded-md p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              <div className="flex bg-white rounded-b-md">
                <div className="py-2 px-3 md:px-5 w-full ">
                  <div className="font-light text-white w-full flex justify-between gap-2">
                    <button className="text-[15px] rounded-md p-2 w-[35%] text-center bg-red-500 ">
                      Cancel
                    </button>
                    <button className="text-[15px] text-white p-2 w-[65%] rounded-md text-center bg-green-500">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute overflow-hidden inset-0 flex justify-center bg-black bg-opacity-50 overflow-y-auto z-[10] "></div>
        </div>
      
    </div>
  );
};

export default CustomModal;
