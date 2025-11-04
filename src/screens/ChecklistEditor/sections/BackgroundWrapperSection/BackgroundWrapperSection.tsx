import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const BackgroundWrapperSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between pt-4 pb-3 px-5 w-full bg-white rounded-xl translate-y-[-1rem] animate-fade-in opacity-0">
      <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-pickled-bluewood text-lg tracking-[0] leading-normal">
        チェック項目一覧
      </h2>

      <Button className="h-auto bg-curious-blue hover:bg-curious-blue/90 rounded-md px-4 py-2 transition-colors">
        <PlusIcon className="w-4 h-4 mr-2" />
        <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal">
          項目を追加
        </span>
      </Button>
    </header>
  );
};
