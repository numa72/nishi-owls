# OWLS Homepage
## 1.Setup environment
This site is made by jekyll.
To run locally, you have to install jekyll.

Tutorial for jekyll is [here](http://jekyllrb-ja.github.io/docs/step-by-step/01-setup/).
We recommend to do the tutorial from step 1 to 10 for the site management.

At tutorial's step 1 "Install", install following softs in addtion to those in this section.  
(If your local is not Windows, wdm is not needed.)

```
gem install jekyll-watch webrick wdm
```

After installing, add following dependencies to your Gemfile.  
(If wdm is not installed, wdm is not need.)

```
gem "jekyll-watch"
gem "webrick"
gem "wdm"
```

## 2.Run this site locally
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