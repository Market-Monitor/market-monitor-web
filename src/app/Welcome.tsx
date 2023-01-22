"use client";

import useMarketSelector from "@/stores/useMarket";

const Welcome = () => {
  const market = useMarketSelector((s) => s.market);

  return (
    <div className="py-12">
      <h3 className="text-3xl font-black leading-loose text-gray-800">
        Today&apos;s Agricultural Product Prices from{" "}
        <span className="text-emerald-500">{market.long_name}</span>
      </h3>
      <p className="text-lg text-gray-600">
        The following prices are references for Farmers only and may change at
        any time...
      </p>
    </div>
  );
};

export default Welcome;
