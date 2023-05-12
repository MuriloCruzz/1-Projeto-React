import { Header } from "./components/header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="Murilo Cruz" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore repellat eveniet, quis aperiam mollitia eos similique velit. Dolores ullam harum suscipit, necessitatibus veritatis et facere nostrum reiciendis beatae possimus incidunt!"
        />
        <Post
          author="Juvenal Silva"
          content="Um novo post muito legal!"
        />
        </main>
      </div>
    </div>
  )
}
