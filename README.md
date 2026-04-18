# Chatbot React Frontend

The React frontend for a full-stack chatbot application. This component provides the user interface for interacting with an AI-powered chatbot, featuring real-time messaging, loading indicators, and responsive design.

## Features

- Real-time chat interface
- Loading spinner during AI responses
- Message history with timestamps
- Responsive design
- Keyboard shortcuts (Enter to send, Escape to clear input)
- Local storage for message persistence
- Integration with FastAPI backend

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Running FastAPI backend (see ../chatbot-fastapi/README.md)

## Installation

1. Clone the repository and navigate to the React directory:

   ```bash
   cd chatbot-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Ensure the FastAPI backend is running on `http://localhost:8000`

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Type your message in the input field
- Press Enter to send the message
- Press Escape to clear the input
- Messages are automatically saved to local storage
- The chatbot will respond with AI-generated replies

## Project Structure

```
chatbot-react/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── loading-spinner.gif
│   │   ├── robot.png
│   │   └── user.jpg
│   ├── components/
│   │   ├── ChatInput.jsx      # Input component with send functionality
│   │   ├── ChatMessage.jsx    # Individual message display
│   │   ├── ChatMessages.jsx   # Messages container
│   │   └── *.css              # Component styles
│   ├── hooks/
│   │   └── useAutoScroll.jsx  # Auto-scroll hook for messages
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **Day.js**: Date/time formatting
- **ESLint**: Code linting

## API Integration

The frontend communicates with the FastAPI backend at `http://localhost:8000/chat` using POST requests with JSON payloads.

## Development

- Uses Vite for fast development and building
- ESLint for code quality
- Hot module replacement for development

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.
