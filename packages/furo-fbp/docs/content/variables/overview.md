---
date: 2017-04-14T16:39:52+02:00
title: Properties
weight: 400
---
Sometimes people want to store data in variables/properties. 
It is not necessarily needed for FBP, when the components you are using are designed appropriately.
But it is not a problem to wire the payload of an event (**e.details**) to a property.
 
 

## Storing event-data to properties
To store data from an event (**event.detail**) just use the @-event="**((property))**" syntax. You have to use two brackets because the **\[** and the **\{** are used in polymer itself.

![Multiple targets](/images/eventToProperties.png)
```html
<paper-button @-tap="--searchClicked">Search</paper-button>
    <iron-ajax
            ƒ-generate-request="--searchClicked"
            url="https://www.googleapis.com/youtube/v3/search"
            handle-as="json"
            params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY", "type": "video"}'
            @-response="^^data-received, ((searchResults))"
            debounce-duration="300"></iron-ajax>
``` 
*The event.detail from the response event will be stored to the searchResults property*



## Sending custom data with events
More about sending data with events [here..](/events/overview/#sending-host-data-with-events)



{{<note title="Note">}}
Properties can be viewed as a special form of a wire.  
{{</note >}}
