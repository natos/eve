/**
 *  eve
 * 
 *  Small javascript event framework
 *
 * 	@autor: Natan Santolo
 *  @version: 1.1
 *  @revision: 15/10/09
 */

var eve = (function() {

	/**
	 *	Return the event object
	 */
	return {

		/**
		 *  Add a event handler to an element
		 *	add(element:DOMElement, event:string, handler:function, bubble:boolean=true);
		 */
		add: function(element,event,handler,bubble) {
			if (bubble==undefined) { bubble=true; } // default bubbling
			if (document.attachEvent) { element.attachEvent('on'+event,handler); }
			else { document.addEventListener(event,handler,bubble); }
		},

		/**
		 *  Remove a event handler already added
		 *	rem(element:DOMElement, event:string, handler:function);
		 */
		rem: function(element,event,handler) {
			if (bubble==undefined) { bubble=true; } // default bubbling
			if (document.detachEvent) { element.detachEvent('on'+event,handler); }
			else { document.removeEventListener(event,handler,bubble); }
		},

		/**
		 *	Get the targeted element
		 *  getTarget(e:Event)
		 */
		getTarget: function(e) {
			var e = e || window.event; // check for IE event model
			var t = e.target || e.srcElement; // *
			if (t.nodeType == 3) t = t.parentNode; // fix Safari textNode bug
			return t;
		},

		/**
		 *	Stop the event natural action
		 *  preventDefault(e:Event)
		 */
		preventDefault: function(e) {
			var e = e || window.event; // check for IE event model
			if (document.attachEvent) { e.returnValue = false; }
			else { e.preventDefault(); }
			return false;
		},

		/**
		 *	Stop the event natural bubble trough the dom tree
		 *  stopPropagation(e:Event)
		 */
		stopPropagation: function (e) {
			var e = e || window.event; // check for IE event model
			if (document.attachEvent) { e.cancelBubble = true; }
			else { e.stopPropagation(); }
		}
	}
}());