const expect = require('chai').expect

const CarInsurance = require('../src/carInsurance')
const Product = require('../src/product')

describe ('Mega Coverage', function() {

  it('Shouldnt update price field after one call', function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', 3, 80) ])
    const products = coTest.updatePrice()
    console.log('Shouldnt update price field after one call')
    expect(products[0].price).equal(80)
  })

  it('Shouldnt update price field, no matter how many time call the function', function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', 3, 80) ])
    coTest.updatePrice()
    coTest.updatePrice()
    coTest.updatePrice()
    coTest.updatePrice()
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('Shouldnt update price field, no matter how many time call the function')
    expect(products[0].price).equal(80)
  })

})
