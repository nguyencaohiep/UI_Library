export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    ) 
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render() {
        for(const [root, component] of roots) { // render ra html cho các root, nội dung html được trả về từ hàm component
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) { // 
            roots.set(root, component) // lưu vào Map với key là root và value là component trả về html cho root đó
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
                // https://viblo.asia/p/chi-tiet-ve-objectassign-OeVKBdEylkW
        },
        dispatch(action, ...args) { 
            state = reducer(state, action, args) // nhận hành động từ action, sau đó chỉnh sửa state và update store
            render() // khi store được update thì view thay đổi nên cần render lại
        }
    }
}