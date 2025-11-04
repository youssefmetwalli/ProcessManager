import { Button } from "../../../../components/ui/button";
import { buttons } from "../../../../lib/elements/execution/execution";

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
