/**
 * Removes a player record from the system registry
 * @param {string} playerName - The name of the player to remove
 */
function deletePlayerRecord(playerName) {
    if (!confirm(`Are you sure you want to permanently delete the profile for ${playerName}?`)) {
        return;
    }

    // Retrieve your local roster (assuming it's stored in localStorage)
    let roster = JSON.parse(localStorage.getItem('tenantRoster') || '[]');

    // Filter out the player
    roster = roster.filter(player => player.name !== playerName);

    // Save back to memory
    localStorage.setItem('tenantRoster', JSON.stringify(roster));

    // Refresh the UI to reflect the change
    alert("Player profile deleted from institutional ledger.");
    renderLocalLedgerGrid(); 
}
