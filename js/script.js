const playBtn = document.getElementById('playBtn')
const listItems = document.getElementById('items')
const listTasks = document.getElementById('tasks')
const attempts = document.getElementById('fortune__title-h2')
const fortuneRoulette = document.getElementById('fortune__roulette')
const smallCircle = document.getElementById('small__circle')
const root = document.querySelector(':root')
let attemptCount = 2
const items = [
    { value: "Apple-iPhone-12-Transparent", src: "./img/Apple-iPhone-12-Transparent.png", win: false },
    { value: "филадельфия-лайт-сяке", src: "./img/филадельфия-лайт-сяке.png", win: false },
    { value: "калифорния-каппа-маки-в-кунжуте", src: "./img/калифорния-каппа-маки-в-кунжуте.png", win: false },
    { value: "-20%", src: "./img/20.png", win: false },
    { value: "нежный-с-курицей", src: "./img/нежный-с-курицей.png", win: false },
    { value: "лава-с-крабом", src: "./img/лава-с-крабом.png", win: false },
    { value: "ЭТОФИЛА ", src: "./img/ЭТОФИЛА.png", win: false },
]
const tasks = [
    { value: "Подпишитесь на сообщество", attempt: "+1 попытка", completed: false },
    { value: "Подпишитесь на рассылку", attempt: "+1 попытка", completed: false },
    { value: "Сделайте репост о конкурсе ВК", attempt: "+1 попытка", completed: false },
    { value: "Оформите заказ по ссылке", attempt: "+1 попытка", completed: false },
    { value: "Загрузите чек", attempt: "+1 попытка", completed: false },
]
attempts.innerText = attemptCount.toString()

tasks.forEach(task => {
    let listItem = document.createElement('li')
    let listBtn = document.createElement('button')
    let listSpan = document.createElement('span')
    listItem.className = "task__list-item"
    listBtn.className = "task__list-btn"
    listSpan.className = "task__list-span"
    listTasks.appendChild(listItem)
    listItem.appendChild(listBtn)

    listItem.innerHTML = task.value
    listBtn.innerText = "Готово"
    listSpan.innerText = task.attempt
    listItem.appendChild(listSpan)
    listItem.appendChild(listBtn)
    if (task.completed) {
    }
    listBtn.addEventListener('click', () => {
        if (!task.completed) {
            attemptCount++
            task.completed = true
            listBtn.innerText = "Начислено"
            listItem.className = "task__list-disabled"
            listBtn.className = "task__list-btn-disabled"
            listBtn.setAttribute("disabled", "disabled")
        }
        else if (task.completed) {
            listBtn.innerText = "Готово"
            alert('task was completed')
        }
        attempts.innerText = attemptCount.toString()
    })

})
items.forEach(item => {
    let listItem = document.createElement('li')
    let img = document.createElement('img')
    listItem.className = "list__item"
    img.src = item.src
    img.className = "item__img"
    listItems.appendChild(listItem)
    listItem.appendChild(img)

})
let timeout
function play() {
    fortuneRoulette.classList.add("fortune__roulette-animation")
    smallCircle.classList.add("small__circle-animatin")
    timeout = setTimeout(alertWin, 3000)
}

function alertWin() {
    const res = Math.floor(Math.random() * items.length)
    const deg = `${Math.floor(res * 360 / 7 + 360)}deg`
    root.style.setProperty('--deg', deg)
    alert("you are been win!: " + items[res].value)
    items[res].win = true
    attemptCount--
    attempts.innerHTML = attemptCount.toString()
    fortuneRoulette.classList.remove("fortune__roulette-animation")
    smallCircle.classList.remove("small__circle-animatin")
}
playBtn.addEventListener('click', () => {
    attemptCount ? play() : alert("try do some tasks")
})