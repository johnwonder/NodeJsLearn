 

 var timezone = "Asia/Shanghai"
var ALL_COLONS = /:/g;
 timezone = timezone.replace(ALL_COLONS, '');
 var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;

 console.log(requestedTimezoneOffset);