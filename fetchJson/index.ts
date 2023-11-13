import axios from 'axios'

interface Todo {
    id: number
    title: string
    completed: boolean
}

const url: string = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(res => {
    const todo = res.data as Todo

    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    logTodo(id, title, finished)

})

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${finished}
    `)
}