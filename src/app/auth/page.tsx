"use client";

import React, { type ReactElement, useState } from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../shared/components/buttons/Button";
import { Checkbox } from "../shared/components/inputs/Checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../shared/components/inputs/Form";
import { Input } from "../shared/components/inputs/Input";
import { Alert, AlertDescription } from "../shared/components/ui/Alert";
import { Separator } from "../shared/components/ui/Separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../shared/components/ui/Tabs";
import { useToast } from "../shared/hooks/use-toast";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Define authentication schemas
const loginSchema = z.object({
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
  rememberMe: z.boolean().optional()
});

const registerSchema = z
  .object({
    name: z.string().min(2, { message: "이름을 입력해주세요." }),
    email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
    password: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
    confirmPassword: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "서비스 이용약관에 동의해주세요."
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"]
  });

const Login = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const { toast } = useToast();

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  // Register form
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false
    }
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>): void => {
    setLoginError(null);
    // Here you would typically handle login with your authentication service
    console.log("Login submitted:", values);
    toast({
      title: "로그인 시도 중",
      description: "아직 백엔드 연동이 되지 않았습니다."
    });
  };

  const onRegisterSubmit = (values: z.infer<typeof registerSchema>): void => {
    setRegisterError(null);
    // Here you would typically handle registration with your authentication service
    console.log("Registration submitted:", values);
    toast({
      title: "회원가입 시도 중",
      description: "아직 백엔드 연동이 되지 않았습니다."
    });
  };

  const handleSocialLogin = (provider: string): void => {
    console.log(`Attempting to login with ${provider}`);
    toast({
      title: `${provider} 로그인`,
      description: "아직 소셜 로그인 연동이 되지 않았습니다."
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-6">
        <div className="flex justify-center mb-8">
          <Link href="/" className="text-3xl font-bold text-primary">
            Hand Letter
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">로그인</TabsTrigger>
              <TabsTrigger value="register">회원가입</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              {loginError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}

              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비밀번호</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <FormField
                      control={loginForm.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="rememberMe"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <label
                            htmlFor="rememberMe"
                            className="text-sm text-gray-600 cursor-pointer"
                          >
                            로그인 상태 유지
                          </label>
                        </div>
                      )}
                    />
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      비밀번호 찾기
                    </a>
                  </div>

                  <Button type="submit" className="w-full">
                    로그인
                  </Button>
                </form>
              </Form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-500">
                      소셜 계정으로 로그인
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialLogin("Google")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_13183_10121)">
                        <path
                          d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                          fill="#3E82F1"
                        />
                        <path
                          d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                          fill="#32A753"
                        />
                        <path
                          d="M5.08857 11.9169C4.66913 10.6749 4.66913 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                          fill="#F9BB00"
                        />
                        <path
                          d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                          fill="#E74133"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13183_10121">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#03C75A] text-white hover:bg-[#03C75A]/90"
                    onClick={() => handleSocialLogin("Naver")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5615 10.704L6.14588 0H0V20H6.43845V9.296L13.8541 20H20V0H13.5615V10.704Z"
                        fill="white"
                      />
                    </svg>
                    Naver
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90"
                    onClick={() => handleSocialLogin("Kakao")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.47715 0 0 3.58173 0 8C0 10.8779 1.63839 13.3887 4.11047 14.8648L3.04632 19.5043C3.00684 19.6477 3.02883 19.8023 3.10507 19.9278C3.18131 20.0534 3.30407 20.1383 3.44779 20.1614C3.59151 20.1846 3.73855 20.143 3.8499 20.0475L9.14323 16.4253C9.42527 16.4748 9.71036 16.5 10 16.5C15.5228 16.5 20 12.9183 20 8C20 3.58173 15.5228 0 10 0Z"
                        fill="#191919"
                      />
                    </svg>
                    Kakao
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              {registerError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{registerError}</AlertDescription>
                </Alert>
              )}

              <Form {...registerForm}>
                <form
                  onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비밀번호</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비밀번호 확인</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <div className="flex items-start space-x-2 mt-2">
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                        <div>
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-700 cursor-pointer"
                          >
                            <span>Invitify의 </span>
                            <a
                              href="#"
                              className="text-primary hover:underline"
                            >
                              서비스 이용약관
                            </a>
                            <span>과 </span>
                            <a
                              href="#"
                              className="text-primary hover:underline"
                            >
                              개인정보 처리방침
                            </a>
                            <span>에 동의합니다.</span>
                          </label>
                          <FormMessage />
                        </div>
                      </div>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    회원가입
                  </Button>
                </form>
              </Form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-500">
                      소셜 계정으로 회원가입
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialLogin("Google")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_13183_10121)">
                        <path
                          d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                          fill="#3E82F1"
                        />
                        <path
                          d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                          fill="#32A753"
                        />
                        <path
                          d="M5.08857 11.9169C4.66913 10.6749 4.66913 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                          fill="#F9BB00"
                        />
                        <path
                          d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                          fill="#E74133"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13183_10121">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#03C75A] text-white hover:bg-[#03C75A]/90"
                    onClick={() => handleSocialLogin("Naver")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5615 10.704L6.14588 0H0V20H6.43845V9.296L13.8541 20H20V0H13.5615V10.704Z"
                        fill="white"
                      />
                    </svg>
                    Naver
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90"
                    onClick={() => handleSocialLogin("Kakao")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.47715 0 0 3.58173 0 8C0 10.8779 1.63839 13.3887 4.11047 14.8648L3.04632 19.5043C3.00684 19.6477 3.02883 19.8023 3.10507 19.9278C3.18131 20.0534 3.30407 20.1383 3.44779 20.1614C3.59151 20.1846 3.73855 20.143 3.8499 20.0475L9.14323 16.4253C9.42527 16.4748 9.71036 16.5 10 16.5C15.5228 16.5 20 12.9183 20 8C20 3.58173 15.5228 0 10 0Z"
                        fill="#191919"
                      />
                    </svg>
                    Kakao
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          <Link href="/" className="text-primary hover:underline">
            홈으로 돌아가기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
