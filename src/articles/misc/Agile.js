import React from 'react';

class Agile extends React.Component {
    render() {
        return (
            <section id="agile">
                <h2>Agile</h2>
                <h3>What is a user story</h3>
                <p>
                - In Agile methodology ‘User Story’ is a unit of work that should be completed in one sprint. Smaller than that it’s a task, more than week(s) of work is Epic or Theme.
 - A user story represents a small piece of business value that a team can deliver in an iteration
                </p>
                <p>
                Who are we building it for, who the user is? — As a &lt;type of user&gt;
What are we building, what is the intention? — I want &lt;some goal or objective&gt;
Why are we building it, what value it bring for the user.? — So that &lt;benefit or value&gt;

Independent		We want to be able to develop in any sequence.
Negotiable		Avoid too much detail; keep them flexible so the team can adjust how much of the story to implement.
Valuable		Users or customers get some value from the story.
Estimatable		The team must be able to use them for planning.
Small			Large stories are harder to estimate and plan. By the time of iteration planning, the story should be able to be designed, coded, and tested within the iteration.
Testable		Document acceptance criteria, or the definition of done for the story, which lead to test cases.
                </p>
                <h3>Acceptance Criteria</h3>
                <p>
                Acceptance criteria provide the Definition of Done for the story
                </p>
                <p>
                <strong>Gherkin</strong>
                </p>
                <p>
                Definition
The Given-When-Then formula is a template intended to guide the writing of acceptance tests for a User Story:
(Given) some context
(When) some action is carried out
(Then) a particular set of observable consequences should obtain
                </p>
                <p>
                An example:
Given my bank account is in credit, and I made no withdrawals recently,
When I attempt to withdraw an amount less than my card's limit,
Then the withdrawal should complete without errors or warnings
                </p>
                <p>
                another example:
Description of scenario: Username is wrong
Given an unknown user (not correct user) 
When user clicks on &lt;log in=""&gt; button
Then an Error Message will be displayed: "Username or Password is not correct"
                </p>
                <p>
                As a/I want/because

Feature: Shopping Cart
  As a Shopper
  I want to put items in my shopping cart
  Because I want to manage items before I check out
  
====================================================
  
Scenario: User adds item to cart
  Given I'm a logged-in User
  When I go to the Item page
  And I click "Add item to cart"
  Then the quantity of items in my cart should go up
  And my subtotal should increment
  And the warehouse inventory should decrement
  
Feature: Shopping Cart
  As a Shopper
  I want to put items in my shopping cart
  Because I want to manage items before I check out
                </p>
            </section>
        );
    }
}

export default Agile;