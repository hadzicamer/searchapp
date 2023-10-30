import { subscription } from "./channels/search_channel.js";

const MIN_QUERY_LEN = 3;
let timeout;
const DEBOUNCE_TIME = 500; // 500ms
let userQueries = {};

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("query");
  const sessionId = document.querySelector('.centered-form').dataset.sessionId;
  console.log("Session ID: " + sessionId);

  if (input) {
    input.addEventListener("input", function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const query = input.value;
        if (query.length >= MIN_QUERY_LEN) {
          fetchSearchResults(query, sessionId);
          updateAnalytics(query, sessionId);
        }
      }, DEBOUNCE_TIME);
    });
  }


  subscription.received(function (data) {
    // Only update analytics for the current session
    if (data.session_id === sessionId) {
      const query = data.query;
      const count = data.count;
      userQueries[query] = count;

      displaySearchAnalytics();
    }
  });
});

function fetchSearchResults(query, sessionId) {
  fetch(`/articles?query=${query}&session_id=${sessionId}`, {
    method: "GET",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  })
  .then(handleResponse)
  .then(displaySearchResults)
  .catch(handleError);
}


function handleResponse(response) {
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new TypeError("Oops, we haven't got any data.");
  }
  return response.json();
}

function handleError(error) {
  console.error("Error fetching search results:", error);
  
  const resultsEl = document.getElementById("results");
  resultsEl.innerHTML = `<p>Error fetching search results: ${error.message}</p>`;
}

function displaySearchResults(data) {
  const resultsEl = document.getElementById("results");


  if (data.length > 0) {
    data.forEach(function (article) {
      const title = article.title;
      const written_by = article.written_by;

      const articleDiv = document.createElement("div");
      articleDiv.className = "article";

      articleDiv.innerHTML = `<h2>${title}</h2><p>Author: ${written_by}</p>`;

      resultsEl.appendChild(articleDiv);
    });
  } else {
    const msg = document.createElement("p");
    msg.textContent = 'No results for searched query';
    resultsEl.appendChild(msg);
  }
}

function updateAnalytics(query) {

  userQueries[query] = (userQueries[query] || 0) + 1;

  // Update analytics display
  displaySearchAnalytics();
}

function displaySearchAnalytics() {
  const analyticsEl = document.getElementById("analytics");
  
  analyticsEl.innerHTML = "";

  // Display updated analytics
  for (const query in userQueries) {
    const count = userQueries[query];
    
    const analytics = document.createElement("p");
    analytics.textContent = `You searched for '${query}' ${count} times`;
    
    analyticsEl.appendChild(analytics);
  }
}
