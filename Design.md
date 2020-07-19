# 要件

## ログイン前後共通
* プラグイン一覧画面が閲覧できる
* プラグイン個別画面が閲覧できる
* 無料プラグインがインストールできる

## ログイン前
* Googleアカウントでログインできる
* Googleアカウントで新規登録できる

## ログイン後
* ログアウトできる
* マイページに遷移できる
* 名ページにてクレジットカードが登録できる
* 有料プラグインがインストールできる
 * クレジットカードが登録されていない場合、クレジットカード登録画面に繊維する

## いらないのでは？
* シリアルナンバーが登録されていない場合、シリアルナンバーの登録画面に進む
* マイページにてシリアルナンバーを登録できる
* マイページにてシリアルナンバーを削除できる

# 用語
* ユーザー user
* プラグイン plugin
* マイページ MyPage

# データモデル

* ユーザー
 * 表示名
 * クレジットカード
* 無料プラグイン
 * プラグイン名
 * apk
 * 説明
 * image
* 有料プラグイン
 * プラグイン名
 * apk
 * 説明
 * image
 * 価格
 * 購入済み or not

# WebページのURL
| パス                 | メソッド | 内容                        |
|--------------------|------|---------------------------|
| /                  | GET  | トップページ、プラグインの一覧、ログイン、新規登録 |
| /plugins/:pluginId | GET  | プラグイン個別ページ                |
| /siginin           | GET  | ログインページ                   |
| /register          | GET  | 新規登録ページ                   |
| /mypage            | GET  | マイページ                     |
