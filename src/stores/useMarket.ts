import { create } from "zustand";

export interface MarketProps {
  name: string;
  long_name: string;
}

export const markets: MarketProps[] = [
  { name: "L.T. Trading Post", long_name: "La Trinidad Trading Post" },
  { name: "BAPTC", long_name: "Benguet Agri-Pinoy Trading Center" },
];

export interface MarketSelectorProps {
  market: MarketProps;
  change: (value: MarketProps) => void;
}

const useMarketSelector = create<MarketSelectorProps>()((set) => ({
  market: markets[0],
  change: (value) => set({ market: value }),
}));

export default useMarketSelector;
