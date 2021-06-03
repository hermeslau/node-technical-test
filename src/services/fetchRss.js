const convertDate = require('../utilities/format-iso-date-to-AEST')
const Parser = require('rss-parser');
const parser = new Parser();
const rssUrl = 'https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss'

//Fetch RSS from URL
async function getRssFromURL(url = rssUrl) {    
    try {
        return await parser.parseURL(url)
    } catch (e) {        
        console.log('Error:', e.message)
        return e.message
    }
}

async function getEpisodes(numberOfEpisodes, sortOrder = null) {
    let rss = await getRssFromURL();
    //If the rss return error, response the error to controller
    if (!rss.items) return rss

    return displayFormatter(rss, numberOfEpisodes)
}

//Reformat the object to requested format
function displayFormatter(rss, numberOfEpisodes) {    
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

module.exports = {getEpisodes}