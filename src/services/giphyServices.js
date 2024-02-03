// import 'dotenv/config';
import { GIPHY_URL, SEARCH_GIPHU_URL } from "./urls"
import { FETCH_LIMIT } from "./constants"

export const fetchGifhys = async (offset) => {
    try {
        const response = await fetch(`${GIPHY_URL}?api_key=YFpBDg5SjlF8BywIPc2a149i7mB8FneA&limit=${FETCH_LIMIT}&offset=${offset}`)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const searchGifhys = async (searchText) => {
    try {
        const response = await fetch(`${SEARCH_GIPHU_URL}?api_key=YFpBDg5SjlF8BywIPc2a149i7mB8FneA&q=${searchText}`)
        return response
    } catch (err) {
        console.log(err)
    }
}