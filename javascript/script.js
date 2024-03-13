jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide a:gt(0)').hide();//gt(index)는 인덱스 값보다 더 큰값을 가진 요소들을 모두 선택함 == 0보다 쿤 1,2,3 번째 요소를 모두 택하여 숨김
    setInterval(function(){
        $('.imgslide a:first-child')//첫번째 선택
        .fadeOut(1000)//실행
        .next('a')//다음 a 선택//2번째
        .fadeIn(1000)//실행
        .end()//이전요소 선택
        .appendTo('.imgslide');//.imgslide를 위에 선택한 a태그의 자식요소로 추가
    },3000);
});