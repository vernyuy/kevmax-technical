function Board() {
  const boardAttributes = ["Board Name", "Board Description", "Column count"];

  const board = [
    {
      id: 1,
      name: "4.3 Versorger rechnung (FM)",
      description: "Gas, Strom, Wasser, etc",
      columns: 3,
      dateCreated: "Today - 10:15",
      userImage:
        "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.32413483.1704013613&semt=sph",
    },
    {
      id: 2,
      name: "4.2 Service vertrangserfassung",
      description: "Erfahrung Servicevertrage",
      columns: 3,
      dateCreated: "02/12/23 - 16:35",
      userImage: "https://img.freepik.com/free-photo/cheerful-young-man-dressed-shirt-wearing-hat_171337-17093.jpg?size=626&ext=jpg&ga=GA1.1.32413483.1704013613&semt=sph"
    },
    {
      id: 1,
      name: "4.1 FM Meldngen",
      description: "Stormeldungen",
      columns: 3,
      dateCreated: "02/12/23 - 08:30",
      userImage: "https://img.freepik.com/free-photo/happy-young-man-wearing-cap-using-laptop-computer_171337-17897.jpg?size=626&ext=jpg&ga=GA1.1.32413483.1704013613&semt=sph"
    },
    {
      id: 2,
      name: "3.2 Mietrechung prufen",
      description: "MR-Dokumente",
      columns: 3,
      dateCreated: "02/12/22 - 20:07",
    },
  ];
  return (
    <>
      <div className="bg-white mt-8 p-4 rounded-lg min-h-[63%]">
        <table className="min-w-full  mb-3">
          <thead className=" text-black py-1">
            <tr className="">
              {boardAttributes.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 p-2 text-left text-xs "
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {board?.map((board) => {
              return (
                <tr
                  key={board.id}
                  className="odd:bg-gray-50 text-black t_row"
                >
                  <td className="px-4 py-2 text-sm text-left ">
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-full bg-red-500 my-auto">
                        <img src={board.userImage} alt="" className="h-full w-full rounded-full"/>
                      </div>
                      <div>
                        <p className="font-bold">{board.name}</p>
                        <p className="text-gray-500 text-[12px]">
                          {board.dateCreated}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 text-sm text-gray-900  ">
                    <span className=" text-left flex flex-col">
                      {board.description}
                    </span>
                  </td>
                  <td className="px-4 text-sm text-left text-gray-500 dark:text-gray-400 h-full items-center gap-4">
                    <div className="sm:flex gap-4">
                    <div className="my-auto">{board.columns}</div>
                    <div className="bg-blue-600 p-1 px-4 rounded-md gap-2 text-white flex">
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
                      <p className="text-[12px] font-bold">Kanban</p>
                    </div>
                    </div>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Board;
