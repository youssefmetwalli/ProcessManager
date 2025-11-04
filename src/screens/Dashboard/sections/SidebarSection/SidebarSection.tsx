import React from "react";
import { Button } from "../../../../components/ui/button";

const menuSections = [
  {
    title: "メイン",
    items: [
      { label: "🏠 ダッシュボード", active: true },
      { label: "📋 マスタ管理", active: false },
      { label: "⚙ 工程管理", active: false },
      { label: "▶ 実行", active: false },
    ],
  },
  {
    title: "分析・レポート",
    items: [
      { label: "📊 品質分析", active: false },
      { label: "📄 帳票出力", active: false },
    ],
  },
  {
    title: "システム",
    items: [
      { label: "👥 ユーザー管理", active: false },
      { label: "⚙ 設定", active: false },
    ],
  },
];

export const SidebarSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-[260px] items-start gap-10 px-4 py-6 bg-[linear-gradient(180deg,rgba(44,62,80,1)_0%,rgba(52,73,94,1)_100%)]">
      <header className="flex items-center gap-3 p-3 w-full bg-white-10 rounded-xl">
        <div className="flex w-10 h-10 items-center justify-center bg-[#3498db] rounded-lg">
          <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl">
            Q
          </span>
        </div>

        <div className="inline-flex flex-col items-start">
          <h1 className="text-[#ffffff] text-lg [font-family:'Noto_Sans_JP',Helvetica] font-semibold">
            工程管理システム
          </h1>
        </div>
      </header>

      <nav className="flex flex-col items-start gap-8 w-full">
        {menuSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col items-start gap-3 w-full"
          >
            <div className="flex flex-col items-start px-3 py-0 w-full">
              <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#95a5a6] text-xs">
                {section.title}
              </h2>
            </div>

            {section.items.map((item, itemIndex) => (
              <Button
                key={itemIndex}
                variant="ghost"
                className={`w-full justify-start h-auto ${
                  item.active
                    ? "bg-[#3498db] p-3 rounded-lg hover:bg-[#3498db]/90"
                    : "pt-1 pb-3 px-3 rounded-lg hover:bg-white-10"
                }`}
              >
                <span
                  className={`[font-family:'Noto_Sans_JP',Helvetica] font-light text-base ${
                    item.active ? "text-[#ffffff]" : "text-[#e8f5e9]"
                  }`}
                >
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};
