import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";

const Wrapper = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  background-color: orange;
  width: 200px;
`;

const Body = styled.div``;

// const HIDDEN_HEADERS = [];

const HIDDEN_FOOTERS = ["/13-01-layout-hidden"];

interface IProps {
  children: ReactChild;
}
export default function Layout(props: IProps) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutHeader />
      <BodyWrapper>
        <SideMenu>사이드메뉴</SideMenu>
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
