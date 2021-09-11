# OWLS Homepage
## 1.環境構築
当サイトはjekyllで構築されています。  
ローカル環境で実行するにはjekyllをインストールしてください。

jekyllのチュートリアルは[こちら](http://jekyllrb-ja.github.io/docs/step-by-step/01-setup/)になります。  
サイト運営のためにチュートリアルのステップ1から10全てを実施するのを推奨します。

尚、ステップ1の「インストール」では、説明に登場するソフト以外に下記ソフトのインストールが必要です。  
(下記ソフトの内、Windows環境でない場合はwdmは不要です。)

```
gem install jekyll-watch webrick wdm
```

インストール後、下記の依存関係をチュートリアルで作成したGemfileに追記してください。  
(インストールしていない場合は、wdmは追記不要です。)

```
gem "jekyll-watch"
gem "webrick"
gem "wdm"
```

## 2.ローカル環境でサイトを実行する
To run locally:

```
(rbenv exec) bundle exec jekyll serve
```

`--drafts` option to show posts in `_drafts` directory.

# Note of external resources

* Facebook logo (assets/images/facebook.png)
  - From https://ja.facebookbrand.com/facebookapp/
* Twitter logo (assets/images/twitter.png)
  - From https://about.twitter.com/en/who-we-are/brand-toolkit
* Instagram logo (assets/images/instagram.png)
  - From https://en.facebookbrand.com/instagram/assets/instagram?audience=instagram-landing

* Tocca.js libraryr for detecting swipe
  - From https://github.com/GianlucaGuarini/Tocca.js