// Breaking the Label — Free Reading Practice (K-5)
// Curriculum aligned to Common Core ELA standards.
// All content is plain JS data — add or edit items in CURRICULUM below.

const STORAGE_KEYS = {
    kidName: 'btl_kid_name',
    progress: 'btl_progress', // { [topicId]: { correct, attempts } }
};

const POSITIVE_MESSAGES = [
    '⭐ Great job!',
    '🎉 You got it!',
    '👏 Awesome!',
    '✨ Perfect!',
    '💪 Nailed it!',
    '🌟 Excellent!',
    '🚀 Way to go!',
];

const TRY_AGAIN_MESSAGES = [
    'Try again! 💪',
    'Not quite — give it another try!',
    'Almost! Pick another answer.',
    'Keep trying — you can do it!',
    'Close! Try a different one.',
];

// ---------- Curriculum ----------
const CURRICULUM = {
    K: {
        label: 'Kindergarten',
        summary: 'Letters, sounds, rhymes, and first sight words',
        topics: [
            {
                id: 'k-letters',
                title: 'Match Capital → Lowercase Letters',
                items: [
                    { prompt: 'Which is the lowercase letter for A?', correct: 'a', distractors: ['b', 'c'] },
                    { prompt: 'Which is the lowercase letter for B?', correct: 'b', distractors: ['p', 'd'] },
                    { prompt: 'Which is the lowercase letter for F?', correct: 'f', distractors: ['t', 'l'] },
                    { prompt: 'Which is the lowercase letter for M?', correct: 'm', distractors: ['w', 'n'] },
                    { prompt: 'Which is the lowercase letter for R?', correct: 'r', distractors: ['n', 'p'] },
                    { prompt: 'Which is the lowercase letter for S?', correct: 's', distractors: ['z', 'c'] },
                    { prompt: 'Which is the lowercase letter for T?', correct: 't', distractors: ['f', 'l'] },
                ],
            },
            {
                id: 'k-sounds',
                title: 'Beginning Sounds',
                items: [
                    { prompt: 'Which word starts with the /b/ sound?', correct: 'ball', distractors: ['cat', 'sun'] },
                    { prompt: 'Which word starts with the /d/ sound?', correct: 'dog', distractors: ['log', 'frog'] },
                    { prompt: 'Which word starts with the /m/ sound?', correct: 'moon', distractors: ['noon', 'soon'] },
                    { prompt: 'Which word starts with the /s/ sound?', correct: 'sun', distractors: ['fun', 'run'] },
                    { prompt: 'Which word starts with the /t/ sound?', correct: 'top', distractors: ['hop', 'pop'] },
                    { prompt: 'Which word starts with the /f/ sound?', correct: 'fish', distractors: ['dish', 'wish'] },
                    { prompt: 'Which word starts with the /h/ sound?', correct: 'hat', distractors: ['cat', 'bat'] },
                ],
            },
            {
                id: 'k-rhymes',
                title: 'Rhyming Words',
                items: [
                    { prompt: 'Which word rhymes with cat?', correct: 'hat', distractors: ['dog', 'pen'] },
                    { prompt: 'Which word rhymes with sun?', correct: 'fun', distractors: ['ball', 'tree'] },
                    { prompt: 'Which word rhymes with bug?', correct: 'rug', distractors: ['boy', 'cup'] },
                    { prompt: 'Which word rhymes with red?', correct: 'bed', distractors: ['sun', 'pig'] },
                    { prompt: 'Which word rhymes with cake?', correct: 'lake', distractors: ['cat', 'sit'] },
                    { prompt: 'Which word rhymes with pig?', correct: 'big', distractors: ['top', 'man'] },
                ],
            },
            {
                id: 'k-sight-words',
                title: 'Sight Words',
                items: [
                    { prompt: 'Which word says "the"?', correct: 'the', distractors: ['then', 'they'] },
                    { prompt: 'Which word says "and"?', correct: 'and', distractors: ['an', 'add'] },
                    { prompt: 'Which word says "see"?', correct: 'see', distractors: ['sea', 'set'] },
                    { prompt: 'Which word says "go"?', correct: 'go', distractors: ['so', 'do'] },
                    { prompt: 'Which word says "you"?', correct: 'you', distractors: ['your', 'you\'re'] },
                    { prompt: 'Which word says "my"?', correct: 'my', distractors: ['me', 'by'] },
                    { prompt: 'Which word says "is"?', correct: 'is', distractors: ['it', 'in'] },
                ],
            },
        ],
    },

    1: {
        label: 'Grade 1',
        summary: 'Short vowels (CVC words), sight words, and reading simple sentences',
        topics: [
            {
                id: 'g1-cvc',
                title: 'Short Vowel Words (CVC)',
                items: [
                    { prompt: 'Which word has the short /a/ sound?', correct: 'cat', distractors: ['cute', 'kite'] },
                    { prompt: 'Which word has the short /e/ sound?', correct: 'pen', distractors: ['pin', 'pan'] },
                    { prompt: 'Which word has the short /i/ sound?', correct: 'pig', distractors: ['pie', 'page'] },
                    { prompt: 'Which word has the short /o/ sound?', correct: 'pot', distractors: ['pat', 'put'] },
                    { prompt: 'Which word has the short /u/ sound?', correct: 'bug', distractors: ['big', 'bag'] },
                    { prompt: 'Which word ends with -at?', correct: 'mat', distractors: ['mit', 'met'] },
                    { prompt: 'Which word ends with -in?', correct: 'win', distractors: ['won', 'wan'] },
                ],
            },
            {
                id: 'g1-sight',
                title: 'Sight Words Level 1',
                items: [
                    { prompt: 'Which word says "was"?', correct: 'was', distractors: ['saw', 'has'] },
                    { prompt: 'Which word says "said"?', correct: 'said', distractors: ['sad', 'side'] },
                    { prompt: 'Which word says "have"?', correct: 'have', distractors: ['hive', 'hat'] },
                    { prompt: 'Which word says "they"?', correct: 'they', distractors: ['the', 'them'] },
                    { prompt: 'Which word says "what"?', correct: 'what', distractors: ['that', 'when'] },
                    { prompt: 'Which word says "from"?', correct: 'from', distractors: ['form', 'farm'] },
                    { prompt: 'Which word says "with"?', correct: 'with', distractors: ['wish', 'witch'] },
                ],
            },
            {
                id: 'g1-sentences',
                title: 'Read Simple Sentences',
                items: [
                    { prompt: 'The cat ___ on the mat.', correct: 'sat', distractors: ['ran', 'ate'] },
                    { prompt: 'I can ___ a big book.', correct: 'read', distractors: ['eat', 'cook'] },
                    { prompt: 'My dog ___ very fast.', correct: 'runs', distractors: ['flies', 'sings'] },
                    { prompt: 'The sun is ___.', correct: 'hot', distractors: ['cold', 'wet'] },
                    { prompt: 'We go to ___ at night.', correct: 'bed', distractors: ['school', 'play'] },
                    { prompt: 'A bird can ___.', correct: 'fly', distractors: ['swim deep', 'crawl'] },
                ],
            },
            {
                id: 'g1-plurals',
                title: 'Plurals (More Than One)',
                items: [
                    { prompt: 'More than one cat is...', correct: 'cats', distractors: ['cates', 'catz'] },
                    { prompt: 'More than one dog is...', correct: 'dogs', distractors: ['doges', 'dogz'] },
                    { prompt: 'More than one box is...', correct: 'boxes', distractors: ['boxs', 'boxies'] },
                    { prompt: 'More than one bus is...', correct: 'buses', distractors: ['buss', 'busies'] },
                    { prompt: 'More than one baby is...', correct: 'babies', distractors: ['babys', 'babes'] },
                    { prompt: 'More than one foot is...', correct: 'feet', distractors: ['foots', 'feets'] },
                ],
            },
        ],
    },

    2: {
        label: 'Grade 2',
        summary: 'Long vowels, vowel teams, compound words, and short comprehension',
        topics: [
            {
                id: 'g2-silent-e',
                title: 'Long Vowels (Silent E)',
                items: [
                    { prompt: 'Which word has the long /a/ sound?', correct: 'cake', distractors: ['cap', 'cat'] },
                    { prompt: 'Which word has the long /i/ sound?', correct: 'kite', distractors: ['kit', 'kid'] },
                    { prompt: 'Which word has the long /o/ sound?', correct: 'rope', distractors: ['rob', 'rot'] },
                    { prompt: 'Which word has the long /u/ sound?', correct: 'cube', distractors: ['cub', 'cut'] },
                    { prompt: 'Which word has silent E?', correct: 'time', distractors: ['tin', 'tip'] },
                    { prompt: 'Which word has silent E?', correct: 'note', distractors: ['not', 'nod'] },
                ],
            },
            {
                id: 'g2-vowel-teams',
                title: 'Vowel Teams (ai, ee, oa, ou)',
                items: [
                    { prompt: 'Which word has the long /a/ team?', correct: 'rain', distractors: ['ran', 'run'] },
                    { prompt: 'Which word has the long /e/ team?', correct: 'tree', distractors: ['try', 'tray'] },
                    { prompt: 'Which word has the long /o/ team?', correct: 'boat', distractors: ['bot', 'but'] },
                    { prompt: 'Which word has the /ou/ sound?', correct: 'cloud', distractors: ['clod', 'cold'] },
                    { prompt: 'Which word has the long /e/ team?', correct: 'sleep', distractors: ['slip', 'slap'] },
                    { prompt: 'Which word has the long /a/ team?', correct: 'mail', distractors: ['mall', 'mill'] },
                ],
            },
            {
                id: 'g2-compound',
                title: 'Compound Words',
                items: [
                    { prompt: 'sun + flower =', correct: 'sunflower', distractors: ['flowersun', 'sun-flower'] },
                    { prompt: 'rain + bow =', correct: 'rainbow', distractors: ['bow rain', 'rain bow'] },
                    { prompt: 'butter + fly =', correct: 'butterfly', distractors: ['flybutter', 'butter fly'] },
                    { prompt: 'fire + man =', correct: 'fireman', distractors: ['man fire', 'fireperson'] },
                    { prompt: 'tooth + brush =', correct: 'toothbrush', distractors: ['toothpaste', 'brush tooth'] },
                    { prompt: 'play + ground =', correct: 'playground', distractors: ['ground play', 'play yard'] },
                ],
            },
            {
                id: 'g2-comprehension',
                title: 'Short Reading Comprehension',
                items: [
                    {
                        passage: 'Sam has a red dog. The dog likes to run in the park. Sam throws a ball, and the dog brings it back.',
                        prompt: 'What color is Sam\'s dog?',
                        correct: 'Red',
                        distractors: ['Brown', 'Black'],
                    },
                    {
                        passage: 'The bee flew from flower to flower. It was busy all day. At sunset, it went back to the hive.',
                        prompt: 'When did the bee go home?',
                        correct: 'At sunset',
                        distractors: ['At sunrise', 'At noon'],
                    },
                    {
                        passage: 'Maya loves to read books about space. She wants to be an astronaut one day. Her favorite planet is Mars.',
                        prompt: 'What does Maya want to be?',
                        correct: 'An astronaut',
                        distractors: ['A teacher', 'A doctor'],
                    },
                    {
                        passage: 'The little turtle walked very slowly. He was tired. He stopped to rest under a leaf.',
                        prompt: 'Why did the turtle stop?',
                        correct: 'He was tired',
                        distractors: ['He was hungry', 'He was scared'],
                    },
                    {
                        passage: 'It rained all morning. The kids stayed inside and played games. When the sun came out, they ran outside.',
                        prompt: 'Why did the kids stay inside?',
                        correct: 'Because it was raining',
                        distractors: ['Because it was night', 'Because they were sick'],
                    },
                ],
            },
        ],
    },

    3: {
        label: 'Grade 3',
        summary: 'Prefixes, suffixes, synonyms, antonyms, and word meaning',
        topics: [
            {
                id: 'g3-prefixes',
                title: 'Prefixes (un-, re-, pre-)',
                items: [
                    { prompt: 'What does "unhappy" mean?', correct: 'Not happy', distractors: ['Very happy', 'Happy again'] },
                    { prompt: 'What does "redo" mean?', correct: 'Do again', distractors: ['Do not', 'Do first'] },
                    { prompt: 'What does "preheat" mean?', correct: 'Heat before', distractors: ['Heat again', 'Cool down'] },
                    { prompt: 'What does "unlock" mean?', correct: 'Not locked anymore', distractors: ['Lock again', 'Lock more'] },
                    { prompt: 'What does "rewrite" mean?', correct: 'Write again', distractors: ['Write fast', 'Stop writing'] },
                    { prompt: 'What does "preview" mean?', correct: 'See before', distractors: ['See again', 'Not see'] },
                ],
            },
            {
                id: 'g3-suffixes',
                title: 'Suffixes (-ing, -ed, -ly)',
                items: [
                    { prompt: 'What does "running" mean?', correct: 'Moving fast right now', distractors: ['Ran in the past', 'Will run later'] },
                    { prompt: 'What does "jumped" mean?', correct: 'Already jumped', distractors: ['Jumping now', 'Will jump'] },
                    { prompt: 'What does "quickly" mean?', correct: 'In a fast way', distractors: ['Very slow', 'Not at all'] },
                    { prompt: 'Add -ing to "play":', correct: 'playing', distractors: ['plaied', 'playly'] },
                    { prompt: 'Add -ed to "walk":', correct: 'walked', distractors: ['walking', 'walkly'] },
                    { prompt: 'Add -ly to "soft":', correct: 'softly', distractors: ['softed', 'softing'] },
                ],
            },
            {
                id: 'g3-synonyms',
                title: 'Synonyms (Words That Mean the Same)',
                items: [
                    { prompt: 'A synonym for "big" is...', correct: 'large', distractors: ['small', 'red'] },
                    { prompt: 'A synonym for "happy" is...', correct: 'glad', distractors: ['sad', 'tired'] },
                    { prompt: 'A synonym for "fast" is...', correct: 'quick', distractors: ['slow', 'wet'] },
                    { prompt: 'A synonym for "smart" is...', correct: 'clever', distractors: ['silly', 'tall'] },
                    { prompt: 'A synonym for "begin" is...', correct: 'start', distractors: ['end', 'stop'] },
                    { prompt: 'A synonym for "tired" is...', correct: 'sleepy', distractors: ['awake', 'happy'] },
                ],
            },
            {
                id: 'g3-antonyms',
                title: 'Antonyms (Words That Mean the Opposite)',
                items: [
                    { prompt: 'The opposite of "hot" is...', correct: 'cold', distractors: ['warm', 'fire'] },
                    { prompt: 'The opposite of "big" is...', correct: 'small', distractors: ['huge', 'large'] },
                    { prompt: 'The opposite of "up" is...', correct: 'down', distractors: ['over', 'side'] },
                    { prompt: 'The opposite of "happy" is...', correct: 'sad', distractors: ['glad', 'mad'] },
                    { prompt: 'The opposite of "early" is...', correct: 'late', distractors: ['soon', 'now'] },
                    { prompt: 'The opposite of "open" is...', correct: 'closed', distractors: ['ajar', 'wide'] },
                ],
            },
        ],
    },

    4: {
        label: 'Grade 4',
        summary: 'Vocabulary in context, main idea, cause and effect, and inference',
        topics: [
            {
                id: 'g4-vocab',
                title: 'Vocabulary in Context',
                items: [
                    {
                        passage: 'The hike was so strenuous that everyone needed a break.',
                        prompt: 'In this sentence, "strenuous" most likely means...',
                        correct: 'Very hard or tiring',
                        distractors: ['Easy and relaxing', 'Funny'],
                    },
                    {
                        passage: 'She gazed at the stars for hours, lost in thought.',
                        prompt: '"Gazed" most likely means...',
                        correct: 'Looked at for a long time',
                        distractors: ['Quickly looked away', 'Listened to'],
                    },
                    {
                        passage: 'The puppy was timid and hid behind its owner.',
                        prompt: '"Timid" most likely means...',
                        correct: 'Shy or scared',
                        distractors: ['Brave', 'Hungry'],
                    },
                    {
                        passage: 'After running the race, he felt exhausted.',
                        prompt: '"Exhausted" most likely means...',
                        correct: 'Very tired',
                        distractors: ['Excited', 'Hungry'],
                    },
                    {
                        passage: 'The ancient castle had stood for over 800 years.',
                        prompt: '"Ancient" most likely means...',
                        correct: 'Very old',
                        distractors: ['Brand new', 'Tall'],
                    },
                ],
            },
            {
                id: 'g4-main-idea',
                title: 'Main Idea',
                items: [
                    {
                        passage: 'Bees are very important. They pollinate flowers, which helps plants grow. Without bees, many fruits and vegetables would not exist. We need to protect bees.',
                        prompt: 'What is the main idea?',
                        correct: 'Bees are important and we should protect them',
                        distractors: ['Bees can sting people', 'Flowers are colorful'],
                    },
                    {
                        passage: 'Penguins live in cold places. They cannot fly, but they are great swimmers. They have thick feathers to keep warm.',
                        prompt: 'What is the main idea?',
                        correct: 'Penguins are birds that swim and live in cold places',
                        distractors: ['All birds can fly', 'Cold weather is bad'],
                    },
                    {
                        passage: 'Recycling helps the planet. It saves trees, reduces trash, and uses less energy. Anyone can recycle paper, plastic, and metal.',
                        prompt: 'What is the main idea?',
                        correct: 'Recycling has many benefits and is easy to do',
                        distractors: ['Trees grow tall', 'Metal is heavy'],
                    },
                    {
                        passage: 'Exercise is good for your body. It makes your heart strong and gives you energy. It also helps you sleep better.',
                        prompt: 'What is the main idea?',
                        correct: 'Exercise has many health benefits',
                        distractors: ['Sleeping is fun', 'Hearts beat fast'],
                    },
                ],
            },
            {
                id: 'g4-cause-effect',
                title: 'Cause and Effect',
                items: [
                    { prompt: 'Because it rained, the soccer game was...', correct: 'cancelled', distractors: ['fun', 'longer'] },
                    { prompt: 'She studied hard, so on the test she...', correct: 'did well', distractors: ['fell asleep', 'was late'] },
                    { prompt: 'He forgot his lunch, so he was...', correct: 'hungry at lunchtime', distractors: ['very full', 'tired'] },
                    { prompt: 'The ice melted because...', correct: 'it was warm', distractors: ['it was cold', 'it was Tuesday'] },
                    { prompt: 'The plant grew tall because...', correct: 'it had sun and water', distractors: ['it sang songs', 'it was painted'] },
                    { prompt: 'She missed the bus, so she had to...', correct: 'find another way to school', distractors: ['eat breakfast', 'play outside'] },
                ],
            },
            {
                id: 'g4-inference',
                title: 'Inference (Reading Between the Lines)',
                items: [
                    {
                        passage: 'Tom slammed the door and threw his backpack on the floor.',
                        prompt: 'How is Tom probably feeling?',
                        correct: 'Angry or upset',
                        distractors: ['Very happy', 'Sleepy'],
                    },
                    {
                        passage: 'The kitchen smelled like cookies. Mom was wearing her apron and the oven was on.',
                        prompt: 'What is most likely happening?',
                        correct: 'Mom is baking cookies',
                        distractors: ['Mom is reading a book', 'Mom is sleeping'],
                    },
                    {
                        passage: 'She put on her coat, gloves, and hat. She picked up her snow shovel.',
                        prompt: 'What is the weather probably like?',
                        correct: 'Snowy and cold',
                        distractors: ['Hot and sunny', 'Rainy and warm'],
                    },
                    {
                        passage: 'The team cheered and high-fived each other as they walked off the field.',
                        prompt: 'What probably happened?',
                        correct: 'They won the game',
                        distractors: ['They lost badly', 'They were lost'],
                    },
                ],
            },
        ],
    },

    5: {
        label: 'Grade 5',
        summary: 'Figurative language, theme, author\'s purpose, and context clues',
        topics: [
            {
                id: 'g5-figurative',
                title: 'Figurative Language',
                items: [
                    { prompt: '"Her smile was as bright as the sun" is a...', correct: 'Simile (uses "as")', distractors: ['Metaphor', 'Rhyme'] },
                    { prompt: '"Time is a thief" is a...', correct: 'Metaphor (calls one thing another)', distractors: ['Simile', 'Pun'] },
                    { prompt: '"The wind whispered through the trees" is...', correct: 'Personification (giving human traits)', distractors: ['Rhyme', 'Simile'] },
                    { prompt: '"He runs like the wind" is a...', correct: 'Simile', distractors: ['Metaphor', 'Personification'] },
                    { prompt: '"Buzz, buzz, buzz" is an example of...', correct: 'Onomatopoeia (sound words)', distractors: ['Metaphor', 'Simile'] },
                    { prompt: '"My backpack weighs a ton" is...', correct: 'Hyperbole (exaggeration)', distractors: ['Simile', 'Personification'] },
                ],
            },
            {
                id: 'g5-theme',
                title: 'Theme (The Big Lesson)',
                items: [
                    {
                        passage: 'The tortoise raced the hare. The hare was faster but stopped to nap. The tortoise kept moving slowly and won the race.',
                        prompt: 'What is the theme?',
                        correct: 'Slow and steady wins the race',
                        distractors: ['Hares are bad', 'Sleep is important'],
                    },
                    {
                        passage: 'Anna was scared to give a speech. She practiced every night for two weeks. When the day came, she gave a great speech.',
                        prompt: 'What is the theme?',
                        correct: 'Hard work and practice pay off',
                        distractors: ['Speeches are easy', 'School is boring'],
                    },
                    {
                        passage: 'The big bird had hurt its wing. Other birds came to help, bringing food and keeping it safe until it could fly again.',
                        prompt: 'What is the theme?',
                        correct: 'Helping others matters',
                        distractors: ['Birds eat worms', 'Wings break easily'],
                    },
                    {
                        passage: 'Marco lied about his homework. His teacher found out, and his parents were disappointed. He decided to always tell the truth.',
                        prompt: 'What is the theme?',
                        correct: 'Honesty is important',
                        distractors: ['Homework is hard', 'Teachers know everything'],
                    },
                ],
            },
            {
                id: 'g5-purpose',
                title: 'Author\'s Purpose',
                items: [
                    {
                        passage: 'A funny story about a dog who thinks he\'s the family cat.',
                        prompt: 'The author\'s purpose is to...',
                        correct: 'Entertain',
                        distractors: ['Inform', 'Persuade'],
                    },
                    {
                        passage: 'An article explaining how volcanoes form and erupt.',
                        prompt: 'The author\'s purpose is to...',
                        correct: 'Inform',
                        distractors: ['Entertain', 'Persuade'],
                    },
                    {
                        passage: 'A letter asking the school to add more recess time.',
                        prompt: 'The author\'s purpose is to...',
                        correct: 'Persuade',
                        distractors: ['Entertain', 'Inform'],
                    },
                    {
                        passage: 'A poem about how beautiful the autumn leaves look.',
                        prompt: 'The author\'s purpose is to...',
                        correct: 'Express feelings or entertain',
                        distractors: ['Inform with facts', 'Sell something'],
                    },
                    {
                        passage: 'A poster encouraging kids to drink more water.',
                        prompt: 'The author\'s purpose is to...',
                        correct: 'Persuade',
                        distractors: ['Entertain', 'Tell a joke'],
                    },
                ],
            },
            {
                id: 'g5-context',
                title: 'Context Clues',
                items: [
                    {
                        passage: 'The cake was so scrumptious that everyone asked for seconds.',
                        prompt: '"Scrumptious" most likely means...',
                        correct: 'Delicious',
                        distractors: ['Burnt', 'Cold'],
                    },
                    {
                        passage: 'The room was in disarray after the party — toys, plates, and napkins were everywhere.',
                        prompt: '"Disarray" most likely means...',
                        correct: 'A messy state',
                        distractors: ['Perfectly clean', 'Empty'],
                    },
                    {
                        passage: 'She was reluctant to jump in the cold pool, hesitating at the edge.',
                        prompt: '"Reluctant" most likely means...',
                        correct: 'Not wanting to do something',
                        distractors: ['Eager and excited', 'Already in the pool'],
                    },
                    {
                        passage: 'The dog was elated when its owner came home, wagging its tail and jumping in circles.',
                        prompt: '"Elated" most likely means...',
                        correct: 'Very happy',
                        distractors: ['Sad', 'Sleeping'],
                    },
                    {
                        passage: 'The road was treacherous, full of ice and dangerous turns.',
                        prompt: '"Treacherous" most likely means...',
                        correct: 'Dangerous',
                        distractors: ['Safe and smooth', 'Short'],
                    },
                ],
            },
        ],
    },
};

