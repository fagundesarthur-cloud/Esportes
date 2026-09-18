// ==============================
// DADOS DAS NOTÍCIAS
// ==============================

const news = [
    {
        category: "Futebol",
        icon: "⚽",
        title: "Mercado da bola movimenta os clubes",
        description:
            "Clubes seguem trabalhando nos bastidores em busca de novos reforços."
    },

    {
        category: "Basquete",
        icon: "🏀",
        title: "Rodada de basquete tem grandes confrontos",
        description:
            "As equipes entram em quadra em busca de mais uma vitória na temporada."
    },

    {
        category: "Esportes",
        icon: "🏆",
        title: "Confira os principais destaques esportivos",
        description:
            "Veja os resultados e acontecimentos que movimentaram o mundo dos esportes."
    }
];


// ==============================
// JOGOS
// ==============================

const games = [
    {
        date: "Hoje • 16:00",
        home: "Brasil FC",
        homeIcon: "🟢",
        away: "Atlético SP",
        awayIcon: "🔴"
    },

    {
        date: "Hoje • 18:30",
        home: "União FC",
        homeIcon: "🔵",
        away: "Real Sul",
        awayIcon: "🟡"
    },

    {
        date: "Hoje • 21:00",
        home: "Capital FC",
        homeIcon: "⚫",
        away: "Estrela FC",
        awayIcon: "⚪"
    }
];


// ==============================
// TABELA
// ==============================

const teams = [
    {
        name: "Brasil FC",
        j: 10,
        v: 7,
        e: 2,
        d: 1,
        pts: 23
    },

    {
        name: "Atlético SP",
        j: 10,
        v: 6,
        e: 2,
        d: 2,
        pts: 20
    },

    {
        name: "União FC",
        j: 10,
        v: 5,
        e: 3,
        d: 2,
        pts: 18
    },

    {
        name: "Real Sul",
        j: 10,
        v: 4,
        e: 3,
        d: 3,
        pts: 15
    },

    {
        name: "Capital FC",
        j: 10,
        v: 3,
        e: 2,
        d: 5,
        pts: 11
    }
];


// ==============================
// RENDERIZAR NOTÍCIAS
// ==============================

function renderNews() {

    const container = document.getElementById("newsContainer");

    container.innerHTML = "";

    news.forEach(item => {

        const card = document.createElement("article");

        card.className = "news-card";

        card.innerHTML = `
            <div class="news-image">
                ${item.icon}
            </div>

            <div class="news-content">

                <span class="news-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>
        `;

        container.appendChild(card);
    });
}


// ==============================
// RENDERIZAR JOGOS
// ==============================

function renderGames() {

    const container = document.getElementById("gamesContainer");

    container.innerHTML = "";

    games.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-date">
                ${game.date}
            </div>

            <div class="teams">

                <div class="team">
                    <span class="team-icon">
                        ${game.homeIcon}
                    </span>

                    <span class="team-name">
                        ${game.home}
                    </span>
                </div>

                <span class="vs">
                    VS
                </span>

                <div class="team">
                    <span class="team-icon">
                        ${game.awayIcon}
                    </span>

                    <span class="team-name">
                        ${game.away}
                    </span>
                </div>

            </div>
        `;

        container.appendChild(card);
    });
}


// ==============================
// RENDERIZAR TABELA
// ==============================

function renderTable() {

    const tbody = document.getElementById("tableBody");

    tbody.innerHTML = "";

    teams.forEach((team, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.name}</td>
            <td>${team.j}</td>
            <td>${team.v}</td>
            <td>${team.e}</td>
            <td>${team.d}</td>
            <td><strong>${team.pts}</strong></td>
        `;

        tbody.appendChild(row);
    });
}


// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ==============================
// MENSAGEM
// ==============================

function showMessage(message) {
    alert(message);
}


// ==============================
// ANO DO FOOTER
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// INICIALIZAÇÃO
// ==============================

renderNews();
renderGames();
renderTable();
