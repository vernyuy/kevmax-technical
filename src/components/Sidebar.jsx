function Sidebar() {
  return (
    <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
      <div className="flex-1 p-1.5 space-y-1 divide-gray-200">
        <ul className="pb-2 space-y-">
          <li className="group">
            <button
              type="button"
              className="flex items-center group-hover:mx-2 w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
                />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Dashoards
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 21v-8h8v8zm2-2h4v-4h-4zM2 18v-2h9v2zm12-7V3h8v8zm2-2h4V5h-4zM2 8V6h9v2zm16-1"
                />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                My tasks and tickets
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"
                />
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Classification docu...
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>

          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053q-.192-.03-.354-.124q-.161-.102-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075q.134-.025.278-.025q.144 0 .278.025q.133.025.257.075L15 6.177l3.902-1.509q.21-.083.401-.053q.192.03.354.124q.161.102.252.274q.091.173.091.396v12.259q0 .284-.159.495q-.158.212-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025q-.124-.025-.254-.075m.015-1.033v-11.7l-5-1.746v11.7z"
                />
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Point of sale
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>

          <li className="pl-2">
            <div>
              <p className="text-left text-gray-400">MASTER DATA</p>
            </div>
          </li>

          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 21v-8h8v8zm2-2h4v-4h-4zM2 18v-2h9v2zm12-7V3h8v8zm2-2h4V5h-4zM2 8V6h9v2zm16-1"
                />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                My tasks and tickets
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"
                />
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Classification docu...
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>

          <li className="pl-2">
            <div>
              <p className="text-left text-gray-400">OPERATION</p>
            </div>
          </li>

          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 21v-8h8v8zm2-2h4v-4h-4zM2 18v-2h9v2zm12-7V3h8v8zm2-2h4V5h-4zM2 8V6h9v2zm16-1"
                />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                My tasks and tickets
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li className="group">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-red-500"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"
                />
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Classification docu...
              </span>
              <svg
                className="w-6 h-6 -rotate-90 group-hover:rotate-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
