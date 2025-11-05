import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const menuSections = [
  {
    title: "メイン",
    items: [
      { label: "🏠 ダッシュボード", path: "/dashboard" },
      { label: "📋 チェックリスト管理", path: "/checklists" },
      { label: "⚙ 工程チェックシート管理", path: "/process-sheets" },
      { label: "▶ 実行", path: "/execution" },
    ],
  },
  {
    title: "分析・レポート",
    items: [
      { label: "🗂 カンバンビュー", path: "/kanban" },
      { label: "📊 品質分析", path: "/analytics" },
    ],
  },
  {
    title: "システム",
    items: [
      { label: "👥 ユーザー管理", path: "/users" },
      { label: "⚙ 設定", path: "/settings" },
    ],
  },
];

export const SidebarSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-[260px] items-start gap-10 px-4 py-6 bg-[linear-gradient(180deg,rgba(44,62,80,1)_0%,rgba(52,73,94,1)_100%)]">
      {/* Header */}
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

      {/* Navigation */}
      <nav className="flex flex-col items-start gap-8 w-full">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col items-start px-3 py-0 w-full">
              <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#95a5a6] text-xs">
                {section.title}
              </h2>
            </div>

            {section.items.map((item, itemIndex) => (
              <NavLink
                key={itemIndex}
                to={item.path}
                end
                className={({ isActive }) =>
                  [
                    "group relative w-full block rounded-lg transition-colors duration-200 ease-out",
                    isActive
                      ? "bg-[#3498db] hover:bg-[#2980b9]"
                      : "hover:bg-[#5dade2]/25",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Animated left accent bar */}
                    <span
                      aria-hidden
                      className={[
                        "pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r",
                        "transition-all duration-200 ease-out origin-left",
                        isActive
                          ? "bg-[#ffffff] opacity-100 scale-x-100"
                          : "bg-[#ffffff]/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                    <Button
                      variant="ghost"
                      className={[
                        "w-full justify-start h-auto p-3 bg-transparent transition-all duration-200 ease-out",
                        isActive ? "translate-x-0" : "group-hover:translate-x-[2px]",
                        "hover:bg-transparent hover:text-inherit",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "[font-family:'Noto_Sans_JP',Helvetica] font-light text-base",
                          "transition-colors duration-200 ease-out",
                          isActive
                            ? "text-[#ffffff]"
                            : "text-[#e8f5e9] group-hover:text-[#ffffff]",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                    </Button>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};
