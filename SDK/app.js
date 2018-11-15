require('dotenv').config()
const Runner = require('./runner')

var api = process.env.SCOPE_ENV === "development" ? "http://localhost:3005" : "http://settlejsapi-staging.us-west-1.elasticbeanstalk.com";

var App = {
  Users: function (params = {}){
    return Runner(api, '/api/app/Users', params)
  },
  SendNotification: function (params = {}) {
    return Runner(api, '/api/app/SendNotification', params)
  },
  SetNotification: function (params = {}) {
    return Runner(api, '/api/app/SetNotification', params)
  },
  ClearNotification: function (params = {}) {
    params = {...params, notification_count: 0}
    return Runner(api, '/api/app/SetNotification', params)
  }
}

module.exports = App;
