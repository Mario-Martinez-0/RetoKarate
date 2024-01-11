function fn() {
    karate.configure('connectTimeout', 10000); //tipo de conneccion, si la api se cade demore 10 segundo esperando
    karate.configure('readTimeout', 10000); // esta es el tiempo de leer la respuesta.

    return {
        api: {
           baseUrl: 'https://petstore3.swagger.io/#/'
        },
        user: {
            name: 'karate'
        }
    };
}