$(document).ready(function(){


    function random_num(num) {
        return Math.floor(Math.random() * num);
    };

    let curennt_position = random_num(6)
    

    $.ajax({
        url: 'assets/data/new_blog.json',
        type: 'GET',
        success: function(res) {
            var very_top_news = ''
            let new_blog_data_list = res.slice(curennt_position , curennt_position+3)

            $.map( new_blog_data_list, function(item){
                very_top_news += '<div class="banner-1st-full-body">'
                                + '<a href="story-page.html">'
                                    + '<div class="banner-1st-pic-detail">'
                                        + '<div class="banner-first-section-pic"> <img src="'+item.img+'" alt=""> </div>'
                                        + '<div class="banner-first-section-details">'
                                            + '<h3>'+item.title+'</h3>'
                                            + '<p> MEHEDI HASSAN - '+item.date+'</p>'
                                        +'</div>'
                                    +'</div>'
                                + '</a>'
                            +'</div>'
            })

            $('#very-top-news').append(very_top_news)
        }
    });



    // <div class="banner-1st-full-body">
    //     <a href="story-page.html">
    //         <div class="banner-1st-pic-detail">
    //             <div class="banner-first-section-pic">
    //                 <img src="assets/img/model/a.jpg" alt="">
    //             </div>
    //             <div class="banner-first-section-details">
    //                 <h3>
    //                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //                 </h3>
    //                 <p>
    //                     Mehedi Hasan- 29 Feb, 2020
    //                 </p>
    //             </div>
    //         </div>
    //     </a>
    // </div>
      
    console.log(random_num(8));



    // =====================================================================


    function new_blog_list( from , to ){
        $.ajax({
            url: 'assets/data/new_blog.json',
            type: 'GET',
            success: function(res) {
                var new_blog = ''
                let new_blog_data_list = res.slice(from , to)
    
                $.map( new_blog_data_list, function(item){
                    new_blog += '<div class="news-caed-area">'
                                    + '<a href="#">'
                                        + '<div class="news-card-img"> <img src="'+item.img+'" alt=""> </div>'
                                        + '<h2>'+item.title+'</h2>'
                                    + '</a>'
                                    + '<div class="news-tags-time">'
                                        + '<a href="#"> # FASHION </a>'
                                        + '<p>'+item.date+'</p>'
                                    +'</div>'
                                    + '<p>'+item.discription+'</p>'
                                +'</div>'
                })
    
                $('.news-area').append(new_blog)
            }
        });
    };

    new_blog_list( 0 , 6 );

    $('.news-area-buttom button').click(function(){
        new_blog_list( 7 , 12 );
        $(this).parent().hide()
    });
    

    
    
    

})