🐾 Astro AI — Dog-Themed Chatbot Powered by OpenRouter
Astro AI is a playful and responsive chatbot web app featuring a friendly dog assistant that responds using AI-generated messages via OpenRouter. Built with HTML, TailwindCSS, JavaScript, and Vite.

🚀 Features
Clean and responsive UI

TailwindCSS styling with gradient and icon support

Fun dog-themed personality

Real-time streaming responses from OpenRouter

Simple and easy-to-extend JavaScript codebase

⚙️ Technologies Used
HTML5

TailwindCSS

Vanilla JavaScript

OpenRouter AI SDK (@openrouter/ai-sdk-provider)

Vite (for local development)

🧠 How It Works
User types a prompt into the search field and submits.

The app sends the input to OpenRouter using the AI SDK.

The response is streamed back or fetched as a complete message.

The result is rendered in the page's main container.

📦 Installation
bash
Copiar
Editar
git clone https://github.com/yourusername/astro-ai.git
cd astro-ai
npm install
🔑 Setup
Create a .env file in the root of the project with your OpenRouter API key:

env
Copiar
Editar
VITE_OPENROUTER_KEY=your_api_key_here
Start the development server:

bash
Copiar
Editar
npm run dev
📁 Project Structure
css
Copiar
Editar
astro-ai/
├── index.html
├── src/
│ └── main.js
├── .env
├── package.json
├── vite.config.js
└── README.md
⚠️ Notes
Keep your API key private — do not commit .env to GitHub.

The app supports both full response and streaming output via text() or textStream().

No backend is required.

📜 License
MIT © Luis Pablo Chávez
