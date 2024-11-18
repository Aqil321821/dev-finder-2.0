import { useContext } from 'react';
import cross from '../layout/assets/Cross.png';

import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && <img src={cross} alt='x' className='w-6 h-6 mt-1' />}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}
//

export default Alert;
