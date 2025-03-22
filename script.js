//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    if (age === "" || name === "") {
        alert("Please enter valid details");
        return;
    }

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Welcome, " + name + ". You can vote.");
            } else {
                reject("Oh sorry " + name + ". You aren't old enough.");
            }
        }, 2000);
    });

    promise.then(function(message) {
        alert(message);
    }

    ).catch(function(message) {
        alert(message);
    });
});