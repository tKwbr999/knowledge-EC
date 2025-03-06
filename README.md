![Image](https://github.com/user-attachments/assets/d2b7c98d-e739-44f9-8e5a-7118c8f12b06)

# コンテンツ販売アプリ

## 概要

このプロジェクトでは、デジタルコンテンツ（記事・電子書籍）を販売する EC サイトを構築します。

コンテンツサービスで有名な、note のように記事の有料・無料での公開ができたり、
Zenn のように本の有料・無料での公開ができる機能を実装します。

## 学習目標

Next.js における、Auth.js を用いた認証機能の実装を学びます。

合わせて、stripe を使用した商品の購入（決済）フローについても、確認してください。

### 推奨技術

このプロジェクトの難易度と趣旨を踏まえて、以下の使用をお勧めします。

- Auth.js v5 による認証(GitHub ソーシャルログイン)
- Stripe によるオンライン決済
- GitHub API によるコンテンツ取得
- Next.js 15 App Router でのプロジェクト構築
- TypeScript による型チェック
- Tailwind CSS を用いたスタイリング
- shadcn/ui によるコンポーネントの導入

---

## 🎯 お題

- 「ユーザーストーリー」を全て満たすアプリを構築してください。
- 必要に応じて、スクリーンショットやデモサイトの URL を参照してください。
- スタイルは、あなた自身で独自にカスタマイズすることが可能です。

### 必須機能

1. **認証機能：**
   - GitHub アカウントでログイン/ログアウト
   - ログイン状態の保持
2. **コンテンツ一覧表示**：
   - トップページに特集コンテンツを大きく表示
   - コンテンツの一覧をグリッドで表示
   - 有料/無料を明示
3. **コンテンツ詳細表示**：
   - コンテンツの詳細ページを実装する
   - 記事の詳細ページの URL は、`domain.com/posts/[slug]`の形式にする
   - 本の各章の詳細ページの URL は、`domain.com/books/[book-slug]/[chapter-slug]`の形式にする
4. **決済機能：**
   - Stripe による有料販売の実装
   - 購入済みのコンテンツ管理

### 追加情報

コンテンツは、GitHub 上での管理をお勧めします。

- その場合、データ取得には、開発者向けの GitHub API を使用できます
- 今回のアプリで使用可能な、コンテンツのダミーデータを使用することも可能です。
- 👀[ダミーデータ用リポジトリ](https://github.com/b13o/dummy-ec-content)

## ユーザーストーリー

- **トップページ：**
  - [ ] ユーザーがサイトにアクセスすると、ナビゲーションバーにログインボタンが表示されている
  - [ ] トップには特集コンテンツが大きく表示されている
  - [ ] 記事・本のコンテンツ一覧が、それぞれ横１列のレイアウトで表示されている
  - [ ] 各コンテンツカードには、タイトル、タグが表示される
  - [ ] 有料コンテンツには、価格が明確に表示される
  - [ ] コンテンツカードをクリックすると、詳細ページに遷移する
- **詳細ページ：**
  - [ ] 無料コンテンツは全文が表示される
  - [ ] 有料コンテンツは購入しないと閲覧することができない
  - [ ] 有料コンテンツには購入ボタンが表示される
  - [ ] 購入済みの場合は全文を閲覧できる
- **認証/決済：**
  - [ ] GitHub アカウントでログインできる
  - [ ] ログイン状態が保持される
  - [ ] Stripe でクレジットカード決済ができる
  - [ ] 購入後すぐにコンテンツを閲覧できる
