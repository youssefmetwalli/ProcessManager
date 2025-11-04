import { BellIcon, ChevronDownIcon} from "lucide-react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { chartData, qualityData, quickActions, recentActivities, statsCards } from "../../../../lib/elements/dashboard/dashboard";


export const DashboardMainSection = (): JSX.Element => {
  return (
    <section className="flex-1 overflow-auto p-8">
      <header className="flex items-center justify-between mb-6 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[32px] [font-family:'Noto_Sans_JP',Helvetica] text-[#2c3e50]">
            おはようございます、田中さん
          </h1>
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-sm">
            2024年3月15日（金）9:30
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative w-11 h-11 rounded-[10px] bg-[#ffffff] shadow-[0px_2px_8px_#0000000a] hover:bg-[#ffffff]"
          >
            <BellIcon className="w-4 h-4 text-[#2c3e50]" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#e74c3c] text-[#ffffff] text-[11px] font-semibold rounded-[10px] p-0 hover:bg-[#e74c3c]">
              5
            </Badge>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center gap-3 px-4 py-2 rounded-[10px] bg-[#ffffff] shadow-[0px_2px_8px_#0000000a] hover:bg-[#ffffff]"
          >
            <Avatar className="w-9 h-9 rounded-lg">
              <AvatarFallback className="rounded-lg bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)] text-[#ffffff] font-semibold text-base">
                田中
              </AvatarFallback>
            </Avatar>
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#2c3e50] text-sm">
              田中太郎
            </span>
            <ChevronDownIcon className="w-4 h-4 text-[#2c3e50]" />
          </Button>
        </div>
      </header>

      <Alert className="mb-6 rounded-[10px] border-l-4 border-[#e74c3c] bg-[linear-gradient(177deg,rgba(255,238,238,1)_0%,rgba(224,230,237,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
        <div className="flex items-center gap-4">
          <div className="flex w-10 h-10 items-center justify-center bg-[#ffffff] rounded-lg shrink-0">
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-xl">
              !
            </span>
          </div>
          <div className="flex-1">
            <AlertDescription className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#e74c3c] text-sm mb-1">
              3件の工程で期限が迫っています
            </AlertDescription>
            <AlertDescription className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#856404] text-[13px]">
              製品D品質検査（本日）、製品E中間検査（明日）、製品F最終検査（明後日）
            </AlertDescription>
          </div>
          <Button
            variant="ghost"
            className="h-auto px-4 py-2.5 bg-[#ffffff] rounded-md hover:bg-[#ffffff] shrink-0"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#000000] text-[13px]">
              確認する
            </span>
          </Button>
        </div>
      </Alert>

      <div className="grid grid-cols-4 gap-5 mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {statsCards.map((stat, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-[0px_2px_8px_#0000000a] border-0"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`flex w-12 h-12 items-center justify-center ${stat.iconBg} rounded-[10px]`}
                >
                  <span className={`${stat.iconColor} text-2xl`}>
                    {stat.icon}
                  </span>
                </div>
                <Badge
                  className={`${stat.trendBg} ${stat.trendColor} text-xs font-semibold px-2 py-1 hover:${stat.trendBg}`}
                >
                  {stat.trend}
                </Badge>
              </div>
              <div className="mb-4">
                <div className="font-bold text-[#2c3e50] text-[32px] [font-family:'Noto_Sans_JP',Helvetica]">
                  {stat.value}
                </div>
              </div>
              <div className="mb-4">
                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-sm">
                  {stat.label}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-[13px] border-t border-[#f1f3f5]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs">
                  {stat.footer}
                </span>
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-xs">
                  {stat.footerValue}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-6 rounded-xl shadow-[0px_2px_8px_#0000000a] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
        <CardContent className="p-6">
          <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-lg mb-5">
            クイックアクション
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex flex-col items-center gap-2 p-6 rounded-[10px] border-2 border-[#e0e6ed] hover:border-[#e0e6ed] hover:bg-transparent"
              >
                <div className="flex w-14 h-14 items-center justify-center bg-[#f8fbfd] rounded-xl">
                  <span className="text-[28px]">{action.icon}</span>
                </div>
                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-sm text-center">
                  {action.title}
                </div>
                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs text-center">
                  {action.description}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-[1fr_524px] gap-6 mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <Card className="rounded-xl shadow-[0px_2px_8px_#0000000a] border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-base">
                週次検査実績
              </h2>
              <div className="flex items-start gap-2">
                <Button
                  size="sm"
                  className="h-auto px-[13px] py-2 bg-[#3498db] hover:bg-[#3498db] rounded-md border border-solid text-[#ffffff] text-xs [font-family:'Arial-Narrow',Helvetica]"
                >
                  週次
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto px-[13px] py-2 bg-[#f8f9fa] hover:bg-[#f8f9fa] rounded-md border border-[#e0e6ed] text-[#000000] text-xs [font-family:'Arial-Narrow',Helvetica]"
                >
                  月次
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto px-[13px] py-2 bg-[#f8f9fa] hover:bg-[#f8f9fa] rounded-md border border-[#e0e6ed] text-[#000000] text-xs [font-family:'Arial-Narrow',Helvetica]"
                >
                  年次
                </Button>
              </div>
            </div>
            <div className="flex h-[300px] items-end gap-[97.1px] px-[68.56px] py-5 rounded-lg bg-[linear-gradient(180deg,rgba(248,251,253,1)_0%,rgba(255,255,255,1)_100%)]">
              {chartData.map((bar, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className={`w-10 ${bar.height} ${bar.opacity || ""} rounded-[4px_4px_0px_0px] bg-[linear-gradient(180deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)]`}
                  />
                  <span className="absolute -bottom-[17px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-[11px]">
                    {bar.day}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-[0px_2px_8px_#0000000a] border-0">
          <CardContent className="p-6">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-base mb-6">
              品質状況
            </h2>
            <div className="relative w-[200px] h-[200px] mx-auto mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[120px] h-[120px] bg-[#ffffff] rounded-[60px]">
                  <div className="text-[28px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#2c3e50]">
                    94.8%
                  </div>
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#7f8c8d] text-xs">
                    合格率
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {qualityData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${item.color} rounded-sm`} />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-[13px]">
                      {item.label}
                    </span>
                  </div>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-[13px]">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-xl shadow-[0px_2px_8px_#0000000a] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
        <CardContent className="p-6">
          <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-lg mb-5">
            最近の検査活動
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#e0e6ed] hover:bg-transparent">
                <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-xs pb-[13px]">
                  工程名
                </TableHead>
                <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-xs pb-[13px]">
                  製品/ロット
                </TableHead>
                <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-xs pb-[13px]">
                  担当者
                </TableHead>
                <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-xs pb-[13px]">
                  ステータス
                </TableHead>
                <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-xs pb-[13px]">
                  実施日時
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow
                  key={index}
                  className="border-b border-[#f1f3f5] hover:bg-transparent"
                >
                  <TableCell className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-sm py-5">
                    {activity.process}
                  </TableCell>
                  <TableCell className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-sm py-5">
                    {activity.product}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-7 h-7 rounded-md">
                        <AvatarFallback className="rounded-md bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)] text-[#ffffff] font-semibold text-[11px]">
                          {activity.assigneeInitial}
                        </AvatarFallback>
                      </Avatar>
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-sm">
                        {activity.assignee}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-[18px]">
                    <Badge
                      className={`${activity.statusBg} ${activity.statusColor} text-[11px] font-semibold px-2.5 py-1 hover:${activity.statusBg}`}
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-sm py-5">
                    {activity.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="ghost"
            className="h-auto w-full mt-5 py-3 px-3 bg-[#f8f9fa] rounded-lg hover:bg-[#f8f9fa]"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#3498db] text-sm">
              すべての活動を表示
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
