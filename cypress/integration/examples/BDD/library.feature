Feature: Library mock data

    Testing the library using mock data 

    @Moking
    Scenario: Mock response for library
    Given I open library page 
    When I send a reqeust for lirbary info
    Then Receive mock data

    @Moking
    Scenario: Mock requests for library
    Given I open library page 
    When I send a mock reqeust for lirbary info
    Then Receive mock data 2

    @Moking
    Scenario: Mock test without frontend
    Given Post request to url
    When New book info sent
    Then Success message received