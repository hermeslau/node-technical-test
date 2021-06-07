const convertDate = require('../utilities/format-iso-date-to-AEST')
const Parser = require('rss-parser');
const parser = new Parser();
const parameters = require('../utilities/parameters').parameters

//Fetch RSS from URL
async function getRssFromURL(url = parameters.NASA_RSS_URL) {    
    try {
        return await parser.parseURL(url)
    } catch (e) {        
        console.log('Error:', e.message)
        return e.message
    }
}

async function getEpisodes(sortOrder = null) {
    let rss = await getRssFromURL()
    //If the rss return error, response the error to controller
    if (!rss.items) return rss

    //If sorting is required
    if (sortOrder){
        sort(rss, sortOrder)
    }

    return displayFormatter(rss)
}

//Reformat the object to requested format
function displayFormatter(rss, numberOfEpisodes = parameters.NUMBER_OF_EPISODES) {   
    let result = {}
    let episodes = []
    result['title'] = rss?.title ?? ''
    result['description'] = rss?.description ?? ''
    //Get the number of episodes as requested
    for (let i = 0; i < numberOfEpisodes; i++){
        let thisEpisode = {}
        thisEpisode['title'] = rss.items[i]?.title        
        thisEpisode['audioUrl'] = rss.items[i]?.enclosure?.url
        thisEpisode['publishedDate'] = convertDate.convertISODateToAEST(rss.items[i]?.pubDate)
        episodes.push(thisEpisode)
    }
    result['episodes'] = episodes
    return result
}

//Sorting items array by date
function sort(rss, sortOrder){
    return rss.items.sort(function(a,b) {
        let d1 = new Date(a.pubDate)
        let d2 = new Date(b.pubDate)
        if (sortOrder === parameters.ORDERING_ASCENDING){
            if (d1 < d2) return -1
            if (d1 > d2) return 1
        }
        if (sortOrder === parameters.ORDERING_DESCENDING){
            if (d1 > d2) return -1
            if (d1 < d2) return 1
        }
        return 0
    })
}

module.exports = {getEpisodes, sort, displayFormatter, getRssFromURL}