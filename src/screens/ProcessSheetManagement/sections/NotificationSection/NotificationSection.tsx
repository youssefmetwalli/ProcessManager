import React from "react";
import { Button } from "../../../../components/ui/button";

const actionButtons = [
  {
    label: "📝 編集",
    className: "bg-hawkes-blue text-pickled-bluewood hover:bg-hawkes-blue/90",
    fontClass: "[font-family:'Arial-Bold',Helvetica] font-bold text-[12.9px]",
  },
  {
    label: "! 条件付き承認",
    className:
      "bg-[linear-gradient(170deg,rgba(243,156,18,1)_0%,rgba(230,126,34,1)_100%)] text-white hover:opacity-90",
    fontClass: "[font-family:'Arial-Bold',Helvetica] font-bold text-base",
  },
  {
    label: "✅ 承認",
    className:
      "bg-[linear-gradient(170deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)] text-white hover:opacity-90",
    fontClass:
      "font-semantic-button font-[number:var(--semantic-button-font-weight)] text-[length:var(--semantic-button-font-size)] [font-style:var(--semantic-button-font-style)]",
  },
];

export const NotificationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center py-5 bg-white shadow-[0px_-4px_12px_#00000014]">
      <div className="flex w-full max-w-[900px] items-center justify-center gap-3 px-4">
        {actionButtons.map((button, index) => (
          <Button
            key={index}
            className={`flex-1 h-auto py-[17px] px-6 rounded-[10px] transition-opacity ${button.className}`}
          >
            <span className={`${button.fontClass} tracking-[0] leading-normal`}>
              {button.label}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
