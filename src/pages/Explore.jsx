import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Transaction from "../components/Transactions";
import data from "../data.json";

export default function Explore() {
  const [walletAddress, setWalletAddress] = useState(
    "36mwz7xBbw4YVteng6iZaTDdBGsK5pWGQG"
  );

  const [walletData, setWalletData] = useState();
  const [loading, setLoading] = useState(true);

  const getWalletData = async () => {
    setLoading(true);
    if (data[walletAddress]) {
      setWalletData(data[walletAddress]);
    } else {
      const response = await fetch(
        `https://blockchain.info/rawaddr/${walletAddress}`
      );
      const data = await response.json();
      console.log(data);
      setWalletData(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getWalletData();
    console.log(walletAddress);
  }, [walletAddress]);

  // const memoizedWalletData = useMemo(() => walletData, [walletAddress]);

  return (
    <div>
      <Navbar setWalletAddress={setWalletAddress} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Profile walletData={walletData} />
          <Transaction
            walletData={walletData}
            setWalletAddress={setWalletAddress}
          />
        </div>
      )}
    </div>
  );
}
