
export default class CarInsurance {
  constructor (products = []) {
    this.products = products
  }
  updatePrice () {
    this.products.map((product) => {
      console.log(product)
    })
  }
}
