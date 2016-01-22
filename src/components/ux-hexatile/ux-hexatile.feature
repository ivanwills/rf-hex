Feature: ux-hexatile test suite

    Scenario: Loading ux-hexatile
        Given I have loaded component "ux-hexatile" with use case "dataDriven"
        Then the element "dummy" should have the text "TODO ux-hexatile contents here."
