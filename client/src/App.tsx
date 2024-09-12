import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, User } from "lucide-react"

const posts = [
  {
    id: 1,
    username: 'user1',
    userImage: 'https://i.pravatar.cc/150?img=1',
    postImage: 'https://picsum.photos/id/1/600/600',
    likes: 100,
    caption: '아름다운 날씨!',
  },
  {
    id: 2,
    username: 'user2',
    userImage: 'https://i.pravatar.cc/150?img=2',
    postImage: 'https://picsum.photos/id/2/600/600',
    likes: 200,
    caption: '맛있는 점심!',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">Instagram Clone</h1>
          <nav className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Home className="h-6 w-6" />
              <span className="sr-only">홈</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">메시지</span>
            </Button>
            <Button variant="ghost" size="icon">
              <PlusSquare className="h-6 w-6" />
              <span className="sr-only">만들기</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-lg mx-auto py-8">
        {posts.map((post) => (
          <Card key={post.id} className="mb-8">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.userImage} alt={post.username} />
                <AvatarFallback>{post.username[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.username}</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img src={post.postImage} alt="Post" className="w-full" />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex justify-between w-full mb-4">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-6 w-6" />
                    <span className="sr-only">좋아요</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-6 w-6" />
                    <span className="sr-only">댓글</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Send className="h-6 w-6" />
                    <span className="sr-only">공유</span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-6 w-6" />
                  <span className="sr-only">저장</span>
                </Button>
              </div>
              <p className="font-semibold mb-2">{post.likes} 좋아요</p>
              <p><span className="font-semibold">{post.username}</span> {post.caption}</p>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}

export default App;