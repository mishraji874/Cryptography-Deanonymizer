import React, { useState } from "react";

export default function TransactionCard({ tx, setWalletAddress }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-5">
      <div className="flex">
        <div className="p-4">
          {tx.result < 0 ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="text-red-500 p-2 rounded-full bg-red-100 w-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6.05005L12 11.05L19 6.05005V8.50005L12 13.5L5 8.50005V6.05005ZM5 12L12 17L19 12V14.45L12 19.45L5 14.45V12Z"
                fill="red"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="text-green-500 p-2 rounded-full bg-green-100 w-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 17.95L12 12.95L5 17.95V15.5L12 10.5L19 15.5V17.95ZM19 12L12 6.99995L5 12L5 9.54995L12 4.54995L19 9.54995V12Z"
                fill="green"
              />
            </svg>
          )}
        </div>
        {/* Display ID, Date and TIme, Price, InputNo and OutputNo */}
        <div className="w-full  flex justify-between items-center">
          <span className="truncate w-96">{tx.hash}</span>
          <span>
            {new Date(tx.time * 1000).toLocaleString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </span>
          <span>{tx.vin_sz} inputs</span>
          <span>{tx.vout_sz} outputs</span>
          <span
            className={`${
              tx.result < 0 ? "text-red-600" : "text-green-600"
            } font-medium`}
          >
            {tx.result}
          </span>
          <span>
            <button
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className={`p-2 w-12 h-12 transition-all duration-[.5s] ${
                  expand ? "rotate-180" : ""
                }`}
              >
                <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
      {expand && (
        <div className="flex space-x-5 mt-5">
          <div className="flex-1 flex-shrink-0  overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-red-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Input Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {tx.inputs.map((input, index) => {
                  return (
                    <tr className="bg-white border-b" key={index}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <button
                          className="hover:text-gray-600"
                          onClick={() => {
                            setWalletAddress(input.prev_out.addr);
                            setExpand(false);
                          }}
                        >
                          {input.prev_out.addr}
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex-1 flex-shrink-0 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-green-100">
                <tr>
                  <th scope="col" className="px-2 py-3 text-center">
                    no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Output Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {tx.out.map((out, index) => {
                  return (
                    <tr className="bg-white border-b" key={index}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate w-96"
                      >
                        <button
                          className="hover:text-gray-600"
                          onClick={() => {
                            setWalletAddress(out.addr);
                            setExpand(false);
                          }}
                        >
                          {out.addr}
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
