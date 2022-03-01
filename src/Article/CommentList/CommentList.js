import Comment from './Comment/Comment.js'

export default function CommentList() {
  return <div>
      <Comment content = {'text'} author ={'tamir'} />
      <Comment content = {'mor text'} author ={'david'} />
      <Comment content = {' another text'} author ={'yossi'} />

  </div>;


}