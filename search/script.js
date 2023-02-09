query.
		 * @param {string} sValue - Value to be validated.
		 */
		validateSearchQuery: function(sValue) {

		},

    /**
     * Returns the current search query.
     * @returns {string} The current search query.
     */
    getCurrentSearchQuery: function() {

    },

    /**
     * Returns the current search filters as an array of sap.ui.model.Filter objects (see sap.ui.model).<br>The filter array always contains a combination of one or more single value and one or more multi value filters.<br><b>Note:</b> If no filter is set, an empty array will be returned even if there are predefined filters in the SmartTable control configuration.<br><b>Note:</b> If you want to know whether a specific filter type exists in the list, use <code>hasSingleValueFilters</code>, <code>hasMultiValueFilters</code>.<br><b>Note:</b> When using this method on mobile devices, it is recommended to only use single value filters for now because of performance reasons (see documentation below). Use this method only when you need all available filters for your table instance at once and not just those that are currently active.<br><i>(This method returns an empty array if no predefined filter types exist.)</i><br><i>(When using this method on mobile devices it is recommended to only use single value filters for now because of performance reasons.) It is also recommended to call this method only when you need all available filters for your table instance at once and not just those that are currently active.</i></li></ul></li></ul></li></ul></li></ul>@returns{array} Array containing Filter objects (see sap/ui/model/Filter) representing the current search values.</li>" }]  </dd><dt class="dictionary__term">  <a href="#" id="dictionary__term_SmartTable-method-setEnableBusyIndicator"><span class="dictionary__predefined">SmartTable#setEnableBusyIndicator() : void </span></a>:  </dt><dd class="dictionary__description"><p class="paragraph">Enables busy indicator mode which shows a loading animation while data retrieval from backend services takes place.</p>"
