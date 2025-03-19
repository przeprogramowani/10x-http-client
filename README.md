# 10x HTTP Client

A simple Node.js wrapper for superagent with built-in random delay (3-5 seconds) for all requests.

## ⚠ Important Note

- Educational purposes only.
- This package is NOT for production use.
- It is a simple wrapper for superagent with built-in random delay for all requests.

## Installation

```
npm install @10xdevspl/http-client
```

## Usage

```javascript
const httpClient = require("./index");

// GET request example
async function makeGetRequest() {
  try {
    const response = await httpClient.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("GET Response:", response.body);
  } catch (error) {
    console.error("GET Error:", error.message);
  }
}

// POST request example
async function makePostRequest() {
  try {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const response = await httpClient.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log("POST Response:", response.body);
  } catch (error) {
    console.error("POST Error:", error.message);
  }
}

// Run examples
makeGetRequest();
makePostRequest();
```

## Features

- GET and POST methods
- Random delay between 3-5 seconds for all requests
- Simple API with promise-based responses
- Support for query parameters and headers
