(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-97433788-1', 'auto');
ga('send', 'pageview');

//Answers to be shuffled
//Use ids to determine whether answer is checked for scoring purposes
//shuffle function adds these snippets to the DOM
var initialQ1 = ['id="libAnswer1" name="initialQ1" onclick=next()>&#9Individuals should be left to make choices by their own lights.','id="conAnswer1" name="initialQ1" onclick=next()>&#9Tradition often represents accumulated wisdom.','id="proAnswer1" name="initialQ1" onclick=next()>&#9Individuals create, but communities create the individuals.'];
var initialQ2 = ['id="libAnswer2" name="initialQ2" onclick=next()>&#9A bill that scales back zoning laws and occupational licensing, lowers the sales tax, and decriminalizes marijuana.','id="conAnswer2" name="initialQ2" onclick=next()>&#9A bill that cuts income taxes on small businesses, protects religious freedom of conscience to opt out of government mandates, and increases the budget for immigration enforcement.','id="proAnswer2" name="initialQ2" onclick=next()>&#9A bill that provides funding for health clinics which provide free birth control, provides additional funding for community colleges, and expands background check requirements for gun purchases.'];
var initialQ3 = ['id="libAnswer3" name="initialQ3" onclick=next()>&#9To provide a framework for competitive markets and civil liberties--it should not pick economic winners and losers or sanction lifestyle choices.','id="conAnswer3" name="initialQ3" onclick=next()>&#9To preemptively stop foreign attacks and crime, and to foster values such as decency, personal responsibility, and entrepreneurship.','id="proAnswer3" name="initialQ3" onclick=next()>&#9To provide a social safety net, to protect vulnerable people from unfair treatment, and to safeguard individual rights.'];
var initialQ4 = ['id="libAnswer4" name="initialQ4" onclick=next()>&#9Some problems are unavoidable and excessive intervention can risk even more harmful unintended consequences.','id="conAnswer4" name="initialQ4" onclick=next()>&#9It is important to provide strong incentives--bad behavior should be punished, but good people deserve support.','id="proAnswer4" name="initialQ4" onclick=next()>&#9It is irresponsible to ignore the suffering of others when the cost of helping is less than the amount of suffering that would be alleviated.'];
var answerIds = ['libAnswer1', 'conAnswer1', 'proAnswer1', 'libAnswer2', 'conAnswer2', 'proAnswer2','libAnswer3', 'conAnswer3', 'proAnswer3','libAnswer4', 'conAnswer4', 'proAnswer4']
var startQ1 = ["Which do you most agree with?"];
var startQ2 = ["Which local legislation would you most likely support?"];
var startQ3 = ["What best reflects the proper role of government, in addition to providing military defense and policing?"];
var startQ4 = ["What best reflects your view of how major social problems, such as unemployment, violent crime, and inadequate healthcare, should be approached by the government?"];
//for intitial questions
var locations = ['location1','location2','location3','location4'];
var questions = [startQ1,startQ2,startQ3,startQ4];
var questionIds = ['startQ1','startQ2','startQ3','startQ4'];
var answers = [initialQ1,initialQ2,initialQ3,initialQ4];
//for added questions
var locationsNew = ['newLocation1','newLocation2','newLocation3','newLocation4','newLocation5','newLocation6','newLocation7','newLocation8']
var questionIdsNew = ['addedQ1','addedQ2','addedQ3','addedQ4','addedQ5','addedQ6','addedQ7'];
//Added libertarian Q&A
var libQuestion1 = ['Which statement do you most agree with?']
var libQuestion2 = ['Which statement do you most agree with?']
var libQuestion3 = ['"The state should maintain significant restrictions on the number of people allowed to migrate into the country."']
var libQuestion4 = ['"Property and sales taxes should largely be replaced with taxes on the unimproved location value of land."']
var libQuestion5 = ['"Government prohibition of abortion is a valid protection of fetuses from aggression."']
var libQuestion6 = ['Which statement do you most agree with?']


var libChoices1 = ['id="minSome" name="a1" >&#9The state should provide defense, policing, and judiciary services, and do nothing else.','id="minNone" name="a1">&#9There should be no state--private competitors can provide security services, judicial systems, and currencies.','id="minNo" name="a1">&#9The state should be smaller in size and scope than it is currently.']
var libChoices2 = ['id="ubiYes" name="a2">&#9The state should provide a minimal social safety net for everyone, and a universal basic income is the most efficient method for doing so.','id="ubiNo" name="a2">&#9Private charity and private insurance are the best methods for addressing economic distress rather than government programs.','id="ubiMaybe" name="a2">&#9The state should provide support for people who are unable to help themselves, such as people with severe disabilities and impoverished children.']
var libChoices3 = ['id="immigrationNo" name="a3">&#9Agree','id="immigrationYes" name="a3">&#9Disagree','id="immigrationMaybe" name="a3">&#9Neutral']
var libChoices4 = ['id="lvtYes" name="a5">&#9Agree','id="lvtNo" name="a5">&#9Disagree','name="a5">&#9Partially agree, partially disagree']
var libChoices5 = ['id="abortNo" name="a4">&#9Agree','id="abortYes" name="a4">&#9Disagree','name="a4">&#9Neutral']
var libChoices6 = ['id="greenYes"name="a6">&#9Pollution of natural resources that harms numerous third parties can be more efficiently deterred through taxation of the pollutant instead of direct government regulation.','id="greenNo" name="a6">&#9Clear private property rights and private rights of action for harm are sufficient to fight pollution without other government involvement.','id="greenMaybe" name="a6">&#9Some environmental regulation of pollution is necessary when it is tailored to prevent harm to third parties.']

//Added libertarian Q&A collection
var libQuestionsNew = [libQuestion1,libQuestion2,libQuestion3,libQuestion4,libQuestion5,libQuestion6];
var libAnswersNew = [libChoices1, libChoices2, libChoices3, libChoices4,libChoices5,libChoices6];
//Added conservative Q&A
var conQuestion1 = ['Which statement do you most agree with?']
var conQuestion2 = ['"There should still be an significant social safty net for the elderly and poor citizens with families, who are actively seeking work."']
var conQuestion3 = ['Which statement do you most agree with?']
var conQuestion4 = ['Which statement do you most agree with?']
var conQuestion5 = ['"Tariffs and other trade barriers are appropriate for protecting jobs and industries from low-wage labor abroad."']
var conQuestion6 = ['Which statement do you most agree with?']
var conQuestion7 = ['"Separation of Church and state has gone too far, and undermines the moral and social importance of religion."']

var conChoices1 = ['id="militaryYes" name="a1">&#9Strong alliances and military actions abroad are sometimes necessary to provide security against hostile foreign actors and topple dangerous dictatorships.','id="militaryNo" name="a1">&#9We should not go to war unless we are actually attacked.','name="a1">&#9Neutral']
var conChoices2 = ['id="safetyYes" name="a2" >&#9Agree','id="safetyNo" name="a2">&#9Disagree','name="a2" >&#9Partially agree, partially disagree']
var conChoices3 = ['id="immigrationNo" name="a3" >&#9Both illegal immigration and legal immigration should be reduced, and limited to skilled workers who can culturally assimilate.','id="immigrationMarket" name="a3" >&#9Immigration should be controlled, but market demand for labor should drive immigration policy.','id="immigrationSocial" name="a3" >&#9Immigration should be controlled, but immigration policy should generally favor people with existing family ties to the US.']
var conChoices4 = ['id="breaksYes" name="a4">&#9Tax breaks and public initiatives should be used to encourage marriage, traditional values, and faith-based organizations.','id="breaksNo" name="a4" >&#9The government should refrain from social engingeering and preferencing certain groups.','name="a4" >&#9Neutral']
var conChoices5 = ['id="tariffsYes" name="a5">&#9Agree','id="tariffsNo" name="a5">&#9Disagree--tariffs harm consumers and global prosperity by increasing the price of goods.','name="a5"">&#9Neutral']
var conChoices6 = ['id="centralYes" name="a6">&#9Having a strong and uncompromising President is the best way to achieve political goals.','id="centralNo" name="a6">&#9A decentralized government with more state control and a weaker executive branch is the best way to achieve political goals.','name="a6">&#9Neutral.']
var conChoices7 = ['id="reliYes" name="a7" >&#9Agree','id="reliNo" name="a7">&#9Disagree','name="a7" >&#9Partially agree, partially disagree']
//Added conservative Q&A collection
var conQuestionsNew = [conQuestion1,conQuestion2,conQuestion3,conQuestion4,conQuestion5,conQuestion6,conQuestion7];
var conAnswersNew = [conChoices1, conChoices2, conChoices3, conChoices4,conChoices5,conChoices6,conChoices7];
//Added progressive Q&A
var proQuestion1 = ['Which statement do you most agree with?']
var proQuestion2 = ['Which statement do you most agree with?']
var proQuestion3 = ["More senior government officials should be appointed for being respected experts in their field instead of being elected."]
var proQuestion4 = ["Administrators and employers should be required to ensure that universities and workplaces are representative of all gender, religious, racial, and cultural identities."]
var proQuestion5 = ["Tariffs are an appropriate measure for protecting existing jobs from low-wage labor abroad."]
var proQuestion6 = ['Which statement do you most agree with?']
var proQuestion7 = ['Which statement do you most agree with?']

var proChoices1 = ['id="socialJustice" name="a1" >&#9Social hierarchy and discrimination are the root causes of most wealth inequality.','id="EconJustice" name="a1">&#9Wealth inequality is the root cause of most social inequality.','name="a1">&#9Neutral']
var proChoices2 = ['id="private" name="a2" >&#9Most of the economy should remain private, but there should be a social safety net.','id="public" name="a2">&#9Most services and industries should be nationalized in order to redistribute wealth.','id="mixed" name="a2">&#9More of the economy should be in the public sector but it should remain a mixed public-private economy.']
var proChoices3 = ['id="technoYes" name="a3" >&#9Agree','id="technoNo" name="a3">&#9Disagree','name="a3">&#9Neutral']
var proChoices4 = ['id="adminYes" name="a4" >&#9Agree','id="adminNo" name="a4">&#9Disagree','name="a4">&#9Partially agree, partially disagree']
var proChoices5 = ['id="tariffsYes" name="a5" >&#9Agree','id="tariffsNo" name="a5">&#9Disagree--tariffs harm consumers and global prosperity by increasing the price of goods.','name="a5">&#9Neutral']
var proChoices6 = ['id="universal" name="a6" >&#9The government should provide universal healthcare and college education.','id="subsidize" name="a6">&#9The government should subsidize healthcare and college education for the poor.','id="UBI" name="a6">&#9Healthcare and education should be privatized but the government should provide a small universal basic income.']
var proChoices7 = ['id="hawk" name="a7" >&#9Military actions abroad are often necessary to provide preemtive security against terrorism and stop human rights abuses.','id="dove" name="a7">&#9We should not go to war unless we are actually attacked.','name="a7">&#9Neutral or neither']

//Added progressive Q&A collection
var proQuestionsNew = [proQuestion1,proQuestion2,proQuestion3,proQuestion4,proQuestion5,proQuestion6,proQuestion7];
var proAnswersNew = [proChoices1, proChoices2, proChoices3, proChoices4,proChoices5,proChoices6,proChoices7];



//Tiebreakers con/lib
var locationTie = ['tiebreakerLocation'];
var conLibTieQ = ['"It should be legal for a consenting adult to sell a kidney."'];
var clQuestion = [conLibTieQ];
var clTieQuestionId = ["tieQuestion1"];
//onclick, trigger tiebreaker function
var clTieAnswer = ['id="conYes" name="b1" onclick=tiebreaker(); add()>&#9Disagree.','id="libYes" name="b1" onclick=tiebreaker(); add()>&#9Agree.'];
var clAnswers = [clTieAnswer];

//Tiebreakers lib/pro
var locationTie = ['tiebreakerLocation'];
var libProTieQ = ['"The minimum wage should be enough to raise a family on in my area."'];
var lpQuestion = [libProTieQ];
var lpTieQuestionId = ["tieQuestion1"];
//onclick, trigger tiebreaker function
var lpTieAnswer = ['id="libYes" name="b1" onclick=tiebreaker(); add()>&#9Disagree.','id="proYes" name="b1" onclick=tiebreaker(); add()>&#9Agree.'];
var lpAnswers = [lpTieAnswer];

//Tiebreakers pro/con
var locationTie = ['tiebreakerLocation'];
var proConTieQ = ['Which statement do you most agree with?'];
var pcQuestion = [proConTieQ];
var pcTieQuestionId = ["tieQuestion1"];
//onclick of tiebreaker answer, trigger tiebreaker function
var pcTieAnswer = ['id="conYes" name="b1" onclick=tiebreaker(); add()>&#9Abortion should be illegal in all or most circumstances.','id="proYes" name="b1" onclick=tiebreaker(); add()>&#9Abortion should be legal in all or most circumstances.'];
var pcAnswers = [pcTieAnswer];

//Shuffles arrays
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle
while (0 !== currentIndex) {

  // Pick a remaining element
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}

//Write questions from array to DOM
function write_questions(DOMlocation, questionId, content){
var letters = "";

for (var i = 0; i < content.length; i++ ) {
  letters += "<h2>"  + content[i] + "</h2><ul id=" + questionId + "></ul><br>";
}
document.getElementById(DOMlocation).innerHTML = letters;
}

//Write answers from arrays to DOM with associated questions
function write_answers(questionId, content, idList){
var letters = "";
for (var i = 0; i < content.length; i++ ) {
    letters += "<label><input type='radio' class='choices'"  + content[i] + "</label><br><br>";
}
document.getElementById(questionId).innerHTML = letters;
}

//Write initial questions to the DOM using shuffle, write_questions, and write_answers
function go(locations, questions, questionIds, answers){
for (var i = 0; i < answers.length; i++ ) {
  shuffle(answers[i]);
  write_questions(locations[i], questionIds[i], questions[i]);
  write_answers(questionIds[i], answers[i])
}
}

//selection checking function
function check(element){
  if(document.getElementById(element).checked) return true
  else return false
}
//Libertarian grade function
function gradeLib(){
let output = '';
document.getElementById('results').innerHTML = output;
if(check('ubiYes')){
  output = output + "<a href='https://en.wikipedia.org/wiki/Left-libertarianism' target='_blank'> bleeding heart</a> ";
}
if(check('greenYes') && check('lvtYes')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Georgism' target='_blank'> georgist</a> ";
}
if(check('immigrationNo') && check('abortNo')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Fusionism' target='_blank'> conservatarian</a> ";
}
if((check('greenYes') || check('greenMaybe')) && check('ubiMaybe') && check('minNo') && check('immigrationYes') || check('immigrationMaybe')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Classical_liberalism' target='_blank'> classical liberal</a> ";
}
if(check('ubiNo') && check('minSome') && check('immigrationYes')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Minarchism' target='_blank'> minarchist</a> ";
}
if(check('ubiNo') && check('minNone') && check('immigrationYes') && check('abortYes') && check('lvtNo') && check('greenNo')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Anarcho-capitalism' target='_blank'> anarcho-capitalist</a> ";
}
if(output.includes("classical liberal") || output.includes("conservatarian") || output.includes("minarchist") || output.includes("anarcho-capitalist")){
  document.getElementById('results').innerHTML = output;
}
else {
  output = output + "<a href='https://en.wikipedia.org/wiki/Libertarianism' target='_blank'> libertarian</a> "
  document.getElementById('results').innerHTML = output;
}
}
//Conservative grade function
function gradeCon(){
let output = '';
document.getElementById('results').innerHTML = output;
if(check('safetyYes') && check('breaksYes') && check('immigrationSocial')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Compassionate_conservatism' target='_blank'> compassionate</a> ";
}
if(check('breaksYes') && check('reliYes')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Christian_right' target='_blank'> religious</a> ";
}
if(check('immigrationNo') && check('tariffsYes') && (check('safetyYes') || check('militaryYes'))){
  output = output + "<a href='https://en.wikipedia.org/wiki/Populism' target='_blank'> populist</a> ";
}
if(check('militaryNo') && check('tariffsNo') && (check('immigrationMarket') || check('breaksNo'))) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Libertarian_conservatism' target='_blank'> libertarian</a> ";
}
if(check('immigrationNo') && check('centralNo') && (check('militaryNo') || check('tariffsYes'))) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Paleoconservatism' target='_blank'> paleoconservative</a> ";
}
if(check('militaryYes') && check('centralYes')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Neoconservatism' target='_blank'> neoconservative</a> ";
}
if(output.includes("paleoconservative") || output.includes("neoconservative")){
  document.getElementById('results').innerHTML = output;
}
else {
  output = output + "<a href='https://en.wikipedia.org/wiki/Conservatism' target='_blank'> conservative</a> "
  document.getElementById('results').innerHTML = output;
}
}
//Progressive grade function
function gradePro(){
let output = '';
document.getElementById('results').innerHTML = output;
if(check('hawk')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/War_hawk' target='_blank'> hawkish</a> ";
}
if(check('socialJustice') && check('adminYes')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Social_justice' target='_blank'> social-justice</a> ";
}
if(check('technoNo') && check('tariffsYes') && check('universal')){
  output = output + "<a href='https://en.wikipedia.org/wiki/Populism' target='_blank'> populist</a> ";
}
if(check('public') && check('universal')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Socialism' target='_blank'> socialist</a> ";
}
if(check('private') && check('adminNo') && check('tariffsNo') && check('UBI')){
  output = output + "<a href='https://en.wikipedia.org/wiki/Left-libertarianism' target='_blank'> bleeding heart libertarian</a> ";
}
if((check('private') || check('mixed')) && check('subsidize') && check('tariffsNo')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Third_Way' target='_blank'> third way</a> ";
}
if(check('mixed') && check('universal')) {
  output = output + "<a href='https://en.wikipedia.org/wiki/Social_democracy' target='_blank'> social democrat</a> ";
}
if(output.includes("social democrat") || output.includes("socialist") || output.includes("bleeding heart libertarian")){
  document.getElementById('results').innerHTML = output;
}
else {
  output = output + "<a href='https://en.wikipedia.org/wiki/Progressivism' target='_blank'> progressive</a> "
  document.getElementById('results').innerHTML = output;
}
}

