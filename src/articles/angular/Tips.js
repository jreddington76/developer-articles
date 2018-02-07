import React from 'react';

import Prism from 'prismjs';

class Tips extends React.Component {
    render() {
        return (
            <section id="tips">
                <h2>Tips</h2>
                <h3>What is a user story</h3>
                <p>

                View $scope in Chrome developer tools

In the elements tab select the form element
switch to console tab and type:
	angular.element($0).scope()
	
this will get the scope object
one of the attributes will be the form (identified by form name)
expand this to check form properties (like $invalid)

--------------------------------------------------------------------------------------------------

Don't validate hidden controls

use ngRequired (rather than required) and use the same logic that hides the control

--------------------------------------------------------------------------------------------------

Bind outer scope function with params to directive

html:

	<div directive-name prop-name="myfunction(arg1)"></div>

outer controller function:

	function(param){
		// do something
	}
	
directive:

	...
	 scope: {
		propName: '&'
	},
	...
	
	vm.propName({arg1: 'some value'});
	
--------------------------------------------------------------------------------------------------
	
Pass string as payload

stringify the string or the api model binding will not work

AngularJS:

	$http.put(__env.apiUrl + "legalsupport/" + id + "/conflictreason", JSON.stringify(data), { withCredentials: true });

API:

	public IActionResult ConflictReason(Guid id, [FromBody]string model)
                </p>
            </section>
        );
    }
}

export default Tips;