function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookieName() {
  var user = getCookie("userN");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = username;
    if (user != "" && user != null) {
      setCookie("userN", user, 365);
    }
  }
}

function checkCookieCount() {
  var userCNT = getCookie("userC");
  if (userCNT != "") {
    alert("Your Previous Count: " + userCNT);
    // make global count update
    cookieCNT = userCNT;
    alert(cookieCNT);
    return;
  } else {
      count = 1;
      cookieCNT = 1;
      setCookie("userC", count, 365);
    }
  }

  function checkCookieTime() {
    var userTime = getCookie("userT");
    if (userTime != "") {
      alert("Your Previous Time: " + userTime);
      var mLeft = userTime.toString();
      mLeft = mLeft.slice(0,-3);
      console.log(mLeft);
      mLeft = parseInt(mLeft);
      time_in_minutes = mLeft;
      console.log(time_in_minutes);
    } }

function cookieCounter () {
  if (window.count === 2)
	console.log ("countb4add" + count);
   	count = (count*1) + (cookieCNT*1);
	console.log ("cookiecountcount" + count);
	return;
}

function start() {
  username = document.getElementById("user_PID").value;
  alert("your PID is " + username);

  checkCookieName();
  checkCookieCount();
  cookieCounter();
  checkCookieTime();

  run_clock('clockdiv',deadline);

  jsoner();

  modal.style.display = "none";
  document.getElementById("surveyElement").style = "display:visible;height:auto;width:50%";
  document.getElementById("left").style = "display:visible;height:auto;width:50%";
  document.getElementById("kounter1").style = "display:flex;width:100%;justify:left";
  document.getElementById("kounter2").style = "display:flex;width:100%;justify:right";
  document.getElementById("streetscape").style = "display:flex;width:100%";
  document.getElementById("inst").style = "display:none";
  document.getElementById("btn1").style = "display:none";
};


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

var timeinterval;
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = t.minutes+':'+t.seconds;
		if(t.total<=0){
      clearInterval(timeinterval);
      alert("You have completed the exercise. Thank you for your participation.");
      document.getElementById("flexo").style = "display:none";
      document.getElementById("final").style = "display:visible";
    }
	}
	update_clock(); // run function once at first to avoid delay
	timeinterval = setInterval(update_clock,1000);
}


var paused = false; // is the clock paused?
var time_left; // time left on the clock when paused

function pause_clock(){
	if(!paused){
		paused = true;
		clearInterval(timeinterval); // stop the clock
		time_left = time_remaining(deadline).total; // preserve remaining time
    document.getElementById('pause').style = "background-color:#B31A39; padding:10px; font-size:15px";
     document.getElementById("pause").innerHTML = "TIMER IS PAUSED";
    document.getElementById("kounter1").style = "display:flex;width:100%;justify:left;background-color: #B31A39";
    document.getElementById("kounter2").style = "display:flex;width:100%;justify:right;background-color: #B31A39";
    document.getElementById('resume').style = "background-color:#70CFBC; padding:10px; font-size:15px; display:visible"
	}
}

function resume_clock(){
	if(paused){
		paused = false;

		// update the deadline to preserve the amount of time remaining
		deadline = new Date(Date.parse(new Date()) + time_left);

		// start the clock
		run_clock('clockdiv',deadline);

    document.getElementById('pause').style = "background-color:#1ab394; padding:10px; font-size:15px";
    document.getElementById('resume').style = "background-color:#1ab394; padding:10px; font-size:15px; display:none";
    document.getElementById("pause").innerHTML = "PAUSE TIMER";
    document.getElementById("kounter1").style = "display:flex;width:100%;justify:left;background-color: #1ab394";
    document.getElementById("kounter2").style = "display:flex;width:100%;justify:right;background-color: #1ab394";
	}
}

// handle pause and resume button clicks
document.getElementById('pause').onclick = pause_clock;
document.getElementById('resume').onclick = resume_clock;


///
Survey
  .StylesManager
  .applyTheme("modern");

function knxer() {
  if (window.count === 1) {
    return knx = "kn" + ((username*1) + 1);
    console.log("KNX:" + knx);
  } else {
    return knx = ("kn" + ((username*1) + (count*1)));
    console.log("KNX:" + knx);
  }
};

function keynamer() {
  keyname = (knlist[knxer()]);
  keyN2 = keyname;
  PID2 = document.getElementById("user_PID").value;
}


function mapilinker() {
  return mapilink = "https://images.mapillary.com/" + (keyname) + "/thumb-1024.jpg";
}

function imgur() {
  document.getElementById('streetscape').src = mapilinker();
}


function catcher() {
  if (((username*1) + (count*1)) % 9 === 0){
    catched = "true";
  }else{
    catched = "false";
  }
}

function jsoner() {
  knxer();
  keynamer();
  mapilinker();
  imgur();
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

      survey.clear();
      survey.render();
    });

  $("#surveyElement").Survey({
    model: survey
  });

}

function update() {
  setCookie("userC", count, 365);
  time_up = document.getElementById("clockdiv").innerHTML;
  setCookie("userT", time_up, 365);
  jsoner();
  document.getElementById("kounter2").innerHTML = "Images Tagged: " + (count - 1);
}

var time_up;

var cookieCNT;

var knlist_hold =  new Array();

var count = 1;

var knx;

var knlist = keyNameList;

var modal = document.getElementById('id01');

var username;

var keyname;

var mapilink;

var catched = "false";

var json;

var time_in_minutes = 60;

var current_time = Date.parse(new Date());

var deadline = new Date(current_time + time_in_minutes*60*1000);
