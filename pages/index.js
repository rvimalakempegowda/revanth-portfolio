import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Revanth Gowda | Portfolio</title>
        <meta name="description" content="Portfolio website of Revanth Gowda, a full-stack developer." />
      </Head>
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Hello, I'm Revanth Gowda 👋</h1>
          <p>I'm a full-stack developer with experience in React, Next.js, Node.js, Python, machine learning and reinforcement learning.</p>
        </section>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            <li>Front-end: React, Next.js, TypeScript, Electron, HTML/CSS</li>
            <li>Back-end: Node.js, Express, Python, Flask</li>
            <li>AI/ML: scikit-learn, reinforcement learning (Q-learning, A2C), data analysis</li>
            <li>Tools: Git, GitHub, Vercel, Docker</li>
          </ul>
        </section>
        <section className={styles.projects}>
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/rvimalakempegowda/sentiment-analysis-ai">Sentiment Analysis AI</a> – Logistic regression to classify movie reviews.</li>
            <li><a href="https://github.com/rvimalakempegowda/q-learning-frozenlake">Q-learning FrozenLake</a> – Reinforcement learning agent solving FrozenLake.</li>
            <li><a href="https://github.com/rvimalakempegowda/Amazon_clone">Amazon Clone</a> – Full-stack e-commerce clone built with React and Node.js.</li>
            <li><a href="https://github.com/rvimalakempegowda">View more on my GitHub profile</a></li>
          </ul>
        </section>
        <section className={styles.experience}>
          <h2>Experience & Education</h2>
          <p>I’m a recent graduate with hands-on experience building full-stack applications, exploring machine learning, and creating chatbots and portfolios as coursework and personal projects.</p>
        </section>
      </main>
    </>
  );
}
