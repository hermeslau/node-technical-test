const convertISODateToAEST = require('../utilities/format-iso-date-to-AEST')
const Parser = require('rss-parser');
const parser = new Parser();
const rssUrl = 'https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss'

async function getRssFromNasa() {    
    try {
        return await parser.parseURL(rssUrl)
    } catch (e) {        
        console.log('RSS is not found.')
        return e.message
    }
}

module.exports = {getRssFromNasa}