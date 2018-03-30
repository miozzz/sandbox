const merge = require('./merge.js')

module.exports = function (json) {
    let response  = {
        'data': null,
        'message': '',
        'success': true
    }
    if(typeof json == 'string') {
        response.data = json
        return response
    }
    return merge(response,json)
}