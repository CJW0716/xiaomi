var pice=[
	{
		"h4":"哈利·波特与被诅咒的孩子",
		"span":"哈利·波特第八个故事中文版震撼来袭!特别彩排版剧本!",
		"a":"29.37元",
		"src":"images/内容/1.png"
	},
	{
		"h4":"好吗好的",
		"span":"畅销作家大冰2016年新书!讲给你听，好吗好的!",
		"a":"17.99元",
		"src":"images/内容/2.png"
	},
	{
		"h4":"小米阅读",
		"span":"海量好书，享受精品阅读时光;漂亮的中文排版,千万读者选择!",
		"a":"前往多看阅读",
		"src":"images/内容/3.jpg"
	
}

]
var pice1= [{

			"h4":"BROWN & FRIENDS定制主题",
			"span":"BROWN & FRIENDS,小米定制主题，为小米米粉节特殊定制。",
			"a":"好看",
			"src":"images/内容/4.png"
		},
		{
			"h4":"电影版《夏目友人帐》主题",
			"span":"快下载《夏目友人帐》主题拥有最温柔的少年和最可爱的猫咪老师！",
			"a":"免费",
			"src":"images/内容/5.png"
		},
		{
			"h4":"《阿丽塔》定制主题",
			"span":"卡梅隆最新力作，战斗天使机械酷炫来袭！",
			"a":"免费",
			"src":"images/内容/6.png"
	
},
{
			"h4":"众多个性主题、百变锁屏与自由桌面",
			"span":"让你的手机与众不同！",
			"a":"免费",
			"src":"images/内容/2.jpg"
	
}
]
var pice2 = [
	{
			"h4":"非人学园",
			"span":"脑洞大开的二次元竞技手游！",
			"a":"29.37元",
			"src":"images/内容/7.png"
		},
		{
			"h4":"小米超神",
			"span":"实力派，一起团！！",
			"a":"29.37元",
			"src":"images/内容/8.png"
		},
		{
			"h4":"米柚手游模拟器",
			"span":"在电脑上玩遍小米所有手游",
			"a":"免费",
			"src":"images/内容/9.png"
		},
		{
			"h4":"免费下载海量的手机游戏",
			"span":"天天都有现金福利赠送",
			"a":"前往小米游戏商店",
			"src":"images/内容/3.jpg"
		}
]
var pice3 = [
	{
			"h4":"2018金米奖",
			"span":"最优秀的应用和游戏",
			"a":"29.37元",
			"src":"images/内容/10.png"
		},
		{
			"h4":"Forest",
			"span":"帮助您专心于生活中每个重要时刻",
			"a":"免费",
			"src":"images/内容/11.png"
		},
		{
			"h4":"小米应用",
			"span":"小米出品 必属精品",
			"a":"免费",
			"src":"images/内容/12.png"
		}
		
]



//  遍历数据并在lunbo-a下创建每条数据
pice.forEach(function(ele,idx){
	// console.log(ele)
	$('<section>')
	.css({'width':'300px !important'})
	.append(`<h4>${ele.h4}</h4>`)
	.append(`<span>${ele.span}</span>`)
	.append($('<p></p>').append(`<a>${ele.a}</a>`))
	.append(`<img src=${ele.src}>`)
	.appendTo($('#lunboa'))
})
// console.log($('.neironglunbo ul'))
// 创建白点
for(var i=0; i<pice.length;i++){
	var $li = $('<li>')
	.attr('index', i)
	.appendTo($('.neironglunbo-1 ul'))
	.on('click', function(){
		// console.log('sddddd')
		var idx = $(this).attr('index')
		$('.active-1').removeClass('active-1')
		$(this).addClass('active-1')
		pgoToPage(idx)
	})
	//  判断是否是第一个，如果是，就添加active1
	if(i == 0){
		$li.attr('class', 'active-1')
	}
}
//  偏移函数 
function pgoToPage(page){
	// console.log('ssss')
	page = parseInt(page)
	// console.log(page*200)
	$('#lunboa').css({
		'transform':'translateX(-' + page*300+'px)'
	})
	// console.log('...........')
}


$('.change1').click(function(){
	// 获取当前是第几张
	var currentPage1 = $('.active-1').attr('index')
	// console.log(currentPage1)
	if($(this).attr('id')== 'left1'){
		// 判断是否到达边界值
		if(currentPage1 == 0){
			return
		}
		$('.active-1').removeClass('active-1')
		// 切换到 currentPage-1 位置
		// eq 指定第几个li
		$('#points1>li').eq(currentPage1 - 1).addClass('active-1')
		pgoToPage(currentPage1 -1)
	}else{
		// 判断是否到达边界值
		if(currentPage1 == pice.length - 1){
			return
		}
		next()
	}
})
function next(){
	$('.items').css('transition', 'all 1s')
	var currentPage1 = $('.active-1').attr('index')
	// 修改点的状态
	$('.active-1').removeClass('active-1')
	var next = parseInt(currentPage1) + 1
	$('#points1>li').eq(next).addClass('active-1')
	pgoToPage(next)
}


