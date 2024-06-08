document.addEventListener('DOMContentLoaded', function() {
    let matchIndex = 0; // Index pentru a itera prin meciuri
    const displayMatchInfo = document.createElement('div'); // Element pentru a afișa informatiile
    document.body.appendChild(displayMatchInfo); // Adaugă div-ul în body

    async function fetchMatches() {
        try {
            const response = await fetch('matches.json'); // Locația fișierului JSON
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const matches = await response.json();
            return matches;
        } catch (e) {
            console.error('Could not fetch matches:', e);
        }
    }

    document.addEventListener('click', async () => {
        const matches = await fetchMatches();
        if (matches && matches.length > 0) {
            const match = matches[matchIndex % matches.length];
            displayMatchInfo.innerHTML = `
                <p>Home: ${match.home} <img src="${match.homeflag}" alt="Flag of ${match.home}"></p>
                <p>Guest: ${match.guest} <img src="${match.guestflag}" alt="Flag of ${match.guest}"></p>
                <p>Date: ${match.date}</p>
                <p>Time: ${match.time}</p>
            `; // Afișează informațiile meciului
            matchIndex++; // Treci la următorul meci
        }
    });
});
