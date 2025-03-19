const superagent = require("superagent");

/**
 * Adds a random delay between 3-5 seconds to any request
 * @returns {Promise} Promise that resolves after the delay
 */
function randomDelay() {
  const min = 3000; // 3 seconds
  const max = 5000; // 5 seconds
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;

  return new Promise((resolve) => setTimeout(resolve, delay));
}

/**
 * HTTP client with built-in random delay
 */
const httpClient = {
  /**
   * Performs a GET request with a random delay
   * @param {string} url - URL to make the request to
   * @param {Object} params - Query parameters (optional)
   * @param {Object} headers - Request headers (optional)
   * @returns {Promise} - Response from the request
   */
  async get(url, params = {}, headers = {}) {
    // Wait for random delay
    await randomDelay();

    // Make the request
    return superagent.get(url).query(params).set(headers);
  },

  /**
   * Performs a POST request with a random delay
   * @param {string} url - URL to make the request to
   * @param {Object} data - POST request body
   * @param {Object} headers - Request headers (optional)
   * @returns {Promise} - Response from the request
   */
  async post(url, data = {}, headers = {}) {
    // Wait for random delay
    await randomDelay();

    // Make the request
    return superagent.post(url).send(data).set(headers);
  },
};

module.exports = httpClient;
