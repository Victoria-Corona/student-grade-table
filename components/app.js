class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    // this.getGrades = this.getGrades.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    // console.log(grades);
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
}