// ---------- Helpers ----------
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '{}'); }
    catch { return {}; }
}

function recordResult(topicId, wasCorrect) {
    const all = getProgress();
    const t = all[topicId] || { correct: 0, attempts: 0 };
    t.attempts += 1;
    if (wasCorrect) t.correct += 1;
    all[topicId] = t;
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(all));
}

// ---------- Landing page preview ----------
function renderPreviewExercise() {
    const problemEl = document.getElementById('preview-problem');
    const answersEl = document.getElementById('preview-answers');
    const feedbackEl = document.getElementById('preview-feedback');
    if (!problemEl) return;

    const samples = [
        { prompt: 'Which word rhymes with cat?', correct: 'hat', distractors: ['dog', 'pen'] },
        { prompt: 'Which word starts with the /b/ sound?', correct: 'ball', distractors: ['cat', 'sun'] },
        { prompt: 'A synonym for "big" is...', correct: 'large', distractors: ['small', 'red'] },
        { prompt: 'The opposite of "hot" is...', correct: 'cold', distractors: ['warm', 'sunny'] },
    ];
    const item = samples[Math.floor(Math.random() * samples.length)];
    const choices = shuffle([item.correct, ...item.distractors]);

    problemEl.textContent = item.prompt;
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';

    let solved = false;
    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = c;
        btn.addEventListener('click', () => {
            if (solved) return;
            if (c === item.correct) {
                solved = true;
                btn.classList.add('correct');
                feedbackEl.textContent = pickRandom(POSITIVE_MESSAGES) + ' Click "Start Practicing" for more.';
                feedbackEl.className = 'feedback correct';
                answersEl.querySelectorAll('button').forEach(b => b.disabled = true);
            } else {
                btn.classList.add('incorrect');
                btn.disabled = true;
                feedbackEl.textContent = pickRandom(TRY_AGAIN_MESSAGES);
                feedbackEl.className = 'feedback incorrect';
            }
        });
        answersEl.appendChild(btn);
    });
}

