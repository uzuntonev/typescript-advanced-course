const baseUrl = "https://baas.kinvey.com";
const appKey = "kid_ry2ROC_6r";
const appSecret = "ad10571ba62e4969bf2fc35d02ef1437";

function makeAuth(type: string) {
  return type === "Basic"
    ? "Basic " + btoa(`${appKey}:${appSecret}`)
    : "Kinvey " + sessionStorage.getItem("authtoken");
}

function makeHeaders(
  method: string,
  data: { [key: string]: any },
  type: string
) {
  const headers = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: makeAuth(type)
    }
  };

  if (method === "POST" || method === "PUT") {
    (headers as any).body = JSON.stringify(data);
  }

  return headers;
}

function handleError(res: Response) {
  if (!res.ok) {
    throw new Error(
      `Something went wrong! Error: ${JSON.stringify({
        status: res.status,
        statusText: res.statusText
      })}`
    );
  }
  return res;
}

function deserialize(res: Response) {
  if (res.status === 204) {
    return res;
  }
  return res.json();
}

function fetchData(
  module: string,
  endpoint: string,
  headers: { method: string; headers: { [key: string]: any } }
) {
  return fetch(`${baseUrl}/${module}/${appKey}/${endpoint}`, headers)
    .then(handleError)
    .then(deserialize);
}

export function get(module: string, endpoint: string, type: string) {
  const headers = makeHeaders("GET", {}, type);
  return fetchData(module, endpoint, headers);
}

export function post(
  module: string,
  endpoint: string,
  data: { [key: string]: any },
  type: string
) {
  const headers = makeHeaders("POST", data, type);
  return fetchData(module, endpoint, headers);
}

export function put(
  module: string,
  endpoint: string,
  data: { [key: string]: any },
  type: string
) {
  const headers = makeHeaders("PUT", data, type);
  return fetchData(module, endpoint, headers);
}

export function del(module: string, endpoint:string, type: string) {
  const headers = makeHeaders("DELETE",{}, type);
  return fetchData(module, endpoint, headers);
}
