import { getAllPostIds, getPostData } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import homestyles from 'styles/Home.module.css';

export default function post({postData}:{
  postData:{
    title:string,
    date:string,
    contentHtml:string
  }
}) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={homestyles.heading1Xl}>{postData.title}</h1>
        <div className={homestyles.lightText}>
        {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
      </article>
    </div>
  )
}

//path를 쓰려면 props도 같이 써야함.
export const getStaticPaths:GetStaticPaths = async() =>{
  const paths = getAllPostIds();
  return {
    paths,
    fallback:false //getStaticPaths에는 fallback이 들어가야함. false => 404페이지 / true => fallback 페이지
  }
}

export const getStaticProps:GetStaticProps = async({params}) => {
  const postData = await getPostData(params?.id as string)
  return{
    props:{
      postData
    }
  }
}

