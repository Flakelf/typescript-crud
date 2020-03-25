import React from 'react';

import { HourGlass } from './styled';

interface ILoaderProps {
  coolColored?: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ coolColored }: ILoaderProps): JSX.Element => (
  <HourGlass className='loader' coolColored={coolColored} />
);

export { Loader };
