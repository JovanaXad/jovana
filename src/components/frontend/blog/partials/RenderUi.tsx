import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  Line,
  Image,
  Text,
  Loading,
} from "src/components/ui";
import { RenderUiProps } from "../types";
import uniqid from "uniqid";
import Link from "next/link";

const BlogModal = (props: {
  blog:
    | {
        photo: string;
        created: Date;
        title: string;
        description: string;
        _id: string;
      }
    | any;
}): JSX.Element => {
  const { blog } = props;

  return (
    <ContentContainer className="blog__modal-container">
      <ContentContainer className="blog__modal-image-container">
        <Image
          alt="img"
          src={blog.photo}
          type="base64"
          className="blog__modal-image"
        />
      </ContentContainer>
      <ContentContainer className="blog__modal-content">
        <Text className="blog__modal-date" as="span">
          {blog.created}
        </Text>
        <Heading className="blog__modal-heading" as="h3">
          {blog.title}
        </Heading>
        <Text className="blog__modal-text" as="p">
          {blog.description.substr(0, 400)}...
        </Text>
        <ContentContainer>
          <Link href={`/${blog._id}`}>
            <a className="blog__modal-link">Procitaj sve</a>
          </Link>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

const RenderUi = (props: RenderUiProps): JSX.Element => {
  const { blogData } = props;
  return (
    <ContentContainer className="blog">
      <SubContainer className="blog__sub-container">
        <Heading className="blog__heading" as="h1">
          Blog
        </Heading>
        <Line>
          <Line.SmallLine />
          <Line.LargeLine />
        </Line>
        <>
          {blogData.length ? (
            blogData.map(
              (blog): JSX.Element => <BlogModal key={uniqid()} blog={blog} />
            )
          ) : (
            <Loading height="50vh" />
          )}
        </>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
