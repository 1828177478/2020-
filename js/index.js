// 当页面结构加载完成之后
$(function (){
	$('#fullpage').fullpage({
		// 显示右侧黑色的导航点

		navigation: true,
		verticalCentered: false,
		onLeave: function (index, nextIndex, direction) {
			// 滚轮滚动的时候触发的事件(实现方式一：用jquery的方式实现),index:当前页  nextIndex:下一页 direction:up/down
			 if(nextIndex ==2 && direction == 'down') {
				//  文字显示
				 $('.section-2').find('.watchFont').animate({
					marginTop:60,
					 opacity:1
				 },1000,function(){
					//  显示路线图
				
				 })
				 $('.section-2').find('.watchRoute').css('height',90);

			}
			if(nextIndex ==3 && direction == 'down'){
				// 背景图片向左移动
				$('.section-3').animate({
					backgroundPositionX: '-900px'
				},3000);
				// 垃圾桶同时向左移动
				$('.section-3').find('.section3-waste').animate({
					right: '750px'
				},3000,function(){
					// 垃圾桶移动到车旁边是向下移动装车
					$(this).animate({
						bottom:30
					},1000,function(){
						//$('.section3-card).animate()
						//alert(1);
						$('.section-3').animate({
							backgroundPositionX: '-1500px'					
						},3000,function(){
							//alert(2);
							$('.section3-font').animate({opacity:1},1000);
						});
					})
				});
			}
		}
	});
});
