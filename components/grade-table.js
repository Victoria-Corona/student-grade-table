class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");

    for(var i = 0; i < grades.length; i++) {
      var tableRow1 = document.createElement("tr");
      var tableData1 = document.createElement("td");
      var tableData2 = document.createElement("td");
      var tableData3 = document.createElement("td");

      tableData1.textContent += grades[i].name;
      tableData2.textContent += grades[i].course;
      tableData3.textContent += grades[i].grade;
      tableRow1.append(tableData1);
      tableRow1.append(tableData2);
      tableRow1.append(tableData3);
      tbody.append(tableRow1);

    }

  }
}
