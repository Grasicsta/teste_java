let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "Cursos Proz";
console.log(elementoH1);
console.log(elementoH1.innerText);

let elementoUl = document.querySelector("ul");
console.log(elementoUl);
elementoUlinnerHTML = `
     <h2> Novo subtítulo</h2>
     <ul>
        <li> Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
    </ul>
    `

let elementoOl = document.querySelector("ol");
console.log(elementoOl);

elementoOl.innerHTML = `
     <h2> Novo subtítulo</h2>
      <li><a href="https://www.google.com">Google</a></li>
      <li><a href="https://www.youtube.com">YouTube</a></li>
      <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
       </ol>
    `



let elementoA = document.querySelector("a");
elementoA.innerText = "Links";
console.log(elementoA);
console.log(elementoA.innerText)

