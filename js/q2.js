async function fetchWithRetry(
  url,
  options = {},
  maxRetries = 3,
  delay = 1000
) {
  try {
    const response = await fetch(url, options);

    // Handle HTTP errors (4xx / 5xx)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (maxRetries === 0) {
      throw new Error(`Failed after retries: ${error.message}`);
    }

    console.log(
      `Retrying... Attempts left: ${maxRetries}, Next retry in ${delay}ms`
    );

    // Exponential backoff
    await new Promise((resolve) => setTimeout(resolve, delay));

    return fetchWithRetry(url, options, maxRetries - 1, delay * 2);
  }
}
