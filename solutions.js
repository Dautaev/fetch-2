// Задача 1.1

// const response = fetch('https://reqres.in/api/users')
//     .then((data) => {
//         return data.json()
//     })
//     .then((json => {
//         console.log(json)
//     }));

// Задача 1.2

// const response2 = fetch('https://this-site-doesnt-exists.intocode')
//     .then((data) => {
//         return data.json()
//     })
//     .catch((error) => {
//         console.log(error.message)
//     });

// Задача 1.3

// fetch('https://reqres.in/api/users')
//     .then((data) => {
//     return data.json()
//     })
//     .then((json) => {
//         console.log(typeof(json))
//     })

    // Задача 1.4

// fetch('https://reqres.in/api/users')
//     .then((data) => {
//        return data.json()
//     })
//     .then((json) => {
//         console.log(json.data.length)
//     })

 // Задача 1.5

// fetch('https://reqres.in/api/users/1')
//     .then((data) => {
//         return data.json()
//     })
//     .then((json) => {
//         console.log(json.data.json)
//     })

 // Задача 2.1

// const render = async () => {
//     const res = await fetch('https://reqres.in/api/users', {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             first_name: "intocode"
//         })
//     })

//     const data = await res.json()
//     return data
// }

// console.log(render())

// Задача 2.2

// const render = async () => {
//     const res = await fetch('https://reqres.in/api/users', {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({first_name: "intocode"})
//     })
//     const data = await res.json()
//     return data
// }

// console.log(render())

    // Задача 2.3

//     const user = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({first_name: "intocode"})
// }
//             const render = async () => {
//             const res = await fetch('https://reqres.in/api/users',user)
//         const data = await res.json()
//         return data
//     }
    
//     console.log(render())

    // Задача 2.4


// const postNameFamily = {
//     method: 'POST',
//     body: JSON.stringify({
//         lastname: 'into',
//         firstname: 'code',
//     }),
//     headers: {
//         "Content-type": "application/json"
//     }
// }
// const render = async (id) => {
//     const res = await fetch('https://reqres.in/api/users', postNameFamily)
//     const data = await res.json()
//     return [data.id, data.createdAt]
// }
// console.log(render())

    // Задача 2.5

// const deleteUser = {
//     method: 'DELETE',
// };

// const render = async (id) => {
//     const res = await fetch(`https://reqres.in/api/users/${id}`, deleteUser)
//     if(res.status === 204) {
//         console.log("пользователь с id 5 успешно удален")
//     }

//     return id
// }
//     console.log(render(5))


  // Задача 2.6

// const nameChange = {
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         "first_name": "интукод"
//     }),
// };
// const render = async (id) => {
//     const res = await fetch(`https://reqres.in/api/users/${id}`, nameChange)
//     const data = await res.json()
//     return data
// }
// console.log(render(3))
