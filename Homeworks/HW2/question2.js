function Defects(attributes) {
    this.bug_id = attributes[0];
    this.component = attributes[1];
    this.status = attributes[2];
    this.resolution = attributes[3];
    this.summary = attributes[4];
    this.changed = attributes[5];
    this.severity = attributes[6];
    this.number_comments = attributes[7];
    this.os = attributes[8];
    this.assignee_id = attributes[9];
    this.reporter_id = attributes[10];
    this.open_date = attributes[11];
    this.closed_date = attributes[12];
    this.blocks = [];
    this.depends = [];
    this.fixed_by_username = attributes[13];
    this.fixed_by_real_name = null;
}

function loadObjects() {
    /* ... Your implementation here ... */
    // You can use the readFile from the fs module
    // See the documentation: https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
    // The CSV files are comma-separated
    // import the NodeJS modules
    const fs = require('fs'); // module for file I/O
    const readline = require("readline"); // module for reading line-by-line from file

    // create input streams
    let defectsCSV = fs.readFileSync("defects.csv", "utf8");
    let dependsCSV = fs.readFileSync("defect_depends.csv", "utf8");
    let blocksCSV = fs.readFileSync("defect_blocks.csv", "utf8");
    let developersCSV = fs.readFileSync("developers.csv", "utf8");

    var defects_array = new Array();

    // Reads defects CSV line-by-line
    defectsCSV.split("\r\n").slice(1).forEach(row => {
        /* Your logic here to parse the rows */
        var new_object = new Defects(row.split(","));
        defects_array.push(new_object);
    });

    dependsCSV.split("\r\n").slice(1).forEach(row => {
        /* Your logic here to parse the rows */
        var depends_on = row.split(",");
        defects_array[depends_on[0]].depends.push(depends_on[1]);
    });

    blocksCSV.split("\r\n").slice(1).forEach(row => {
        /* Your logic here to parse the rows */
        var blocks_on = row.split(",");
        defects_array[blocks_on[0]].blocks.push(blocks_on[1]);
    });

    developersCSV.split("\r\n").forEach(row => {
        /* Your logic here to parse the rows */
        var real_name = row.split(","); // [name, username]
        for (let i = 0; i < defects_array.length; i++) {
            if (defects_array[i].fixed_by_username == real_name[1]) {
                defects_array[i].fixed_by_real_name = real_name[0];
            }
        }
    });

    return defects_array;
}

function query1(defects) {
    /* Your implementation here 
    How many defects have been solved by developers 
    (i.e., status=”RESOLVED” and resolution="FIXED") so far? 
    */
    return defects.filter(defect => (defect.status == "RESOLVED" && defect.resolution == "FIXED")).length;
}

function query2(defects) {
    /* Your implementation here 
    Count the number of defects  whose summary attribute include the word "buildbot"
    regardless of case (ex: “Drone”, and “drone” are treated as the same word).  
    */
    const keyword = "buildbot";
    return defects.filter(defect => String(defect.summary.toLowerCase()).indexOf(keyword) != -1).length;
}

function query3(defects) {
    /* Your implementation here 
    What percentage of issues are still in the backlog (status!=RESOLVED)? 
    */
    return (100 * (defects.filter(defect => defect.status != "RESOLVED").length / defects.length)).toFixed(2);
}

function query4(defects) {
    /* Your implementation here 
    What is the most defective component 
    (that is, the component that has the highest number of associated defects)? 
    */
    components = new Set();
    components_vals = {};
    defects.forEach(d => components.add(d.component)); // add components to set, gets rid of duplicates
    components.forEach(x => components_vals[String(x)] = 0); // for each unique component, make a correlating dict with values of 0
    defects.map(d => components_vals[d.component]++); //add to dict of values

    return Object.entries(components_vals).sort((x, y) => y[1] - x[1])[0][0]; //components_vals.values().reduce((a, b) => a > b ? a : b);
}

function query5(defects) {
    /* Your implementation here 
    What are the usernames of the two developers who mostly fixed documentation defects 
    (i.e., status === "RESOLVED" && resolution === "FIXED" && component === "Documentation")? 
    */
    filtered_defects = defects.filter(defect => (defect.status === "RESOLVED" && defect.resolution === "FIXED" && defect.component === "Documentation"));
    developers = new Set();
    developers_vals = {};
    filtered_defects.forEach(d => developers.add(d.fixed_by_username)); //get all unique names
    developers.forEach(x => developers_vals[String(x)] = 0); // make dict of values for each unique array
    filtered_defects.map(d => developers_vals[d.fixed_by_username]++); // add to values

    top = Object.entries(developers_vals).sort((x, y) => y[1] - x[1]); // add up all of the top developers

    return [top[0][0], top[1][0]];
}

function query6(defects) {
    /* Your implementation here 
    Is there any circular dependency?
    (ex:, bug A blocks bug B, bug B blocks bug C, and bug C blocks bug A) 
    */
    has_dependents_blocks = defects.filter(d => d.blocks.length != 0 && d.depends.length);
    if (has_dependents_blocks.length == 0) {
        return false;
    }
    has_dependents_blocks.forEach(d => {
        var visited = new Set();
        var frontier = [d];
        var current;
        while (frontier.length > 0) {
            current = frontier.pop();
            if (visited.has(current)) {
                continue;
            }
            visited.add(current);
            frontier.push(...defects.filter(x => x.bug_id == current.depends));
        }
        if (frontier.length > 0) {
            return true;
        }
    });

    return false;
}


let defects = loadObjects();
query1(defects);
query2(defects);
query3(defects);
query4(defects);
query5(defects);
query6(defects);