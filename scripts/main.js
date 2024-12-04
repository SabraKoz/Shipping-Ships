import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const containerHTML = `
    <h1>Shipping Ship Tracker</h1>
        <article class="lists">
            <section class="docks">
                <h2>Docks</h2>
                ${DockList()}
            </section>
            <section class="haulers">
                <h2>Hauling Ships</h2>
                ${HaulerList()}
            </section>
            <section class="ships">
                <h2>Shipping Ships</h2>
                ${ShippingShipList()}
            </section>
        </article>
    `

mainContainer.innerHTML = containerHTML