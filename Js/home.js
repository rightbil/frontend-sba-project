// this will load the table while page loads
window.addEventListener("load", listOfCourses);

// list of courses at per scholas
const arrayOfCourses = [
  ["Joe Alexander","1986","American-Israeli basketball player in the Israel Basketball Premier League"],
        ["Brady Anderson","1964","baseball player[81]"],
        ["Akil Baddoo"," 1998","baseball player for the Detroit Tigers[82]"],
        ["Jonathan Banks","1947","actor[83]"],
        ["Alex Bazzie","1990","football player[84]"],
        ["Carl Bernstein","1944","journalist,writer[85]"],
        ["Keter Betts","1928","musician[86]"],
        ["Lewis Black","1948","comedian[87]"],
        ["Brandon Broady","1986","comedian , television host[88]"],
        ["Bill Callahan","1966","musician[89]"],
        ["Rachel Carson","1907","author of Silent Spring[90]"],
        ["Crystal Chappell","1965","actress[91]"],
        ["Dave Chappelle","1973","comedian[92]"],
        ["Connie Chung","1946","news presenter[93]"],
        ["Gaelan Connel","1989","actor , musician[94]"],
        ["Chuck Davidson","1961","rabbi"],
        ["Tommy Davidson","1963","comedian , actor[95]"],
        ["Marc Davis","1990","NASCAR driver[96]"],
        ["Dominique Dawes","1976","gymnast , 4-time Olympic medalist[97]"],
        ["Cara DeLizia","1984","actress[98]"],
        ["Matt Drudge","1966","internet news editor[99]"],
        ["Michael Ealy","1973","actor[100]"],
        ["Wayne Federman","1959","comedian , actor ,writer[101]"],
        ["Charles Fefferman","1949","mathematician[102]"],
        ["David Feldberg","1977"," professional disc golfer[103]"],
        ["Martin Felsen","1968"," architect[104]"],
        ["Steve Francis","","former basketball player"],
        ["Jason Freeny","1970"," sculptor , toy designer[105]"],
        ["Kimmy Gatewood","","actress , writer and singer[106]"],
        ["Emily Gould","1981"," author[107]"],
        ["Jerian Grant","1992"," basketball player for the Washington Wizards"],
        ["Josh Hart","1995","basketball player for the New Orleans pelicans; first-round selection in 2017 NBA draft"],
        ["Goldie Hawn","1945"," actress , dancer , producer , and singer"],
        ["Keith Howland","1964"," musician (Chicago)[108]"],
        ["Frank Jackson ","1998"," NBA player"],
        ["Amir Mohamed el Khalifa","", " better known by his stage name Oddisee , is an American rapper"],
        ["Humayun Khan","1976", "U.S. Army Officer of Muslim and Pakistani descent , posthumous recipient of the Purple Heart and the Bronze Star Medal."],
        ["Rick Leventhal","1960"," journalist"],
        ["Elliot Levine","1963)"," musician (Heatwave)[109]"],
        ["Dov Lipman","1971"," member of the Knesset.[110]"],
        ["Matt Maloney","1971"," former basketball player"],
        ["Roger Mason Jr.","1980"," former basketball player"],
        ["Joey Mbu","1993"," football player[111]"],
        ["Victor Oladipo","1992"," basketball player for the Houston Rockets[112]"],
        ["George Pelecanos","1957"," author[113]"],
        ["Al Quie","1923"," former Governor of Minnesota (1979–1983)[114]"],
        ["Gretchen Quie","1927"," artist and former First Lady of Minnesota (1979–1983)[114]"],
        ["J. Robbins","1967"," musician (Jawbox"," Office of Future Plans[115]"],
        ["Nora Roberts","1950"," novelist[116]"],
        ["Daniel Snyder","1964"," businessperson and owner of the Washington Commanders"],
        ["Harold Solomon","1952"," tennis player ranked No. 5 in the world[117]"],
        ["Norman Solomon","  1951"," journalist , political candidate[118]"],
        ["Ben Stein","1944"," commentator"," humorist"," actor[119]"],
        ["Rebecca Sugar","1987"," artist , composer , and director[120]"],
        ["Daryush Valizadeh","1979"," neomasculinity writer"],
        ["Thalia Zedek","1961","musician (Live Skull , Come)[121]"]
];

// variable to hold table and its header with bootstrap class name 'table'
let tableOfData =
  "<table id =tblId class=table > " +
  "<th class= css-theader width=1%> S/n    </th>" +
  "<th class= css-theader width=10%> Name</th>" +
  "<th class= css-theader width=5%> Year   </th>" +
  "<th class= css-theader width=10%> Report-Date</th>" +
  "<th class= css-theader> Action </th>"+
  "<th class= css-theader> Description </th>"

// function to generate the table of rows with data from arrayOfCourses
// Used index +1 as row number
// formatted date form formattedToday function

function listOfCourses() {
  //debugger;
  const displayArea = document.getElementById("js-known-people");
  arrayOfCourses.forEach((course, index) => {
    let courseId = index;
    tableOfData +=
      "<tr class= css-odd-rows ><td>" +
      (index + 1) +
      "</td><td id=" +
      courseId +
      ">" +
      course[0] +
      "</td><td>" +
      course[1] +
      "</td><td>" +
      formattedToday() +   
      "</td><td><button data-courseid=" +
      courseId +
      "onClick=test()>Complete</button></td><td>"+
      course[2]+
      "</td></tr>";
  });
  displayArea.innerHTML = tableOfData + "</table>";
}

function formattedToday() {
  const date = new Date();
  return (
    date.getMonth() +
    1 +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    "-" +
    date.getFullYear()
  );
}
function test() {
  alert("Thankyou, you completed this course" + e.target.value);
}
