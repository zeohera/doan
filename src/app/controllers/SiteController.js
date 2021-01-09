
class SiteController 
{
    // [GET]/
    index(req, res)
    {
        res.render('home');
    }

    show(req, res)
    {
        res.render('404');
    }
    // [GET]/:slug
}


module.exports = new SiteController;