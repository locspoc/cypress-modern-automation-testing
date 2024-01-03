Feature: End to End Ecommerce validation

    Application Regression
    
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    Then Validate the total prices
    Then Select the country, submit and verify thank you message

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    | name | gender |
    | Bobs | Female |
    Then Validate the form's behaviour
    Then Select the Shop page