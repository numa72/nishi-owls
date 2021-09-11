# OWLS Homepage
## 1.環境構築
当サイトは Jekyll で構築されています。  
ローカル環境で実行するには Jekyll をインストールしてください。

[Jekyllのチュートリアル](http://jekyllrb-ja.github.io/docs/step-by-step/01-setup/) のステップ1から10全てを実施するのを推奨します。

尚、ステップ1の「インストール」でRubyをインストールする際は最新のver3.0ではなくver2.7をインストールしてください。(3.0だとサイトのビルド時にエラーが発生します。)   
rbenv使用時はnishi-owls/.ruby-versionのver指定が反映されますが、rbenvを使用しない環境では気を付けてください。  
特にデフォルトではrbenvが使用できないWindowsでは要注意です。

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