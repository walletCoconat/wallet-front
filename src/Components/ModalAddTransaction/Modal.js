import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
import sprite from '../../images/sprite.svg';
import Datetime from 'react-datetime';
import Switch from '../Switch';

const Modal = ({ isShowing, hide, toggler }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={isShowing ? style.ModalActive : style.Modal}
            onClick={() => {
              hide(false);
            }}
          >
            <div
              className={style.ModalContent}
              onClick={e => e.stopPropagation()}
            >
              <button className={style.BtnClose}>
                <svg width="16" height="16">
                  <use xlinkHref={`${sprite}#icon-close`}></use>
                </svg>
              </button>

              <h2>Add Transaction</h2>

              <form>
                <Switch onClick={toggler} />
                {toggler ? (
                  <span className={style.Text}>Доход</span>
                ) : (
                  <span className={style.Text}>Расход</span>
                )}

                <div>
                  <label>
                    <input></input>
                  </label>

                  <Datetime
                    dateFormat="DD-MM-YYYY"
                    timeFormat={false}
                    className={style.Datetime}
                  />
                  <svg>
                    <use xlinkHref={`${sprite}#icon-newdate`}></use>
                  </svg>
                </div>
                <div className={style.BtnBox}>
                  <button type="submit" className={style.Button}>
                    Добавить
                  </button>
                  <button type="submit" className={style.Button}>
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default Modal;

// интерфейс для пропсов
// interface ModalProps {
//     visible: boolean
//     title: string
//     content: ReactElement | string
//     footer: ReactElement | string
//     onClose: () => void
// }

// const Modal = ({
//                    visible = false,
//                    title = '',
//                    content = '',
//                    footer = '',
//                    onClose,
//                }: ModalProps) => {

//     // создаем обработчик нажатия клавиши Esc
//     const onKeydown = ({key}: KeyboardEvent) => {
//         switch (key) {
//             case 'Escape':
//                 onClose()
//                 break
//         }
//     }

// c помощью useEffect цепляем обработчик к нажатию клавиш
// https://ru.reactjs.org/docs/hooks-effect.html
// React.useEffect(() => {
//     document.addEventListener('keydown', onKeydown)
//     return () => document.removeEventListener('keydown', onKeydown)
// })

// если компонент невидим, то не отображаем его
// if (!visible) return null;

// или возвращаем верстку модального окна
//     return <div className="modal" onClick={onClose}>
//         <div className="modal-dialog" onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//                 <h3 className="modal-title">{title}</h3>
//                 <span className="modal-close" onClick={onClose}>
//             &times;
//           </span>
//             </div>
//             <div className="modal-body">
//                 <div className="modal-content">{content}</div>
//             </div>
//             {footer && <div className="modal-footer">{footer}</div>}
//         </div>
//     </div>
// }

// const App = () => {
//     const [isModal, setModal] = React.useState(false)
//     const onClose = () => setModal(false)
//     return (
//         <React.Fragment>
//             <button onClick={() => setModal(true)}>Клик-клик-клик</button>
//             <Modal
//                 visible={isModal}
//                 title="Заголовок"
//                 content={<p>Что-то важное</p>}
//                 footer={<button onClick={onClose}>Закрыть</button>}
//                 onClose={onClose}
//             />
//         </React.Fragment>
//     );
// };
