// 2. Написать класс Circle, которые принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисовать круг с заданными стилями.




class Circle {
    constructor(width, color) {
        this.width = width
        this.height = width
        this.color = color
        this.render()
    }

    createTemplate() {
        return `
        <div class="circle" style = " 
            width: ${this.width}px;
            height: ${this.height}px;
            background-color:${this.color};
        "></div>        
        `
    }

    render() {
        const template = this.createTemplate()
        console.log(template)
        document.body.innerHTML += template
    }

}

const circle1 = new Circle(200, 'green')




// 1. Реализовать следующее мини-приложение

// https://gist.github.com/zhekix/31ee5bd7fb0e95280feacde2d55f288a

class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;      

    }

    init() {
        // метод должен создать тег img
        // вложить в него src картинки (this.imgUrl)
        // и записать в this.html
        // + дергаем render
        // + странице должен залится фон черным
        this.html = document.createElement('img')
        this.html.setAttribute('src', this.imgUrl)
        this.html.setAttribute('alt', 'image')
        this.render()           
    }

    render() {
        // метод должен отрисовать изображение (this.html) на странице
        // применить фиксированное позиционирование
        // использовать this.top и this.left для указания позиции
        // использовать this.width для указания ширины
        this.html.style.position = 'fixed'
        this.html.style.width = this.width + 'px'
        this.html.style.marginTop = this.top + 'px'
        this.html.style.marginLeft = this.left + 'px'
        const bodyElement = document.querySelector('body')
        bodyElement.style.backgroundColor = 'black'
        bodyElement.append(this.html)
        
    }
    moveUp() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся ВЫШЕ
        // на 20px
        // + дергаем render
        this.top = this.top - 20 
        this.render()
                
    }
    moveDown() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся НИЖЕ
        // на 20px
        // + дергаем render
        this.top = this.top + 20
        this.render()
    }
    moveLeft() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ЛЕВЕЕ
        // на 20px
        // + дергаем render
        this.left = this.left -20
        this.render()
    }
    moveRight() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ПРАВЕЕ
        // на 20px
        // + дергаем render
        this.left = this.left +20
        this.render()
        
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение

mfLogotip.init();

mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()


// something else, чтобы всё работало   

//  есть подозрение , что нужно вызвать что-то типа setTimeout() перед выполнением каждого метода, чтобы он двигался, но у меня не получилось

