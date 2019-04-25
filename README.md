# lb-framework

lb framework is a free CSS framework compatible with Wordpress. 

## How it work :

1. Elements classes names (one HTML level)



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
| Button | ```.lb.button``` | - |
| Font size | ```.lb.font```| ```.mini``` ```.tiny``` ```.small``` ```.medium``` ```.large``` ```.big``` ```.huge``` ```.massive``` |
| Full width | ```.lb.full``` | - |
| Header | ```.lb.header```| ```.mini``` ```.tiny``` ```.small``` ```.medium``` ```.large``` ```.big``` ```.huge``` ```.massive``` |
| Margin | ```.lb.margin```| ```.one``` to ```.nine``` / ```.top``` ```.right``` ```.bottom``` ```.left``` / ```.no-margin``` |
| Padding | ```.lb.padding```| ```.one``` to ```.nine``` / ```.top```, ```.right```, ```.bottom```, ```.left``` / ```.no-padding```|
| Responsive display | ```.lb``` | ```.mobile``` ```.tablet``` ```.computer``` / ```.only``` ```.hide``` |
| Rounded | ```.lb.rounded```| ```.full-rounded```|
| Shadow | ```.lb.shadow```| - |
| Text shadow | ```.lb.text-shadow```| - |


2. Components classes (two or more HTML levels)

It's a list of classes that need a minimum requierment to work.

Exemple :

```
<div class="lb menu">
  <div class="item">item 1</div>
  <div class="item">item 2</div>
</div>
```

List :

| element | requierement | settings |
|---------|--------------|----------|
| Grid | ```.lb.grid``` > ```.grid-item``` | ```.column-1``` to ```.column-12``` / ```.square``` ```.no-gutter```  
```.width-1```to ```.width-2``` / ```.row-1``` to ```.row-12``` |
| Navebar | ```.lb.navebar``` > ```.item```| ```.dropdown``` |
