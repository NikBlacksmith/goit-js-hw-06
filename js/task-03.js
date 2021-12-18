const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageItem = document.querySelector('ul');
const list = images.map((e) => {
  let element = document.createElement('img')
  element.src = `${e.url}`;
  element.alt = `${e.alt}`;

  let el = `<li><img src = ${element.src} alt = ${element.alt} width = '500' height='300'></li>`
  return el;
});
imageItem.style.display = 'flex';
imageItem.style.flexDirection = 'column';
imageItem.style.alignItems = 'center';
imageItem.style.listStyle = 'none';
imageItem.insertAdjacentHTML('afterbegin', list.join(''));