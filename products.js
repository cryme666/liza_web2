const images = [
	{
		src: "Photos/Photo-1.png",
		alt: 'Товар 1',
		description: 'Вино Marlborough Sun Совіньйон Блан Мальборо Сан',
		price: '477 UAH',
	},

	{
		src: './Photos/Photo-2.png',
		alt: 'Товар 2',
		description: 'Вино Cappo Каппо Москато',
		price: '190 UAH',
	},

	{
		src: './Photos/Photo-3.png',
		alt: 'Товар 3',
		description: 'Вино Cesari Піно Гріджио делле Венеціе ',
		price: '325 UAH',
	},

	{
		src: './Photos/Photo-4.png',
		alt: 'Товар 4',
		description: 'Вино Callia Мальбек',
		price: '353 UAH',
	},

	{
		src: './Photos/Photo-5.png',
		alt: 'Товар 5',
		description: 'Вино Cappo Каппо Шираз',
		price: '190 UAH',
	},

	{
		src: './Photos/Photo-6.png' ,
		alt: 'Товар 6',
		description: 'Вино Callia Піно Гріджио',
		price: '353 UAH',
	},

	{
		src: './Photos/Photo-7.png',
		alt: 'Товар 7',
		description: 'Вино Marlborough Sun Совіньйон Розе',
		price: '477 UAH',
	},

	{
		src: './Photos/Photo-8.png',	
		alt: 'Товар 8',
		description: 'Вино Canti Піно Гріджіо Венето',
		price: '303 UAH',
	}
]

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('images-container');

    function addImageToContainer(image) {
        const imageCard = document.createElement("div");
        imageCard.classList.add("col-md-4", "mb-4");

        const imageCardBody = document.createElement("div");
        imageCardBody.classList.add("card", "h-100");

        const imageElement = document.createElement("img");
        imageElement.classList.add("card-img-top");
        imageElement.src = image.src;
        imageElement.alt = image.alt;

        const imageDescription = document.createElement("div");
        imageDescription.classList.add("card-body");

        const descriptionTitle = document.createElement("h5");
        descriptionTitle.classList.add("card-title");
        descriptionTitle.textContent = image.description;

        const descriptionPrice = document.createElement("p");
        descriptionPrice.classList.add("card-text");
        descriptionPrice.textContent = image.price;

        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Додати в кошик";

        // Обробник події на клік для опису
        descriptionTitle.addEventListener('click', function () {
            descriptionPrice.classList.toggle('d-none');
        });

        // Обробник події на клік для зображення
        imageElement.addEventListener('click', function () {
            descriptionPrice.classList.toggle('d-none');
        });

        // Обробник події на клік для кнопки
        button.addEventListener('click', function () {
            alert('Товар успішно додано в кошик!');
        });

        // Додати зображення, опис та кнопку до картки товару
        imageCardBody.appendChild(imageElement);
        imageDescription.appendChild(descriptionTitle);
        imageDescription.appendChild(descriptionPrice);
        imageDescription.appendChild(button);
        imageCardBody.appendChild(imageDescription);
        imageCard.appendChild(imageCardBody);
        imageContainer.appendChild(imageCard);
    }

    // Додати перші три зображення до контейнера при завантаженні сторінки
    images.slice(0, 3).forEach(function(image) {
        addImageToContainer(image);
    });

    // Показати решту товарів при кліку на кнопку "Показати товари"
    const showImagesBtn = document.getElementById('show-images-btn');
    showImagesBtn.addEventListener('click', function () {
        // Додати решту зображень до контейнера
        images.slice(3).forEach(function(image) {
            addImageToContainer(image);
        });

        // Приховати кнопку "Показати товари"
        showImagesBtn.classList.add('d-none');
    });
});

