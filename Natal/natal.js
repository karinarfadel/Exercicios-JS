function carregar(){
    var msg = window.document.getElementById('msg')
    const hoje = new Date();
    const natal = new Date(hoje.getFullYear(), 11, 25);
    const um_dia = 1000*60*60*24; //milisegundos

    if (hoje.getMonth()==11 && hoje.getDate()>25)
        natal.setFullYear(natal.getFullYear()+1);

        const dias = Math.ceil(
        (natal.getTime() - hoje.getTime()) / (um_dia)
    );

    msg.innerHTML = (`Faltam ${dias} dia(s) para o Natal!`);
}
