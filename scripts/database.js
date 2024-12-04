const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Seawise Gamgee", dockId: 1 },
        { id: 2, name: "Smeagull", dockId: 2 },
        { id: 3, name: "Ferry Brandydock", dockId: 3 },
        { id: 4, name: "Pippin Hook", dockId: 4 },
        { id: 5, name: "Frodo Beachings", dockId: 1 },
        { id: 6, name: "Gandaft", dockId: 2 },
        { id: 7, name: "Seagolas", dockId: 3 },
        { id: 8, name: "Witch-King of Anchor", dockId: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Ocean" },
        { id: 2, name: "Sea" },
        { id: 3, name: "Wave" },
        { id: 4, name: "Tide" },
        { id: 5, name: "Beach" },
        { id: 6, name: "Sand" },
        { id: 7, name: "Sun" },
        { id: 8, name: "Shell" },
        { id: 9, name: "Dolphin" },
        { id: 10, name: "Shark" },
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}