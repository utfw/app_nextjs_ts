import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = path.join(process.cwd(), 'posts');
// 파일주소를 문자열로 할당.

export function getSortedPostsData(){
  const fileNames = fs.readdirSync(postsDirectory); 
  //해당 주소의 파일 이름을 가져옴
  // console.log(fileNames);  

  const allPostsData = fileNames.map(fileName =>{
    const id = fileName.replace(/\.md$/,''); // 아이디를 지정
    
    const fullPath = path.join(postsDirectory, fileName); // posts 폴더 내 파일명
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents); //md 파일을 객체로 변환
    return{ // 해당 파일의 내용 중 date, title을 반환함 + 위에서 설정한 id까지.
      id,
      ...(matterResult.data as {date:string,title:string}) // type assetion : 타입을 정해줘야함
    } // allPostsData
  })
  return allPostsData.sort((a,b) =>{
    if(a.date < b.date){ //숫자는 sort로 정렬이 안됨.
      return 1
    } else return -1
  })
} // getStaticProps함수를 async로 export하면 getStaticProps에서 반환(return) 되는 props를 가지고 페이지를 pre-render. 빌드 시 페이지를 렌더링한다. 

export function getAllPostIds(){ // 주소값으로 사용하기 위해 아이디를 가져옴. 
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(file =>{
    return{
      params: {
        id: file.replace(/.\md$/,'') //파일명에서 .md를 지움.
      }
    }
  })
}

export async function getPostData(id:string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as {date:string,title:string})
  }
}