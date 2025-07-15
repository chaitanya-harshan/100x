type eventType = 'click' | 'scroll' | 'mousemove';

type excludeEvent = Exclude<eventType, 'click'>;

const handleEvent = (event: excludeEvent) => {
    console.log(event);
}

handleEvent('scroll') // ok
handleEvent('click') // error