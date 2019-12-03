$(function(){ 
    // 토글
    $('#tgl_btn').on('click',function(){
        $('#header_menu').css({right:0,opacity:1});
    })
    $('#close').on('click',function(){
        $('#header_menu').css({right:'-50%',opacity:0});
    })

    $(window).resize(function(){
        if($(window).width()>=960){
            $('#header_menu').css({opacity:1});
        }else{

        }
    })
    // ==쿠폰모달
  $('.container_07').hide();
  $('#coupon_open').on('click',function(){
      $('#wrap').css('opacity','0.5');
      $('.container_07').show();
  });
  $('#cou_x').on('click',function(){
      $('#wrap').css('opacity','1');
      $('.container_07').hide();
  })
});