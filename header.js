$(".gg-search").click(function()
{
    $(".gg-search").hide();
    $(".header_search").show();
    $(".header_search").focus();
    
});
$(".header_search").focusout(function()
    {
        $(".header_search").hide();
        $(".gg-search").show();
    }
)