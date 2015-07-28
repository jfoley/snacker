Feature: Meetings

Scenario: A meeting exists
  Given I am using the web UI
  And there is a meeting
  When I view meetings
  Then I should see that meeting
