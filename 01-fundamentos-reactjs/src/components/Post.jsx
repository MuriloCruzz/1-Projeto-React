import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://media.licdn.com/dms/image/D4D03AQEgB2WE7Al1gQ/profile-displayphoto-shrink_200_200/0/1677081792478?e=1687996800&v=beta&t=Dvrbje_pdOBQXXmVKr2aMZJiVEjWfGKzF-c61H1B6XQ" alt=''/>
                    <div className={styles.authorInfo}>
                        <strong>Murilo Cruz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="09 de maio às 20:35"dateTime="2023-05-09 20:35:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '} 
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                 <textarea 
                    placeholder='Deixe um comentário'
                 />

                 <footer>
                    <button type='submit'>Publicar</button>
                 </footer>
                 
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>        
    )
}