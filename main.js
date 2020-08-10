
var customName = document.getElementById('customname')
var randomize = document.querySelector('.randomize')
var story = document.querySelector('.story')
var image = document.getElementById('image')

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}





var storyText = "Bob and :insertq: got to :inserty:, and they looked :insertp: for a few moments, then :insertz:. :insertq: :insertl:. :insertx: :inserth:, :inserto:.";
var insertX =['Indian shady','Big Daddy','Kemo','Terminator Teis'];
var insertY = ['McD', 'beefeater pub', 'Africa', 'A funeral'];
var insertZ = ['spontaneously got an erection', 'ate a cat, and screamed yeehaw bitch', 'got confused and inhaled 200 gram of :insertk:, then crawled away', 'Started spanking a donkey by the nuts', 'started to make out with some siamese twins'];
var insertK = ['toxic gasses', 'penguin farts', 'E-girl bathub water']
var insertQ = ['Karen', 'Beetlejuice', 'Lasse', 'Carl Lee', 'Shrek', 'Teis Diamondhjelm', 'Elon Musk']
var insertL = ['saw the whole thing', 'was not surprised', 'thought about adopting a couple of african men', 'don\'t like proteins']
var insertP = ['confused', 'angry', 'in horror', 'scared', 'with sexual intentions']
var insertO = ['And cows produce milk', 'And the sausage guy pee in the sausage water', 'And remember not to shit where you intend to sleep']
var insertH = ['is a dwarf', 'Don\'t like the idea of two shemales making out', 'Thinks that being mentally unstable is kinda sexy']


function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  var kItem = randomValueFromArray(insertK);
  var qItem = randomValueFromArray(insertQ);
  var lItem = randomValueFromArray(insertL);
  var pItem = randomValueFromArray(insertP);
  var oItem = randomValueFromArray(insertO);
  var hItem = randomValueFromArray(insertH)


  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem).replace(/:insertz:/g, zItem).replace(/:insertk:/g, kItem).replace(/:insertq:/g, qItem).replace(/:insertl:/g, lItem).replace(/:insertp:/g, pItem).replace(/:inserto:/g, oItem).replace(/:inserth:/g, hItem);

  if(customName.value !== '') {
    var name = customName.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Bob/g, name);
  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
