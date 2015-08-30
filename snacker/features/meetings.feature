Feature: Meetings

Scenario: A meeting exists
  Given there is a meeting
  When I view meetings
  Then I should see that meeting

Scenario: Creating a meeting
  When I create a meeting called "clean coders"
  When I view meetings
  Then I see a meeting called "clean coders"

Scenario: Attending a meeting
  Given there is a meeting
  When I say that I am going to attend that meeting
  Then I should show up in the list of attendees for that meeting
