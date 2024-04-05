import React from "react";

export default function DomainItem({
  domain,
  status,
  click,
  connect,
  percent,
  bot,
  percentE,
  metaMask,
  statistic,
}) {
  return (
    <div className="w-full h-auto  grid md:grid-cols-9 grid-cols-4 gap-2 text-[#F5F5F5] text-xs font-normal">
      <div>{domain}</div>
      <div
        className={`w-4 h-4 rounded-full ${
          status == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
        } `}
      ></div>
      <div>{click}</div>
      <div>{connect}</div>
      <div className="md:block hidden">{percent}</div>
      <div className="md:block hidden">{bot}</div>
      <div className="md:block hidden">{percentE}</div>
      <div
        className={`w-4 h-4 rounded-full md:block hidden ${
          metaMask == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
        } `}
      ></div>
      <div className="md:block hidden">{statistic}</div>
    </div>
  );
}
