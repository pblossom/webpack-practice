var Header = require("./header.js");
var Sidebar = require("./sidebar.js");
var Content = require("./content.js");
import Avatar from "./avatar";

//import "./index.scss"; //在这里引入的样式作用在全局,容易出现样式冲突，需要用模块化的css

new Header();
new Sidebar();
new Content();
Avatar();
