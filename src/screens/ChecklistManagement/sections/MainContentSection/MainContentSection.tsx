import { EditIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { tabItems, tableData } from "../../../../lib/elements/checklistmanagement/checklistmanagement";



export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-6 p-6 flex-1">
      <div className="flex flex-col gap-5 p-8 bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0">
        <header className="flex items-center justify-between">
          <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#2c3e50] text-[28px] tracking-[0] leading-normal">
            マスタ管理
          </h1>

          <Avatar className="w-10 h-10 rounded-[10px] bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
            <AvatarFallback className="bg-transparent [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-base">
              田中
            </AvatarFallback>
          </Avatar>
        </header>

        <div className="flex items-center justify-between">
          <div className="pb-5">
            <Tabs defaultValue="check-items" className="w-auto">
              <TabsList className="bg-transparent h-auto p-0 gap-2">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`h-auto px-5 py-2.5 rounded-lg data-[state=active]:bg-[#3498db] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#7f8c8d] [font-family:'Arial-Narrow',Helvetica] font-normal text-[15px] transition-colors`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-start gap-3">
            <Button
              variant="ghost"
              className="h-auto bg-[#ecf0f1] hover:bg-[#dfe4e6] px-5 py-2.5 rounded-lg [font-family:'Arial-Narrow',Helvetica] font-normal text-[#2c3e50] text-[12.9px] transition-colors"
            >
              📥 インポート
            </Button>

            <Button
              variant="ghost"
              className="h-auto bg-[#ecf0f1] hover:bg-[#dfe4e6] px-5 py-2.5 rounded-lg [font-family:'Arial-Narrow',Helvetica] font-normal text-[#2c3e50] text-[12.9px] transition-colors"
            >
              📤 エクスポート
            </Button>

            <Button className="h-auto bg-[linear-gradient(161deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] hover:opacity-90 px-5 py-2.5 rounded-lg [font-family:'Arial-Narrow',Helvetica] font-normal text-white text-[13.5px] transition-opacity">
              ➕ 新規作成
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 h-20 bg-white rounded-xl px-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#95a5a6]" />
          <Input
            placeholder="項目名、説明で検索..."
            className="h-[42px] pl-12 pr-4 bg-white border-[#e0e6ed] rounded-lg [font-family:'Arial-Narrow',Helvetica] font-normal text-[#757575] text-sm"
          />
        </div>

        <Select defaultValue="all-types">
          <SelectTrigger className="w-[150px] h-[42px] bg-white border-[#e0e6ed] rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">すべてのタイプ</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-categories">
          <SelectTrigger className="w-[150px] h-[42px] bg-white border-[#e0e6ed] rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-categories">すべてのカテゴリ</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f8fbfd] border-b-2 border-[#e0e6ed] hover:bg-[#f8fbfd]">
              <TableHead className="w-[50px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                <Checkbox />
              </TableHead>
              <TableHead className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                項目名
              </TableHead>
              <TableHead className="w-[120px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                タイプ
              </TableHead>
              <TableHead className="w-[120px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                カテゴリ
              </TableHead>
              <TableHead className="w-[100px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                ステータス
              </TableHead>
              <TableHead className="w-[100px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                使用回数
              </TableHead>
              <TableHead className="w-[124px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                更新日
              </TableHead>
              <TableHead className="w-[120px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#7f8c8d] text-[13px]">
                操作
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-[#f1f3f5] hover:bg-[#fafbfc] transition-colors"
              >
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar
                      className="w-10 h-10 rounded-lg"
                      style={{ background: row.avatar.gradient }}
                    >
                      <AvatarFallback className="bg-transparent [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-base">
                        {row.avatar.text}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[#2c3e50] text-[15px]">
                        {row.title}
                      </div>
                      <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#95a5a6] text-[13px]">
                        {row.description}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className="px-3 py-1.5 rounded-md [font-family:'Noto_Sans_JP',Helvetica] font-medium text-xs"
                    style={{
                      backgroundColor: row.type.bg,
                      color: row.type.color,
                    }}
                  >
                    {row.type.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-base whitespace-nowrap">
                    {row.category}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    className="px-3 py-1.5 rounded-md [font-family:'Noto_Sans_JP',Helvetica] font-medium text-xs"
                    style={{
                      backgroundColor: row.status.bg,
                      color: row.status.color,
                    }}
                  >
                    {row.status.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] text-base leading-4">
                    <span className="font-bold text-[#2c3e50]">
                      {row.usageCount}
                    </span>
                    <br />
                    <span className="font-light text-[#2c3e50] text-[13.3px]">
                      使用回数
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#2c3e50] text-base whitespace-nowrap">
                    {row.updateDate}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-start gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-9 h-9 bg-white border-[#e0e6ed] hover:bg-[#f8fbfd] transition-colors"
                    >
                      <EditIcon className="w-4 h-4 text-[#000000]" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-9 h-9 bg-white border-[#e0e6ed] hover:bg-[#f8fbfd] transition-colors"
                    >
                      <Trash2Icon className="w-4 h-4 text-[#000000]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
