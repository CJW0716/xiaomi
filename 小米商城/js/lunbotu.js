var pics = ['images/轮播图/1.jpg', 'images/轮播图/2.jpg', 'images/轮播图/3.jpg', 'images/轮播图/4.jpg', 'images/轮播图/5.jpg',
	'images/轮播图/1.jpg'
]
// 遍历每一张图片地址
pics.forEach(function(ele, idx) {
	// 创建 轮播图片
	$('<a href="#"></a>')
		.append(
			$('<div>')
			.css({
				'background-image': 'url(' + ele + ')',
			}))
		.appendTo($('#items'))
})

// 创建白点
for (var i = 0; i < pics.length - 1; i++) {
	// 声明变量接收创建的标签
	var $li = $('<li>')
		.attr('index', i)
		.appendTo($('#points'))
		.on('click', function() {
			// 获取点击li的索引值
			var idx = $(this).attr('index')
			console.log(idx)
			// 删除上一次点击样式
			$('.active').removeClass('active')
			// 添加当前点击的li的激活状态
			$(this).addClass('active')
			// 切换到指定位置
			goToPage(idx)
		})
	// 判断是否是第一个,如果是,就添加active
	if (i == 0) {
		$li.attr('class', 'active')
	}
}

function goToPage(page) {
	// 根据idx计算偏移量
	$('#items').css({
		'transform': 'translateX(-' + page * 1190 + 'px)'
	})
}

$('.change').click(function() {
	clearInterval(t)
	// 获取当前是第几张
	var currentPage = $('.active').attr('index')
	if ($(this).attr('id') == 'left') {
		// 判断是否到达边界值
		if (currentPage == 0) {
			return
		}
		$('.active').removeClass('active')
		// 切换到currentPage - 1位置
		// eq 指定第几个li
		$('#points>li').eq(currentPage - 1).addClass('active')

		goToPage(currentPage - 1)
	} else {
		// 判断是否到达边界值
		if (currentPage == pics.length - 1) {

			return
		}
		next()
	}
})

function next() {
	// 添加过渡动画
	$('#items').css("transition", "all 0.5s")
	// 获取索引
	var currentPage = $('.active').attr('index')
	// 修改点的状态
	$('.active').removeClass('active')
	var next = parseInt(currentPage) + 1
	$('#points>li').eq(next).addClass('active')

	goToPage(next)

	if (currentPage == pics.length - 2) {
		// 瞬间拉回第一张 
		$('.active').removeClass('active')
		$('#points>li').eq(0).addClass('active')
		setTimeout(function() {
			// 取消过渡动画
			$('#items').css("transition", "none")
			goToPage(0)
		}, 500)

	}
}
// 定时滚动
var t = setInterval(next, 3000)
