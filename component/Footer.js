import html from '../core.js'
import { connect } from '../store.js'

function Footer ({ todos, filter, filters }) {
    return html
    `
    <div class="select">
        ${Object.keys(filters).map((type) => html`
            <div class="${filter === type && 'active'}" onclick="dispatch('filter', '${type}')">${type[0].toUpperCase() + type.slice(1)}</div>
        `)}
        <div onclick="dispatch('clearAll')">Clear All</div>
    </div>
    `
}

export default connect()(Footer)