type Priority = { label: string; color: string; textColor: string };
type ProgressInfo = { label: string; value: number; completed?: boolean };
type Card = {
  priority: Priority;
  title: string;
  lot: string;
  processes: string;
  tags: string[];
  assignees: string[];
  date: string;
  progress?: ProgressInfo;
  urgent?: boolean; 
};


const statsData = [
  { icon: "📝", value: "42", label: "総工程シート" },
  { icon: "📅", value: "8", label: "計画中" },
  { icon: "✅", value: "12", label: "準備完了" },
  { icon: "🔄", value: "15", label: "実行中" },
  { icon: "√", value: "7", label: "完了" },
] as const;

const kanbanColumns = [
  {
    id: "planning",
    title: "計画中",
    color: "bg-[#95a5a6]",
    count: 3,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品A 初期ロット検査",
        lot: "📦 ロット: A2024-001",
        processes: "📋 5工程",
        tags: ["新製品", "初期ロット"],
        assignees: ["田", "鈴"],
        date: "📅 3/20開始予定",
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製造機械 定期検査",
        lot: "📦 ロット: B2024-015",
        processes: "📋 3工程",
        tags: ["定期検査"],
        assignees: ["佐"],
        date: "📅 3/22開始予定",
      },
    ],
  },
  {
    id: "ready",
    title: "準備完了",
    color: "bg-[#3498db]",
    count: 4,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品C 最終検査",
        lot: "📦 ロット: C2024-008",
        processes: "📋 8工程",
        progress: { label: "チェックリスト準備", value: 100 },
        tags: ["最終検査", "出荷前"],
        assignees: ["高", "山", "+2"],
        date: "📅 今日開始",
      },
      {
        priority: {
          label: "低優先",
          color: "bg-[#d1ecf1]",
          textColor: "text-eastern-blue",
        },
        title: "製品A サンプル検査",
        lot: "📦 サンプル: 10個",
        processes: "📋 4工程",
        tags: ["サンプル"],
        assignees: ["中"],
        date: "📅 明日開始",
      },
    ],
  },
  {
    id: "inProgress",
    title: "実行中",
    color: "bg-[#f39c12]",
    count: 5,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品D 品質検査",
        lot: "📦 ロット: D2024-012",
        processes: "📋 6工程",
        progress: { label: "進捗状況", value: 65 },
        tags: ["品質検査", "急ぎ"],
        assignees: ["渡", "伊"],
        date: "! 期限: 今日",
        urgent: true,
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製品E 中間検査",
        lot: "📦 ロット: E2024-005",
        processes: "📋 4工程",
        progress: { label: "進捗状況", value: 30 },
        tags: ["中間検査"],
        assignees: ["木"],
        date: "📅 3/18まで",
      },
    ],
  },
  {
    id: "completed",
    title: "完了",
    color: "bg-[#27ae60]",
    count: 7,
    cards: [
      {
        priority: {
          label: "高優先",
          color: "bg-[#ffeeee]",
          textColor: "text-[#e74c3c]",
        },
        title: "製品F 出荷前検査",
        lot: "📦 ロット: F2024-003",
        processes: "📋 10工程",
        progress: { label: "完了", value: 100, completed: true },
        tags: ["出荷済み", "合格"],
        assignees: ["斉", "加"],
        date: "✅ 3/14完了",
      },
      {
        priority: {
          label: "中優先",
          color: "bg-[#e0e6ed]",
          textColor: "text-[#f39c12]",
        },
        title: "製品G 定期検査",
        lot: "📦 ロット: G2024-009",
        processes: "📋 5工程",
        progress: { label: "完了", value: 100, completed: true },
        tags: ["定期検査", "合格"],
        assignees: ["林"],
        date: "✅ 3/13完了",
      },
    ],
  },
];

const mainMenuItems = [
  { id: "dashboard", label: "🏠 ダッシュボード", active: false },
  { id: "master", label: "📋 マスタ管理", active: false },
  { id: "process", label: "⚙ 工程管理", active: true },
  { id: "execute", label: "▶ 実行", active: false },
];
const reportMenuItems = [
  { id: "quality", label: "📊 品質分析", active: false },
  { id: "report", label: "📄 帳票出力", active: false },
];

export { statsData, kanbanColumns, mainMenuItems, reportMenuItems };