
//mask credit card function (4568 4125 5632 1498)
export const maskCreditCard = (number) => {
    var val = number
    var newVal = '';
    val = val.replace(/\s/g, '');
    for (var i = 0; i < val.length; i++) {
        if (i % 4 == 0 && i > 0) newVal = newVal.concat(' ');
        newVal = newVal.concat(val[i]);
    }

    return newVal
};


//Date format 07/24
export const cc_expires_format = (string) => {
    return string.replace(
        /[^0-9]/g, '' // To allow only numbers
    ).replace(
        /^([2-9])$/g, '0$1' // To handle 3 > 03
    ).replace(
        /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^0{1,}/g, '0' // To handle 00 > 0
    ).replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
    );
}


//Allow only numbers
export const cc_CVV_format = (string) => {
    return string.replace(
        /[^0-9]/g, '' // To allow only numbers
    )
}