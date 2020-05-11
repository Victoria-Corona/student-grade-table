class GradeTable {
  constructor(tableElement, deleteGrade, noGradesElement){
    this.tableElement = tableElement;
    this.deleteGrade = deleteGrade;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML="";

    for(var i = 0; i < grades.length; i++) {
      // var tableRow1 = document.createElement("tr");
      // var tableData1 = document.createElement("td");
      // var tableData2 = document.createElement("td");
      // var tableData3 = document.createElement("td");

      // tableData1.textContent += grades[i].name;
      // tableData2.textContent += grades[i].course;
      // tableData3.textContent += grades[i].grade;
      // tableRow1.append(tableData1);
      // tableRow1.append(tableData2);
      // tableRow1.append(tableData3);
      // tbody.append(tableRow1);
      // this.renderGradeRow(grades[i], this.deleteGrade);
      this.renderGradeRow(grades[i], this.deleteGrade);
    };

    var noneDisplayed = document.getElementById("noneDisplayed");
    if(grades.length === 0){
    noneDisplayed.classList.remove("d-none");
    } else
    noneDisplayed.classList.add("d-none");
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var tbody2 = this.tableElement.querySelector("tbody");
    var tableRow2 = document.createElement("tr");
    var tableData4 = document.createElement("td");
    var tableData5 = document.createElement("td");
    var tableData6 = document.createElement("td");
    var tableData7 = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList = "btn-danger"

    tableData4.textContent = data.name;
    tableData5.textContent = data.course;
    tableData6.textContent = data.grade;

    tableRow2.append(tableData4);
    tableRow2.append(tableData5);
    tableRow2.append(tableData6);

    tableData7.append(deleteButton);
    tableRow2.append(tableData7);

    tbody2.append(tableRow2);

    deleteButton.addEventListener("click", function(event){
      deleteGrade(data.id);
    });

      return tbody2;
  }
}
