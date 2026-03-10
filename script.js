const url="https://script.google.com/macros/s/AKfycbxZqOIJ8McYEH8O9xMbwvJM1WfOJojKdOXLktWd7C5RwEfk18U0Pt3p0tCB0S_GLvDqLA/exec"

document
.getElementById("formLaporan")
.addEventListener("submit",async function(e){

e.preventDefault()

const file=document.getElementById("foto").files[0]

let base64=""
let mime=""
let fileName=""

if(file){

const reader=new FileReader()

reader.readAsDataURL(file)

await new Promise(resolve=>{
reader.onload=()=>{
base64=reader.result.split(",")[1]
mime=file.type
fileName=file.name
resolve()
}
})

}

const data={

nib:nib.value,

periode:periode.value,
nilaiMesin:nilaiMesin.value,
nilaiLainnya:nilaiLainnya.value,
modalKerja:modalKerja.value,
maklonPakai:maklonPakai.value,
maklonSedia:maklonSedia.value,
namaPemilik:namaPemilik.value,
jenisKelamin:jenisKelamin.value,
pendidikan:pendidikan.value,
produk:produk.value,
satuan:satuan.value,
kapasitasUnit:kapasitasUnit.value,
kapasitasKilo:kapasitasKilo.value,
nilaiProduk:nilaiProduk.value,
namaBahanBaku:namaBahanBaku.value,
jumlahBahanBaku:jumlahBahanBaku.value,
satuanBahanBaku:satuanBahanBaku.value,
nilaiBahanBaku:nilaiBahanBaku.value,
nilaiTanah:nilaiTanah.value,
nilaiBangunan:nilaiBangunan.value,
tenagaKerjaLaki:tenagaKerjaLaki.value,
tenagaKerjaPerempuan:tenagaKerjaPerempuan.value,
air:air.value,
bahanBakar:bahanBakar.value,
biayaListrik:biayaListrik.value,
tipeKwh:tipeKwh.value,
foto:base64,
mimeType:mime,
fileName:fileName

}

await fetch(url,{
method:"POST",
body:JSON.stringify(data)
})

document.getElementById("status").innerText="Laporan berhasil dikirim"

document.getElementById("formLaporan").reset()

})
