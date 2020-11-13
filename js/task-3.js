const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');
  const imageToInsert = images.reduce((acc, {url, alt}) => {
      return (acc += `<li><img src = ${url} alt = '${alt}'></li>`);
    },'');

galleryRef.insertAdjacentHTML('beforeend', imageToInsert);

Object.assign(galleryRef.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
});

Array.from(galleryRef.querySelectorAll('img')).map(({style}) => {
    Object.assign(style, {
        width: '100%',
        marginBottom: '30px',
    });
}) ;