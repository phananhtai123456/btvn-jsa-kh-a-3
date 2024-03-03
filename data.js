async function getAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    let html="";
    for (let i = 0; i < data.length; i++) {
        let img = data[i].thumbnailUrl;
        html += `
        <h1>${data[i].title}</h1>
        <p>${data[i].body}<p>
        `;
               
    }  
    document.body.innerHTML= html;
}
getAPI();