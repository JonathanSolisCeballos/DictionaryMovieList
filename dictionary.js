//This code was adapted from https://medium.com/@rodrwan/dictionaries-en-js-e2abd196f720
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

const dict1 = new Dictionary()
const dict2 = new Dictionary()
const dict3 = new Dictionary()
let movies = []

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

function mostrarDatos(){
    for(let i = 0;  i < movies.length; i++){
        console.log('\n' + (i+1))
        console.log('Title: ' + movies[i].get('title'));
        console.log('Genre: ' + movies[i].get('genre'));
        console.log('Year: ' + movies[i].get('year'));
        console.log('Characters: ' + movies[i].get('characters'));
        console.log('Actors: ' + movies[i].get('actors'));
        console.log('Description: ' + movies[i].get('description'));
    }
}

mostrarDatos()

/*
console.log('HAS', dict.has('Gandalf'))
console.log('SIZE', dict.size())
console.log('KEYS', dict.keys())
console.log('VALUES', dict.values())
console.log('GET', dict.get('Tyrion'))

console.log('REMOVE', dict.remove('John'))
console.log('KEYS', dict.keys())
console.log('VALUES', dict.values())

console.log('GET ITEMS', dict.getItems())
*/

