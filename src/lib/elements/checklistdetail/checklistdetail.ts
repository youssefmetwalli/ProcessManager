const usageStats = [
  { label: "使用回数", value: "156回" },
  { label: "使用中のチェックリスト", value: "8個" },
  { label: "平均入力時間", value: "45秒" },
  { label: "NG発生率", value: "3.2%" },
  { label: "最終使用日", value: "2024/03/15" },
];

const changeHistory = [
  {
    version: "v1.2",
    date: "2024/03/15 14:30",
    user: { initial: "田", name: "田中太郎" },
    changes: ["選択肢「要観察」を「要注意」に変更", "写真撮影機能を有効化"],
  },
  {
    version: "v1.1",
    date: "2024/03/10 11:20",
    user: { initial: "佐", name: "佐藤花子" },
    changes: ["説明文を詳細化", "NG時の対処手順を追加"],
  },
  {
    version: "v1.0",
    date: "2024/03/01 09:00",
    user: { initial: "鈴", name: "鈴木一郎" },
    changes: ["初版作成"],
  },
];

const relatedItems = [
  {
    title: "寸法測定",
    description: "製品の各部寸法を測定し記録",
    tag: "同じカテゴリ",
  },
  {
    title: "塗装状態確認",
    description: "塗装のムラ、剥がれ、気泡を確認",
    tag: "関連項目",
  },
  {
    title: "表面粗さ測定",
    description: "表面の粗さを測定器で計測",
    tag: "次工程",
  },
];

export { usageStats, changeHistory, relatedItems };