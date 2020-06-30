var Header = require("./header.js");
var Sidebar = require("./sidebar.js");
var Content = require("./content.js");

import avatar from "./avatar.jpg";
import createAvatar from "./avatar";

// import "./avatar"; //在这里引入的样式作用在全局,容易出现样式冲突
import style from "./index.scss"; //使用模块化的css，配合css-loader的option：{modules:true}

new Header();
new Sidebar();
new Content();
createAvatar();

var root = document.getElementById("root");
var img = new Image();
img.classList.add(style.avatar); //模块引入的使用方法
//img.classList.add("avatar"); //全局引入的使用方法
img.src = avatar;
root.append(img);

var font = document.createElement("div");
font.innerHTML = "<div clsss='iconfont iconlanqiu'>font test</div>";
root.append(font);
