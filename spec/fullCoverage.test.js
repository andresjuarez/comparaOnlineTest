const expect = require('chai').expect

const CarInsurance = require('../src/carInsurance')
const Product = require('../src/product')

describe ('Full Coverage', function() {

  it('Should increase price by 1 after 1 day', function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 3, 10) ])
    const products = coTest.updatePrice()
    console.log('Should increase price by 1 after 1 day')
    expect(products[0].price).equal(11)
  })

  it('Should increase price by 2 after 2 day', function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 3, 10) ])
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('Should increase price by 2 after 2 day')
    expect(products[0].price).equal(12)
  })

  it('Shouldnt have a price above 50', function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 3, 49) ])
    coTest.updatePrice()
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('Shouldnt have a price above 50')
    expect(products[0].price).equal(50)
  })

  it('Should increase price by 2 after 1 day', function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 0, 10) ])
    const products = coTest.updatePrice()
    console.log('Should increase price by 2 after 1 day')
    expect(products[0].price).equal(12)
  })

})
