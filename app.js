const writeButton = document.getElementById('write')

const compileImput = () => {
  let mary = document.getElementById('mary').value
  let little = document.getElementById('little').value
  let lamb = document.getElementById('lamb').value
  let fleece = document.getElementById('fleece').value
  let white = document.getElementById('white').value
  let snow = document.getElementById('snow').value
  let school = document.getElementById('school').value
  let children = document.getElementById('children').value
  let laugh = document.getElementById('laugh').value
  let play = document.getElementById('play').value
  let teacher = document.getElementById('teacher').value
  let lingered = document.getElementById('lingered').value
  let waited = document.getElementById('waited').value
  let appear = document.getElementById('appear').value
  let love = document.getElementById('love').value
  let eager = document.getElementById('eager').value
  let newStory = `${mary} had a ${little} ${lamb} whose ${fleece} was as ${white} as ${snow}.
  And everywhere that ${mary} went, the ${lamb} was sure to go.
  It followed her to ${school} one day,
  Which was against the rules.
  It made the ${children} ${laugh} and ${play} to see the ${lamb} at ${school}.
  So the ${teacher} sent it out, but still it ${lingered} near and ${waited} patiently until ${mary} did ${appear}.
  “Why does the ${lamb} ${love} ${mary} so?”
  The ${eager} ${children} asked.
  “Because ${mary} ${love}s the ${lamb}, you know.”
  The ${teacher} relied.`

  const storyContainer = document.getElementById('story-container')
  storyContainer.innerHTML = newStory
}

writeButton.addEventListener('click', () => {
  compileImput()
})
