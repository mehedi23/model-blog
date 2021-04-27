$(document).ready(function(){


    
    
    $.ajax({
        url: 'assets/data/new_blog.json',
        type: 'GET',
        success: function(res) {
            var new_blog = ''

            $.map( res, function(item){
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

})