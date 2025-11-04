import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { changeHistory, relatedItems, usageStats } from "../../lib/elements/checklistdetail/checklistdetail";



export const ChecklistDetail = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-center pt-5 pb-32 px-4 relative bg-[linear-gradient(0deg,rgba(255,238,238,1)_0%,rgba(255,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="1:2158"
    >
      <div className="flex flex-col max-w-[400px] items-start gap-6 relative w-full">
        <Card className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <CardContent className="p-6">
            <div className="flex flex-col items-start pb-3.5 border-b-2 border-[#f1f3f5]">
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                使用状況
              </h2>
            </div>

            <div className="flex flex-col gap-0">
              {usageStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between pt-3 pb-[13px] border-b border-[#f1f3f5]"
                >
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] leading-[normal] tracking-[0]">
                    {stat.label}
                  </div>
                  <div className="font-semantic-data font-[number:var(--semantic-data-font-weight)] text-pickled-bluewood text-[length:var(--semantic-data-font-size)] leading-[var(--semantic-data-line-height)] tracking-[var(--semantic-data-letter-spacing)] [font-style:var(--semantic-data-font-style)]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 h-auto pt-[11px] pb-[13px] px-[21px] border-[#e0e6ed] hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-oslo-gray text-[13.3px] text-center leading-[normal] tracking-[0]">
                📊 詳細な使用状況を見る
              </span>
            </Button>
          </CardContent>
        </Card>

        <Card className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <CardContent className="p-6">
            <div className="flex flex-col items-start pb-3.5 border-b-2 border-[#f1f3f5]">
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                変更履歴
              </h2>
            </div>

            <div className="flex flex-col">
              {changeHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 pt-4 pb-[17px] border-b border-[#f1f3f5]"
                >
                  <div className="flex items-center justify-between w-full">
                    <Badge className="px-2 py-0.5 bg-iceberg text-curious-blue hover:bg-iceberg [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-[11px] tracking-[0] leading-[normal]">
                      {entry.version}
                    </Badge>
                    <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pewter text-xs leading-[normal] whitespace-nowrap tracking-[0]">
                      {entry.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <Avatar className="w-6 h-6 rounded-md bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
                      <AvatarFallback className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-[10px] text-center leading-[normal] tracking-[0] bg-transparent">
                        {entry.user.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-pickled-bluewood text-[13px] leading-[normal] tracking-[0]">
                      {entry.user.name}
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    {entry.changes.map((change, changeIndex) => (
                      <div
                        key={changeIndex}
                        className="flex items-start pl-4 relative"
                      >
                        <div className="absolute top-0 left-0 w-1 h-[18px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[18px] whitespace-nowrap tracking-[0]">
                          •
                        </div>
                        <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs leading-[18px] whitespace-nowrap tracking-[0]">
                          {change}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col items-start pb-3.5 border-b-2 border-[#f1f3f5]">
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                ヘルプ
              </h2>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-iceberg rounded-lg">
              <div className="flex items-center gap-2">
                <div className="flex w-5 h-5 items-center justify-center bg-curious-blue rounded-[10px]">
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-xs text-center leading-[normal] tracking-[0]">
                    ?
                  </div>
                </div>
                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-mariner text-sm tracking-[0] leading-[normal]">
                  項目タイプの選び方
                </div>
              </div>

              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-pickled-bluewood text-xs leading-3 tracking-[0]">
                <span className="font-light text-[#2c3e50] leading-[19.2px]">
                  検査内容に応じて適切な項目タイプを選択してください：
                  <br />•{" "}
                </span>
                <span className="font-bold text-[#2c3e50] leading-[19.2px]">
                  選択肢
                </span>
                <span className="font-light text-[#2c3e50] leading-[19.2px]">
                  ：良/不良など決まった選択肢から選ぶ場合
                  <br />•{" "}
                </span>
                <span className="font-bold text-[#2c3e50] leading-[19.2px]">
                  数値
                </span>
                <span className="font-light text-[#2c3e50] leading-[19.2px]">
                  ：測定値を入力する場合
                  <br />•{" "}
                </span>
                <span className="font-bold text-[#2c3e50] leading-[19.2px]">
                  テキスト
                </span>
                <span className="font-light text-[#2c3e50] leading-[19.2px]">
                  ：自由記述が必要な場合
                  <br />•{" "}
                </span>
                <span className="font-bold text-[#2c3e50] leading-[19.2px]">
                  画像
                </span>
                <span className="font-light text-[#2c3e50] leading-[19.2px]">
                  ：写真撮影のみの場合
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 pb-[11.99px] px-4 bg-iceberg rounded-lg">
              <div className="flex items-center gap-2">
                <div className="flex w-5 h-5 items-center justify-center bg-curious-blue rounded-[10px]">
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-xs text-center leading-[normal] tracking-[0]">
                    !
                  </div>
                </div>
                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-mariner text-sm tracking-[0] leading-[normal]">
                  必須項目について
                </div>
              </div>

              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pickled-bluewood text-xs leading-[19.2px] tracking-[0]">
                必須項目に設定すると、作業者は必ず入力する必要があり
                <br />
                ます。 重要な検査項目は必須設定を推奨します。
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full h-auto p-0 hover:bg-transparent"
            >
              <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-curious-blue text-base text-center leading-[normal] tracking-[0]">
                📚 マニュアルを開く
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <CardContent className="p-6">
            <div className="flex flex-col items-start pb-3.5 border-b-2 border-[#f1f3f5]">
              <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] leading-[var(--semantic-heading-2-line-height)] tracking-[var(--semantic-heading-2-letter-spacing)] [font-style:var(--semantic-heading-2-font-style)]">
                関連するチェック項目
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              {relatedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-3 bg-[#f8f9fa] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-pickled-bluewood text-[13px] tracking-[0] leading-[normal]">
                    {item.title}
                  </div>
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[11px] leading-[normal] tracking-[0]">
                    {item.description}
                  </div>
                  <Badge className="w-fit px-1.5 py-0.5 bg-[#e0e6ed] hover:bg-[#e0e6ed] rounded-[3px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[10px] tracking-[0] leading-[normal]">
                    {item.tag}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full max-w-[1920px] items-center justify-between pl-5 pr-[19.99px] pt-[17px] pb-4 fixed left-0 bottom-0 bg-white border-t border-[#e0e6ed] shadow-[0px_-2px_8px_#0000000a]">
        <div className="inline-flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5">
            <div className="w-2 h-2 bg-jungle-green rounded" />
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pewter text-xs leading-[normal] whitespace-nowrap tracking-[0]">
              自動保存中
            </div>
          </div>

          <Button
            variant="outline"
            className="h-auto pt-[11px] pb-[13px] px-[21px] border-[#e0e6ed] hover:bg-gray-50 transition-colors"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-oslo-gray text-[13.3px] text-center leading-[normal] whitespace-nowrap tracking-[0]">
              ↩ 元に戻す
            </span>
          </Button>
        </div>

        <div className="inline-flex items-start gap-3">
          <Button className="h-auto pt-[11px] pb-[13px] px-5 bg-cinnabar hover:bg-cinnabar/90 transition-colors">
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-white text-sm text-center leading-[normal] whitespace-nowrap tracking-[0]">
              🗑 削除
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-auto pt-[11px] pb-[13px] px-[21px] border-[#e0e6ed] hover:bg-gray-50 transition-colors"
          >
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-oslo-gray text-[13.3px] text-center leading-[normal] whitespace-nowrap tracking-[0]">
              キャンセル
            </span>
          </Button>

          <Button className="h-auto pt-[11px] pb-[13px] px-5 bg-[linear-gradient(160deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-white text-sm text-center leading-[normal] whitespace-nowrap tracking-[0]">
              下書き保存
            </span>
          </Button>

          <Button className="h-auto pt-[11px] pb-[13px] px-5 bg-[linear-gradient(164deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-white text-sm text-center leading-[normal] whitespace-nowrap tracking-[0]">
              ✅ 保存して公開
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
