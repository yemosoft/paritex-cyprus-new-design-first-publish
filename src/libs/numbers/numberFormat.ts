export const updateDecimals = (number, decimalsToAppear = 8) => {
    if (typeof number === 'string') { return parseFloat(number).toFixed(decimalsToAppear) } else { return number.toFixed(decimalsToAppear) }
}