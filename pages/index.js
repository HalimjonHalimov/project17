import { Layout, Title } from "@/components";
import AccordionCollapse from "@/components/Accordion/Accordion";
import { cryptoItems } from "@/utils/crypto";
import { profitItems } from "@/utils/profit";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-auto p-4 grid grid-cols-7 items-start gap-4">
        <div className="col-span-6 bg-[#140E2D] py-3 px-5 rounded-xl">
          <div className="w-full h-auto">
            <div className="w-full h-auto flex justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-2">
                <span className="flex justify-start items-center gap-2 text-base font-bold text-[#F5F5F5]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 11.2016C14.0619 11.2016 15.7333 9.53351 15.7333 7.47581C15.7333 5.4181 14.0619 3.75 12 3.75C9.93813 3.75 8.26665 5.4181 8.26665 7.47581C8.26665 9.53351 9.93813 11.2016 12 11.2016Z"
                      stroke="#F5F5F5"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4 17.8629C4 15.6538 5.79039 13.8629 7.99953 13.8629C9.33672 13.8629 10.7928 13.8629 12 13.8629C13.2072 13.8629 14.6633 13.8629 16.0005 13.8629C18.2096 13.8629 20 15.6538 20 17.8629V18.25C20 19.3546 19.1046 20.25 18 20.25H6C4.89543 20.25 4 19.3546 4 18.25V17.8629Z"
                      stroke="#F5F5F5"
                      stroke-width="1.5"
                    />
                  </svg>
                  Login
                </span>
                <span className="text-sm font-normal text-[#605D6E] capitalize">
                  ID: <span>1211121134154545</span>
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <span className="flex justify-start items-center gap-2 text-base font-bold text-[#F5F5F5]">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5C3.5 5.78216 3.5 13.223 3.5 17.5041C3.5 19.161 4.84315 20.5 6.5 20.5H18.5C20.1569 20.5 21.5 19.1572 21.5 17.5004C21.5 15.7899 21.5 13.9069 21.5 13.5C21.5 12.9377 21.5 11.1347 21.5 9.49959C21.5 7.84273 20.1569 6.5 18.5 6.5H5C4.172 6.5 3.5 5.828 3.5 5ZM3.5 5C3.5 4.172 4.172 3.5 5 3.5H17.5M16.5 13.2512C16.4988 13.1114 16.6122 13 16.7495 13C16.8887 13 16.9982 13.1122 17 13.2477L17 13.25C17 13.3881 16.8881 13.5 16.75 13.5C16.6123 13.5 16.5006 13.3887 16.5 13.2512ZM16.5 13.2512L16.5 13.2523M16.5 13.2512L16.5 13.25"
                      stroke="#F5F5F5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  125.000 <span>$</span>
                </span>
                <span className="text-sm font-normal text-[#605D6E] capitalize">
                  Wallet adress
                </span>
                <span className="text-sm font-normal text-[#605D6E] capitalize">
                  Unique key
                </span>
              </div>
              <button
                type="button"
                className="flex justify-between items-center gap-4 py-2 px-4 bg-[#5A42E3] text-[#F5F5F5] text-base font-semibold rounded-full"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.95041 4.39498C9.40725 3.57028 10.593 3.57028 11.0498 4.39498L12.3328 6.71109C12.4707 6.96001 12.7081 7.13839 12.9856 7.20157L15.5708 7.7902C16.4492 7.99021 16.8022 9.0508 16.2188 9.73732L14.399 11.8787C14.2239 12.0848 14.1397 12.353 14.1657 12.6221L14.4347 15.416C14.5236 16.3388 13.5769 17.0096 12.7357 16.6198L10.4205 15.5471C10.1539 15.4235 9.84637 15.4235 9.57971 15.5471L7.26451 16.6198C6.4233 17.0096 5.47668 16.3388 5.56554 15.416L5.83458 12.6221C5.86049 12.353 5.7763 12.0848 5.6012 11.8787L3.78146 9.73732C3.19806 9.0508 3.55104 7.99021 4.42947 7.7902L7.01468 7.20157C7.29214 7.13839 7.52955 6.96001 7.66743 6.71109L8.95041 4.39498Z"
                    stroke="#F5F5F5"
                    stroke-width="1.5"
                  />
                </svg>
                Rank
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 my-4">
              <button
                type="button"
                className="w-full h-[45px] border border-[#5A42E3] text-[#F5F5F5] hover:text-[#0C091A] hover:bg-[#F5F5F5] text-base font-normal rounded-xl transition-all duration-150 ease-in-out "
              >
                Connection 3{" "}
              </button>
              <button
                type="button"
                className="w-full h-[45px] border border-[#5A42E3] text-[#F5F5F5] hover:text-[#0C091A] hover:bg-[#F5F5F5] text-base font-normal rounded-xl transition-all duration-150 ease-in-out "
              >
                Aprovals 3{" "}
              </button>
              <button
                type="button"
                className="w-full h-[45px] border border-[#5A42E3] text-[#F5F5F5] hover:text-[#0C091A] hover:bg-[#F5F5F5] text-base font-normal rounded-xl transition-all duration-150 ease-in-out "
              >
                Domains 3{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-start gap-4">
          <div className="w-full h-auto bg-[#19113E] py-3 px-5 rounded-xl">
            <AccordionCollapse title="The amount of profit" bg={"#19113E"}>
              <div className="w-full h-auto my-2 grid grid-cols-3">
                <h6 className="text-sm font-normal text-[#605D6E]">Date:</h6>
                <h6 className="text-sm font-normal text-[#605D6E]">Amount:</h6>
                <h6 className="justify-self-end text-sm font-normal text-[#605D6E]">
                  Status:
                </h6>
              </div>
              {profitItems.map((item, i) => (
                <div
                  key={i}
                  className="w-full h-auto my-2 grid grid-cols-3 text-[#F5F5F5] text-base font-normal"
                >
                  <div>{item.date}</div>
                  <div>{item.amount}$</div>
                  <div
                    className={`w-4 h-4 justify-self-end rounded-full ${
                      item.status == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
                    }`}
                  ></div>
                </div>
              ))}
              <button
                type="button"
                className="w-full h-auto  my-4 flex justify-start items-center gap-2 text-base font-bold text-[#7E67FF] "
              >
                Get a full statement{" "}
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1L6.5 6L1.5 11"
                      stroke="#7E67FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </AccordionCollapse>
          </div>
          <div className="w-full h-auto bg-[#19113E] py-3 px-5 rounded-xl">
            <AccordionCollapse title={"Recent contacts"} bg="#19113E">
              <div className="w-full h-auto my-2 grid grid-cols-3">
                <h6 className="text-sm font-normal text-[#605D6E]">Lend:</h6>
                <h6 className="text-sm font-normal text-[#605D6E]">IP:</h6>
                <h6 className="justify-self-end text-sm font-normal text-[#605D6E]">
                  Wallet:
                </h6>
              </div>
              {profitItems.map((item, i) => (
                <div
                  key={i}
                  className="w-full h-auto my-2 grid grid-cols-3 text-[#F5F5F5] text-base font-normal"
                >
                  <div>fffsddf.com</div>
                  <div>123.12.12.12:000</div>
                  <div className="justify-self-end">113234654465</div>
                </div>
              ))}
            </AccordionCollapse>
          </div>
        </div>

        <div className="w-full h-auto col-span-2 py-3 px-5 bg-[#140E2D] rounded-xl">
          <Title>Recent payments</Title>
          <div className="w-full h-auto my-2 grid grid-cols-2">
            <h6 className="text-sm font-normal text-[#605D6E]">Currency</h6>
            <h6 className="text-sm font-normal text-[#605D6E]">Amount</h6>
          </div>
          {cryptoItems.map((item, i) => (
            <div
              key={i}
              className="w-full h-auto my-1 grid grid-cols-2 text-[#F5F5F5] text-base font-normal uppercase"
            >
              <div className="flex justify-start items-center gap-2">
                {" "}
                <span>{item.icon}</span> {item.currency}
              </div>
              <div>{item.amount}$</div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}
