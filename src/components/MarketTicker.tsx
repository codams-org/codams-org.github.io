import { TrendingUp, TrendingDown, Activity, Zap } from "lucide-react";

interface TickerItem {
  symbol: string;
  price?: string;
  change?: string;
  isPositive?: boolean;
  type?: "market" | "status";
  note?: string;
}

const tickerData: TickerItem[] = [
  { symbol: "NIFTY 50", price: "25,182.40", change: "+0.52%", isPositive: true, type: "market" },
  { symbol: "BANKNIFTY", price: "51,940.15", change: "+0.68%", isPositive: true, type: "market" },
  { symbol: "MCX SILVERMIC", price: "₹95,240", change: "+1.24%", isPositive: true, type: "market" },
  { symbol: "MCX CRUDEOIL", price: "₹6,215", change: "-0.42%", isPositive: false, type: "market" },
  { symbol: "MCX GOLD", price: "₹76,850", change: "+0.62%", isPositive: true, type: "market" },
  { symbol: "SENSEX", price: "82,410.80", change: "+0.45%", isPositive: true, type: "market" },
  { symbol: "ALGO EXECUTION", note: "Sub-150ms Broker Routing", type: "status" },
  { symbol: "SMARTAPI / UPSTOX", note: "Multi-Broker Connected", type: "status" },
  { symbol: "NSE DELIVERY SCAN", note: "Institutional Radar Active", type: "status" },
];

export const MarketTicker = () => {
  // Duplicate array for seamless infinite looping
  const items = [...tickerData, ...tickerData];

  return (
    <div className="w-full bg-slate-950 text-slate-200 border-b border-slate-800/80 py-2 overflow-hidden select-none text-xs font-mono">
      <div className="animate-ticker items-center space-x-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 shrink-0">
            {item.type === "status" ? (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Zap className="w-3 h-3 animate-pulse" />
                <span className="font-semibold text-[11px]">{item.symbol}:</span>
                <span className="text-[11px] text-slate-300">{item.note}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <span className="font-semibold text-slate-300 tracking-wider">{item.symbol}</span>
                <span className="text-slate-100">{item.price}</span>
                <span
                  className={`inline-flex items-center font-medium ${
                    item.isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {item.isPositive ? (
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                  )}
                  {item.change}
                </span>
              </span>
            )}
            <span className="text-slate-700">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
