function splitAmount(bill, service, split) {
    if (service == 'good') {
        return ((bill * .2) + bill) / split
    } else if (service == 'fair') {
        return ((bill * .15) + bill)/ split
    } else if (service == 'bad') {
        return ((bill * .1) + bill) /split
    }
}
let total = splitAmount(100, 'fair',3)
console.log(total)
