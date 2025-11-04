
const tabItems = [
  { id: "check-items", label: "チェック項目", active: true },
  { id: "work-checklist", label: "作業チェックリスト", active: false },
  { id: "template", label: "テンプレート", active: false },
];

const tableData = [
  {
    id: 1,
    avatar: {
      text: "外",
      gradient:
        "linear-gradient(135deg,rgba(102,126,234,1) 0%,rgba(118,75,162,1) 100%)",
    },
    title: "外観チェック",
    description: "製品の外観に傷、汚れ、変形がないか確認",
    type: { label: "選択肢", color: "#2196f3", bg: "#e8f5e9" },
    category: "外観検査",
    status: { label: "有効", color: "#27ae60", bg: "#d4edda" },
    usageCount: 156,
    updateDate: "2024/03/15",
  },
  {
    id: 2,
    avatar: {
      text: "寸",
      gradient:
        "linear-gradient(135deg,rgba(240,147,251,1) 0%,rgba(245,87,108,1) 100%)",
    },
    title: "寸法測定",
    description: "製品の各部寸法を測定し記録",
    type: { label: "数値", color: "#f39c12", bg: "#e8f5e9" },
    category: "寸法測定",
    status: { label: "有効", color: "#27ae60", bg: "#d4edda" },
    usageCount: 89,
    updateDate: "2024/03/14",
  },
  {
    id: 3,
    avatar: {
      text: "機",
      gradient:
        "linear-gradient(135deg,rgba(79,172,254,1) 0%,rgba(0,242,254,1) 100%)",
    },
    title: "動作確認",
    description: "製品の基本動作を確認しチェック",
    type: { label: "テキスト", color: "#27ae60", bg: "#e8f5e9" },
    category: "機能テスト",
    status: { label: "有効", color: "#27ae60", bg: "#d4edda" },
    usageCount: 234,
    updateDate: "2024/03/13",
  },
];

const mainMenuItems = [
  { id: "dashboard", label: "🏠 ダッシュボード", active: false },
  { id: "master", label: "📋 マスタ管理", active: true },
  { id: "process", label: "⚙ 工程管理", active: false },
  { id: "execute", label: "▶ 実行", active: false },
];

const reportMenuItems = [
  { id: "quality", label: "📊 品質分析", active: false },
  { id: "report", label: "📄 帳票出力", active: false },
];

export { tabItems, tableData, mainMenuItems, reportMenuItems };