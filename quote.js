window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
       const topicDropdown = document.querySelector("#topicSelection");
       const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
       const countDropdown = document.querySelector("#countSelection");
       const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
 
       fetchQuotes(selectedTopic, selectedCount);
    });
 });
 
 function showAnonymousQuotes(count) {
    let html = "<ol>";
    for (let c = 1; c <= count; c++) {
       html += `<li>Quote ${c} - Anonymous</li>`;
    }
    html += "</ol>";
 
    document.querySelector("#quotes").innerHTML = html;
 }
 
 function fetchQuotes(topic, count) {
    const xhr = new XMLHttpRequest();
    const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
 
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.addEventListener("error", function () {
       document.querySelector("#quotes").innerHTML = "Error fetching quotes.";
    });
    xhr.send();
 }
 
 function responseReceivedHandler() {
    const xhr = this;
    const quotesDiv = document.querySelector("#quotes");
 
    if (xhr.status === 200) {
       const response = xhr.response;
       if (response.error) {
          quotesDiv.innerHTML = response.error;
       } else {
          let html = "<ol>";
          for (let quote of response) {
             html += `<li>${quote.quote} - ${quote.source}</li>`;
          }
          html += "</ol>";
          quotesDiv.innerHTML = html;
       }
    } else {
       quotesDiv.innerHTML = `Error: ${xhr.statusText}`;
    }
 }
 