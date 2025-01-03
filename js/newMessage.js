import { sendPromptToServer } from "./API.js";

const input = document.querySelector(".ask");
const btn = document.querySelector(".btn-ask");

const createAskToCoffeAI = () => {
  const handleAsk = async (ask) => {
    // Mostrar mensaje del usuario
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("me");
    const userMessageText = document.createElement("p");
    userMessageText.innerText = ask;
    userMessageDiv.appendChild(userMessageText);

    const show = document.querySelector(".chat-label");
    show.appendChild(userMessageDiv);

    show.scrollTop = show.scrollHeight;

    // Mostrar animación de carga
    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("loading");
    const loadingText = document.createElement("p");
    loadingText.innerText = "Cargando...";
    loadingDiv.appendChild(loadingText);
    show.appendChild(loadingDiv);
    show.scrollTop = show.scrollHeight;

    // Esperar la respuesta de la IA
    const responseMessage = await sendPromptToServer(ask);

    // Eliminar animación de carga
    show.removeChild(loadingDiv);

    // Mostrar respuesta de la IA
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

// Llamar a la función para inicializar
createAskToCoffeAI();
