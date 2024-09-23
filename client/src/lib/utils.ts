//동적 클래스를 효율적으로 처리하는 유틸리티 - 다양한 타입의 입력을 받아서 유효한 CSS 클래스 이름 문자열을 반환
import { type ClassValue, clsx } from "clsx"
//Tailwind CSS 클래스 병합 라이브러리 - 중복되거나 충돌하는 Tailwind 클래스가 있을 때 자동으로 병합
import { twMerge } from "tailwind-merge"

//다양한 입력을 받아 clsx와 twMerge를 이용하여 클래스명을 합친다.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}