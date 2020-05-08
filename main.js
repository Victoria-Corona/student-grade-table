var form = document.querySelector("form");
var gradeform = new GradeForm(form);

var header = document.querySelector("header");
var pageHeader = new PageHeader(header);

var table = document.querySelector("table");

var gradeTableClass = new GradeTable(table);

var app = new App(gradeTableClass, pageHeader, gradeform);
app.start();
