import { createServer, Factory, Model } from 'miragejs';

import {faker}  from '@faker-js/faker';


interface User{
    name:string,
    email:string,
    created_at:string,
}

export function makeServer (){
    const server= createServer({
        models:{
            user: Model.extend<Partial<User>>({})
        },

        factories:{
            user: Factory.extend({
                name(i) {
                    return `user ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                created_at() {
                    return faker.date.recent(10, new Date())
                }
            })
        },

        seeds(server){
            server.createList('user',100)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750

            this.get('/users');
            this.post('/users')

            this.passthrough()
        }
    })

    return server;
}