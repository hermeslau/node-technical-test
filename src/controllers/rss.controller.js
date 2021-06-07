const fetchRss = require("../services/fetchRss")

exports.displayEpisodes = (req, res) => {
    fetchRss.getEpisodes().then(r => {
        res.json(r)
    })
}

exports.getRssSort = (req, res) => {
    const sortOrder = req.query.order
    fetchRss.getEpisodes(sortOrder).then(r => {
        res.json(r)
    })
}