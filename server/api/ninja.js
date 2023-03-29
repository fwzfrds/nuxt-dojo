export default defineEventHandler(async (e) => {

    // // handle wuery params
    // const { name } = getQuery(e)

    // // handle post data
    // const { age } = await readBody(e)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=tMj9xKjhqzzqw374spnmACaGGTeXZO8PpqkqnYAy')

    return data
})