Parallax for Meteor
===============
Based on [ParallaxJS](https://github.com/wagerfield/parallax) by Wagerfield.
---

Create 3D parallax effects using mouse cursor or device orientation. This jQuery plugin allows you to transform a normally flat webpage into an interactive and impressive canvas of seemingly 3D elements. 

Getting Started
==========

 1. Add this package to your project:
       `mrt add parallax`
 2. Add some elements using the example below.
 3. When that template is rendered, initialize parallax!
      `Template.myParallax.rendered = function(){ $("#myParallax").parallax(); };`

Example
========
```
<template name="myParallax">
<ul id="myParallax">
  <li class="layer" data-depth="0.00"><img src="/graphics/layer6.png"></li>
  <li class="layer" data-depth="0.20"><img src="/graphics/layer5.png"></li>
  <li class="layer" data-depth="0.40"><img src="/graphics/layer4.png"></li>
  <li class="layer" data-depth="0.60"><img src="/graphics/layer3.png"></li>
  <li class="layer" data-depth="0.80"><img src="/graphics/layer2.png"></li>
  <li class="layer" data-depth="1.00"><img src="/graphics/layer1.png"></li>
</ul>
</template>
```

```
Template.myParallax.rendered = function(){ 
     var scene = $("#myParallax").parallax(); 
     $scene.parallax('enable');
     //$scene.parallax('disable');
     $scene.parallax('calibrate', false, true);
     $scene.parallax('invert', false, true);
     $scene.parallax('limit', false, 10);
     $scene.parallax('scalar', 2, 8);
     $scene.parallax('friction', 0.2, 0.8);  
};
```

