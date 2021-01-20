Survey.StylesManager.applyTheme("modern");

Survey
    .ComponentCollection
    .Instance
    .add({
        //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
        name: "country",
        //The text that shows on toolbox
        title: "Country",
        //The actual question that will do the job
        questionJSON: {
            type: "dropdown",
            optionsCaption: "Select a country...",
            choicesByUrl: {
                url: "https://restcountries.eu/rest/v2/all"
            }
        }
    });

var surveyJSON = {pages:[{name:"page1",elements:[{type:"text",name:"PID",title:"Please enter your participant ID here."}],readOnly:false,title:"Welcome to the Pune-MTL   Walkability Survey!",description:"Hello, thanks for agreeing to participate in this research exercise. We appreciate your time on this matter. Upon completion of the exercise, the researcher will verify that you performed the study, and will transfer funds to your account as previously discussed via email.     \n\nThe study consists of a brief demographic information section, and 50-100 images of streetscapes which you will answer questions about. These questions will seek to evaluate how you are perceiving the urban environment. It should take you around 10-15 minutes. The questions will alternate between a set of images from Pune, India and a set of images from Montreal, Quebec.    \n\nPlease note that you can stop the exercise at any time, and that the study is completely confidential. To review the consent form you previously signed, please click here. "},{name:"page2",elements:[{type:"dropdown",name:"gender",title:"Please select your gender",choices:[{value:"item1",text:"Male"},{value:"item2",text:"Female"},{value:"item3",text:"Other"}]},{type:"text",name:"age",title:"Please enter your age",inputType:"number"},{type:"text",name:"field",title:"Please enter your field of study. If not applicable, please enter your occupation."},{type:"rating",name:"familiarity",title:"Please rate your familiarity with the fields of Urban Planning and/or Geography, with 1 being completely unfamiliar and 10 being absolute expertise",rateMax:10},{type:"panel",name:"panel1",elements:[{type:"text",name:"currCity",title:"Current City of Residence"}],title:"Where do you Currently Live?"},{type:"country",name:"currCount",title:"Current Country of Residence"},{type:"panel",name:"panel2",elements:[{type:"dropdown",name:"formEnv",title:"Environment type?",choices:[{value:"item1",text:"Rural"},{value:"item2",text:"Suburban"},{value:"item3",text:"Urban"}],hasOther:true,otherText:"Other"},{type:"text",name:"formCity",title:"City"},{type:"country",name:"formCount",title:"Country",choices:["item1","item2","item3"]},{type:"comment",name:"comment",title:"If you feel that you do not fit well into any of the above categorizations, please use this notespace to elaborate on why (optional)"}],title:"Where did you spend the majority of your formative years (Under 18)?"}],title:"Demographic Information"}]}

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