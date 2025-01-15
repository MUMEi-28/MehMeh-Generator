
# MehMeh Generator

## Overview

**MehMeh Generator** is a fun and interactive meme generator/editor built using React and the ImgFlip Meme Generator API. This project allows users to create memes by adding top and bottom text to a randomly generated meme image. The app features an intuitive user interface, making it easy to create hilarious memes in just a few clicks.

---

## Features

1. **Random Meme Images**:
   - Fetch meme images dynamically from the ImgFlip API.
   - Generate a new random meme image with the click of a button.

2. **Customizable Text**:
   - Add your custom text to the **top** and **bottom** of the meme.
   - Real-time preview of your meme with the added text.

3. **User-Friendly Interface**:
   - Clean and simple design for quick meme creation.
   - Responsive layout to work on different screen sizes.

---

## Technologies Used

- **React**: Frontend library for building the application.
- **ImgFlip API**: Used to fetch meme templates from a large meme database.
- **CSS**: For styling the app and ensuring a responsive design.

---

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd mehmeh-generator
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:

   ```
   http://localhost:5173
   ```

---

## How It Works

1. Enter text in the **Top Text** and **Bottom Text** input fields.
2. Click the **Get a new meme image** button to fetch a new random meme image from the ImgFlip API.
3. Your custom meme is displayed instantly with the added text.
4. Repeat the process to create more memes!

---

## File Structure

```
mehmeh-generator/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx       # Header component
│   │   ├── memeInput.jsx       # Form for entering text
│   │   ├── meme.jsx    # Displays the meme image with text
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css        # Global styles
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## Example Data Flow

1. **Input**: User enters top text (`"When life"`) and bottom text (`"gives you lemons"`).
2. **API Call**: The app fetches a random meme image from the ImgFlip API.
3. **Output**: A meme is generated with the input text overlaid on the image.

---

## Future Enhancements

- Add functionality to download or share the generated memes.
- Allow users to select specific meme templates from a gallery.
- Integrate text styling options (e.g., font size, color, alignment).
- Add the ability to drag and reposition text on the image.
- Save generated memes to local storage or a database.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgements

- **ImgFlip**: For providing a powerful meme generator API.
- **React**: For making frontend development efficient and fun.
- **Vite**: For a blazing-fast development experience.
- **icons8.com**: For the angry face meme icon.

---

Enjoy creating memes with **MehMeh Generator**! 🎉
