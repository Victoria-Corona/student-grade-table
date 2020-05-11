class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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

    var average = Math.trunc(sum / grades.length);
    if (grades.length === 0) {
      average = "N/A";
    }
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
    this.gradeForm.onSubmit(this.createGrade);

    this.gradeTable.onDeleteClick(this.deleteGrade);
   }

  createGrade(name, course, grade){
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "jygGwmxq"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }

  deleteGrade(grade_id){
    console.log(grade_id);
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + grade_id,
      headers: {
        "X-Access-Token": "jygGwmxq"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeError(error){
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }

}
