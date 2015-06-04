iconbox
===================================
#Introduction
This is a jquery plugin to simulate the folder effect of the mobile desk.<br/>
The icon box contains some certain icons of \<a> tag.<br/>
By click or tap the box, an overlay pops up to display the full details in the box, you can click or tap on the links for redirecting.<br/> 
###BEFORE >>>>>>>>>>>>>>>>>>AFTER
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
#Options
