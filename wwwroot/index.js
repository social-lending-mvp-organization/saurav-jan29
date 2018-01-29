const sendDataButton = document.getElementById('sendData');

sendDataButton.onclick = () => {
  const firstName = document.getElementById('firstName').value;

  fetch(`/api/firstname?firstName=${firstName}`)
    .then(response => response.json())
    .then((result) => {
      const messagePara = document.getElementById('message');

      if (result.reason !== undefined) {
        messagePara.innerText = result.reason;
      } else {
        messagePara.innerText = `Your last name is ${result.lastName}.`;
      }
    });
};
