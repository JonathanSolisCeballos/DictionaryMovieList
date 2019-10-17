'use strict'

class Dictionary {
    constructor () {
    this.items = {}
  }
    has (key) {
    return this.items.hasOwnProperty(key)	
  }
    set (key, value) {
    this.items[key] = value
  }
    remove (key) {
      if (this.has(key)) {
        delete this.items[key]
      return true
    }
    return false
    }
  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  values () {
    return Object.values(this.items)
  }

  size () {
    return Object.keys(this.items).length
  }
  
  keys () {
    return Object.keys(this.items)
  }
  getItems () {
    return this.items
  }
}

function cargarValores(){
    let movies = []
    const dict1 = new Dictionary()
    const dict2 = new Dictionary()
    const dict3 = new Dictionary()

    dict1.set('title', 'Trainspotting')
    dict1.set('genre', 'Drama')
    dict1.set('year', '1996')
    dict1.set('characters', ['Renton', 'Sick Boy'])
    dict1.set('actors', ['Ewan McGregor', 'Ewen Bremner', 'Jonny Lee Miller'])
    dict1.set('description', 'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.')

    dict2.set('title', 'Fight Club')
    dict2.set('genre', 'Drama')
    dict2.set('year', '1999')
    dict2.set('characters', ['Tyler Durden', 'The Narrator'])
    dict2.set('actors', ['Brad Pitt', 'Edward Norton', 'Meat Loaf'])
    dict2.set('description', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.')

    dict3.set('title', 'Dumbo')
    dict3.set('genre', ['Animation','Drama'])
    dict3.set('year', '1941')
    dict3.set('characters', ['Dumbo', 'The Ringmaster'])
    dict3.set('actors', ['Sterling Holloway', 'Edward Brophy', 'Herman Bing'])
    dict3.set('description', 'Ridiculed because of his enormous ears, a young circus elephant is assisted by a mouse to achieve his full potential.')

    movies.push(dict1)
    movies.push(dict2)
    movies.push(dict3)

/*
    for(let i = 0;  i < movies.length; i++){
        console.log('\n' + (i+1))
        console.log('Title: ' + movies[i].get('title'));
        console.log('Genre: ' + movies[i].get('genre'));
        console.log('Year: ' + movies[i].get('year'));
        console.log('Characters: ' + movies[i].get('characters'));
        console.log('Actors: ' + movies[i].get('actors'));
        console.log('Description: ' + movies[i].get('description'));
    }
*/
    return movies
}

function cargarDatos(movies){
    console.log('hola')
    let cadena = ''
    document.querySelector('#list').innerHTML = ''
    for(let i in movies){
            cadena += '<br>';
            cadena += '<li>'+movies[i].get('title')+'</li>';
            cadena += '<li>'+movies[i].get('genre')+'</li>';
            cadena += '<li>'+movies[i].get('year')+'</li>';
            cadena += '<li>'+movies[i].get('characters')+'</li>';
            cadena += '<li>'+movies[i].get('actors')+'</li>';
            cadena += '<li>'+movies[i].get('description')+'</li>';
            document.querySelector('#list').innerHTML = cadena;
    }
}

window.addEventListener('load', ()=>{
    let formulario = document.querySelector('#peli')
    let movies = cargarValores()

    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();
        let title = document.querySelector('#title').value
        let genre = document.querySelector('#genre').value
        let year = document.querySelector('#year').value
        let actor = document.querySelector('#actor').value
        let character = document.querySelector('#character').value
        let description = document.querySelector('#description').value
        
        let dict= new Dictionary()

        dict.set('title', title)
        dict.set('genre', genre)
        dict.set('year', year)
        dict.set('characters', character)
        dict.set('actors', actor)
        dict.set('description', description)

        movies.push(dict)
        cargarDatos(movies)
    })
});



