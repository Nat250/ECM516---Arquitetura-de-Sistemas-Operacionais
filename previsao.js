require('dotenv').config()
const axios = require('axios')

// const appid = "9237c328e7d718c44b59e106a7558bc1"
const appid = process.env.APPID

const q = "Itu"

const cnt = 5

const units = "metric"

const lang = "pt-br"

const urlBase = "api.openweathermap.org/data/2.5/forecast"

const url = `${urlBase}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

console.log(url)

axios.get(url).then(response => {
    console.log(response)
})