import React from "react";
import TransactionCard from "./TransactionCard";

export default function Transaction({ walletData, setWalletAddress }) {
  return (
    <div className="w-5/6 mx-auto space-y-5 pb-10">
      {walletData.txs.map((tx, index) => {
        return (
          <TransactionCard
            tx={tx}
            key={index}
            setWalletAddress={setWalletAddress}
          />
        );
      })}
    </div>
  );
}
