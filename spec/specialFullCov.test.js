const expect = require('chai').expect

const CarInsurance = require('../src/carInsurance')
const Product = require('../src/product')

describe ('Special Full Coverage', function() {

  it('Should increase price by 1 after 1 day', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 13, 10) ])
    const products = coTest.updatePrice()
    console.log('Should increase price by 1 after 1 day')
    expect(products[0].price).equal(11)
  })

  it('Should increase price by 2 after 1 day (less than 10 days)', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 9, 10) ])
    const products = coTest.updatePrice()
    console.log('Should increase price by 2 after 1 day (less than 10 days)')
    expect(products[0].price).equal(12)
  })

  it('Should increase price by 3 after 1 day (less than 5 days)', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 4, 10) ])
    const products = coTest.updatePrice()
    console.log('Should increase price by 3 after 1 day (less than 5 days)')
    expect(products[0].price).equal(13)
  })

  it('Should set price in 0 because have no more days', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 0, 10) ])
    const products = coTest.updatePrice()
    console.log('Should set price in 0 because have no more days')
    expect(products[0].price).equal(0)
  })

  it('Shouldnt have a price above 50', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 3, 49) ])
    const products = coTest.updatePrice()
    console.log('Shouldnt have a price above 50')
    expect(products[0].price).equal(50)
  })

  it('Shouldnt have a price under 0', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', -3, 49) ])
    const products = coTest.updatePrice()
    console.log('Shouldnt have a price under 0')
    expect(products[0].price).equal(0)
  })

})
