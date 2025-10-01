function DeeP_updateDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  document.getElementById('DeeP-datetime').textContent =
    now.toLocaleString('en-US', options);
}


if (!document.getElementById('DeeP-datetime')) {
  console.error("DeeP UI Error: Do not rename DeeP-datetime!");
} else {
  setInterval(DeeP_updateDateTime, 1000);
  DeeP_updateDateTime();
}
