import style from './SpinnerLoader.module.scss';
import Loader from 'react-loader-spinner';

const WhiteSpinnerLoader = () => (
  <div className={style.Loader}>
    <Loader
      type="TailSpin"
      color="#ffffff"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
);

export default WhiteSpinnerLoader;
