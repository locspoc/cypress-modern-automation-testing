Feature: Testing Login using JWT Token

    Testing that requires auto login using JWT token 

    @JWT 
    Scenario: Add to cart and place order using JWT token
    Given Is logged in through local storage
    When Product added to cart
    Then Go to checkout
    Then Place order
    Then Download csv file

    @JWT
    Scenario: Place order, download and validate Excel
    Given Is logged in through local storage
    When Product added to cart
    Then Go to checkout
    Then Place order
    Then Download Excel file and validate

    @JWT
    Scenario: Place order, download and check Excel file
    Given Is logged in through local storage
    When Product added to cart
    Then Go to checkout
    Then Place order
    Then Download Excel file and check it