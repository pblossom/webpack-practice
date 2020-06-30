var Header = require("./header.js");
var Sidebar = require("./sidebar.js");
var Content = require("./content.js");

import "./font.scss";

new Header();
new Sidebar();
new Content();

var root = document.getElementById("root");

var font = document.createElement("div");
font.innerHTML = "<div class='iconfont iconlanqiu'>font</div>";
root.append(font);
