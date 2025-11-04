import { Card, CardContent } from "../../../../components/ui/card";
import { statsData } from "../../../../lib/elements/analytics/analyticsdashboard";

export const BackgroundSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white rounded-xl border-0 shadow-none">
      <CardContent className="p-5">
        <div className="grid grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start gap-1"
            >
              <div className="w-full">
                <p className="text-center font-semantic-label-upper font-[number:var(--semantic-label-upper-font-weight)] text-pewter text-[length:var(--semantic-label-upper-font-size)] tracking-[var(--semantic-label-upper-letter-spacing)] leading-[var(--semantic-label-upper-line-height)] [font-style:var(--semantic-label-upper-font-style)]">
                  {stat.label}
                </p>
              </div>
              <div className="w-full">
                <p className="text-center font-medium text-pickled-bluewood text-[15px] [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] leading-normal">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
