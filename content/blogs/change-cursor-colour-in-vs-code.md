---
title: Change Cursor Colour in VS code 🤯
published_at: 2020/09/17
slug: change-cursor-colour-in-vs-code
external: true
external_url: https://dev.to/pushpak1300/change-cursor-colour-in-vs-code-2jed
---

I’ve been using VSCode for almost 2 years now and I like it so much. I’m sure that you like it too. But I decided that it was time to customize it a bit more. I will show you how to change cursor colour in VScode.

VSCode is an electron application. So you can change the CSS and JS way you want in VSCode for that you need one extension called "[Custom CSS and JS Loader]('https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css')".
:br

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ikya57hnjzudupvfl7bu.png)

After installing the extension follow these steps to change the colour of the cursor.

1. Add this settings into settings.json.

```json
"editor.cursorWidth": 3,
"vscode_custom_css.imports":[""],
"vscode_custom_css.policy": true,
```

2\)Create one CSS file into your machine and add the following property to that CSS file.

Feel free to choose any gradient colour you want from [uiGraients](https://uigradients.com/#JShine) and paste into the '.monaco-editor .cursors-layer .cursor ' selector.

```css
.monaco-editor .cursors-layer .cursor {
  background: #12c2e9; 
  background: -webkit-linear-gradient(
    to top,
    #f64f59,
    #c471ed,
    #12c2e9
  ); 
  background: linear-gradient(
    to top,
    #f64f59,
    #c471ed,
    #12c2e9
  ); 
}
```

3\)Change the file location for 'vscode\_custom\_css.imports' in the settings.json

```json
  "editor.cursorWidth": 3,
  "vscode_custom_css.imports": ["file:///home/pushpak1300/Documents/vscode.css"],
  "vscode_custom_css.policy": true,
```

4\)Type 'CMD +SHIFT +P' to toggle command palette and type 'Reload Custom CSS and JS' to apply settings.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/imhzwm7e55vanzocpml3.png)

5\)Hooray!

If all goes well, you should have the gradient cursor in vs code.

If u have any questions please let me know in comments.

![image](https://media.giphy.com/media/1MTLxzwvOnvmE/giphy.gif)

\###Honourable Mentions
Don't forget to check out this course if you want more cool feature.

{% link <https://dev.to/sarthaksavvy/vscode-4-5-hours-course-for-javascript-python-php-1ik4> %}

Thank You!
