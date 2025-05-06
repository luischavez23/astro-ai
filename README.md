# 🐾 Astro AI — Dog-Themed Chatbot Powered by OpenRouter
Astro AI is a playful and responsive chatbot web app featuring a friendly dog assistant that responds using AI-generated messages via OpenRouter. Built with HTML, TailwindCSS, JavaScript, and Vite.

## 🚀 Features
- Clean and responsive UI
- TailwindCSS styling with gradient and icon support
- Fun dog-themed personality
- Real-time streaming responses from OpenRouter
- Simple and easy-to-extend JavaScript codebase

## ⚙️ Technologies Used
- HTML5
- TailwindCSS
- Vanilla JavaScript
- OpenRouter AI SDK (@openrouter/ai-sdk-provider)
- Vite (for local development)

## 🧠 How It Works
1. User types a prompt into the search field and submits.
2. The app sends the input to OpenRouter using the AI SDK.
3. The response is streamed back or fetched as a complete message.
4. The result is rendered in the page's main container.

# #📦 Installation
```bash
git clone https://github.com/yourusername/astro-ai.git
cd astro-ai
npm install
```

## 🔑 Setup
1. Create a .env file in the root of the project with your OpenRouter API key:

```env
VITE_OPENROUTER_KEY=your_api_key_here
```

2. Start the development server:

```bash
npm run dev
```

## 📁 Project Structure
```css
astro-ai/
├── index.html
├── src/
│ └── main.js
├── .env
├── package.json
├── vite.config.js
└── README.md
```
## ⚠️ Notes
- Keep your API key private - do not commit .env to GitHub.

- The app supports both full response and streaming output via text() or textStream().

- No backend is required.

📜 License
MIT(https://choosealicense.com/licenses/mit/) © [Luis Pablo Chávez](https://www.linkedin.com/in/luis-pablo-chavez/)
