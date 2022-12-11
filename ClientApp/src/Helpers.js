export function formatDate(date, full){
  if(full){
    return date.toLocaleDateString(navigator.language, { weekday: 'long', month: 'long', day: "numeric" })
  }
  return (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay())
}

export async function GetDagId(date) {
  
  const response = await fetch("https://localhost:7296/api/Dagen/"+date);
  if(response.status !== 404){
    return response;
  }
  return false;
}

export async function GetDagen() {
  
  const response = await fetch("https://localhost:7296/api/Dagen/");
  if(response.status !== 404){
    return response;
  }
  return false;
}


export async function PostDag(id) {
  let BODY = {
    id: id,
    guests: 0
  }
  const response = await fetch('https://localhost:7296/api/Dagen', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(BODY)
  })
  return response;

}

export async function PutDag(id, gasten){
  let BODY = {
    id: id,
    guests: gasten
  }
  console.log(id, gasten)
  const response = await fetch('https://localhost:7296/api/Dagen/'+id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(BODY)
  })
  console.log(response)
  return response;

}








//"proxy": "http://localhost:7296",