var client = function () {
        var engine = {
            //呈现引擎
            ie: 0,
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,
            //具体版本号
            ver: null
        };
        var browser = {
            //浏览器
            ie: 0,
            firefox: 0,
            konq: 0,
            opera: 0,
            chrome: 0,
            safari: 0,
            //具体版本号
            ver: null
        };
        var system = {
            win: false,
            mac: false,
            x11: false
        };
        //在此检测呈现引擎、平台设备
        return {
            engine: engine,
            browser: browser,
            system: system
        };
    }();
	
var EventUtil = {
    getEvent: function (event) {
        return event ? event : window.event;
    },
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }
};


function handleMouseWheel(event) {
    event = EventUtil.getEvent(event);
    var delta = EventUtil.getWheelDelta(event);
	var timer;
    var i = 0;
	if (delta == 120) {
		setTimeout("window.scrollBy(0,-600)",30);
		}
	else if (delta == -120) {
		window.scrollBy(0,600);
	}
     //alert(delta);
	//window.scrollBy(0,600);window.scrollTo(0,600);
	//向上滚为120，向下滚为-120;
}


var timer;
var y = 0;
function scrollwindow(){
    window.scroll(0,y);
    y++;
    timer=setTimeout("scrollwindow()",30);
}

EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);