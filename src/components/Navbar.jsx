import React from "react";

export default function Navbar({ setWalletAddress }) {
  return (
    <header className="text-gray-600 body-font border-b-2">
      <div className="mx-10 flex flex-col md:flex-row p-2 items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="40px"
            height="40px"
          >
            <path d="M 25 2 C 12.317 2 2 12.318 2 25 C 2 37.682 12.317 48 25 48 C 37.683 48 48 37.682 48 25 C 48 12.318 37.683 2 25 2 z M 21 10 L 23 10 L 23 13 L 25 13 L 25 10 L 27 10 L 27 13.015625 C 29.064 13.107625 33.900391 13.797391 33.900391 18.900391 C 33.900391 23.000391 30.399219 24.100781 29.699219 24.300781 L 29.699219 24.400391 C 31.199219 24.600391 34.800781 25.999219 34.800781 30.199219 C 34.800781 36.277219 29.301 36.927187 27 36.992188 L 27 40 L 25 40 L 25 37 L 23 37 L 23 40 L 21 40 L 21 37 L 16 37 L 16 13 L 21 13 L 21 10 z M 18.300781 14.900391 L 18.300781 23.5 L 26.199219 23.5 C 27.099219 23.5 27.899609 23.399219 28.599609 23.199219 C 29.299609 22.999219 29.800781 22.700781 30.300781 22.300781 C 30.700781 21.900781 31.100781 21.5 31.300781 21 C 31.500781 20.5 31.599609 20.000391 31.599609 19.400391 C 31.599609 16.400391 29.799219 14.900391 26.199219 14.900391 L 18.300781 14.900391 z M 18.300781 25.5 L 18.300781 35.099609 L 26.199219 35.099609 C 27.099219 35.099609 27.899609 35.000391 28.599609 34.900391 C 29.399609 34.800391 29.999609 34.499609 30.599609 34.099609 C 31.199609 33.699609 31.6 33.199609 32 32.599609 C 32.3 31.999609 32.5 31.199219 32.5 30.199219 C 32.5 28.699219 32.000391 27.499219 30.900391 26.699219 C 29.800391 25.899219 28.199219 25.5 26.199219 25.5 L 18.300781 25.5 z" />
          </svg>
          <span className="ml-3 text-xl"> Deanonymizer</span>
        </a>
        <form
          className="flex flex-wrap items-center text-base justify-center w-[40vw]"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target[0].value);
            setWalletAddress(e.target[0].value);
          }}
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Wallet ID"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <a
          href="https://metamask.io/"
          className="cursor-pointer inline-flex items-center bg-slate-800 text-gray-100 font-medium border-0 py-1 px-4 focus:outline-none hover:bg-slate-900 rounded-md text-base mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
          Connect Wallet
        </a>
      </div>
    </header>
  );
}
