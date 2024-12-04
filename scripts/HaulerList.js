import { getHaulingShips, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickHaulerEvent) => {
        const haulerClicked = clickHaulerEvent.target
        
        if (haulerClicked.dataset.type === "hauler") {
            const haulerId = haulerClicked.dataset.id
            let shipCounter = 0
            const shippingShipsArray = getShippingShips()

        for (const ship of shippingShipsArray) {
            if (parseInt(haulerId) === ship.haulerId) {
                shipCounter++
            }
        }
        window.alert(`${haulerClicked.dataset.name} hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)

export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li class="haulerItem" data-type="hauler" data-id="${hauler.id}" data-name="${hauler.name}"> ${hauler.name} </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

