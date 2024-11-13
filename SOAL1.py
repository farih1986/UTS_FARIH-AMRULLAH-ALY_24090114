A = int(input("Masukan Nilai A : "))
B = int(input("Masukan Nilai B : "))
print("Pilih Opsi :")
print("1. Penjumlahan ")
print("2. Pengurangan ")
print("3. Perkalian ")

pilihan = int(input("Masukan Pilihan Anda : "))

if pilihan == 1:
    proses = "Penjumlahan"
    hasil = A + B
elif pilihan == 2:
    proses = "Pengurangan"
    hasil = A -B
elif pilihan == 3:
    proses = "Perkalian"
    hasil = A * B
else:
    print("Input tidak tersedia")

print(f'Hasil {proses} Dari {A} Dan {B} Adalah {hasil} ')
