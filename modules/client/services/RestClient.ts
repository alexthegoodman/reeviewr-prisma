// const methods = ['get', 'post', 'put', 'patch', 'del'];

// get endpoint in proper format
function formatUrl(path, version = "1.0") {
  const pathBase = "";
  // if (process.env.__SERVER__) {
  //   pathBase = "https://reeviewr-api.herokuapp.com";
  // } else {
  //   pathBase = "http://127.0.0.1:3030";
  // }

  const adjustedPath = path[0] !== "/" ? "/" + path : path;

  return pathBase + "/v" + version + adjustedPath;
}

export default class RestClient {
  constructor() {}

  get(endpoint, params, method = "GET") {
    const newHeaders = new Headers();
    newHeaders.append("Content-Type", "application/json");

    let sendParams = "";
    let fetchParams;
    if (method === "GET") {
      sendParams += "?";
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          sendParams += key + "=" + params[key] + "&";
        }
      }
      fetchParams = { method };
    } else if (method === "POST") {
      fetchParams = {
        method,
        body: JSON.stringify(params),
        headers: newHeaders
      };
    }

    const fullUrl = formatUrl(endpoint) + sendParams;

    console.info("fetch", method, fullUrl, fetchParams);

    return fetch(fullUrl, fetchParams).then(data => {
      if (!data.ok || data.status === 414) {
        console.error("Fetch error", data.status);
      }

      const jsonData = data.json();
      return jsonData;
    });
  }
}
