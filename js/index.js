"use strict";
document.addEventListener("deviceready", function () {
  var inputAyah = document.getElementById('ayah');
  var inputIbu = document.getElementById('ibu');
  var btnsAyah = document.querySelectorAll('.btn-ayah');
  var btnsIbu = document.querySelectorAll('.btn-ibu');
  var hasil = document.getElementById('hasil');
  var identifikasi = document.getElementById('identifikasi');

  var _loop = function _loop(i) {
    btnsAyah[i].addEventListener('click', function () {
      if (i == 0) {
        inputAyah.value = "A";
      } else if (i == 1) {
        inputAyah.value = "B";
      } else if (i == 2) {
        inputAyah.value = "O";
      } else if (i == 3) {
        inputAyah.value = "AB";
      }
    });
  };

  for (var i = 0; i < btnsAyah.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    btnsIbu[_i].addEventListener('click', function () {
      if (_i == 0) {
        inputIbu.value = "A";
      } else if (_i == 1) {
        inputIbu.value = "B";
      } else if (_i == 2) {
        inputIbu.value = "O";
      } else if (_i == 3) {
        inputIbu.value = "AB";
      }
    });
  };

  for (var _i = 0; _i < btnsIbu.length; _i++) {
    _loop2(_i);
  }

  function calculateBloodGroup() {
    if (inputAyah.value.toUpperCase() == "A") {
      if (inputIbu.value.toUpperCase() == "A") {
        hasil.innerHTML = "A / O";
      } else if (inputIbu.value.toUpperCase() == "B") {
        hasil.innerHTML = "A / B / AB / O";
      } else if (inputIbu.value.toUpperCase() == "AB") {
        hasil.innerHTML = "A / B / AB";
      } else if (inputIbu.value.toUpperCase() == "O") {
        hasil.innerHTML = "A / O";
      } else {
        hasil.innerHTML = "data tidak valid";
      }
    } else if (inputAyah.value.toUpperCase() == "B") {
      if (inputIbu.value.toUpperCase() == "A") {
        hasil.innerHTML = "A / B / AB / O";
      } else if (inputIbu.value.toUpperCase() == "B") {
        hasil.innerHTML = "B / O";
      } else if (inputIbu.value.toUpperCase() == "AB") {
        hasil.innerHTML = "A / B / AB";
      } else if (inputIbu.value.toUpperCase() == "O") {
        hasil.innerHTML = "B / O";
      } else {
        hasil.innerHTML = "data tidak valid";
      }
    } else if (inputAyah.value.toUpperCase() == "AB") {
      if (inputIbu.value.toUpperCase() == "A") {
        hasil.innerHTML = "A / B / AB";
      } else if (inputIbu.value.toUpperCase() == "B") {
        hasil.innerHTML = "A / B / AB";
      } else if (inputIbu.value.toUpperCase() == "AB") {
        hasil.innerHTML = "A / B / AB";
      } else if (inputIbu.value.toUpperCase() == "O") {
        hasil.innerHTML = "A / B";
      } else {
        hasil.innerHTML = "data tidak valid";
      }
    } else if (inputAyah.value.toUpperCase() == "O") {
      if (inputIbu.value.toUpperCase() == "A") {
        hasil.innerHTML = "A / O";
      } else if (inputIbu.value.toUpperCase() == "B") {
        hasil.innerHTML = "B / O";
      } else if (inputIbu.value.toUpperCase() == "AB") {
        hasil.innerHTML = "A / B";
      } else if (inputIbu.value.toUpperCase() == "O") {
        hasil.innerHTML = "O";
      } else {
        hasil.innerHTML = "data tidak valid";
      }
    } else {
      hasil.innerHTML = "data tidak valid";
    }

    if (hasil.innerHTML != "data tidak valid") {
      Swal.fire({
        title: "Golongan darah anda :",
        text: hasil.innerHTML,
        icon: "success",
        fontSize: "20px"
      });
    } else {
      Swal.fire({
        title: "Maaf :",
        text: hasil.innerHTML,
        icon: "warning",
        fontSize: "20px"
      });
    }
  }

  inputAyah.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      calculateBloodGroup();
    }
  });
  inputIbu.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      calculateBloodGroup();
    }
  });
  identifikasi.addEventListener('click', function () {
    calculateBloodGroup();
  });
});