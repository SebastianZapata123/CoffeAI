// API.js
export const sendPromptToServer = async (prompt) => {
  try {
    const response = await fetch(
      " https://railway.com/project/4fbc9710-12fa-422b-a7d2-96e43d97756c?environmentId=41885d07-016c-4128-befb-4a7c33f3f4fd/api/coffe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }), // Envía el prompt como JSON
      }
    );

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    console.log("Respuesta de la IA:", data.message);

    return data.message;
  } catch (error) {
    console.error("Error al enviar el prompt:", error);
    return "Lo siento, hubo un error.";
  }
};
