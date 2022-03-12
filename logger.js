export default function logger(reducer) {
    return (currState, action, args) => {
        const nextState = reducer(currState, action, args)

        return nextState
    }
}