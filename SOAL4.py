berat = int(input("Masukan Berat Badan (Kg) : "))
tinggi = float(input("Masukan Tinggi Badan (M) : "))

bmi = berat / (tinggi ** 2)

if bmi < 18.5:
    kategori = "Berat Badan Kurang"
elif bmi > 18.5 and bmi < 24.9:
    kategori = "Berat Badan Normal"
elif bmi > 25 and bmi < 29.9:
    kategori = "Kelebihan Berat Badan"
else:
    kategori = "Obesitas"

print(f'Berat Badan     : {berat}')
print(f'Tinggi Badan    : {tinggi}')
print(f'Nilai BMI       : {bmi}')
print(f'Kategori BMI    : {kategori}')
