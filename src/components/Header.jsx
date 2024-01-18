function Header() {
  return (
    <>
      <nav className=" w-full z-30 mt-4 border-gray-200">
        <div className="px- py-3 ">
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-start">
              <div className=" text-gray-500">
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
              </div>
            </div>

            <div className="flex items-center w-[50%]">
              <div className="w-full flex justify-end ml-3">
                <button
                  type="button"
                  className="flex text-sm rounded-full"
                  id="user-menu-button-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-2"
                >
                  <img
                    className="w-6 h-6 rounded-full"
                    src="data:image/jpeg;base64,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"
                    alt="user photo"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7q-.15 0-.275-.05t-.25-.175"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center bg-white rounded-md p-1.5 ml-3 justify-between border-red-600 min-w-[125px]">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full"
                  id="user-menu-button-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-2"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
                <div>
                  <p className="text-[10px] font-bold flex">
                    Bony Roland{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7q-.15 0-.275-.05t-.25-.175"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
