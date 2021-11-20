export const getTotalBalance = state => state.finance.totalBalance
export const getFinanceData = state => state.finance.data


const formatData = str => {
    return str.slice(0, 2) + '.' + str.slice(2, 4) + '.' + str.slice(6);
}

export const getFilterDataTransaction = state => {
    const allTransactions = getFinanceData(state)
    const newArr = [...allTransactions]

    newArr.sort((a, b) => {
        // data: "31072021"
        const aa = a.data.slice(0, 2) + '.' + a.data.slice(2, 4) + '.' + a.data.slice(4)
        const bb = b.data.slice(0,2) + '.' + b.data.slice(2,4) + '.' + b.data.slice(4)
        return Number(bb.split('.').reverse().join('')) - Number(aa.split('.').reverse().join(''))
    })

    return newArr.map(item => {
        item = { ...item, data: formatData(item.data)}
        console.log('item -data', item.data)
        return item
    })
};
