$document.ready(function(){
    $(".nav-taggler").each(function(_,navToggler){
        var target=$(navToggler).data("target");
        $(navToggler).on('click',function(){
            $(target).animate({
                height:"toggle"
            })
        })
    })
})