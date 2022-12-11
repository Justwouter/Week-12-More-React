function PostDag(BODY) {
  fetch('https://localhost:7296/api/Dagen', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: BODY
  }).then(r => r.json()).then(res => {
    if (res) {
      this.setState({ message: 'DAY CREATED' });
    }
  });
}

function GetDag(url) {
  fetch(url)
    .then(response => response.json())
    .then(data =>  _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));

}