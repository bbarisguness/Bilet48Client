export default async function apiRequest(method, path = "", payload = {}, formdata = false, cache = 'no-store') {

    const options = (() => {
        if (method === 'POST') {
            return {
                method: method,
                cache: cache,
                headers: {
                    "Content-Type": formdata ? 'application/x-www-form-urlencoded' : 'application/json',
                },
                body: JSON.stringify(payload)
            }
        } else {
            return {
                cache: cache,
                method: method,
            }
        }
    })

    const response = await fetch((process.env.API_URL || 'http://localhost:1337/api') + path, options)
    return response.json()
}



// export default async function apiRequest(method, path = "", payload = {}, formdata = false) {
//     // const serviceToken = localStorage.getItem('serviceToken');
//     const client = axios.create({
//         baseURL: process.env.API_URL,
//         // headers: { Authorization: `Bearer ${serviceToken}` }
//     })

//     const options = {
//         method,
//         withCredentials: true,
//         url: path,
//         data: payload,
//         json: true,
//     }
//     return client(options)
// }