const wikiData = [
    { name: "Leather", url: "items/leather.html", icon: "🐄", type: "Item" },
    { name: "Lumber", url: "items/lumber.html", icon: "🪵", type: "Item" },
    { name: "Sticks", url: "items/sticks.html", icon: "🥢", type: "Item" },
    { name: "Tent", url: "items/tent.html", icon: "⛺", type: "Item" },
    { name: "Iron Nugget", url: "items/iron-nugget.html", icon: "⛓️", type: "Item" },
    { name: "Coconut Charcoal", url: "items/coconut-charcoal.html", icon: "🔥", type: "Item" },
    { name: "Salt", url: "items/salt.html", icon: "🧂", type: "Item" },
    { name: "Gold Dust", url: "items/gold_dust.html", icon: "✨", type: "Item" },
    { name: "Steel Nugget", url: "items/steel_nugget.html", icon: "🔩", type: "Item" },
    { name: "Steel Sword", url: "items/sword2.html", icon: "⚔️", type: "Item" },
    { name: "Steel Spear", url: "items/spear2.html", icon: "🔱", type: "Item" },
    { name: "Steel Gun", url: "items/gun2.html", icon: "🔫", type: "Item" },
    { name: "Tausug", url: "tribes/tausug.html", icon: "⚔️", type: "Tribe" },
    { name: "Sugbuanon", url: "tribes/sugbuanon.html", icon: "🐟", type: "Tribe" },
    { name: "Tagailog", url: "tribes/tagailog.html", icon: "🪙", type: "Tribe" },
    { name: "Settler's Tent", url: "buildings/settlers-tent.html", icon: "🏠", type: "Building" },
    { name: "Farmer's Tent", url: "buildings/farmers-tent.html", icon: "🌾", type: "Building" },
    { name: "Woodcutter's Tent", url: "buildings/woodcutters-tent.html", icon: "🪵", type: "Building" },
    { name: "Miner's Tent", url: "buildings/miners-tent.html", icon: "⛏️", type: "Building" },
    { name: "Training Grounds", url: "buildings/training-grounds.html", icon: "⚔️", type: "Building" },
    { name: "Archery Grounds", url: "buildings/archery-grounds.html", icon: "🏹", type: "Building" },
    { name: "Barracks", url: "buildings/barracks.html", icon: "🛡️", type: "Building" },
    { name: "Crafter's Tent", url: "buildings/crafters-tent.html", icon: "⚒️", type: "Building" },
    { name: "Storage Tent", url: "buildings/storage-tent.html", icon: "📦", type: "Building" },
    { name: "Scholar's Tent", url: "buildings/scholars-tent.html", icon: "📜", type: "Building" },
    { name: "Commander's Tent", url: "buildings/commanders-tent.html", icon: "🏛️", type: "Building" },
    { name: "Market", url: "buildings/market.html", icon: "⚖️", type: "Building" },
    { name: "Warrior", url: "warriors/warrior.html", icon: "🗡️", type: "Warrior" },
    { name: "Archer", url: "warriors/archer.html", icon: "🏹", type: "Warrior" },
    { name: "Gunner", url: "warriors/gunner.html", icon: "🔫", type: "Warrior" },
    { name: "Spearman", url: "warriors/spearman.html", icon: "🔱", type: "Warrior" },
    { name: "Commander", url: "warriors/commander.html", icon: "🏛️", type: "Warrior" },
    {name: "Tausug Warrior", url: "warriors/warrior.html", icon: "⚔️", type: "Warrior" },
    {name: "Sugbuanon Warrior", url: "warriors/warrior.html", icon: "🐟", type: "Warrior" },
    {name: "Tagailog Warrior", url: "warriors/warrior.html", icon: "🪙", type: "Warrior" },
    { name: "Tausug Archer", url: "warriors/tausug-archer.html", icon: "🏹", type: "Warrior" },
    { name: "Sugbuanon Archer", url: "warriors/sugbuanon-archer.html", icon: "🐟", type: "Warrior" },
    { name: "Tagailog Archer", url: "warriors/tagailog-archer.html", icon: "🪙", type: "Warrior" },
    { name: "Tausug Gunner", url: "warriors/tausug-gunner.html", icon: "🔫", type: "Warrior" },
    { name: "Sugbuanon Gunner", url: "warriors/sugbuanon-gunner.html", icon: "🐟", type: "Warrior" },
    { name: "Tagailog Gunner", url: "warriors/tagailog-gunner.html", icon: "🪙", type: "Warrior" },
    {name: "Tausug Spearman", url: "warriors/tausug-spearman.html", icon: "🔱", type: "Warrior" },
    {name: "Sugbuanon Spearman", url: "warriors/sugbuanon-spearman.html", icon: "🐟", type: "Warrior" },
    {name: "Tagailog Spearman", url: "warriors/tagailog-spearman.html", icon: "🪙", type: "Warrior" },
    {name: "Tausug Commander", url: "warriors/tausug-commander.html", icon: "🏛️", type: "Warrior" },
    {name: "Sugbuanon Commander", url: "warriors/sugbuanon-commander.html", icon: "🐟", type: "Warrior" },
    {name: "Tagailog Commander", url: "warriors/tagailog-commander.html", icon: "🪙", type: "Warrior" },
    {name: "Tausug Tent", url: "buildings/training-grounds.html", icon: "⚔️", type: "Building" },
    {name: "Sugbuanon Tent", url: "buildings/farmers-tent.html", icon: "🐟", type: "Building" },
    {name: "Tagailog Tent", url: "buildings/archery-grounds.html", icon: "🪙", type: "Building" },
    {name: "Tausug Market", url: "buildings/tausug-market.html", icon: "⚔️", type: "Building" },
    {name: "Sugbuanon Market", url: "buildings/sugbuanon-market.html", icon: "🐟", type: "Building" },
    {name: "Tagailog Market", url: "buildings/tagailog-market.html", icon: "🪙", type: "Building" } , 
    {name: "Tausug Training Grounds", url: "buildings/tausug-training-grounds.html", icon: "⚔️", type: "Building" },
    {name: "Sugbuanon Training Grounds", url: "buildings/sugbuanon-training-grounds.html", icon: "🐟", type: "Building" },
    {name: "Tagailog Training Grounds", url: "buildings/tagailog-training-grounds.html", icon: "🪙", type: "Building" },
    {name: "wood", url: "resources/wood.html", icon: "", type: "resources" },
    {name: "Food", url: "resources/food.html", icon: "", type: "resources" },
    {name: "Minerals", url: "resources/minerals.html", icon: "", type: "resources" },
    {name: "resources", url: "resources/resources-index.html", icon: "", type: "resources" },
    {name: "campfire", url: "buildings/campfire.html", icon: "", type: "buildings" },
    {name: "watch tower", url: "buildings/watch-tower.html", icon: "", type: "buildings" },
    {name: "tiula itum", url: "items/tiula_itum.html", icon: "", type: "items" },
    {name: "gold coin", url: "items/gold_coin.html", icon: "", type: "items" },
    {name: "&8*()-=", url: "ad-manager.html", icon: "", type: "" },

    


];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('wiki-search');
    const resultsContainer = document.getElementById('search-results');

    if (!searchInput || !resultsContainer) return;

    // Adjust URLs based on current path
    const isSubPage = window.location.pathname.includes('/items/') || 
                      window.location.pathname.includes('/tribes/') || 
                      window.location.pathname.includes('/buildings/') ||
                      window.location.pathname.includes('/resources/');
    
    const getUrl = (url) => isSubPage ? '../' + url : url;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (query.length < 1) {
            resultsContainer.style.display = 'none';
            return;
        }

        const filtered = wikiData.filter(item => 
            item.name.toLowerCase().includes(query)
        ).slice(0, 8);

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const div = document.createElement('a');
                div.className = 'search-result-item';
                div.href = getUrl(item.url);
                div.innerHTML = `
                    <div class="search-result-icon">${item.icon}</div>
                    <div class="search-result-info">
                        <div style="font-weight:600">${item.name}</div>
                        <div style="font-size:11px;color:var(--wiki-text3)">${item.type}</div>
                    </div>
                `;
                resultsContainer.appendChild(div);
            });
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });
});
