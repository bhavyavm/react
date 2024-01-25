window.addEventListener('load', () => {
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "Cisco";

    const root = document.getElementById('root');
    root.appendChild(heading1);
});

document.addEventListener('DOMContentLoaded', () => {
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "Cisco1";
    const root = document.getElementById('root');

    const reload = document.createElement('button');
    reload.innerText = "reload";
    reload.addEventListener('click', () => {
        alert("reload");
    })

    root.appendChild(heading1);
    root.appendChild(reload);
});