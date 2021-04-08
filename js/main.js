const ServerIcon = () => {
    return [{
            name: "cat",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "crow",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dog",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dove",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dragon",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "horse",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "hippo",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "fish",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "carrot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "apple-alt",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "lemon",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "pepper-hot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "user-astronaut",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-graduate",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-ninja",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-secret",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
    ];

}





function getColorRandom() { //genero numeri random esadecimali per convertirli in colori

    const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + RandomColor);
}

function getType(elems) {//estraggo il type

    const Types = [];
    elems.forEach((elem) => {

        
        if (!Types.includes(elem.type)) {
            Types.push(elem.type);
        }

    });

    return (Types);

}

function getcolor(arrey) {
    const colors = [];
    arrey.forEach((elem) => {

        const color = getColorRandom();
        colors.push(color);
    });

    return colors;
}

function colored(icons, types, colors) {

    const newicons = icons.map(elem => {
        const NewElem = {
            ...elem
        };

        const iconType = NewElem.type;

        const indexType = types.indexOf(iconType);

        const color = colors[indexType];
        NewElem.color = color;
        return NewElem;
    });
    return newicons;
}

function print(array) { //ciclo arrei di oggetti e stampo tutti cambiando le priprietá
    
    const DivPrint = $('.icons');
    array.forEach((elem) => { 

        let newElem = `
        <div>
        <i class="${elem.family} ${elem.prefix}${elem.name}" style="color:${elem.color}"></i>
        <div class="title">${elem.name.toUpperCase()}</div>
        </div>
        `;
        
        DivPrint.append(newElem);
    });

    
}





function init() {
    //  Milestone 1 = ok
    // Partendo dalla seguente struttura dati , mostriamo
    //in pagina tutte le icone disponibili come da layout.

    const Icons = ServerIcon(); //server delle icone
    console.log(Icons);//arrey globale di dati

    // Milestone 2
    // Coloriamo le icone per tipo
    const type = getType(Icons); //type 3
    console.log(type); //arrey dei type

    const Colors = getcolor(type); //colori  in base a quanti type ci sono in un arrey
    console.log(Colors); //arrey con 3 colori random
    const colorType = colored(Icons, type, Colors);
    print(colorType);




}

$(init);