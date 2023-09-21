class NewsController {
    //[get] ->news
    index(req, res) {
        res.render('home1');
    }
    show(req, res) {
        res.send('detail');
    }
}

module.exports = new NewsController();
