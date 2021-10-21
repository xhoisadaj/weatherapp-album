const request = require('postman-request')


const useralbum = (userid, callback) => {
    console.log(userid)


    const url = 'https://jsonplaceholder.typicode.com/albums?userId=' + parseInt(userid);
    request(url, { json: true }, (error, response, body) => {
        if (error) {
            callback('Error: ', undefined, 'Unable to connect....');
        } else {
            console.log(response.body)
            callback(undefined, {

                user: response.body
            }, 'success')
        }
    });
}


module.exports={
    useralbum,
}