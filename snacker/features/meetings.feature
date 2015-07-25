Feature: Meetings

Scenario: A meeting exists
  Given there is a meeting
  When I view meetings
  Then I should see that meeting
