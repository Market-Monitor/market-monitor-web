"use client";

import useMarketSelector from "@/stores/useMarket";

const Welcome = () => {
  const market = useMarketSelector((s) => s.market);

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl font-black leading-loose text-gray-800">
        Today&apos;s Agricultural Product Prices from{" "}
        <span className="text-emerald-500">{market.long_name}</span>
      </h3>
      <p className="text-gray-500">
        The following prices are references for Farmers only and may change at
        any time...
      </p>
    </div>
  );
};

export default Welcome;
