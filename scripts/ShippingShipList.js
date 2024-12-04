import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickShipEvent) => {
        const shipClicked = clickShipEvent.target
        const shippingShipHauler = shipClicked.dataset.hauleridforeignkey

        if (shipClicked.dataset.type === "ship") {
            const haulingShipArray = getHaulingShips()
            let haulingShip = { name: "Incorrect" }

            for (const hauler of haulingShipArray) {
                if (parseInt(shippingShipHauler) === hauler.id) {
                    haulingShip = hauler.name
                }
            }
            window.alert(`${shipClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)

export const ShippingShipList = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li class="shipItem" data-id="${ship.id}" data-type="ship" data-haulerIdForeignKey="${ship.haulerId}" data-name="${ship.name}"> ${ship.name} </li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}