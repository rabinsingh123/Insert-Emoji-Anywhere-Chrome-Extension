document.addEventListener("DOMContentLoaded", () => {
    const emojis = document.querySelectorAll(".emoji-container span");

    emojis.forEach(emoji => {
        emoji.addEventListener("click", async () => {
            // Get the current active tab
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            // Ensure that the active tab exists and execute the script on it
            if (tab) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: insertEmoji,
                    args: [emoji.textContent]
                });
            }
        });
    });
});

// Function to insert emoji into the active input or textarea
function insertEmoji(emoji) {
    const activeElement = document.activeElement;

    if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;

        activeElement.value = activeElement.value.substring(0, start) + emoji + activeElement.value.substring(end);
        activeElement.selectionStart = activeElement.selectionEnd = start + emoji.length;
    }
}
