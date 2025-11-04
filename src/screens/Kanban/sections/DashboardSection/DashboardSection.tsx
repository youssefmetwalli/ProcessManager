import { MoreVerticalIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { checklistCards, statsData, tabsData } from "../../../../lib/elements/kanban/kanban";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-6 px-8 py-6 w-full">
      <Card className="rounded-2xl bg-[#ffffff] shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <CardContent className="flex flex-col gap-5 p-6">
          <header className="flex items-center justify-between w-full">
            <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#2c3e50] text-[28px] leading-normal tracking-[0]">
              マスタ管理
            </h1>
            <Avatar className="w-10 h-10 rounded-[10px] bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
              <AvatarFallback className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#ffffff] text-base bg-transparent">
                田中
              </AvatarFallback>
            </Avatar>
          </header>

          <div className="flex items-center justify-between w-full">
            <nav className="flex items-start gap-2">
              {tabsData.map((tab, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto pt-2.5 pb-3 px-5 rounded-lg ${
                    tab.active
                      ? "bg-[#3498db] hover:bg-[#3498db]"
                      : "hover:bg-transparent"
                  }`}
                >
                  <span
                    className={`[font-family:'Arial-Narrow',Helvetica] font-normal text-[15px] text-center leading-normal whitespace-nowrap tracking-[0] ${
                      tab.active ? "text-[#ffffff]" : "text-[#7f8c8d]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </Button>
              ))}
            </nav>

            <div className="flex items-start gap-[12.01px]">
              <Button
                variant="ghost"
                className="h-auto pt-2.5 pb-3 px-5 bg-[#ecf0f1] rounded-lg hover:bg-[#ecf0f1]/80"
              >
                <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#2c3e50] text-[13.5px] text-center leading-normal whitespace-nowrap tracking-[0]">
                  🔄 テンプレートから作成
                </span>
              </Button>
              <Button
                variant="ghost"
                className="h-auto pt-2.5 pb-3 px-5 rounded-lg bg-[linear-gradient(161deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] hover:opacity-90"
              >
                <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#ffffff] text-[13.5px] text-center leading-normal whitespace-nowrap tracking-[0]">
                  ➕ 新規作成
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-[#ffffff] rounded-xl shadow-[0px_2px_8px_#0000000a]"
          >
            <CardContent className="flex flex-col p-5 gap-3">
              <div className="flex w-10 h-10 items-center justify-center bg-[#f8fbfd] rounded-lg">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-xl text-center leading-normal whitespace-nowrap tracking-[0]">
                  {stat.icon}
                </span>
              </div>

              <div className="flex items-center gap-[7.6px]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#2c3e50] text-2xl leading-normal tracking-[0]">
                  {stat.value}
                </span>
                {stat.change && (
                  <span
                    className={`[font-family:'Noto_Sans_JP',Helvetica] font-bold text-xs leading-normal tracking-[0] ${stat.changeColor}`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>

              <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-[13px] leading-normal tracking-[0]">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="h-20 bg-[#ffffff] rounded-xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <CardContent className="flex items-center justify-between h-full p-6 gap-4">
          <div className="relative flex-1 max-w-[calc(100%_-_432px)]">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#95a5a6]" />
            <Input
              placeholder="チェックリスト名で検索..."
              className="pl-[45px] pr-[17px] h-[38px] bg-[#ffffff] rounded-lg border border-solid border-[#e0e6ed] [font-family:'Arial-Narrow',Helvetica] font-normal text-[#757575] text-sm"
            />
          </div>

          <Select defaultValue="all-categories">
            <SelectTrigger className="w-[150px] h-10 bg-[#ffffff] rounded-lg border border-solid border-[#e0e6ed]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">
                <span className="font-semantic-options font-[number:var(--semantic-options-font-weight)] text-[#000000] text-[length:var(--semantic-options-font-size)] leading-[var(--semantic-options-line-height)] tracking-[var(--semantic-options-letter-spacing)] [font-style:var(--semantic-options-font-style)]">
                  すべてのカテゴリ
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-status">
            <SelectTrigger className="w-[150px] h-10 bg-[#ffffff] rounded-lg border border-solid border-[#e0e6ed]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">
                <span className="font-semantic-options font-[number:var(--semantic-options-font-weight)] text-[#000000] text-[length:var(--semantic-options-font-size)] leading-[var(--semantic-options-line-height)] tracking-[var(--semantic-options-letter-spacing)] [font-style:var(--semantic-options-font-style)]">
                  すべてのステータス
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        {checklistCards.map((card, index) => (
          <Card
            key={index}
            className="bg-[#ffffff] rounded-xl shadow-[0px_2px_8px_#0000000a] transition-transform hover:scale-[1.02]"
          >
            <CardContent className="flex flex-col p-6 gap-4 relative">
              <div className="flex items-start justify-between">
                <div
                  className={`flex w-12 h-12 items-center justify-center rounded-[10px] ${card.iconBg}`}
                >
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#ffffff] text-xl text-center leading-normal tracking-[0]">
                    {card.iconText}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 hover:bg-transparent"
                >
                  <MoreVerticalIcon className="w-4 h-4 text-[#95a5a6]" />
                </Button>
              </div>

              <Badge
                className={`absolute top-6 right-6 h-auto px-3 py-1.5 ${card.statusBg} rounded-md hover:${card.statusBg}`}
              >
                <span
                  className={`font-[number:var(--noto-sans-JP-semibold-upper-font-weight)] text-[length:var(--noto-sans-JP-semibold-upper-font-size)] font-noto-sans-JP-semibold-upper tracking-[var(--noto-sans-JP-semibold-upper-letter-spacing)] leading-[var(--noto-sans-JP-semibold-upper-line-height)] [font-style:var(--noto-sans-JP-semibold-upper-font-style)] ${card.statusColor}`}
                >
                  {card.status}
                </span>
              </Badge>

              <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-lg leading-normal tracking-[0]">
                {card.title}
              </h3>

              <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-sm leading-[21px] tracking-[0] min-h-[42px]">
                {card.description}
              </p>

              <div className="flex items-start justify-center gap-3 py-[17px] border-t border-b border-[#f1f3f5]">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-xl text-center leading-normal tracking-[0]">
                    {card.stats.items}
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs text-center leading-normal tracking-[0]">
                    項目数
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-xl text-center leading-normal tracking-[0]">
                    {card.stats.usage}
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs text-center leading-normal tracking-[0]">
                    使用回数
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-xl text-center leading-normal tracking-[0]">
                    {card.stats.time}
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs text-center leading-normal tracking-[0]">
                    作業時間
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-2">
                {card.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="h-auto px-2.5 py-1 bg-[#e8f5e9] rounded hover:bg-[#e8f5e9]"
                  >
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#3498db] text-xs leading-normal whitespace-nowrap tracking-[0]">
                      {tag}
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs tracking-[0] leading-normal whitespace-nowrap">
                  更新: {card.updateDate}
                </span>
                <div className="flex items-start gap-2">
                  {card.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant="ghost"
                      className={`h-auto pt-[7px] pb-2 px-3 ${action.bg} rounded-md hover:${action.bg}/80 ${
                        action.opacity || ""
                      }`}
                    >
                      <span
                        className={`[font-family:'Arial-Narrow',Helvetica] font-normal text-[13px] text-center leading-normal whitespace-nowrap tracking-[0] ${action.color}`}
                      >
                        {action.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-[#ffffff] rounded-xl border-2 border-dashed border-[#e0e6ed] shadow-[0px_2px_8px_#0000000a] transition-transform hover:scale-[1.02] cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 min-h-[380px]">
            <div className="flex w-16 h-16 items-center justify-center bg-[#e8f5e9] rounded-[32px] mb-4">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#3498db] text-[32px] text-center leading-normal whitespace-nowrap tracking-[0]">
                ➕
              </span>
            </div>
            <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#2c3e50] text-base leading-normal tracking-[0] mb-2">
              新規チェックリスト作成
            </h3>
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-[13px] leading-normal tracking-[0]">
              クリックして新しいチェックリストを作成
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
