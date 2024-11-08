# ziwu0742_9103_IndividualFinalProject

## Inspirations
![631ba6fba408801430e4b61c_Screen Shot 2022-09-09 at 21 49 18](https://github.com/user-attachments/assets/be5200e4-e40c-4d3a-8e2b-f8081c3017d5) 
Manfred Mohr, P3010_5, 2020-21. Courtesy of bitforms gallery
![p511d](https://github.com/user-attachments/assets/8128fe6f-0c45-4c2a-99ed-e6a2f758f31a)
Manfred Mohr, P-511/D
![Concetto Spaziale](https://github.com/user-attachments/assets/22718d74-fc3c-4117-af67-f620b4063975)
Lucio Fontana,Concetto spaziale, Attese, 1967

## Instruction 
Run the code, the artwork changes gradually over time. 

## Individual Work Overview
For this individual work, I chose to apply the coding skills I acquired in this course to make certain elements of the artwork interactive. I chose timed events to drive my individual code. 

The overall concept I want to create is a sense of visual subtraction. Objects gradually disappear, emphasizing a sense of mental emptiness. The disappearance starts with the negative space, followed by the shapes on the top layer, and ultimately leaving only the lines behind. 

My technique differs from my teammates' because I didn't use `noise()` to create movement, nor did I use additional `class()` to generate additional lines.

### Middle Layer

I used `setTimeout()` to make the rectangle in the middle layer gradually disappear 2.5 seconds after the page opens, emphasizing the concept of negative space in the original artwork. 

### Top Layer

Using `setInterval()` to achieve random color changes in the top layer, and applying `lerp()` to create vertical movement for the triangle and one of the quadrilaterals. The trigger is set to automated, and the shape's size updates every 60 frames. 

The alpha of the top layer shapes will gradually dim until they are completely invisible. 

### Base Layer 
For the lines at the base, I added a `movementOffset` parameter along with `sin()` and `cos()` oscillation effects to keep the visuals dynamic.

use `lerp()` to make the number of lines increase with smooth easing effects, use `setTimeout()` to make it happen at last. 

## Reference

Technique from tutorial 9 of IDEA 9103 ![easing-illustration-intro](https://github.com/user-attachments/assets/61ed5157-1ef3-4ccc-bba6-e3737b1c7d83) 

sin. (n.d.). https://p5js.org/reference/p5/sin/

Window: setTimeout() method - Web APIs | MDN. (2024, October 16). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout 
