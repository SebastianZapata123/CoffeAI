// API.js
export const sendPromptToServer = async (prompt) => {
  try {
    const response = await fetch("http://localhost:3000/api/coffe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }), // Envía el prompt como JSON
    });

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
