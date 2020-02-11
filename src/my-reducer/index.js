
const myData = [{
  name: 'Star Wars',
  img: 'https://media.melty.fr/pmedia-4011986-ajust_700/rendez-vous-le-18-decembre-pour-star-wars.jpg',
  rate: 3
}, {
  name: 'robin des bois',
  img: 'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/unnamed-9_1.jpg?1543160102',
  rate: 2
}, {
  name: 'joker',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY679_.jpg',
  rate: 3
}]

const movies = (state = myData, action) => {
    switch (action.type) {
      case 'ADD':
        const data=action.payload
        const newData = state
         newData.push(data)
        return [...newData]
      default:
        return state
    }
  }
  export default movies