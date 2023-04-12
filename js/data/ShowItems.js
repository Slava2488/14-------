let json = [
    {
        'src':'https://basket-10.wb.ru/vol1348/part134832/134832073/images/c516x688/1.jpg',
        'price':'$100.0'
    },
    {
        'src':'https://basket-09.wb.ru/vol1188/part118873/118873988/images/c516x688/1.jpg',
        'price':'$99.9'
    },
    {
        'src':'https://basket-08.wb.ru/vol1169/part116907/116907502/images/c516x688/1.jpg',
        'price':'$155.55'
    },
    {
        'src':'https://basket-08.wb.ru/vol1169/part116906/116906672/images/c516x688/1.jpg',
        'price':'$200.0'
    },
]

console.log(json)

window.onload = () => {
   let mainCont1 = document.querySelector('#main-cont-c2')

   const addItem = () => {
       let template = document.querySelector('#item');
       json.map(jsonItem =>{
           let { src, price } = jsonItem
           let item = template.cloneNode(true)
           item.querySelector('img').src = src
           item.querySelector('h3').innerText = price
           mainCont1.append(item)
       });
   }
   addItem();
}
