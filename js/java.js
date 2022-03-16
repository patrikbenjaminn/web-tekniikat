


function button(){
    let joku = document.getElementById("teksti").value;

    let today = new Date()
    let curHr = today.getHours()

        if (curHr < 12) {
  document.getElementById("vastaus").innerHTML = ('Hyvää huomenta ') + joku;
    } else if (curHr < 18) {
        document.getElementById("vastaus").innerHTML = ('Hyvää iltapäivää ') + joku;
    } else {
        document.getElementById("vastaus").innerHTML = ('Hyvää iltaa ') + joku;
}
    
    //kommentti

}
