const portfolio = document.querySelector("#porotito");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let resultado = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `

                            <div class="col">
                                <div class="card shadow-sm">
                                <img src="${trabajo.photo}" class="card-img-top">
                                <div class="card-body">
                                <p class="card-text">${trabajo.title}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.category}</button>
                                </div>
                                <small class="text-body-secondary">Reciente </small>
             </div>
             </div>
            </div>
            </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        console.error("Detalles:", error);
    }
}


datos("https://api.myjson.online/v1/records/ff1ecea1-d8c0-45b9-a896-9ee0e70c2fed");