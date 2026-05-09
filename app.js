// Breaking the Label — IEP Practice
// Honor-system access gate. Anyone who views source can find the code,
// but at $1/month for a kid-targeted product, this is the right tradeoff
// vs. building real auth. Change ACCESS_CODE here, send the same value
// to every Gumroad subscriber via the membership confirmation email.
const ACCESS_CODE = 'BTL2026';

const STORAGE_KEYS = {
    access: 'btl_access',
    kidName: 'btl_kid_name',
    readingScore: 'btl_reading_score',
    writingScore: 'btl_writing_score',
    mathScore: 'btl_math_score',
};

// ---------- Reading exercises ----------
const READING_ITEMS = [
    { picture: '🐶', word: 'dog',   distractors: ['cat', 'bird'] },
    { picture: '🐱', word: 'cat',   distractors: ['dog', 'fish'] },
    { picture: '🌞', word: 'sun',   distractors: ['moon', 'star'] },
    { picture: '🌳', word: 'tree',  distractors: ['flower', 'rock'] },
    { picture: '🍎', word: 'apple', distractors: ['orange', 'grape'] },
    { picture: '🚗', word: 'car',   distractors: ['bike', 'bus'] },
    { picture: '🏠', word: 'house', distractors: ['barn', 'tent'] },
    { picture: '🐟', word: 'fish',  distractors: ['frog', 'duck'] },
    { picture: '⭐', word: 'star',  distractors: ['moon', 'cloud'] },
    { picture: '📚', word: 'book',  distractors: ['paper', 'pen'] },
    { picture: '🍞', word: 'bread', distractors: ['cake', 'cheese'] },
    { picture: '🌧️', word: 'rain',  distractors: ['snow', 'wind'] },
];

// ---------- Writing exercises ----------
const WRITING_ITEMS = [
    { sentence: ['The', 'cat', 'sat', 'on', 'the', 'mat'] },
    { sentence: ['I', 'can', 'read', 'a', 'big', 'book'] },
    { sentence: ['The', 'sun', 'is', 'bright', 'today'] },
    { sentence: ['My', 'dog', 'likes', 'to', 'run'] },
    { sentence: ['We', 'went', 'to', 'the', 'park'] },
    { sentence: ['She', 'has', 'a', 'red', 'apple'] },
    { sentence: ['He', 'rides', 'his', 'blue', 'bike'] },
    { sentence: ['The', 'fish', 'swim', 'in', 'the', 'pond'] },
];

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

function getScore(key) { return parseInt(localStorage.getItem(key) || '0', 10); }
function bumpScore(key) {
    const next = getScore(key) + 1;
    localStorage.setItem(key, String(next));
    return next;
}

// ---------- Landing page preview ----------
function renderPreviewExercise() {
    const problemEl = document.getElementById('preview-problem');
    const answersEl = document.getElementById('preview-answers');
    const feedbackEl = document.getElementById('preview-feedback');
    if (!problemEl) return;

    const a = Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * 9) + 1;
    const correct = a + b;
    const choices = shuffle([correct, correct + 1, correct - 1, correct + 2]);

    problemEl.textContent = `${a} + ${b} = ?`;
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';

    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = c;
        btn.addEventListener('click', () => {
            if (c === correct) {
                btn.classList.add('correct');
                feedbackEl.textContent = 'Correct! Subscribe to get unlimited practice.';
                feedbackEl.className = 'feedback correct';
            } else {
                btn.classList.add('incorrect');
                feedbackEl.textContent = `Not quite — try again. The answer is ${correct}.`;
                feedbackEl.className = 'feedback incorrect';
            }
            answersEl.querySelectorAll('button').forEach(b => b.disabled = true);
        });
        answersEl.appendChild(btn);
    });
}

// ---------- Gate ----------
function checkGate() {
    return localStorage.getItem(STORAGE_KEYS.access) === ACCESS_CODE;
}

function showPractice() {
    document.getElementById('gate').style.display = 'none';
    document.getElementById('practice').style.display = 'block';
    document.getElementById('logout-link').style.display = '';
    initKidBar();
    renderReading();
    renderWriting();
    renderMath();
}

function initGate() {
    const gateBtn = document.getElementById('gate-submit');
    const codeInput = document.getElementById('gate-code');
    const errorEl = document.getElementById('gate-error');
    const logoutLink = document.getElementById('logout-link');

    function tryUnlock() {
        const entered = codeInput.value.trim().toUpperCase();
        if (entered === ACCESS_CODE.toUpperCase()) {
            localStorage.setItem(STORAGE_KEYS.access, ACCESS_CODE);
            errorEl.style.display = 'none';
            showPractice();
        } else {
            errorEl.style.display = 'block';
        }
    }

    gateBtn.addEventListener('click', tryUnlock);
    codeInput.addEventListener('keypress', e => { if (e.key === 'Enter') tryUnlock(); });

    logoutLink.addEventListener('click', e => {
        e.preventDefault();
        localStorage.removeItem(STORAGE_KEYS.access);
        location.reload();
    });
}

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

