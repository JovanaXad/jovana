import React, { useEffect } from "react";
import { useInjectSaga } from "src/utils/injectSaga";
import { useInjectReducer } from "src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";
import { RenderUi } from "./partials";

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [blogData.length, dispatch]);

  return <RenderUi blogData={blogData} />;
};

export default Blog;
