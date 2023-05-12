import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
            />
            <div className={styles.profile}>
                <Avatar src="https://media.licdn.com/dms/image/D4D03AQEgB2WE7Al1gQ/profile-displayphoto-shrink_200_200/0/1677081792478?e=1687996800&v=beta&t=Dvrbje_pdOBQXXmVKr2aMZJiVEjWfGKzF-c61H1B6XQ"/>

                <strong>Murilo Cruz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu  perfil
                </a>
            </footer>
        
        </aside>
    );
}