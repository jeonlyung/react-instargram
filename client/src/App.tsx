import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, User } from "lucide-react";
// utils 파일 import 추가(cn 가져오기 --> CSS 클래스 이름을 병합하고 중복을 제거)
import { cn } from './lib/utils'; 

// 데이터 하드 코딩 --> 나중에 DB 데이터 가져오기
const posts = [
  {
    id: 1,
    username: 'hsj',
    userImage: 'https://i.pravatar.cc/150?img=1',
    postImage: 'https://picsum.photos/id/1/600/600',
    likes: 1,
    caption: '행복하세요...',
  },
  {
    id: 2,
    username: 'user',
    userImage: 'https://i.pravatar.cc/150?img=2',
    postImage: 'https://picsum.photos/id/2/600/600',
    likes: 1,
    caption: '꼭 행복하세요...',
  },
];

function App() {
  return (
    <div className={cn("min-h-screen bg-gray-100", "pt-4")}>
      <header className={cn("bg-white border-b", "sticky top-0 z-10")}>
        <div className={cn("max-w-5xl mx-auto px-4 py-2", "flex justify-between items-center")}>
          <h1 className="text-xl font-bold">Nonshim Instagram</h1>
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

      <main className={cn("max-w-lg mx-auto", "py-8 space-y-8")}>
        {posts.map((post) => (
          <Card key={post.id} className={cn("rounded-lg shadow-md", "mb-8 bg-white")}>
            <CardHeader className={cn("flex items-center", "space-x-4 p-4")}>
              <Avatar>
                <AvatarImage src={post.userImage} alt={post.username} />
                <AvatarFallback>{post.username[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.username}</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <MoreHorizontal className="h-6 w-6" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <img src={post.postImage} alt="Post" className="w-full rounded-t-lg" />
            </CardContent>
            <CardFooter className="p-4 flex flex-col space-y-2">
              <div className={cn("flex justify-between", "w-full mb-4")}>
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
