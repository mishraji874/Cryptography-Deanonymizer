import React from "react";

import Avatar from "../assets/avatar.jpg";

export default function Profile({ walletData }) {
  return (
    <div className="flex w-full items-center justify-center p-10">
      <div className="flex items-center justify-between space-x-10 px-10 py-5 border-2 rounded-lg bg-white">
        <div>
          <img
            className="w-36 rounded-full"
            // src="https://source.boringavatars.com/bauhaus/?colors=622824,2F0618,412A9C,1B66FF,00CEF5"
            // src="https://i.pravatar.cc/100"
            src={Avatar}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <div>
            <h1 className="text-3xl font-semibold">{walletData.address}</h1>
          </div>
          <div className="flex flex-col  space-y-1 ">
            <div className="flex items-center justify-between space-x-6">
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">Bitcoin: </h3>
                <p>{walletData.final_balance}</p>
              </span>
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">Transactions: </h3>
                <p>{walletData.n_tx}</p>
              </span>
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">Received </h3>
                <p>{walletData.total_received}</p>
              </span>
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">Sent </h3>
                <p>{walletData.total_sent}</p>
              </span>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">Bitcoin price: </h3>
                <p>$1000</p>
              </span>
              <span className="flex space-x-2 text-lg">
                <h3 className="font-semibold">hash: </h3>
                <p>{walletData.hash160}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
