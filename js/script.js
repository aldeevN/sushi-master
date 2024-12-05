const playBtn = document.getElementById('playBtn')
const listItems = document.getElementById('items')
const listTasks = document.getElementById('tasks')
const attempts = document.getElementById('fortune__title-h2')

let attemptCount = 2
const items = [
    { value: "калифорния-каппа-маки-в-кунжуте", win: false },
    { value: "лава-с-крабом", win: false },
    { value: "нежный-с-курицей", win: false },
    { value: "филадельфия-лайт-сяке", win: false },
    { value: "ЭТОФИЛА", win: false },
    { value: "Apple-iPhone-12-Transparent", win: false },
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
    listItem.className = "list__item"
    listItems.appendChild(listItem)

})
function play() {
    const res = Math.floor(Math.random() * items.length)
    items[res].win = true
    attemptCount--
    alert("you are been win!: " + items[res].value)
    attempts.innerHTML = attemptCount.toString()
}

playBtn.addEventListener('click', () => {
    attemptCount ? play() : alert("try do some tasks")
})