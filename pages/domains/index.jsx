import { DomainItem, Layout, Paragraph, Title } from "@/components";
import React from "react";
import { LuPlusCircle } from "react-icons/lu";

export default function Domains() {
  return (
    <Layout path={'/domains'}>
      <div className="w-full h-auto p-4 grid grid-cols-9 items-start gap-4">
        <div className="col-span-8 w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto bg-[#140E2D] py-3 px-5 rounded-xl flex justify-between items-center">
            <div>
              <Paragraph title={"Number of domains"} />
              <Title>Login</Title>
            </div>
            <div>
              <Paragraph title={"CT from METAMASK"} />
              <Title>Login</Title>
            </div>
            <button
              type="button"
              className="flex justify-center rounded-full items-center gap-4 text-sm font-bold text-[#f5f5f5] bg-[#7E67FF] w-52 h-11 transition-all duration-200 ease-in-out hover:opacity-75"
            >
              <LuPlusCircle size={24} />
              Add a domain
            </button>
          </div>
          <div className="w-full h-auto bg-[#19113E] py-3 px-5 rounded-xl">
            <Title>The working panel</Title>
            <div className="w-full h-auto grid grid-cols-9 gap-2">
              <span className="text-[#605D6E] text-xs font-normal">Domain</span>
              <span className="text-[#605D6E] text-xs font-normal">Status</span>
              <span className="text-[#605D6E] text-xs font-normal">Clicks</span>
              <span className="text-[#605D6E] text-xs font-normal">
                Connect
              </span>
              <span className="text-[#605D6E] text-xs font-normal">
                Percent
              </span>
              <span className="text-[#605D6E] text-xs font-normal">Bots</span>
              <span className="text-[#605D6E] text-xs font-normal">
                Percent. En.
              </span>
              <span className="text-[#605D6E] text-xs font-normal">
                CT MetaMask
              </span>
              <span className="text-[#605D6E] text-xs font-normal">
                Statistics
              </span>
            </div>
            <div className="w-full h-auto my-4 flex flex-col justify-start items-start gap-2">
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={true}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={true}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
              <DomainItem
                domain={"12/04/2024"}
                status={false}
                click={"250.30$"}
                connect={"250.30$"}
                percent={"250.30$"}
                bot={"250.30$"}
                percentE={"250.30$"}
                metaMask={false}
                statistic={"250.30$"}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
