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

// Código del gráfico para grafico.html
if (document.querySelector("#notas")) {
    new Chart("notas", {
        type: "line",
        data: {
            labels: [
                '1° Semestre', '2° Semestre', '3° Semestre', '4° Semestre',
                '5° Semestre', '6° Semestre', '7° Semestre', '8° Semestre'
            ],
            datasets: [{
                label: "Promedio de Notas",
                data: [5.0, 5.2, 4.7, 5.5, 5.8, 6.0, 5.3, 6.3],
                borderWidth: 2,
                borderColor: "darkseagreen",
                backgroundColor: "rgba(143, 188, 143, 0.1)",
                pointBackgroundColor: "darkseagreen",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 4,
                    max: 7,
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

datos("https://api.myjson.online/v1/records/ff1ecea1-d8c0-45b9-a896-9ee0e70c2fed");
