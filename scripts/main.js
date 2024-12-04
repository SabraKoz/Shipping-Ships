import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const containerHTML = `
    <h1>Shipping Ship Tracker</h1>
        <article class="">
            <section class="">
                <h2>Docks</h2>
                ${DockList()}
            </section>
            <section class="">
                <h2>Hauling Ships</h2>
                ${HaulerList()}
            </section>
            <section class="">
                <h2>Shipping Ships</h2>
                ${ShippingShipList()}
            </section>
        </article>
    `

mainContainer.innerHTML = containerHTML