// ---------- Tabs ----------
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${tab}`).classList.add('active');
        });
    });
}

// ---------- Reading ----------
function renderReading() {
    const container = document.getElementById('reading-exercise');
    const scoreEl = document.getElementById('reading-correct');
    const item = pickRandom(READING_ITEMS);
    const choices = shuffle([item.word, ...item.distractors]);

    scoreEl.textContent = getScore(STORAGE_KEYS.readingScore);

    container.innerHTML = `
        <div class="picture">${item.picture}</div>
        <div class="answers" id="reading-answers"></div>
        <div class="feedback" id="reading-feedback"></div>
    `;
    const answersEl = container.querySelector('#reading-answers');
    const feedbackEl = container.querySelector('#reading-feedback');

    choices.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = word;
        btn.addEventListener('click', () => {
            if (word === item.word) {
                btn.classList.add('correct');
                feedbackEl.textContent = '⭐ Great job!';
                feedbackEl.className = 'feedback correct';
                scoreEl.textContent = bumpScore(STORAGE_KEYS.readingScore);
            } else {
                btn.classList.add('incorrect');
                feedbackEl.textContent = `The word is "${item.word}". Try the next one!`;
                feedbackEl.className = 'feedback incorrect';
            }
            answersEl.querySelectorAll('button').forEach(b => b.disabled = true);
        });
        answersEl.appendChild(btn);
    });
}

// ---------- Writing ----------
function renderWriting() {
    const container = document.getElementById('writing-exercise');
    const scoreEl = document.getElementById('writing-correct');
    const item = pickRandom(WRITING_ITEMS);
    const target = item.sentence;
    const tiles = shuffle(target);
    const built = [];

    scoreEl.textContent = getScore(STORAGE_KEYS.writingScore);

    function render() {
        container.innerHTML = `
            <div class="sentence-slot">${built.length ? built.join(' ') : ' '}</div>
            <div class="word-tiles" id="writing-tiles"></div>
            <div class="feedback" id="writing-feedback"></div>
            <button class="btn btn-secondary" id="writing-undo" style="margin-top:0.5rem;">Undo</button>
        `;
        const tilesEl = container.querySelector('#writing-tiles');
        const feedbackEl = container.querySelector('#writing-feedback');
        const undoBtn = container.querySelector('#writing-undo');

        tiles.forEach((word, idx) => {
            const tile = document.createElement('button');
            tile.className = 'word-tile';
            tile.textContent = word;
            tile.disabled = built.includes(idx);
            tile.dataset.idx = idx;
            tile.addEventListener('click', () => {
                built.push(idx);
                if (built.length === target.length) {
                    const made = built.map(i => tiles[i]);
                    if (made.every((w, i) => w === target[i])) {
                        feedbackEl.textContent = '⭐ Perfect sentence!';
                        feedbackEl.className = 'feedback correct';
                        scoreEl.textContent = bumpScore(STORAGE_KEYS.writingScore);
                    } else {
                        feedbackEl.textContent = `Almost! The sentence is: "${target.join(' ')}"`;
                        feedbackEl.className = 'feedback incorrect';
                    }
                    container.querySelector('.sentence-slot').textContent = built.map(i => tiles[i]).join(' ');
                    container.querySelectorAll('.word-tile').forEach(t => t.disabled = true);
                    undoBtn.disabled = true;
                } else {
                    render();
                }
            });
            tilesEl.appendChild(tile);
        });

        undoBtn.addEventListener('click', () => {
            if (built.length) { built.pop(); render(); }
        });
    }
    render();
}

// ---------- Math ----------
let mathDifficulty = 'easy';

function renderMath() {
    const container = document.getElementById('math-exercise');
    const scoreEl = document.getElementById('math-correct');

    const range = mathDifficulty === 'easy' ? 10 : mathDifficulty === 'medium' ? 20 : 100;
    const a = Math.floor(Math.random() * range) + 1;
    const b = Math.floor(Math.random() * range) + 1;
    const op = Math.random() > 0.5 ? '+' : '-';
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    const x = op === '+' ? a : big;
    const y = op === '+' ? b : small;
    const correct = op === '+' ? x + y : x - y;

    scoreEl.textContent = getScore(STORAGE_KEYS.mathScore);

    container.innerHTML = `
        <div class="problem">${x} ${op} ${y} = <input type="number" inputmode="numeric" class="math-input" id="math-answer" autofocus></div>
        <button class="btn btn-primary" id="math-check">Check</button>
        <div class="feedback" id="math-feedback" style="margin-top:1rem;"></div>
    `;

    const input = container.querySelector('#math-answer');
    const checkBtn = container.querySelector('#math-check');
    const feedbackEl = container.querySelector('#math-feedback');

    function check() {
        const val = parseInt(input.value, 10);
        if (Number.isNaN(val)) return;
        if (val === correct) {
            feedbackEl.textContent = '⭐ Correct!';
            feedbackEl.className = 'feedback correct';
            scoreEl.textContent = bumpScore(STORAGE_KEYS.mathScore);
        } else {
            feedbackEl.textContent = `Not quite. ${x} ${op} ${y} = ${correct}.`;
            feedbackEl.className = 'feedback incorrect';
        }
        input.disabled = true;
        checkBtn.disabled = true;
    }

    checkBtn.addEventListener('click', check);
    input.addEventListener('keypress', e => { if (e.key === 'Enter') check(); });
    setTimeout(() => input.focus(), 50);
}

function initMathDifficulty() {
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            mathDifficulty = btn.dataset.diff;
            renderMath();
        });
    });
}

// ---------- Wire up practice page ----------
function initPracticePage() {
    initGate();
    initTabs();
    initMathDifficulty();
    document.getElementById('reading-next').addEventListener('click', renderReading);
    document.getElementById('writing-next').addEventListener('click', renderWriting);
    document.getElementById('math-next').addEventListener('click', renderMath);

    if (checkGate()) showPractice();
}

window.BTL = { renderPreviewExercise, initPracticePage };
