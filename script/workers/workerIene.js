addEventListener("message", event => {
    conectaAPI()
    setInterval(() => conectaAPI(), 5000)
})

async function conectaAPI() {
    const conectaAPI = await fetch('https://economia.awesomeapi.com.br/json/last/JPY-BRL')
    const conectaTraduzido = await conectaAPI.json();
    postMessage(conectaTraduzido.JPYBRL)
}
