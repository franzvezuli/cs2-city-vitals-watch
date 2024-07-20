import { ModRegistrar } from 'cs2/modding';

import { VitalsButton } from './components/VitalsButton';

const register: ModRegistrar = (moduleRegistry) => {
  moduleRegistry.append('GameTopRight', VitalsButton);
};

export default register;
