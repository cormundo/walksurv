

var knlist = keyNameList;

var modal = document.getElementById('id01');

var username;

function start() {
  username = document.getElementById("user_PID").value;
  alert("your PID is " + username);

  var oneMin = 60 * 60,
      display = document.querySelector('#time');
  startTimer(oneMin, display);

  jsoner();

  while (count > 1);
  modal.style.display = "none";
  document.getElementById("surveyElement").style = "display:visible";"height:100%";
  document.getElementById("left").style = "display:visible";"height:auto";"width:100%";
  document.getElementById("kounter1").style = "display:flex"; "width:50%";"justify:left";
  document.getElementById("kounter2").style = "display:flex";"width:50%";"justify:right";
  document.getElementById("streetscape").style = "display:visible";"height:auto";
  document.getElementById("inst").style = "display:none";
  document.getElementById("btn1").style = "display:none";
};

function startTimer(duration, display) {

    var minTimer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(minTimer / 60)
        seconds = parseInt(minTimer % 60);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--minTimer < 0) {
    visualTimer.classList.remove("height-change");
    minTimer = duration
}

else if (minTimer == 0) {

  alert("You have completed the exercise. Thank you for your participation.")
  document.getElementById("flexo").style = "display:none";
  document.getElementById("final").style = "display:visible";
}

    }, 1000);
}




Survey
  .StylesManager
  .applyTheme("modern");

var knlist_hold =  new Array();

var count = 1;

var knx;

function knxer() {
  if (window.count === 1) {
    return knx = "kn" + ((username*1) + 1);
    console.log("KNX:" + knx);
  } else {
    return knx = ("kn" + ((username*1) + (count*1)));
    console.log("KNX:" + knx);
  }
};

var keyname;

var mapilink;

var catched = "false";

function keynamer() {
  keyname = (knlist[knxer()]);
  keyN2 = keyname;
}


function mapilinker() {
  return mapilink = "https://images.mapillary.com/" + (keyname) + "/thumb-1024.jpg";
}

function imgur() {
  document.getElementById('streetscape').src = mapilinker();
  console.log(mapilink);
}

function usernamer() {
  PID2 = document.getElementById("user_PID").value;
  console.log(PID2);
}

function catcher() {
  if (((username*1) + (count*1)) % 9 === 0){
    catched = "true";
  }else{
    catched = "false";
  }
}

var json;

function jsoner() {
  knxer();
  keynamer();
  mapilinker();
  imgur();
  usernamer();
  catcher();
  console.log(catched);

  json = {
    pages: [{
      name: "page1",
      elements: [{
          type: "text",
          name: "UID",
          visible: false,
          title: "USERID",
          defaultValue: (PID2)
        },
        {
          type: "text",
          name: "Keyn",
          visible: false,
          title: "Key",
          defaultValue: (keyN2)
        },
        {
          type: "text",
          name: "CNT",
          visible: false,
          title: "TIME",
          defaultValue: (count)
        },

        {
         type: "rating",
         name: "RdSafe",
         title: "How safe are pedestrians from motor traffic in this streetscape?",
         isRequired: true,
         maxRateDescription: "Completely safe",
         minRateDescription: "Extremely dangerous"
        },
        {
         type: "rating",
         name: "CmSafe",
         title: "How safe are pedestrians from crime in this streetscape?",
         isRequired: true,
         maxRateDescription: "Completely safe",
         minRateDescription: "High danger of crime"
        },
        {
         type: "rating",
         name: "Navig",
         title: "How easy is it for pedestrians to navigate the built environment in this streetscape?",
         isRequired: true,
         maxRateDescription: "Very easy to navigate",
         minRateDescription: "Very difficult to navigate"

        },
        {
         type: "rating",
         name: "Beaut",
         title: "How beautiful is this streetscape?",
         isRequired: true,
         maxRateDescription: "Extremely nice looking",
         minRateDescription: "Very ugly"

        },
        {
         type: "rating",
         name: "Welcm",
         title: "How welcome would you feel in this section of the street?",
         isRequired: true,
         maxRateDescription: "Entirely comfortable",
         minRateDescription: "Completely unwelcome"
        },
        {
         type: "rating",
         name: "Walkbl",
         title: "How \"walkable\" do you think this section of the street is?",
         isRequired: true,
         minRateDescription: "Very low walkablity",
         maxRateDescription: "Very high walkability"

        },
        {
         type: "rating",
         name: "Catchr",
         visible: (catched),
         title: "Approximately how many cars are in this image?",
          minRateDescription: "Very few cars (1 or Zero)",
          maxRateDescription: "Completely full of cars (5 or more)"
        }
      ]
    }],
    clearInvisibleValues: "none"

  }


  window.survey = new Survey.Model(json);
  survey.surveyPostId = "7b6c29dc-4771-49e1-8403-16591350d697";

  survey
    .onComplete
    .add(function(result) {
      var PID = username
      var results = PID + ":\n" + JSON.stringify(result.data, null, 3);
      window.count++;

      survey.sendResult('3cc0bc85-2253-412d-a56c-cc7b82260de3');
      update();
      console.log(knx);
      console.log(count);
      console.log(keyname);
      console.log(mapilink);
      console.log(catched);
      console.log(username);
      survey.clear();
      survey.render();
    });

  $("#surveyElement").Survey({
    model: survey
  });

}

function update() {
  knxer();
  keynamer();
  mapilinker();
  imgur();
  usernamer();
  jsoner();
  document.getElementById("kounter2").innerHTML = "Images Tagged: " + (count - 1);
}
