# Проєктування бази даних

В рамках проекту розробляється: 
## Модель бізнес-об'єктів 
@startuml

entity Media

entity Media.id #FFFFFF
entity Media.type #FFFFFF
entity Media.url  #FFFFFF
entity Media.name #FFFFFF
entity Media.metadata #FFFFFF

Media.id --* Media
Media.type --* Media
Media.url  --* Media
Media.name --* Media
Media.metadata --* Media


entity OriginalSource

entity OriginalSource.id #FFFFFF
entity OriginalSource.type #FFFFFF
entity OriginalSource.url #FFFFFF
entity OriginalSource.name #FFFFFF
entity OriginalSource.rating #FFFFFF

OriginalSource.id --* OriginalSource
OriginalSource.type --* OriginalSource
OriginalSource.url --* OriginalSource
OriginalSource.name --* OriginalSource
OriginalSource.rating --* OriginalSource

OriginalSource "1,1"---"0,*" Media


entity Request

entity Request.id #FFFFFF
entity Request.description #FFFFFF
entity Request.name #FFFFFF
entity Request.time #FFFFFF

Request.id --* Request
Request.description --* Request
Request.name --* Request
Request.time --* Request

Media "1,1 "---"1, *" Request


entity RequestResult

entity RequestResult.description #FFFFFF
entity RequestResult.id #FFFFFF
entity RequestResult.rating #FFFFFF

RequestResult.description --* RequestResult
RequestResult.id --* RequestResult
RequestResult.rating --* RequestResult

Request "1,1 "-"0, *" RequestResult


@enduml
- ER-модель
- реляційна схема

