import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

// ---

const SiteTitle = ({ pageTitle, customTitle, includeSiteTitle }) => {
  const meta = useStaticQuery(graphql`
    {
      seo: strapiGlobalSeoSettings(strapiId: { eq: 1 }) {
        site_title
      }
    }
  `);

  const title = customTitle || pageTitle;

  return (
    <Helmet>
      <title>
        {includeSiteTitle ? `${title} | ${meta.seo.site_title}` : title}
      </title>
    </Helmet>
  );
};

SiteTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  customTitle: PropTypes.string,
  includeSiteTitle: PropTypes.bool,
};

SiteTitle.defaultProps = {
  customTitle: null,
  includeSiteTitle: true,
};

export default SiteTitle;
