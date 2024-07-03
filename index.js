function parseScores(scoresString) {
    return scoresString.split(" ");
 }
 
 function buildDistributionArray(scoresArray) {
    let distribution = [0, 0, 0, 0, 0];
 
    scoresArray.forEach(score => {
       let numericScore = parseInt(score);
       if (numericScore >= 90) {
          distribution[0] += 1; // A
       } else if (numericScore >= 80) {
          distribution[1] += 1; // B
       } else if (numericScore >= 70) {
          distribution[2] += 1; // C
       } else if (numericScore >= 60) {
          distribution[3] += 1; // D
       } else {
          distribution[4] += 1; // F
       }
    });
 
    return distribution;
 }
 
 function setTableContent(userInput) {
    let scoresArray = parseScores(userInput);
    let distributionArray = buildDistributionArray(scoresArray);
 
    let tableContent = "<tr>";
    for (let i = 0; i < distributionArray.length; i++) {
       let height = distributionArray[i] * 10;
       tableContent += `<td><div style="height:${height}px" class="bar${i}"></div></td>`;
    }
    tableContent += "</tr><tr>";
 
    let grades = ["A", "B", "C", "D", "F"];
    for (let grade of grades) {
       tableContent += `<td>${grade}</td>`;
    }
    tableContent += "</tr><tr>";
 
    for (let count of distributionArray) {
       tableContent += `<td>${count}</td>`;
    }
    tableContent += "</tr>";
 
    document.getElementById("distribution-table").innerHTML = tableContent;
 }
 
 // Testing the function
 setTableContent("45 78 98 83 86 99 90 59");
 