'use strict';

function request1(url) {
  console.info("GET url=", url);
  var req = new Request(url, { method: 'GET', cache: 'reload' });
  return fetch(req).then(response => response.json());
}

function request2(url, body) {
  console.info("POST url=", url);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  }).then(response => response.json());
}

export default function request(url, body) {
  let request;
  if (arguments.length == 1) {
    request = request1(url);
  } else {
    request = request2(url, body);
  }
  return request;
}