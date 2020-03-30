import styled from 'styled-components';

import { Form as _Form } from 'formik';

export const Form = styled(_Form)`
  margin: 0 auto;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.9;
  flex-direction: column;

  border-radius: 20px;
`;
