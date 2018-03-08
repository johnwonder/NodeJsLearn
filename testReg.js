var reg = /redirect_uri=(\S+?)&/;


var url ="https://open.mp.qq.com/connect/oauth2/authorize?appid=${qq_appid}&redirect_uri=${realUrl}&response_type=code&scope=snsapi_base&state=_qq&_wv=1"
var matchResult = url.replace(reg,'redirect_uri=$1?'+'pid=${productId}&');


console.log(matchResult);


var lentest = "http://wx.qlogo.cn/mmopen/1HAl5GC9kwVHpSTBVYiaiaksyEFTAxFfqJueAiceNq9JaqDIfmQjJRIQpdl1gXFmOcicvuSrob0ibKEVjjqbXmZ47xDcEpqlr5Omq/0";

console.log(lentest.length);

