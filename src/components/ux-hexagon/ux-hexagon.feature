Feature: ux-hexagon test suite

    Scenario: Loading ux-hexagon
        Given I have loaded component "ux-hexagon" with use case "dataDriven"
        Then the SVG element "text" should have the text "Some text"
