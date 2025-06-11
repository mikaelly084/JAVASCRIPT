// Função para selecionar um único elemento
const c = (el) => document.querySelector(el);

// Função para selecionar múltiplos elementos
const cs = (el) => document.querySelectorAll(el);

// Loop para percorrer os itens do JSON
cakeJson.map((item, index) => {
    let cakeitem = document.querySelector('.models .cake-item').cloneNode(true);
    cakeitem.setAttribute('data-key', index);

    cakeitem.querySelector('.cake-item--name').innerHTML = item.name;
    cakeitem.querySelector('.cake-item--desc').innerHTML = item.description;
    cakeitem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    cakeitem.querySelector('.cake-item--img img').src = item.img;

    cakeitem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.cake-item').getAttribute('data-key');

        c('.cakeInfo h1').innerHTML = cakeJson[key].name;
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description;
        c('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`;
        c('.cakeBig img').src = cakeJson[key].img;

        c('.cakeInfo--size.selected')?.classList.remove('selected');

        cs('.cakeInfo--size').forEach((size, sizeIndex) => {
            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex];
            if (sizeIndex === 0) size.classList.add('selected');

            size.addEventListener('click', () => {
                c('.cakeInfo--size.selected')?.classList.remove('selected');
                size.classList.add('selected');
            });
        });

        c('.cakeWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.cakeWindowArea').style.opacity = 1;
        }, 200);
    });

    document.querySelector('.cake-area').append(cakeitem);
});

function closeModal() {
    c('.cakeWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.cakeWindowArea').style.display = 'none';
    }, 500);
}

cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});
