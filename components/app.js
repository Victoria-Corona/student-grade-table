class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      grades: function(data) {
        console.log(data);
      } ,
      error: function(error){
        console.log(error)
        handleGetGradesError();
      },
      success: function(success){
        console.log(success)
        handleGetGradesSuccess();
      }
    })
    Start(){
      this.getGrades();
    }
  }
}
