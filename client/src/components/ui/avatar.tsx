import React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "../../lib/utils"

//컴포넌트 속성타입
type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>;

//forwardRef : ref를 통해 부모 컴포넌트가 자식 컴포넌트에 접근할 수 있도록 설정
const Avatar = React.forwardRef<
  //엘리먼트 참조타입
  React.ElementRef<typeof AvatarPrimitive.Root>, 
  AvatarProps
>(({ className = "", ...props }, ref) => (//className = "" 선언시 className = undefined 방어 로직
  <AvatarPrimitive.Root
    ref={ref}
    //cn : className들을 병합하는 유틸리티 함수
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
//displayName을 설정 : 개발자 도구에서 컴포넌트의 이름을 명확하게 확인 가능
Avatar.displayName = AvatarPrimitive.Root.displayName

//AvatarImage : Avatar 실제 이미지가 들어가는 컴포넌트
const AvatarImage = React.forwardRef<
  //엘리먼트 참조타입
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className = "", ...props }, ref) => (//className = "" 선언시 className = undefined 방어 로직
  <AvatarPrimitive.Image
    ref={ref}
    //cn : className들을 병합하는 유틸리티 함수
    //aspect-square : 가로와 세로 비율 1:1로 설정
    //h-full w-full : 부모 요소 높이,너비 가득 채움
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
//displayName을 설정 : 개발자 도구에서 컴포넌트의 이름을 명확하게 확인 가능
AvatarImage.displayName = AvatarPrimitive.Image.displayName

//AvatarFallback : 이미지 로드에 실패하였을 때 표시되는 대체 요소
const AvatarFallback = React.forwardRef<
  //엘리먼트 참조타입
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className = "", ...props }, ref) => (//className = "" 선언시 className = undefined 방어 로직
  <AvatarPrimitive.Fallback
    ref={ref}
    //cn : className들을 병합하는 유틸리티 함수
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
//displayName을 설정 : 개발자 도구에서 컴포넌트의 이름을 명확하게 확인 가능
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

//Avatar, AvatarImage, AvatarFallback 내보내기
export { Avatar, AvatarImage, AvatarFallback }