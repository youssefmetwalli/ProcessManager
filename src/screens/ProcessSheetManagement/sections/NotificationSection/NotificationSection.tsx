import { Button } from "../../../../components/ui/button";
import { actionButtons } from "../../../../lib/elements/processSheetManagement/processSheetManagement";




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
