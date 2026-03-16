console.log("in file:")
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 2000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}


step1(() => {
    console.log("first nested function scope end step 1")
    step2(() => {
        console.log("first nested function scope end in step 2")
        step3(() => {
            console.log("first nested function scope end step 3")
        })
    })
});


step1(() => {
    console.log("second nested function scope end step 1")
    step2(() => {
        console.log("second nested function scope end step 2")
        step3(() => {
            console.log("All steps completed");
        });
    });
});