import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";

const breadcrumbItems = [
  { label: "マスタ管理", isLink: true },
  { label: "作業チェックリスト", isLink: true },
  { label: "製品外観検査リスト", isLink: false },
];

const metadataItems = [
  {
    icon: "https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-1.svg",
    text: "更新日: 2024/03/15",
  },
  {
    icon: "https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-14.svg",
    text: "作成者: 田中太郎",
  },
];

export const BackgroundShadowSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 pt-6 pb-12 px-8 w-full bg-white rounded-2xl shadow-[0px_2px_8px_#0000000a]">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center gap-2">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.isLink ? (
                  <BreadcrumbLink className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-curious-blue text-sm tracking-[0] leading-normal">
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-sm tracking-[0] leading-normal">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-sm tracking-[0] leading-normal">
                  ›
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex flex-col items-start gap-2">
          <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-pickled-bluewood text-[28px] tracking-[0] leading-normal">
            製品外観検査リスト
          </h1>

          <div className="flex items-start gap-4">
            <Badge className="px-3 py-1 bg-zanah text-jungle-green [font-family:'Noto_Sans_JP',Helvetica] font-medium text-xs tracking-[0] leading-normal rounded-md hover:bg-zanah">
              有効
            </Badge>

            {metadataItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <img className="w-4 h-4" alt="Icon" src={item.icon} />
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-oslo-gray text-sm tracking-[0] leading-normal">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Button
            variant="secondary"
            className="h-[38px] w-[92px] bg-hawkes-blue hover:bg-hawkes-blue/80 rounded-lg transition-colors"
          >
            <img
              className="w-4 h-4"
              alt="CopyIcon icon"
              src="https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-13.svg"
            />
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-pickled-bluewood text-sm tracking-[0] leading-normal">
              複製
            </span>
          </Button>

          <Button className="h-[38px] w-[92px] bg-[linear-gradient(158deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] hover:opacity-90 rounded-lg transition-opacity">
            <img
              className="w-4 h-4"
              alt="EditIcon icon"
              src="https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-3.svg"
            />
            <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal">
              編集
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
