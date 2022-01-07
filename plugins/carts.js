export default ({ app }, inject) => {
    inject("carts", {
        addThousand(money) {
            console.log('money', money);
            if(money) {
                let string = typeof money === String ? money : money.toString();
                let result = string.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                return result
            }
        },
        getLastFundraisingData(prices) {
            let result;
            prices.forEach((item, i) => {
                if(item.fundraising === false) {
                    result = i-1;
                    return
                }
            });
            return result
        }
    })
}