##@@## ${relativeFileDirnameSplit[-1]}
import PropTypes from 'prop-types';

import * as S from './${relativeFileDirnameSplit[-1]}.styles';

export function ${relativeFileDirnameSplit[-1]}({ data }) {
  console.log("${relativeFileDirnameSplit[-1]}", data);

  return(
    <S.${relativeFileDirnameSplit[-1]}>
      ${relativeFileDirnameSplit[-1]}
    </S.${relativeFileDirnameSplit[-1]}>
  )
}

${relativeFileDirnameSplit[-1]}.propTypes = {
  data: PropTypes.object.isRequired,
}