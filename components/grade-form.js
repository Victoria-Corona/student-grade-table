class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.formElement.addEventListener("submit", this.handleSubmit.bind(this));
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hi");
    var formData = new FormData(event.target);
    var formName = formData.get(name);
    var formCourse = formData.get(course);
    var formGrade = formData.get(grade);
    this.createGrade(formName, formCourse, formGrade);
    event.target.rest();
  }

}
