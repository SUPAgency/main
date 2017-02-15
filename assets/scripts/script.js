window.onload = function() {
    var FirstPic = document.getElementById('poe');
    var SecPic = document.getElementById('rey-finn');
    var ThirdPic = document.getElementById('kylo-ren');
    var FirstPicSlide = document.getElementById('first-lat');
    var SecPicSlide = document.getElementById('second-lat');
    var ThirdPicSlide = document.getElementById('third-lat');

    function showFirstPic(){
        FirstPicSlide.style.display = "flex";
        SecPicSlide.style.display = "none";
        ThirdPicSlide.style.display = "none";
    }

    function showSecPic(){
        FirstPicSlide.style.display = "none";
        SecPicSlide.style.display = "flex";
        ThirdPicSlide.style.display = "none";
    }

    function showThirdPic(){
        FirstPicSlide.style.display = "none";
        SecPicSlide.style.display = "none";
        ThirdPicSlide.style.display = "flex";
    }

    FirstPic.onclick=function(){
        showFirstPic();
    }

    SecPic.onclick=function(){
        showSecPic();
    }

    ThirdPic.onclick=function(){
        showThirdPic();
    }
    $(document).ready(function() {
        $('.circle, #img1, #img2, #img3, #discover-button ').on('click', function() {
            var page = $(this).attr('href');
            var speed = 750;
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
    });