// ---------- Practice page state ----------
const state = {
    grade: null,
    topic: null,
    items: [],
    itemIdx: 0,
    correctThisRound: 0,
};

// ---------- Kid bar ----------
function initKidBar() {
    const input = document.getElementById('kid-name');
    const greeting = document.getElementById('kid-greeting');
    const saved = localStorage.getItem(STORAGE_KEYS.kidName) || '';
    input.value = saved;
    if (saved) greeting.textContent = `Hi, ${saved}!`;
    input.addEventListener('input', () => {
        const name = input.value.trim();
        localStorage.setItem(STORAGE_KEYS.kidName, name);
        greeting.textContent = name ? `Hi, ${name}!` : '';
    });
}

// ---------- Views ----------
function showView(viewId) {
    ['view-grades', 'view-topics', 'view-exercise'].forEach(id => {
        const el = document.getElementById(id);
        el.style.display = id === viewId ? 'block' : 'none';
    });
}

function renderGradePicker() {
    const container = document.getElementById('grade-grid');
    container.innerHTML = '';
    Object.keys(CURRICULUM).forEach(grade => {
        const meta = CURRICULUM[grade];
        const btn = document.createElement('button');
        btn.className = 'grade-btn';
        btn.innerHTML = `<span class="grade-label">${meta.label}</span><span class="grade-summary">${meta.summary}</span>`;
        btn.addEventListener('click', () => {
            state.grade = grade;
            renderTopicList();
            showView('view-topics');
        });
        container.appendChild(btn);
    });
}

