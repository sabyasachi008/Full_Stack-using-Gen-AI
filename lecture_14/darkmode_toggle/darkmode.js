

function mode() {
    const html = document.documentElement;              
    
    const current = html.getAttribute('data-bs-theme');                 //this initally get the attribute value 

    const next = current === "dark" ? "light" : "dark";
    html.setAttribute('data-bs-theme', next);


}