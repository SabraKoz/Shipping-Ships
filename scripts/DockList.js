import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickDockEvent) => {
        const dockClicked = clickDockEvent.target

        if (dockClicked.dataset.type === "dock") {
            const dockId = dockClicked.dataset.id
            const haulingShipsArray = getHaulingShips()
            let haulerName = []

            for (const hauler of haulingShipsArray) {
                if (hauler.dockId === parseInt(dockId)) {
                    haulerName.push(hauler.name)
                }
            }

            if (haulerName.length > 0) {
                let haulerNamePrint = haulerName.join(", ")

                window.alert(`The ${dockClicked.dataset.location} dock is currently unloading ${haulerNamePrint}`)
            } else {
                window.alert(`The ${dockClicked.dataset.location} dock is currently unloading nothing`)
        }
        }
    }
)

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li class="dockItem" data-type="dock" data-id="${dock.id}" data-location="${dock.location}"> ${dock.location} can hold ${dock.volume} million tons of cargo </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}