$(function(){            
    // 향수 선택 모달
        $('div.container01').hide();
        $('#modal_btn01').on('click',function(){
            $('div.container01').show();
            fnClose();
            fnEffect();
            return false;
        })
        $('.modal_close_btn').on('click',function(){
            $('.container01').hide();
            return false;
        });    
        $('.container02').hide();
            $('#modal_btn02').on('click',function(){
            $('.container02').show();
            fnClose();
            fnEffect();
            return false;
        });
        $('.modal_close_btn').on('click',function(){
            $('.container02').hide();
            return false;
        });
        $('.container03').hide();
            $('#modal_btn03').on('click',function(){
            $('.container03').show();
            fnClose();
            fnEffect();
            return false;
        });
        $('.modal_close_btn').on('click',function(){
            $('.container03').hide();
            return false;
        });
        $('.container04').hide();
            $('#modal_btn04').on('click',function(){
            $('.container04').show();
            fnClose();
            fnEffect();
            return false;
        });
        $('.modal_close_btn').on('click',function(){
            $('.container04').hide();
            return false;
        });
        $('.container05').hide();
            $('#modal_btn05').on('click',function(){
            $('.container05').show();
            fnClose();
            fnEffect();
            return false;
        });
        $('.modal_close_btn').on('click',function(){
            $('.container05').hide();
            return false;
        });
        $('.container06').hide();
            $('#modal_btn06').on('click',function(){
            $('.container06').show();
            fnClose();
            fnEffect();
            return false;
        });
        $('.modal_close_btn').on('click',function(){
            $('.container06').hide();
            return false;
        });
    })
