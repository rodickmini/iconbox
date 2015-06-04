#Introduction
This is a jquery plugin to simulate the folder effect of the mobile desk.<br/>
The icon box contains some certain icons of \<a> tag.<br/>
By click or tap the box, an overlay pops up to display the full details in the box, you can click or tap on the links for redirecting.<br/> 
###BEFORE　　　　　　　　　　AFTER
![](https://github.com/rodickmini/iconbox/raw/master/examples/image/before.jpg)
![](https://github.com/rodickmini/iconbox/raw/master/examples/image/after.jpg)
#Usage
As you can see in the example files, you will need to include:<br/>
* jQuery library. (1.6.0 minimum)
* The JavaScript file jquery.iconbox.js (or its minified version jquery.iconbox.min.js)
###Including files:
```html
<script src="../jquery-2.1.1.min.js"></script>
<script src="../jquery-iconbox.min.js"></script>
```
###Required HTML structure:
The box should be defined by an \<a> tag with a class or id attribute specified. And it should be with the style of `display: none;` to avoid none-style-splash. The folder name should be specified in the attribute `data-folder-name`.<br/>
In between the \<a> tag, put a list of \<img> tag with `src`, `data-href`(the href where to jump) and `data-caption`(the name of the entry) attributes.
```html
<a class="test" data-folder-name="FolderName" style="display: none;">
    <img src="image/1.png" alt="" data-href="href1" data-caption="1"/>
    <img src="image/2.png" alt="" data-href="href2" data-caption="2"/>
    <img src="image/3.png" alt="" data-href="href3" data-caption="3"/>
    <img src="image/4.png" alt="" data-href="href4" data-caption="4"/>
    <img src="image/5.png" alt="" data-href="href5" data-caption="5"/>
</a>
```
###Initialization
All you need to do is call the plugin inside a `$(document).ready` function:
```javascript
$(document).ready(function() {
        $('.test').iconbox();
    });
```
A more complex initialization with all options set could look like this:
```javascript
$(document).ready(function() {
        $('.test').iconbox({
            asize: "60",                        //box size
            acolumn: "3",                       //box column
            abgcolor: "rgba(0, 0, 0, .1)",      //box bg color
            popbgcolor: "rgba(0, 0, 0, .9)",    //pop bg color
            popheight: "300",                   //pop max height
            popiconsize: "48",                  //pop icon size
            popcolumn: "3",                     //pop column
            popupcontainer: ".popup-container"  //pop container class or id
        });
    });
```
#Options
* `asize`: the \<a> element size(px), in other words, the box size.
* `acolumn`: to define how many columns of the box has.
* `abgcolor`: the background color of the box.
* `popbgcolor`: the background color of the pop up container.
* `popheidht`: the height of the icon list in the pop up container.
* `popiconsize`: the icon size in the pop up container.
* `popcolumn`: to define how many columns of the pop up container has.
* `popupcontainer`: pop container class or id, `class="popup-container"` by default

#Licence
(The MIT License)<br/>
<br/>
Copyright (c) 2015 Rodick Cai <rodickcai@gamil.com><br/>
<br/>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/>
<br/>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/>
<br/>
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br/>
<br/>
