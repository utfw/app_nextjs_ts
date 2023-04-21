import { GetStaticProps, NextPage } from "next"
import homestyles from '../styles/home.module.css';
import Head from "next/head";
import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";
/* import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin' */

const Home = ({allPostsData}:{
  allPostsData:{
  date:string,
  title:string,
  id:string
}[]
}) => {
  return (
    <div>
      <Head>
        <title>Name</title>
      </Head>
      <section className={homestyles.headingMd}>
        <p>[your self introduction]</p>
        <p>(this is a website)</p>
      </section>
      <section className={`${homestyles.headingMd} ${homestyles.padding1px}`}>
        <h2>Blog</h2>
        <ul className={homestyles.list}>
          {allPostsData.map(({date,title,id}) =>(
            <li className={homestyles.listItem} key={id}>
              <Link href={`/posts/${id}`}> 
                <span>{title}</span>
              </Link><br />
              <small className={homestyles.lightText}>{date}</small></li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home;

// 프롭스를 받는 코드가 먼저 실행이 되서 정보를 넘겨준다. 밑에 있다고 나중에 되는것이 아님을 유의. 
export const getStaticProps: GetStaticProps = async () =>{
  const allPostsData = getSortedPostsData()
  return {
    props:{
      allPostsData
    }
  }
}