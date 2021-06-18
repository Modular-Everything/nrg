import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/Container';

//

export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;

const Post = ({ data }) => {
  if (!data) {
    throw Error;
  }

  const { post } = data;

  return (
    <>
      <Container>
        <p>{post && post.title}</p>
      </Container>
    </>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object,
};

Post.defaultProps = {
  data: null,
};
