const grid = document.getElementById('grid');
const btnNav = document.getElementById('btnNav');
const navbar = document.getElementById('navbarGroup');

btnNav.addEventListener('click', () => {
    navbar.classList.toggle('navbar__group-activate');
})


function desabledNave(id = '') {
    console.log(window)
    if(window.innerWidth < 600) {
        navbar.classList.toggle('navbar__group-activate');
    }
    this.addClass(id ,'navbar__item-select', '');
    if(id !== ''){
        navbar.querySelectorAll('li').forEach((item) => {
            if(item.id !== '' && item.id === id ) {
                this.addClass(id ,'navbar__item-select', '');
            } else {
                this.addClass(item.id,'', 'navbar__item-select');
            }
        });
    }
}

function changeShort(button) {
    if(button === 'litsbutton') {
        this.addClass('grid', 'grid-list', 'gallery-grid');
    } else {
        this.addClass('grid', 'gallery-grid', 'grid-list');
    }
}

function addClass(id, classNameAdd, classNameRemove) {
    const elemnt = document.getElementById(id);
    switch (true) {
        case (classNameRemove === '' && classNameAdd !== ''):
            elemnt.classList.add(classNameAdd);
            break;
        case (classNameRemove !== '' && classNameAdd === ''):
            elemnt.classList.remove(classNameRemove);
            break;
        default:
            elemnt.classList.remove(classNameRemove);
            elemnt.classList.add(classNameAdd);
            break;
    }

}

function value () {
    fetch('js/images.json', {
        mode: 'no-cors',
    })
        .then((data) => data.json())
        .then((data) => {
            data.forEach(element => {
                grid.innerHTML += `
                    <div class="grid-item">
                        <img class="grid-img" id="${element.img}${element.id}" alt="${element.img}"
                            src="${element.path}" width="${element.with}" height="${element.height}" />
                    </div>
                `;
            });
        });
}

value();