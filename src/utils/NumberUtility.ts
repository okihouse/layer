class NumberUtility {
    static comma(price: number | undefined) {
        if (!price || price <= 0) return '0';

        return price.toString().replace(/^0+/, '').replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

export default NumberUtility