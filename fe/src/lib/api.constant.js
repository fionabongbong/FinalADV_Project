const API = process.env.apiURL;

export const usersAPI = encodeURL([API, '/api/users/']);
export const loginAPI = encodeURL([usersAPI, 'login/']);

export const albumAPI = encodeURL([API, '/api/albums/']);


export function encodeURL(url, params = {}) {
    if(Array.isArray(url)){
        url = url.join('');
    }
    let queryParams = '';
    for (let i of Object.entries(params)){
        if(i && i[1]){
            queryParams += `&${i[0]}=${i[1]}`
        }
    }
    return url + `?${queryParams.substring(1, queryParams.length)}`;
}