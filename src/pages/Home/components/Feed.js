import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles( (theme) => ({
    root: {
        
    }
}))

const posts = [
  {
      id: 1,
      author: {
          id: 1,
          name: 'Fernanda Souza',
          usename: 'Fesouza',
          avatar: ''
      },
      title: 'Criando um App do zero utilizando React-JS',
      data: 'Março 01/03/21',
      description: 'Fala pessoal! Qual é o framework favorito de vocês?',
      hashtags: "#dotnet, #javaScript, #ReactJs, #developer",
      image: './images/posts/post1.png'
  },
  {
    id: 2,
    author: {
        id: 1,
        name: 'Pedro Silva',
        usename: 'SilvaPedro',
        avatar: ''
    },
    title: 'Comparativo entre React-Js e Vue-JS- performance',
    data: 'Março 01/1/21',
    description: 'Qual framework eu escolho para apreder primeiro?',
    hashtags: "#Vue-js, #ReactJs, #melhorFramework",
    image: './images/posts/post2.png'
},
  
]

function Feed() {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
            
        </div>
    )
}

export default Feed