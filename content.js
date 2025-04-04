document.addEventListener("focusin", (event) => {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        chrome.runtime.sendMessage({ type: "focus", element: event.target });
    }
});
