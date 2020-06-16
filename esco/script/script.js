$('#modal-next').click(() => {
    $('#info-modal').modal('hide');
    $('#input-modal').modal('show');
    modalOpen = setInterval(function () {
        $(document.body).addClass('modal-open');
        console.log('123')
    }, 100);
    setTimeout(() => {
        clearInterval(modalOpen);
    }, 500);
});