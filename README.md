# canvas-game-aide

> An canvas-game library of javaScript. 
> 一个基于canvas的轻量级游戏引擎，你可以用它快速开发你的h5游戏。
>
> 自带游戏配套系统。不需要额外依赖
> 

### update
后续会持续将最新版本发布

### API
    api:https://www.snowhe.com
#### Readme

```javascript
1. import MYAIDE from 'myaide'
2. <canvas id="canvas_game" width="1024" height="768" style="z-index:100;"></canvas>
3. 创建渲染器
//创建一个渲染底色为#CDCDCD,渲染区域的width为500，height为500的渲染器
var canvasItem = document.getElementById("canvas_game");
var myRenderer = new MONKEY.Renderer({canvas:canvasItem,color:"#CDCDCD",width:500,height:500});
//启动渲染器
myRenderer.begin();
4. //创建一个背景为bg.png的游戏场景
var myScene = new MONKEY.Scene({background:"bg.png",});
//将场景置入渲染渲染器
myRenderer.add(myScene);
5.//创建一个形象为monster.png的基本模型
var monster = new MONKEY.Animal({background:"bg.png",x:10,y:10});
//将模型放入场景世界
myScene.add(monster)
6.还有其他动画，绘图，文本各种类型请到官网查阅

```
