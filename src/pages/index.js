import React from 'react';

import Container from '../components/Container';
import AutoLayout from '../components/AutoLayout';
import BodyCopy from '../components/BodyCopy';

//

const Homepage = () => {
  console.log('home');

  return (
    <>
      <AutoLayout>
        <Container>
          <h1>NRG</h1>
        </Container>

        <Container clamp>
          <BodyCopy
            title="Copy Title Here"
            copy={[
              'Sed ut perspiciatis unde omnis iste natus error  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi architecto beatae vitae dicta sun.',
              'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            ]}
            columns={1}
          />
        </Container>
      </AutoLayout>
    </>
  );
};

export default Homepage;
