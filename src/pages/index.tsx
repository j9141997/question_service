import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import Button from '@material-ui/core/Button';

type Props = {
  data: {
    data?: []
  }
}

type post = {
  id: number
  title?: string
}

function Index(props: Props) {
  return (
    <div>
      <ul>
        {props.data.data.map((post: post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary">
        質問する
      </Button>
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