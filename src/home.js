
export function home() { 
    
    const homeLeftDiv = document.createElement('div')
    const title = document.createElement("h1"); 
    const brandTag = document.createElement("span");
    homeLeftDiv.classList.add('homeLeft');  
    title.innerHTML = "Estilo  <br/>  Guayaco";
    title.classList.add("title");
    brandTag.innerHTML = "Comida tipica from Guayaquil to the rest of the world"
    brandTag.classList.add("brandTag");  
    homeLeftDiv.appendChild(title);
    homeLeftDiv.appendChild(brandTag);
    return homeLeftDiv;
}