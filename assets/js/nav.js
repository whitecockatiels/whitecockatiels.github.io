$(function(){
    let curr = 0, max = ($("section").length-1);
    
    $("section").eq(curr).fadeIn(4000);
    $("#txt0").fadeIn(4000, function(){
        $("#img0").fadeIn(3000);
    });
    
    $(document).on("keydown", function(event){
        if(event.key == "ArrowRight" || event.key == "ArrowDown" || event.key == " "){
            nav("next");
        }
        if(event.key == "ArrowLeft" || event.key == "ArrowUp"){
            nav("previous");
        }
    });

    $(document).on("contextmenu",function(e){
        return false;
    });

    function nav(way){
        if (curr < max && way == "next"){
            $("section").eq(curr).stop().fadeOut(2000,function(){
                curr += 1;
                $("section").eq(curr).stop().fadeIn(2000);
                effects();
            });
        }else if(curr > 0 && way == "previous"){
            $("section").eq(curr).stop().fadeOut(2000,function(){
                curr -= 1;
                $("section").eq(curr).stop().fadeIn(2000);
                effects();
            });
        }
    }

    function effects(){
        if (curr == 0){
            $("#txt0").css("display","none");
            $("#img0").css("display","none");

            $("#txt0").fadeIn(1500, function(){
                $("#img0").fadeIn(2000);
            });
        }else if (curr == 4){
            $("#sub-txt4").hide();
            
            $("#sub-txt4").delay(3000).fadeIn(1500);
        }else if(curr == 5){
            $("p").stop().each(function(){
                $(this).hide();
            });
            
            $("p").eq(0).delay(2000).fadeIn(2000, function(){
                $("p").eq(1).delay(1800).fadeIn(2000, function(){
                    $("p").eq(2).delay(4000).fadeIn(2000, function(){
                        $("p").eq(3).delay(2000).fadeIn(2000, function(){
        /* Hadouken! */     $("p").eq(4).delay(7000).fadeIn(2000);
                        });
                    });
                });
            });
        }else if (curr == 6){
            $("#emojizin").hide();

            $("#emojizin").delay(2500).fadeIn(2000);
        }else if(curr == 7){
            $("#img7-1").hide();
            $("#img7-3").hide();
            $("#txt7-2").hide();

            $("#img7-1").delay(3000).fadeIn(3000);
            $("#img7-3").delay(3000).fadeIn(3000);
            $("#txt7-2").delay(3000).fadeIn(3000);
        }
    }
});
