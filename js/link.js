function sendEmailButton(){
    var params = {
        from_name: document.getElementById("name").value,
        email_id:  document.getElementById("email").value,
        message:   document.getElementById("comment").value,
        phone :    document.getElementById("phone").value
    }
        emailjs.send("service_4gott9l","template_hq23ff4",params)
                .then(function(response) {
                    alert('Email sent successfully!');
                    console.log('SUCCESSfulll!', response.status, response.text);
                }, function(error) {
                    alert('Failed to send email.');
                    console.error('FAILED...', error);
                });
}