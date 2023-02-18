const tableBody = document.getElementById("table_body");
let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED",
  },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED",
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME",
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED",
  },
];

const destinations = [
  "TOKYO",
  "FRANKFURT",
  "DUBAI",
  "LONDON",
  "OMAN",
  "BEIRUT",
];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    // pass each detail of each flight , in cell
    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");

      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterEl = document.createElement("div");

        setTimeout(() => {
          letterEl.classList.add("flip");
          letterEl.textContent = letter;
          tableCell.append(letterEl);
        }, 100 * index);
      }

      tableBody.append(tableCell);
    }

    tableBody.append(tableRow);
  }
}
populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
function generateRandomNumber(maxNum) {
  const numbers = "0123456789";
  if (maxNum) {
    const newNumbers = numbers.slice(0, maxNum);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}
function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }
  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }
  if (hour < 10) {
    displayHour = "0" + hour;
  }
  return displayHour + ":" + generateRandomNumber() + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });

  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffleUp, 3400);
