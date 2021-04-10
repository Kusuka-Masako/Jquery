document.getElementById('nama').innerHTML = 'KusukaMasako';

$('#nim').html('20190140048');


$(function() {
    console.log("Hola");
});
// menyembunyikan elemen
$("#hide").on("click", function(){
    $("#nama").hide();
});
// menampilkan
$("#show").on("click", function(){
    $("#nama").show();
});

// coba
$("#toggle").on("click", function(){
    $("#nama").toggle();
})

// fade in Element HTML
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn();
});

// fade Out Element HTML
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut();
});

// coba
$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle();
});

// Slide Up Element HTML
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

// Sldie Down Elemet HTML
$("#slideDown").on("click", function(){
    $("#img").slideDown();
});

// Coba
$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});