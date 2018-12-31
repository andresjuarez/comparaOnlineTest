
class CarInsurance {
  constructor (products = []) {
    this.products = products
  }
  managePrice (name, sellIn, price) {
    let finalPrice
    let finalSellIn = sellIn - 1
    switch (name) {
      case 'Mega Coverage':
        finalPrice = price
        finalSellIn = sellIn
        break
      case 'Full Coverage':
        if (sellIn <= 0) {
          finalPrice = price + 2
        } else {
          finalPrice = price + 1
        }
        break
      case 'Special Full Coverage':
        if (sellIn <= 0) {
          finalPrice = 0
        } else {
          if (sellIn <= 10) {
            if (sellIn <= 5) {
              finalPrice = price + 3
            } else {
              finalPrice = price + 2
            }
          } else {
            finalPrice = price + 1
          }
        }
        break
      case 'Super Sale':
        finalPrice = price - 2
        break
      default:
        if (sellIn <= 0) {
          finalPrice = price - 2
        } else {
          finalPrice = price - 1
        }
        break
    }
    if (finalPrice > 50 && name !== 'Mega Coverage') {
      finalPrice = 50
    }
    if (finalPrice < 0 && name !== 'Mega Coverage') {
      finalPrice = 0
    }
    return { price: finalPrice, sellIn: finalSellIn }
  }

  updatePrice () {
    this.products.map((product) => {
      const { price, sellIn } = this.managePrice(product.name, product.sellIn, product.price)
      product.sellIn = sellIn
      product.price = price
    })
    return this.products
  }
}

module.exports = CarInsurance
