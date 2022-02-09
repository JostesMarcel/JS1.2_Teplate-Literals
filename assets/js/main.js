let lunatic = "The lunatic is"
let grass = "on the grass"
let and = "and if"
let darkside = "I'll see you on the dark side of the moon"
let head = "in my head"

let songtext = `
Brain Damage Songtext

${lunatic} ${grass}
${lunatic} ${grass}
Remembering games and daisy chains and laughs
Got to keep the loonies on the path

${lunatic} in the hall
${lunatic} are in my hall
The paper holds their folded faces to the floor
And every day the paperboy brings more


${and} the dam breaks open many years too soon
${and} there is no room upon the hill
${and} your head explodes with dark forebodings too
I'll see you on the dark side of the moon

${lunatic} ${head}
${lunatic} ${head}
You raise the blade, you make the change
You rearrange me 'til I'm sane
You lock the door
And throw away the key
There's someone in my head but it's not me

${and} the cloud bursts, thunder in your ear
You shout and no one seems to hear
${and} the band you're in starts playing different tunes
${darkside}`
console.log(songtext)

let out = document.getElementById("output")
out.innerHTML = songtext