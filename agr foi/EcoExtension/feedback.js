document.getElementById('feedbackBtn').addEventListener('click', () => {
  const hostname = document.getElementById('result').getAttribute('data-hostname');

  chrome.storage.local.get({ suggestions: [] }, (data) => {
    const suggestions = data.suggestions;
    if (!suggestions.includes(hostname)) {
      suggestions.push(hostname);
      chrome.storage.local.set({ suggestions }, () => {
        document.getElementById('feedbackMessage').innerText = '🌱 Sugestão registrada com sucesso!';
      });
    } else {
      document.getElementById('feedbackMessage').innerText = '✅ Este site já foi sugerido.';
    }
  });
});