function next(){
let output = '';
document.getElementById('tiebreakerLocation').innerHTML = output;
//if con/lib tie
if((conAnswer1.checked + conAnswer2.checked + conAnswer3.checked + conAnswer4.checked > 1) && (libAnswer1.checked + libAnswer2.checked + libAnswer3.checked + libAnswer4.checked > 1)){
  //add tiebreaker Q
          go(locationTie, clQuestion, clTieQuestionId, clAnswers);
}
//if pro/lib tie
if((proAnswer1.checked + proAnswer2.checked + proAnswer3.checked + proAnswer4.checked > 1) && (libAnswer1.checked + libAnswer2.checked + libAnswer3.checked + libAnswer4.checked > 1)){
  //add tiebreaker Q
          go(locationTie, lpQuestion, lpTieQuestionId, lpAnswers);
}
//if con/pro tie
if((conAnswer1.checked + conAnswer2.checked + conAnswer3.checked + conAnswer4.checked > 1) && (proAnswer1.checked + proAnswer2.checked + proAnswer3.checked + proAnswer4.checked > 1)){
  //add tiebreaker Q
          go(locationTie, pcQuestion, pcTieQuestionId, pcAnswers);
}
add()
//if no tie, skip to category questions
}

function tiebreaker(){
if(proAnswer1.checked + proAnswer2.checked + proAnswer3.checked + proAnswer4.checked > 1){
  if(proYes.checked){
  //add pro q & a to the DOM
  go(locationsNew, proQuestionsNew, questionIdsNew, proAnswersNew);
  //add submit button with proper grade function
  var button = "<input id='enter' type='submit' value='Calculate' onclick='gradePro()'>"
  document.getElementById('submitButton').innerHTML = button;
}
} if(conAnswer1.checked + conAnswer2.checked + conAnswer3.checked + conAnswer4.checked > 1){
  if(conYes.checked){
    //add con q & a to the DOM
    go(locationsNew, conQuestionsNew, questionIdsNew, conAnswersNew);
    //add submit button with proper grade function
    var button = "<input id='enter' type='submit' value='Calculate' onclick='gradeCon()'>"
    document.getElementById('submitButton').innerHTML = button;
    }
} if(libAnswer1.checked + libAnswer2.checked + libAnswer3.checked + libAnswer4.checked > 1){
    if(libYes.checked){
      //add lib q & a to the DOM
      go(locationsNew, libQuestionsNew, questionIdsNew, libAnswersNew);
      //add submit button with proper grade function
      var button = "<input id='enter' type='submit' value='Calculate' onclick='gradeLib()'>"
      document.getElementById('submitButton').innerHTML = button;
  }
}
}

