Survey
     .StylesManager
     .applyTheme("modern");

var knlist = {
kn10:"2L1qvq6Tg6rMhEwNshr6dQ",
kn11:"2N_Cl_Gl5fX8_TdLgHP3rQ",
kn12:"2RbpjbhM3_EfzejfPgzwAw",
kn13:"2rP8y_ub_alGrzAK_aZrEg",
kn14:"2S8O9KBwxRlvtZX6kjyS0y",
kn15:"2Ua5EnPVDwd7LGq6UbT2bQ",
kn16:"3_17fNbyu2Yw8ozPx8BmkA",
kn17:"3LB0GSXXVadBlCMhSth3IA",
kn18:"48JvNwKSgvnWT8nqzWtE3Q",
kn19:"4CP5JE_mlMMzjvDMMgXncg",
}

var count = 10;

var knx;

function knxer(){
  if (window.count === 10) {
  return knx = "kn10";
  } else {
  return knx = ("kn" + count);
  }};

var keyname;

var mapilink;

function keynamer() {
		keyname = (knlist[knxer()]);
}


function mapilinker(){
	return mapilink = "https://images.mapillary.com/" + (keyname) + "/thumb-1024.jpg";
}

function imgur(){
	document.getElementById('streetscape').src= mapilinker();
  console.log (mapilink);
}

var json;

function jsoner (){
		knxer();
		keynamer();
		mapilinker();
    imgur();
		json = {
pages: [
{
name: "page1",
elements: [
{
type: "html",
name: (keyname),
visible: false,
html: (keyname)
},
{
type: "rating",
name: "Walkability",
title: "How walkable does this look to you"
},
{
type: "rating",
name: "Saftey",
title: "How safe does this look to you"
},
{
type: "rating",
name: "Comfortability",
title: "How comfortable does this look to you"
}
]
}
]
}
}

jsoner();


function update(){
      knxer();
      keynamer();
      mapilinker();
      imgur();
      jsoner();
}




     window.survey = new Survey.Model(json);

         survey
             .onComplete
             .add(function (result) {
                 var PID = "USERID"
                 var results = PID + "|||" + (keyname) + ":\n" + JSON.stringify(result.data, null, 3) + (count) ;
                 document
                     .querySelector('#surveyResult')
                     .textContent = results;
             window.count ++;
             update();
             console.log(knx);
             console.log(count);
             console.log(keyname);
             console.log(mapilink);
             survey.clear();
             survey.render();
             });

         $("#surveyElement").Survey({model: survey});
