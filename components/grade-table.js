class GradeTable {
  constructor(tableElement, deleteGrade){
    this.tableElement = tableElement;
    this.deleteGrade = deleteGrade;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML=""; //clears the content, okay to use here but not anywhere else because of XSS
    // tbody.removeChild(tbody.firstChild); //node.removeChild(child); doesnt work because child doesn't exist yet
    // while(tbody.firstChild) {
    //   tbody.removeChild(tbody.firstChild);
    // }
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
  onDeleteClick(deleteGrade);
}