//Gets radio buttons, scores determined based on checked buttons for initial questions
function add(){
var conAnswer1 = document.getElementById('conAnswer1');
var conAnswer2 = document.getElementById('conAnswer2');
var conAnswer3 = document.getElementById('conAnswer3');
var conAnswer4 = document.getElementById('conAnswer4');
//
var libAnswer1 = document.getElementById('libAnswer1');
var libAnswer2 = document.getElementById('libAnswer2');
var libAnswer3 = document.getElementById('libAnswer3');
var libAnswer4 = document.getElementById('libAnswer4');
//
var proAnswer1 = document.getElementById('proAnswer1');
var proAnswer2 = document.getElementById('proAnswer2');
var proAnswer3 = document.getElementById('proAnswer3');
var proAnswer4 = document.getElementById('proAnswer4');
//determine whether all the initial questions are checked
if((conAnswer1.checked || libAnswer1.checked || proAnswer1.checked) && (conAnswer2.checked || libAnswer2.checked || proAnswer2.checked) && (conAnswer3.checked || libAnswer3.checked || proAnswer3.checked) && (conAnswer4.checked || libAnswer4.checked || proAnswer4.checked)){
  //use nested if statements to determine which questions to show based on initial answers
    if((conAnswer1.checked && (conAnswer2.checked || conAnswer3.checked || conAnswer4.checked)) || (conAnswer2.checked && (conAnswer1.checked || conAnswer3.checked || conAnswer4.checked)) || (conAnswer3.checked && (conAnswer1.checked || conAnswer2.checked || conAnswer4.checked))){
        //add con q & a to the DOM
        go(locationsNew, conQuestionsNew, questionIdsNew, conAnswersNew);
        //add submit button with proper grade function
        var button = "<input class='enter' type='submit' value='Calculate' onclick='gradeCon()'>"
        document.getElementById('submitButton').innerHTML = button;
    } else if((proAnswer1.checked && (proAnswer2.checked || proAnswer3.checked || proAnswer4.checked)) || (proAnswer2.checked && (proAnswer1.checked || proAnswer3.checked || proAnswer4.checked)) || (proAnswer3.checked && (proAnswer1.checked || proAnswer2.checked || proAnswer4.checked))){
      //add pro q & a to the DOM
      go(locationsNew, proQuestionsNew, questionIdsNew, proAnswersNew);
      //add submit button with proper grade function
      var button = "<input class='enter' type='submit' value='Calculate' onclick='gradePro()'>"
      document.getElementById('submitButton').innerHTML = button;
    } else if((libAnswer1.checked && (libAnswer2.checked || libAnswer3.checked || libAnswer4.checked)) || (libAnswer2.checked && (libAnswer1.checked || libAnswer3.checked || libAnswer4.checked)) || (libAnswer3.checked && (libAnswer1.checked || libAnswer2.checked || libAnswer4.checked))){
        //add lib q & a to the DOM
        go(locationsNew, libQuestionsNew, questionIdsNew, libAnswersNew);
        //add submit button with proper grade function
        var button = "<input class='enter' type='submit' value='Calculate' onclick='gradeLib()'>"
        document.getElementById('submitButton').innerHTML = button;
      }
}
}
function updatePercent(){
  var allChoices = document.getElementsByClassName('choices');
  var allSections = document.getElementsByClassName('section');
  var count = 0;
  for(var i = 0; i < allChoices.length; i++){
    if(allChoices[i].checked){
      count = count + 1;
    }
  }
  var displayPercent = Math.round((count / (allChoices.length/3)) * 100);
  if(allChoices.length > 20){
    if(displayPercent > 100){
        document.getElementById('percent').innerHTML = '100% complete';
    } else{
  document.getElementById('percent').innerHTML = displayPercent + '% complete';
}
}
}
