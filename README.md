# Emoji Inserter Chrome Extension

**Emoji Inserter** is a minimalistic Chrome extension that enables users to insert emojis into any input field on a webpage. The extension features a modern and clean UI, allowing users to easily click on an emoji and have it inserted at the cursor position in any active text input or textarea.

## Features

- 📝 **Simple Emoji Insertion**: Click any emoji to insert it at the cursor position in the active input field.
- 🌟 **Modern UI**: A clean and visually appealing grid layout of commonly used emojis.
- 🚀 **Efficient Performance**: Uses optimized event handling to minimize performance impact.
- ✅ **Cross-Site Compatibility**: Works on most text inputs and textareas on any webpage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/emoji-inserter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd emoji-inserter
   ```
3. Open Chrome and go to:
   ```
   chrome://extensions/
   ```
4. Enable **Developer Mode** (top right).
5. Click on **Load unpacked** and select the project directory.

## Usage

1. Click on the **Emoji Inserter** icon in the Chrome toolbar.
2. Choose an emoji from the pop-up window.
3. The emoji will be inserted at the cursor position in the currently active text field.

## Project Structure

```
emoji-inserter/
├── manifest.json         # Extension configuration file
├── popup.html            # HTML for the extension popup
├── popup.js              # Handles emoji insertion logic
├── styles.css            # Styling for the emoji grid
├── icon.png              # Extension icon
└── README.md             # Project documentation
```

## Technologies Used

- JavaScript (ES6)
- HTML5 & CSS3
- Chrome Extension APIs (Manifest V3)

## Troubleshooting

If the emoji does not appear in the input field:
- Make sure you are clicking on an input field or textarea before selecting an emoji.
- Reload the extension from the **Extensions** page after making changes.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
