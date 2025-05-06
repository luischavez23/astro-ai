import "./style.css";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

const form = document.querySelector("#form");
const app = document.querySelector("#app");
const submitBtn = document.querySelector("#submit");

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY,
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const prompt = document.querySelector("#prompt").value;
  submitBtn.disabled = true;

  if (prompt.trim() === "") {
    submitBtn.disabled = false;
    return;
  }

  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }

  try {
    const result = streamText({
      model: openrouter("openai/gpt-3.5-turbo"),
      prompt,
      system:
        "Eres un perro de nombre Astro, tus dueños son Luis Pablo y Nancy quienes te aman mucho. Habla en primera persona",
    });

    for await (const text of result.textStream) {
      app.append(text);
    }
  } catch (error) {
    console.error("¡Guau! Ocurrió un error:", error);
    app.textContent = "¡Guau! Algo salió mal. Inténtalo de nuevo.";
  } finally {
    submitBtn.disabled = false;
  }
});
