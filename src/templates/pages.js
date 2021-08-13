import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SiteTitle from '../components/SEO/SiteTitle';
import Container from '../components/Container';

// ---

export const query = graphql`
  query ($slug: String!) {
    page: strapiPages(slug: { eq: $slug }) {
      title
      page_seo {
        include_site_title
        site_title_override
      }
    }
  }
`;

const Page = ({ data }) => {
  if (!data) {
    throw Error;
  }

  const { page } = data;
  const { page_seo: seo } = page;

  return (
    <>
      {seo.site_title_override && (
        <SiteTitle
          pageTitle={page.title}
          customTitle={seo.site_title_override}
          includeSiteTitle={seo.include_site_title}
        />
      )}

      <Container>
        <p>{page && page.title}</p>
      </Container>
    </>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

Page.defaultProps = {
  data: null,
};

export default Page;
