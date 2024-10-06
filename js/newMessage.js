import { sendPromptToServer } from "./API.js";

const input = document.querySelector(".ask");
const btn = document.querySelector(".btn-ask");

const createAskToCoffeAI = () => {
  const handleAsk = async (ask) => {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("me");
    const userMessageText = document.createElement("p");
    userMessageText.innerText = ask;
    userMessageDiv.appendChild(userMessageText);

    const show = document.querySelector(".chat-label");
    show.appendChild(userMessageDiv);

    show.scrollTop = show.scrollHeight;

    const responseMessage = await sendPromptToServer(ask);

    const responseDiv = document.createElement("div");
    responseDiv.classList.add("ia");
    const responseText = document.createElement("p");
    responseText.innerText = responseMessage;
    responseDiv.appendChild(responseText);

    show.appendChild(responseDiv);
    show.scrollTop = show.scrollHeight;
  };

  const regex = /^\s*[\S]+.*$/;

  btn.addEventListener("click", (event) => {
    const ask = input.value;
    if (regex.test(ask)) {
      event.preventDefault();
      handleAsk(ask);
      input.value = "";
    } else {
      shakeInput();
    }
  });

  input.addEventListener("keydown", (event) => {
    const ask = input.value;
    if (event.key === "Enter") {
      if (regex.test(ask)) {
        event.preventDefault();
        handleAsk(ask);
        input.value = "";
      } else {
        shakeInput();
      }
    }
  });
};

const shakeInput = () => {
  input.classList.add("shake");
  setTimeout(() => {
    input.classList.remove("shake");
  }, 500);
};

createAskToCoffeAI();
