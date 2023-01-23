// cea98db3574c5ccf350fdde96807d10f1c00b0a7

const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

// store emojis here
const emoji = [];

async function getEmoji() {
  // fetch data
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=cea98db3574c5ccf350fdde96807d10f1c00b0a7"
  );

  data = await response.json();

  for (let i = 0; i < 2500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  let randomNo = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNo].emojiName;
  emojiNameEl.innerText = emoji[randomNo].emojiCode;
});
