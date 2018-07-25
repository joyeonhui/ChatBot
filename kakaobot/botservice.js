/**
 * Created by cheese on 2017. 2. 9..
 */

var imageRamen = "https://i1.wp.com/dilite.co.kr/wp-content/uploads/2018/02/%EB%9D%BC%EB%A9%B4.jpg?fit=800%2C533";
var urlRamen = "https://shinhan-food-buy.glitch.me/ramen.html"

const
  request = require('request'),
  cheerio = require('cheerio'),
  async = require('async'),
  message = require('../kakaobot/message'),
  Bot = {};

//const getApiai = require('../service/getApiai');
//const cache = require('memory-cache');

Bot.choseMenu = (req, content, callback) => {

  switch (content) {
    /* top */
    case "Text":
      callback(null, message.baseType("This is text."));
      break;

    case message.buttons[0]: // 60주년
      callback(null, message.baseTypeWithButtons("메뉴를 선택하세요.", message.buttonsSixtyRestaurant));
      break;
      
    case message.buttons[1]: // 임마누엘
      callback(null, message.baseTypeWithButtons("메뉴를 선택하세요.", message.buttonsImmanuelRestaurant));
      break;

    case "라면":
      callback(null, message.photoType("구매를 원하시면 구매 버턴을 눌러주세요.", imageRamen, "라면", urlRamen));      
      break;
      
    /* Photo */
    case "Sub text":
      callback(null, message.baseTypeWithButtons("This is sub text.", message.buttonsPhoto));
      break;
      
    case "상위 메뉴":
      callback(null, message.baseType("식당을 골라주세요."));
      break;
      
    default:
      callback(null, message.baseType("알 수 없는 명령입니다."));
      /*
      getApiai(content, function (data) {
        callback(null, message.baseTypeText(data));
      });
      */
      break;
  }
};

module.exports = Bot;