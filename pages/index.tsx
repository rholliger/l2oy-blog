import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import LayoutContainer from '../components/LayoutContainer'

const StyledContainer = styled.div`
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 60px 60px;
`

const HalfWidthPost = styled.div`
  width: calc(50% - 30px);
  background-color: ${({ theme }) => theme.background};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    /* box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px; */
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.02) 0px 4px 10px, rgba(17, 17, 26, 0.01) 0px 12px 20px;
    transition: box-shadow 0.4s ease-out;
  }
`

const FullWidthPost = styled.div`
  display: flex;
  width: 100%;
  /* height: 300px; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.07) 0px 10px 10px -5px;
`

const FullWidthPostImage = styled.img`
  width: calc(50% - 30px);
  height: 100%;
  /* padding: 4px; */
  /* border-top: 4px solid #00351e; */
`

const HalfWidthPostImage = styled.img`
  width: 100%;
  height: 200px;
  /* padding: 4px; */
  /* border-top: 4px solid #00351e; */
`

const PostTextContainer = styled.div`
  padding: 20px 20px;
`

const PostMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`

const ReadMoreLink = styled.span`
  color: #00351e;
`

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <FullWidthPost>
        <FullWidthPostImage src="https://images.unsplash.com/photo-1641002487920-0c3d5ca4573e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />
        <PostTextContainer>
          <PostMetadata>
            <span>04.01.2022</span>
            <span>Tech</span>
            <span>Roy Holliger</span>
          </PostMetadata>
          <h2>This is a test title</h2>
          <p>
            This is a test text lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor{' '}
          </p>
          <ReadMoreLink>Read more...</ReadMoreLink>
        </PostTextContainer>
      </FullWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1641002487920-0c3d5ca4573e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />
        <PostTextContainer>
          <PostMetadata>
            <span>04.01.2022</span>
            <span>Tech</span>
            <span>Roy Holliger</span>
          </PostMetadata>
          <h2>This is a test title</h2>
          <p>
            This is a test text lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor{' '}
          </p>
          <ReadMoreLink>Read more...</ReadMoreLink>
        </PostTextContainer>
      </HalfWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        <PostTextContainer>
          <h2>This is a test title</h2>
          <p>This is a test text lorem ipsum dolor</p>
        </PostTextContainer>
      </HalfWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" />
        <PostTextContainer>
          <h2>This is a test title</h2>
          <p>This is a test text lorem ipsum dolor</p>
        </PostTextContainer>
      </HalfWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1637247475751-0cbe92e86d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        <PostTextContainer>
          <h2>This is a test title</h2>
          <p>This is a test text lorem ipsum dolor</p>
        </PostTextContainer>
      </HalfWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1637247474560-d6d681aa7a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        <PostTextContainer>
          <h2>This is a test title</h2>
          <p>This is a test text lorem ipsum dolor</p>
        </PostTextContainer>
      </HalfWidthPost>
      <FullWidthPost>
        <FullWidthPostImage src="https://images.unsplash.com/photo-1641002487920-0c3d5ca4573e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />
        <PostTextContainer>
          <PostMetadata>
            <span>04.01.2022</span>
            <span>Tech</span>
            <span>Roy Holliger</span>
          </PostMetadata>
          <h2>This is a test title</h2>
          <p>
            This is a test text lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor{' '}
          </p>
          <ReadMoreLink>Read more...</ReadMoreLink>
        </PostTextContainer>
      </FullWidthPost>
      {/* <FullWidthPost>Hello World</FullWidthPost>
      <HalfWidthPost>
        <HalfWidthPostImage src="https://images.unsplash.com/photo-1641002487920-0c3d5ca4573e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />
        <PostTextContainer>
          <h2>This is a test title</h2>
          <p>This is a test text lorem ipsum dolor</p>
        </PostTextContainer>
      </HalfWidthPost>
      <HalfWidthPost>Hello World</HalfWidthPost>
      <FullWidthPost>Hello World</FullWidthPost> */}
    </StyledContainer>
  )
}

export default Home