//  遍历数据并在lunbo-b下创建每条数据
pice1.forEach(function(ele, idx){
	$('<section>')
	.append(`<h4>${ele.h4}</h4>`)
	.append(`<span>${ele.span}</span>`)
	.append($('<p></p>').append(`<a>${ele.a}</a>`))
	.append(`<img src=${ele.src}>`)
	.appendTo($('#lunbob'))
})
// 创建白点
for(var a=0; a<pice1.length;a++){
	var $li = $('<li>')
	.attr('index', a)
	.appendTo($('.neironglunbo-2 ul'))
	.on('click', function(){
		var idx1 = $(this).attr('index')
		$('.active-2').removeClass('active-2')
		$(this).addClass('active-2')
		sgoToPage(idx1)
	})
	if(a==0){
		$li.attr('class','active-2')
	}
}
// 偏移函数
function sgoToPage(page){
	page = parseInt(page)
	$('#lunbob').css({
		'transform':'translateX(-'+ page*300+'px)'
	})
}

$('.change2').click(function(){
	// 获取当前是第几张
	var currentPage2 = $('.active-2').attr('index')
	// console.log(currentPage2)
	if($(this).attr('id')== 'left2'){
		// 判断是否到达边界值
		if(currentPage2 == 0){
			return
		}
		$('.active-2').removeClass('active-2')
		// 切换到 currentPage2-1 位置
		// eq 指定第几个li
		$('#points2>li').eq(currentPage2 - 1).addClass('active-2')
		sgoToPage(currentPage2 -1)
	}else{
		// 判断是否到达边界值
		if(currentPage2 == pice1.length - 1){
			return
		}
		next2()
	}
})
function next2(){
	
	var currentPage2 = $('.active-2').attr('index')
	// 修改点的状态
	$('.active-2').removeClass('active-2')
	var next2 = parseInt(currentPage2) + 1
	$('#points2>li').eq(next2).addClass('active-2')
	sgoToPage(next2)
}

//  遍历数据并在lunbo-c下创建每条数据
pice2.forEach(function(ele, idx){
	$('<section>')
	.append(`<h4>${ele.h4}</h4>`)
	.append(`<span>${ele.span}</span>`)
	.append($('<p></p>').append(`<a>${ele.a}</a>`))
	.append(`<img src=${ele.src}>`)
	.appendTo($('#lunboc'))
})
// 创建白点
for(var a=0; a<pice1.length;a++){
	var $li = $('<li>')
	.attr('index', a)
	.appendTo($('.neironglunbo-3 ul'))
	.on('click', function(){
		var idx1 = $(this).attr('index')
		$('.active-3').removeClass('active-3')
		$(this).addClass('active-3')
		tgoToPage(idx1)
	})
	if(a==0){
		$li.attr('class','active-3')
	}
}
// 偏移函数
function tgoToPage(page){
	page = parseInt(page)
	$('#lunboc').css({
		'transform':'translateX(-'+ page*300+'px)'
	})
}
$('.change3').click(function(){
	// 获取当前是第几张
	var currentPage3 = $('.active-3').attr('index')
	// console.log(currentPage3)
	if($(this).attr('id')== 'left3'){
		// 判断是否到达边界值
		if(currentPage3 == 0){
			return
		}
		$('.active-3').removeClass('active-3')
		// 切换到 currentPage3-1 位置
		// eq 指定第几个li
		$('#points3>li').eq(currentPage3 - 1).addClass('active-3')
		tgoToPage(currentPage3-1)
	}else{
		// 判断是否到达边界值
		if(currentPage3 == pice2.length - 1){
			return
		}
		next3()
	}
})
function next3(){
	
	var currentPage3 = $('.active-3').attr('index')
	// 修改点的状态
	$('.active-3').removeClass('active-3')
	var next3 = parseInt(currentPage3) + 1
	$('#points3>li').eq(next3).addClass('active-3')
	tgoToPage(next3)
}

//  遍历数据并在lunbo-d下创建每条数据
pice3.forEach(function(ele, idx){
	$('<section>')
	.append(`<h4>${ele.h4}</h4>`)
	.append(`<span>${ele.span}</span>`)
	.append($('<p></p>').append(`<a>${ele.a}</a>`))
	.append(`<img src=${ele.src}>`)
	.appendTo($('#lunbod'))
})
// 创建白点
for(var a=0; a<pice1.length;a++){
	var $li = $('<li>')
	.attr('index', a)
	.appendTo($('.neironglunbo-4 ul'))
	.on('click', function(){
		var idx1 = $(this).attr('index')
		$('.active-4').removeClass('active-4')
		$(this).addClass('active-4')
		fgoToPage(idx1)
	})
	if(a==0){
		$li.attr('class','active-4')
	}
}
// 偏移函数
function fgoToPage(page){
	page = parseInt(page)
	$('#lunbod').css({
		'transform':'translateX(-'+ page*300+'px)'
	})
}
$('.change4').click(function(){
	// 获取当前是第几张
	var currentPage4 = $('.active-4').attr('index')
	// console.log(currentPage3)
	if($(this).attr('id')== 'left4'){
		// 判断是否到达边界值
		if(currentPage4 == 0){
			return
		}
		$('.active-4').removeClass('active-4')
		// 切换到 currentPage4-1 位置
		// eq 指定第几个li
		$('#points4>li').eq(currentPage4 - 1).addClass('active-4')
		fgoToPage(currentPage4-1)
	}else{
		// 判断是否到达边界值
		if(currentPage4 == pice3.length - 1){
			return
		}
		next4()
	}
})
function next4(){
	
	var currentPage4= $('.active-4').attr('index')
	// 修改点的状态
	$('.active-4').removeClass('active-4')
	var next4 = parseInt(currentPage4) + 1
	$('#points4>li').eq(next4).addClass('active-4')
	fgoToPage(next4)
}