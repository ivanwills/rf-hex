Feature: ux-hexagon test suite

    Scenario: Loading ux-hexagon
        Given I have loaded component "ux-hexagon" with use case "dataDriven"
        Then the element "dummy" should have the text "TODO ux-hexagon contents here."
