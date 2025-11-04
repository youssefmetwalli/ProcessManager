import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Textarea } from "../../../../components/ui/textarea";

const imageToolButtons = [
  { icon: "🔍", label: "拡大" },
  { icon: "✏", label: "手書き" },
  { icon: "📐", label: "比較" },
];

const inspectionOptions = [
  { id: "good", label: "良好 - 問題なし" },
  { id: "caution", label: "要注意 - 軽微な問題あり" },
  { id: "defect", label: "不良 - 修正が必要" },
];

export const MainContentWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[900px] w-full items-start gap-5 pt-5 pb-10 px-5">
      <Card className="w-full bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <CardContent className="flex flex-col items-start gap-5 p-6">
          <header className="flex items-start justify-between w-full">
            <div className="inline-flex items-center gap-4">
              <div className="flex w-12 h-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white text-xl font-bold">
                  4
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] tracking-[var(--semantic-heading-2-letter-spacing)] leading-[var(--semantic-heading-2-line-height)] [font-style:var(--semantic-heading-2-font-style)]">
                  塗装状態の確認
                </h2>
                <p className="font-[number:var(--semantic-link-font-weight)] text-oslo-gray text-[length:var(--semantic-link-font-size)] font-semantic-link tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] [font-style:var(--semantic-link-font-style)]">
                  表面の塗装にムラ、剥がれ、気泡がないか確認してください
                </p>
              </div>
            </div>

            <Badge className="px-2.5 py-1 bg-chablis rounded-md h-auto">
              <span className="font-semibold text-cinnabar text-xs [font-family:'Noto_Sans_JP',Helvetica]">
                必須
              </span>
            </Badge>
          </header>

          <div className="flex flex-col items-start gap-3 w-full">
            <Label className="font-[number:var(--semantic-cell-upper-font-weight)] text-oslo-gray text-[length:var(--semantic-cell-upper-font-size)] font-semantic-cell-upper tracking-[var(--semantic-cell-upper-letter-spacing)] leading-[var(--semantic-cell-upper-line-height)] [font-style:var(--semantic-cell-upper-font-style)]">
              参考画像
            </Label>

            <div className="max-w-[400px] w-[400px] rounded-xl overflow-hidden border-2 border-solid border-[#e0e6ed]">
              <div className="flex flex-col w-[400px] h-[301px] items-center justify-center px-0 py-[0.5px]">
                <div className="relative w-[400px] h-[300px] bg-[url(https://c.animaapp.com/mhk25e65Zwy9on/img/vector.svg)] bg-[100%_100%]">
                  <div className="absolute w-[32.00%] h-[6.33%] top-[46.27%] left-[34.00%] font-inter-regular font-[number:var(--inter-regular-font-weight)] text-oslo-gray text-[length:var(--inter-regular-font-size)] text-center whitespace-nowrap tracking-[var(--inter-regular-letter-spacing)] leading-[var(--inter-regular-line-height)] [font-style:var(--inter-regular-font-style)]">
                    良品サンプル画像
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 w-full">
              {imageToolButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto pt-2.5 pb-[11px] px-[17px] bg-aqua-spring rounded-lg border border-solid border-[#e0e6ed] hover:bg-aqua-spring/80 transition-colors"
                >
                  <span className="font-arial-narrow font-[number:var(--arial-narrow-font-weight)] text-black text-[length:var(--arial-narrow-font-size)] tracking-[var(--arial-narrow-letter-spacing)] leading-[var(--arial-narrow-line-height)] [font-style:var(--arial-narrow-font-style)]">
                    {button.icon} {button.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 pt-1 w-full">
            <Label className="font-[number:var(--semantic-label-font-weight)] text-pickled-bluewood text-[length:var(--semantic-label-font-size)] font-semantic-label tracking-[var(--semantic-label-letter-spacing)] leading-[var(--semantic-label-line-height)] [font-style:var(--semantic-label-font-style)]">
              検査結果を選択してください
            </Label>

            <RadioGroup className="flex flex-col gap-3 w-full">
              {inspectionOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center gap-3 pl-5 pr-[18px] py-[18px] rounded-[10px] cursor-pointer hover:bg-aqua-spring transition-colors"
                >
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="w-6 h-6 rounded-xl border-2 border-solid border-[#cbd5e0]"
                  />
                  <Label
                    htmlFor={option.id}
                    className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-pickled-bluewood text-base cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex flex-col items-start gap-3 pt-1 w-full">
            <Label className="font-[number:var(--semantic-label-font-weight)] text-pickled-bluewood text-[length:var(--semantic-label-font-size)] font-semantic-label tracking-[var(--semantic-label-letter-spacing)] leading-[var(--semantic-label-line-height)] [font-style:var(--semantic-label-font-style)]">
              写真撮影（任意）
            </Label>

            <button className="relative w-full h-[195px] bg-aqua-spring rounded-xl border-2 border-dashed border-[#cbd5e0] hover:bg-aqua-spring/80 transition-colors">
              <div className="flex w-16 h-16 items-center justify-center absolute top-[34px] left-[calc(50.00%_-_32px)] bg-[#e0e6ed] rounded-[32px]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-pickled-bluewood text-[28px]">
                  📷
                </span>
              </div>

              <div className="flex flex-col w-[calc(100%_-_68px)] items-center absolute top-[114px] left-[34px]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-pickled-bluewood text-base whitespace-nowrap">
                  タップして写真を撮影
                </span>
              </div>

              <div className="flex flex-col w-[calc(100%_-_68px)] items-center absolute top-[142px] left-[34px]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px]">
                  または画像をアップロード
                </span>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-start gap-2 pt-5 pb-4 px-4 w-full bg-aqua-spring rounded-[10px]">
            <Label className="font-semibold text-oslo-gray text-[13px] [font-family:'Noto_Sans_JP',Helvetica]">
              備考・コメント（任意）
            </Label>

            <Textarea
              placeholder="気になった点や詳細情報を入力..."
              className="min-h-20 bg-white rounded-lg border border-solid border-[#e0e6ed] font-semantic-textarea font-[number:var(--semantic-textarea-font-weight)] text-[#757575] text-[length:var(--semantic-textarea-font-size)] tracking-[var(--semantic-textarea-letter-spacing)] leading-[var(--semantic-textarea-line-height)] [font-style:var(--semantic-textarea-font-style)]"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <CardContent className="flex flex-col items-start gap-5 pt-6 pb-12 px-6">
          <header className="flex items-start justify-between w-full">
            <div className="inline-flex items-center gap-4">
              <div className="flex w-12 h-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
                <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white text-xl font-bold">
                  5
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <h2 className="font-semantic-heading-2 font-[number:var(--semantic-heading-2-font-weight)] text-pickled-bluewood text-[length:var(--semantic-heading-2-font-size)] tracking-[var(--semantic-heading-2-letter-spacing)] leading-[var(--semantic-heading-2-line-height)] [font-style:var(--semantic-heading-2-font-style)]">
                  塗装厚さ測定
                </h2>
                <p className="font-[number:var(--semantic-link-font-weight)] text-oslo-gray text-[length:var(--semantic-link-font-size)] font-semantic-link tracking-[var(--semantic-link-letter-spacing)] leading-[var(--semantic-link-line-height)] [font-style:var(--semantic-link-font-style)]">
                  指定箇所の塗装厚さを測定して記録してください
                </p>
              </div>
            </div>

            <Badge className="px-2.5 py-1 bg-chablis rounded-md h-auto">
              <span className="font-semibold text-cinnabar text-xs [font-family:'Noto_Sans_JP',Helvetica]">
                必須
              </span>
            </Badge>
          </header>

          <div className="w-full">
            <Label className="font-semantic-label font-[number:var(--semantic-label-font-weight)] text-pickled-bluewood text-[length:var(--semantic-label-font-size)] tracking-[var(--semantic-label-letter-spacing)] leading-[var(--semantic-label-line-height)] [font-style:var(--semantic-label-font-style)]">
              測定値を入力してください
            </Label>

            <div className="flex w-full items-center gap-3 mt-8">
              <Button
                variant="outline"
                className="w-12 h-12 p-0 bg-aqua-spring rounded-lg border border-solid border-[#e0e6ed] hover:bg-aqua-spring/80 transition-colors"
              >
                <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-xl">
                  −
                </span>
              </Button>

              <Input
                type="text"
                defaultValue="125"
                className="flex-1 h-auto p-[18px] bg-white rounded-[10px] border-2 border-solid border-[#e0e6ed] font-semantic-input text-black text-[length:var(--semantic-input-font-size)] font-[number:var(--semantic-input-font-weight)] text-center tracking-[var(--semantic-input-letter-spacing)] leading-[var(--semantic-input-line-height)] [font-style:var(--semantic-input-font-style)]"
              />

              <Button
                variant="outline"
                className="w-12 h-12 p-0 bg-aqua-spring rounded-lg border border-solid border-[#e0e6ed] hover:bg-aqua-spring/80 transition-colors"
              >
                <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-black text-xl">
                  +
                </span>
              </Button>

              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-oslo-gray text-base whitespace-nowrap">
                μm
              </span>
            </div>

            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-[13px] mt-[21px]">
              許容範囲: 120〜130 μm（基準値: 125 μm ±5）
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
