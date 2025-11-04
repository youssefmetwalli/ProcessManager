import React from "react";
import { Button } from "../../../../components/ui/button";

const buttons = [
  {
    text: "前へ",
    className: "bg-porcelain text-pickled-bluewood hover:bg-porcelain/90",
  },
  {
    text: "一時保存",
    className:
      "bg-[linear-gradient(170deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] text-white hover:opacity-90",
  },
  {
    text: "次へ",
    className:
      "bg-[linear-gradient(170deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)] text-white hover:opacity-90",
  },
];

export const ContentContainerSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white shadow-[0px_-4px_12px_#00000014] py-5 px-4 md:px-8 lg:px-[510px]">
      <div className="flex items-center justify-center gap-3 w-full max-w-[900px] mx-auto">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`flex-1 h-auto py-[17px] px-6 rounded-[10px] [font-family:'Arial-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-[normal] transition-opacity ${button.className}`}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </section>
  );
};
