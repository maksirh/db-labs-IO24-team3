# Модель прецедентів

## Користувач

@startuml
```md
:Користувач: as user

usecase "Реєстрація облікового запису" as reg
usecase "Авторизація до облікового запису" as log
usecase "Вихід з облікового запису" as exit

usecase "Звернення до служби підтримки" as sup

usecase "Керування обліковим записом" as manage
usecase "Зміна інформації" as ch_info
usecase "Зміна пароля" as ch_pass
usecase "Видалення облікового запису" as del

usecase "Пошук" as search
usecase "Фільтрація даних" as filt
usecase "Завантаження даних" as dl
usecase "Завантаження даних з системи" as dl_out
usecase "Завантаження даних у систему" as dl_in

user -l-> sup
user -u-> exit
user -r-> manage
ch_info -u.> manage:extends
ch_pass -u.> manage:extends
del -u.> manage:extends
user -u-> log
user -u-> reg
user -d-> search
filt -u.> search:extends
user -d-> dl
dl_in -u.> dl:extends
dl_out -u.> dl:extends
```
@enduml
