// Supabase 連線設定（Project Settings → API Keys）。
// 這兩個值本來就會公開在網頁裡，安全性靠資料表的 Row Level Security，不是靠藏起來。
// 留空 = 不啟用登入，網頁照舊把進度存在這台裝置。
window.CLOUD_CONFIG = {
  url: 'https://ocuicumrzuhfubptkjot.supabase.co',
  anonKey: 'sb_publishable_s0zHdJd9PRvV0Jl0CmvW7w_N3fuqq8J',  // publishable key（可公開）
};
