const expect = require('chai').expect

const CarInsurance = require('../src/carInsurance')
const Product = require('../src/product')

describe ('Super Sale', function() {

  it('Should decrease price by 2 after 1 day', function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 13, 10) ])
    const products = coTest.updatePrice()
    console.log('Should decrease price by 2 after 1 day')
    expect(products[0].price).equal(8)
  })

  it('Should decrease price by 4 after 2 day', function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 13, 10) ])
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('Should decrease price by 4 after 2 day')
    expect(products[0].price).equal(6)
  })

  it('Shouldnt have a price under 0', function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 10, 3) ])
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('Shouldnt have a price under 0')
    expect(products[0].price).equal(0)
  })

})
