
class LoginController 
{
    // [GET]/login
    index(req, res)
    {
        res.render('admin/login',{layout: false});
    }
    // [GET]/:slug
}


module.exports = new LoginController;