const url="https://script.google.com/macros/s/AKfycbzpqH1cGyyJmCbMMr0kZ0eZDwhtFgrjCd1YxeyOWlV22H_6sGkX302weEMgOKheOi5XBg/exec";

function showToast(message){

const toast=document.getElementById("toast");
const text=document.getElementById("toastText");

text.innerText=message;

toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},3000);

}

function validateForm(){

const inputs=document.querySelectorAll("#formLaporan input, #formLaporan select");

for(let i=0;i<inputs.length;i++){

if(inputs[i].value.trim()===""){

showToast("Harap isi semua data terlebih dahulu");

inputs[i].focus();

return false;

}

}

return true;

}

document
.getElementById("formLaporan")
.addEventListener("submit",function(e){

e.preventDefault();

if(!validateForm()){
return;
}

const file=document.getElementById("foto").files[0];

const reader=new FileReader();

reader.onload=function(){

const base64=reader.result.split(",")[1];

const data={

nib:nib.value,
namaPemilik:namaPemilik.value,
jenisKelamin:jenisKelamin.value,
pendidikan:pendidikan.value,

periode:periode.value,

nilaiMesin:nilaiMesin.value,
nilaiLainnya:nilaiLainnya.value,
modalKerja:modalKerja.value,

nilaiTanah:nilaiTanah.value,
nilaiBangunan:nilaiBangunan.value,

maklonPakai:maklonPakai.value,
maklonSedia:maklonSedia.value,

produk:produk.value,
satuan:satuan.value,

kapasitasUnit:kapasitasUnit.value,
kapasitasKilo:kapasitasKilo.value,

nilaiProduk:nilaiProduk.value,

namaBahanBaku:namaBahanBaku.value,
jumlahBahanBaku:jumlahBahanBaku.value,
satuanBahanBaku:satuanBahanBaku.value,
nilaiBahanBaku:nilaiBahanBaku.value,

tenagaKerjaLaki:tenagaKerjaLaki.value,
tenagaKerjaPerempuan:tenagaKerjaPerempuan.value,

air:air.value,
bahanBakar:bahanBakar.value,

biayaListrik:biayaListrik.value,
tipeKwh:tipeKwh.value,

foto:base64,
fileName:file.name,
mimeType:file.type

};

fetch(url,{
method:"POST",
body:JSON.stringify(data)
})

.then(res=>res.json())
.then(res=>{

showToast("Laporan berhasil dikirim");

document.getElementById("formLaporan").reset();

})
.catch(()=>{

showToast("Gagal mengirim laporan");

});

};

reader.readAsDataURL(file);

});
