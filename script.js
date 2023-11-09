function validateForm() {
    var namn = document.getElementById('namn').value;
    var email = document.getElementById('email').value;
    var meddelande = document.getElementById('meddelande').value;

    if (namn === '' || email === '' || meddelande === '') {
        alert('Vänligen fyll i alla fält');
        return false;
    }
else
{
    alert("Tack för din ansökan, vi hör av oss")
}

}





