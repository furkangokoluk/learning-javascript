class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_xCdRFWK0o5ccLqtecVTdKCTmEq0ghkbWYcCldcb4&base_currency=";
    }

    async exchance(amount, firstCurrency, secondCurrency) {
        const result = await (await fetch(`${this.url}${firstCurrency}`)).json();
        const exchangeResult = amount * result.data[secondCurrency];
        
        return exchangeResult;
    }
}