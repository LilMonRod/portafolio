(function () {
    // getElements(): Crea un nuevo request para solicitar los datos.
function getEvents(event) {
    const containerGit = document.getElementById('github');
    for (const e of event) {
        const container = document.createElement('div');
        container.setAttribute('class', 'container-activity');
        const tittle = document.createElement('h3');
        tittle.innerText = e.type;
        console.log(e);
        container.appendChild(tittle);
        if (e.payload.commits !== undefined){
            const commit = document.createElement('p');
            commit.innerText = e.payload.commits['0'].message;
            container.appendChild(commit);
            console.log(e.payload.commits['0'].message);
        }

        const date = document.createElement('p');
        date.innerText = e.created_at;
        container.appendChild(date);
        containerGit.appendChild(container);
    }
  }
  
// getElements(): Crea un nuevo request para solicitar los datos.
function getElements() {
    // Crea un nuevo XMLHttpRequest.
    const request = new XMLHttpRequest();
    // Define el tipo de respuesta esperada como 'json'.
    request.responseType = 'json';
    // Inicializa el request.
    request.open('GET', 'https://api.github.com/users/LilMonRod/events');
    // Envía el request.
    request.send();

    request.addEventListener('load', function (event) {
        // Obtiene la respuesta.
        const response = event.target.response;
        getEvents(response);
        console.log(response);
});
}
  
  getElements();
  
})();