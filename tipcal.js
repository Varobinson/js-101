function tipAmount(bill, service){
    if(service == 'good'){
        return (bill * .2)
    }
    else if (service == 'fair') {
        return (bill * .15) 
    }
    else if (service == 'bad') {
        return (bill * .1)
    }
}
let tip = tipAmount(100, 'fair')
console.log(tip)