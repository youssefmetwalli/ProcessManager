import { Card, CardContent } from "../../../../components/ui/card";
import { inspectionDetails, statusCards } from "../../../../lib/elements/processSheetManagement/processSheetManagement";



export const CardWrapperSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-full mx-auto bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0">
      <CardContent className="flex flex-col items-start gap-6 p-6">
        <header className="relative w-full h-[159px]">
          <div className="flex w-20 h-20 items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 rounded-[40px] bg-[linear-gradient(135deg,rgba(224,230,237,1)_0%,rgba(255,234,167,1)_100%)]">
            <span className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-light text-buttercup text-[40px] text-center leading-[normal] whitespace-nowrap flex items-center justify-center tracking-[0]">
              !
            </span>
          </div>

          <div className="flex flex-col w-full items-center absolute top-24 left-0">
            <h1 className="w-fit mt-[-1.00px] font-noto-sans-JP-bold font-[number:var(--noto-sans-JP-bold-font-weight)] text-pickled-bluewood text-[length:var(--noto-sans-JP-bold-font-size)] text-center leading-[var(--noto-sans-JP-bold-line-height)] flex items-center justify-center tracking-[var(--noto-sans-JP-bold-letter-spacing)] [font-style:var(--noto-sans-JP-bold-font-style)]">
              検査完了 - 要確認
            </h1>
          </div>

          <div className="flex flex-col w-full items-center absolute top-[139px] left-0">
            <p className="w-fit mt-[-1.00px] font-semantic-link font-[number:var(--semantic-link-font-weight)] text-oslo-gray text-[length:var(--semantic-link-font-size)] text-center leading-[var(--semantic-link-line-height)] flex items-center justify-center tracking-[var(--semantic-link-letter-spacing)] [font-style:var(--semantic-link-font-style)]">
              一部の項目で要注意または不良が検出されました
            </p>
          </div>
        </header>

        <section className="flex items-start justify-center gap-4 w-full">
          {statusCards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 bg-aqua-spring rounded-[10px] border-0"
            >
              <CardContent className="flex flex-col items-start gap-1 p-4">
                <div className="flex flex-col items-center w-full">
                  <span
                    className={`mt-[-1.00px] font-[number:var(--semantic-heading-1-font-weight)] ${card.color} text-[length:var(--semantic-heading-1-font-size)] font-semantic-heading-1 text-center tracking-[var(--semantic-heading-1-letter-spacing)] leading-[var(--semantic-heading-1-line-height)] [font-style:var(--semantic-heading-1-font-style)]`}
                  >
                    {card.count}
                  </span>
                </div>

                <div className="flex flex-col items-center w-full">
                  <span className="mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs text-center leading-[normal] flex items-center justify-center tracking-[0]">
                    {card.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <Card className="w-full bg-aqua-spring rounded-xl border-0">
          <CardContent className="flex flex-col items-start p-4">
            {inspectionDetails.map((detail, index) => (
              <div
                key={index}
                className={`flex items-start justify-between pt-2 pb-[9px] px-0 w-full ${
                  index < inspectionDetails.length - 1
                    ? "border-b [border-bottom-style:solid] border-[#e0e6ed]"
                    : ""
                }`}
              >
                <div className="inline-flex flex-col items-start">
                  <span className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] leading-[normal] flex items-center justify-center tracking-[0]">
                    {detail.label}
                  </span>
                </div>

                <div className="inline-flex flex-col items-start">
                  <span className="flex items-center justify-center w-fit mt-[-1.00px] font-semantic-label font-[number:var(--semantic-label-font-weight)] text-pickled-bluewood text-[length:var(--semantic-label-font-size)] tracking-[var(--semantic-label-letter-spacing)] leading-[var(--semantic-label-line-height)] [font-style:var(--semantic-label-font-style)]">
                    {detail.value}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
