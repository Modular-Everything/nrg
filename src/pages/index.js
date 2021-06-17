import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';

//

const HomePage = () => {
  const query = graphql`
    query TestQuery {
      page: sanityPage(slug: { current: { regex: "/homepage/" } }) {
        title
      }
    }
  `;

  const { page } = useStaticQuery(query);

  return (
    <>
      <Container>
        <p>{page && page.title}</p>
      </Container>
    </>
  );
};

export default HomePage;
