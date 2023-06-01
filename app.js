let casinous = [
    {
        id: 1,
        img: './assets/png/sports_interaction_casino.png',
        name: 'Sport Interactive Casino Review',
        new: true,
        freeSpins: '20 Free Spins',
        bonus: '200% First deposit bonus + 250 FS',
    },
    {
        id: 2,
        img: './assets/png/21_dukes_moons.png',
        name: '21 Dukes Casino Review',
        new: false,
        freeSpins: '20 Free Spins',
        bonus: '200% First deposit bonus + 250 FS',
    },
    {
        id: 3,
        img: './assets/png/ac_casino.png',
        name: 'AC Casino Review',
        new: true,
        freeSpins: '50 Free Spins',
        bonus: '200% Deposit bonus',
    },
    {
        id: 4,
        img: './assets/png/all_irish_casino.png',
        name: 'All Irish Casino Review',
        new: false,
        freeSpins: null,
        bonus: '100% Deposit bonus + 70FS',
    },
];

let loadCasino = [
    {
        id: 5,
        img: './assets/png/sports_interaction_casino.png',
        name: 'Sport Interactive Casino Review',
        new: true,
        freeSpins: '25 Free Spins',
        bonus: '200% First deposit bonus + 250 FS',
    },
    {
        id: 6,
        img: './assets/png/21_dukes_moons.png',
        name: '21 Dukes Casino Review',
        new: false,
        freeSpins: '20 Free Spins',
        bonus: '200% First deposit bonus + 250 FS',
    },
    {
        id: 7,
        img: './assets/png/ac_casino.png',
        name: 'AC Casino Review',
        new: true,
        freeSpins: '$25 No deposit',
        bonus: '200% Deposit bonus',
    },
    {
        id: 8,
        img: './assets/png/all_irish_casino.png',
        name: 'All Irish Casino Review',
        new: false,
        freeSpins: '20 Free Spins',
        bonus: '100% Deposit bonus + 70FS',
    },
    {
        id: 9,
        img: './assets/png/21_dukes_moons.png',
        name: '21 Dukes Casino Review',
        new: false,
        freeSpins: '20 Free Spins',
        bonus: '200% First deposit bonus + 250 FS',
    },
];

let casinoList = document.querySelector('.casinos__list');
let loadMoreButton = document.querySelector('.casino-load-more');
createCasinoList(casinous);

function createCasinoList(list) {
    for (let item of list) {
        const casinoItem = document.createElement('div');
        casinoItem.className = 'casino-item-continer';
        casinoItem.innerHTML = `
        <img
        class="casino-item-img"
        alt="casino"
        src=${item.img}
    />
    <div class="casino-item-info">
        <div class="casino-item-info-status">
            <p class="casino-item-info-status-text">NEW</p>
        </div>
        <p class="casino-item-info-name">
            ${item.name}
        </p>
        <div class="casino-item-info-evaluation">
            <img
                class="casino-item-info-evaluation-flag"
                src="./assets/png/us.png"
            />
            <p class="casino-item-info-evaluation-count">
                4.4
            </p>
            <img
                alt="star"
                src="./assets/svg/star_on.svg"
            />
            <img
                class="casino-item-info-evaluation-star"
                alt="star"
                src="./assets/svg/star_on.svg"
            />
            <img
                class="casino-item-info-evaluation-star"
                alt="star"
                src="./assets/svg/star_on.svg"
            />
            <img
                class="casino-item-info-evaluation-star"
                alt="star"
                src="./assets/svg/star_on.svg"
            />
            <img
                class="casino-item-info-evaluation-star"
                alt="star"
                src="./assets/svg/star_off.svg"
            />
        </div>
    </div>
    <div class="casino-item-free-spins">
        ${
            item.freeSpins
                ? `<button onclick="getSpin(event)" class="casino-item-free-spins-get">
        ${item.freeSpins}</button>`
                : ''
        }
        <button class="casino-item-free-spins-info">
            ${item.bonus}
        </button>
    </div>
    <button class="casino-item-visit-button">Visit</button>
        `;
        casinoList.appendChild(casinoItem);
    }
}

function getSpin(event) {
    navigator.clipboard
        .writeText(event.target.innerHTML)
        .then(() => {
            console.log('Spin copied');
        })
        .catch(() => {
            console.log('Spin dont copied');
        });
}

function clearChild(selector) {
    let container = document.querySelector(selector);
    if (!container.firstChild) {
        return;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

loadMoreButton.addEventListener('click', () => {
    createCasinoList(loadCasino);
    loadMoreButton.remove();
});
