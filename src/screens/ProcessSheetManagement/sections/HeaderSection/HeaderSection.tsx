import { MenuIcon, Share2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";

const stepData = [
  { label: "準備", status: "completed", color: "bg-jungle-green" },
  { label: "実行", status: "completed", color: "bg-jungle-green" },
  { label: "確認", status: "active", color: "bg-curious-blue" },
  { label: "完了", status: "pending", color: "bg-[#e0e6ed]" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start gap-3 px-5 py-4 bg-white shadow-[0px_2px_8px_#0000000f] opacity-0 animate-fade-in">
      <nav className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          className="h-auto pt-2.5 pb-3 px-4 bg-hawkes-blue rounded-lg hover:bg-hawkes-blue/80 transition-colors"
        >
          <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-sm text-center tracking-[0]">
            ← 戻る
          </span>
        </Button>

        <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-pickled-bluewood text-xl tracking-[0]">
          検査結果確認
        </h1>

        <div className="flex items-start gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-11 h-11 bg-white rounded-[10px] shadow-[0px_2px_4px_#0000001a] hover:bg-gray-50 transition-colors"
          >
            <Share2Icon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-11 h-11 bg-white rounded-[10px] shadow-[0px_2px_4px_#0000001a] hover:bg-gray-50 transition-colors"
          >
            <MenuIcon className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      <section className="flex flex-col items-start gap-2 pt-0 pb-4 px-5 w-full bg-white">
        <div className="flex items-start justify-between w-full">
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] tracking-[0]">
            ステップ: 3/4
          </p>

          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] tracking-[0]">
            検査完了: 12/12項目
          </p>
        </div>

        <Progress value={75} className="w-full h-2 bg-[#e0e6ed]" />

        <div className="flex items-start justify-between pl-2.5 pr-[10.02px] pt-2 pb-0 w-full">
          {stepData.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col w-3 h-4 items-start pt-0 pb-1 px-0">
                <div
                  className={`w-3 h-3 ${step.color} rounded-md transition-colors`}
                />
              </div>

              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pewter text-[11px] tracking-[0] whitespace-nowrap">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
};
