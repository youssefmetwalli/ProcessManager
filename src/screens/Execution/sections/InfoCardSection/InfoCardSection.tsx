import { Card, CardContent } from "../../../../components/ui/card";
import { infoItems } from "../../../../lib/elements/execution/execution";



export const InfoCardSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-barley-white border-none rounded-[10px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <CardContent className="flex flex-wrap items-start gap-x-6 gap-y-3 p-3">
        {infoItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2">
            <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-yukon-gold text-[length:var(--semantic-link-font-size)] tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] [font-style:var(--semantic-link-font-style)]">
              {item.icon}
            </span>

            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-yukon-gold text-sm tracking-[0] leading-[normal]">
              {item.label}
            </span>

            <span className="font-semantic-link font-[number:var(--semantic-link-font-weight)] text-yukon-gold text-[length:var(--semantic-link-font-size)] tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] [font-style:var(--semantic-link-font-style)]">
              {item.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
