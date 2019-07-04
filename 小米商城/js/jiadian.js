var pictures = [{
	"contents": [{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	},
	{
		"span":"新品",
		"src": "images/jiadian1/5.jpg",
		"a":"米家家电",
		"p":"2999元"
	}
	]
},
{
	"contents": [{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	},
	{
		"span":"享八折",
		"src": "images/jiadian1/7.png",
		"a":"米家空气净化器",
		"p":"3000元"
	}
	]
},
{
	"contents": [{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src":"images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	}
	]
},
{
	"contents": [
		{
		"src": "images/jiadian1/8.jpg",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src":"images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"新品",
		"a":"米家产品",
		"p":"1999元"
	},
	{
		"src": "images/jiadian1/9.png",
		"span":"",
		"a":"米家产品",
		"p":"1999元"
	}
	]
}]

var picturesJa = document.getElementById('jiadian-r')
var lits = document.querySelectorAll('.title-right>ul>li')
// 遍历每一个li标签
lits.forEach(function(ele,i,array){
	ele.onmouseenter = function(event){
		picturesJa.innerHTML = ''
		var data = pictures[i]
		var ul = document.createElement('ul')
		for (var idx in data.contents){
			var li = document.createElement('li')
			var span = document.createElement('span')
			var imgs = document.createElement('img')
			var a = document.createElement('a')
			var p = document.createElement('p')
			
			span.innerText = data.contents[idx].span
			imgs.src=data.contents[idx].src
			a.innerText = data.contents[idx].a
			p.innerText = data.contents[idx].p
			li.appendChild(span)
			li.appendChild(imgs)
			li.appendChild(a)
			li.appendChild(p)
			ul.appendChild(li)
		}
		picturesJa.appendChild(ul)
	}
	
})
