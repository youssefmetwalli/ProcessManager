import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { signatureData } from "../../../../lib/elements/processSheetManagement/processSheetManagement";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-4 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a]">
      <header className="flex flex-col items-start w-full">
        <h2 className="w-full font-noto-sans-JP-semibold font-[number:var(--noto-sans-JP-semibold-font-weight)] text-pickled-bluewood text-[length:var(--noto-sans-JP-semibold-font-size)] leading-[var(--noto-sans-JP-semibold-line-height)] flex items-center justify-center tracking-[var(--noto-sans-JP-semibold-letter-spacing)] [font-style:var(--noto-sans-JP-semibold-font-style)]">
          承認署名
        </h2>
      </header>

      <div className="flex items-start justify-center gap-4 w-full">
        {signatureData.map((signature, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-2 p-4 flex-1 bg-aqua-spring rounded-[10px] border-0"
          >
            <CardContent className="flex flex-col gap-2 p-0 w-full">
              <div className="flex flex-col items-center w-full">
                <p className="w-full [font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-xs text-center leading-[normal] flex items-center justify-center tracking-[0]">
                  {signature.role}
                </p>
              </div>

              <div className="flex flex-col items-center w-full">
                <p className="w-full font-semantic-data font-[number:var(--semantic-data-font-weight)] text-pickled-bluewood text-[length:var(--semantic-data-font-size)] text-center leading-[var(--semantic-data-line-height)] flex items-center justify-center tracking-[var(--semantic-data-letter-spacing)] [font-style:var(--semantic-data-font-style)]">
                  {signature.name}
                </p>
              </div>

              <div className="flex flex-col items-center w-full">
                <p className="flex items-center justify-center w-full [font-family:'Noto_Sans_JP',Helvetica] font-light text-pewter text-xs text-center tracking-[0] leading-[normal]">
                  {signature.timestamp}
                </p>
              </div>

              <button
                className={`flex h-[100px] items-center justify-center p-0.5 w-full bg-white rounded-lg transition-colors ${
                  signature.isSigned
                    ? "border-2 border-solid border-[#27ae60]"
                    : "border-2 border-dashed border-[#e0e6ed] hover:border-solid hover:border-[#cbd5e0]"
                }`}
                aria-label={
                  signature.isSigned
                    ? `${signature.role}の署名済み`
                    : `${signature.role}の署名をタップ`
                }
              >
                <span
                  className={`flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-light text-[13px] text-center leading-[normal] flex items-center justify-center tracking-[0] ${
                    signature.isSigned ? "text-jungle-green" : "text-pewter"
                  }`}
                >
                  {signature.isSigned ? "✓ 署名済み" : "タップして署名"}
                </span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        <Label
          htmlFor="approval-comment"
          className="font-semantic-label font-[number:var(--semantic-label-font-weight)] text-pickled-bluewood text-[length:var(--semantic-label-font-size)] leading-[var(--semantic-label-line-height)] flex items-center justify-center tracking-[var(--semantic-label-letter-spacing)] [font-style:var(--semantic-label-font-style)]"
        >
          承認コメント（任意）
        </Label>

        <Textarea
          id="approval-comment"
          placeholder="NG項目への対応方針や承認条件などを記入してください"
          className="min-h-20 w-full bg-white rounded-lg border-2 border-solid border-[#e0e6ed] font-semantic-textarea font-[number:var(--semantic-textarea-font-weight)] text-boulder text-[length:var(--semantic-textarea-font-size)] tracking-[var(--semantic-textarea-letter-spacing)] leading-[var(--semantic-textarea-line-height)] [font-style:var(--semantic-textarea-font-style)] resize-none"
        />
      </div>
    </section>
  );
};
