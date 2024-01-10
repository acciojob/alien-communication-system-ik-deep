
    // Simulate microtasks
    Promise.resolve().then(() => console.log('Microtask 1 executed'));
    Promise.resolve().then(() => console.log('Microtask 2 executed'));

    // Simulate macrotasks
    setTimeout(() => console.log('Macrotask 1 executed'), 0);
    setTimeout(() => console.log('Macrotask 2 executed'), 0);

