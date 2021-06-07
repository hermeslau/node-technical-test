const fetchRss = require("../fetchRss")

// {
//     "items":[
//        {
//           "title":"Water Bears in Space",
//           "link":"http://www.nasa.gov/johnson/HWHAP/water-bears-in-space",
//           "pubDate":"Fri, 28 May 2021 23:51 EDT",
//           "enclosure":{
//              "url":"http://www.nasa.gov/sites/default/files/atoms/audio/ep197_water_bears_in_space.mp3",
//              "length":"43045216",
//              "type":"audio/mpeg"
//           },
//           "content":"Thomas Boothby, assistant professor for the Department of Molecular Biology at the University of Wyoming, teaches us about tardigrades, more commonly known as water bears, that are headed up to the International Space Station for a scientific study to learn how these extremophiles adapt to microgravity. HWHAP Episode 197",
//           "contentSnippet":"Thomas Boothby, assistant professor for the Department of Molecular Biology at the University of Wyoming, teaches us about tardigrades, more commonly known as water bears, that are headed up to the International Space Station for a scientific study to learn how these extremophiles adapt to microgravity. HWHAP Episode 197",
//           "guid":"http://www.nasa.gov/johnson/HWHAP/water-bears-in-space",
//           "isoDate":"2021-05-29T03:51:00.000Z",
//           "itunes":{
             
//           }
//        },
//        {
//           "title":"Your 2017 Astronaut Class",
//           "link":"http://www.nasa.gov/johnson/HWHAP/your-2017-astronaut-class",
//           "pubDate":"Fri, 14 Jul 2017 08:30 EDT",
//           "enclosure":{
//              "url":"http://www.nasa.gov/sites/default/files/atoms/audio/ep2_your_2017_astrounaut_class.mp3",
//              "length":"121112768",
//              "type":"audio/mpeg"
//           },
//           "content":"Anne Roemer, Manager of the Astronaut Selection Office at the NASA Johnson Space Center, talks about the new Astronaut Class of 2017: who they are, what they bring to the table and why these 12 people were chosen out of more than 18,000 applicants. The 2017 class also plays “2 Truths and a Lie.” HWHAP Episode 2.",
//           "contentSnippet":"Anne Roemer, Manager of the Astronaut Selection Office at the NASA Johnson Space Center, talks about the new Astronaut Class of 2017: who they are, what they bring to the table and why these 12 people were chosen out of more than 18,000 applicants. The 2017 class also plays “2 Truths and a Lie.” HWHAP Episode 2.",
//           "guid":"http://www.nasa.gov/johnson/HWHAP/your-2017-astronaut-class",
//           "isoDate":"2017-07-14T12:30:00.000Z",
//           "itunes":{
             
//           }
//        },
//        {
//           "title":"International Space Station",
//           "link":"http://www.nasa.gov/johnson/HWHAP/podcast-international-space-station",
//           "pubDate":"Fri, 07 Jul 2017 08:30 EDT",
//           "enclosure":{
//              "url":"http://www.nasa.gov/sites/default/files/atoms/audio/podcast_the_international_space_station.mp3",
//              "length":"110402048",
//              "type":"audio/mpeg"
//           },
//           "content":"Dan Huot, Public Affairs Officer at NASA’s Johnson Space Center, talks about the International Space Station: what it is, how it works, what it’s made of, and why it’s there. HWHAP Episode 1.",
//           "contentSnippet":"Dan Huot, Public Affairs Officer at NASA’s Johnson Space Center, talks about the International Space Station: what it is, how it works, what it’s made of, and why it’s there. HWHAP Episode 1.",
//           "guid":"http://www.nasa.gov/johnson/HWHAP/podcast-international-space-station",
//           "isoDate":"2017-07-07T12:30:00.000Z",
//           "itunes":{
             
