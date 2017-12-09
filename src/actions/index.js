import Store from 'react-observable-store'

export const increment = () => {
    Store.update('counter', {
        value: Store.get('counter.value') + 1
    })
}

export const incrementAsync = () => {
    setTimeout(() => {
        increment()
    }, 1000)
}

export const decrement = () => {
    var oldValue = Store.get('counter.value')
    var newValue = oldValue - 1
    Store.set('counter.value', newValue)
}
