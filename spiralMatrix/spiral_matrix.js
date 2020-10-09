function spiralDisplay(n){
    // initialize array
    let result = [];
    for(let i = 0; i < n; ++i){
        result.push([]);
    }
    // spiral traversal
    let ct = 1;
    for(let layer = 0; layer < Math.floor((n+1) / 2); layer++){
        // left to right
        for(let ptr = layer; ptr < n - layer; ptr++){
            result[layer][ptr] = ct++;
        }
        // top to buttom
        for(let ptr = layer + 1; ptr < n - layer; ptr++){
            result[ptr][n-layer-1] = ct++;
        }
        // right to left
        for(let ptr = layer + 1; ptr < n - layer; ptr++){
            result[n-layer-1][n-ptr-1] = ct++;
        }
        // bottom to up
        for(let ptr = layer + 1; ptr < n - layer -1; ptr++){
            result[n - ptr -1][layer] = ct++;
        }
    }
    return result;
}
// format the matrix 2d array to a renderable html block
function toHtmlTable(matrix){
    let table = "<table>"
    for(let i = 0; i < matrix.length; ++i){
        table += "<tr>";
        for(let j = 0; j < matrix[i].length; ++j){
            table += "<td>" + matrix[i][j] + "</td>";
        }
    }
    table += "</table>";
    return table;
}

//console.log(toHtmlTable(spiralDisplay(3)));



// export a single function
module.exports.spiralDisplay = spiralDisplay;
module.exports.toHtmlTable = toHtmlTable;