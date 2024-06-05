import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_iBkrIaCoF3GVQqsrHre8rYP3ZYSKtF12rQMfRlXJ');

currencyConverter("USD" , "INR" , 5);


export async function currencyConverter(fromCurrency , toCurrency , units) {
   const res = await  freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency

    })
    const multiplier  = res.data[toCurrency];
    return multiplier*units
}

