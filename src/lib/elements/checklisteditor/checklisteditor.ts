const statsData = [
  {
    label: "カテゴリ",
    value: "外観検査",
  },
  {
    label: "使用回数",
    value: "156回",
  },
  {
    label: "チェック項目数",
    value: "12項目",
  },
  {
    label: "推定作業時間",
    value: "約15分",
  },
];

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

const inspectionItems = [
  {
    id: 1,
    number: "1",
    title: "外装の傷・汚れ確認",
    type: "選択肢",
    typeColor: "bg-[#e8f5e9]",
    typeTextColor: "text-[#2196f3]",
    metadata: ["必須項目", "参考画像あり"],
  },
  {
    id: 2,
    number: "2",
    title: "寸法測定",
    type: "数値",
    typeColor: "bg-[#e8f5e9]",
    typeTextColor: "text-[#2196f3]",
    metadata: ["必須項目", "許容範囲: ±0.5mm"],
  },
  {
    id: 3,
    number: "3",
    title: "塗装状態確認",
    type: "画像",
    typeColor: "bg-[#e8f5e9]",
    typeTextColor: "text-[#2196f3]",
    metadata: ["任意項目", "手書き可能"],
  },
];

export { statsData, breadcrumbItems, metadataItems, inspectionItems };