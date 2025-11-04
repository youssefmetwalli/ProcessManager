const statsCards = [
  {
    icon: "📊",
    value: "156",
    label: "今月の検査実施数",
    trend: "↑ 12%",
    trendBg: "bg-panache",
    trendColor: "text-chateau-green",
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#2196f3]",
    footer: "先月比",
    footerValue: "+17件",
  },
  {
    icon: "✅",
    value: "94.8%",
    label: "合格率",
    trend: "↑ 3%",
    trendBg: "bg-panache",
    trendColor: "text-chateau-green",
    iconBg: "bg-panache",
    iconColor: "text-chateau-green",
    footer: "目標: 95%",
    footerValue: "あと0.2%",
  },
  {
    icon: "🔄",
    value: "15",
    label: "実行中の工程",
    trend: "↓ 5%",
    trendBg: "bg-lavender-blush",
    trendColor: "text-pomegranate",
    iconBg: "bg-sazerac",
    iconColor: "text-california",
    footer: "本日完了予定",
    footerValue: "8件",
  },
  {
    icon: "!",
    value: "8",
    label: "要対応項目",
    trend: "↓ 2件",
    trendBg: "bg-lavender-blush",
    trendColor: "text-pomegranate",
    iconBg: "bg-lavender-blush",
    iconColor: "text-pomegranate",
    footer: "緊急",
    footerValue: "3件",
  },
];

const quickActions = [
  {
    icon: "➕",
    title: "新規検査開始",
    description: "工程を選択して開始",
  },
  {
    icon: "📝",
    title: "チェックリスト作成",
    description: "新しいリストを作成",
  },
  {
    icon: "📊",
    title: "レポート生成",
    description: "品質レポートを出力",
  },
  {
    icon: "👥",
    title: "チーム管理",
    description: "メンバーを管理",
  },
];

const chartData = [
  { day: "月", height: "h-[156px]" },
  { day: "火", height: "h-[195px]" },
  { day: "水", height: "h-[221px]" },
  { day: "木", height: "h-[182px]" },
  { day: "金", height: "h-[234px]" },
  { day: "土", height: "h-[104px]", opacity: "opacity-50" },
  { day: "日", height: "h-[52px]", opacity: "opacity-50" },
];

const qualityData = [
  { label: "良好", count: "148件 (94.8%)", color: "bg-[#27ae60]" },
  { label: "要注意", count: "6件 (3.8%)", color: "bg-[#f39c12]" },
  { label: "不良", count: "2件 (1.3%)", color: "bg-[#e74c3c]" },
];

const recentActivities = [
  {
    process: "製品D 品質検査",
    product: "D2024-012",
    assignee: "渡辺",
    assigneeInitial: "渡",
    status: "実行中",
    statusBg: "bg-sazerac",
    statusColor: "text-california",
    date: "2024/03/15 14:30",
  },
  {
    process: "製品C 最終検査",
    product: "C2024-008",
    assignee: "高橋",
    assigneeInitial: "高",
    status: "完了",
    statusBg: "bg-panache",
    statusColor: "text-chateau-green",
    date: "2024/03/15 11:20",
  },
  {
    process: "製品A サンプル検査",
    product: "A2024-001",
    assignee: "中村",
    assigneeInitial: "中",
    status: "準備完了",
    statusBg: "bg-[#e8f5e9]",
    statusColor: "text-[#2196f3]",
    date: "2024/03/15 09:15",
  },
  {
    process: "製品B 定期検査",
    product: "B2024-015",
    assignee: "佐藤",
    assigneeInitial: "佐",
    status: "完了",
    statusBg: "bg-panache",
    statusColor: "text-chateau-green",
    date: "2024/03/14 16:45",
  },
];

export { statsCards, quickActions, chartData, qualityData, recentActivities };