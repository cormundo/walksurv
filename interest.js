Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "text",
     name: "question1",
     title: "Please enter your First Name"
    },
    {
     type: "text",
     name: "question2",
     title: "Please enter your Surname"
    },
    {
     type: "text",
     name: "question9",
     title: "Please enter your contact email:"
    },
    {
     type: "text",
     name: "question3",
     title: "City of Residence"
    },
    {
     type: "text",
     name: "question5",
     title: "Institutional Affiliation (University you study/work at)"
    },
    {
     type: "boolean",
     name: "question6",
     title: "Are you over 18 years old?"
    },
    {
     type: "boolean",
     name: "question7",
     title: "Do you have a paypal account?"
    },
    {
     type: "boolean",
     name: "question4",
     title: "If no, would you be willing to sign up for one to receive remuneration for this exercise?"
    },
    {
     type: "boolean",
     name: "question8",
     title: "Are you willing to commit one hour of your time to this rating project sometime in April, 2021?"
    }
   ],
   title: "Interest in Study Participation form",
   description: "Thanks for expressing interest in participating in this study. Please fill out the following form to be considered for entry. If you are selected, you will be contacted by the study administrators within a few weeks with further instructions. For any questions, please email Corey.Dickinson@mcgill.ca. "
  }
 ]
}

function landed(survey) {
    var demog = JSON.stringify(survey.data, null, 3);
    survey.sendResult('4792c1c9-965e-450b-99ca-e56cfced0bbb');
    console.log(demog)
    setTimeout(() => {  window.location.replace("survey.html");},3000);
}

var survey = new Survey.Model(surveyJSON);
survey.surveyPostId = "fbcdab6b-04f4-4019-b747-1207e65c386e";
$("#surveyElement").Survey({
    model: survey,
    onComplete: landed
});
