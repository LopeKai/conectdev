import mock from '../utils/mock'

// mock.onPost('/api/home/login').reply(200,{ // 200 é a lista de codigos http. 200 signifca 'tudo ok'
//     'id': 1,
//     'username': 'lopekai',
//     'email': 'kaiquearaujo246@hotmail.com'
// })

mock.onPost('/api/home/login').reply((config) => {
    const {email,password} = JSON.parse(config.data)

    if(email !== 'kaiqueoakley35@hotmail.com' || password !== 'admin') {
        return [400, {message: 'ERRO: Seu e-mail ou senha informados são inválidos - Tente novamente..'}]
    }
    
    const user = {
        id: 1,
        name: 'kaiqueoakley35@hotmail.com',
        username: 'lopekai',
        email: 'kaiqueoakley35@hotmail.com'
    }

    return [200, {user}]
})
