import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Header2 from "./components/Header2";
import Board from "./components/Board";

function Page() {
  return (
    <>
      <main className="bg-gray-50 h-screen overflow-hidden">
        <div className="flex  overflow-hidden">
          <aside className="fixed h-screen bg-white overflow-y-auto hidden md:block top-0 left-0 z-20 flex-col flex-shrink-0 w-64  font-normal duration-75 lg:flex transition-width">
            <div className="flex justify-between">
              <div className="text-red-500 px-3.5 pt-3 flex justify-start">
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 20q-.825 0-1.412-.587T4 18V9h4v9q0 .825-.587 1.413T6 20M4 8V6q0-.825.588-1.412T6 4q.825 0 1.413.588T8 6v2zm8 12q-.825 0-1.412-.587T10 18v-6h4v6q0 .825-.587 1.413T12 20m-2-9V9q0-.825.588-1.412T12 7q.825 0 1.413.588T14 9v2zm8 9q-.825 0-1.412-.587T16 18v-3h4v3q0 .825-.587 1.413T18 20m-2-6v-2q0-.825.588-1.412T18 10q.825 0 1.413.588T20 12v2z"
                    />
                  </svg>
                </p>
                <p className="h-full text-black text-[20px] font-bold pt-2">
                  SEYBOLD
                </p>
              </div>
              <div className="my-auto mr-4 mt-4 hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                  />
                </svg>
              </div>
            </div>
            <div className="relative flex flex-col flex-1 min-h-0 pt-0">
              <Sidebar />
            </div>
          </aside>

          <div className="flex overflow-y-auto h-screen md:pl-64 bg-gray-50 w-full">
            <div className="px-4 w-full">
              <div className="w-full">
                <Header />
              </div>
              <div className="my-2.5 w-full pl-4">
                <p className="text-left font-bold text-[20px]">
                  List of kanban boards
                </p>
              </div>

              <div className="w-full">
                <Header2 />
              </div>

              <div className="h-screen/50">
                <Board />
              </div>
              <div className="h-[200px] w-full"></div>
              {/* <div>
                <CustomModal isOpen={isOpen}/>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
