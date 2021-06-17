import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/Container';

//

export const query = graphql`
  query ($slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;

const Page = ({ data }) => {
  if (!data) {
    throw Error;
  }

  const { page } = data;

  return (
    <>
      <Container>
        <p>{page && page.title}</p>
      </Container>
    </>
  );
};

export default Page;

Page.propTypes = {
  data: PropTypes.object,
};

Page.defaultProps = {
  data: null,
};
