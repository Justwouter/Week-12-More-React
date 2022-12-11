export function formatDate(date){
  return (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay())
}

export function PostDag(id) {
  let BODY = {
    id: id,
    guests: 0
  }
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

export async function GetDagId(date) {
  console.log(date)
  const response = await fetch("http://localhost:7296/api/Dagen", {headers: {
    "access-control-allow-origin" : "*",
    "Sec-Fetch-Site": "*"}});
  console.log(response)
}








//"proxy": "http://localhost:7296",