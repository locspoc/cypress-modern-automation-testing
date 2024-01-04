Feature: Library mock data

    Testing the library using mock data 

    @Moking
    Scenario: Mock results for library
    Given I open library page 
    When I send a reqeust for lirbary info
    Then Receive mock data