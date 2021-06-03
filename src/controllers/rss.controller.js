const fetchRss = require("../services/fetchRss")
const numberOfEpisodes = 10

exports.displayEpisodes = (req, res) => {
    fetchRss.getEpisodes(numberOfEpisodes).then(r => {
        res.json(r)
    })
}

exports.getRssSort = (req, res) => {
    res.send('sorted')
}