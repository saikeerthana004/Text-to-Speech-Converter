function speak() {
  const text = document.getElementById("text").value;
  if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "en-US";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}