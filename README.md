# lb-framework

lb framework is a free CSS framework compatible with Wordpress. 

## How it work :

### 1. Elements classes names (one HTML level)



It's a list of class to set some basics CSS rules, like margins, alignements, shadows...

Exemple :

```
<div class="lb button rounded shadow">Click me !</div>
```

List :

| element | base | settings |
|---------|------|----------|
| Alignement self | ```.lb```| ```.left``` ```.center``` ```.right``` |
| Alignement content | ```.lb```| ```.align-center``` ```.middle``` |
| Button | ```.lb.button``` | ```.disabled``` |
| Font size | ```.lb.font```| ```.mini``` ```.tiny``` ```.small``` ```.medium``` ```.large``` ```.big``` ```.huge``` ```.massive``` |
| Full width | ```.lb.full``` | - |
| Header | ```.lb.header``` | ```.mini``` ```.tiny``` ```.small``` ```.medium``` ```.large``` ```.big``` ```.huge``` ```.massive``` |
| Hovering shadow | ```.lb.hovering``` | - |
| Margin | ```.lb.margin```| ```.one``` to ```.nine``` / ```.top``` ```.right``` ```.bottom``` ```.left``` / ```.no-margin``` |
| Padding | ```.lb.padding```| ```.one``` to ```.nine``` / ```.top```, ```.right```, ```.bottom```, ```.left``` / ```.no-padding``` |
| Parallax | ```.lb.parallax``` | ```[data-parallax="x"]``` |
| Ratio | ```.lb.ratio``` | ```.square``` ```.wide``` / ```[data-ratio="x x"]``` |
| Responsive display | ```.lb``` | ```.mobile``` ```.tablet``` ```.computer``` / ```.only``` ```.hide``` |
| Rounded | ```.lb.rounded```| ```.full-rounded```|
| Shadow | ```.lb.shadow```| - |
| Sticky | ```.lb.sticky``` | ```[data-sticky-offset="x"]``` |
| Text shadow | ```.lb.text-shadow```| - |


### 2. Components classes (two or more HTML levels)

It's a list of classes that need a minimum requierment to work.

Exemple :

```
<div class="lb menu">
  <div class="item">item 1</div>
  <div class="item">item 2</div>
</div>
```

List :

| element | requierement | settings 1st level | > | settings 2nd level |
|---------|--------------|--------------------|---|--------------------|
| Grid | ```.lb.grid``` > ```.grid-item``` | ```.column-1``` to ```.column-12``` / ```.square``` ```.no-gutter``` | > | ```.width-1``` to ```.width-12``` / ```.row-1``` to ```.row-12``` | 
| Navbar | ```.lb.menu``` > ```.item```|  - | > | ```.dropdown``` |
| Scrollspy | ```.lb.scrollspy``` > ```a[href^=#]``` | ```[data-scrollspy-offset="x"]``` | > | - |


### 3. The functions

#### The ln_colors function

It's Jquery function prototype to manage colors.

Exemple :

```
<script>
$('head').ln_colors({
  dark:'#333',
});
</script>

<div class="dark">This element have a background dark</div>

<div class="text-dark">This element have his text in dark</div>
```

Behaviors :

| option | generated classes | generated css variable |
|--------|-----------------|--------------------|
|```name:'value'```| ```.name``` ```.hover-name``` ```.text-name``` ```.text-hover-name``` ```.border-name``` ```.border-hover-name``` |  ```var(--name)``` |


#### The breakLine function 

It is a prototype of Jquery function to break lines by replacing any character in html forced return ```<br/>``` .

Exemple :

```
<script>
$('.line').breakLine('$');
</script>

<span class="line">This sentence will cut after $ and continue below.</span>
```

### 4. Instalation

Copy paste this links in the head of your html page : 

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/laurentborg/lb-framework@1.0.5/lb-framework.css" />
<script src="https://cdn.jsdelivr.net/gh/laurentborg/lb-framework@1.0.5/lb-framework.js"></script>
```
