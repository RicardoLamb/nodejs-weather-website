const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/99ef76974f7ef4773f6e9400185d0378/' + latitude + ',' + longitude + '?lang=pt'

    request({url, json: true}, (error, {body}) => {
        if (error)
        {
            callback('Unable to connect to the server!', undefined)
        } else if (body.currently.length === 0){
            callback('The location ', undefined)
        } else {
            callback(undefined,
                body.daily.data[0].summary + 
                ' It is currently ' + body.currently.temperature 
                + ' degrees out. There is a ' 
                + body.currently.precipProbability 
                + '% chance of rain.')
        }
    })
}

module.exports = forecast