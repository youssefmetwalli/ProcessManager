import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { cautionItems, goodItems, ngItems } from "../../../../lib/elements/processSheetManagement/processSheetManagement";


export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[900px] w-full items-start gap-5 py-10 px-5">
      <Card className="w-full bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] border-0">
        <CardContent className="flex flex-col items-start gap-5 pt-6 pb-9 px-6">
          <header className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-3">
              <div className="flex w-9 h-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)]">
                <span className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-white text-[length:var(--semantic-heading-2-font-size)] text-center leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                  ❌
                </span>
              </div>
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                NG項目（要対応）
              </h2>
            </div>
            <Badge className="px-2 py-1 bg-[#ecf0f1] rounded hover:bg-[#ecf0f1]">
              <span className="font-semibold text-dodger-blue text-[11px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                1件
              </span>
            </Badge>
          </header>

          {ngItems.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[367px] items-start gap-4 pl-5 pr-4 py-4 w-full bg-chablis rounded-[10px] border-l-4 [border-left-style:solid] border-[#e74c3c]"
            >
              <div className="flex w-8 h-8 items-center justify-center bg-white rounded-md shrink-0">
                <span className="font-semibold text-oslo-gray text-sm [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0] leading-[normal]">
                  {item.id}
                </span>
              </div>

              <div className="flex flex-col items-start gap-1 flex-1">
                <h3 className="w-full font-medium text-pickled-bluewood text-[15px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  {item.title}
                </h3>

                <div className="flex items-start w-full">
                  <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-pickled-bluewood text-sm tracking-[0] leading-[14px]">
                    <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-[#2c3e50] [font-style:var(--semantic-link-font-style)] tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] text-[length:var(--semantic-link-font-size)]">
                      測定値:{" "}
                    </span>
                    <span className="font-semibold text-[#2c3e50]">
                      {item.measurement}
                    </span>
                  </p>
                  <Badge
                    className={`inline-flex items-center px-2 py-0.5 ${item.statusBg} rounded hover:${item.statusBg}`}
                  >
                    <span
                      className={`font-noto-sans-JP-medium font-[number:var(--noto-sans-JP-medium-font-weight)] ${item.statusText} text-[length:var(--noto-sans-JP-medium-font-size)] leading-[var(--noto-sans-JP-medium-line-height)] tracking-[var(--noto-sans-JP-medium-letter-spacing)] [font-style:var(--noto-sans-JP-medium-font-style)]`}
                    >
                      {item.status}
                    </span>
                  </Badge>
                </div>

                <div className="flex items-start gap-3 pt-1 w-full">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.standard}
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                    {item.tolerance}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 pt-[17px] pb-[13px] px-[13px] w-full bg-white rounded-lg border border-solid border-[#e0e6ed]">
                  <span className="w-full font-light text-oslo-gray text-xs leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    コメント
                  </span>
                  <p className="w-full font-noto-sans-JP-demilight font-[number:var(--noto-sans-JP-demilight-font-weight)] text-pickled-bluewood text-[length:var(--noto-sans-JP-demilight-font-size)] leading-[var(--noto-sans-JP-demilight-line-height)] tracking-[var(--noto-sans-JP-demilight-letter-spacing)] [font-style:var(--noto-sans-JP-demilight-font-style)]">
                    {item.comment}
                  </p>
                </div>

                {item.hasImage && (
                  <div className="flex flex-col w-44 items-start pt-2 bg-[#e0e6ed] rounded-md overflow-hidden relative">
                    <div className="flex items-center justify-center w-44 h-44">
                      <img
                        className="w-44 h-44"
                        alt="Component"
                        src={item.imageSrc}
                      />
                    </div>
                    <div className="flex flex-col w-full items-center p-1 absolute left-0 bottom-[3px] bg-black-60">
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-white text-[10px] text-center leading-[normal] whitespace-nowrap tracking-[0]">
                        測定箇所
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </CardContent>
      </Card>

      <Card className="w-full bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] border-0">
        <CardContent className="flex flex-col items-start gap-5 pt-6 pb-9 px-6">
          <header className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-3">
              <div className="flex w-9 h-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(243,156,18,1)_0%,rgba(230,126,34,1)_100%)]">
                <span className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-white text-[length:var(--semantic-heading-2-font-size)] text-center leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                  !
                </span>
              </div>
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                要注意項目
              </h2>
            </div>
            <Badge className="px-2 py-1 bg-[#ecf0f1] rounded hover:bg-[#ecf0f1]">
              <span className="font-semibold text-dodger-blue text-[11px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                2件
              </span>
            </Badge>
          </header>

          <div className="flex flex-col items-start gap-3 w-full">
            {cautionItems.map((item) => (
              <article
                key={item.id}
                className={`flex items-start gap-4 pl-5 pr-4 py-4 w-full bg-barley-white rounded-[10px] border-l-4 [border-left-style:solid] border-[#f39c12] ${item.id === 1 ? "min-h-[179px]" : ""}`}
              >
                <div className="flex w-8 h-8 items-center justify-center bg-white rounded-md shrink-0">
                  <span className="font-semibold text-oslo-gray text-sm [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0] leading-[normal]">
                    {item.id}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <h3 className="w-full font-medium text-pickled-bluewood text-[15px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    {item.title}
                  </h3>

                  <div className="flex items-start w-full">
                    <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-pickled-bluewood text-sm leading-[14px] tracking-[0]">
                      <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-[#2c3e50] [font-style:var(--semantic-link-font-style)] tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] text-[length:var(--semantic-link-font-size)]">
                        結果:{" "}
                      </span>
                      <span className="font-semibold text-[#2c3e50]">
                        {item.result}
                      </span>
                    </p>
                    <Badge
                      className={`inline-flex items-center px-2 py-0.5 ${item.statusBg} rounded hover:${item.statusBg}`}
                    >
                      <span
                        className={`font-noto-sans-JP-medium font-[number:var(--noto-sans-JP-medium-font-weight)] ${item.statusText} text-[length:var(--noto-sans-JP-medium-font-size)] leading-[var(--noto-sans-JP-medium-line-height)] tracking-[var(--noto-sans-JP-medium-letter-spacing)] [font-style:var(--noto-sans-JP-medium-font-style)]`}
                      >
                        {item.status}
                      </span>
                    </Badge>
                  </div>

                  <div
                    className={`flex items-start pt-1 w-full ${item.detail2 ? "gap-3" : ""}`}
                  >
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                      {item.detail1}
                    </span>
                    {item.detail2 && (
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                        {item.detail2}
                      </span>
                    )}
                  </div>

                  {item.comment && (
                    <div className="flex flex-col items-start gap-1 pt-[17px] pb-[13px] px-[13px] w-full bg-white rounded-lg border border-solid border-[#e0e6ed]">
                      <span className="w-full font-light text-oslo-gray text-xs leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                        コメント
                      </span>
                      <p className="w-full font-noto-sans-JP-demilight font-[number:var(--noto-sans-JP-demilight-font-weight)] text-pickled-bluewood text-[length:var(--noto-sans-JP-demilight-font-size)] leading-[var(--noto-sans-JP-demilight-line-height)] tracking-[var(--noto-sans-JP-demilight-letter-spacing)] [font-style:var(--noto-sans-JP-demilight-font-style)]">
                        {item.comment}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full h-[380px] bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] border-0 relative">
        <CardContent className="p-6">
          <header className="flex items-center justify-between w-full mb-5">
            <div className="inline-flex items-center gap-3">
              <div className="flex w-9 h-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)]">
                <span className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-white text-[length:var(--semantic-heading-2-font-size)] text-center leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                  ✅
                </span>
              </div>
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                良好項目
              </h2>
            </div>
            <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-oslo-gray text-[length:var(--semantic-link-font-size)] leading-[var(--semantic-link-line-height)] tracking-[var(--semantic-link-letter-spacing)] [font-style:var(--semantic-link-font-style)]">
              9件
            </span>
          </header>

          <div className="flex items-start gap-2 mb-5">
            <Button className="h-auto pt-[7px] pb-2 px-3 bg-curious-blue rounded-md hover:bg-curious-blue/90">
              <span className="font-arial-narrow font-[number:var(--arial-narrow-font-weight)] text-white text-[length:var(--arial-narrow-font-size)] text-center leading-[var(--arial-narrow-line-height)] tracking-[var(--arial-narrow-letter-spacing)] [font-style:var(--arial-narrow-font-style)]">
                すべて表示
              </span>
            </Button>
            <Button className="h-auto pt-[7px] pb-2 px-3 bg-aqua-spring rounded-md hover:bg-aqua-spring/90">
              <span className="font-arial-narrow font-[number:var(--arial-narrow-font-weight)] text-oslo-gray text-[length:var(--arial-narrow-font-size)] text-center leading-[var(--arial-narrow-line-height)] tracking-[var(--arial-narrow-letter-spacing)] [font-style:var(--arial-narrow-font-style)]">
                主要項目のみ
              </span>
            </Button>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            {goodItems.map((item) => (
              <article
                key={item.id}
                className="flex items-start gap-4 p-4 w-full bg-aqua-spring rounded-[10px]"
              >
                <div className="flex w-8 h-8 items-center justify-center bg-white rounded-md shrink-0">
                  <span className="font-semibold text-oslo-gray text-sm [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0] leading-[normal]">
                    {item.id}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <h3 className="w-full font-medium text-pickled-bluewood text-[15px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    {item.title}
                  </h3>

                  <div className="flex items-start w-full">
                    <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-pickled-bluewood text-sm tracking-[0] leading-[14px]">
                      <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-[#2c3e50] [font-style:var(--semantic-link-font-style)] tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] text-[length:var(--semantic-link-font-size)]">
                        {item.measurement ? "測定値: " : "結果: "}
                      </span>
                      <span className="font-semibold text-[#2c3e50]">
                        {item.measurement || item.result}
                      </span>
                    </p>
                    <Badge
                      className={`inline-flex items-center px-2 py-0.5 ${item.statusBg} rounded hover:${item.statusBg}`}
                    >
                      <span
                        className={`font-noto-sans-JP-medium font-[number:var(--noto-sans-JP-medium-font-weight)] ${item.statusText} text-[length:var(--noto-sans-JP-medium-font-size)] tracking-[var(--noto-sans-JP-medium-letter-spacing)] leading-[var(--noto-sans-JP-medium-line-height)] [font-style:var(--noto-sans-JP-medium-font-style)]`}
                      >
                        {item.status}
                      </span>
                    </Badge>
                  </div>

                  <div
                    className={`flex items-start pt-1 w-full ${item.standard ? "gap-3" : ""}`}
                  >
                    {item.standard && (
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.standard}
                      </span>
                    )}
                    {item.tolerance && (
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                        {item.tolerance}
                      </span>
                    )}
                    {item.detail1 && (
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                        {item.detail1}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
