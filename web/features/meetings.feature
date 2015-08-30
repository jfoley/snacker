Feature: Meetings

Scenario: A meeting exists
  Given I am using the web UI
  And there is a meeting
  When I view meetings
  Then I should see that meeting

Scenario: Creating a Meeting
  Given I am using the web UI
  When I create a meeting called "clean coders"
  When I view meetings
  Then I should see that meeting
