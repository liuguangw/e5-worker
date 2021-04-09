/**
 * 获取token
 * @param {string} code
 * @param {string} clientId
 * @param {string} clientSecret
 * @param {string} redirectUri
 * @return {Response}
 */
export default async function (code, clientId, clientSecret, redirectUri) {
    let requestURI = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
    let postData = "client_id=" + clientId +
        "&code=" + code +
        "&redirect_uri=" + encodeURI(redirectUri) +
        "&grant_type=authorization_code" +
        "&client_secret=" + clientSecret
    let request = new Request(requestURI, {
        body: postData,
        headers: new Headers({"Content-Type": "application/x-www-form-urlencoded"}),
        method: "POST"
    })
    return await fetch(request)
}