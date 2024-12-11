function checkExit(a) {
    if (!a || !a.exit) {
        console.log("Condition met: either 'a' is falsy or 'a.exit' is falsy.");
    } else {
        console.log("'a' and 'a.exit' are both truthy.");
    }
}

// Examples
checkExit(null);           // "Condition met: either 'a' is falsy or 'a.exit' is falsy."
checkExit({});             // "Condition met: either 'a' is falsy or 'a.exit' is falsy."
checkExit({ exit: false }); // "Condition met: either 'a' is falsy or 'a.exit' is falsy."
checkExit({ exit: true });  // "'a' and 'a.exit' are both truthy."
