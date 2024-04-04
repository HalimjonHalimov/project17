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
    <div className="w-full h-auto  grid grid-cols-9 gap-2 text-[#F5F5F5] text-xs font-normal">
      <div>{domain}</div>
      <div
        className={`w-4 h-4 rounded-full ${
          status == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
        } `}
      ></div>
      <div>{click}</div>
      <div>{connect}</div>
      <div>{percent}</div>
      <div>{bot}</div>
      <div>{percentE}</div>
      <div
        className={`w-4 h-4 rounded-full ${
          metaMask == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
        } `}
      ></div>
      <div>{statistic}</div>
    </div>
  );
}
