tahun = int(input("Masukan Tahun : "))
if tahun % 4 == 0  and tahun % 100 != 0:
    print(f'Tahun {tahun} merupakan TAHUN KABISAT')
elif tahun % 400 == 0:
    print(f'Tahun {tahun} merupakan TAHUN KABISAT')   
else:
     print(f'Tahun {tahun} bukan TAHUN KABISAT')


