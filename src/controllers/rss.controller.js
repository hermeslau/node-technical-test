const fetchRss = require("../services/fetchRss")
const numberOfEpisodes = 10

exports.displayEpisodes = (req, res) => {    
    fetchRss.getRssFromNasa().then(r => {
        res.send(r)
    })
}

exports.getRssSort = (req, res) => {
    res.send('sorted')
}