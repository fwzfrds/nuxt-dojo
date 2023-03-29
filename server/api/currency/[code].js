export default defineEventHandler(async (e) => {

    const { code } = e.context.params
    const { currencyKey } = useRuntimeConfig()

    // const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=tMj9xKjhqzzqw374spnmACaGGTeXZO8PpqkqnYAy`

    const { data } = await $fetch(uri)

    return data

})