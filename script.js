    var table=document.createElement("table");
    table.setAttribute("id","calcu");
    console.log(table);
    
    function row(tagname){
        var row=document.createElement(tagname);
        return row;
    }
    
    var row1=row("tr");
    var td1=td("td","colspan","3");
    var input=inputs("input","class","displaybox","type","text","id","result","disabled");
    var td2=tds("td");
    var input1=inputs("input","type","button","value","C","click","clearScreen","id","btn");
    var row2=row("tr");
    var td3=tds("td");
    var input2=inputs("input","type","button","value","1","click","display('1')");
    
    
    function td(tagname,attrname,attrvalue){
        var td=document.createElement(tagname);
        td.setAttribute(attrname,attrvalue);
        return td;
    }

    function tds(tagname){
        var tds=document.createElement(tagname);
        return tds;
    }


    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
        var ele1=document.createElement(tagname);
        ele1.setAttribute(attrname,attrvalue);
        ele1.setAttribute(attrname1,attrvalue1);
        ele1.setAttribute(attrname2,attrvalue2);
        ele1.setAttribute(attrname3,attrvalue3);
        return ele1;
    }
   
    td1.appendChild(input);
    row1.appendChild(td1);
    table.appendChild(row1);
    
    td2.appendChild(input2);
    row2.appendChild(td2);
    table.appendChild(row2);
    document.body.append(table);
    

    <--https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/-->