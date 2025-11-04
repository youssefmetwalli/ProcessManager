const statsData = [
  {
    icon: "📋",
    value: "24",
    change: "↑12%",
    changeColor: "text-[#27ae60]",
    label: "総チェックリスト数",
  },
  {
    icon: "✅",
    value: "18",
    change: null,
    changeColor: "",
    label: "有効なリスト",
  },
  {
    icon: "📊",
    value: "1,256",
    change: "↑8%",
    changeColor: "text-[#27ae60]",
    label: "今月の使用回数",
  },
  {
    icon: "⏱",
    value: "15分",
    change: null,
    changeColor: "",
    label: "平均作業時間",
  },
];

const tabsData = [
  { label: "チェック項目", active: false },
  { label: "作業チェックリスト", active: true },
  { label: "テンプレート", active: false },
];

const checklistCards = [
  {
    iconBg:
      "bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]",
    iconText: "外",
    title: "製品外観検査リスト",
    description:
      "製品の外観品質を確認するための標準チェックリスト。傷、汚れ、変形などを検査。",
    stats: { items: "12", usage: "156", time: "15分" },
    tags: ["外観検査", "必須", "写真撮影あり"],
    updateDate: "2024/03/15",
    status: "有効",
    statusBg: "bg-[#d4edda]",
    statusColor: "text-[#27ae60]",
    actions: [
      { label: "編集", bg: "bg-[#e3f2fd]", color: "text-[#2196f3]" },
      { label: "実行", bg: "bg-[#d4edda]", color: "text-[#27ae60]" },
    ],
  },
  {
    iconBg:
      "bg-[linear-gradient(135deg,rgba(240,147,251,1)_0%,rgba(245,87,108,1)_100%)]",
    iconText: "寸",
    title: "寸法測定チェックリスト",
    description:
      "製品の各部寸法を測定し、設計仕様との適合性を確認する検査リスト。",
    stats: { items: "8", usage: "89", time: "20分" },
    tags: ["寸法測定", "精密検査"],
    updateDate: "2024/03/14",
    status: "有効",
    statusBg: "bg-[#d4edda]",
    statusColor: "text-[#27ae60]",
    actions: [
      { label: "編集", bg: "bg-[#e3f2fd]", color: "text-[#2196f3]" },
      { label: "実行", bg: "bg-[#d4edda]", color: "text-[#27ae60]" },
    ],
  },
  {
    iconBg:
      "bg-[linear-gradient(135deg,rgba(79,172,254,1)_0%,rgba(0,242,254,1)_100%)]",
    iconText: "機",
    title: "機能テストチェックリスト",
    description:
      "製品の動作確認と機能テストを行うための総合的なチェックリスト。",
    stats: { items: "15", usage: "234", time: "30分" },
    tags: ["機能テスト", "動作確認", "電気試験"],
    updateDate: "2024/03/13",
    status: "有効",
    statusBg: "bg-[#d4edda]",
    statusColor: "text-[#27ae60]",
    actions: [
      { label: "編集", bg: "bg-[#e3f2fd]", color: "text-[#2196f3]" },
      { label: "実行", bg: "bg-[#d4edda]", color: "text-[#27ae60]" },
    ],
  },
  {
    iconBg:
      "bg-[linear-gradient(135deg,rgba(250,112,154,1)_0%,rgba(254,225,64,1)_100%)]",
    iconText: "最",
    title: "最終検査チェックリスト",
    description:
      "出荷前の最終品質確認を行うための総合チェックリスト（作成中）。",
    stats: { items: "20", usage: "0", time: "45分" },
    tags: ["最終検査", "出荷前", "総合チェック"],
    updateDate: "2024/03/10",
    status: "下書き",
    statusBg: "bg-[#e0e6ed]",
    statusColor: "text-[#f39c12]",
    actions: [
      { label: "編集", bg: "bg-[#e3f2fd]", color: "text-[#2196f3]" },
      {
        label: "実行",
        bg: "bg-[#d4edda]",
        color: "text-[#27ae60]",
        opacity: "opacity-50",
      },
    ],
  },
  {
    iconBg:
      "bg-[linear-gradient(135deg,rgba(168,237,234,1)_0%,rgba(254,214,227,1)_100%)]",
    iconText: "標",
    title: "ISO9001標準検査テンプレート",
    description:
      "ISO9001に準拠した品質管理のための標準テンプレート。カスタマイズ可能。",
    stats: { items: "25", usage: "42", time: "60分" },
    tags: ["ISO9001", "標準テンプレート"],
    updateDate: "2024/03/01",
    status: "テンプレート",
    statusBg: "bg-[#e8f5e9]",
    statusColor: "text-[#2196f3]",
    actions: [
      { label: "カスタマイズ", bg: "bg-[#e3f2fd]", color: "text-[#2196f3]" },
      { label: "使用", bg: "bg-[#d4edda]", color: "text-[#27ae60]" },
    ],
  },
];

const mainMenuItems = [
  { icon: "🏠", label: "ダッシュボード", active: false },
  { icon: "📋", label: "マスタ管理", active: true },
  { icon: "⚙", label: "工程管理", active: false },
  { icon: "▶", label: "実行", active: false },
];

const reportMenuItems = [
  { icon: "📊", label: "品質分析", active: false },
  { icon: "📄", label: "帳票出力", active: false },
];

export { statsData, tabsData, checklistCards, mainMenuItems, reportMenuItems };