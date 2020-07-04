var axios = require('axios'),
    schedule = require('node-schedule');

const url = 'https://historic-lassen-volcanic-22434.herokuapp.com/'

function start() {
    axios.get(url)
    schedule.scheduleJob("*/5 * * * *", function() {
        axios.get(url)
    });
}

start()