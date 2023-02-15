"use client";
import "./global.css";
import ProvidersWrapper from "./ProvidersWrapper";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ProvidersWrapper>
          <RecoilRoot>{children}</RecoilRoot>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
