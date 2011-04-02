EVE
===
Little tiny event framework.

Really easy to use
------------------
- add event handlers to elements,
- remove the hanlders,
- get target from event objects,
- stop propagation and prevent default.

Crossbrowser
------------
Firefox 3
Chrome 3
Safari 4
Internet Explorer 8
Internet Explorer 7
Internet Explorer 6
Opera 10

Example "Using eve"
-------------------

    eve.addeve.add(document.getElementById('foo'),'click',function(event) { 

        var target = eve.getTarget(event);

        eve.preventDefault(event);

        eve.stopPropagation(event);

    },true);

API
---

    eve.add( HTMLElement , Event:string , Handler:function , Bubble:bolean );

    eve.rem( HTMLElement , Event:string , Handler:function );

    eve.getTarget( Event:object )

    eve.preventDefault( Event:object )

    eve.stopPropagation( Event:object )

