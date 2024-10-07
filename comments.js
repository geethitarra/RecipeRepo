window.onload = function() {
    loadComments();
};

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || []; //Stores the data from the textbox as a javascript object. Code credited to https://www.w3schools.com/js/js_json_parse.asp

    comments.forEach(comment => {
        let div = document.createElement("div");
        div.innerHTML = "<p><strong>" + comment.username + ":</strong> " + comment.comment + "</p>";
        document.getElementById("comments").appendChild(div); //Append child method learned from https://www.geeksforgeeks.org/html-dom-appendchild-method/ 
    });
}

function addComment() {
    let username = document.getElementById("username").value;
    let comment = document.getElementById("comment").value;

    if (username.trim() === "" || comment.trim() === "") //Checking to see if username and comment values are null using "trim". Code credited to https://stackoverflow.com/questions/154059/how-do-i-check-for-an-empty-undefined-null-string-in-javascript
    {
        alert("Please enter both a name and comment.");
        return;
    }

    let comments = JSON.parse(localStorage.getItem("comments")) || []; //Retrieve the comment from local storage and assign it to a variable to later display it. Local storage and get items code credited https://blog.logrocket.com/localstorage-javascript-complete-guide/
    comments.push({username: username, comment: comment}); //Pushes the user inputs into the variable (array), code credited to https://www.w3schools.com/jsref/jsref_push.asp 
    localStorage.setItem("comments", JSON.stringify(comments)); //Makes the comment into a string, code credited to https://www.geeksforgeeks.org/javascript-json-stringify-method/

    let div = document.createElement("div");
    div.innerHTML = "<p><strong>" + username + ":</strong> " + comment + "</p>";
    document.getElementById("comments").appendChild(div);


    document.getElementById("username").value = "";
    document.getElementById("comment").value = ""; 
    window.location.href = "index.html";
}

