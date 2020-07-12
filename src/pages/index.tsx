import React from 'react'
import Link from 'next/link'
import axios from 'axios';

type Props = {
  data: {
    data: []
  }
}

function Index(props: Props) {
  return (
    <div>
      <ul>
        {props.data.data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3001/api/v1/posts')
    console.log(res.data);
    return {
      props: {
        data: res.data
      }
    }
  } catch(e) {
    console.log(e);
    return;
  }
}

export default Index