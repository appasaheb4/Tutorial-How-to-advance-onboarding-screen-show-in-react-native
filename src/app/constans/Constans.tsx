import Config from "react-native-config";

//MESSAGES
var msg = {
  userEmail: Config.APP_EMAIL
};

//Colors
var colors = {
  appColor: Config.COLORS_APP_COLOR
};

const assetsImages = "../../assets/onboarding/";
var images = {
  img1: require(assetsImages + "img1.jpeg"),
  img2: require(assetsImages + "img2.png"),
  img3: require(assetsImages + "img3.jpeg")
};

export { msg, colors, images };
