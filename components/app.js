class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    // this.getGrades = this.getGrades.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    var sum = 0;

    for(var g = 0; g < grades.length; g++) {
      sum += grades[g].grade;
    }

    var average = sum / grades.length;
    console.log(average);
    this.pageHeader.updateAverage(average);

    this.gradeTable.updateGrades(grades);
  }
  getGrades(){
    $.ajax({
      headers: {
        "X-Access-Token": "jygGwmxq"
      },
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
    }
  start() {
    this.getGrades();
  }

  createGrade(name, course, grade){
    console.log(name, course, grade);
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }
}

//make the placeholder for the sum of everything
//add every single grade into the sum placeholder
//to get the total value of everything
//to find the average I need to take the sum placeholder
// and divide that with the length of the grades

//compute the numeric average of all grades recieved
//so... you have to add all the numbers and divide it by the
//numbers you've gotten
//because that's how you get the average of anything
//then when you have that happen, pass it to the:
// this.pageHeader.updateAverage()
//average is like a + b / some number
