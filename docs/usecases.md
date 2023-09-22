# usecases

Eu, como usuário, desejo buscar por um usuário do Github
`getUser(username)`

Eu, como usuário, desejo ver os detalhes do usuário buscado
```
> nome 
> numero de seguidores 
> numero de seguidos 
> imagem do avatar 
> email 
> bio

`getUser(username)`
```

Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas
`fetchRepositories(username, params)`

Eu, como usuário, desejo poder alterar a ordem da listagem de repositórios
`fetchRepositories(username, params)`

Eu, como usuário, desejo ver uma página com os detalhes de um repositório
```
nome
descrição
numero de estrelas
linguagem
link externo para a pagina do repositório no Github que pode ser clicado na listagem dos repositórios

`getRepositoryDetails(repository, username)`
```


# entities

```ts 
User {
  id: number
  name: string
  followers: number
  following: number
  bio?: string
  avatarUrl?: string
  profileUrl?: string
}
```

```ts
Repository {
  id: number  
  name: string  
  stars: number  
  language: string  
  description?: string  
  repositoryUrl?: string
}
```
