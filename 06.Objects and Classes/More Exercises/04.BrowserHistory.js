function manageBrowserHistory(browserObject, actions) {
    actions.forEach(action => {
        if (action.indexOf("Open ") === 0) {
            const site = action.slice(5);
            browserObject["Open Tabs"].push(site);
            browserObject["Browser Logs"].push(action);
        } else if (action.indexOf("Close ") === 0) {
            const site = action.slice(6); 
            const index = browserObject["Open Tabs"].indexOf(site);
            if (index !== -1) {
                browserObject["Open Tabs"].splice(index, 1); 
                browserObject["Recently Closed"].push(site); 
                browserObject["Browser Logs"].push(action);
            }
        } else if (action === "Clear History and Cache") {
            browserObject["Open Tabs"] = [];
            browserObject["Recently Closed"] = [];
            browserObject["Browser Logs"] = [];
        }
    });

    console.log(`${browserObject["Browser Name"]}`);
    console.log(`Open Tabs: ${browserObject["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browserObject["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browserObject["Browser Logs"].join(", ")}`);
}
