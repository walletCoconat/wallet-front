export const getTotalBalance = state => state.finance.totalBalance
export const getFinanceData = state => state.finance.financeData
export const getStatistic = state => state.finance.statistic
export const getCategoryDecrement = state => state.finance.categoryDecrement
export const getCategoryIncrement = state => state.finance.categoryIncrement


const formatDate = str => str.split('-').reverse().join('.')

const formatType = type => {
    if (type) {
        return '+'
    }
    return '-'
}

const formatSum = sum => {
    if (!String(sum).includes('.')) {
        return sum.toFixed(2)
    }
}

export const getBalance = state => {
    const totalBalance = getTotalBalance(state)
    return formatSum(totalBalance)
}
// export const getFilterDataTransaction = state => {
//     const allTransactions = getFinanceData(state)
//     if (allTransactions.length === 0) {
//         return null
//     }

//     const newArr = [...allTransactions]

//     newArr.sort((a, b) => {
//         // data: "2021-11-09"
//         const aa = a.date.split('-').join('.')
//         const bb = b.date.split('-').join('.')
//         return new Date(bb).getTime() - new Date(aa).getTime()
//     })

//     return newArr.map(item => {
//         item = { ...item, date: formatDate(item.date), type: formatType(item.type), sum: formatSum(item.sum), balance: formatSum(item.balance)}
//         // console.log('ITEM', item)
//         return item
//     })
// };

export const getUpdateDataTransaction = state => {
    const allTransactions = getFinanceData(state)
    if (allTransactions.length === 0) {
        return null
    }

    const newArr = [...allTransactions]

    // newArr.sort((a, b) => {
    //     // data: "2021-11-09"
    //     const aa = a.date.split('-').join('.')
    //     const bb = b.date.split('-').join('.')
    //     return new Date(bb).getTime() - new Date(aa).getTime()
    // })

    return newArr.map(item => {
        item = { ...item, date: formatDate(item.date), type: formatType(item.type), sum: formatSum(item.sum), balance: formatSum(item.balance)}
        console.log('BALANCE', formatSum(item.balance))
        console.log('ITEM', item)
        return item
    })
};