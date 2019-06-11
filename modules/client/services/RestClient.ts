// const methods = ['get', 'post', 'put', 'patch', 'del'];
import fetch from "cross-fetch";
import superagent from "superagent";

// get endpoint in proper format
function formatUrl(path, version = "1.0") {
  let pathBase = "";

  pathBase = process.env.SERVER_URL;

  const adjustedPath = path[0] !== "/" ? "/" + path : path;

  const formattedUrl = pathBase + "/v" + version + adjustedPath;

  console.info(
    "path",
    path,
    "pathBase",
    pathBase,
    "version",
    version,
    "adjustedPath",
    adjustedPath
  );

  return formattedUrl;
}

export default class RestClient {
  constructor() {}

  makeRequest(endpoint, values, callback) {
    try {
      this.execSuper(endpoint, values, "POST").end((err, res) => {
        if (err) {
          console.error(err);

          if (typeof res !== "undefined") {
            if (res.body !== null) {
              console.error(res.body.errorMessage);
            }
          }
        }
        callback(err, res);
      });
    } catch (err) {
      console.error("ERROR 2001: ", err);
    }
  }

  execSuper(endpoint, params, method = "GET") {
    if (method === "POST") {
      return superagent
        .post(formatUrl(endpoint))
        .send(params)
        .withCredentials()
        .set("accept", "json");
    }
  }

  // exec currently unused
  exec(endpoint, params, method = "GET") {
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
        headers: newHeaders,
      };
    }

    const fullUrl = formatUrl(endpoint) + sendParams;

    console.info("FETCH ", method, fullUrl, fetchParams);

    return fetch(fullUrl, fetchParams).then(data => {
      if (!data.ok || data.status === 414) {
        console.error("Fetch error", data.status);
      }

      const jsonData = data.json();
      return jsonData;
    });
  }
}
