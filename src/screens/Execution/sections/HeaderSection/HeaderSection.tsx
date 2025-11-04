import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { milestones } from "../../../../lib/elements/execution/execution";



export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start gap-3 px-5 py-4 bg-white shadow-[0px_2px_8px_#0000000f] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          className="h-auto pt-2.5 pb-3 px-4 bg-porcelain rounded-lg hover:bg-porcelain/80 transition-colors"
        >
          <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-sm text-center whitespace-nowrap tracking-[0] leading-[normal]">
            ← 戻る
          </span>
        </Button>

        <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-pickled-bluewood text-xl whitespace-nowrap tracking-[0] leading-[normal]">
          製品外観検査
        </h1>

        <div className="flex items-start gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-11 h-11 bg-white rounded-[10px] shadow-[0px_2px_4px_#0000001a] hover:bg-white/80 transition-colors"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-xl text-center whitespace-nowrap tracking-[0] leading-[normal]">
              💾
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-11 h-11 bg-white rounded-[10px] shadow-[0px_2px_4px_#0000001a] hover:bg-white/80 transition-colors"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-xl text-center whitespace-nowrap tracking-[0] leading-[normal]">
              ⋮
            </span>
          </Button>
        </div>
      </div>

      <section className="flex flex-col items-start gap-2 pt-0 pb-4 px-5 w-full bg-white">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col items-start">
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] tracking-[0] leading-[normal]">
              進捗: 3/12項目
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] tracking-[0] leading-[normal]">
              残り時間: 約10分
            </p>
          </div>
        </div>

        <Progress value={25} className="w-full h-2 bg-[#e0e6ed]" />

        <nav
          className="flex items-start justify-between pt-2 pb-0 px-2.5 w-full"
          aria-label="検査進捗"
        >
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-3 h-4 pt-0 pb-1 px-0 flex flex-col items-start">
                <div
                  className={`w-3 h-3 rounded-md ${
                    milestone.status === "completed"
                      ? "bg-jungle-green"
                      : milestone.status === "current"
                        ? "bg-curious-blue"
                        : "bg-[#e0e6ed]"
                  }`}
                />
              </div>

              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pewter text-[11px] whitespace-nowrap tracking-[0] leading-[normal]">
                {milestone.label}
              </span>
            </div>
          ))}
        </nav>
      </section>
    </header>
  );
};
