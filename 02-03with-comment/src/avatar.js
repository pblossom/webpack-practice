//var avatar = require("./avatar.jpg"); //common js
import avatar from "./avatar.jpg"; //ES Module
import "./index.scss";
console.log(avatar);
//打包后在dist中的图片名称：\dist\e49823921af3dad34a48ed93700b95ac.jpg

function createAvatar() {
  var root = document.getElementById("root");
  var img = new Image();
  img.classList.add("avatar");
  img.src = avatar;
  root.append(img);
}

export default createAvatar;
//使用es module时需要用export default 语法，而不是module.exports=createAvatar