function renderTopicList() {
    const meta = CURRICULUM[state.grade];
    document.getElementById('topics-grade-title').textContent = meta.label;
    document.getElementById('topics-grade-summary').textContent = meta.summary;

    const container = document.getElementById('topics-list');
    container.innerHTML = '';
    const progress = getProgress();

    meta.topics.forEach(topic => {
        const p = progress[topic.id];
        const totalItems = topic.items.length;
        const stat = p
            ? `${p.correct} correct out of ${p.attempts} attempts`
            : `${totalItems} questions • Not started yet`;

        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.innerHTML = `<span class="topic-title">${topic.title}</span><span class="topic-stat">${stat}</span>`;
        btn.addEventListener('click', () => {
            state.topic = topic;
            state.items = shuffle(topic.items);
            state.itemIdx = 0;
            state.correctThisRound = 0;
            renderExercise();
            showView('view-exercise');
        });
        container.appendChild(btn);
    });
}

function renderExercise() {
    const topic = state.topic;
    const item = state.items[state.itemIdx];

    document.getElementById('exercise-grade').textContent = CURRICULUM[state.grade].label;
    document.getElementById('exercise-topic-title').textContent = topic.title;
    document.getElementById('exercise-progress').textContent = `Question ${state.itemIdx + 1} of ${state.items.length}`;
    document.getElementById('exercise-score').textContent = `Correct: ${state.correctThisRound}`;

    const card = document.getElementById('exercise-card');
    const passageHtml = item.passage ? `<div class="passage">${item.passage}</div>` : '';

    card.innerHTML = `
        ${passageHtml}
        <div class="problem">${item.prompt}</div>
        <div class="answers" id="exercise-answers"></div>
        <div class="feedback" id="exercise-feedback"></div>
    `;

    const answersEl = card.querySelector('#exercise-answers');
    const feedbackEl = card.querySelector('#exercise-feedback');
    const choices = shuffle([item.correct, ...item.distractors]);

    let firstClickRecorded = false;
    let solved = false;

    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = c;
        btn.addEventListener('click', () => {
            if (solved) return;
            const correct = c === item.correct;

            if (!firstClickRecorded) {
                recordResult(topic.id, correct);
                firstClickRecorded = true;
                if (correct) {
                    state.correctThisRound += 1;
                    document.getElementById('exercise-score').textContent = `Correct: ${state.correctThisRound}`;
                }
            }

            if (correct) {
                solved = true;
                btn.classList.add('correct');
                feedbackEl.textContent = pickRandom(POSITIVE_MESSAGES);
                feedbackEl.className = 'feedback correct';
                answersEl.querySelectorAll('button').forEach(b => b.disabled = true);
                document.getElementById('exercise-next').style.display = '';
            } else {
                btn.classList.add('incorrect');
                btn.disabled = true;
                feedbackEl.textContent = pickRandom(TRY_AGAIN_MESSAGES);
                feedbackEl.className = 'feedback incorrect';
            }
        });
        answersEl.appendChild(btn);
    });

    document.getElementById('exercise-next').style.display = 'none';
}

