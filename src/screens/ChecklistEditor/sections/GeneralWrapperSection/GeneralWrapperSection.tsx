import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { inspectionItems } from "../../../../lib/elements/checklisteditor/checklisteditor";



export const GeneralWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full bg-[#ffffff] rounded-xl overflow-hidden opacity-0 animate-fade-in">
      {inspectionItems.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center pt-4 pb-[17px] px-5 w-full border-b border-solid border-[#f1f3f5]"
        >
          <div className="inline-flex flex-[0_0_auto] flex-col items-start pl-0 pr-4 py-0">
            <div className="w-fit font-light text-[#cbd5e0] text-xl whitespace-nowrap flex items-center justify-center mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
              ⋮⋮
            </div>
          </div>

          <div className="flex w-12 h-8 flex-col items-start pl-0 pr-4 py-0">
            <div className="flex w-8 h-8 items-center justify-center bg-[#e8f5e9] rounded-lg">
              <div className="flex items-center justify-center w-fit [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#3498db] text-base text-center tracking-[0] leading-[normal]">
                {item.number}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="flex flex-col items-start w-full">
              <div className="self-stretch font-medium text-[#2c3e50] text-[15px] flex items-center justify-center mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]">
                {item.title}
              </div>
            </div>

            <div className="flex items-start gap-4 w-full">
              <Badge
                variant="secondary"
                className={`inline-flex flex-col items-start px-2 py-0.5 ${item.typeColor} rounded h-auto`}
              >
                <div
                  className={`w-fit font-medium ${item.typeTextColor} text-[11px] flex items-center justify-center mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-[normal]`}
                >
                  {item.type}
                </div>
              </Badge>

              {item.metadata.map((meta, metaIndex) => (
                <div
                  key={metaIndex}
                  className="inline-flex flex-col items-start"
                >
                  <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-[13px] flex items-center justify-center tracking-[0] leading-[normal]">
                    {meta}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex items-start gap-2 flex-[0_0_auto]">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 p-px bg-[#ffffff] rounded-md border border-solid border-[#e0e6ed] hover:bg-[#f8f9fa] transition-colors"
            >
              <img
                className="w-4 h-4"
                alt="Edit"
                src="https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-3.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 p-px bg-[#ffffff] rounded-md border border-solid border-[#e0e6ed] hover:bg-[#f8f9fa] transition-colors"
            >
              <img
                className="w-4 h-4"
                alt="Duplicate"
                src="https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-4.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 p-px bg-[#ffffff] rounded-md border border-solid border-[#e0e6ed] hover:bg-[#f8f9fa] transition-colors"
            >
              <img
                className="w-4 h-4"
                alt="Delete"
                src="https://c.animaapp.com/mhk25e65Zwy9on/img/component-1.svg"
              />
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
