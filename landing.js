function begin () {
document.getElementById("surveyElement").style = "display:inline-block;width:100%;";
document.getElementById("inst").style = "display:none";
document.getElementById("btn1").style = "display:none";
}

Survey.StylesManager.applyTheme("modern");

Survey
    .ComponentCollection
    .Instance
    .add({
        name: "country",
        title: "Country",
        questionJSON: {
            type: "dropdown",
            optionsCaption: "Select a country...",
            choicesByUrl: {
                url: "https://restcountries.eu/rest/v2/all"
            }
        }
    });

var surveyJSON = {
 pages: [
  {
   name: "page1",
   readOnly: true,
   title: "Welcome to the Pune-MTL   Walkability Survey!",
   description: "Hello, thanks for agreeing to participate in this research exercise. We appreciate your time on this matter. Once you have begun the exercise, the researcher will verify that you performed the study, and will transfer funds to your account as previously discussed via email.     \n\nThe study consists of a brief demographic information section, and a series of images of streetscapes which you will answer questions about. These questions will seek to evaluate how you are perceiving the urban environment. You have 1 hour to tag as many images as you feel comfortable processing. The questions will alternate between a set of images from Pune, India and a set of images from Montreal, Quebec.    \n\nPlease note that you can stop the exercise at any time, and that the study is completely confidential. To review the consent form you previously signed, please click here. ",
   navigationButtonsVisibility: "show"
  },
  {
   name: "page2",
   elements: [
    {
     type: "text",
     name: "question13",
     isRequired: true,
     title: "Please enter your PID here. This was sent to you by email when you signed the consent documents."
    },
    {
     type: "dropdown",
     name: "question1",
     title: "Please select the gender identity that best describes you:",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "Male"
      },
      {
       value: "item2",
       text: "Female"
      },
      {
       value: "item3",
       text: "Other"
      },
      {
       value: "item3",
       text: "Prefer not to say"
      }
     ]
    },
    {
     type: "text",
     name: "question2",
     title: "Please enter your age (Optional)",
     inputType: "number"
    },
    {
     type: "text",
     name: "question3",
     isRequired: true,
     title: "Please enter your field of study. If not applicable, please enter your occupation."
    },
    {
     type: "rating",
     name: "question6",
     isRequired: true,
     title: "Please rate your familiarity with the fields of Urban Planning and/or Geography, with 1 being completely unfamiliar and 10 being absolute expertise",
     rateMax: 10
    },
    {
     type: "panel",
     name: "panel1",
     elements: [
      {
       type: "text",
       name: "question4",
       isRequired: true,
       title: "Current City of Residence"
     },    {
           type: "country",
           name: "question10",
           isRequired: true,
           title: "Current Country of Residence"
         },      {
                type: "dropdown",
                name: "question12",
                isRequired: true,
                title: "Current Environment type?",
                choices: [
                 {
                  value: "item1",
                  text: "Rural"
                 },
                 {
                  value: "item2",
                  text: "Suburban"
                 },
                 {
                  value: "item3",
                  text: "Urban"
                 }
                ],
                hasOther: true,
                otherText: "Other"
               },
     ],
     title: "Where do you Currently Live?"
    },
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "text",
       name: "question5",
       isRequired: true,
       title: "City"
      },
      {
       type: "country",
       name: "question8",
       isRequired: true,
       title: "Country",
     },{
       type: "dropdown",
       name: "question7",
       isRequired: true,
       title: "Environment type?",
       choices: [
        {
         value: "item1",
         text: "Rural"
        },
        {
         value: "item2",
         text: "Suburban"
        },
        {
         value: "item3",
         text: "Urban"
        }
       ],
       hasOther: true,
       otherText: "Other"
      }
     ],
     title: "Where did you spend the majority of your formative years (Under 18)?"
    },
    {
     type: "comment",
     name: "question11",
     title: "If you feel that you do not fit well into any of the above categorizations, please use this notespace to elaborate on why (optional)"
    }
   ],
   title: "Demographic Information"
  }
],
 completedHtml: "<p><h4>Loading Tagging Exercise...",
}

function landed(survey) {
    var demog = JSON.stringify(survey.data, null, 3);
    survey.sendResult('44536697-2354-41a0-afe9-fc49c26186f3');
    console.log(demog)
    setTimeout(() => {  window.location.replace("survey.html");},3000);
}

var survey = new Survey.Model(surveyJSON);
survey.surveyPostId = "9e660287-4841-4896-aaf4-b6d4f42efeee";
$("#surveyElement").Survey({
    model: survey,
    onComplete: landed
});
