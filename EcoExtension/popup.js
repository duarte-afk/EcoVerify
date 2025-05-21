chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const url = new URL(tabs[0].url);
  const hostname = url.hostname.replace('www.', '');

  const resultDiv = document.getElementById('result');
  resultDiv.setAttribute('data-hostname', hostname);

  if (approvedSites.includes(hostname)) {
    resultDiv.innerHTML = '✅ Este site pertence a uma empresa ecologicamente correta.';
    resultDiv.style.color = 'green';
  } else if (rejectedSites.includes(hostname)) {
    resultDiv.innerHTML = '❌ Este site pertence a uma empresa com práticas não ecológicas.';
    resultDiv.style.color = 'red';
  } else {
    resultDiv.innerHTML = 'ℹ️ Informações não disponíveis sobre este site.';
    resultDiv.style.color = '#555';
  }
});