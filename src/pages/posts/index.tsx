import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
          </a>
        </div>
      </main>
    </>
  );
}