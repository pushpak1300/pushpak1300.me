---
title: "Redesigned my portfolio! It loads very fast ⚡"
description: "I will show you how I redesigned my portfolio site using AlpineJs and Bootstrap4."
published_at: 2020/05/16
slug: "deploying-laravel7-app-on-shared-hosting-hostinger"
external: true
external_url: https://dev.to/pushpak1300/redesign-my-portfolio-it-loads-very-fast-nn4
---
Hi, everyone!

#####This is my second attempt for writing a blog.

![Alt text of imag](https://media.giphy.com/media/PvvSfSDFoAL5e/giphy.gif)

So I learned web development around 2 years ago. I decided to build my portfolio using Bootstrap4. my old portfolio used to load in 3.5 seconds and had a performance score of 69. most of the content on the previous portfolio was static means I have to change HTML to change my project listing. so I decided to rebuild (and redesign) my portfolio site using  [AlpineJs](https://github.com/alpinejs/alpine) and [Bootstrap4](https://getbootstrap.com)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/4kjckw26r9zufm7seii2.png)

After 5 days of working non-stop, I've finally migrated my site over to AlpineJs! You may notice the site is a little faster:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vbyary9yx8beypgbq9s9.png)

####Why AlpineJS ?
{% link https://dev.to/nugetchar/starting-with-alpinejs-hjn %}

You are right: why would you bother learning, AGAIN, a new tool while there are so many others, with such huge communities around them?
Well here are a few pros:
* you get to follow the evolution of a library from the beginning, and, why not, contribute,
* while React, Vue is acclaimed by a lot of developers, AlpineJS presents a much lighter way of doing front-end Web, much closer to the basics than today's framework.
* I have a data source as a JSON file so loading data from JSON and parsing in HTML is easy in Alpine. (NO MORE STATIC CONTENT  🎉)

###How I optimize speed
* Eliminating render-blocking resources([ using async and defer]('https://web.dev/render-blocking-resources/?utm_source=lighthouse&utm_medium=unknown'))

```html
<link rel="stylesheet" href="build/all.css" media='all' />

<script src="build/app.js" defer></script>
```
* Used [Purge](https://purgecss.com/) to remove unused css.

* Using CDN to serve static content with good cache policy
I used netifly CDN to serve static content.

* Used webp images for better compression ratio

* Used module bundler(Webpack) to minify and bundle files



Here is the link to my [portfolio](https://pushpak1300.github.io/).

Here is the link to Source Code [github](https://github.com/pushpak1300/pushpak1300.github.io).

I'm also planning to add dark mode on site.🌙 

would love to receive some feedback on my portfolio site🍍

Did I miss anything? Let me know in the comments :)

**Thank You!**
