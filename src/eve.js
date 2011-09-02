/**
 *  Eve
 * 
 *  Small javascript event framework
 *
 * 	@autor: Natan Santolo (natan.santolo@gmail.com)
 *  @version: 1.2
 *  @revision: 26/01/11
 *
 *	TODO: Add events to a define element
 *
 */

var eve = (function(win,doc) {
	
	var ie = doc.attachEvent || false;
/**
 *	@private _add
 *  @returns function(){ }
 */
    var _add = (function(that) {
        
        return (ie) ?
            function(ele, event, handler) {
                return (ele || doc).attachEvent("on"+event,handler);
            }:
            function(ele, event, handler, bubble) {
                bubble = bubble || true; // default bubble
                return (ele || doc).addEventListener(event,handler,bubble);
            };
            
    })(this);

/**
 *	@private _rem
 *  @returns function(){ }
 */
	var _rem = function(that) {
	   
        return (ie) ?
            function(ele, event, handler) {
                return (ele || doc).detachEvent("on"+event,handler);
            }:
            function(ele, event, handler, bubble) {
                bubble = bubble || true; // default bubble
                return (ele || doc).removeEventListener(event,handler,bubble);
            };

	}(this);

/**
 *	@private _getTarget
 *  @returns function(){ }
 */
	var _getTarget = function(that) {
			
        return (ie) ?
            function(event) {
                return win.event.srcElement;
            }:
            function(event) {
                return (event.target.nodeType == 3) ? 
                        event.target.parentNode : // fix Safari textNode bug
                        event.target ; 
            }
            
	}(this);
	
/**
 *	@private _preventDefault
 *  @returns function(){ }
 */
	var _preventDefault = function(that) {
	   
        return (ie) ?
            function(event) {
                return win.event.returnValue = false;
            }:
            function(event) {
                return event.preventDefault;
            };

	}(this);

/**
 *	@private _stopPropagation
 *  @returns function(){ }
 */
	var _stopPropagation = function(that) {

        return (ie) ?
            function(event) {
                return win.event.cancelBubble = false;
            }:
            function(event) {
                return event.stopPropagation();
            };

	}(this);
	
	/**
	 *	@return Eve Public Object
	 *
	 *  @method add(element:DOMElement, event:string, handler:function, bubble:boolean=true)
	 *  @method rem(element:DOMElement, event:string, handler:function)
 	 *  @method getTarget(e:Event)
	 *  @method preventDefault(e:Event)
	 *  @method stopPropagation(e:Event)
	 */
	return {

		/**
		 *  Add a event handler to an element
		 *	add(element:DOMElement, event:string, handler:function, bubble:boolean=true);
		 */
		add: _add,

		/**
		 *  Remove a event handler already added
		 *	rem(element:DOMElement, event:string, handler:function);
		 */
		rem: _rem,

		/**
		 *	Get the targeted element
		 *  getTarget(e:Event)
		 */
		getTarget: _getTarget,

		/**
		 *	Stop the event natural action
		 *  preventDefault(e:Event)
		 */
		preventDefault: _preventDefault,

		/**
		 *	Stop the event natural bubble trough the dom tree
		 *  stopPropagation(e:Event)
		 */
		stopPropagation: _stopPropagation
        
		}
    
})(window,document);