const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
randomize.addEventListener('click', result);

function result() {
  let newStory = 'It was 94 fahrenheit outside, so xItem went for a walk. When they got to yItem, they stared in horror for a few moments, then zItem. Bob saw the whole thing, but was not surprised — xItem weighs 300 pounds, and it was a hot day.';
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll('xItem',xItem);
  newStory = newStory.replaceAll('yItem',yItem);
  newStory = newStory.replaceAll('zItem',zItem);
  //newStory = browserType.replace('xItem',xItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14 + ' stone');
    const temperature =  Math.round((94 - 32) * (5/9) + 'centigrade');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}