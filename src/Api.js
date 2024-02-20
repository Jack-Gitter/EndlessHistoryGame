import axios from "axios"

const Api = async () => {
    let res = axios.get('https://today.zenquotes.io/api/1/1')
    return res
}

export default Api