function nextItem() {
    if (state.itemIdx + 1 < state.items.length) {
        state.itemIdx += 1;
        renderExercise();
    } else {
        const total = state.items.length;
        const score = state.correctThisRound;
        const card = document.getElementById('exercise-card');
        card.innerHTML = `
            <div class="topic-complete">
                <h3>Topic complete!</h3>
                <p class="score-line">You got <strong>${score} out of ${total}</strong> correct.</p>
                <p>${score === total ? 'Perfect score! 🎉' : 'Great work — try it again to do even better.'}</p>
                <div class="complete-actions">
                    <button class="btn btn-primary" id="retry-topic">Try this topic again</button>
                    <button class="btn btn-secondary" id="back-to-topics-from-complete">Pick another topic</button>
                </div>
            </div>
        `;
        document.getElementById('exercise-next').style.display = 'none';
        document.getElementById('retry-topic').addEventListener('click', () => {
            state.items = shuffle(state.topic.items);
            state.itemIdx = 0;
            state.correctThisRound = 0;
            renderExercise();
        });
        document.getElementById('back-to-topics-from-complete').addEventListener('click', () => {
            renderTopicList();
            showView('view-topics');
        });
    }
}

// ---------- Init ----------
function initPracticePage() {
    initKidBar();
    renderGradePicker();
    showView('view-grades');

    document.getElementById('back-to-grades').addEventListener('click', () => {
        showView('view-grades');
    });
    document.getElementById('back-to-topics').addEventListener('click', () => {
        renderTopicList();
        showView('view-topics');
    });
    document.getElementById('exercise-next').addEventListener('click', nextItem);
}

window.BTL = { renderPreviewExercise, initPracticePage };
