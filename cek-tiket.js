function functionKlik() {
    alert("Selamat datang di bioskop Satu Untuk Semua.");

    let input_nama = prompt("Masukkan nama anda.");

    while(input_nama === "") {
        alert("Nama harus diisi.");
        input_nama = prompt("Masukkan nama anda.");
    }

    let input_umur = prompt("Berapa usia anda saat ini?");
    while(input_umur === "" || isNaN(input_umur) || parseInt(input_umur) < 1) {
        alert("Usia harus diisi dengan angka dan tidak boleh kurang dari 1.")
        input_umur = prompt("Berapa usia anda saat ini? (Harap masukkan angka)");
    }

    if(input_umur > 13) {
        alert("selamat anda diperbolehkan untuk menonton film.");
    
        // const invalid_list_studio = ["a", "b", "c"];
        const list_studio = ["A", "B", "C"];
        let pilih_studio = prompt("Silahkan pilih studio anda (A/B/C):");

        while(pilih_studio === "") {
            alert("Mohon pilih salah satu studio diatas.")
            pilih_studio = prompt("Silahkan pilih studio anda (A/B/C):");
        }
        if(list_studio.includes(pilih_studio.toUpperCase())) {
            alert(`Tiket atas nama ${input_nama} dengan umur ${input_umur}, silahkan memasuki studio ${pilih_studio.toUpperCase()}`);
        }
        // else if (invalid_list_studio.includes(pilih_studio)) {
        //     alert("Mohon menggunakan huruf kapital!");
        //     // return pilih_studio;
        //     console.log(pilih_studio);
        // }
        // else if (pilih_studio != invalid_list_studio) {
        //     alert("Maaf pilihan tidak ada, mohon menggunakan huruf kapital!");
        //     console.log(pilih_studio);
        // }
        // if (pilih_studio == invalid_list_studio[0] || invalid_list_studio[1] || invalid_list_studio[2]) {
        //     alert("Maaf input salah");
        // }
        // else if (pilih_studio == list_studio[1]) {
        //     alert(`Tiket atas nama ${input_nama} dengan umur ${input_umur}, silahkan memasuki studio B`);
        // }else if (pilih_studio == list_studio[2]) {
        //     alert(`Tiket atas nama ${input_nama} dengan umur ${input_umur}, silahkan memasuki studio C`);
        // }
        else {
            alert("Maaf pilihan anda tidak ada dalam daftar. \n silahkan input ulang!");
        }
    }else {
        alert("Mohon maaf usia anda di bawah 13 tahun, tidak memenuhi syarat masuk.");
    }
}