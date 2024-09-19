import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

// 버튼 스타일 cva로 정의
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        //기본 크기
        default: "h-10 py-2 px-4",
        //작은 크기
        sm: "h-9 px-3 rounded-md",
        //큰 크기
        lg: "h-11 px-8 rounded-md",
        //아이콘
        icon: "h-10 w-10",
      },
    },
    //기본 설정
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

//버튼의 HTML 속성(ButtonHTMLAttributes)과 buttonVariants의 variant, size 옵션을 추가로 포함합니다.
//asChild: 버튼을 감싸는 대신 다른 컴포넌트와 조합할 수 있는 플래그
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    //asChild - true  : React.Fragment 렌더링
    //asChild - false : button 요소 렌더링
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
//displayName을 설정 : 개발자 도구에서 컴포넌트의 이름을 명확하게 확인 가능
Button.displayName = "Button"

//Button, buttonVariants 내보내기
export { Button, buttonVariants }