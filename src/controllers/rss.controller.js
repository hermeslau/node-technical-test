const fetchRss = require("../services/fetchRss")
const numberOfEpisodes = 10

exports.displayEpisodes = (req, res) => {
    fetchRss.getEpisodes(numberOfEpisodes).then(r => {
        res.json(r)
    })
}

exports.getRssSort = (req, res) => {
    const sortOrder = req.query.order
    fetchRss.getEpisodes(numberOfEpisodes, sortOrder).then(r => {
        res.json(r)
    })
}