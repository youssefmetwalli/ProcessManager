import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Progress } from "../../../../components/ui/progress";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const statsData = [
  { icon: "📝", value: "42", label: "総工程シート" },
  { icon: "📅", value: "8", label: "計画中" },
  { icon: "✅", value: "12", label: "準備完了" },
  { icon: "🔄", value: "15", label: "実行中" },
  { icon: "√", value: "7", label: "完了" },
];

const kanbanColumns = [
  {
    id: "planning",
    title: "計画中",
    color: "bg-[#95a5a6]",
    count: 3,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品A 初期ロット検査",
        lot: "📦 ロット: A2024-001",
        processes: "📋 5工程",
        tags: ["新製品", "初期ロット"],
        assignees: ["田", "鈴"],
        date: "📅 3/20開始予定",
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製造機械 定期検査",
        lot: "📦 ロット: B2024-015",
        processes: "📋 3工程",
        tags: ["定期検査"],
        assignees: ["佐"],
        date: "📅 3/22開始予定",
      },
    ],
  },
  {
    id: "ready",
    title: "準備完了",
    color: "bg-[#3498db]",
    count: 4,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品C 最終検査",
        lot: "📦 ロット: C2024-008",
        processes: "📋 8工程",
        progress: { label: "チェックリスト準備", value: 100 },
        tags: ["最終検査", "出荷前"],
        assignees: ["高", "山", "+2"],
        date: "📅 今日開始",
      },
      {
        priority: {
          label: "低優先",
          color: "bg-[#d1ecf1]",
          textColor: "text-eastern-blue",
        },
        title: "製品A サンプル検査",
        lot: "📦 サンプル: 10個",
        processes: "📋 4工程",
        tags: ["サンプル"],
        assignees: ["中"],
        date: "📅 明日開始",
      },
    ],
  },
  {
    id: "inProgress",
    title: "実行中",
    color: "bg-[#f39c12]",
    count: 5,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品D 品質検査",
        lot: "📦 ロット: D2024-012",
        processes: "📋 6工程",
        progress: { label: "進捗状況", value: 65 },
        tags: ["品質検査", "急ぎ"],
        assignees: ["渡", "伊"],
        date: "! 期限: 今日",
        urgent: true,
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製品E 中間検査",
        lot: "📦 ロット: E2024-005",
        processes: "📋 4工程",
        progress: { label: "進捗状況", value: 30 },
        tags: ["中間検査"],
        assignees: ["木"],
        date: "📅 3/18まで",
      },
    ],
  },
  {
    id: "completed",
    title: "完了",
    color: "bg-[#27ae60]",
    count: 7,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品F 出荷前検査",
        lot: "📦 ロット: F2024-003",
        processes: "📋 10工程",
        progress: { label: "完了", value: 100, completed: true },
        tags: ["出荷済み", "合格"],
        assignees: ["斉", "加"],
        date: "✅ 3/14完了",
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製品G 定期検査",
        lot: "📦 ロット: G2024-009",
        processes: "📋 5工程",
        progress: { label: "完了", value: 100, completed: true },
        tags: ["定期検査", "合格"],
        assignees: ["林"],
        date: "✅ 3/13完了",
      },
    ],
  },
];

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-6 p-6 flex-1">
      <Card className="bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <CardContent className="p-8">
          <header className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-1">
              <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#2c3e50] text-[28px] leading-normal tracking-[0]">
                工程チェックシート管理
              </h1>
              <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-sm leading-normal tracking-[0]">
                製造工程全体の品質管理シートを管理
              </p>
            </div>
            <Avatar className="w-10 h-10 rounded-[10px] bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
              <AvatarFallback className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-base">
                田中
              </AvatarFallback>
            </Avatar>
          </header>

          <div className="flex items-start gap-3">
            <Button
              variant="secondary"
              className="h-auto bg-[#ecf0f1] hover:bg-[#dfe4e6] text-[#2c3e50] [font-family:'Arial-Narrow',Helvetica] font-normal text-[13.5px] px-5 py-2.5 rounded-lg transition-colors"
            >
              📋 テンプレートから作成
            </Button>
            <Button
              variant="secondary"
              className="h-auto bg-[#ecf0f1] hover:bg-[#dfe4e6] text-[#2c3e50] [font-family:'Arial-Narrow',Helvetica] font-normal text-[13.5px] px-5 py-2.5 rounded-lg transition-colors"
            >
              📊 レポート出力
            </Button>
            <Button className="h-auto bg-[linear-gradient(168deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] hover:opacity-90 text-white [font-family:'Arial-Narrow',Helvetica] font-normal text-[13.8px] px-5 py-2.5 rounded-lg transition-opacity">
              ➕ 新規工程シート作成
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-5 gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-white rounded-[10px] shadow-[0px_2px_4px_#0000000a] hover:shadow-[0px_4px_8px_#00000014] transition-shadow"
          >
            <CardContent className="flex flex-col items-center p-4 gap-4">
              <div className="flex w-10 h-10 items-center justify-center bg-[#f8fbfd] rounded-lg">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-xl">
                  {stat.icon}
                </span>
              </div>
              <div className="font-bold text-2xl text-center [font-family:'Noto_Sans_JP',Helvetica] text-[#2c3e50] tracking-[0] leading-normal">
                {stat.value}
              </div>
              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs text-center leading-normal whitespace-nowrap tracking-[0]">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white rounded-xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#95a5a6]" />
              <Input
                placeholder="工程シート名、ドラムナンバーで検索..."
                className="pl-12 h-10 bg-white border-[#e0e6ed] [font-family:'Arial-Narrow',Helvetica] font-normal text-[#757575] text-sm rounded-lg"
              />
            </div>
            <Select defaultValue="all-products">
              <SelectTrigger className="w-[150px] h-10 bg-white border-[#e0e6ed] rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-products">すべての製品</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-priorities">
              <SelectTrigger className="w-[150px] h-10 bg-white border-[#e0e6ed] rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-priorities">すべての優先度</SelectItem>
              </SelectContent>
            </Select>
            <ToggleGroup
              type="single"
              defaultValue="kanban"
              className="bg-[#f8fbfd] rounded-lg p-1"
            >
              <ToggleGroupItem
                value="kanban"
                className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[13.3px] px-3 py-2 data-[state=on]:bg-white data-[state=on]:shadow-[0px_1px_3px_#0000001a] data-[state=on]:text-[#2c3e50] data-[state=off]:text-[#7f8c8d] rounded-md transition-all"
              >
                📊 カンバン
              </ToggleGroupItem>
              <ToggleGroupItem
                value="list"
                className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[13.3px] px-3 py-2 data-[state=on]:bg-white data-[state=on]:shadow-[0px_1px_3px_#0000001a] data-[state=on]:text-[#2c3e50] data-[state=off]:text-[#7f8c8d] rounded-md transition-all"
              >
                📋 リスト
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      <ScrollArea className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex gap-5 pb-5">
          {kanbanColumns.map((column, columnIndex) => (
            <div
              key={column.id}
              className="flex-shrink-0 w-80 bg-[#f8fbfd] rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 ${column.color} rounded-[5px]`}
                  />
                  <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-sm leading-normal tracking-[0]">
                    {column.title}
                  </h2>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white px-2 py-0.5 rounded-xl"
                >
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#2c3e50] text-xs">
                    {column.count}
                  </span>
                </Badge>
              </div>

              <div className="flex flex-col gap-3">
                {column.cards.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    className="bg-white rounded-[10px] shadow-[0px_2px_4px_#0000000a] hover:shadow-[0px_4px_8px_#00000014] transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-4 flex flex-col gap-3">
                      <Badge
                        className={`${card.priority.color} ${card.priority.textColor} w-fit px-2 py-1 rounded font-noto-sans-JP-semibold-upper font-[number:var(--noto-sans-JP-semibold-upper-font-weight)] text-[length:var(--noto-sans-JP-semibold-upper-font-size)] leading-[var(--noto-sans-JP-semibold-upper-line-height)] tracking-[var(--noto-sans-JP-semibold-upper-letter-spacing)] [font-style:var(--noto-sans-JP-semibold-upper-font-style)] hover:${card.priority.color}`}
                      >
                        {card.priority.label}
                      </Badge>

                      <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-[15px] tracking-[0] leading-normal">
                        {card.title}
                      </h3>

                      <div className="flex items-center gap-3">
                        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs tracking-[0] leading-normal whitespace-nowrap">
                          {card.lot}
                        </span>
                        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs leading-normal whitespace-nowrap tracking-[0]">
                          {card.processes}
                        </span>
                      </div>

                      {card.progress && (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-start justify-between">
                            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs leading-normal whitespace-nowrap tracking-[0]">
                              {card.progress.label}
                            </span>
                            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs tracking-[0] leading-normal whitespace-nowrap">
                              {card.progress.value}%
                            </span>
                          </div>
                          <Progress
                            value={card.progress.value}
                            className={`h-1.5 ${card.progress.completed ? "bg-mystic" : "bg-mystic"}`}
                            indicatorClassName={
                              card.progress.completed
                                ? "bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)]"
                                : "bg-[linear-gradient(90deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)]"
                            }
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {card.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-[#e8f5e9] text-[#3498db] px-2 py-[3px] rounded font-light text-[11px] hover:bg-[#e8f5e9] [font-family:'Noto_Sans_JP',Helvetica]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#f1f3f5]">
                        <div className="flex items-center -space-x-2">
                          {card.assignees.map((assignee, assigneeIndex) => (
                            <Avatar
                              key={assigneeIndex}
                              className="w-7 h-7 border-2 border-white bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]"
                            >
                              <AvatarFallback className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-[11px]">
                                {assignee}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <span
                          className={`[font-family:'Noto_Sans_JP',Helvetica] font-light text-xs leading-normal tracking-[0] ${
                            card.urgent ? "text-[#e74c3c]" : "text-[#7f8c8d]"
                          }`}
                        >
                          {card.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <button className="flex items-center justify-center w-full pt-[15px] pb-4 px-3.5 rounded-lg border-2 border-dashed border-[#e0e6ed] hover:border-[#3498db] hover:bg-[#f8fbfd] transition-colors">
                  <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#3498db] text-[12.5px] text-center leading-normal whitespace-nowrap tracking-[0]">
                    ➕ 新規追加
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
