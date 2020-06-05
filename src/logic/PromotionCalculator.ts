interface CartItem {
    id: string;
    name: string;
    price: number;
    amount: number;
}

function getDiscount(set: number, amount: number): number {
    console.log(set);
    console.log(amount);
    switch(amount) {
        case 7:
            return set*100*0.6*7;
        case 6:
            return set*100*0.5*6;
        case 5:
            return set*100*0.4*5;
        case 4:
            return set*100*0.3*4;
        case 3:
            return set*100*0.2*3;
        case 2:
            return set*100*0.1*2;
        default:
            return -1;
    }
}


export default function(cartItem: CartItem[]): number[] {

    if(cartItem.length < 1) {
        return [0,0];
    } else if(cartItem.length === 1) {
        return [0,cartItem[0].price*cartItem[0].amount];
    }

    let discount = 0;
    let total = 0;
    const amountArray: number[] = cartItem.map((item) => {
        total = total + item.price*item.amount;
        return item.amount;
    });

    amountArray.sort();

    let lastNumber = 0;

    for( let i=0; i<amountArray.length; i++) {
        if(amountArray[i] !== lastNumber && i < amountArray.length-1) {
            console.log("YYYYYYY");
            console.log(i);
            console.log("XXXXXXX");
            console.log(amountArray[i]);
            console.log(amountArray.length-i);
            discount = discount + getDiscount(amountArray[i]-lastNumber, amountArray.length-i)
            lastNumber = amountArray[i];
        }
    }

    return [discount,total-discount];
}