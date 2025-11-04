import React from "react";
import { Button } from "../../../../components/ui/button";

const mainMenuItems = [
  { id: "dashboard", label: "🏠 ダッシュボード", active: false },
  { id: "master", label: "📋 マスタ管理", active: false },
  { id: "process", label: "⚙ 工程管理", active: true },
  { id: "execute", label: "▶ 実行", active: false },
];

const reportMenuItems = [
  { id: "quality", label: "📊 品質分析", active: false },
  { id: "report", label: "📄 帳票出力", active: false },
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
          <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#ffffff] text-lg">
            工程管理システム
          </h1>
        </div>
      </header>

      <nav className="flex flex-col items-start gap-8 w-full">
        <section className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start px-3 py-0 w-full">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#95a5a6] text-xs">
              メイン
            </h2>
          </div>

          {mainMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start h-auto px-3 py-3 rounded-lg transition-colors hover:bg-white-10 ${
                item.active ? "bg-[#3498db] hover:bg-[#3498db]/90" : ""
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
        </section>

        <section className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start px-3 py-0 w-full">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#95a5a6] text-xs">
              分析・レポート
            </h2>
          </div>

          {reportMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start h-auto px-3 py-3 rounded-lg transition-colors hover:bg-white-10"
            >
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#e8f5e9] text-base">
                {item.label}
              </span>
            </Button>
          ))}
        </section>
      </nav>
    </aside>
  );
};
