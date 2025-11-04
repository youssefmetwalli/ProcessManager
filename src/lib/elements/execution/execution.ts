const buttons = [
  {
    text: "前へ",
    className: "bg-porcelain text-pickled-bluewood hover:bg-porcelain/90",
  },
  {
    text: "一時保存",
    className:
      "bg-[linear-gradient(170deg,rgba(52,152,219,1)_0%,rgba(41,128,185,1)_100%)] text-white hover:opacity-90",
  },
  {
    text: "次へ",
    className:
      "bg-[linear-gradient(170deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)] text-white hover:opacity-90",
  },
];

const milestones = [
  { label: "外観", status: "completed" },
  { label: "寸法", status: "completed" },
  { label: "塗装", status: "current" },
  { label: "機能", status: "pending" },
  { label: "最終", status: "pending" },
];

const infoItems = [
  {
    icon: "📦",
    label: "ロット番号:",
    value: "A2024-001",
  },
  {
    icon: "🏭",
    label: "製品:",
    value: "製品A",
  },
  {
    icon: "👤",
    label: "検査者:",
    value: "田中太郎",
  },
  {
    icon: "📅",
    label: "日時:",
    value: "2024/03/15 14:30",
  },
];

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

export { buttons, milestones, infoItems, imageToolButtons, inspectionOptions };