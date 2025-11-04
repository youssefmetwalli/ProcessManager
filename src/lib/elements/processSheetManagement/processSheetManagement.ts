const statusCards = [
  {
    count: "9",
    label: "良好",
    color: "text-jungle-green",
  },
  {
    count: "2",
    label: "要注意",
    color: "text-buttercup",
  },
  {
    count: "1",
    label: "不良",
    color: "text-cinnabar",
  },
];

const inspectionDetails = [
  {
    label: "製品コード",
    value: "PRD-2024-001",
  },
  {
    label: "ロット番号",
    value: "LOT-2024-03-001",
  },
  {
    label: "検査者",
    value: "田中太郎",
  },
  {
    label: "検査日時",
    value: "2024/03/15 15:45",
  },
  {
    label: "所要時間",
    value: "18分32秒",
  },
];

const signatureData = [
  {
    role: "検査実施者",
    name: "田中太郎",
    timestamp: "2024/03/15 15:45",
    isSigned: true,
  },
  {
    role: "品質管理責任者",
    name: "山田次郎",
    timestamp: "未署名",
    isSigned: false,
  },
];

const stepData = [
  { label: "準備", status: "completed", color: "bg-jungle-green" },
  { label: "実行", status: "completed", color: "bg-jungle-green" },
  { label: "確認", status: "active", color: "bg-curious-blue" },
  { label: "完了", status: "pending", color: "bg-[#e0e6ed]" },
];

const ngItems = [
  {
    id: 5,
    title: "塗装厚さ測定",
    measurement: "118μm",
    status: "NG",
    statusBg: "bg-azalea",
    statusText: "text-cinnabar",
    standard: "基準値: 120-130μm",
    tolerance: "許容範囲外",
    comment: "塗装厚が基準値を下回っています。再塗装が必要です。",
    hasImage: true,
    imageSrc: "https://c.animaapp.com/mhk25e65Zwy9on/img/component-1-2.svg",
  },
];

const cautionItems = [
  {
    id: 1,
    title: "外観チェック",
    result: "要注意",
    status: "要注意",
    statusBg: "bg-barley-white",
    statusText: "text-yukon-gold",
    detail1: "軽微な傷あり",
    detail2: "写真: 2枚",
    comment: "表面に微細な擦り傷を確認。機能には影響なし。",
  },
  {
    id: 3,
    title: "塗装状態確認",
    result: "要注意",
    status: "要注意",
    statusBg: "bg-barley-white",
    statusText: "text-yukon-gold",
    detail1: "色ムラあり",
    comment: null,
  },
];

const goodItems = [
  {
    id: 2,
    title: "寸法測定",
    measurement: "125.3mm",
    status: "OK",
    statusBg: "bg-zanah",
    statusText: "text-jungle-green",
    standard: "基準値: 125±0.5mm",
    tolerance: "許容範囲内",
  },
  {
    id: 4,
    title: "動作確認",
    result: "正常動作",
    status: "OK",
    statusBg: "bg-zanah",
    statusText: "text-jungle-green",
    detail1: "全項目チェック済み",
  },
];

const actionButtons = [
  {
    label: "📝 編集",
    className: "bg-hawkes-blue text-pickled-bluewood hover:bg-hawkes-blue/90",
    fontClass: "[font-family:'Arial-Bold',Helvetica] font-bold text-[12.9px]",
  },
  {
    label: "! 条件付き承認",
    className:
      "bg-[linear-gradient(170deg,rgba(243,156,18,1)_0%,rgba(230,126,34,1)_100%)] text-white hover:opacity-90",
    fontClass: "[font-family:'Arial-Bold',Helvetica] font-bold text-base",
  },
  {
    label: "✅ 承認",
    className:
      "bg-[linear-gradient(170deg,rgba(39,174,96,1)_0%,rgba(34,153,84,1)_100%)] text-white hover:opacity-90",
    fontClass:
      "font-semantic-button font-[number:var(--semantic-button-font-weight)] text-[length:var(--semantic-button-font-size)] [font-style:var(--semantic-button-font-style)]",
  },
];

export { statusCards, inspectionDetails, signatureData, stepData, ngItems, cautionItems, goodItems, actionButtons };