//           }
//        }
//     ],
//     "title":"Houston We Have a Podcast",
//     "description":"If you’re fascinated by the idea of humans traveling through space and curious about how that all works, you’ve come to the right place. This is the official podcast of the NASA Johnson Space Center in Houston, Texas."
//  }
const mockData = JSON.parse('{   "items":[      {         "title":"Water Bears in Space",         "link":"http://www.nasa.gov/johnson/HWHAP/water-bears-in-space",         "pubDate":"Fri, 28 May 2021 23:51 EDT",         "enclosure":{            "url":"http://www.nasa.gov/sites/default/files/atoms/audio/ep197_water_bears_in_space.mp3",            "length":"43045216",            "type":"audio/mpeg"         },         "content":"Thomas Boothby, assistant professor for the Department of Molecular Biology at the University of Wyoming, teaches us about tardigrades, more commonly known as water bears, that are headed up to the International Space Station for a scientific study to learn how these extremophiles adapt to microgravity. HWHAP Episode 197",         "contentSnippet":"Thomas Boothby, assistant professor for the Department of Molecular Biology at the University of Wyoming, teaches us about tardigrades, more commonly known as water bears, that are headed up to the International Space Station for a scientific study to learn how these extremophiles adapt to microgravity. HWHAP Episode 197",         "guid":"http://www.nasa.gov/johnson/HWHAP/water-bears-in-space",         "isoDate":"2021-05-29T03:51:00.000Z",         "itunes":{                     }      },      {         "title":"Your 2017 Astronaut Class",         "link":"http://www.nasa.gov/johnson/HWHAP/your-2017-astronaut-class",         "pubDate":"Fri, 14 Jul 2017 08:30 EDT",         "enclosure":{            "url":"http://www.nasa.gov/sites/default/files/atoms/audio/ep2_your_2017_astrounaut_class.mp3",            "length":"121112768",            "type":"audio/mpeg"         },         "content":"Anne Roemer, Manager of the Astronaut Selection Office at the NASA Johnson Space Center, talks about the new Astronaut Class of 2017: who they are, what they bring to the table and why these 12 people were chosen out of more than 18,000 applicants. The 2017 class also plays “2 Truths and a Lie.” HWHAP Episode 2.",         "contentSnippet":"Anne Roemer, Manager of the Astronaut Selection Office at the NASA Johnson Space Center, talks about the new Astronaut Class of 2017: who they are, what they bring to the table and why these 12 people were chosen out of more than 18,000 applicants. The 2017 class also plays “2 Truths and a Lie.” HWHAP Episode 2.",         "guid":"http://www.nasa.gov/johnson/HWHAP/your-2017-astronaut-class",         "isoDate":"2017-07-14T12:30:00.000Z",         "itunes":{                     }      },      {         "title":"International Space Station",         "link":"http://www.nasa.gov/johnson/HWHAP/podcast-international-space-station",         "pubDate":"Fri, 07 Jul 2017 08:30 EDT",         "enclosure":{            "url":"http://www.nasa.gov/sites/default/files/atoms/audio/podcast_the_international_space_station.mp3",            "length":"110402048",            "type":"audio/mpeg"         },         "content":"Dan Huot, Public Affairs Officer at NASA’s Johnson Space Center, talks about the International Space Station: what it is, how it works, what it’s made of, and why it’s there. HWHAP Episode 1.",         "contentSnippet":"Dan Huot, Public Affairs Officer at NASA’s Johnson Space Center, talks about the International Space Station: what it is, how it works, what it’s made of, and why it’s there. HWHAP Episode 1.",         "guid":"http://www.nasa.gov/johnson/HWHAP/podcast-international-space-station",         "isoDate":"2017-07-07T12:30:00.000Z",         "itunes":{                     }      }   ],   "title":"Houston We Have a Podcast",   "description":"If you’re fascinated by the idea of humans traveling through space and curious about how that all works, you’ve come to the right place. This is the official podcast of the NASA Johnson Space Center in Houston, Texas."}')

const mockUrl = {
    validUrl: 'https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss',
    invalidUrl: 'https://www.nasa.gov/rss/dyn/',
}
const expectedReturnData = {
    validTitle: 'Houston We Have a Podcast',
    invalidResponse: 'Status code 404',
  }

const numberOfEpisodes = 2

describe('Data should ', () => {    
    it('return correct title ', async () => {
        let data = await fetchRss.getRssFromURL(mockUrl.validUrl)
        expect(data.title).toMatch(expectedReturnData.validTitle);
    });

    it('return error msg ', async () => {
        let msg = await fetchRss.getRssFromURL(mockUrl.invalidUrl)
        expect(msg).toMatch(expectedReturnData.invalidResponse);
    });

    it('sort ascending order', () => {
        fetchRss.sort(mockData, "asc")
        expect(mockData.items[0].title).toBe("International Space Station");
    });
    
    it('sort descending order', () => {
        fetchRss.sort(mockData, "dsc")
        expect(mockData.items[0].title).toBe("Water Bears in Space");
    });
    
    it('displaying episodes ', () => {
        let formattedData = fetchRss.displayFormatter(mockData, numberOfEpisodes)
        expect(formattedData.episodes.length).toBe(2);
    });

    it('able to get the episode from nasa ', async () => {
        let data = await fetchRss.getEpisodes()
        expect(data.title).toMatch(expectedReturnData.validTitle);
    })
})

