const timeOfDay ='windy afternoon';
const mathResult = '13 - 10';
const isAfternoon = timeOfDay.includes('afternoon');
const ghost = {
    apperance: 'flaming eyes',
    action: 'jumped howling',
    isSpooky: true
};



const story = `On a ${timeOfDay}, I ventured into the haunted house. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its ${ghost.apperance} piercing through the darkness. My heart raced as it ${ghost.action} toward me. Did you know ${mathResult} equals 3? Spooky, right?`

document.getElementById("madlibs-output").textContent = story;

console.log(story);
