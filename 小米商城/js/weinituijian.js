var wntj = [{
		"src": "images/为你推荐/6.jpg",
		"span": "米家iHealth血压仪",
		"p": "399元",
		"a": "1.4万人评价"
	},
	{
		"src": "images/为你推荐/6.jpg",
		"span": "米家iHealth血压仪",
		"p": "399元",
		"a": "1.4万人评价"
	},
	{
		"src": "images/为你推荐/6.jpg",
		"span": "米家iHealth血压仪",
		"p": "399元",
		"a": "1.4万人评价"
	},
	{
		"src": "images/为你推荐/6.jpg",
		"span": "米家iHealth血压仪",
		"p": "399元",
		"a": "1.4万人评价"
	},
	{
		"src": "images/为你推荐/6.jpg",
		"span": "米家iHealth血压仪",
		"p": "399元",
		"a": "1.4万人评价"
	},
	{
		"src": "images/为你推荐/7.jpg",
		"span": "AMAZFIT 智能运动手表2",
		"p": "999元",
		"a": "4757人评价"
	},
	{
		"src": "images/为你推荐/7.jpg",
		"span": "AMAZFIT 智能运动手表2",
		"p": "999元",
		"a": "4757人评价"
	},
	{
		"src": "images/为你推荐/7.jpg",
		"span": "AMAZFIT 智能运动手表2",
		"p": "999元",
		"a": "4757人评价"
	},
	{
		"src": "images/为你推荐/7.jpg",
		"span": "AMAZFIT 智能运动手表2",
		"p": "999元",
		"a": "4757人评价"
	},
	{
		"src": "images/为你推荐/7.jpg",
		"span": "AMAZFIT 智能运动手表2",
		"p": "999元",
		"a": "4757人评价"

	},
	{
		"src": "images/为你推荐/8.jpg",
		"span": "小米路由器HD",
		"p": "1299元",
		"a": "763人评价"
	},
	{
		"src": "images/为你推荐/8.jpg",
		"span": "小米路由器HD",
		"p": "1299元",
		"a": "763人评价"
	},
	{
		"src": "images/为你推荐/8.jpg",
		"span": "小米路由器HD",
		"p": "1299元",
		"a": "763人评价"
	},
	{
		"src": "images/为你推荐/8.jpg",
		"span": "小米路由器HD",
		"p": "1299元",
		"a": "763人评价"
	},
	{
		"src": "images/为你推荐/8.jpg",
		"span": "小米路由器HD",
		"p": "1299元",
		"a": "763人评价"

	},
	{
		"src": "images/为你推荐/9.jpg",
		"span": "米兔定位电话",
		"p": "1599元",
		"a": "1.6万人评价"
	},
	{
		"src": "images/为你推荐/9.jpg",
		"span": "米兔定位电话",
		"p": "1599元",
		"a": "1.6万人评价"
	},
	{
		"src": "images/为你推荐/9.jpg",
		"span": "米兔定位电话",
		"p": "1599元",
		"a": "1.6万人评价"
	},
	{
		"src": "images/为你推荐/9.jpg",
		"span": "米兔定位电话",
		"p": "1599元",
		"a": "1.6万人评价"
	},
	{
		"src": "images/为你推荐/9.jpg",
		"span": "米兔定位电话",
		"p": "1599元",
		"a": "1.6万人评价"

	}
]
//  遍历数据并在ul里创建数据
wntj.forEach(function(ele, idx) {
	// console.log(ele)

	$('<li>')
		.append(`<img src=${ele.src}>`)
		.append(`<span>${ele.span}</span>`)
		.append(`<p>${ele.p}</p>`)
		.append(`<a>${ele.a}</a>`)
		.appendTo($ `#loveyou`)
})

var lv = 0
$('.changesl').on('click', function() {
	if (lv == 0) {
		return
	}
	lv -= 1
	$('#loveyou').css({
		'transform': 'translateX(-' + lv * 1270 + 'px)'
	})

})
$('.changesr').on('click', function() {
	if (lv == 3) {
		return
	}
	lv += 1
	$('#loveyou').css({
		'transform': 'translateX(-' + lv * 1270 + 'px)'
	})
})
// console.log('.........')
