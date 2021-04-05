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




function print(elems) { //ciclo arrei di oggetti e stampo tutti cambiando le priprietá

    const DivPrint = $('.icons');
    elems.forEach((elem) => {
        elem = `
        <div>
        <i class="${elem.family} ${elem.prefix}${elem.name}" style="color:blue"></i>
        <div class="title">${elem.name.toUpperCase()}</div>
        </div>
        `;
        DivPrint.append(elem);

    });

}




function init() {
    //  Milestone 1 = ok
    // Partendo dalla seguente struttura dati , mostriamo
    //in pagina tutte le icone disponibili come da layout.

    const Icons = ServerIcon(); //server delle icone
    // console.log(Icons);
    print(Icons); //funzione che stampa


}

$(init);