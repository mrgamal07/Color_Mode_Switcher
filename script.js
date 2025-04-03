function setMode(mode) {
    // Remove all mode classes
    document.body.classList.remove("orange-mode","red-mode","pink-mode");


    // Add selected mode class
    
     if (mode === "orange") {
        document.body.classList.add("orange-mode");
    } 
    else if(mode==="pink"){
        document.body.classList.add("pink-mode");
    }
    else {
        document.body.classList.add("red-mode"); // Default Red Mode
    }

    // Save mode to local storage
    localStorage.setItem("mode", mode);
}

// Load saved mode on page refresh
window.onload = function() {
    const savedMode = localStorage.getItem("mode") || "none";
    setMode(savedMode);
}
