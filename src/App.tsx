import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Post } from './components/Post/Post';

import styles from './App.module.css';

export function App() {
  const posts = [
    {
      id: 1,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/84729916?v=4',
          name: 'João Henrik',
          role: 'Estudante',
      },
      publishedIn: new Date('2022-08-11 23:59:59'),
      postContent: [
        {
          type: 'paragraph',
          content: 'Salve galeraa 👋',
        },
        {
          type: 'paragraph',
          content: 'Acabei de concluir mais um projeto da trilha de ReactJS do Ignite da Rocketseat, corre lá dar uma olhada! 🚀',
        },
        {
          type: 'link',
          content: 'https://github.com/joaohenrik03/up-feed',
        },
      ],
    },  
    {
      id: 2,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/22757465?v=4',
          name: 'Augusto',
          role: 'Infraestrutura',
      },
      publishedIn: new Date('2022-05-11 23:59:59'),
      postContent: [
        {
          type: 'paragraph',
          content: 'Site massa!',
        },
        {
          type: 'paragraph',
          content: 'Mas nem sei o que eu to fazendo aqui...',
        },
      ],
    }, 
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar /> 

        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  publishedIn={post.publishedIn}
                  postContent={post.postContent}
                />    
              )
            })
          }
        </main>
      </div>
    </>
  )
}
