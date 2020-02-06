const inputAyah = document.getElementById('ayah')
const inputIbu = document.getElementById('ibu')
const btnsAyah = document.querySelectorAll('.btn-ayah')
const btnsIbu = document.querySelectorAll('.btn-ibu')
const hasil = document.getElementById('hasil')
const identifikasi = document.getElementById('identifikasi');

for(let i = 0; i < btnsAyah.length; i++){
    btnsAyah[i].addEventListener('click', function(){
        if(i == 0){
            inputAyah.value = "A"
        }else if(i == 1){
            inputAyah.value = "B"
        }else if(i == 2){
            inputAyah.value = "O"
        }else if(i == 3){
            inputAyah.value = "AB"
        }
    })
}

for(let i = 0; i < btnsIbu.length; i++){
    btnsIbu[i].addEventListener('click', function(){
        if(i == 0){
            inputIbu.value = "A"
        }else if(i == 1){
            inputIbu.value = "B"
        }else if(i == 2){
            inputIbu.value = "O"
        }else if(i == 3){
            inputIbu.value = "AB"
        }
    })
}

function calculateBloodGroup(){
    if(inputAyah.value.toUpperCase() == "A"){
        if(inputIbu.value.toUpperCase() == "A"){
            hasil.innerHTML = "A, O"
        }else if(inputIbu.value.toUpperCase() == "B"){
            hasil.innerHTML = "A, B, AB, O"
        }else if(inputIbu.value.toUpperCase() == "AB"){
            hasil.innerHTML = "A, B, AB"
        }else if(inputIbu.value.toUpperCase() == "O"){
            hasil.innerHTML = "A, O"
        }else{
            hasil.innerHTML = "data tidak valid"
        }
    }else if(inputAyah.value.toUpperCase() == "B"){
        if(inputIbu.value.toUpperCase() == "A"){
            hasil.innerHTML = "A, B, AB, O"
        }else if(inputIbu.value.toUpperCase() == "B"){
            hasil.innerHTML = "B, O"
        }else if(inputIbu.value.toUpperCase() == "AB"){
            hasil.innerHTML = "A, B, AB"
        }else if(inputIbu.value.toUpperCase() == "O"){
            hasil.innerHTML = "B, O"
        }else{
            hasil.innerHTML = "data tidak valid"
        }
    }else if(inputAyah.value.toUpperCase() == "AB"){
        if(inputIbu.value.toUpperCase() == "A"){
            hasil.innerHTML = "A, B, AB"
        }else if(inputIbu.value.toUpperCase() == "B"){
            hasil.innerHTML = "A, B, AB"
        }else if(inputIbu.value.toUpperCase() == "AB"){
            hasil.innerHTML = "A, B, AB"
        }else if(inputIbu.value.toUpperCase() == "O"){
            hasil.innerHTML = "A, B"
        }else{
            hasil.innerHTML = "data tidak valid"
        }
    }else if(inputAyah.value.toUpperCase() == "O"){
        if(inputIbu.value.toUpperCase() == "A"){
            hasil.innerHTML = "A, O"
        }else if(inputIbu.value.toUpperCase() == "B"){
            hasil.innerHTML = "B, O"
        }else if(inputIbu.value.toUpperCase() == "AB"){
            hasil.innerHTML = "A, B"
        }else if(inputIbu.value.toUpperCase() == "O"){
            hasil.innerHTML = "O"
        }else{
            hasil.innerHTML = "data tidak valid"
        }
    }else{
        hasil.innerHTML = "data tidak valid"
    }

    if(hasil.innerHTML != "data tidak valid"){
        Swal.fire({
            title: "Hasil :",
            text: hasil.innerHTML,
            icon: "success",
            fontSize: "20px"
        })
    }else{
        Swal.fire({
            title: "Hasil :",
            text: hasil.innerHTML,
            icon: "warning",
            fontSize: "20px"
        })
    }
}

inputAyah.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        calculateBloodGroup()
    }
})

inputIbu.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        calculateBloodGroup()
    }
})

identifikasi.addEventListener('click', function(){
    calculateBloodGroup()
})

    