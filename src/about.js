export function about() { 
   
    const leftDiv = document.createElement("div");
    const card = document.createElement("card"); 
    const title1 = document.createElement("h1");
    const text = document.createElement("p");
    card.classList.add('contentDiv'); 
    leftDiv.classList.add('homeLeft'); 
    title1.classList.add("cardTitle");
    title1.innerHTML = "CONTACT US";
    text.innerHTML = "NEW YORK - USA <br/> Email: contact@gmail.com <br/><br/> Phone number: 205-656-4555 <br/> Address: Grand Central Parkway"
    card.appendChild(title1);
    card.appendChild(text);
    leftDiv.appendChild(card); 
    return leftDiv;
}