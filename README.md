# comparaOnlineTest
Interview coding test of Compara Online made by Andrés Juárez

## Overview
I decided to create two files one for Products Class and another for  carInsurance Class, in order to have a little more order between both classes and have an easy read codding

To show the `coverage report` just need to run `npm run test`

To show the `30 days example` just run `npm run after-30-days` command

## Considerations
After reading the instructions and compare the result of the `products_after_30_days.txt` file I noticed that exists behaviors that didn't was described into the rules for example:
 - The Full Coverage case increase the price by 2 when doesn't exist any more days
 - The default case, I mean, no Full coverage, no Mega Coverage, etc, increase the price by 2 when doesn't exist any more days

Doesn't exist a specific way how to show the `coverage report`, having this in mind I just include a little log in each test in order to show what I'm testing

